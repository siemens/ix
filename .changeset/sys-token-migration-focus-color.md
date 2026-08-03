---
'@siemens/ix': patch
---

Migrate remaining legacy `--theme-color-*` references in `ix-chat-input`, `ix-menu`, `ix-select` component styles to the new `si/sys` design tokens (`--theme-si-sys-effects-focus`, `--theme-si-sys-text-information`, `--theme-si-sys-text-warning`), per the SI Theme Token Migration Guide. Also fixed a stale, undefined `--theme-input--color--disabled` CSS custom property reference in the shared input styles (affecting `ix-input`, `ix-textarea`, `ix-number-input`, `ix-date-input`, `ix-time-input`) to correctly use the existing `--ix-input--color--disabled` component token. No visual changes are expected for the classic light/dark themes.
