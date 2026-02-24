---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Update `ix-date-dropdown` quick date selection from a list to a picker, with quick date options displayed on the left side.

Removed attributes:

- `ariaLabelDropdownButton`: Provided `aria-label` will be passthrough the component shadow-dom to the actual button
- `customRangeDisabled` (also contain removal of `i18nCustomItem`): Removed because `ix-date-dropdown` will be a picker with quick selection on the left side.
