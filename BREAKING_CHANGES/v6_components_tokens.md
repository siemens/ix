# Breaking Changes V6: Component Tokens

This guide expands the [V6 migration guide](v6.md#removed-deprecated-component-tokens).

## Removed deprecated component tokens

The v5 generated component-token layer has been removed completely:
`scss/deprecated/components/`, its `_components.scss` aggregator, the
`setComponentVars` mixin, and the
`@siemens/ix/scss/deprecated/components` package export no longer exist.
Remove imports and mixin calls for this module. Migrated IX components do
not consume these aliases; use their scoped, purpose-based `--ix-*`
properties for component customization.

The tables below list all 1,557 removed aliases, grouped by their original
component file. System-token replacements are for downstream CSS that
read the aliases, not a way to restore the removed component overrides.
Use each replacement with the appropriate CSS property: a color token is
not a complete border or shadow, and a sizing token is not a complete
border. SI Theme 6 values can differ from v5 values.

Status-surface text uses the corresponding `text-on-*` token, for example
`--si-sys-color-text-on-critical` on a critical background. These replacements
follow the component's use-site semantics rather than a literal substitution
of its underlying global legacy color.

`no replacement` means there is no clean one-to-one system-token
successor. This includes transparent or `none` values, opacity,
component-specific colors, and dimensions without a matching semantic
token. Remove the reference or define the required value in application
styles; do not substitute an unrelated token solely because its value
looks similar.

For example, replace a downstream background reference directly:

```css
/* Before */
background: var(--theme-btn-primary--background);

/* After */
background: var(--si-sys-color-background-accent);
```

To customize the component itself, use its current scoped property:

```css
ix-button {
  --ix-button-primary--background: var(--si-sys-color-background-accent);
}
```

### action-card

| Removed token                                          | System-token replacement                       |
| ------------------------------------------------------ | ---------------------------------------------- |
| `--theme-action-card--border-radius`                   | `--si-sys-sizing-border-radius-sm`             |
| `--theme-action-card--border-width`                    | `--si-sys-sizing-border-width-default`         |
| `--theme-action-card--focus--outline-offset`           | `--si-sys-sizing-focus-ring-offset`            |
| `--theme-action-card-alarm--background`                | `--si-sys-color-background-danger`             |
| `--theme-action-card-alarm--background--active`        | `--si-sys-color-background-danger-active`      |
| `--theme-action-card-alarm--background--hover`         | `--si-sys-color-background-danger-hover`       |
| `--theme-action-card-alarm--background--selected`      | `--si-sys-color-background-danger`             |
| `--theme-action-card-alarm--border-color`              | no replacement                                 |
| `--theme-action-card-alarm--border-color--active`      | no replacement                                 |
| `--theme-action-card-alarm--border-color--hover`       | no replacement                                 |
| `--theme-action-card-alarm--border-color--selected`    | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-alarm--color`                     | `--si-sys-color-text-on-danger`                |
| `--theme-action-card-alarm-subtext--color`             | `--si-sys-color-text-on-danger`                |
| `--theme-action-card-critical--background`             | `--si-sys-color-background-critical`           |
| `--theme-action-card-critical--background--active`     | `--si-sys-color-background-critical-active`    |
| `--theme-action-card-critical--background--hover`      | `--si-sys-color-background-critical-hover`     |
| `--theme-action-card-critical--background--selected`   | `--si-sys-color-background-critical`           |
| `--theme-action-card-critical--border-color`           | no replacement                                 |
| `--theme-action-card-critical--border-color--active`   | no replacement                                 |
| `--theme-action-card-critical--border-color--hover`    | no replacement                                 |
| `--theme-action-card-critical--border-color--selected` | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-critical--color`                  | `--si-sys-color-text-on-critical`              |
| `--theme-action-card-critical-subtext--color`          | `--si-sys-color-text-on-critical`              |
| `--theme-action-card-filled--background`               | `--si-sys-color-background-1`                  |
| `--theme-action-card-filled--background--active`       | `--si-sys-color-background-active`             |
| `--theme-action-card-filled--background--hover`        | `--si-sys-color-background-hover`              |
| `--theme-action-card-filled--background--selected`     | `--si-sys-color-background-active`             |
| `--theme-action-card-filled--border-color`             | no replacement                                 |
| `--theme-action-card-filled--border-color--active`     | no replacement                                 |
| `--theme-action-card-filled--border-color--hover`      | no replacement                                 |
| `--theme-action-card-filled--border-color--selected`   | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-filled--color`                    | `--si-sys-color-text-primary`                  |
| `--theme-action-card-filled-subtext--color`            | `--si-sys-color-text-secondary`                |
| `--theme-action-card-info--background`                 | `--si-sys-color-background-information`        |
| `--theme-action-card-info--background--active`         | `--si-sys-color-background-information-active` |
| `--theme-action-card-info--background--hover`          | `--si-sys-color-background-information-hover`  |
| `--theme-action-card-info--background--selected`       | `--si-sys-color-background-information`        |
| `--theme-action-card-info--border-color`               | no replacement                                 |
| `--theme-action-card-info--border-color--active`       | no replacement                                 |
| `--theme-action-card-info--border-color--hover`        | no replacement                                 |
| `--theme-action-card-info--border-color--selected`     | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-info--color`                      | `--si-sys-color-text-on-information`           |
| `--theme-action-card-info-subtext--color`              | `--si-sys-color-text-on-information`           |
| `--theme-action-card-neutral--background`              | `--si-sys-color-background-neutral`            |
| `--theme-action-card-neutral--background--active`      | `--si-sys-color-background-selected`           |
| `--theme-action-card-neutral--background--hover`       | `--si-sys-color-background-hover`              |
| `--theme-action-card-neutral--background--selected`    | `--si-sys-color-background-neutral`            |
| `--theme-action-card-neutral--border-color`            | no replacement                                 |
| `--theme-action-card-neutral--border-color--active`    | no replacement                                 |
| `--theme-action-card-neutral--border-color--hover`     | no replacement                                 |
| `--theme-action-card-neutral--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-neutral--color`                   | `--si-sys-color-text-on-neutral`               |
| `--theme-action-card-neutral-subtext--color`           | `--si-sys-color-text-on-neutral`               |
| `--theme-action-card-outline--background`              | no replacement                                 |
| `--theme-action-card-outline--background--active`      | `--si-sys-color-background-active`             |
| `--theme-action-card-outline--background--hover`       | `--si-sys-color-background-hover`              |
| `--theme-action-card-outline--background--selected`    | `--si-sys-color-background-active`             |
| `--theme-action-card-outline--border-color`            | `--si-sys-color-border-3`                      |
| `--theme-action-card-outline--border-color--active`    | `--si-sys-color-border-3`                      |
| `--theme-action-card-outline--border-color--hover`     | `--si-sys-color-border-3`                      |
| `--theme-action-card-outline--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-outline-subtext--color`           | `--si-sys-color-text-secondary`                |
| `--theme-action-card-primary--background`              | `--si-sys-color-background-accent`             |
| `--theme-action-card-primary--background--active`      | `--si-sys-color-background-accent-active`      |
| `--theme-action-card-primary--background--hover`       | `--si-sys-color-background-accent-hover`       |
| `--theme-action-card-primary--background--selected`    | `--si-sys-color-background-accent`             |
| `--theme-action-card-primary--border-color`            | no replacement                                 |
| `--theme-action-card-primary--border-color--active`    | no replacement                                 |
| `--theme-action-card-primary--border-color--hover`     | no replacement                                 |
| `--theme-action-card-primary--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-primary--color`                   | `--si-sys-color-text-on-accent`                |
| `--theme-action-card-primary-subtext--color`           | `--si-sys-color-text-on-accent`                |
| `--theme-action-card-success--background`              | `--si-sys-color-background-success`            |
| `--theme-action-card-success--background--active`      | `--si-sys-color-background-success-active`     |
| `--theme-action-card-success--background--hover`       | `--si-sys-color-background-success-hover`      |
| `--theme-action-card-success--background--selected`    | `--si-sys-color-background-success`            |
| `--theme-action-card-success--border-color`            | no replacement                                 |
| `--theme-action-card-success--border-color--active`    | no replacement                                 |
| `--theme-action-card-success--border-color--hover`     | no replacement                                 |
| `--theme-action-card-success--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-success--color`                   | `--si-sys-color-text-on-success`               |
| `--theme-action-card-warning--background`              | `--si-sys-color-background-warning`            |
| `--theme-action-card-warning--background--active`      | `--si-sys-color-background-warning-active`     |
| `--theme-action-card-warning--background--hover`       | `--si-sys-color-background-warning-hover`      |
| `--theme-action-card-warning--background--selected`    | `--si-sys-color-background-warning`            |
| `--theme-action-card-warning--border-color`            | no replacement                                 |
| `--theme-action-card-warning--border-color--active`    | no replacement                                 |
| `--theme-action-card-warning--border-color--hover`     | no replacement                                 |
| `--theme-action-card-warning--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-action-card-warning--color`                   | `--si-sys-color-text-on-warning`               |
| `--theme-action-card-warning-subtext--color`           | `--si-sys-color-text-on-warning`               |

### app-header

| Removed token                                | System-token replacement               |
| -------------------------------------------- | -------------------------------------- |
| `--theme-app-header--background`             | `--si-sys-color-background-1`          |
| `--theme-app-header--border-color`           | `--si-sys-color-border-4`              |
| `--theme-app-header--border-width`           | `--si-sys-sizing-border-width-default` |
| `--theme-app-header--color`                  | `--si-sys-color-text-primary`          |
| `--theme-app-header-app-icon--outline-color` | `--si-sys-color-border-2`              |
| `--theme-app-header-logo--color`             | `--si-sys-color-effects-logo`          |
| `--theme-app-header-name-suffix--color`      | `--si-sys-color-text-secondary`        |

### avatar

| Removed token                            | System-token replacement           |
| ---------------------------------------- | ---------------------------------- |
| `--theme-avatar--background`             | no replacement                     |
| `--theme-avatar--color`                  | `--si-sys-color-text-primary`      |
| `--theme-avatar-btn--background`         | no replacement                     |
| `--theme-avatar-btn--background--active` | `--si-sys-color-background-active` |
| `--theme-avatar-btn--background--hover`  | `--si-sys-color-background-hover`  |
| `--theme-avatar-btn--color`              | `--si-sys-color-text-primary`      |
| `--theme-avatar-btn--color--active`      | `--si-sys-color-text-primary`      |
| `--theme-avatar-btn--color--hover`       | `--si-sys-color-text-primary`      |

### blind

| Removed token                                     | System-token replacement                       |
| ------------------------------------------------- | ---------------------------------------------- |
| `--theme-blind--border-radius`                    | `--si-sys-sizing-border-radius-sm`             |
| `--theme-blind--border-thickness`                 | `--si-sys-sizing-border-width-default`         |
| `--theme-blind-alarm-background`                  | `--si-sys-color-background-danger`             |
| `--theme-blind-alarm-background--active`          | `--si-sys-color-background-danger-active`      |
| `--theme-blind-alarm-background--hover`           | `--si-sys-color-background-danger-hover`       |
| `--theme-blind-alarm-color`                       | `--si-sys-color-text-on-danger`                |
| `--theme-blind-base--background`                  | `--si-sys-color-background-1`                  |
| `--theme-blind-base--border-color`                | no replacement                                 |
| `--theme-blind-critical-background`               | `--si-sys-color-background-critical`           |
| `--theme-blind-critical-background--active`       | `--si-sys-color-background-critical-active`    |
| `--theme-blind-critical-background--hover`        | `--si-sys-color-background-critical-hover`     |
| `--theme-blind-critical-color`                    | `--si-sys-color-text-on-critical`              |
| `--theme-blind-header-closed--background`         | no replacement                                 |
| `--theme-blind-header-closed--background--active` | `--si-sys-color-background-active`             |
| `--theme-blind-header-closed--background--hover`  | `--si-sys-color-background-hover`              |
| `--theme-blind-header-closed--color`              | `--si-sys-color-text-primary`                  |
| `--theme-blind-header-closed--color--active`      | `--si-sys-color-text-primary`                  |
| `--theme-blind-header-closed--color--hover`       | `--si-sys-color-text-primary`                  |
| `--theme-blind-header-icon-closed--color`         | `--si-sys-color-text-accent`                   |
| `--theme-blind-header-icon-closed--color--active` | `--si-sys-color-text-accent`                   |
| `--theme-blind-header-icon-closed--color--hover`  | `--si-sys-color-text-accent`                   |
| `--theme-blind-header-icon-open--color`           | `--si-sys-color-text-accent-hover`             |
| `--theme-blind-header-icon-open--color--active`   | `--si-sys-color-text-accent-hover`             |
| `--theme-blind-header-icon-open--color--hover`    | `--si-sys-color-text-accent-hover`             |
| `--theme-blind-header-open--background`           | no replacement                                 |
| `--theme-blind-header-open--background--active`   | `--si-sys-color-background-active`             |
| `--theme-blind-header-open--background--hover`    | `--si-sys-color-background-hover`              |
| `--theme-blind-header-open--color`                | `--si-sys-color-text-primary`                  |
| `--theme-blind-header-open--color--active`        | `--si-sys-color-text-primary`                  |
| `--theme-blind-header-open--color--hover`         | `--si-sys-color-text-primary`                  |
| `--theme-blind-info-background`                   | `--si-sys-color-background-information`        |
| `--theme-blind-info-background--active`           | `--si-sys-color-background-information-active` |
| `--theme-blind-info-background--hover`            | `--si-sys-color-background-information-hover`  |
| `--theme-blind-info-color`                        | `--si-sys-color-text-on-information`           |
| `--theme-blind-neutral-background`                | `--si-sys-color-background-neutral`            |
| `--theme-blind-neutral-background--active`        | `--si-sys-color-background-neutral`            |
| `--theme-blind-neutral-background--hover`         | `--si-sys-color-background-neutral`            |
| `--theme-blind-neutral-color`                     | `--si-sys-color-text-inverse`                  |
| `--theme-blind-primary-background`                | `--si-sys-color-background-accent`             |
| `--theme-blind-primary-background--active`        | `--si-sys-color-background-accent-active`      |
| `--theme-blind-primary-background--hover`         | `--si-sys-color-background-accent-hover`       |
| `--theme-blind-primary-color`                     | `--si-sys-color-text-on-accent`                |
| `--theme-blind-success-background`                | `--si-sys-color-background-success`            |
| `--theme-blind-success-background--active`        | `--si-sys-color-background-success-active`     |
| `--theme-blind-success-background--hover`         | `--si-sys-color-background-success-hover`      |
| `--theme-blind-success-color`                     | `--si-sys-color-text-on-success`               |
| `--theme-blind-warning-background`                | `--si-sys-color-background-warning`            |
| `--theme-blind-warning-background--active`        | `--si-sys-color-background-warning-active`     |
| `--theme-blind-warning-background--hover`         | `--si-sys-color-background-warning-hover`      |
| `--theme-blind-warning-color`                     | `--si-sys-color-text-on-warning`               |

### button

| Removed token                                                | System-token replacement                            |
| ------------------------------------------------------------ | --------------------------------------------------- |
| `--theme-btn--border-radius`                                 | `--si-sys-sizing-border-radius-xs`                  |
| `--theme-btn--border-thickness`                              | `--si-sys-sizing-border-width-default`              |
| `--theme-btn--focus--outline-offset`                         | `--si-sys-sizing-focus-ring-offset`                 |
| `--theme-btn-danger-primary--background`                     | `--si-sys-color-background-danger`                  |
| `--theme-btn-danger-primary--background--active`             | `--si-sys-color-background-danger-active`           |
| `--theme-btn-danger-primary--background--disabled`           | no replacement                                      |
| `--theme-btn-danger-primary--background--hover`              | `--si-sys-color-background-danger-hover`            |
| `--theme-btn-danger-primary--border-color`                   | no replacement                                      |
| `--theme-btn-danger-primary--border-color--active`           | no replacement                                      |
| `--theme-btn-danger-primary--border-color--disabled`         | no replacement                                      |
| `--theme-btn-danger-primary--border-color--hover`            | no replacement                                      |
| `--theme-btn-danger-primary--color`                          | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-primary--color--active`                  | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-primary--color--disabled`                | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-danger-primary--color--hover`                   | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-secondary--background`                   | no replacement                                      |
| `--theme-btn-danger-secondary--background--active`           | `--si-sys-color-background-danger-active`           |
| `--theme-btn-danger-secondary--background--disabled`         | no replacement                                      |
| `--theme-btn-danger-secondary--background--hover`            | `--si-sys-color-background-danger-hover`            |
| `--theme-btn-danger-secondary--border-color`                 | `--si-sys-color-text-danger`                        |
| `--theme-btn-danger-secondary--border-color--active`         | `--si-sys-color-background-danger-active`           |
| `--theme-btn-danger-secondary--border-color--disabled`       | no replacement                                      |
| `--theme-btn-danger-secondary--border-color--hover`          | `--si-sys-color-background-danger-hover`            |
| `--theme-btn-danger-secondary--color`                        | `--si-sys-color-text-danger`                        |
| `--theme-btn-danger-secondary--color--active`                | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-secondary--color--disabled`              | `--si-sys-color-text-disabled`                      |
| `--theme-btn-danger-secondary--color--hover`                 | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-tertiary--background`                    | no replacement                                      |
| `--theme-btn-danger-tertiary--background--active`            | `--si-sys-color-background-danger-active`           |
| `--theme-btn-danger-tertiary--background--disabled`          | no replacement                                      |
| `--theme-btn-danger-tertiary--background--hover`             | `--si-sys-color-background-danger-hover`            |
| `--theme-btn-danger-tertiary--border-color`                  | no replacement                                      |
| `--theme-btn-danger-tertiary--border-color--active`          | no replacement                                      |
| `--theme-btn-danger-tertiary--border-color--disabled`        | no replacement                                      |
| `--theme-btn-danger-tertiary--border-color--hover`           | no replacement                                      |
| `--theme-btn-danger-tertiary--color`                         | `--si-sys-color-text-danger`                        |
| `--theme-btn-danger-tertiary--color--active`                 | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-danger-tertiary--color--disabled`               | `--si-sys-color-text-disabled`                      |
| `--theme-btn-danger-tertiary--color--hover`                  | `--si-sys-color-text-on-danger`                     |
| `--theme-btn-primary--background`                            | `--si-sys-color-background-accent`                  |
| `--theme-btn-primary--background--active`                    | `--si-sys-color-background-accent-active`           |
| `--theme-btn-primary--background--disabled`                  | no replacement                                      |
| `--theme-btn-primary--background--hover`                     | `--si-sys-color-background-accent-hover`            |
| `--theme-btn-primary--background--pressed`                   | `--si-sys-color-background-accent-hover`            |
| `--theme-btn-primary--background--pressed-active`            | `--si-sys-color-background-accent-active`           |
| `--theme-btn-primary--background--pressed-hover`             | `--si-sys-color-background-accent-hover`            |
| `--theme-btn-primary--border-color`                          | no replacement                                      |
| `--theme-btn-primary--border-color--active`                  | no replacement                                      |
| `--theme-btn-primary--border-color--disabled`                | no replacement                                      |
| `--theme-btn-primary--border-color--hover`                   | no replacement                                      |
| `--theme-btn-primary--border-color--pressed`                 | no replacement                                      |
| `--theme-btn-primary--border-color--pressed-hover`           | no replacement                                      |
| `--theme-btn-primary--border-color--pressed-hover-active`    | no replacement                                      |
| `--theme-btn-primary--color`                                 | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--active`                         | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--disabled`                       | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--hover`                          | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--pressed`                        | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--pressed-active`                 | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-primary--color--pressed-hover`                  | `--si-sys-color-text-on-accent`                     |
| `--theme-btn-secondary--background`                          | `--si-sys-color-background-accent-secondary`        |
| `--theme-btn-secondary--background--active`                  | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-secondary--background--disabled`                | no replacement                                      |
| `--theme-btn-secondary--background--hover`                   | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-secondary--background--pressed`                 | no replacement                                      |
| `--theme-btn-secondary--background--pressed-active`          | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-secondary--background--pressed-hover`           | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-secondary--border-color`                        | `--si-sys-color-border-accent`                      |
| `--theme-btn-secondary--border-color--active`                | `--si-sys-color-border-accent-active`               |
| `--theme-btn-secondary--border-color--disabled`              | no replacement                                      |
| `--theme-btn-secondary--border-color--hover`                 | `--si-sys-color-border-accent-hover`                |
| `--theme-btn-secondary--border-color--pressed`               | `--si-sys-color-border-accent-hover`                |
| `--theme-btn-secondary--border-color--pressed-active`        | `--si-sys-color-border-accent-active`               |
| `--theme-btn-secondary--border-color--pressed-hover`         | `--si-sys-color-border-accent-hover`                |
| `--theme-btn-secondary--color`                               | `--si-sys-color-text-accent`                        |
| `--theme-btn-secondary--color--active`                       | `--si-sys-color-text-accent-active`                 |
| `--theme-btn-secondary--color--disabled`                     | `--si-sys-color-text-disabled`                      |
| `--theme-btn-secondary--color--hover`                        | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-secondary--color--pressed`                      | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-secondary--color--pressed-active`               | `--si-sys-color-text-accent-active`                 |
| `--theme-btn-secondary--color--pressed-hover`                | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-primary--background`                     | no replacement                                      |
| `--theme-btn-subtle-primary--background--active`             | `--si-sys-color-background-active`                  |
| `--theme-btn-subtle-primary--background--disabled`           | no replacement                                      |
| `--theme-btn-subtle-primary--background--hover`              | `--si-sys-color-background-hover`                   |
| `--theme-btn-subtle-primary--background--pressed`            | no replacement                                      |
| `--theme-btn-subtle-primary--background--pressed-active`     | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-subtle-primary--background--pressed-hover`      | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-subtle-primary--border-color`                   | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--active`           | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--disabled`         | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--hover`            | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--pressed`          | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--pressed-active`   | no replacement                                      |
| `--theme-btn-subtle-primary--border-color--pressed-hover`    | no replacement                                      |
| `--theme-btn-subtle-primary--color`                          | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-primary--color--active`                  | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-primary--color--disabled`                | `--si-sys-color-text-disabled`                      |
| `--theme-btn-subtle-primary--color--hover`                   | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-primary--color--pressed`                 | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-primary--color--pressed-active`          | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-primary--color--pressed-hover`           | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-secondary--background`                   | no replacement                                      |
| `--theme-btn-subtle-secondary--background--active`           | `--si-sys-color-background-active`                  |
| `--theme-btn-subtle-secondary--background--disabled`         | no replacement                                      |
| `--theme-btn-subtle-secondary--background--hover`            | `--si-sys-color-background-hover`                   |
| `--theme-btn-subtle-secondary--background--pressed`          | no replacement                                      |
| `--theme-btn-subtle-secondary--background--pressed-active`   | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-subtle-secondary--background--pressed-hover`    | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-subtle-secondary--border-color`                 | no replacement                                      |
| `--theme-btn-subtle-secondary--border-color--active`         | no replacement                                      |
| `--theme-btn-subtle-secondary--border-color--disabled`       | no replacement                                      |
| `--theme-btn-subtle-secondary--border-color--hover`          | no replacement                                      |
| `--theme-btn-subtle-secondary--border-color--pressed`        | `--si-sys-color-border-2`                           |
| `--theme-btn-subtle-secondary--border-color--pressed-active` | `--si-sys-color-border-2`                           |
| `--theme-btn-subtle-secondary--border-color--pressed-hover`  | `--si-sys-color-border-2`                           |
| `--theme-btn-subtle-secondary--color`                        | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-secondary--color--active`                | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-secondary--color--disabled`              | `--si-sys-color-text-disabled`                      |
| `--theme-btn-subtle-secondary--color--hover`                 | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-secondary--color--pressed`               | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-secondary--color--pressed-active`        | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-secondary--color--pressed-hover`         | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-tertiary--background`                    | no replacement                                      |
| `--theme-btn-subtle-tertiary--background--active`            | `--si-sys-color-background-active`                  |
| `--theme-btn-subtle-tertiary--background--disabled`          | no replacement                                      |
| `--theme-btn-subtle-tertiary--background--hover`             | `--si-sys-color-background-hover`                   |
| `--theme-btn-subtle-tertiary--background--pressed`           | no replacement                                      |
| `--theme-btn-subtle-tertiary--background--pressed-active`    | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-subtle-tertiary--background--pressed-hover`     | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-subtle-tertiary--border-color`                  | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--active`          | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--disabled`        | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--hover`           | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--pressed`         | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--pressed-active`  | no replacement                                      |
| `--theme-btn-subtle-tertiary--border-color--pressed-hover`   | no replacement                                      |
| `--theme-btn-subtle-tertiary--color`                         | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-tertiary--color--active`                 | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-tertiary--color--disabled`               | `--si-sys-color-text-disabled`                      |
| `--theme-btn-subtle-tertiary--color--hover`                  | `--si-sys-color-text-primary`                       |
| `--theme-btn-subtle-tertiary--color--pressed`                | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-tertiary--color--pressed-active`         | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-subtle-tertiary--color--pressed-hover`          | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-tertiary--background`                           | no replacement                                      |
| `--theme-btn-tertiary--background--active`                   | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-tertiary--background--disabled`                 | no replacement                                      |
| `--theme-btn-tertiary--background--hover`                    | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-tertiary--background--pressed`                  | no replacement                                      |
| `--theme-btn-tertiary--background--pressed-active`           | `--si-sys-color-background-accent-secondary-active` |
| `--theme-btn-tertiary--background--pressed-hover`            | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-btn-tertiary--border-color`                         | no replacement                                      |
| `--theme-btn-tertiary--border-color--active`                 | no replacement                                      |
| `--theme-btn-tertiary--border-color--disabled`               | no replacement                                      |
| `--theme-btn-tertiary--border-color--hover`                  | no replacement                                      |
| `--theme-btn-tertiary--border-color--pressed`                | no replacement                                      |
| `--theme-btn-tertiary--border-color--pressed-active`         | no replacement                                      |
| `--theme-btn-tertiary--border-color--pressed-hover`          | no replacement                                      |
| `--theme-btn-tertiary--color`                                | `--si-sys-color-text-accent`                        |
| `--theme-btn-tertiary--color--active`                        | `--si-sys-color-text-accent-active`                 |
| `--theme-btn-tertiary--color--disabled`                      | `--si-sys-color-text-disabled`                      |
| `--theme-btn-tertiary--color--hover`                         | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-tertiary--color--pressed`                       | `--si-sys-color-text-accent-hover`                  |
| `--theme-btn-tertiary--color--pressed-active`                | `--si-sys-color-text-accent-active`                 |
| `--theme-btn-tertiary--color--pressed-hover`                 | `--si-sys-color-text-accent-hover`                  |

### card

| Removed token                                   | System-token replacement                       |
| ----------------------------------------------- | ---------------------------------------------- |
| `--theme-card--border-radius`                   | `--si-sys-sizing-border-radius-sm`             |
| `--theme-card--border-width`                    | `--si-sys-sizing-border-width-default`         |
| `--theme-card--focus--outline-offset`           | `--si-sys-sizing-focus-ring-offset`            |
| `--theme-card-alarm--background`                | `--si-sys-color-background-danger`             |
| `--theme-card-alarm--background--active`        | `--si-sys-color-background-danger-active`      |
| `--theme-card-alarm--background--hover`         | `--si-sys-color-background-danger-hover`       |
| `--theme-card-alarm--background--selected`      | `--si-sys-color-background-danger`             |
| `--theme-card-alarm--border-color`              | no replacement                                 |
| `--theme-card-alarm--border-color--active`      | no replacement                                 |
| `--theme-card-alarm--border-color--hover`       | no replacement                                 |
| `--theme-card-alarm--border-color--selected`    | `--si-sys-color-border-accent-hover`           |
| `--theme-card-alarm--color`                     | `--si-sys-color-text-on-danger`                |
| `--theme-card-critical--background`             | `--si-sys-color-background-critical`           |
| `--theme-card-critical--background--active`     | `--si-sys-color-background-critical-active`    |
| `--theme-card-critical--background--hover`      | `--si-sys-color-background-critical-hover`     |
| `--theme-card-critical--background--selected`   | `--si-sys-color-background-critical`           |
| `--theme-card-critical--border-color`           | no replacement                                 |
| `--theme-card-critical--border-color--active`   | no replacement                                 |
| `--theme-card-critical--border-color--hover`    | no replacement                                 |
| `--theme-card-critical--border-color--selected` | `--si-sys-color-border-accent-hover`           |
| `--theme-card-critical--color`                  | `--si-sys-color-text-on-critical`              |
| `--theme-card-filled--background`               | `--si-sys-color-background-1`                  |
| `--theme-card-filled--background--active`       | `--si-sys-color-background-active`             |
| `--theme-card-filled--background--hover`        | `--si-sys-color-background-hover`              |
| `--theme-card-filled--background--selected`     | `--si-sys-color-background-active`             |
| `--theme-card-filled--border-color`             | no replacement                                 |
| `--theme-card-filled--border-color--active`     | no replacement                                 |
| `--theme-card-filled--border-color--hover`      | no replacement                                 |
| `--theme-card-filled--border-color--selected`   | `--si-sys-color-border-accent-hover`           |
| `--theme-card-filled--color`                    | `--si-sys-color-text-primary`                  |
| `--theme-card-info--background`                 | `--si-sys-color-background-information`        |
| `--theme-card-info--background--active`         | `--si-sys-color-background-information-active` |
| `--theme-card-info--background--hover`          | `--si-sys-color-background-information-hover`  |
| `--theme-card-info--background--selected`       | `--si-sys-color-background-information`        |
| `--theme-card-info--border-color`               | no replacement                                 |
| `--theme-card-info--border-color--active`       | no replacement                                 |
| `--theme-card-info--border-color--hover`        | no replacement                                 |
| `--theme-card-info--border-color--selected`     | `--si-sys-color-border-accent-hover`           |
| `--theme-card-info--color`                      | `--si-sys-color-text-on-information`           |
| `--theme-card-neutral--background`              | `--si-sys-color-background-neutral`            |
| `--theme-card-neutral--background--active`      | `--si-sys-color-background-selected`           |
| `--theme-card-neutral--background--hover`       | `--si-sys-color-background-hover`              |
| `--theme-card-neutral--background--selected`    | `--si-sys-color-background-neutral`            |
| `--theme-card-neutral--border-color`            | no replacement                                 |
| `--theme-card-neutral--border-color--active`    | no replacement                                 |
| `--theme-card-neutral--border-color--hover`     | no replacement                                 |
| `--theme-card-neutral--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-card-neutral--color`                   | `--si-sys-color-text-on-neutral`               |
| `--theme-card-outline--background`              | no replacement                                 |
| `--theme-card-outline--background--active`      | `--si-sys-color-background-active`             |
| `--theme-card-outline--background--hover`       | `--si-sys-color-background-hover`              |
| `--theme-card-outline--background--selected`    | `--si-sys-color-background-active`             |
| `--theme-card-outline--border-color`            | `--si-sys-color-border-3`                      |
| `--theme-card-outline--border-color--active`    | `--si-sys-color-border-3`                      |
| `--theme-card-outline--border-color--hover`     | `--si-sys-color-border-3`                      |
| `--theme-card-outline--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-card-outline--color`                   | `--si-sys-color-text-primary`                  |
| `--theme-card-primary--background`              | `--si-sys-color-background-accent`             |
| `--theme-card-primary--background--active`      | `--si-sys-color-background-accent-active`      |
| `--theme-card-primary--background--hover`       | `--si-sys-color-background-accent-hover`       |
| `--theme-card-primary--background--selected`    | `--si-sys-color-background-accent`             |
| `--theme-card-primary--border-color`            | no replacement                                 |
| `--theme-card-primary--border-color--active`    | no replacement                                 |
| `--theme-card-primary--border-color--hover`     | no replacement                                 |
| `--theme-card-primary--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-card-primary--color`                   | `--si-sys-color-text-on-accent`                |
| `--theme-card-success--background`              | `--si-sys-color-background-success`            |
| `--theme-card-success--background--active`      | `--si-sys-color-background-success-active`     |
| `--theme-card-success--background--hover`       | `--si-sys-color-background-success-hover`      |
| `--theme-card-success--background--selected`    | `--si-sys-color-background-success`            |
| `--theme-card-success--border-color`            | no replacement                                 |
| `--theme-card-success--border-color--active`    | no replacement                                 |
| `--theme-card-success--border-color--hover`     | no replacement                                 |
| `--theme-card-success--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-card-success--color`                   | `--si-sys-color-text-on-success`               |
| `--theme-card-warning--background`              | `--si-sys-color-background-warning`            |
| `--theme-card-warning--background--active`      | `--si-sys-color-background-warning-active`     |
| `--theme-card-warning--background--hover`       | `--si-sys-color-background-warning-hover`      |
| `--theme-card-warning--background--selected`    | `--si-sys-color-background-warning`            |
| `--theme-card-warning--border-color`            | no replacement                                 |
| `--theme-card-warning--border-color--active`    | no replacement                                 |
| `--theme-card-warning--border-color--hover`     | no replacement                                 |
| `--theme-card-warning--border-color--selected`  | `--si-sys-color-border-accent-hover`           |
| `--theme-card-warning--color`                   | `--si-sys-color-text-on-warning`               |

### checkbox

| Removed token                                               | System-token replacement                       |
| ----------------------------------------------------------- | ---------------------------------------------- |
| `--theme-checkbox--border-thickness`                        | `--si-sys-sizing-border-width-default`         |
| `--theme-checkbox--focus--outline-offset`                   | `--si-sys-sizing-focus-ring-offset`            |
| `--theme-checkbox-checked--background`                      | `--si-sys-color-background-accent`             |
| `--theme-checkbox-checked--background--active`              | `--si-sys-color-background-accent-active`      |
| `--theme-checkbox-checked--background--disabled`            | `--si-sys-color-text-disabled`                 |
| `--theme-checkbox-checked--background--hover`               | `--si-sys-color-background-accent-hover`       |
| `--theme-checkbox-checked--background--info`                | `--si-sys-color-background-information`        |
| `--theme-checkbox-checked--background--info--active`        | `--si-sys-color-background-information-active` |
| `--theme-checkbox-checked--background--info--hover`         | `--si-sys-color-background-information-hover`  |
| `--theme-checkbox-checked--background--invalid`             | `--si-sys-color-background-danger`             |
| `--theme-checkbox-checked--background--invalid--active`     | `--si-sys-color-background-danger-active`      |
| `--theme-checkbox-checked--background--invalid--hover`      | `--si-sys-color-background-danger-hover`       |
| `--theme-checkbox-checked--background--warning`             | `--si-sys-color-background-warning`            |
| `--theme-checkbox-checked--background--warning--active`     | `--si-sys-color-background-warning-active`     |
| `--theme-checkbox-checked--background--warning--hover`      | `--si-sys-color-background-warning-hover`      |
| `--theme-checkbox-checked--border-color`                    | no replacement                                 |
| `--theme-checkbox-checked--border-color--active`            | no replacement                                 |
| `--theme-checkbox-checked--border-color--disabled`          | no replacement                                 |
| `--theme-checkbox-checked--border-color--hover`             | no replacement                                 |
| `--theme-checkbox-checked--border-color--info`              | no replacement                                 |
| `--theme-checkbox-checked--border-color--info--active`      | no replacement                                 |
| `--theme-checkbox-checked--border-color--info--hover`       | no replacement                                 |
| `--theme-checkbox-checked--border-color--invalid`           | no replacement                                 |
| `--theme-checkbox-checked--border-color--invalid--active`   | no replacement                                 |
| `--theme-checkbox-checked--border-color--invalid--hover`    | no replacement                                 |
| `--theme-checkbox-checked--border-color--warning`           | `--si-sys-color-border-warning`                |
| `--theme-checkbox-checked--border-color--warning--active`   | `--si-sys-color-border-warning`                |
| `--theme-checkbox-checked--border-color--warning--hover`    | `--si-sys-color-border-warning`                |
| `--theme-checkbox-checked--color`                           | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-checked--color--active`                   | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-checked--color--disabled`                 | `--si-sys-color-text-inverse`                  |
| `--theme-checkbox-checked--color--hover`                    | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-checked--color--info`                     | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-checked--color--info--active`             | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-checked--color--info--hover`              | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-checked--color--invalid`                  | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-checked--color--invalid--active`          | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-checked--color--invalid--hover`           | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-checked--color--warning`                  | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-checked--color--warning--active`          | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-checked--color--warning--hover`           | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-label--color`                             | `--si-sys-color-text-primary`                  |
| `--theme-checkbox-label--color--disabled`                   | `--si-sys-color-text-disabled`                 |
| `--theme-checkbox-mixed--background`                        | `--si-sys-color-background-accent`             |
| `--theme-checkbox-mixed--background--active`                | `--si-sys-color-background-accent-active`      |
| `--theme-checkbox-mixed--background--disabled`              | `--si-sys-color-text-disabled`                 |
| `--theme-checkbox-mixed--background--hover`                 | `--si-sys-color-background-accent-hover`       |
| `--theme-checkbox-mixed--background--invalid`               | `--si-sys-color-background-danger`             |
| `--theme-checkbox-mixed--background--invalid--active`       | `--si-sys-color-background-danger-active`      |
| `--theme-checkbox-mixed--background--invalid--hover`        | `--si-sys-color-background-danger-hover`       |
| `--theme-checkbox-mixed--background--warning`               | `--si-sys-color-background-warning`            |
| `--theme-checkbox-mixed--background--warning--active`       | `--si-sys-color-background-warning-active`     |
| `--theme-checkbox-mixed--background--warning--hover`        | `--si-sys-color-background-warning-hover`      |
| `--theme-checkbox-mixed--border-color`                      | no replacement                                 |
| `--theme-checkbox-mixed--border-color--active`              | no replacement                                 |
| `--theme-checkbox-mixed--border-color--disabled`            | no replacement                                 |
| `--theme-checkbox-mixed--border-color--hover`               | no replacement                                 |
| `--theme-checkbox-mixed--border-color--info`                | no replacement                                 |
| `--theme-checkbox-mixed--border-color--info--active`        | no replacement                                 |
| `--theme-checkbox-mixed--border-color--info--hover`         | no replacement                                 |
| `--theme-checkbox-mixed--border-color--invalid`             | no replacement                                 |
| `--theme-checkbox-mixed--border-color--invalid--active`     | no replacement                                 |
| `--theme-checkbox-mixed--border-color--invalid--hover`      | no replacement                                 |
| `--theme-checkbox-mixed--border-color--warning`             | `--si-sys-color-border-warning`                |
| `--theme-checkbox-mixed--border-color--warning--active`     | `--si-sys-color-border-warning`                |
| `--theme-checkbox-mixed--border-color--warning--hover`      | `--si-sys-color-border-warning`                |
| `--theme-checkbox-mixed--color`                             | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-mixed--color--active`                     | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-mixed--color--disabled`                   | `--si-sys-color-text-inverse`                  |
| `--theme-checkbox-mixed--color--hover`                      | `--si-sys-color-text-on-accent`                |
| `--theme-checkbox-mixed--color--info`                       | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-mixed--color--info--active`               | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-mixed--color--info--hover`                | `--si-sys-color-text-on-information`           |
| `--theme-checkbox-mixed--color--invalid`                    | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-mixed--color--invalid--active`            | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-mixed--color--invalid--hover`             | `--si-sys-color-text-on-danger`                |
| `--theme-checkbox-mixed--color--warning`                    | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-mixed--color--warning--active`            | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-mixed--color--warning--hover`             | `--si-sys-color-text-on-warning`               |
| `--theme-checkbox-unchecked--background`                    | `--si-sys-color-background-1`                  |
| `--theme-checkbox-unchecked--background--active`            | `--si-sys-color-background-active`             |
| `--theme-checkbox-unchecked--background--disabled`          | no replacement                                 |
| `--theme-checkbox-unchecked--background--hover`             | `--si-sys-color-background-hover`              |
| `--theme-checkbox-unchecked--background--info`              | `--si-sys-color-background-1`                  |
| `--theme-checkbox-unchecked--background--info--active`      | `--si-sys-color-background-active`             |
| `--theme-checkbox-unchecked--background--info--hover`       | `--si-sys-color-background-hover`              |
| `--theme-checkbox-unchecked--background--invalid`           | `--si-sys-color-background-1`                  |
| `--theme-checkbox-unchecked--background--invalid--active`   | `--si-sys-color-background-active`             |
| `--theme-checkbox-unchecked--background--invalid--hover`    | `--si-sys-color-background-hover`              |
| `--theme-checkbox-unchecked--background--warning`           | `--si-sys-color-background-1`                  |
| `--theme-checkbox-unchecked--background--warning--active`   | `--si-sys-color-background-active`             |
| `--theme-checkbox-unchecked--background--warning--hover`    | `--si-sys-color-background-hover`              |
| `--theme-checkbox-unchecked--border-color`                  | `--si-sys-color-border-2`                      |
| `--theme-checkbox-unchecked--border-color--active`          | `--si-sys-color-border-2`                      |
| `--theme-checkbox-unchecked--border-color--disabled`        | `--si-sys-color-text-disabled`                 |
| `--theme-checkbox-unchecked--border-color--hover`           | `--si-sys-color-border-2`                      |
| `--theme-checkbox-unchecked--border-color--info`            | `--si-sys-color-border-information`            |
| `--theme-checkbox-unchecked--border-color--info--active`    | `--si-sys-color-border-information`            |
| `--theme-checkbox-unchecked--border-color--info--hover`     | `--si-sys-color-border-information`            |
| `--theme-checkbox-unchecked--border-color--invalid`         | `--si-sys-color-border-danger`                 |
| `--theme-checkbox-unchecked--border-color--invalid--active` | `--si-sys-color-border-danger`                 |
| `--theme-checkbox-unchecked--border-color--invalid--hover`  | `--si-sys-color-border-danger`                 |
| `--theme-checkbox-unchecked--border-color--warning`         | `--si-sys-color-border-warning`                |
| `--theme-checkbox-unchecked--border-color--warning--active` | `--si-sys-color-border-warning`                |
| `--theme-checkbox-unchecked--border-color--warning--hover`  | `--si-sys-color-border-warning`                |

### chip

| Removed token                                         | System-token replacement                            |
| ----------------------------------------------------- | --------------------------------------------------- |
| `--theme-chip--background`                            | `--si-sys-color-background-1`                       |
| `--theme-chip--background--active`                    | `--si-sys-color-background-active`                  |
| `--theme-chip--background--hover`                     | `--si-sys-color-background-hover`                   |
| `--theme-chip--color`                                 | `--si-sys-color-text-primary`                       |
| `--theme-chip-close-btn--background`                  | no replacement                                      |
| `--theme-chip-close-btn--background--active`          | `--si-sys-color-background-active`                  |
| `--theme-chip-close-btn--background--hover`           | `--si-sys-color-background-hover`                   |
| `--theme-chip-close-btn--color`                       | `--si-sys-color-text-secondary`                     |
| `--theme-chip-outline--background`                    | `--si-sys-color-background-accent-secondary`        |
| `--theme-chip-outline--background--active`            | `--si-sys-color-background-active`                  |
| `--theme-chip-outline--background--hover`             | `--si-sys-color-background-hover`                   |
| `--theme-chip-outline--color`                         | `--si-sys-color-text-primary`                       |
| `--theme-chip-primary--background`                    | `--si-sys-color-background-accent`                  |
| `--theme-chip-primary--background--active`            | `--si-sys-color-background-accent-active`           |
| `--theme-chip-primary--background--hover`             | `--si-sys-color-background-accent-hover`            |
| `--theme-chip-primary--color`                         | `--si-sys-color-text-on-accent`                     |
| `--theme-chip-primary--color--active`                 | `--si-sys-color-text-on-accent`                     |
| `--theme-chip-primary--color--hover`                  | `--si-sys-color-text-on-accent`                     |
| `--theme-chip-primary-outline--background`            | `--si-sys-color-background-accent-secondary`        |
| `--theme-chip-primary-outline--background--active`    | `--si-sys-color-background-accent-secondary-active` |
| `--theme-chip-primary-outline--background--display`   | `--si-sys-color-background-accent-secondary`        |
| `--theme-chip-primary-outline--background--hover`     | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-chip-primary-outline--border-color`          | `--si-sys-color-border-accent`                      |
| `--theme-chip-primary-outline--border-color--active`  | `--si-sys-color-border-accent-active`               |
| `--theme-chip-primary-outline--border-color--display` | `--si-sys-color-border-accent`                      |
| `--theme-chip-primary-outline--border-color--hover`   | `--si-sys-color-border-accent-hover`                |
| `--theme-chip-primary-outline--color`                 | `--si-sys-color-border-accent`                      |
| `--theme-chip-primary-outline--color--active`         | `--si-sys-color-border-accent-active`               |
| `--theme-chip-primary-outline--color--display`        | `--si-sys-color-text-primary`                       |
| `--theme-chip-primary-outline--color--hover`          | `--si-sys-color-border-accent-hover`                |

### datepicker

| Removed token                                               | System-token replacement                 |
| ----------------------------------------------------------- | ---------------------------------------- |
| `--theme-datepicker-cw--color`                              | `--si-sys-color-text-secondary`          |
| `--theme-datepicker-day--background`                        | no replacement                           |
| `--theme-datepicker-day--background--active`                | `--si-sys-color-background-active`       |
| `--theme-datepicker-day--background--disabled`              | no replacement                           |
| `--theme-datepicker-day--background--hover`                 | `--si-sys-color-background-hover`        |
| `--theme-datepicker-day--background--range`                 | no replacement                           |
| `--theme-datepicker-day--background--range-active`          | no replacement                           |
| `--theme-datepicker-day--background--range-disabled`        | no replacement                           |
| `--theme-datepicker-day--background--range-hover`           | no replacement                           |
| `--theme-datepicker-day--background--selected`              | `--si-sys-color-background-accent-hover` |
| `--theme-datepicker-day--background--selected-active`       | no replacement                           |
| `--theme-datepicker-day--background--selected-disabled`     | no replacement                           |
| `--theme-datepicker-day--background--selected-hover`        | no replacement                           |
| `--theme-datepicker-day--border-color`                      | no replacement                           |
| `--theme-datepicker-day--border-color--active`              | no replacement                           |
| `--theme-datepicker-day--border-color--disabled`            | no replacement                           |
| `--theme-datepicker-day--border-color--hover`               | no replacement                           |
| `--theme-datepicker-day--border-color--range`               | no replacement                           |
| `--theme-datepicker-day--border-color--range-active`        | no replacement                           |
| `--theme-datepicker-day--border-color--range-disabled`      | no replacement                           |
| `--theme-datepicker-day--border-color--range-hover`         | no replacement                           |
| `--theme-datepicker-day--border-color--selected`            | no replacement                           |
| `--theme-datepicker-day--border-color--selected-active`     | no replacement                           |
| `--theme-datepicker-day--border-color--selected-disabled`   | no replacement                           |
| `--theme-datepicker-day--border-color--selected-hover`      | no replacement                           |
| `--theme-datepicker-day--color`                             | `--si-sys-color-text-accent`             |
| `--theme-datepicker-day--color--active`                     | `--si-sys-color-text-accent`             |
| `--theme-datepicker-day--color--disabled`                   | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-day--color--hover`                      | `--si-sys-color-text-accent`             |
| `--theme-datepicker-day--color--range`                      | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-day--color--range-active`               | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-day--color--range-disabled`             | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-day--color--range-hover`                | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-day--color--selected`                   | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-day--color--selected-active`            | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-day--color--selected-disabled`          | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-day--color--selected-hover`             | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-extra--border-color`                    | `--si-sys-color-background-0`            |
| `--theme-datepicker-separator--background`                  | `--si-sys-color-border-4`                |
| `--theme-datepicker-time-header`                            | `--si-sys-color-text-primary`            |
| `--theme-datepicker-today--background`                      | no replacement                           |
| `--theme-datepicker-today--background--active`              | `--si-sys-color-background-active`       |
| `--theme-datepicker-today--background--disabled`            | no replacement                           |
| `--theme-datepicker-today--background--hover`               | `--si-sys-color-background-hover`        |
| `--theme-datepicker-today--background--range`               | no replacement                           |
| `--theme-datepicker-today--background--range-active`        | no replacement                           |
| `--theme-datepicker-today--background--range-disabled`      | no replacement                           |
| `--theme-datepicker-today--background--range-hover`         | no replacement                           |
| `--theme-datepicker-today--background--selected`            | `--si-sys-color-background-accent-hover` |
| `--theme-datepicker-today--background--selected-active`     | no replacement                           |
| `--theme-datepicker-today--background--selected-disabled`   | no replacement                           |
| `--theme-datepicker-today--background--selected-hover`      | no replacement                           |
| `--theme-datepicker-today--border-color`                    | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--active`            | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--disabled`          | no replacement                           |
| `--theme-datepicker-today--border-color--hover`             | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--range`             | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--range-active`      | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--range-disabled`    | no replacement                           |
| `--theme-datepicker-today--border-color--range-hover`       | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--selected`          | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--selected-active`   | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--border-color--selected-disabled` | no replacement                           |
| `--theme-datepicker-today--border-color--selected-hover`    | `--si-sys-color-border-accent`           |
| `--theme-datepicker-today--color`                           | `--si-sys-color-text-accent`             |
| `--theme-datepicker-today--color--active`                   | `--si-sys-color-text-accent`             |
| `--theme-datepicker-today--color--disabled`                 | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-today--color--hover`                    | `--si-sys-color-text-accent`             |
| `--theme-datepicker-today--color--range`                    | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-today--color--range-active`             | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-today--color--range-disabled`           | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-today--color--range-hover`              | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-today--color--selected`                 | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-today--color--selected-active`          | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-today--color--selected-disabled`        | `--si-sys-color-text-disabled`           |
| `--theme-datepicker-today--color--selected-hover`           | `--si-sys-color-text-on-accent`          |
| `--theme-datepicker-weekday--color`                         | `--si-sys-color-text-secondary`          |

### event-list

| Removed token                                      | System-token replacement             |
| -------------------------------------------------- | ------------------------------------ |
| `--theme-event-item-chevron--color`                | `--si-sys-color-text-secondary`      |
| `--theme-event-item-filled--background`            | `--si-sys-color-background-1`        |
| `--theme-event-item-filled--background--active`    | `--si-sys-color-background-active`   |
| `--theme-event-item-filled--background--disabled`  | `--si-sys-color-background-1`        |
| `--theme-event-item-filled--background--hover`     | `--si-sys-color-background-hover`    |
| `--theme-event-item-filled--background--selected`  | `--si-sys-color-background-active`   |
| `--theme-event-item-filled--border`                | no replacement                       |
| `--theme-event-item-filled--border--active`        | no replacement                       |
| `--theme-event-item-filled--border--disabled`      | no replacement                       |
| `--theme-event-item-filled--border--hover`         | no replacement                       |
| `--theme-event-item-filled--border--selected`      | `--si-sys-color-border-accent-hover` |
| `--theme-event-item-indicator--width`              | `--si-sys-sizing-size-30`            |
| `--theme-event-item-indicator-opacity--disabled`   | no replacement                       |
| `--theme-event-item-outline--background`           | no replacement                       |
| `--theme-event-item-outline--background--active`   | `--si-sys-color-background-active`   |
| `--theme-event-item-outline--background--disabled` | no replacement                       |
| `--theme-event-item-outline--background--hover`    | `--si-sys-color-background-hover`    |
| `--theme-event-item-outline--background--selected` | `--si-sys-color-background-active`   |
| `--theme-event-item-outline--border`               | `--si-sys-color-border-3`            |
| `--theme-event-item-outline--border--active`       | `--si-sys-color-border-3`            |
| `--theme-event-item-outline--border--disabled`     | `--si-sys-color-border-4`            |
| `--theme-event-item-outline--border--hover`        | `--si-sys-color-border-3`            |
| `--theme-event-item-outline--border--selected`     | `--si-sys-color-border-accent-hover` |

### flip

| Removed token                               | System-token replacement                |
| ------------------------------------------- | --------------------------------------- |
| `--theme-flip--border-radius`               | `--si-sys-sizing-border-radius-sm`      |
| `--theme-flip-alarm--background`            | `--si-sys-color-background-1`           |
| `--theme-flip-alarm--border-color`          | `--si-sys-color-border-danger`          |
| `--theme-flip-alarm--color`                 | `--si-sys-color-text-primary`           |
| `--theme-flip-alarm-footer--background`     | `--si-sys-color-background-danger`      |
| `--theme-flip-alarm-footer--border-color`   | no replacement                          |
| `--theme-flip-alarm-footer--color`          | `--si-sys-color-text-on-danger`         |
| `--theme-flip-filled--background`           | `--si-sys-color-background-1`           |
| `--theme-flip-filled--border-color`         | no replacement                          |
| `--theme-flip-filled--color`                | `--si-sys-color-text-primary`           |
| `--theme-flip-filled-footer--background`    | `--si-sys-color-background-1`           |
| `--theme-flip-filled-footer--border-color`  | `--si-sys-color-background-0`           |
| `--theme-flip-filled-footer--color`         | `--si-sys-color-text-primary`           |
| `--theme-flip-info--background`             | `--si-sys-color-background-1`           |
| `--theme-flip-info--border-color`           | `--si-sys-color-border-information`     |
| `--theme-flip-info--color`                  | `--si-sys-color-text-primary`           |
| `--theme-flip-info-footer--background`      | `--si-sys-color-background-information` |
| `--theme-flip-info-footer--border-color`    | no replacement                          |
| `--theme-flip-info-footer--color`           | `--si-sys-color-text-on-information`    |
| `--theme-flip-outline--background`          | no replacement                          |
| `--theme-flip-outline--border-color`        | `--si-sys-color-border-3`               |
| `--theme-flip-outline--color`               | `--si-sys-color-text-primary`           |
| `--theme-flip-outline-footer--background`   | no replacement                          |
| `--theme-flip-outline-footer--border-color` | `--si-sys-color-border-3`               |
| `--theme-flip-outline-footer--color`        | `--si-sys-color-text-primary`           |
| `--theme-flip-primary--background`          | `--si-sys-color-background-1`           |
| `--theme-flip-primary--border-color`        | `--si-sys-color-border-accent`          |
| `--theme-flip-primary--color`               | `--si-sys-color-text-primary`           |
| `--theme-flip-primary-footer--background`   | `--si-sys-color-background-accent`      |
| `--theme-flip-primary-footer--border-color` | no replacement                          |
| `--theme-flip-primary-footer--color`        | `--si-sys-color-text-on-accent`         |
| `--theme-flip-warning--background`          | `--si-sys-color-background-1`           |
| `--theme-flip-warning--border-color`        | `--si-sys-color-border-warning`         |
| `--theme-flip-warning--color`               | `--si-sys-color-text-primary`           |
| `--theme-flip-warning-footer--background`   | `--si-sys-color-background-warning`     |
| `--theme-flip-warning-footer--border-color` | no replacement                          |
| `--theme-flip-warning-footer--color`        | `--si-sys-color-text-on-warning`        |

### ghost

| Removed token                       | System-token replacement           |
| ----------------------------------- | ---------------------------------- |
| `--theme-ghost--background`         | no replacement                     |
| `--theme-ghost--background--active` | `--si-sys-color-background-active` |
| `--theme-ghost--background--hover`  | `--si-sys-color-background-hover`  |

### group

| Removed token                                           | System-token replacement                 |
| ------------------------------------------------------- | ---------------------------------------- |
| `--theme-group--border-radius`                          | `--si-sys-sizing-border-radius-sm`       |
| `--theme-group--border-radius--focus`                   | `--si-sys-sizing-border-radius-none`     |
| `--theme-group-header--color`                           | `--si-sys-color-text-primary`            |
| `--theme-group-item--background`                        | `--si-sys-color-background-1`            |
| `--theme-group-item--background--active`                | `--si-sys-color-background-active`       |
| `--theme-group-item--background--disabled`              | `--si-sys-color-background-1`            |
| `--theme-group-item--background--hover`                 | `--si-sys-color-background-hover`        |
| `--theme-group-item--background--selected`              | `--si-sys-color-background-active`       |
| `--theme-group-item--border-color`                      | no replacement                           |
| `--theme-group-item--border-color--active`              | no replacement                           |
| `--theme-group-item--border-color--disabled`            | no replacement                           |
| `--theme-group-item--border-color--hover`               | no replacement                           |
| `--theme-group-item--border-color--selected`            | no replacement                           |
| `--theme-group-item-icon--color`                        | `--si-sys-color-text-primary`            |
| `--theme-group-item-icon--color--disabled`              | `--si-sys-color-text-disabled`           |
| `--theme-group-item-indicator--background`              | no replacement                           |
| `--theme-group-item-indicator--background--selected`    | `--si-sys-color-background-accent-hover` |
| `--theme-group-item-indicator--background--subselected` | `--si-sys-color-background-accent-hover` |
| `--theme-group-item-subtext--color`                     | `--si-sys-color-text-secondary`          |
| `--theme-group-item-subtext--color--disabled`           | `--si-sys-color-text-disabled`           |
| `--theme-group-item-text--color`                        | `--si-sys-color-text-primary`            |
| `--theme-group-item-text--color--disabled`              | `--si-sys-color-text-disabled`           |
| `--theme-group-node-closed--color`                      | `--si-sys-color-text-primary`            |
| `--theme-group-node-open--color`                        | `--si-sys-color-text-primary`            |
| `--theme-group-subheader--color`                        | `--si-sys-color-text-primary`            |

### input-helper

| Removed token                         | System-token replacement          |
| ------------------------------------- | --------------------------------- |
| `--theme-helper--color`               | `--si-sys-color-text-secondary`   |
| `--theme-helper--color--info`         | `--si-sys-color-text-information` |
| `--theme-helper--color--invalid`      | `--si-sys-color-text-danger`      |
| `--theme-helper--color--valid`        | `--si-sys-color-text-primary`     |
| `--theme-helper--color--warning`      | `--si-sys-color-text-warning`     |
| `--theme-helper-icon--color--info`    | `--si-sys-color-text-information` |
| `--theme-helper-icon--color--invalid` | `--si-sys-color-text-danger`      |
| `--theme-helper-icon--color--valid`   | `--si-sys-color-text-success`     |
| `--theme-helper-icon--color--warning` | `--si-sys-color-text-warning`     |

### input

| Removed token                                  | System-token replacement               |
| ---------------------------------------------- | -------------------------------------- |
| `--theme-input--background`                    | `--si-sys-color-background-1`          |
| `--theme-input--background--autofill`          | no replacement                         |
| `--theme-input--background--disabled`          | no replacement                         |
| `--theme-input--background--focus`             | `--si-sys-color-background-4`          |
| `--theme-input--background--hover`             | `--si-sys-color-background-4`          |
| `--theme-input--background--invalid`           | `--si-sys-color-background-1`          |
| `--theme-input--background--invalid--focus`    | `--si-sys-color-background-4`          |
| `--theme-input--background--invalid--hover`    | `--si-sys-color-background-4`          |
| `--theme-input--background--readonly`          | no replacement                         |
| `--theme-input--background--warning`           | `--si-sys-color-background-1`          |
| `--theme-input--background--warning--focus`    | `--si-sys-color-background-4`          |
| `--theme-input--background--warning--hover`    | `--si-sys-color-background-4`          |
| `--theme-input--border-color`                  | `--si-sys-color-border-2`              |
| `--theme-input--border-color--autofill`        | `--si-sys-color-border-2`              |
| `--theme-input--border-color--disabled`        | `--si-sys-color-border-4`              |
| `--theme-input--border-color--focus`           | `--si-sys-color-border-1`              |
| `--theme-input--border-color--hover`           | `--si-sys-color-border-1`              |
| `--theme-input--border-color--info`            | `--si-sys-color-border-information`    |
| `--theme-input--border-color--info--active`    | `--si-sys-color-border-information`    |
| `--theme-input--border-color--info--hover`     | `--si-sys-color-border-information`    |
| `--theme-input--border-color--invalid`         | `--si-sys-color-border-danger`         |
| `--theme-input--border-color--invalid--active` | `--si-sys-color-border-danger`         |
| `--theme-input--border-color--invalid--hover`  | `--si-sys-color-border-danger`         |
| `--theme-input--border-color--readonly`        | `--si-sys-color-border-4`              |
| `--theme-input--border-color--warning`         | `--si-sys-color-border-warning`        |
| `--theme-input--border-color--warning--active` | `--si-sys-color-border-warning`        |
| `--theme-input--border-color--warning--hover`  | `--si-sys-color-border-warning`        |
| `--theme-input--border-color-bottom--disabled` | `--si-sys-color-border-4`              |
| `--theme-input--border-color-bottom--readonly` | `--si-sys-color-border-4`              |
| `--theme-input--border-radius`                 | `--si-sys-sizing-border-radius-xs`     |
| `--theme-input--border-thickness`              | `--si-sys-sizing-border-width-default` |
| `--theme-input--box-shadow`                    | no replacement                         |
| `--theme-input--color`                         | `--si-sys-color-text-primary`          |
| `--theme-input--color--autofill`               | `--si-sys-color-text-primary`          |
| `--theme-input--color--disabled`               | `--si-sys-color-text-disabled`         |
| `--theme-input--focus--outline-offset`         | `--si-sys-sizing-focus-ring-offset`    |
| `--theme-input-error--background`              | `--si-sys-color-background-1`          |
| `--theme-input-error--border-color`            | `--si-sys-color-border-danger`         |
| `--theme-input-error-icon--color`              | `--si-sys-color-text-danger`           |
| `--theme-input-extra--background--active`      | `--si-sys-color-background-4`          |
| `--theme-input-extra--background--hover`       | `--si-sys-color-background-4`          |
| `--theme-input-gripper--color`                 | `--si-sys-color-text-disabled`         |
| `--theme-input-gripper--color--focus`          | `--si-sys-color-text-disabled`         |
| `--theme-input-gripper--color--hover`          | `--si-sys-color-text-disabled`         |
| `--theme-input-hint--color`                    | `--si-sys-color-text-secondary`        |
| `--theme-input-search-icon--color`             | `--si-sys-color-text-accent`           |
| `--theme-input-search-icon--color--disabled`   | `--si-sys-color-text-disabled`         |
| `--theme-input-search-icon--color--focus`      | `--si-sys-color-text-accent`           |
| `--theme-input-search-icon--color--hover`      | `--si-sys-color-text-accent-hover`     |
| `--theme-input-select-icon--color`             | `--si-sys-color-text-primary`          |
| `--theme-input-select-icon--color--active`     | `--si-sys-color-text-primary`          |
| `--theme-input-select-icon--color--hover`      | `--si-sys-color-text-primary`          |
| `--theme-input-unit--color`                    | `--si-sys-color-text-secondary`        |

### kpi

| Removed token                               | System-token replacement           |
| ------------------------------------------- | ---------------------------------- |
| `--theme-kpi--border-radius`                | `--si-sys-sizing-border-radius-sm` |
| `--theme-kpi-display--background`           | no replacement                     |
| `--theme-kpi-display--background--active`   | `--si-sys-color-background-active` |
| `--theme-kpi-display--background--hover`    | `--si-sys-color-background-hover`  |
| `--theme-kpi-display-icon--color`           | `--si-sys-color-text-primary`      |
| `--theme-kpi-display-indicator--background` | no replacement                     |
| `--theme-kpi-display-label--color`          | `--si-sys-color-text-secondary`    |
| `--theme-kpi-display-units`                 | `--si-sys-color-text-secondary`    |
| `--theme-kpi-display-value`                 | `--si-sys-color-text-primary`      |

### label

| Removed token                    | System-token replacement           |
| -------------------------------- | ---------------------------------- |
| `--theme-label--color`           | `--si-sys-color-text-secondary`    |
| `--theme-label--color--active`   | `--si-sys-color-text-primary`      |
| `--theme-label--color--disabled` | `--si-sys-color-text-disabled`     |
| `--theme-label--color--focus`    | `--si-sys-color-text-accent-hover` |
| `--theme-label--color--hover`    | `--si-sys-color-text-primary`      |
| `--theme-label--color--invalid`  | `--si-sys-color-text-danger`       |

### link

| Removed token                              | System-token replacement            |
| ------------------------------------------ | ----------------------------------- |
| `--theme-link-btn--border-color`           | no replacement                      |
| `--theme-link-btn--border-color--active`   | no replacement                      |
| `--theme-link-btn--border-color--disabled` | no replacement                      |
| `--theme-link-btn--border-color--hover`    | no replacement                      |
| `--theme-link-btn--border-color--visited`  | no replacement                      |
| `--theme-link-btn--color`                  | `--si-sys-color-text-accent`        |
| `--theme-link-btn--color--active`          | `--si-sys-color-text-accent-active` |
| `--theme-link-btn--color--disabled`        | `--si-sys-color-text-disabled`      |
| `--theme-link-btn--color--hover`           | `--si-sys-color-text-accent-hover`  |
| `--theme-link-btn--color--visited`         | `--si-sys-color-text-accent`        |

### menu

| Removed token                              | System-token replacement            |
| ------------------------------------------ | ----------------------------------- |
| `--theme-menu--background`                 | `--si-sys-color-background-1`       |
| `--theme-menu--border-color`               | no replacement                      |
| `--theme-menu--border-radius`              | `--si-sys-sizing-border-radius-sm`  |
| `--theme-menu--border-thickness`           | `--si-sys-sizing-border-width-none` |
| `--theme-menu--box-shadow`                 | `--si-sys-color-effects-shadow-4`   |
| `--theme-menu-btn--background`             | no replacement                      |
| `--theme-menu-btn--background--active`     | `--si-sys-color-background-active`  |
| `--theme-menu-btn--background--hover`      | `--si-sys-color-background-hover`   |
| `--theme-menu-btn--color`                  | `--si-sys-color-text-primary`       |
| `--theme-menu-btn--color--active`          | `--si-sys-color-text-primary`       |
| `--theme-menu-btn--color--hover`           | `--si-sys-color-text-primary`       |
| `--theme-menu-header--color`               | `--si-sys-color-text-secondary`     |
| `--theme-menu-item--background`            | no replacement                      |
| `--theme-menu-item--background--active`    | `--si-sys-color-background-active`  |
| `--theme-menu-item--background--disabled`  | no replacement                      |
| `--theme-menu-item--background--hover`     | `--si-sys-color-background-hover`   |
| `--theme-menu-item--color`                 | `--si-sys-color-text-primary`       |
| `--theme-menu-item--color--active`         | `--si-sys-color-text-primary`       |
| `--theme-menu-item--color--disabled`       | `--si-sys-color-text-disabled`      |
| `--theme-menu-item--color--hover`          | `--si-sys-color-text-primary`       |
| `--theme-menu-item-arrow--color`           | `--si-sys-color-text-secondary`     |
| `--theme-menu-item-arrow--color--active`   | `--si-sys-color-text-primary`       |
| `--theme-menu-item-arrow--color--disabled` | `--si-sys-color-text-disabled`      |
| `--theme-menu-item-arrow--color--hover`    | `--si-sys-color-text-primary`       |
| `--theme-menu-item-check--color`           | `--si-sys-color-text-secondary`     |
| `--theme-menu-item-check--color--active`   | `--si-sys-color-text-primary`       |
| `--theme-menu-item-check--color--disabled` | `--si-sys-color-text-disabled`      |
| `--theme-menu-item-check--color--hover`    | `--si-sys-color-text-primary`       |
| `--theme-menu-item-icon--color`            | `--si-sys-color-text-secondary`     |
| `--theme-menu-item-icon--color--active`    | `--si-sys-color-text-primary`       |
| `--theme-menu-item-icon--color--disabled`  | `--si-sys-color-text-disabled`      |
| `--theme-menu-item-icon--color--hover`     | `--si-sys-color-text-primary`       |
| `--theme-menu-separator--background`       | `--si-sys-color-border-4`           |

### message-bar

| Removed token                           | System-token replacement                     |
| --------------------------------------- | -------------------------------------------- |
| `--theme-message-bar--border-radius`    | `--si-sys-sizing-border-radius-sm`           |
| `--theme-message-bar--border-thickness` | no replacement                               |
| `--theme-messagebar--background`        | `--si-sys-color-background-accent-secondary` |
| `--theme-messagebar--color`             | `--si-sys-color-text-primary`                |

### modal-dialog

| Removed token                           | System-token replacement               |
| --------------------------------------- | -------------------------------------- |
| `--theme-modal--background`             | `--si-sys-color-background-1`          |
| `--theme-modal--border-color`           | no replacement                         |
| `--theme-modal--box-shadow`             | `--si-sys-color-effects-shadow-4`      |
| `--theme-theme-modal--border-thickness` | `--si-sys-sizing-border-width-default` |

### navigation

| Removed token                                        | System-token replacement             |
| ---------------------------------------------------- | ------------------------------------ |
| `--theme-nav--background`                            | `--si-sys-color-background-1`        |
| `--theme-nav-item-primary--background`               | no replacement                       |
| `--theme-nav-item-primary--background--active`       | `--si-sys-color-background-active`   |
| `--theme-nav-item-primary--background--hover`        | `--si-sys-color-background-hover`    |
| `--theme-nav-item-primary--background--selected`     | `--si-sys-color-background-0`        |
| `--theme-nav-item-primary--border-color`             | no replacement                       |
| `--theme-nav-item-primary--border-color--active`     | no replacement                       |
| `--theme-nav-item-primary--border-color--hover`      | no replacement                       |
| `--theme-nav-item-primary--border-color--selected`   | `--si-sys-color-border-accent-hover` |
| `--theme-nav-item-primary--color`                    | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary--color--active`            | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary--color--hover`             | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary--color--selected`          | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary-icon--color`               | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary-icon--color--active`       | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary-icon--color--hover`        | `--si-sys-color-text-primary`        |
| `--theme-nav-item-primary-icon--color--selected`     | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary--background`             | no replacement                       |
| `--theme-nav-item-secondary--background--active`     | `--si-sys-color-background-active`   |
| `--theme-nav-item-secondary--background--disabled`   | no replacement                       |
| `--theme-nav-item-secondary--background--hover`      | `--si-sys-color-background-hover`    |
| `--theme-nav-item-secondary--background--selected`   | `--si-sys-color-background-0`        |
| `--theme-nav-item-secondary--border-color`           | no replacement                       |
| `--theme-nav-item-secondary--border-color--active`   | no replacement                       |
| `--theme-nav-item-secondary--border-color--disabled` | no replacement                       |
| `--theme-nav-item-secondary--border-color--hover`    | no replacement                       |
| `--theme-nav-item-secondary--border-color--selected` | `--si-sys-color-border-accent-hover` |
| `--theme-nav-item-secondary--color`                  | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary--color--active`          | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary--color--disabled`        | `--si-sys-color-text-disabled`       |
| `--theme-nav-item-secondary--color--hover`           | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary--color--selected`        | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary-icon--color`             | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary-icon--color--active`     | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary-icon--color--disabled`   | `--si-sys-color-text-disabled`       |
| `--theme-nav-item-secondary-icon--color--hover`      | `--si-sys-color-text-primary`        |
| `--theme-nav-item-secondary-icon--color--selected`   | `--si-sys-color-text-primary`        |
| `--theme-nav-overlay--background`                    | no replacement                       |
| `--theme-nav-overlay-header--color`                  | `--si-sys-color-text-primary`        |
| `--theme-navigation--box-shadow`                     | `--si-sys-color-effects-shadow-2`    |

### overlay

| Removed token                        | System-token replacement      |
| ------------------------------------ | ----------------------------- |
| `--theme-overlay--background`        | no replacement                |
| `--theme-overlay-header--background` | no replacement                |
| `--theme-overlay-header--color`      | `--si-sys-color-text-primary` |

### pagination

| Removed token                                   | System-token replacement           |
| ----------------------------------------------- | ---------------------------------- |
| `--theme-pagination-item--background`           | no replacement                     |
| `--theme-pagination-item--background--active`   | `--si-sys-color-background-active` |
| `--theme-pagination-item--background--disabled` | no replacement                     |
| `--theme-pagination-item--background--hover`    | `--si-sys-color-background-hover`  |
| `--theme-pagination-item--background--selected` | no replacement                     |
| `--theme-pagination-item--color`                | `--si-sys-color-text-primary`      |
| `--theme-pagination-item--color--active`        | `--si-sys-color-text-primary`      |
| `--theme-pagination-item--color--disabled`      | `--si-sys-color-text-disabled`     |
| `--theme-pagination-item--color--hover`         | `--si-sys-color-text-primary`      |
| `--theme-pagination-item--color--selected`      | `--si-sys-color-text-accent-hover` |
| `--theme-pagination-label--color`               | `--si-sys-color-text-secondary`    |

### pane

| Removed token                         | System-token replacement          |
| ------------------------------------- | --------------------------------- |
| `--theme-pane-floating--background`   | `--si-sys-color-background-1`     |
| `--theme-pane-floating--border-color` | `--si-sys-color-border-4`         |
| `--theme-pane-floating--box-shadow`   | `--si-sys-color-effects-shadow-2` |
| `--theme-pane-floating--color`        | `--si-sys-color-text-primary`     |
| `--theme-pane-inline--background`     | `--si-sys-color-background-0`     |
| `--theme-pane-inline--border-color`   | `--si-sys-color-border-3`         |
| `--theme-pane-inline--box-shadow`     | no replacement                    |
| `--theme-pane-inline--color`          | `--si-sys-color-text-primary`     |

### pill

| Removed token                      | System-token replacement                     |
| ---------------------------------- | -------------------------------------------- |
| `--theme-pill-outline--background` | `--si-sys-color-background-accent-secondary` |
| `--theme-pill-outline--color`      | `--si-sys-color-text-primary`                |

### progress-indicator

| Removed token                                           | System-token replacement                   |
| ------------------------------------------------------- | ------------------------------------------ |
| `--theme-progress-indicator-fill--background`           | `--si-sys-color-background-accent-hover`   |
| `--theme-progress-indicator-fill-error--background`     | `--si-sys-color-background-danger`         |
| `--theme-progress-indicator-fill-info--background`      | `--si-sys-color-background-information`    |
| `--theme-progress-indicator-fill-paused--background`    | `--si-sys-color-background-neutral`        |
| `--theme-progress-indicator-fill-success--background`   | `--si-sys-color-background-success`        |
| `--theme-progress-indicator-fill-warning--background`   | `--si-sys-color-background-warning`        |
| `--theme-progress-indicator-helper--color`              | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-helper-error--color`        | `--si-sys-color-text-danger`               |
| `--theme-progress-indicator-helper-icon--color`         | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-helper-icon-error--color`   | `--si-sys-color-text-danger`               |
| `--theme-progress-indicator-helper-icon-info--color`    | `--si-sys-color-text-information`          |
| `--theme-progress-indicator-helper-icon-paused--color`  | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-helper-icon-success--color` | `--si-sys-color-text-success`              |
| `--theme-progress-indicator-helper-icon-warning--color` | `--si-sys-color-text-warning`              |
| `--theme-progress-indicator-helper-info--color`         | `--si-sys-color-text-primary`              |
| `--theme-progress-indicator-helper-paused--color`       | `--si-sys-color-text-primary`              |
| `--theme-progress-indicator-helper-success--color`      | `--si-sys-color-text-primary`              |
| `--theme-progress-indicator-helper-warning--color`      | `--si-sys-color-text-primary`              |
| `--theme-progress-indicator-label--color`               | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-label-error--color`         | `--si-sys-color-text-danger`               |
| `--theme-progress-indicator-label-info--color`          | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-label-paused--color`        | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-label-success--color`       | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-label-warning--color`       | `--si-sys-color-text-secondary`            |
| `--theme-progress-indicator-track--background`          | no replacement                             |
| `--theme-progress-indicator-track-error--background`    | `--si-sys-color-background-danger-subtle`  |
| `--theme-progress-indicator-track-info--background`     | no replacement                             |
| `--theme-progress-indicator-track-paused--background`   | no replacement                             |
| `--theme-progress-indicator-track-success--background`  | no replacement                             |
| `--theme-progress-indicator-track-warning--background`  | `--si-sys-color-background-warning-subtle` |

### push-card

| Removed token                                              | System-token replacement                       |
| ---------------------------------------------------------- | ---------------------------------------------- |
| `--theme-push-card--border-radius`                         | `--si-sys-sizing-border-radius-sm`             |
| `--theme-push-card--border-width`                          | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card--focus--outline-offset`                 | `--si-sys-sizing-focus-ring-offset`            |
| `--theme-push-card-alarm--background`                      | `--si-sys-color-background-danger`             |
| `--theme-push-card-alarm--background--active`              | `--si-sys-color-background-danger-active`      |
| `--theme-push-card-alarm--background--hover`               | `--si-sys-color-background-danger-hover`       |
| `--theme-push-card-alarm--border-color`                    | no replacement                                 |
| `--theme-push-card-alarm--border-color--active`            | no replacement                                 |
| `--theme-push-card-alarm--border-color--hover`             | no replacement                                 |
| `--theme-push-card-alarm--color`                           | `--si-sys-color-text-on-danger`                |
| `--theme-push-card-alarm-accordion--background`            | `--si-sys-color-background-danger`             |
| `--theme-push-card-alarm-accordion--background--active`    | `--si-sys-color-background-danger-active`      |
| `--theme-push-card-alarm-accordion--background--hover`     | `--si-sys-color-background-danger-hover`       |
| `--theme-push-card-alarm-accordion--border-color`          | `--si-sys-color-background-0`                  |
| `--theme-push-card-alarm-accordion--color`                 | `--si-sys-color-text-on-danger`                |
| `--theme-push-card-alarm-accordion-footer--background`     | `--si-sys-color-background-1`                  |
| `--theme-push-card-alarm-accordion-frame--background`      | `--si-sys-color-background-1`                  |
| `--theme-push-card-alarm-accordion-frame--border-color`    | `--si-sys-color-border-3`                      |
| `--theme-push-card-alarm-accordion-frame--border-width`    | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-alarm-subtext--color`                   | `--si-sys-color-text-on-danger`                |
| `--theme-push-card-critical--background`                   | `--si-sys-color-background-critical`           |
| `--theme-push-card-critical--background--active`           | `--si-sys-color-background-critical-active`    |
| `--theme-push-card-critical--background--hover`            | `--si-sys-color-background-critical-hover`     |
| `--theme-push-card-critical--border-color`                 | no replacement                                 |
| `--theme-push-card-critical--border-color--active`         | no replacement                                 |
| `--theme-push-card-critical--border-color--hover`          | no replacement                                 |
| `--theme-push-card-critical--color`                        | `--si-sys-color-text-on-critical`              |
| `--theme-push-card-critical-accordion--background`         | `--si-sys-color-background-critical`           |
| `--theme-push-card-critical-accordion--background--active` | `--si-sys-color-background-critical-active`    |
| `--theme-push-card-critical-accordion--background--hover`  | `--si-sys-color-background-critical-hover`     |
| `--theme-push-card-critical-accordion--border-color`       | `--si-sys-color-background-0`                  |
| `--theme-push-card-critical-accordion--color`              | `--si-sys-color-text-on-critical`              |
| `--theme-push-card-critical-accordion-footer--background`  | `--si-sys-color-background-1`                  |
| `--theme-push-card-critical-accordion-frame--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-critical-accordion-frame--border-color` | `--si-sys-color-border-3`                      |
| `--theme-push-card-critical-accordion-frame--border-width` | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-critical-subtext--color`                | `--si-sys-color-text-on-critical`              |
| `--theme-push-card-filled--background`                     | `--si-sys-color-background-1`                  |
| `--theme-push-card-filled--background--active`             | `--si-sys-color-background-active`             |
| `--theme-push-card-filled--background--hover`              | `--si-sys-color-background-hover`              |
| `--theme-push-card-filled--border-color`                   | no replacement                                 |
| `--theme-push-card-filled--border-color--active`           | no replacement                                 |
| `--theme-push-card-filled--border-color--hover`            | no replacement                                 |
| `--theme-push-card-filled--color`                          | `--si-sys-color-text-primary`                  |
| `--theme-push-card-filled-accordion--background`           | `--si-sys-color-background-1`                  |
| `--theme-push-card-filled-accordion--background--active`   | `--si-sys-color-background-active`             |
| `--theme-push-card-filled-accordion--background--hover`    | `--si-sys-color-background-hover`              |
| `--theme-push-card-filled-accordion--border-color`         | `--si-sys-color-background-0`                  |
| `--theme-push-card-filled-accordion--color`                | `--si-sys-color-text-primary`                  |
| `--theme-push-card-filled-accordion-footer--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-filled-accordion-frame--background`     | `--si-sys-color-background-1`                  |
| `--theme-push-card-filled-accordion-frame--border-color`   | no replacement                                 |
| `--theme-push-card-filled-accordion-frame--border-width`   | `--si-sys-sizing-border-width-none`            |
| `--theme-push-card-filled-subtext--color`                  | `--si-sys-color-text-secondary`                |
| `--theme-push-card-info--background`                       | `--si-sys-color-background-information`        |
| `--theme-push-card-info--background--active`               | `--si-sys-color-background-information-active` |
| `--theme-push-card-info--background--hover`                | `--si-sys-color-background-information-hover`  |
| `--theme-push-card-info--border-color`                     | no replacement                                 |
| `--theme-push-card-info--border-color--active`             | no replacement                                 |
| `--theme-push-card-info--border-color--hover`              | no replacement                                 |
| `--theme-push-card-info--color`                            | `--si-sys-color-text-on-information`           |
| `--theme-push-card-info-accordion--background`             | `--si-sys-color-background-information`        |
| `--theme-push-card-info-accordion--background--active`     | `--si-sys-color-background-information-active` |
| `--theme-push-card-info-accordion--background--hover`      | `--si-sys-color-background-information-hover`  |
| `--theme-push-card-info-accordion--border-color`           | `--si-sys-color-background-0`                  |
| `--theme-push-card-info-accordion--color`                  | `--si-sys-color-text-on-information`           |
| `--theme-push-card-info-accordion-footer--background`      | `--si-sys-color-background-1`                  |
| `--theme-push-card-info-accordion-frame--background`       | `--si-sys-color-background-1`                  |
| `--theme-push-card-info-accordion-frame--border-color`     | `--si-sys-color-border-3`                      |
| `--theme-push-card-info-accordion-frame--border-width`     | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-info-subtext--color`                    | `--si-sys-color-text-on-information`           |
| `--theme-push-card-neutral--background`                    | `--si-sys-color-background-neutral`            |
| `--theme-push-card-neutral--background--active`            | `--si-sys-color-background-selected`           |
| `--theme-push-card-neutral--background--hover`             | `--si-sys-color-background-hover`              |
| `--theme-push-card-neutral--border-color`                  | no replacement                                 |
| `--theme-push-card-neutral--border-color--active`          | no replacement                                 |
| `--theme-push-card-neutral--border-color--hover`           | no replacement                                 |
| `--theme-push-card-neutral--color`                         | `--si-sys-color-text-on-neutral`               |
| `--theme-push-card-neutral-accordion--background`          | `--si-sys-color-background-neutral`            |
| `--theme-push-card-neutral-accordion--background--active`  | `--si-sys-color-background-selected`           |
| `--theme-push-card-neutral-accordion--background--hover`   | `--si-sys-color-background-hover`              |
| `--theme-push-card-neutral-accordion--border-color`        | `--si-sys-color-background-0`                  |
| `--theme-push-card-neutral-accordion--color`               | `--si-sys-color-text-on-neutral`               |
| `--theme-push-card-neutral-accordion-footer--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-neutral-accordion-frame--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-neutral-accordion-frame--border-color`  | `--si-sys-color-border-3`                      |
| `--theme-push-card-neutral-accordion-frame--border-width`  | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-neutral-subtext--color`                 | `--si-sys-color-text-on-neutral`               |
| `--theme-push-card-outline--background`                    | no replacement                                 |
| `--theme-push-card-outline--background--active`            | `--si-sys-color-background-active`             |
| `--theme-push-card-outline--background--hover`             | `--si-sys-color-background-hover`              |
| `--theme-push-card-outline--border-color`                  | `--si-sys-color-border-3`                      |
| `--theme-push-card-outline--border-color--active`          | `--si-sys-color-border-3`                      |
| `--theme-push-card-outline--border-color--hover`           | `--si-sys-color-border-3`                      |
| `--theme-push-card-outline--color`                         | `--si-sys-color-text-primary`                  |
| `--theme-push-card-outline-accordion--background`          | `--si-sys-color-background-1`                  |
| `--theme-push-card-outline-accordion--background--active`  | `--si-sys-color-background-active`             |
| `--theme-push-card-outline-accordion--background--hover`   | `--si-sys-color-background-hover`              |
| `--theme-push-card-outline-accordion--border-color`        | `--si-sys-color-background-0`                  |
| `--theme-push-card-outline-accordion--color`               | `--si-sys-color-text-primary`                  |
| `--theme-push-card-outline-accordion-footer--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-outline-accordion-frame--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-outline-accordion-frame--border-color`  | no replacement                                 |
| `--theme-push-card-outline-accordion-frame--border-width`  | `--si-sys-sizing-border-width-none`            |
| `--theme-push-card-outline-subtext--color`                 | `--si-sys-color-text-secondary`                |
| `--theme-push-card-primary--background`                    | `--si-sys-color-background-accent`             |
| `--theme-push-card-primary--background--active`            | `--si-sys-color-background-accent-active`      |
| `--theme-push-card-primary--background--hover`             | `--si-sys-color-background-accent-hover`       |
| `--theme-push-card-primary--border-color`                  | no replacement                                 |
| `--theme-push-card-primary--border-color--active`          | no replacement                                 |
| `--theme-push-card-primary--border-color--hover`           | no replacement                                 |
| `--theme-push-card-primary--color`                         | `--si-sys-color-text-on-accent`                |
| `--theme-push-card-primary-accordion--background`          | `--si-sys-color-background-accent`             |
| `--theme-push-card-primary-accordion--background--active`  | `--si-sys-color-background-accent-active`      |
| `--theme-push-card-primary-accordion--background--hover`   | `--si-sys-color-background-accent-hover`       |
| `--theme-push-card-primary-accordion--border-color`        | `--si-sys-color-background-0`                  |
| `--theme-push-card-primary-accordion--color`               | `--si-sys-color-text-on-accent`                |
| `--theme-push-card-primary-accordion-footer--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-primary-accordion-frame--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-primary-accordion-frame--border-color`  | `--si-sys-color-border-3`                      |
| `--theme-push-card-primary-accordion-frame--border-width`  | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-primary-subtext--color`                 | `--si-sys-color-text-on-accent`                |
| `--theme-push-card-success--background`                    | `--si-sys-color-background-success`            |
| `--theme-push-card-success--background--active`            | `--si-sys-color-background-success-active`     |
| `--theme-push-card-success--background--hover`             | `--si-sys-color-background-success-hover`      |
| `--theme-push-card-success--border-color`                  | no replacement                                 |
| `--theme-push-card-success--border-color--active`          | no replacement                                 |
| `--theme-push-card-success--border-color--hover`           | no replacement                                 |
| `--theme-push-card-success--color`                         | `--si-sys-color-text-on-success`               |
| `--theme-push-card-success-accordion--background`          | `--si-sys-color-background-success`            |
| `--theme-push-card-success-accordion--background--active`  | `--si-sys-color-background-success-active`     |
| `--theme-push-card-success-accordion--background--hover`   | `--si-sys-color-background-success-hover`      |
| `--theme-push-card-success-accordion--border-color`        | `--si-sys-color-background-0`                  |
| `--theme-push-card-success-accordion--color`               | `--si-sys-color-text-on-success`               |
| `--theme-push-card-success-accordion-footer--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-success-accordion-frame--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-success-accordion-frame--border-color`  | `--si-sys-color-border-3`                      |
| `--theme-push-card-success-accordion-frame--border-width`  | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-success-subtext--color`                 | `--si-sys-color-text-on-success`               |
| `--theme-push-card-warning--background`                    | `--si-sys-color-background-warning`            |
| `--theme-push-card-warning--background--active`            | `--si-sys-color-background-warning-active`     |
| `--theme-push-card-warning--background--hover`             | `--si-sys-color-background-warning-hover`      |
| `--theme-push-card-warning--border-color`                  | no replacement                                 |
| `--theme-push-card-warning--border-color--active`          | no replacement                                 |
| `--theme-push-card-warning--border-color--hover`           | no replacement                                 |
| `--theme-push-card-warning--color`                         | `--si-sys-color-text-on-warning`               |
| `--theme-push-card-warning-accordion--background`          | `--si-sys-color-background-warning`            |
| `--theme-push-card-warning-accordion--background--active`  | `--si-sys-color-background-warning-active`     |
| `--theme-push-card-warning-accordion--background--hover`   | `--si-sys-color-background-warning-hover`      |
| `--theme-push-card-warning-accordion--border-color`        | `--si-sys-color-background-0`                  |
| `--theme-push-card-warning-accordion--color`               | `--si-sys-color-text-on-warning`               |
| `--theme-push-card-warning-accordion-footer--background`   | `--si-sys-color-background-1`                  |
| `--theme-push-card-warning-accordion-frame--background`    | `--si-sys-color-background-1`                  |
| `--theme-push-card-warning-accordion-frame--border-color`  | `--si-sys-color-border-3`                      |
| `--theme-push-card-warning-accordion-frame--border-width`  | `--si-sys-sizing-border-width-default`         |
| `--theme-push-card-warning-subtext--color`                 | `--si-sys-color-text-on-warning`               |

### radiobutton

| Removed token                                               | System-token replacement                       |
| ----------------------------------------------------------- | ---------------------------------------------- |
| `--theme-radiobtn--border-thickness`                        | `--si-sys-sizing-border-width-default`         |
| `--theme-radiobtn--focus--outline-offset`                   | `--si-sys-sizing-focus-ring-offset`            |
| `--theme-radiobtn-checked--background`                      | `--si-sys-color-background-accent`             |
| `--theme-radiobtn-checked--background--active`              | `--si-sys-color-background-accent-active`      |
| `--theme-radiobtn-checked--background--disabled`            | `--si-sys-color-text-disabled`                 |
| `--theme-radiobtn-checked--background--hover`               | `--si-sys-color-background-accent-hover`       |
| `--theme-radiobtn-checked--background--info`                | `--si-sys-color-background-information`        |
| `--theme-radiobtn-checked--background--info--active`        | `--si-sys-color-background-information-active` |
| `--theme-radiobtn-checked--background--info--hover`         | `--si-sys-color-background-information-hover`  |
| `--theme-radiobtn-checked--background--invalid`             | `--si-sys-color-background-danger`             |
| `--theme-radiobtn-checked--background--invalid--active`     | `--si-sys-color-background-danger-active`      |
| `--theme-radiobtn-checked--background--invalid--hover`      | `--si-sys-color-background-danger-hover`       |
| `--theme-radiobtn-checked--background--warning`             | `--si-sys-color-background-warning`            |
| `--theme-radiobtn-checked--background--warning--active`     | `--si-sys-color-background-warning-active`     |
| `--theme-radiobtn-checked--background--warning--hover`      | `--si-sys-color-background-warning-hover`      |
| `--theme-radiobtn-checked--border-color`                    | no replacement                                 |
| `--theme-radiobtn-checked--border-color--active`            | no replacement                                 |
| `--theme-radiobtn-checked--border-color--disabled`          | no replacement                                 |
| `--theme-radiobtn-checked--border-color--hover`             | no replacement                                 |
| `--theme-radiobtn-checked--border-color--info`              | no replacement                                 |
| `--theme-radiobtn-checked--border-color--info--active`      | no replacement                                 |
| `--theme-radiobtn-checked--border-color--info--hover`       | no replacement                                 |
| `--theme-radiobtn-checked--border-color--invalid`           | no replacement                                 |
| `--theme-radiobtn-checked--border-color--invalid--active`   | no replacement                                 |
| `--theme-radiobtn-checked--border-color--invalid--hover`    | no replacement                                 |
| `--theme-radiobtn-checked--border-color--warning`           | `--si-sys-color-border-warning`                |
| `--theme-radiobtn-checked--border-color--warning--active`   | `--si-sys-color-border-warning`                |
| `--theme-radiobtn-checked--border-color--warning--hover`    | `--si-sys-color-border-warning`                |
| `--theme-radiobtn-checked--color`                           | `--si-sys-color-text-on-accent`                |
| `--theme-radiobtn-checked--color--active`                   | `--si-sys-color-text-on-accent`                |
| `--theme-radiobtn-checked--color--disabled`                 | `--si-sys-color-text-inverse`                  |
| `--theme-radiobtn-checked--color--hover`                    | `--si-sys-color-text-on-accent`                |
| `--theme-radiobtn-checked--color--info`                     | `--si-sys-color-text-on-information`           |
| `--theme-radiobtn-checked--color--info--active`             | `--si-sys-color-text-on-information`           |
| `--theme-radiobtn-checked--color--info--hover`              | `--si-sys-color-text-on-information`           |
| `--theme-radiobtn-checked--color--invalid`                  | `--si-sys-color-text-on-danger`                |
| `--theme-radiobtn-checked--color--invalid--active`          | `--si-sys-color-text-on-danger`                |
| `--theme-radiobtn-checked--color--invalid--hover`           | `--si-sys-color-text-on-danger`                |
| `--theme-radiobtn-checked--color--warning`                  | `--si-sys-color-text-on-warning`               |
| `--theme-radiobtn-checked--color--warning--active`          | `--si-sys-color-text-on-warning`               |
| `--theme-radiobtn-checked--color--warning--hover`           | `--si-sys-color-text-on-warning`               |
| `--theme-radiobtn-label--color`                             | `--si-sys-color-text-primary`                  |
| `--theme-radiobtn-label--color--disabled`                   | `--si-sys-color-text-disabled`                 |
| `--theme-radiobtn-unchecked--background`                    | `--si-sys-color-background-1`                  |
| `--theme-radiobtn-unchecked--background--active`            | `--si-sys-color-background-active`             |
| `--theme-radiobtn-unchecked--background--disabled`          | no replacement                                 |
| `--theme-radiobtn-unchecked--background--hover`             | `--si-sys-color-background-hover`              |
| `--theme-radiobtn-unchecked--background--info`              | `--si-sys-color-background-1`                  |
| `--theme-radiobtn-unchecked--background--info--active`      | `--si-sys-color-background-active`             |
| `--theme-radiobtn-unchecked--background--info--hover`       | `--si-sys-color-background-hover`              |
| `--theme-radiobtn-unchecked--background--invalid`           | `--si-sys-color-background-1`                  |
| `--theme-radiobtn-unchecked--background--invalid--active`   | `--si-sys-color-background-active`             |
| `--theme-radiobtn-unchecked--background--invalid--hover`    | `--si-sys-color-background-hover`              |
| `--theme-radiobtn-unchecked--background--warning`           | `--si-sys-color-background-1`                  |
| `--theme-radiobtn-unchecked--background--warning--active`   | `--si-sys-color-background-active`             |
| `--theme-radiobtn-unchecked--background--warning--hover`    | `--si-sys-color-background-hover`              |
| `--theme-radiobtn-unchecked--border-color`                  | `--si-sys-color-border-2`                      |
| `--theme-radiobtn-unchecked--border-color--active`          | `--si-sys-color-border-2`                      |
| `--theme-radiobtn-unchecked--border-color--disabled`        | `--si-sys-color-text-disabled`                 |
| `--theme-radiobtn-unchecked--border-color--hover`           | `--si-sys-color-border-2`                      |
| `--theme-radiobtn-unchecked--border-color--info`            | `--si-sys-color-border-information`            |
| `--theme-radiobtn-unchecked--border-color--info--active`    | `--si-sys-color-border-information`            |
| `--theme-radiobtn-unchecked--border-color--info--hover`     | `--si-sys-color-border-information`            |
| `--theme-radiobtn-unchecked--border-color--invalid`         | `--si-sys-color-border-danger`                 |
| `--theme-radiobtn-unchecked--border-color--invalid--active` | `--si-sys-color-border-danger`                 |
| `--theme-radiobtn-unchecked--border-color--invalid--hover`  | `--si-sys-color-border-danger`                 |
| `--theme-radiobtn-unchecked--border-color--warning`         | `--si-sys-color-border-warning`                |
| `--theme-radiobtn-unchecked--border-color--warning--active` | `--si-sys-color-border-warning`                |
| `--theme-radiobtn-unchecked--border-color--warning--hover`  | `--si-sys-color-border-warning`                |

### scrollbar

| Removed token                                | System-token replacement      |
| -------------------------------------------- | ----------------------------- |
| `--theme-scrollbar-thumb--background`        | no replacement                |
| `--theme-scrollbar-thumb--background--hover` | no replacement                |
| `--theme-scrollbar-track--background`        | `--si-sys-color-background-1` |
| `--theme-scrollbar-track--background--hover` | no replacement                |
| `--theme-scrollbar-track--border`            | `--si-sys-color-background-0` |

### select-list

| Removed token                                             | System-token replacement           |
| --------------------------------------------------------- | ---------------------------------- |
| `--theme-select-list--background`                         | `--si-sys-color-background-1`      |
| `--theme-select-list--border-color`                       | no replacement                     |
| `--theme-select-list-item--background`                    | no replacement                     |
| `--theme-select-list-item--background--active`            | `--si-sys-color-background-active` |
| `--theme-select-list-item--background--disabled`          | no replacement                     |
| `--theme-select-list-item--background--hover`             | `--si-sys-color-background-hover`  |
| `--theme-select-list-item--background--selected`          | `--si-sys-color-background-active` |
| `--theme-select-list-item--background--selected-active`   | `--si-sys-color-background-active` |
| `--theme-select-list-item--background--selected-disabled` | no replacement                     |
| `--theme-select-list-item--background--selected-hover`    | `--si-sys-color-background-hover`  |
| `--theme-select-list-item--color`                         | `--si-sys-color-text-primary`      |
| `--theme-select-list-item--color--active`                 | `--si-sys-color-text-primary`      |
| `--theme-select-list-item--color--disabled`               | `--si-sys-color-text-disabled`     |
| `--theme-select-list-item--color--hover`                  | `--si-sys-color-text-primary`      |
| `--theme-select-list-item--color--selected`               | `--si-sys-color-text-primary`      |
| `--theme-select-list-item--color--selected-active`        | `--si-sys-color-text-primary`      |
| `--theme-select-list-item--color--selected-disabled`      | `--si-sys-color-text-disabled`     |
| `--theme-select-list-item--color--selected-hover`         | `--si-sys-color-text-primary`      |
| `--theme-select-list-item-check--color`                   | `--si-sys-color-text-primary`      |
| `--theme-select-list-item-check--color--active`           | `--si-sys-color-text-primary`      |
| `--theme-select-list-item-check--color--disabled`         | `--si-sys-color-text-disabled`     |
| `--theme-select-list-item-check--color--hover`            | `--si-sys-color-text-primary`      |
| `--theme-select-list-item-hint--color`                    | `--si-sys-color-text-secondary`    |
| `--theme-select-list-item-hint--color--active`            | `--si-sys-color-text-secondary`    |
| `--theme-select-list-item-hint--color--hover`             | `--si-sys-color-text-secondary`    |

### slider

| Removed token                                       | System-token replacement                       |
| --------------------------------------------------- | ---------------------------------------------- |
| `--theme-slider-thumb--background`                  | `--si-sys-color-background-accent`             |
| `--theme-slider-thumb--background--active`          | `--si-sys-color-background-accent-active`      |
| `--theme-slider-thumb--background--disabled`        | `--si-sys-color-background-neutral`            |
| `--theme-slider-thumb--background--hover`           | `--si-sys-color-background-accent-hover`       |
| `--theme-slider-thumb--background--info`            | `--si-sys-color-background-information`        |
| `--theme-slider-thumb--background--info--active`    | `--si-sys-color-background-information-active` |
| `--theme-slider-thumb--background--info--hover`     | `--si-sys-color-background-information-hover`  |
| `--theme-slider-thumb--background--invalid`         | `--si-sys-color-background-danger`             |
| `--theme-slider-thumb--background--invalid--active` | `--si-sys-color-background-danger-active`      |
| `--theme-slider-thumb--background--invalid--hover`  | `--si-sys-color-background-danger-hover`       |
| `--theme-slider-thumb--background--warning`         | `--si-sys-color-background-warning`            |
| `--theme-slider-thumb--background--warning--active` | `--si-sys-color-background-warning-active`     |
| `--theme-slider-thumb--background--warning--hover`  | `--si-sys-color-background-warning-hover`      |
| `--theme-slider-trace--background`                  | `--si-sys-color-border-accent`                 |
| `--theme-slider-trace--background--disabled`        | `--si-sys-color-border-3`                      |
| `--theme-slider-trace--background--info`            | `--si-sys-color-border-information`            |
| `--theme-slider-trace--background--invalid`         | `--si-sys-color-border-danger`                 |
| `--theme-slider-trace--background--warning`         | `--si-sys-color-border-warning`                |
| `--theme-slider-trace-marker--background`           | `--si-sys-color-background-accent`             |
| `--theme-slider-trace-marker--background--disabled` | `--si-sys-color-background-neutral`            |
| `--theme-slider-trace-marker--background--info`     | `--si-sys-color-background-information`        |
| `--theme-slider-trace-marker--background--invalid`  | `--si-sys-color-background-danger`             |
| `--theme-slider-trace-marker--background--warning`  | `--si-sys-color-background-warning`            |
| `--theme-slider-track--background`                  | `--si-sys-color-border-4`                      |
| `--theme-slider-track--background--disabled`        | `--si-sys-color-border-4`                      |
| `--theme-slider-track-marker--background`           | `--si-sys-color-border-4`                      |
| `--theme-slider-track-marker--background--disabled` | `--si-sys-color-background-neutral`            |

### switch

| Removed token                                               | System-token replacement                       |
| ----------------------------------------------------------- | ---------------------------------------------- |
| `--theme-switch--color`                                     | `--si-sys-color-text-primary`                  |
| `--theme-switch--color--active`                             | `--si-sys-color-text-primary`                  |
| `--theme-switch--color--disabled`                           | `--si-sys-color-text-disabled`                 |
| `--theme-switch--color--hover`                              | `--si-sys-color-text-primary`                  |
| `--theme-switch-mixed--background`                          | `--si-sys-color-background-accent`             |
| `--theme-switch-mixed--background--active`                  | `--si-sys-color-background-accent-active`      |
| `--theme-switch-mixed--background--disabled`                | `--si-sys-color-text-disabled`                 |
| `--theme-switch-mixed--background--hover`                   | `--si-sys-color-background-accent-hover`       |
| `--theme-switch-mixed--background--info`                    | `--si-sys-color-background-information`        |
| `--theme-switch-mixed--background--info--active`            | `--si-sys-color-background-information-active` |
| `--theme-switch-mixed--background--info--hover`             | `--si-sys-color-background-information-hover`  |
| `--theme-switch-mixed--background--invalid`                 | `--si-sys-color-background-danger`             |
| `--theme-switch-mixed--background--invalid--active`         | `--si-sys-color-background-danger-active`      |
| `--theme-switch-mixed--background--invalid--hover`          | `--si-sys-color-background-danger-hover`       |
| `--theme-switch-mixed--background--valid`                   | `--si-sys-color-background-accent`             |
| `--theme-switch-mixed--background--valid--active`           | `--si-sys-color-background-accent-active`      |
| `--theme-switch-mixed--background--valid--hover`            | `--si-sys-color-background-accent-hover`       |
| `--theme-switch-mixed--background--warning`                 | `--si-sys-color-background-warning`            |
| `--theme-switch-mixed--background--warning--active`         | `--si-sys-color-background-warning-active`     |
| `--theme-switch-mixed--background--warning--hover`          | `--si-sys-color-background-warning-hover`      |
| `--theme-switch-mixed--border-color`                        | no replacement                                 |
| `--theme-switch-mixed--border-color--active`                | no replacement                                 |
| `--theme-switch-mixed--border-color--disabled`              | no replacement                                 |
| `--theme-switch-mixed--border-color--hover`                 | no replacement                                 |
| `--theme-switch-mixed--border-color--info`                  | no replacement                                 |
| `--theme-switch-mixed--border-color--info--active`          | no replacement                                 |
| `--theme-switch-mixed--border-color--info--hover`           | no replacement                                 |
| `--theme-switch-mixed--border-color--invalid`               | no replacement                                 |
| `--theme-switch-mixed--border-color--invalid--active`       | no replacement                                 |
| `--theme-switch-mixed--border-color--invalid--hover`        | no replacement                                 |
| `--theme-switch-mixed--border-color--valid`                 | no replacement                                 |
| `--theme-switch-mixed--border-color--valid--active`         | no replacement                                 |
| `--theme-switch-mixed--border-color--valid--hover`          | no replacement                                 |
| `--theme-switch-mixed--border-color--warning`               | `--si-sys-color-border-warning`                |
| `--theme-switch-mixed--border-color--warning--active`       | `--si-sys-color-border-warning`                |
| `--theme-switch-mixed--border-color--warning--hover`        | `--si-sys-color-border-warning`                |
| `--theme-switch-off--background`                            | `--si-sys-color-background-1`                  |
| `--theme-switch-off--background--active`                    | `--si-sys-color-background-active`             |
| `--theme-switch-off--background--disabled`                  | no replacement                                 |
| `--theme-switch-off--background--hover`                     | `--si-sys-color-background-hover`              |
| `--theme-switch-off--background--info`                      | `--si-sys-color-background-1`                  |
| `--theme-switch-off--background--info--active`              | `--si-sys-color-background-active`             |
| `--theme-switch-off--background--info--hover`               | `--si-sys-color-background-hover`              |
| `--theme-switch-off--background--invalid`                   | `--si-sys-color-background-1`                  |
| `--theme-switch-off--background--invalid--active`           | `--si-sys-color-background-active`             |
| `--theme-switch-off--background--invalid--hover`            | `--si-sys-color-background-hover`              |
| `--theme-switch-off--background--valid`                     | `--si-sys-color-background-1`                  |
| `--theme-switch-off--background--valid--active`             | `--si-sys-color-background-active`             |
| `--theme-switch-off--background--valid--hover`              | `--si-sys-color-background-hover`              |
| `--theme-switch-off--background--warning`                   | `--si-sys-color-background-1`                  |
| `--theme-switch-off--background--warning--active`           | `--si-sys-color-background-active`             |
| `--theme-switch-off--background--warning--hover`            | `--si-sys-color-background-hover`              |
| `--theme-switch-off--border-color`                          | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--active`                  | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--disabled`                | `--si-sys-color-text-disabled`                 |
| `--theme-switch-off--border-color--hover`                   | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--info`                    | `--si-sys-color-background-information`        |
| `--theme-switch-off--border-color--info--active`            | `--si-sys-color-background-information`        |
| `--theme-switch-off--border-color--info--hover`             | `--si-sys-color-background-information`        |
| `--theme-switch-off--border-color--invalid`                 | `--si-sys-color-border-danger`                 |
| `--theme-switch-off--border-color--invalid--active`         | `--si-sys-color-border-danger`                 |
| `--theme-switch-off--border-color--invalid--hover`          | `--si-sys-color-border-danger`                 |
| `--theme-switch-off--border-color--valid`                   | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--valid--active`           | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--valid--hover`            | `--si-sys-color-border-2`                      |
| `--theme-switch-off--border-color--warning`                 | `--si-sys-color-border-warning`                |
| `--theme-switch-off--border-color--warning--active`         | `--si-sys-color-border-warning`                |
| `--theme-switch-off--border-color--warning--hover`          | `--si-sys-color-border-warning`                |
| `--theme-switch-on--background`                             | `--si-sys-color-background-accent`             |
| `--theme-switch-on--background--active`                     | `--si-sys-color-background-accent-active`      |
| `--theme-switch-on--background--disabled`                   | `--si-sys-color-text-disabled`                 |
| `--theme-switch-on--background--hover`                      | `--si-sys-color-background-accent-hover`       |
| `--theme-switch-on--background--info`                       | `--si-sys-color-background-information`        |
| `--theme-switch-on--background--info--active`               | `--si-sys-color-background-information-active` |
| `--theme-switch-on--background--info--hover`                | `--si-sys-color-background-information-hover`  |
| `--theme-switch-on--background--invalid`                    | `--si-sys-color-background-danger`             |
| `--theme-switch-on--background--invalid--active`            | `--si-sys-color-background-danger-active`      |
| `--theme-switch-on--background--invalid--hover`             | `--si-sys-color-background-danger-hover`       |
| `--theme-switch-on--background--valid`                      | `--si-sys-color-background-accent`             |
| `--theme-switch-on--background--valid--active`              | `--si-sys-color-background-accent-active`      |
| `--theme-switch-on--background--valid--hover`               | `--si-sys-color-background-accent-hover`       |
| `--theme-switch-on--background--warning`                    | `--si-sys-color-background-warning`            |
| `--theme-switch-on--background--warning--active`            | `--si-sys-color-background-warning-active`     |
| `--theme-switch-on--background--warning--hover`             | `--si-sys-color-background-warning-hover`      |
| `--theme-switch-on--border-color`                           | no replacement                                 |
| `--theme-switch-on--border-color--active`                   | no replacement                                 |
| `--theme-switch-on--border-color--disabled`                 | no replacement                                 |
| `--theme-switch-on--border-color--hover`                    | no replacement                                 |
| `--theme-switch-on--border-color--info`                     | no replacement                                 |
| `--theme-switch-on--border-color--info--active`             | no replacement                                 |
| `--theme-switch-on--border-color--info--hover`              | no replacement                                 |
| `--theme-switch-on--border-color--invalid`                  | no replacement                                 |
| `--theme-switch-on--border-color--invalid--active`          | no replacement                                 |
| `--theme-switch-on--border-color--invalid--hover`           | no replacement                                 |
| `--theme-switch-on--border-color--valid`                    | no replacement                                 |
| `--theme-switch-on--border-color--valid--active`            | no replacement                                 |
| `--theme-switch-on--border-color--valid--hover`             | no replacement                                 |
| `--theme-switch-on--border-color--warning`                  | `--si-sys-color-border-warning`                |
| `--theme-switch-on--border-color--warning--active`          | `--si-sys-color-border-warning`                |
| `--theme-switch-on--border-color--warning--hover`           | `--si-sys-color-border-warning`                |
| `--theme-switch-thumb--box-shadow`                          | no replacement                                 |
| `--theme-switch-thumb-mixed--background`                    | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--active`            | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--disabled`          | `--si-sys-color-text-inverse`                  |
| `--theme-switch-thumb-mixed--background--hover`             | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--info`              | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-mixed--background--info--active`      | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-mixed--background--info--hover`       | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-mixed--background--invalid`           | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-mixed--background--invalid--active`   | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-mixed--background--invalid--hover`    | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-mixed--background--valid`             | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--valid--active`     | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--valid--hover`      | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-mixed--background--warning`           | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-mixed--background--warning--active`   | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-mixed--background--warning--hover`    | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-mixed--border-color`                  | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--active`          | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--disabled`        | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--hover`           | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--info`            | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--info--active`    | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--info--hover`     | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--invalid`         | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--invalid--active` | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--invalid--hover`  | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--valid`           | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--valid--active`   | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--valid--hover`    | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--warning`         | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--warning--active` | no replacement                                 |
| `--theme-switch-thumb-mixed--border-color--warning--hover`  | no replacement                                 |
| `--theme-switch-thumb-off--background`                      | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--active`              | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--disabled`            | `--si-sys-color-text-disabled`                 |
| `--theme-switch-thumb-off--background--hover`               | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--info`                | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--info--active`        | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--info--hover`         | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--invalid`             | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--invalid--active`     | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--invalid--hover`      | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--valid`               | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--valid--active`       | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--valid--hover`        | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--warning`             | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--warning--active`     | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--background--warning--hover`      | `--si-sys-color-text-secondary`                |
| `--theme-switch-thumb-off--border-color`                    | no replacement                                 |
| `--theme-switch-thumb-off--border-color--active`            | no replacement                                 |
| `--theme-switch-thumb-off--border-color--disabled`          | no replacement                                 |
| `--theme-switch-thumb-off--border-color--hover`             | no replacement                                 |
| `--theme-switch-thumb-off--border-color--info`              | no replacement                                 |
| `--theme-switch-thumb-off--border-color--info--active`      | no replacement                                 |
| `--theme-switch-thumb-off--border-color--info--hover`       | no replacement                                 |
| `--theme-switch-thumb-off--border-color--invalid`           | no replacement                                 |
| `--theme-switch-thumb-off--border-color--invalid--active`   | no replacement                                 |
| `--theme-switch-thumb-off--border-color--invalid--hover`    | no replacement                                 |
| `--theme-switch-thumb-off--border-color--valid`             | no replacement                                 |
| `--theme-switch-thumb-off--border-color--valid--active`     | no replacement                                 |
| `--theme-switch-thumb-off--border-color--valid--hover`      | no replacement                                 |
| `--theme-switch-thumb-off--border-color--warning`           | no replacement                                 |
| `--theme-switch-thumb-off--border-color--warning--active`   | no replacement                                 |
| `--theme-switch-thumb-off--border-color--warning--hover`    | no replacement                                 |
| `--theme-switch-thumb-on--background`                       | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--active`               | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--disabled`             | `--si-sys-color-text-inverse`                  |
| `--theme-switch-thumb-on--background--hover`                | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--info`                 | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-on--background--info--active`         | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-on--background--info--hover`          | `--si-sys-color-text-on-information`           |
| `--theme-switch-thumb-on--background--invalid`              | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-on--background--invalid--active`      | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-on--background--invalid--hover`       | `--si-sys-color-text-on-danger`                |
| `--theme-switch-thumb-on--background--valid`                | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--valid--active`        | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--valid--hover`         | `--si-sys-color-text-on-accent`                |
| `--theme-switch-thumb-on--background--warning`              | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-on--background--warning--active`      | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-on--background--warning--hover`       | `--si-sys-color-text-on-warning`               |
| `--theme-switch-thumb-on--border-color`                     | no replacement                                 |
| `--theme-switch-thumb-on--border-color--active`             | no replacement                                 |
| `--theme-switch-thumb-on--border-color--disabled`           | no replacement                                 |
| `--theme-switch-thumb-on--border-color--hover`              | no replacement                                 |
| `--theme-switch-thumb-on--border-color--info`               | no replacement                                 |
| `--theme-switch-thumb-on--border-color--info--active`       | no replacement                                 |
| `--theme-switch-thumb-on--border-color--info--hover`        | no replacement                                 |
| `--theme-switch-thumb-on--border-color--invalid`            | no replacement                                 |
| `--theme-switch-thumb-on--border-color--invalid--active`    | no replacement                                 |
| `--theme-switch-thumb-on--border-color--invalid--hover`     | no replacement                                 |
| `--theme-switch-thumb-on--border-color--valid`              | no replacement                                 |
| `--theme-switch-thumb-on--border-color--valid--active`      | no replacement                                 |
| `--theme-switch-thumb-on--border-color--valid--hover`       | no replacement                                 |
| `--theme-switch-thumb-on--border-color--warning`            | no replacement                                 |
| `--theme-switch-thumb-on--border-color--warning--active`    | no replacement                                 |
| `--theme-switch-thumb-on--border-color--warning--hover`     | no replacement                                 |

### tab

| Removed token                                          | System-token replacement                            |
| ------------------------------------------------------ | --------------------------------------------------- |
| `--theme-animated-tab-circle--background`              | `--si-sys-color-background-1`                       |
| `--theme-animated-tab-circle--background--active`      | `--si-sys-color-background-accent-secondary-active` |
| `--theme-animated-tab-circle--background--disabled`    | no replacement                                      |
| `--theme-animated-tab-circle--background--hover`       | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-animated-tab-circle--background--selected`    | no replacement                                      |
| `--theme-animated-tab-circle--border-color`            | no replacement                                      |
| `--theme-animated-tab-circle--border-color--active`    | no replacement                                      |
| `--theme-animated-tab-circle--border-color--disabled`  | no replacement                                      |
| `--theme-animated-tab-circle--border-color--hover`     | no replacement                                      |
| `--theme-animated-tab-circle--border-color--selected`  | `--si-sys-color-border-accent-hover`                |
| `--theme-animated-tab-icon--color`                     | `--si-sys-color-text-primary`                       |
| `--theme-animated-tab-icon--color--active`             | `--si-sys-color-text-primary`                       |
| `--theme-animated-tab-icon--color--disabled`           | `--si-sys-color-text-disabled`                      |
| `--theme-animated-tab-icon--color--hover`              | `--si-sys-color-text-primary`                       |
| `--theme-animated-tab-icon--color--selected`           | `--si-sys-color-text-accent-hover`                  |
| `--theme-animated-tab-indicator--background`           | `--si-sys-color-border-3`                           |
| `--theme-animated-tab-indicator--background--active`   | `--si-sys-color-border-3`                           |
| `--theme-animated-tab-indicator--background--hover`    | `--si-sys-color-border-3`                           |
| `--theme-animated-tab-indicator--background--selected` | `--si-sys-color-background-accent-hover`            |
| `--theme-tab--background`                              | no replacement                                      |
| `--theme-tab--background--active`                      | `--si-sys-color-background-accent-secondary-active` |
| `--theme-tab--background--disabled`                    | no replacement                                      |
| `--theme-tab--background--hover`                       | `--si-sys-color-background-accent-secondary-hover`  |
| `--theme-tab--background--selected`                    | no replacement                                      |
| `--theme-tab--color`                                   | `--si-sys-color-text-primary`                       |
| `--theme-tab--color--active`                           | `--si-sys-color-text-primary`                       |
| `--theme-tab--color--disabled`                         | `--si-sys-color-text-disabled`                      |
| `--theme-tab--color--hover`                            | `--si-sys-color-text-primary`                       |
| `--theme-tab--color--selected`                         | `--si-sys-color-text-accent-hover`                  |
| `--theme-tab-icon--color`                              | `--si-sys-color-text-primary`                       |
| `--theme-tab-icon--color--active`                      | `--si-sys-color-text-primary`                       |
| `--theme-tab-icon--color--disabled`                    | `--si-sys-color-text-disabled`                      |
| `--theme-tab-icon--color--hover`                       | `--si-sys-color-text-primary`                       |
| `--theme-tab-icon--color--selected`                    | `--si-sys-color-text-accent-hover`                  |
| `--theme-tab-indicator--background`                    | `--si-sys-color-border-3`                           |
| `--theme-tab-indicator--background--active`            | `--si-sys-color-border-3`                           |
| `--theme-tab-indicator--background--disabled`          | `--si-sys-color-border-3`                           |
| `--theme-tab-indicator--background--hover`             | `--si-sys-color-border-3`                           |
| `--theme-tab-indicator--background--selected`          | `--si-sys-color-background-accent-hover`            |
| `--theme-tab-indicator--height`                        | no replacement                                      |
| `--theme-tab-pill--border-color`                       | `--si-sys-color-border-3`                           |
| `--theme-tab-pill--border-color--active`               | `--si-sys-color-border-3`                           |
| `--theme-tab-pill--border-color--disabled`             | `--si-sys-color-border-3`                           |
| `--theme-tab-pill--border-color--hover`                | `--si-sys-color-border-3`                           |
| `--theme-tab-pill--border-color--selected`             | `--si-sys-color-border-accent-hover`                |
| `--theme-table-group-header-row--background`           | no replacement                                      |
| `--theme-table-group-header-row--border-color`         | `--si-sys-color-border-3`                           |

### table

| Removed token                                             | System-token replacement                 |
| --------------------------------------------------------- | ---------------------------------------- |
| `--theme-table--background`                               | no replacement                           |
| `--theme-table--border-color`                             | no replacement                           |
| `--theme-table--color`                                    | `--si-sys-color-text-primary`            |
| `--theme-table-data-cell--background`                     | `--si-sys-color-background-1`            |
| `--theme-table-data-cell--background--active`             | `--si-sys-color-background-active`       |
| `--theme-table-data-cell--background--disabled`           | no replacement                           |
| `--theme-table-data-cell--background--hover`              | `--si-sys-color-background-hover`        |
| `--theme-table-data-cell--background--selected`           | `--si-sys-color-background-active`       |
| `--theme-table-data-cell--background--selected-active`    | `--si-sys-color-background-active`       |
| `--theme-table-data-cell--background--selected-hover`     | `--si-sys-color-background-hover`        |
| `--theme-table-data-cell--border-color`                   | no replacement                           |
| `--theme-table-data-cell--color`                          | `--si-sys-color-text-primary`            |
| `--theme-table-data-cell--color-disabled`                 | `--si-sys-color-text-disabled`           |
| `--theme-table-data-row--background`                      | no replacement                           |
| `--theme-table-data-row--background--active`              | `--si-sys-color-background-active`       |
| `--theme-table-data-row--background--disabled`            | no replacement                           |
| `--theme-table-data-row--background--hover`               | `--si-sys-color-background-hover`        |
| `--theme-table-data-row--background--selected`            | `--si-sys-color-background-active`       |
| `--theme-table-data-row--background--selected-active`     | `--si-sys-color-background-active`       |
| `--theme-table-data-row--background--selected-hover`      | `--si-sys-color-background-hover`        |
| `--theme-table-data-row--border-color`                    | `--si-sys-color-border-4`                |
| `--theme-table-data-row-alt--background`                  | `--si-sys-color-background-0`            |
| `--theme-table-data-row-alt--background--active`          | `--si-sys-color-background-active`       |
| `--theme-table-data-row-alt--background--disabled`        | `--si-sys-color-background-1`            |
| `--theme-table-data-row-alt--background--hover`           | `--si-sys-color-background-hover`        |
| `--theme-table-data-row-alt--background--selected`        | `--si-sys-color-background-active`       |
| `--theme-table-data-row-alt--background--selected-active` | `--si-sys-color-background-active`       |
| `--theme-table-data-row-alt--background--selected-hover`  | `--si-sys-color-background-hover`        |
| `--theme-table-group-splitter--background`                | `--si-sys-color-border-4`                |
| `--theme-table-group-splitter--background--hover`         | `--si-sys-color-background-accent-hover` |
| `--theme-table-header-cell--background`                   | no replacement                           |
| `--theme-table-header-cell--background--active`           | `--si-sys-color-background-active`       |
| `--theme-table-header-cell--background--hover`            | `--si-sys-color-background-hover`        |
| `--theme-table-header-cell--border-color`                 | no replacement                           |
| `--theme-table-header-cell--border-color--active`         | no replacement                           |
| `--theme-table-header-cell--border-color--hover`          | no replacement                           |
| `--theme-table-header-cell--color`                        | `--si-sys-color-text-primary`            |
| `--theme-table-header-filter--color`                      | `--si-sys-color-text-accent-hover`       |
| `--theme-table-header-row--background`                    | no replacement                           |
| `--theme-table-header-row--border-color`                  | `--si-sys-color-border-3`                |
| `--theme-table-header-sort--color`                        | `--si-sys-color-text-accent-hover`       |
| `--theme-table-header-splitter--background`               | `--si-sys-color-border-3`                |
| `--theme-table-header-splitter--background--hover`        | `--si-sys-color-background-accent-hover` |
| `--theme-table-selection--border-color`                   | no replacement                           |

### tile

| Removed token                 | System-token replacement           |
| ----------------------------- | ---------------------------------- |
| `--theme-tile--border-radius` | `--si-sys-sizing-border-radius-sm` |
| `--theme-tile--box-shadow`    | no replacement                     |

### toast

| Removed token                           | System-token replacement            |
| --------------------------------------- | ----------------------------------- |
| `--theme-toast--background`             | `--si-sys-color-background-1`       |
| `--theme-toast--border-color`           | no replacement                      |
| `--theme-toast--border-radius`          | `--si-sys-sizing-border-radius-sm`  |
| `--theme-toast--border-radus`           | `--si-sys-sizing-border-radius-sm`  |
| `--theme-toast--border-thickness`       | `--si-sys-sizing-border-width-none` |
| `--theme-toast--box-shadow`             | `--si-sys-color-effects-shadow-4`   |
| `--theme-toast--color`                  | `--si-sys-color-text-primary`       |
| `--theme-toast-timer-track--background` | no replacement                      |
| `--theme-toast-timer-value--background` | no replacement                      |

### tooltip

| Removed token                                   | System-token replacement           |
| ----------------------------------------------- | ---------------------------------- |
| `--theme-tooltip--background`                   | `--si-sys-color-background-1`      |
| `--theme-tooltip--border-color`                 | no replacement                     |
| `--theme-tooltip--color`                        | `--si-sys-color-text-primary`      |
| `--theme-tooltip-close--color`                  | `--si-sys-color-text-secondary`    |
| `--theme-tooltip-close-btn--background`         | no replacement                     |
| `--theme-tooltip-close-btn--background--active` | `--si-sys-color-background-active` |
| `--theme-tooltip-close-btn--background--hover`  | `--si-sys-color-background-hover`  |
| `--theme-tootlip--background`                   | `--si-sys-color-background-1`      |

### tree

| Removed token                                    | System-token replacement           |
| ------------------------------------------------ | ---------------------------------- |
| `--theme-tree-item--background`                  | no replacement                     |
| `--theme-tree-item--background--active`          | `--si-sys-color-background-active` |
| `--theme-tree-item--background--hover`           | `--si-sys-color-background-hover`  |
| `--theme-tree-item--background--selected`        | `--si-sys-color-background-active` |
| `--theme-tree-item--background--selected-active` | `--si-sys-color-background-active` |
| `--theme-tree-item--background--selected-hover`  | `--si-sys-color-background-hover`  |
| `--theme-tree-item--color`                       | `--si-sys-color-text-primary`      |
| `--theme-tree-item-icon`                         | `--si-sys-color-text-primary`      |
| `--theme-tree-item-node-closed-icon--color`      | `--si-sys-color-text-primary`      |
| `--theme-tree-item-node-open-icon--color`        | `--si-sys-color-text-primary`      |
| `--theme-tree-item-status--color`                | `--si-sys-color-text-secondary`    |

### upload

| Removed token                            | System-token replacement             |
| ---------------------------------------- | ------------------------------------ |
| `--theme-upload--background`             | `--si-sys-color-background-0`        |
| `--theme-upload--background--checking`   | `--si-sys-color-background-0`        |
| `--theme-upload--background--disabled`   | no replacement                       |
| `--theme-upload--background--dragover`   | `--si-sys-color-background-0`        |
| `--theme-upload--border-color`           | `--si-sys-color-border-3`            |
| `--theme-upload--border-color--checking` | `--si-sys-color-border-3`            |
| `--theme-upload--border-color--disabled` | `--si-sys-color-border-3`            |
| `--theme-upload--border-color--dragover` | `--si-sys-color-border-accent-hover` |
| `--theme-upload--border-radius`          | `--si-sys-sizing-border-radius-sm`   |
| `--theme-upload-text--color`             | `--si-sys-color-text-primary`        |
| `--theme-upload-text--color--checking`   | `--si-sys-color-text-primary`        |
| `--theme-upload-text--color--disabled`   | `--si-sys-color-text-disabled`       |

### workflow

| Removed token                                         | System-token replacement           |
| ----------------------------------------------------- | ---------------------------------- |
| `--theme-workflow--border-radius`                     | no replacement                     |
| `--theme-workflow-step--background`                   | no replacement                     |
| `--theme-workflow-step--background--active`           | `--si-sys-color-background-active` |
| `--theme-workflow-step--background--disabled`         | no replacement                     |
| `--theme-workflow-step--background--hover`            | `--si-sys-color-background-hover`  |
| `--theme-workflow-step--background--selected`         | `--si-sys-color-background-active` |
| `--theme-workflow-step--color`                        | `--si-sys-color-text-primary`      |
| `--theme-workflow-step--color--disabled`              | `--si-sys-color-text-disabled`     |
| `--theme-workflow-step-icon--background`              | `--si-sys-color-background-0`      |
| `--theme-workflow-step-icon-default--color`           | `--si-sys-color-text-secondary`    |
| `--theme-workflow-step-icon-default--color--disabled` | `--si-sys-color-text-disabled`     |
| `--theme-workflow-step-icon-default--color--selected` | `--si-sys-color-text-accent-hover` |
| `--theme-workflow-step-icon-done--color`              | `--si-sys-color-text-accent`       |
| `--theme-workflow-step-icon-done--color--disabled`    | `--si-sys-color-text-disabled`     |
| `--theme-workflow-step-icon-done--color--selected`    | `--si-sys-color-text-accent-hover` |
| `--theme-workflow-step-icon-error--color--disabled`   | `--si-sys-color-text-disabled`     |
| `--theme-workflow-step-icon-success--color--disabled` | `--si-sys-color-text-disabled`     |
| `--theme-workflow-step-icon-warning--color--disabled` | `--si-sys-color-text-disabled`     |
