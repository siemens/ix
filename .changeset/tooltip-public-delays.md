---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Document `showDelay` and `hideDelay` on `ix-tooltip` as public properties. Use them to set the delay in milliseconds before the tooltip is shown (default `0`) or hidden (default `50`). Interactive tooltips hide after `150` ms unless `hideDelay` is set. An explicit `hideDelay` is now always respected, including a value of `50` on interactive tooltips, which was previously replaced by `150`.
