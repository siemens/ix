---
'@siemens/ix': major
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

Migrate **showMessage** helpers to the shared status set. Rename `info` → `information`; add `danger`, `caution`, and `critical`. `warning` now denotes the new warning status (previous yellow meaning moves to `caution`). `error` and `question` stay. Status icons use `border/*` colors; `question` uses `--si-sys-color-text-secondary`. Angular `MessageService` mirrors the same helper names. Peer `@siemens/ix-icons` is pinned to `0.0.0-beta-20261021072559` (required for `--si-sys-*` icon colors). See `BREAKING_CHANGES/v6.md`.
