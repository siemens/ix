---
applyTo: 'packages/core/src/components/**/*.scss,packages/core/src/components/**/*.tsx'
---

<!--
SPDX-FileCopyrightText: 2026 Siemens AG

SPDX-License-Identifier: MIT
-->

# Component CSS custom properties

Component-level CSS custom properties are declared in `packages/core/src/components/<component>/<component>.vars.scss`. They are internal (see [Internal API disclaimer](#internal-api-disclaimer)).

Validated at compile time by `packages/core/scss/mixins/_component-vars.scss` and by `packages/core/scripts/lint/component-vars.spec.ts` (`pnpm --filter @siemens/ix test.spec`).

## Type-safe Sass helpers

Never write `--ix-*: …` or `var(--ix-*)` by hand in component SCSS. Use the registry module, which fails the build on unknown names (like an unknown `sys.$si-sys-*` token). Names are passed without the `--ix-` prefix.

```scss
@use 'mixins/component-vars' as cv;

:host {
  @include cv.define-vars(
    (
      'button--background--primary': sys.$si-sys-color-primary,
      'button--size': 2rem,
    )
  );
  // Values that read a property of the same map go in a following block
  @include cv.define-vars(
    (
      'button--min-width': calc(#{cv.get-var('button--size')} * 2),
    )
  );
}

@include cv.declare-var('button--color--custom'); // no default, set per state or from TSX

:host(.selected) {
  @include cv.set-var('button--background--primary', sys.$si-sys-color-primary-hover);
}

.btn {
  background: cv.get-var('button--background--primary');
  width: calc(#{cv.get-var('button--size', 2rem)} * 2);
}
```

| Helper                                       | Purpose                                                                                                                                                                                       |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `define-vars($vars)`                         | Declares and registers a map of properties with defaults. Only in vars files, inside a selector. Errors on duplicates. A value cannot `get-var` a key of the same map; use a following block. |
| `define-var($name, $value)`                  | Single-property form used by `define-vars`. Prefer `define-vars` in vars files.                                                                                                               |
| `declare-var($name)`                         | Registers a property without emitting CSS (runtime properties, state-only properties). Only in vars files, top level.                                                                         |
| `set-var($name, $value, $external: false)`   | Overrides a registered property. Errors on unknown names.                                                                                                                                     |
| `get-var($name, $fallback: null, $external)` | Returns `var(--ix-<name>[, <fallback>])`. Errors on unknown names. Wrap in `#{…}` inside `calc()`, `min()`, `max()`, etc.                                                                     |

Each component `styleUrl` compiles separately, so only names from vars files `@use`d by that compilation are known. Use `$external: true` only for properties owned by another component (for example, a parent styling a child's property) or set at runtime from TSX. External references are checked by the lint spec against the compiled CSS of all components: every `var(--ix-*)` must be declared in some compiled CSS or set from TSX. The spec also fails on declared properties that are never read (directly or through another property). Remove dead properties instead of keeping them.

## Grammar

```
--ix-<component>[-<part>]--<property>[--<modifier>...]
```

| Segment       | Rule                                                                                                                                                                        | Examples                                    |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `<component>` | Tag name without `ix-` of the component that owns the vars file.                                                                                                            | `button`, `menu-item`, `progress-indicator` |
| `<part>`      | Optional element inside the component's shadow DOM. Use nouns. Never use another component's name as the part.                                                              | `icon`, `thumb`, `fill`, `slotted-avatar`   |
| `<property>`  | The CSS property the value feeds into (`color`, `background`, `border-color`, `height`, ...) or one of the approved custom names (`size`, `offset-x`, `status-color`, ...). | `background`, `border-radius`               |
| `<modifier>`  | Zero or more conditions, each prefixed with `--`, in canonical category order.                                                                                              | `--primary--hover`, `--danger--disabled`    |

Examples:

```css
--ix-button--background--primary--hover
--ix-checkbox--border-color--invalid--checked--active
--ix-toggle-thumb--background--on--disabled
--ix-progress-indicator--height--xs
```

## Modifier vocabulary and order

Modifiers must come from this vocabulary and appear in this category order:

1. Variant: `primary`, `secondary`, `tertiary`, `danger-primary`, `danger-secondary`, `danger-tertiary`, `subtle-primary`, `subtle-secondary`, `subtle-tertiary`
2. Status / validation: `alarm`, `danger`, `critical`, `warning`, `caution`, `information`, `success`, `neutral`, `accent`, `error`, `paused`, `base`, `custom`, `valid`, `info`, `invalid`
3. Appearance: `outline`, `filled`, `contrast`, `rounded`, `emphasis`, `initial`, `with-icon`, `no-icon`
4. Size: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `small`, `medium`, `large`, `big`, `compact`, `compact-break`, numeric sizes such as `12`, `16`, `360`
5. Context: `mobile`, `vertical`, `horizontal`, `alternating`, `stacked`
6. State: `checked`, `unchecked`, `mixed`, `on`, `off`, `selected`, `expanded`, `collapsed`, `pressed`, `range`, `autofill`, `dragover`, `draggable`, `divider`, `separator`, `checking`, `end`
7. Interaction: `hover`, `active`, `focus`
8. Disabled: `readonly`, `disabled`

Size modifiers use the component's public API value (for example, `ix-spinner size="xxl"` maps to `--xxl`).

## Internal API disclaimer

Component CSS custom properties are not a public API and are not covered by semantic versioning. Every `*.vars.scss` file starts (after the license header) with this comment:

```scss
// Internal: these CSS custom properties are implementation details of the
// component, not a public API. They are not covered by semantic versioning and
// can change or be removed in any release without notice.
```

## Runtime properties

Properties set at runtime (inline styles from TSX), passed from a parent to a child component, or used only to wire internal styles follow the same grammar. There is no separate private prefix: do not use `--_ix-`.

- Never declare a property from itself (`--ix-a--b: var(--ix-a--b)` is a cycle). If a parent overrides a child's default, set the child's property directly on the child element. Styles from the outer tree win over the child's `:host` defaults.
- If a runtime property has no default, register it with `cv.declare-var` in the vars file and set its value in the component SCSS (`cv.set-var`) or TSX.

## Ownership

- Every property in a vars file must start with that file's component name.
- A property must be declared in exactly one vars file.
- If a parent component styles a slotted child or an internal element that looks like another component, use a part name owned by the parent (for example, `--ix-menu-slotted-avatar--max-height` or `--ix-group-header--background`), not the child's prefix.
- Only files of the owning component (its folder) may `@use` its vars file. Loading it elsewhere emits all of its `:host` declarations into the other component's CSS.
- To restyle a child component, override its property on the child element with `set-var(..., $external: true)`. If a component needs a visual that belongs to another component (for example, the `ix-dropdown-button` triangle), render it inside the owning component (here via the internal `dropdownIndicator` prop of `ix-icon-button`).
- Map keys in `define-vars` must be single-quoted strings.
