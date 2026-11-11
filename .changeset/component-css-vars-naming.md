---
'@siemens/ix': major
---

Rename component CSS custom properties to one scheme: `--ix-<component>[-<part>]--<property>[--<modifier>...]`, with modifiers in a fixed order (variant, status, appearance, size, context, state, interaction, disabled). For example, `--ix-button-primary--background--hover` is now `--ix-button--background--primary--hover`.

Properties that no component read were removed. `ix-badge`: `--ix-badge-offset-x`, `--ix-badge-offset-y`, `--ix-badge-max-width`, `--ix-badge-animation-duration`, and `--ix-badge-pulse-color` are now `--ix-badge--offset-x`, `--ix-badge--offset-y`, `--ix-badge--max-width`, `--ix-badge--animation-duration`, and `--ix-badge--pulse-color`. See `BREAKING_CHANGES/v6.md` for migration steps.
