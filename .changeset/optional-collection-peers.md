---
'@siemens/ix': major
---

V6 makes three of the Stencil collection's peer dependencies optional: `@floating-ui/dom`, `luxon`, and `@stencil/core`; `@siemens/ix-icons` remains a required peer. Collection consumers must install all four packages explicitly: `@floating-ui/dom`, `@siemens/ix-icons`, `@stencil/core`, and `luxon`; standard bundled entry points remain self-contained.
