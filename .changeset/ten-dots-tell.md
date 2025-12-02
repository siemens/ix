---
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Framework specific functions/services for modals and messages have been added to **ix-angular**, **ix-react** and **ix-vue**.

- `MessageService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to show messages using the `showMessage` function and different pre defined messages using the functions `info`, `warning`, `error`, `success` and `question`.
- `LoadingService` has been added to **ix-angular** and **ix-angular/standalone**. This service can be used to display the loading modal using `showModalLoading`.
- `showModalLoading` utility function has been added to **ix-react** and **ix-vue**.
- `showMessage`, `showMessage.info`, `showMessage.warning`, `showMessage.error`, `showMessage.success`, `showMessage.question` utility functions have been added to **ix-react** and **ix-vue**.
