import { writeFile } from "node:fs/promises";
import _ from "lodash";
import prettier from "prettier";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { ModelManager } from "@glazed/devtools";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

if (!process.env.SEED) {
  throw new Error("Missing SEED environment variable");
}

if (!process.env.CERAMIC_HOST) {
  throw new Error("Missing CERAMIC_HOST environment variable");
}

if (process.argv.length < 3) {
  throw new Error("Usage: create-model.mjs <Class>");
}

const className = process.argv[2];

// The seed must be provided as an environment variable
const seed = fromString(process.env.SEED, "base16");
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(seed),
  resolver: getResolver(),
});
await did.authenticate();

// Connect to the local Ceramic node
const ceramic = new CeramicClient(process.env.CERAMIC_HOST);
ceramic.did = did;

// Create a manager for the model
const manager = new ModelManager(ceramic);

async function replaceSchemaReferences(schema, mainSchema) {
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
    await replaceSchemaReferences(schema.items, mainSchema ?? schema);
  }
  if (schema.type === "object") {
    if (schema.properties != null) {
      for (let i = 0; i < Object.values(schema.properties).length; i++) {
        const prop = Object.values(schema.properties)[i];
        await replaceSchemaReferences(prop, mainSchema ?? schema);
      }
    }

    if (schema.definitions != null) {
      for (let i = 0; i < Object.values(schema.definitions).length; i++) {
        const prop = Object.values(schema.definitions)[i];
        await replaceSchemaReferences(prop, mainSchema ?? schema);
      }
    }
  }

  // Update oneOf, anyOf, allOf
  for (let x = 0; x < ["oneOf", "anyOf", "allOf"].length; x++) {
    const key = ["oneOf", "anyOf", "allOf"][x];
    if (schema[key] != null) {
      for (let y = 0; y < schema[key].length; y++) {
        const prop = schema[key][y];
        await replaceSchemaReferences(prop, mainSchema ?? schema);
      }
    }
  }
}

const schema = require(`../schemas/${className}.schema.json`);
await replaceSchemaReferences(schema);

const schemaId = await manager.createSchema(className, schema);
console.log(`Created schema ${className} -> ${schemaId}`);

// Write model to JSON file
await writeFile(
  new URL("model.json", import.meta.url),
  JSON.stringify(manager.toJSON())
);
console.log("Encoded model written to scripts/model.json file");
