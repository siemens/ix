---
name: component-token-refactor
description: 'Refactor IX component *.vars.scss files from generated component-layer theme tokens to direct theme or system tokens, update Classic Light/Dark fallbacks, and verify theme mappings, tests, snapshots, and changesets. Use when packages/core/scss/theme/core/components mappings are added, replaced, or regenerated.'
argument-hint: 'Provide the changed component mapping files or component names to migrate'
user-invocable: true
---

# Component Token Refactor

## When to Use

- Generated mappings under `packages/core/scss/theme/core/components/` change.
- Component-local `*.vars.scss` files need to adopt new legacy or `--theme-si-sys-*` tokens.
- Existing `--ix-*` variables reference generated `--theme-<component>-*` tokens.
- Classic Light/Dark fallback values need to be synchronized with current theme values.
- A token migration affects multiple components or shared component aliases.

## Core Invariant

Generated component tokens are part of the global theme output and are a lookup source for migration. They must not be used as an intermediate layer inside component-local vars.

Given this mapping:

```scss
--theme-checkbox-checked--background: var(
  --theme-si-sys-background-accent
);
```

The local variable must use the mapped token directly:

```scss
$checkbox-checked-background-fallback: light-dark(#006a87, #00c9e4);

:host {
  --ix-checkbox-checked--background: var(
    --theme-si-sys-background-accent,
    #{$checkbox-checked-background-fallback}
  );
}
```

Do not produce:

```scss
--ix-checkbox-checked--background: var(
  --theme-checkbox-checked--background,
  ...
);
```

## Required Inputs

- The changed mapping files under `packages/core/scss/theme/core/components/`.
- All component `*.vars.scss` files that declare a matching `--ix-*` property.
- `packages/core/scss/theme/core/_common.scss`.
- Classic Light/Dark legacy and system variables:
  - `packages/core/scss/theme/classic/light/_legacy-variables.scss`
  - `packages/core/scss/theme/classic/dark/_legacy-variables.scss`
  - `packages/core/scss/theme/classic/light/_sys-variables.scss`
  - `packages/core/scss/theme/classic/dark/_sys-variables.scss`

## Procedure

1. Parse each changed component mapping declaration.
2. Convert the mapping name from `--theme-*` to the identical `--ix-*` name.
3. Search every component `*.vars.scss` file for that `--ix-*` declaration.
   - Match by custom-property name, not component folder.
   - Shared aliases can appear in select, dropdown, card, chip, or other consumers.
4. Treat mapping entries without an existing local `--ix-*` declaration as intentionally unmatched.
   - Do not invent local aliases.
5. Resolve mappings that point to another generated component token until the value reaches:
   - one non-component `var(--theme-...)`, or
   - a literal value.
6. Update the local declaration:
   - For a mapped theme token, use `var(--theme-direct-token, fallback)`.
   - For a mapped literal, use the literal directly.
   - Preserve the public `--ix-*` property name.
7. Update the fallback from current Classic Light and Dark values.
8. Remove fallback variables that became unused after adopting a literal.
9. Format changed `*.vars.scss` files with the repository Prettier setup.

## Fallback Resolution

- Resolve the mapped direct token through the current theme variable chain.
- Classic Light is the first `light-dark(...)` argument.
- Classic Dark is the second `light-dark(...)` argument.
- If both schemas resolve to the same value, use one literal.
- Preserve the CSS value type.

For a single color:

```scss
light-dark(#000609, #ffffff)
```

For composite values such as shadows, do not wrap the entire value in `light-dark()`. Apply `light-dark()` only to differing color positions:

```scss
0 0 2px 0 light-dark(rgba(0, 6, 9, 0.2), #000000),
  0 4px 8px 0 light-dark(rgba(0, 6, 9, 0.1), rgba(0, 0, 0, 0.6))
```

Invalid:

```scss
light-dark(0 0 2px ... , 0 0 2px ...)
```

## Generated Mapping Rules

- Keep canonical mapping files under `packages/core/scss/theme/core/components/`.
- Keep their imports and includes in `packages/core/scss/theme/core/_components.scss`.
- Do not hand-edit unrelated generated mappings.
- When new generated files are supplied with temporary names, replace the canonical files and restore canonical imports.
- Verify mapping names are not accidentally added or removed unless the token source intentionally changed.

## Verification

Run a deterministic check that:

1. Every matched local `--ix-*` declaration uses the resolved direct token or literal.
2. No component `*.vars.scss` declaration references a generated component token from `theme/core/components`.
3. Fallbacks match resolved Classic Light/Dark values.
4. `light-dark()` is used only with color arguments.
5. Unmatched local variables and mapping entries remain unchanged.
6. Generated component mappings remain in the global theme output.

Then run:

```bash
pnpm build --filter @siemens/ix
pnpm --filter @siemens/ix test.ct
```

For repository-wide styling changes, build outside Docker and use the `visual-testing-snapshots` skill to update and verify the full visual suite inside the matching Playwright Docker image.

## Release Impact

Component token and fallback changes are consumer-visible theming changes.

- Require a patch changeset for `@siemens/ix`.
- Keep the summary focused on the rendered/theming outcome.
- Update the existing relevant changeset instead of adding a duplicate when the migration is part of an active token-refactor branch.

## Failure Handling

- Stop if a mapped token cannot be resolved in either Classic Light or Classic Dark.
- Stop if one fallback variable would need two different resolved values.
- Stop if a composite light/dark value has incompatible non-color structure.
- Do not silently retain stale fallbacks.
- Do not replace unrelated working-tree changes.

## Example Prompts

- `Use the component-token-refactor skill for the updated checkbox and switch mappings.`
- `Migrate all component vars to the latest generated theme mappings and refresh fallbacks.`
- `Check whether any component vars still reference generated component-layer tokens.`
