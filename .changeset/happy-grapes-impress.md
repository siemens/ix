---
"@siemens/ix-react": patch
"@siemens/ix-angular": patch
"@siemens/ix-vue": patch
"@siemens/ix": patch
---

- Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation
- Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

Fixes #2061
