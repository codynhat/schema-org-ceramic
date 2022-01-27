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
import { createModel } from "../src/createModel.mjs";

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

await createModel(manager, className);

// Write model to JSON file
await writeFile(
  new URL("model.json", import.meta.url),
  JSON.stringify(manager.toJSON())
);
console.log("Encoded model written to scripts/model.json file");
