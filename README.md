# schema-org-ceramic

A small project that converts [Schema.org](https://schema.org) schemas to JSON schemas suitable for use in [Ceramic](https://ceramic.network).

## Usage

```js
import { createModel } from "schema-org-ceramic";

await createModel(ceramic, manager, "Thing");
```

A schema will be created for the object `Thing` and added to the `manager` instance.

## Example

The [Geo Web](https://www.geoweb.network) is currently using this repo as one of the sources for schemas. See an example [here](https://github.com/Geo-Web-Project/datamodels/tree/main/scripts).

## Details

[schema-org-json-schemas](https://github.com/charlestati/schema-org-json-schemas) converts Schema.org models to JSON schemas. However, the schemas are not quite ready for use in Ceramic due to two things:

1. Subclasses use `allOf` to refer to other schema IDs, which is not supported in `js-ceramic`
2. Schemas contain references to other schemas using `ref`

### Subclasses

Subclasses are handled by including super classes under the definitions of the schemas and replacing the `allOf` reference with a definition.

This will result in large schemas, as `Thing`, for example, will be redefined in every schema.

### References

Primitive types are defined inline, which is not an issue.

Properties that are more complicated types use `ref` to refer to another schema. These are replaced with [CIP-82](https://github.com/ceramicnetwork/CIP/blob/main/CIPs/CIP-82/CIP-82.md) references.

This results in every `ref` turning into a reference to another Ceramic stream with a different schema. This will limit the size of streams, while keeping primitive types inline.

## Future

### Publishing

Value can definitely be added by publishing a single registry of Schema.org Ceramic schemas. This would allow others to reuse and reference the same schemas, without needing to publish them all themselves.

Once published, the [@datamodels](https://github.com/ceramicstudio/datamodels) repo could contain a package containing all Schema.org schemas.
