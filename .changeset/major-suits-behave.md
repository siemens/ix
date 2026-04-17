---
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix': minor
'@siemens/ix-vue': minor
---

`ix-dropdown` now observes the visibility of the trigger element in the viewport while the dropdown is open. If the trigger element scrolls outside the visible viewport, the dropdown will automatically close to prevent it from remaining visible in an unexpected screen position. To keep the dropdown open regardless of trigger visibility, set `suppressTriggerVisibilityCheck` to `true`.
