---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

Remove no-op **`ModalConfig`** fields **`container`**, **`keyboard`**, and **`title`** from the **`showModal`** API. They had no effect in v4; delete them from config objects.

See [Breaking changes v5](../BREAKING_CHANGES/v5.md) (**ModalConfig**: removed no-op options) for migration.
