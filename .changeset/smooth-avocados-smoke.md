---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Multiple **ix-modal** boolean properties have been renamed:

`animation` -> `disableAnimation`
`backdrop` -> `hideBackdrop`
`closeOnEscape` -> `disableEscapeClose`

All used to have a deafult value of `true`. They all default to `false` now.
