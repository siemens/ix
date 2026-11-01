---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Document `showDelay` and `hideDelay` on `ix-tooltip` as public properties. Use them to set the delay in milliseconds before the tooltip is shown (default `0`) or hidden (default `50`). Interactive tooltips hide after `150` ms unless `hideDelay` is set. 

Pressing Escape now closes the tooltip immediately, regardless of `hideDelay`.
