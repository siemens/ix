---
'@siemens/ix': major
---

V6 makes four of the Stencil collection's peer dependencies optional: `@floating-ui/dom`, `animejs`, `luxon`, and `@stencil/core`; `@siemens/ix-icons` remains a required peer. Collection consumers must install all five packages explicitly: `@floating-ui/dom`, `@siemens/ix-icons`, `@stencil/core`, `animejs`, and `luxon`; standard bundled entry points remain self-contained.
