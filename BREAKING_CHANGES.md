# Breaking Changes

Welcome to the comprehensive list of breaking changes introduced in `Siemens Industrial Experience`.
This document aims to provide a clear and detailed overview of all significant modifications that may affect your existing codebase. Understanding these changes is crucial for a smooth transition and to ensure compatibility with the latest version of the library.

## Registry example and block manifests: path-only files

The registry file contract is changing to remove the ambiguity between a
repository source path and a consumer output path. The existing endpoint
`/v5.2.1/examples/event-list.json` and its manifest format existed, but its
`source` and `target` fields described two different addressing schemes:

```json
{ "source": "react-examples/src/preview-examples/event-list.tsx", "target": "react/event-list.tsx" }
```

New manifests expose exactly one file property:

```json
{ "path": "react/event-list.tsx" }
```

`path` is both the consumer-facing output path and the downloadable registry
resource. It is resolved relative to the manifest URL. For example,
`react/event-list.tsx` in
`/v5.2.1/examples/event-list.json` is downloaded from
`/v5.2.1/examples/react/event-list.tsx`; blocks follow the analogous
`/blocks/<path>` rule. Public paths remain framework-prefixed.

Repository source locations are build-only metadata. Authored block definitions
may use `sourcePath`, but it is stripped from published manifests. CLI
consumers must read only `files[].path`; legacy `source`/`target` manifests are
intentionally not supported. Consequently, already-deployed historical
registries that contain only the old format may no longer work with the new
CLI. Migrate by using a registry generated with path-only manifests.

## Versions

Please select your target version

- [Version v6.0.0](./BREAKING_CHANGES/v6.md)
- [Version v5.0.0](./BREAKING_CHANGES/v5.md)
- [Version v4.0.0](./BREAKING_CHANGES/v4.md)
- [Version v3.0.0](./BREAKING_CHANGES/v3.md)
- [Version v2.0.0](./BREAKING_CHANGES/v2.md)

## Questions ❓🙋‍♀️

If you have any further questions, or you encounter any issues during the migration, please [contact us over our forum](https://community.siemens.com/c/ix/).
