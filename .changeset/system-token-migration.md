---
'@siemens/ix': major
'@siemens/ix-aggrid': major
'@siemens/ix-echarts': major
---

## Migrate to SI Theme 6 tokens

Adopt SI Theme 6 semantic tokens: `--theme-si-sys-*` becomes `--si-sys-color-*`; `--theme-si-classic-ref-*` and `--theme-si-ref-*` become `--si-ref-*`; Sass variables become `$si-sys-color-*`. Choose a purpose-specific system or reference token for each legacy `--theme-*` use rather than blindly renaming its prefix. The common legacy layer removes sizing, spacing, text-decoration, effects, typography metric/shorthand, and remaining legacy color, chart, border, font-family, and branding exports; only five timing compatibility variables remain. Migrate application-owned references using `BREAKING_CHANGES/v6.md`.

Generated `--theme-<component>-*` aliases are no longer included and no longer customize migrated components. Replace them with corresponding scoped `--ix-*` properties; `BREAKING_CHANGES/v6_components_tokens.md` maps downstream alias references. Color-valued component props such as `iconColor` and event-list `itemColor` now require full CSS custom-property names including `--`; exported `NotificationColor` values include it too.

## Customize components and density

Component-scoped `--ix-*` properties expose dimensions, spacing, icons, and density-aware geometry. `ix-action-card`, `ix-chat-input`, `ix-chat-ai-message`, and `ix-chat-user-message` also expose scoped appearance and state overrides without internal selectors. Density-aware sizing and spacing respond to live density changes across core components and legacy-backed styles while preserving default-density geometry. Remaining chat, checkbox, and event-list consumers use system tokens; default spacing and chat font sizes remain preserved, while compact density also applies to migrated spacing and typography. Standalone `ix-icon` retains the icon package's 20px default in both densities and honors explicit `size` values; applicable component-owned icons use 20px by default and 16px in compact density.

## Styling changes and compatibility

SI Theme 6 semantic colors now drive date-picker day, range, and today states; badge status backgrounds and on-status colors; completed and selected workflow-step hover/press accents; legacy form controls; and global style utilities. The expanding-search active-button, event-list-item empty-indicator, and date-dropdown divider borders use system border colors and the default system border width. Existing component-scoped border overrides still take complete border values. Warning, critical, and neutral colors and shadows may visibly differ under SI Theme 6.

Remove the legacy shadow aliases `--theme-box-shadow-lvl-*`, `--theme-box-shadow-level-*`, and `--theme-box-shadow-insert`. Use the complete `--si-sys-color-effects-shadow-1` through `--si-sys-color-effects-shadow-4` values directly as shadows. The inset effect has no system-token replacement; remove it or define an application-owned inset shadow. Input-like controls, shared input mixins, and legacy native inputs no longer render decorative inset shadows in normal, hover, or focus states. Obsolete input, select, chat-input, and expanding-search shadow custom properties are removed; keyboard-focus indicators and browser autofill background correction are unchanged.

Native `<pre>`, `<code>`, `<kbd>`, and `<samp>` styling in the reset, globals, and legacy styles now uses `--si-ref-typography-font-family-mono`. The classic theme's monospace default changes from JetBrains Mono to `'Courier New', monospace`.

## Integration changes

AG Grid consumes grouped `--si-sys-color-*` tokens for design-tokens 0.12 compatibility. Border and focus-border defaults use `--si-sys-sizing-border-width-default`, without changing their width or disabled column borders. Overrides of `--theme-border-width-default` and `--theme-focus-border-thickness` no longer affect these defaults; migrate to the system token or the matching AG Grid theme parameter.

ECharts `getComputedCSSProperty` no longer prepends `--theme-`. Pass complete CSS custom-property names, including `--`, and migrate legacy theme references to their SI Theme 6 equivalents.
