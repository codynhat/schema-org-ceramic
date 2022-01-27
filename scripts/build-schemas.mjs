import { writeFile } from "node:fs/promises";
import SchemaOrg from "schema-org-json-schemas";
import _ from "lodash";
import { createRequire } from "module";
import prettier from "prettier";
const require = createRequire(import.meta.url);
const hardcodedSchemas = require("../hardcoded-schemas.json");

function replaceAllOf(schema) {
  if (schema["allOf"]) {
    schema["allOf"] = schema["allOf"].map((ref) => {
      if (ref["$ref"] && ref["$ref"].startsWith("schema:")) {
        ref["$ref"] = ref["$ref"].replace("schema:", "#/definitions/");
      }
      return ref;
    });
  }

  return schema;
}

function addDefinition(schema, definitions, definitionKey) {
  schema["definitions"] = {
    ...schema.definitions,
    [definitionKey]: definitions[definitionKey],
  };

  return schema;
}

function addParentDefinitions(definitions, schemaFrom, schemaTo) {
  if (schemaFrom["allOf"]) {
    for (let i = 0; i < schemaFrom["allOf"].length; i++) {
      const ref = schemaFrom["allOf"][i];
      if (ref["$ref"]) {
        const definitionKey = ref["$ref"].split("/")[2];

        // Add definition
        addDefinition(schemaTo ?? schemaFrom, definitions, definitionKey);

        // Recursively add parent's parent definitions
        addParentDefinitions(
          definitions,
          definitions[definitionKey],
          schemaTo ?? schemaFrom
        );
      }
    }
  }

  return schemaTo ?? schemaFrom;
}

// Replace allOf references
Object.keys(SchemaOrg).forEach((key) => {
  SchemaOrg[key] = replaceAllOf(SchemaOrg[key]);
  SchemaOrg[key]["$schema"] = "http://json-schema.org/draft-07/schema#";
  delete SchemaOrg[key]["$id"];
});

// Create all classes as definitions
let definitions = {
  ..._.cloneDeep(SchemaOrg),
  ...hardcodedSchemas,
};
Object.keys(definitions).forEach((key) => {
  delete definitions[key]["$schema"];
});

// Add needed definitions
Object.keys(SchemaOrg).forEach((key) => {
  addParentDefinitions(definitions, SchemaOrg[key]);
});

// Write schemas
await Promise.all(
  Object.keys(SchemaOrg).map((key) => {
    return writeFile(
      new URL(`../schemas/${key}.schema.json`, import.meta.url),
      prettier.format(JSON.stringify(SchemaOrg[key]), { parser: "json" })
    );
  })
);

console.log("Wrote all schemas to schemas/");
