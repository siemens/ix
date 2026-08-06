---
'@siemens/ix-vue': patch
---

Fix incorrect `types` path in published package by setting `rootDir` to `src` in tsconfig, so declaration files are emitted at `dist/index.d.ts` instead of `dist/src/index.d.ts`.
