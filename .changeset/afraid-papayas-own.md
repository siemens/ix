---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Component Updates and Enhancements

New Variants for Card Components:
- **ix-action-card**, **ix-card**, and **ix-push-card**:
  - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

Property Updates:
- **ix-chip**:
  - The `color` property has been **replaced by** `chipColor`.
- **ix-event-list**:
  - The `color` attribute has been **replaced by** `itemColor`.
- **ix-icon-button**:
  - The `color` attribute has been **replaced by** `iconColor`.
  - Size `32` has been removed.
- **ix-pill**:
  - The `color` attribute has been **replaced by** `pillColor`.
- **ix-typography**:
  - The `color` attribute has been **replaced by** `textColor`.
- **ix-select**:
  - The `selectedIndices` attribute has been **replaced by** `value`.
  - The `itemSelectionChange` event has been **replaced by** `valueChange`.
- **ix-select-item**:
  - The type of the `value` property type has been updated to `string`.

Date and Time Picker Enhancements:
- **ix-date-picker**:
  - Removed attributes: `individual` and `eventDelimiter`.
  - The `textSelectedDate` property has been **replaced by** `i18nDone`.
  - The `done` event has been **replaced by** `dateSelect`.
- **ix-datetime-picker**:
  - The `textSelectedDate` property has been **replaced by** `i18nDone`.
  - The `done` event has been **replaced by** `dateSelect`.
  - Removed the `eventDelimiter` property.
- **ix-time-picker**:
  - Removed attributes: `individual` and `showTimeReference`.

Removed Features:
- **ix-menu**:
  - Removed the `maxVisibleMenuItems` attribute.
- **ix-menu-item**:
  - The `tabIcon` attribute has been removed and replaced with `icon`.

Other Changes:
- **ix-modal**:
  - The `keyboard` attribute has been **replaced by** `closeOnEscape`.
