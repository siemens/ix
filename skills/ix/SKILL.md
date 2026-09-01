---
name: ix
description: 'Implement, review, migrate, or answer development questions about Siemens iX. Use version-matched registry documentation for component APIs, examples, blocks, and Figma mappings; use the official design-system documentation for usage guidance, accessibility, migrations, writing, charts, and icons.'
license: 'MIT; see THIRD_PARTY_LICENSES.md for the bundled MiniSearch notice.'
compatibility: 'Requires Node.js 22+ and network access to the Siemens iX registry and documentation. Local-index mode may work offline.'
---

# Siemens iX Development

## When to Use

- Select and implement iX components in React, Angular, Vue, or web-components/native HTML applications.
- Look up component properties, events, methods, slots, dependencies, examples, or related components.
- Build a larger UI section from an available iX block.
- Translate a Figma component into the matching iX implementation.
- Find and use an iX icon.
- Apply iX design, accessibility, UX writing, chart, or migration guidance.
- Review generated or existing iX code for API, framework, accessibility, and setup mistakes.

If iX is not installed or configured correctly, use the `ix-installation` skill before implementing application features.

## Required Principles

- For implementation, API, example, block, Figma, and migration work, detect the target application, framework, Angular mode, and iX version before choosing sources.
- Use version-matched API and example sources. Do not silently use the latest docs for an older project.
- Before generating code with an iX component, open that component's detail documentation and at least one relevant example for the target framework.
- Use the target framework's wrapper and conventions. Do not translate syntax mechanically from another framework when a matching example exists.
- Treat properties, events, methods, slots, accessibility behavior, and Figma IDs as contracts. Do not invent unavailable relationships or APIs.
- Preserve the application's architecture, state management, styling strategy, accessibility behavior, and existing iX setup.
- Do not edit generated React, Angular, or Vue wrapper output.

## Documentation Sources and Precedence

| Need                                                                         | Primary source                                                                   | Fallback or supporting source                                  |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Component discovery, exact API, related examples, Figma IDs                  | `https://siemens.github.io/ix/llms.txt` and its matching versioned registry docs | Installed `@siemens/ix` metadata                               |
| Practical framework examples                                                 | Matching version's registry `llms/examples.md` and linked materialized files     | Related examples in component details                          |
| Complete reusable UI blocks                                                  | Matching version's registry `llms/blocks.md` and linked materialized files       | Existing application patterns built from documented components |
| Component usage and design guidance                                          | Documentation links from the versioned component detail                          | `https://ix.siemens.io/llms.txt`                               |
| Installation, migration, accessibility, UX writing, charts, general guidance | `https://ix.siemens.io/llms.txt` and the relevant linked page                    | Repository-local guidance for the target project               |
| Icon discovery                                                               | `https://ix.siemens.io/docs/icons/icon-library.md`                               | Installed `@siemens/ix-icons/dist/sample.json`                 |
| Icon usage semantics                                                         | Icon usage page linked from `https://ix.siemens.io/llms.txt`                     | Version-matched `add-icons` example                            |

When sources appear to conflict:

1. Prefer the exact installed package version for runtime API shape.
2. Prefer the matching versioned registry component detail and example for framework code.
3. Prefer the design-system documentation for usage, accessibility, content, and visual guidance.
4. State the mismatch instead of silently combining incompatible versions.

## Phase 1: Establish Project Context

For a general, version-independent design-system question, no application inspection is required. Use the relevant page linked from `https://ix.siemens.io/llms.txt` and state when the answer is not tied to a specific iX version.

For implementation, API, example, block, Figma, or migration work:

1. Identify the target application or workspace package.
2. Read its `package.json`, lockfile resolution when needed, framework configuration, and nearby implementation patterns.
3. Detect:
   - React, Angular, Vue, or web components/native HTML
   - Angular standalone or module mode
   - the resolved `@siemens/ix` version, using the installed package or lockfile
