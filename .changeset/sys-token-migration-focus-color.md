---
'@siemens/ix': major
---

Migrate remaining legacy `--theme-color-*` references in component styles to the new `si/sys` design tokens, per the SI Theme Token Migration Guide (v6.0 scope, including breaking direct/conditional mappings).

- Continued the token migration started for `ix-chat-input`, `ix-menu`, `ix-select` (`--theme-si-sys-effects-focus`, `--theme-si-sys-text-information`, `--theme-si-sys-text-warning`) across the remaining ~60 components that still referenced legacy tokens, including `ix-action-card`, `ix-avatar`, `ix-blind`, `ix-breadcrumb`, `ix-button`, `ix-card`, `ix-card-accordion`, `ix-category-filter`, `ix-checkbox`, `ix-chip`, `ix-date-picker`, `ix-dropdown`, `ix-empty-state`, `ix-filter-chip`, `ix-flip-tile`, `ix-group`, `ix-input`, `ix-key-value`, `ix-kpi`, `ix-message-bar`, `ix-modal`, `ix-pane`, `ix-popover`, `ix-progress-indicator`, `ix-push-card`, `ix-radio`, `ix-slider`, `ix-spinner`, `ix-tab-item`, `ix-tile`, `ix-time-picker`, `ix-toast`, `ix-toggle`, `ix-tooltip`, `ix-upload`, `ix-workflow-step`, and others.
- Recombined split legacy shadow tokens (separate `--theme-color-shadow-1/2/3` color pieces plus hardcoded literal offsets) into the new combined `--theme-si-sys-effects-shadow-1..4` tokens for `ix-date-time-card`, `ix-dropdown`, `ix-menu`, `ix-modal`, `ix-pane`, `ix-popover`, `ix-toast`, and `ix-tooltip`. `ix-popover`'s elevation filter was restructured from three `drop-shadow()` layers built from literal offsets into two `drop-shadow()` layers matching the new combined shadow token.
- Applied the v6.0 breaking color-value changes for `warning`, `critical`, and `neutral` status categories (e.g. message-bar, toggle, chip, radio, checkbox, select, progress-indicator validation/status styling) where the legacy token was previously used for these states.
- Updated the modal message helper's warning, error, and success icons to use the corresponding SI system background tokens.
- Migrated legacy color names in component TypeScript, notification icons, custom-color examples, and typography's runtime color resolution to direct SI system tokens.
- Fixed a stale, undefined `--theme-input--color--disabled` CSS custom property reference in the shared input styles (affecting `ix-input`, `ix-textarea`, `ix-number-input`, `ix-date-input`, `ix-time-input`) to correctly use the existing `--ix-input--color--disabled` component token.

Minor visual changes are expected for classic light/dark themes wherever a `warning`/`critical`/`neutral` breaking color mapping or the shadow-token recombination applies; all other migrated tokens resolve to the same rendered colors as before. Visual regression snapshots were updated accordingly.

A number of legacy tokens without a confirmed automated replacement (`investigate_6x` entries from the migration guide, e.g. `color-component-2/3/4/7/8/9/10`, `color-dynamic--hover/--active`, `color-primary--disabled`, `color-backdrop-3`, and a few context-dependent background usages in `ix-slider` and a gradient stop in `ix-menu`) remain on legacy tokens and are flagged for manual follow-up in a future release.

When passing theme color names to component color properties, replace legacy values such as `color-primary`, `color-alarm`, and `color-soft-text` with their purpose-based `si-sys-*` equivalents. The exported `NotificationColor` literals now use `si-sys-text-*` names.
