---
name: ix
description: 'Implement, review, migrate, or answer development questions about Siemens iX. Use version-matched registry documentation for component APIs, examples, patterns, and Figma mappings; use the official design-system documentation for usage guidance, accessibility, migrations, writing, charts, and icons.'
license: MIT
compatibility: 'Requires only file reading or HTTP fetch access to the Siemens iX registry and documentation. No scripts or runtimes are needed. Installed package metadata can be used offline.'
---

# Siemens iX Development

## When to Use

- Select and implement iX components in React, Angular, Vue, or web-components/native HTML applications.
- Look up component properties, events, methods, slots, dependencies, examples, or related components.
- Build a larger UI section from an available iX pattern.
- Translate a Figma component into the matching iX implementation.
- Find and use an iX icon.
- Apply iX design, accessibility, UX writing, chart, or migration guidance.
- Review generated or existing iX code for API, framework, accessibility, and setup mistakes.

If iX is not installed or configured correctly, use the `ix-installation` skill before implementing application features.

## Required Principles

- For implementation, API, example, pattern, Figma, and migration work, detect the target application, framework, Angular mode, and iX version before choosing sources.
- Use version-matched API and example sources. Do not silently use the latest docs for an older project.
- Before generating code with an iX component, open that component's detail documentation and at least one relevant example for the target framework.
- Use the target framework's wrapper and conventions. Do not translate syntax mechanically from another framework when a matching example exists.
- Treat properties, events, methods, slots, accessibility behavior, and Figma IDs as contracts. Do not invent unavailable relationships or APIs.
- Preserve the application's architecture, state management, styling strategy, accessibility behavior, and existing iX setup.
- Do not edit generated React, Angular, or Vue wrapper output.

## Documentation Sources and Precedence

| Need                                                                         | Primary source                                                               | Fallback or supporting source                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------- |
| Component discovery and selection                                            | Matching version's registry `llms/catalog.md`                                | `llms/components.md`, then installed `@siemens/ix` metadata    |
| Exact component API, related examples, Figma IDs                             | Matching version's registry `llms/components/<tag>.md`                       | Installed `@siemens/ix` metadata                               |
| Figma main component mapping                                                 | Matching version's registry `llms/figma.md`                                  | Installed `component-doc.json`                                 |
| Practical framework examples                                                 | Matching version's registry `llms/examples/<framework>.md` and linked files  | Related examples in component details                          |
| Complete reusable UI patterns                                                | Matching version's registry `llms/patterns.md` and linked materialized files | Existing application patterns built from documented components |
| Component usage and design guidance                                          | Documentation links from the versioned component detail                      | `https://ix.siemens.io/llms.txt`                               |
| Installation, migration, accessibility, UX writing, charts, general guidance | `https://ix.siemens.io/llms.txt` and the relevant linked page                | Repository-local guidance for the target project               |
| Icon discovery                                                               | `https://ix.siemens.io/docs/icons/icon-library.md`                           | Installed `@siemens/ix-icons/dist/sample.json`                 |
| Icon usage semantics                                                         | Icon usage page linked from `https://ix.siemens.io/llms.txt`                 | Version-matched `add-icons` example                            |

When sources appear to conflict:

1. Prefer the exact installed package version for runtime API shape.
2. Prefer the matching versioned registry component detail and example for framework code.
3. Prefer the design-system documentation for usage, accessibility, content, and visual guidance.
4. State the mismatch instead of silently combining incompatible versions.

## Phase 1: Establish Project Context

For a general, version-independent design-system question, no application inspection is required. Use the relevant page linked from `https://ix.siemens.io/llms.txt` and state when the answer is not tied to a specific iX version.

For implementation, API, example, pattern, Figma, or migration work:

1. Identify the target application or workspace package.
2. Read its `package.json`, lockfile resolution when needed, framework configuration, and nearby implementation patterns.
3. Detect:
   - React, Angular, Vue, or web components/native HTML
   - Angular standalone or module mode
   - the resolved `@siemens/ix` version, using the installed package or lockfile
4. If `@siemens/ix` is absent and code should be implemented, stop and use the `ix-installation` skill. For planning or documentation-only work, use the user-requested version or clearly label the registry version used.
5. If only a wrapper version is visible, use it as a provisional iX version and confirm compatibility with `@siemens/ix`.

## Phase 2: Read the Version-Matched Registry

The registry is plain Markdown and JSON. Read it with any file-read or HTTP
fetch tool; do not write or run a search script.