4. If `@siemens/ix` is absent and code should be implemented, stop and use the `ix-installation` skill. For planning or documentation-only work, use the user-requested version or clearly label the registry version used.
5. If only a wrapper version is visible, use it as a provisional iX version and confirm compatibility with `@siemens/ix`.

## Phase 2: Search the Version-Matched Registry

`scripts/search.mjs` is the bundled, self-contained Node 22 helper included in
this skill. From the installed skill root, run:

```sh
node scripts/search.mjs \
  --query "<component or behavior>" \
  --project-dir "<consumer project>" \
  --framework "<html|react|angular|angular-standalone|vue>"
```

At least one of `--query`, `--figma-id`, or `--component-name` is required.
The default (and explicit `--kind component`) searches only components and
returns enriched records containing the canonical detail path, documentation
links, aliases, normalized Figma main IDs, and React example name/path
references. Results are a stable JSON envelope:

```json
{
  "status": "ok",
  "version": "v5.2.1",
  "source": "registry",
  "results": []
}
```

Use `--kind example` or `--kind block` for direct framework-specific discovery.
`--limit`, `--registry-url`, and `--local-index <path>` remain available.
Figma IDs and component names are repeatable:

```sh
node scripts/search.mjs \
  --figma-id 225:5535 --figma-id 308:1151 \
  --component-name Button --component-name Avatar
```

Composed selections are merged, deduplicated by component ID, and retain the
strongest match. Partial matches have `status: "ok"` and an `unmatched` array
with one diagnostic per missed input. Operational statuses include
`version_unavailable`, `no_match`, `figma_main_id_unregistered`, and
`figma_mapping_unavailable`.

When `--version` is omitted, the helper resolves the installed IX version from
`--project-dir`, preferring `@siemens/ix` and then an installed compatible
framework wrapper. An explicit `--version` always wins. `--local-index` is
fully portable and bypasses package and registry resolution.

1. Open `https://siemens.github.io/ix/llms.txt` only to select or verify the
   registry version matching the resolved iX version, normally
   `v<major.minor.patch>`.
2. Fetch the matched detail artifact at the `path` returned by the helper:
   - `llms/components/<component-tag>.md` for the complete component contract
   - `examples/<name>.json` for framework variants and their materialized files
   - `blocks/<name>.json` for copyable multi-file UI patterns
3. Do not substitute the `latest` registry version without saying so.

If the exact version is unavailable:

1. Use installed package metadata from the consumer's target application or
   workspace, not from this installed skill directory, where possible:
   - `node_modules/@siemens/ix/component-doc.json`
   - published declarations such as
     `node_modules/@siemens/ix/dist/types/components.d.ts` and
     `node_modules/@siemens/ix/components/*.d.ts`
   - installed `@siemens/ix-react` declarations/exports when React aliases
     need confirmation
2. Use the broad documentation site only for version-independent guidance.
3. Declaration-only fallback provides API text and implementation aliases, but
   relationships and Figma mappings are explicitly unavailable. It returns no
   documentation URLs.
4. If local metadata is also unavailable, state the limitation and ask before
   using the nearest or latest registry version as an approximation.

Documentation URLs are never inferred from package names, homepages, or
declaration paths. Use only URLs present in component/search metadata or
discovered through `llms.txt`.

## Example Workflow

Use the central search helper when the task asks for practical code or names a
behavior, pattern, source file, or iX component.

1. Search with `--kind example` and the target `--framework`.
2. Open the matched example manifest from its canonical detail path.
3. Inspect the available framework variants and their `files[].path` values.
   Fetch each file path relative to the example manifest URL. For example,
   `react/event-list.tsx` in `/v5.2.1/examples/event-list.json` is fetched from
   `/v5.2.1/examples/react/event-list.tsx`. Never infer a route or look for a
   repository source path.
4. Open every materialized file needed by the target framework variant.
5. Confirm the example's component APIs against the target project.
6. Adapt the example to existing application patterns; do not copy unrelated scaffolding.

