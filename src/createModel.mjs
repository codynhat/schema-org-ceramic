import _ from "lodash";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

async function replaceSchemaReferences(manager, schema, mainSchema) {
  if (schema["$ref"] && schema["$ref"].startsWith("schema:")) {
    const alias = schema["$ref"].split("schema:")[1];
    const newSchema = require(`../schemas/${alias}.schema.json`);
    let schemaId = manager.getSchemaID(alias);
    if (!schemaId) {
      schemaId = await manager.createSchema(alias, newSchema);
      console.log(`Created schema ${alias} -> ${schemaId}`);

      mainSchema["definitions"] = {
        ...mainSchema.definitions,
        [`${alias}StreamId`]: {
          type: "string",
          maxLength: 150,
          $comment: `cip88:ref:ceramic://${schemaId}`,
        },
      };
    }

    // Replace $ref with CIP-82
    schema["$ref"] = `#/definitions/${alias}StreamId`;
    return;
  }
  if (schema.type === "array") {
    await replaceSchemaReferences(manager, schema.items, mainSchema ?? schema);
  }
  if (schema.type === "object") {
    if (schema.properties != null) {
      for (let i = 0; i < Object.values(schema.properties).length; i++) {
        const prop = Object.values(schema.properties)[i];
        await replaceSchemaReferences(manager, prop, mainSchema ?? schema);
      }
    }

    if (schema.definitions != null) {
      for (let i = 0; i < Object.values(schema.definitions).length; i++) {
        const prop = Object.values(schema.definitions)[i];
        await replaceSchemaReferences(manager, prop, mainSchema ?? schema);
      }
    }
  }

  // Update oneOf, anyOf, allOf
  for (let x = 0; x < ["oneOf", "anyOf", "allOf"].length; x++) {
    const key = ["oneOf", "anyOf", "allOf"][x];
    if (schema[key] != null) {
      for (let y = 0; y < schema[key].length; y++) {
        const prop = schema[key][y];
        await replaceSchemaReferences(manager, prop, mainSchema ?? schema);
      }
    }
  }
}

export async function createModel(manager, className) {
  const schema = require(`../schemas/${className}.schema.json`);
  await replaceSchemaReferences(manager, schema);

  const schemaId = await manager.createSchema(className, schema);
  console.log(`Created schema ${className} -> ${schemaId}`);
}
