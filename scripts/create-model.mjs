import { readFile, writeFile } from "node:fs/promises";
import _ from "lodash";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { ModelManager } from "@glazed/devtools";
import { DID } from "dids";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString } from "uint8arrays";
import SchemaOrg from "schema-org-json-schemas";
import { createModel } from "../index.mjs";
import prettier from "prettier";

if (!process.env.SEED) {
  throw new Error("Missing SEED environment variable");
}

if (!process.env.CERAMIC_HOST) {
  throw new Error("Missing CERAMIC_HOST environment variable");
}

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

// Load existing model
try {
  const existingModel = JSON.parse(
    await readFile(new URL("model.json", import.meta.url))
  );

  manager.addJSONModel(existingModel);
} catch (err) {}

for (let i = 0; i < Object.keys(SchemaOrg).length; i++) {
  const key = Object.keys(SchemaOrg)[i];

  const schema = await createModel(ceramic, manager, key);

  await writeFile(
    new URL(`../schemas-ceramic/${key}.schema.json`, import.meta.url),
    prettier.format(JSON.stringify(schema), { parser: "json" })
  );
}

// Write model to JSON file
await writeFile(
  new URL("model.json", import.meta.url),
  JSON.stringify(manager.toJSON())
);
console.log("Encoded model written to scripts/model.json file");