Use the relative path from the selected version. Do not construct or hard-code a registry version in the example URL.

## Component Workflow

### Discover the Component

1. Search the matching version with `--kind component` by component name, purpose, and description.
2. Prefer an existing component that matches the requested behavior over rebuilding it from generic HTML.
3. For broad discovery, compare the descriptions of plausible components before choosing.

### Read the Complete Component Contract

Open the selected component's detail markdown. Before writing code, inspect all available:

- design/usage documentation links
- properties and defaults
- events and event payloads
- public methods and signatures
- slots
- dependencies and relationship availability
- related examples
- Figma main component IDs

If a relationship is marked `unavailable`, do not infer it.

Open the linked usage guide when the task involves component choice, composition, visual variants, behavior, accessibility, or content rather than API syntax alone.

### Validate with an Example

1. Search with `--kind example` and the component tag, then compare the component detail's related examples.
2. Select an example that demonstrates the requested state or interaction.
3. Open only the matching variant:
   - `react`
   - `angular`
   - `angular-standalone`
   - `vue`
   - `html`
4. Read every linked file needed by that example, including styles and supporting code.
5. Confirm imports and dependencies against the target project.
6. Adapt the example to existing application patterns; do not paste unrelated scaffolding or overwrite application code.

When no related example exists, use the component API and usage guide directly and say that no version-matched example was available.

### Framework Rules

- **React**: import wrapper components from `@siemens/ix-react`; use React event and property conventions shown by the matching example.
- **Angular standalone**: import each used component, directive, and form value accessor from `@siemens/ix-angular/standalone`.
- **Angular module**: rely on `IxModule` from `@siemens/ix-angular` and follow the application's existing module organization.
- **Vue**: use `@siemens/ix-vue` and the existing `ixPlugin` setup; follow the Vue example's binding and event syntax.
- **Web components/native HTML**: use `ix-*` elements and the HTML example; preserve the loader setup established by `ix-installation`.
- Do not add custom-element loader calls when a framework wrapper is used.

## Block Workflow

Use blocks for complete page sections or reusable multi-file patterns, not for a single component lookup.

1. Search the matching version with `--kind block` and the target framework.
2. Inspect descriptions and keywords for the requested workflow.
3. Inspect:
   - intended use
   - preview path
   - available framework variants
   - all linked files using each manifest's `files[].path`, resolved relative
     to that manifest URL
   - component relationship availability
4. Use only the target framework variant.
5. Read the linked files before adapting the block. Resolve each
   `files[].path` relative to the block manifest URL; never infer a route or
   use a repository source path.
6. Integrate the block with the application's routing, state, styling, and naming conventions.
7. Do not infer used-component relationships when the block docs mark them unavailable.
8. Do not depend on private registry commands or a private CLI to install the block.

## Icon Workflow

### Select an Icon

1. Search `https://ix.siemens.io/docs/icons/icon-library.md` by name, category, tags, description, and related icons.
2. If remote documentation is unavailable, search
   `node_modules/@siemens/ix-icons/dist/sample.json` in the consumer's target
   application or workspace, not in this installed skill directory.
3. Choose an icon whose documented meaning matches the action or status. Do not select by visual similarity alone.
4. Consult the icon usage guidance for menu, status, component, and standalone icon rules.

### Implement the Icon

For React and Vue, import icon data and pass it directly to `IxIcon`. Do not call `addIcons` for direct icon data.

React:

```tsx
import { IxIcon } from '@siemens/ix-react';
import { iconStar } from '@siemens/ix-icons/icons';

export function Example() {
  return <IxIcon name={iconStar} />;
}
```

Vue:

```vue
<script setup lang="ts">
import { IxIcon } from '@siemens/ix-vue';
import { iconStar } from '@siemens/ix-icons/icons';
</script>

<template>
  <IxIcon :name="iconStar" />
</template>
```

Angular can also bind imported icon data directly through a class property. Standalone components must import `IxIcon` from `@siemens/ix-angular/standalone`.

