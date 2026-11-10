---
applyTo: 'packages/core/src/components/**/*.scss,packages/core/src/components/**/*.tsx'
---

<!--
SPDX-FileCopyrightText: 2026 Siemens AG

SPDX-License-Identifier: MIT
-->

# Component CSS custom properties

Component-level CSS custom properties are declared in `packages/core/src/components/<component>/<component>.vars.scss`. They are public theming API.

Validated by `packages/core/scripts/lint/component-vars.spec.ts` (`pnpm --filter @siemens/ix test.spec`).

## Grammar

```
--ix-<component>[-<part>]--<property>[--<modifier>...]
```

| Segment | Rule | Examples |
| --- | --- | --- |
| `<component>` | Tag name without `ix-` of the component that owns the vars file. | `button`, `menu-item`, `progress-indicator` |
| `<part>` | Optional element inside the component's shadow DOM. Use nouns. Never use another component's name as the part. | `icon`, `thumb`, `fill`, `slotted-avatar` |
| `<property>` | The CSS property the value feeds into (`color`, `background`, `border-color`, `height`, ...) or one of the approved custom names (`size`, `offset-x`, `status-color`, ...). | `background`, `border-radius` |
| `<modifier>` | Zero or more conditions, each prefixed with `--`, in canonical category order. | `--primary--hover`, `--danger--disabled` |

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

## Private properties

Properties that are set at runtime (inline styles from TSX), passed between components, or used only to wire internal styles are private:

```
--_ix-<component>-<name>
```

- Do not declare private properties in `*.vars.scss`. Set defaults in the component SCSS instead.
- Do not document private properties as public API. Consumers must not rely on them.

## Ownership

- Every property in a vars file must start with that file's component name.
- A property must be declared in exactly one vars file.
- If a parent component styles a slotted child or an internal element that looks like another component, use a part name owned by the parent (for example, `--ix-menu-slotted-avatar--max-height` or `--ix-group-header--background`), not the child's prefix.
