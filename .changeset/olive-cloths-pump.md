---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Remove legacy accessible-name properties from button components. Set the native `aria-label` attribute on the host element instead; it is applied to the inner interactive surface.

- **ix-button**: `ariaLabelButton` (**aria-label-button**)
- **ix-icon-button**: `a11yLabel` (**a11y-label**)
- **ix-toggle-button**: `ariaLabelButton` (**aria-label-button**)
- **ix-icon-toggle-button**: `ariaLabelIconButton` (**aria-label-icon-button**)

See [Breaking changes v5](../BREAKING_CHANGES/v5.md) for migration examples.