Use `addIcons` only as an alternative when the application intentionally references registered icons by string name or registers custom icon data. For that workflow, open `llms/examples.md#add-icons` relative to the selected registry version and follow the matching framework variant. Register only required icons in a stable location; do not register them during every render.

For web components, follow the version-matched HTML example and existing icon loader setup.

A standalone icon without visible text must have a tooltip and a screen-reader-accessible description. Icon-only actions must retain an accessible name.

## Figma Workflow

When the task includes a Figma resource:

1. Extract the main component ID when available.
2. Normalize `123-456` to `123:456` for comparison.
3. Search Figma IDs in the matching version with
   `node scripts/search.mjs --kind component --figma-id <id> --project-dir <path>`.
4. Treat the ID only as a design-system mapping, never as a runtime API.
5. If one component matches, open its full component detail, usage guide, and a target-framework example before implementation.
6. If multiple components match, compare their documentation and intended use instead of selecting arbitrarily.
7. If no mapping exists, state that it is unmapped and use visual/functional requirements to search the central documentation index. Do not invent a mapping.

Installed `node_modules/@siemens/ix/component-doc.json` in the consumer's
target application or workspace is the fallback source for
`figmaMainComponentIds` and documentation links when a matching registry version
is not available. If it is missing, published declarations can provide API text
and confirmed aliases, but cannot authoritatively verify Figma mappings or
component relationships. A declarations-only search reports
`figma_mapping_unavailable` rather than treating an ID as unmapped. Installed
metadata is not expected to be present in this skill directory.

## General Guidance, Migration, and Review

Use `https://ix.siemens.io/llms.txt` to locate the relevant page for:

- installation and getting started
- migrations
- accessibility
- UX writing and language
- layout and design foundations
- charts and data visualization
- component usage guides
- icon usage

Fetch the specific linked markdown page needed for the question. Do not treat the entire index as the answer, and do not use API metadata as a substitute for design or accessibility guidance.

For migrations, first identify the source and target iX versions, then combine the matching migration guide with the target version's component API and examples.

## Implementation and Audit

When code changes are requested:

1. Inspect nearby application patterns before editing.
2. Make the smallest complete change that satisfies the requested behavior.
3. Reuse documented components, blocks, icons, and existing project helpers.
4. Keep wrapper imports, event names, property names, slots, and methods consistent with the selected version's docs and example.
5. Preserve accessibility requirements from component and general guidance.
6. Do not add dependencies not required by the selected example or implementation.
7. Do not edit generated wrapper files.

After implementation, check:

- imports are correct, including named versus default imports
- all required dependencies are installed and version-compatible
- the selected framework variant was used
- component properties, events, methods, and slots exist in the matched version
- icon registration and accessible naming are correct
- no wrapper project calls custom-element loaders
- TypeScript/build errors are resolved
- relevant lint errors are resolved
- the resulting interaction is covered by the project's existing test approach when behavior changed

Run the smallest existing type-check, build, lint, or targeted test command that proves the change. Do not introduce new validation tooling.

## Failure Handling

- Exact registry version unavailable: use installed metadata and disclose the missing version; ask before approximating with newer docs.
- Component not found: broaden the purpose-based search; do not fabricate a tag.
- API field or relationship unavailable: state that it is unavailable and avoid relying on it.
- Matching framework example unavailable: use the API and usage guide, preserve framework conventions, and disclose the missing example.
- Block framework variant unavailable: do not translate a different framework automatically; implement from documented components or ask the user.
- Icon not found: suggest documented related icons, not an invented icon name.
- Figma ID unmapped: report it as unmapped and continue with requirement-based discovery.

## Output

Report:

1. Target framework, Angular mode when relevant, and iX version.
2. Registry/documentation pages and examples used.
3. Components, block, icons, or Figma mapping selected.
4. Files changed and meaningful implementation decisions.
5. Any unavailable version, relationship, example, or mapping that limited confidence.