### Select the Registry Version

1. Open `https://siemens.github.io/ix/llms.txt`. It lists every deployed
   registry version (for example `main`, `v5.2.1`) and its `latest` tag.
2. Choose the version that matches the resolved iX version from Phase 1,
   normally `v<major.minor.patch>`. An explicit user-requested version wins.
3. Set `BASE` to that version root, for example
   `https://siemens.github.io/ix/v5.2.1/`. All registry paths below are
   relative to `BASE`.
4. If `siemens.github.io` is unreachable, use the raw mirror with the same
   paths: `https://raw.githubusercontent.com/siemens/ix/gh-pages/<version>/`.
5. If the exact version is not deployed, see
   [Version Unavailable](#version-unavailable). Never switch to `latest` or
   `main` silently.

### Read in This Order

Open only what the task needs, in this order:

| Step | File                            | Size    | Use it for                                                                                                 |
| ---- | ------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| 1    | `BASE/llms/catalog.md`          | ~13 KB  | One line per component: `tag\|description\|react:Alias\|figma:ids`. Choose candidate components here.      |
| 2    | `BASE/llms/figma.md`            | ~3 KB   | Only for Figma input: `figma-id\|tag` rows of main component IDs.                                          |
| 3    | `BASE/llms/components/<tag>.md` | ~2–7 KB | Full contract for one component: names per framework, docs links, props, events, methods, slots, examples. |
| 4    | `BASE/llms/examples/<fw>.md`    | ~20 KB  | One line per example for one framework: `name\|title\|used ix tags\|files`.                                |
| 5    | `BASE/examples/<fw>/<file>`     | small   | One example source file at a time.                                                                         |
| —    | `BASE/llms/patterns.md`         | ~5 KB   | Only for complete multi-file UI sections.                                                                  |

`<fw>` is one of `html`, `react`, `angular`, `angular-standalone`, or `vue`.

Search inside these files by reading them and matching component tags,
descriptions, example names, titles, and used tags. Match on purpose and
behavior, not only on exact words: for example, "toast", "snackbar", and
"notification" can all point to `ix-toast`. Compare several plausible
candidates before choosing.

Older registry versions may not have `llms/catalog.md`, `llms/figma.md`, or
`llms/examples/<fw>.md` (HTTP 404). In that case:

- use `BASE/llms/components.md` instead of the catalog
- use the `Figma IDs` sections of component details instead of `figma.md`
- use `BASE/llms/examples.md` instead of the per-framework example index; it is
  large, so read only the sections you need

### Version Unavailable

If the exact version is not deployed:

1. Use installed package metadata from the consumer's target application or
   workspace, not from this installed skill directory, where possible:
   - `node_modules/@siemens/ix/component-doc.json` (tags, docs, props, events,
     methods, slots, documentation links, and `figma-main-component-id` tags)
   - published declarations such as
     `node_modules/@siemens/ix/dist/types/components.d.ts` and
     `node_modules/@siemens/ix/components/*.d.ts`
   - installed `@siemens/ix-react` declarations/exports when React aliases
     need confirmation
2. Use the broad documentation site only for version-independent guidance.
3. Declaration-only metadata provides API text and implementation aliases, but
   relationships and Figma mappings are unavailable. Do not report a Figma ID as
   unmapped in that case; report that the mapping could not be verified.
4. If local metadata is also unavailable, state the limitation and ask before
   using the nearest lower deployed version, or `latest`, as an approximation.
   Disclose the version actually used.

Documentation URLs are never inferred from package names, homepages, or
declaration paths. Use only URLs present in registry files, component metadata,
or `llms.txt`.

## Example Workflow

Use the example index when the task asks for practical code or names a
behavior, source file, or iX component.

1. Open `BASE/llms/examples/<fw>.md` for the target framework.
2. Find candidate rows by example name, title, and used iX tags. For a
   component, match its tag in the used-tags column and compare with the
   component detail's related examples.
3. Resolve the files of the chosen row relative to `BASE/examples/<fw>/`. A file
   starting with `.` is the example name plus that suffix. For example, row
   `add-icons|Add icons||.css,.html,.ts` in `angular.md` means
   `BASE/examples/angular/add-icons.css`, `add-icons.html`, and `add-icons.ts`.
   An empty used-tags column means the example uses no iX components directly
   (for example native CSS, AG Grid, or ECharts theming).
4. Open only the files needed by the target framework variant, one at a time.
5. Confirm the example's component APIs against the component detail and the
   target project.
6. Adapt the example to existing application patterns; do not copy unrelated scaffolding.

Never infer a route or look for a repository source path. Do not hard-code a
registry version other than the one selected in Phase 2.

## Component Workflow

### Discover the Component

1. Read `BASE/llms/catalog.md` and match by component name, purpose, and description.
2. Prefer an existing component that matches the requested behavior over rebuilding it from generic HTML.
3. For broad discovery, compare the descriptions of plausible components before choosing.

### Read the Complete Component Contract

Open the selected component's detail markdown at `BASE/llms/components/<tag>.md`. Before writing code, inspect all available:

- web component tag and React, Vue, and Angular names
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

1. Start from the component detail's related examples, which list the frameworks each example exists for, then find their rows in `BASE/llms/examples/<fw>.md`.
2. Select an example that demonstrates the requested state or interaction.
3. Open only the matching variant:
   - `react`
   - `angular`
   - `angular-standalone`
   - `vue`
   - `html`
4. Read every listed file needed by that example, including styles and supporting code.
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

## Pattern Workflow

Use patterns for complete page sections or reusable multi-file patterns, not for a single component lookup.

1. Read `BASE/llms/patterns.md` and keep only patterns with a variant for the target framework.
2. Compare descriptions and keywords with the requested workflow.
3. Inspect:
   - intended use
   - preview path
   - available framework variants
   - all linked files using each manifest's `files[].path`, resolved relative
     to that manifest URL
   - component relationship availability
4. Use only the target framework variant.
5. Read the linked files before adapting the pattern. Resolve each
   `files[].path` relative to the pattern manifest URL; never infer a route or
   use a repository source path.
6. Integrate the pattern with the application's routing, state, styling, and naming conventions.
7. Do not infer used-component relationships when the pattern docs mark them unavailable.
8. Do not depend on private registry commands or a private CLI to install the pattern.

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

Use `addIcons` only as an alternative when the application intentionally references registered icons by string name or registers custom icon data. For that workflow, find the `add-icons` row in `BASE/llms/examples/<fw>.md` and follow its files for the target framework. Register only required icons in a stable location; do not register them during every render.

For web components, follow the version-matched HTML example and existing icon loader setup.

A standalone icon without visible text must have a tooltip and a screen-reader-accessible description. Icon-only actions must retain an accessible name.

## Figma Workflow

When the task includes a Figma resource:

1. Extract the main component ID when available, for example from the
   `node-id` URL parameter.
2. Normalize `123-456` to `123:456` for comparison.
3. Look up the normalized ID in `BASE/llms/figma.md`. Each row is
   `figma-id|tag`; multiple IDs can map to one tag. Instance or variant IDs are
   not main component IDs.
4. Treat the ID only as a design-system mapping, never as a runtime API.
5. If one component matches, open its full component detail, usage guide, and a target-framework example before implementation.
6. If multiple components match, compare their documentation and intended use instead of selecting arbitrarily.
7. If no row matches, state that the ID is unmapped and use visual/functional
   requirements to choose components from `BASE/llms/catalog.md`. Do not invent
   a mapping.

When no matching registry version is available, installed
`node_modules/@siemens/ix/component-doc.json` in the consumer's target
application or workspace is the fallback: search its `docsTags` entries named
`figma-main-component-id`. If it is missing, published declarations can provide
API text and confirmed aliases, but cannot verify Figma mappings or component
relationships; report the mapping as unverifiable rather than unmapped.
Installed metadata is not expected to be present in this skill directory.

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
3. Reuse documented components, patterns, icons, and existing project helpers.
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
- Component not found: re-read the catalog with broader purpose-based terms and synonyms; do not fabricate a tag.
- Registry file returns 404: use the older-registry fallbacks from Phase 2 or the raw mirror; do not guess a different path.
- API field or relationship unavailable: state that it is unavailable and avoid relying on it.
- Matching framework example unavailable: use the API and usage guide, preserve framework conventions, and disclose the missing example.
- Pattern framework variant unavailable: do not translate a different framework automatically; implement from documented components or ask the user.
- Icon not found: suggest documented related icons, not an invented icon name.
- Figma ID unmapped: report it as unmapped and continue with requirement-based discovery.

## Output

Report:

1. Target framework, Angular mode when relevant, and iX version.
2. Registry/documentation pages and examples used.
3. Components, pattern, icons, or Figma mapping selected.
4. Files changed and meaningful implementation decisions.
5. Any unavailable version, relationship, example, or mapping that limited confidence.
