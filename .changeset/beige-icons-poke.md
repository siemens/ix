---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

**Breaking (v5):** Remove the **`placement`** property (and **`placement`** attribute) from **`ix-split-button`**. It was not wired to the internal dropdown, so it had no effect; removing it only drops a misleading no-op from the public API. See **`BREAKING_CHANGES/v5.md`**.
