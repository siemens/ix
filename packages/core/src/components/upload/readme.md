<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-upload

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute                | Description                                                                                                                                                                                    | Type                                                                                                                          | Default                                 |
| -------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `accept`             | `accept`                 | The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). [accept]{@link "https://www.w3schools.com/tags/att_input_accept.asp"} | `string`                                                                                                                      | `undefined`                             |
| `disabled`           | `disabled`               | Disable all input events                                                                                                                                                                       | `boolean`                                                                                                                     | `false`                                 |
| `i18nUploadDisabled` | `i-1-8n-upload-disabled` | Text for disabled state                                                                                                                                                                        | `string`                                                                                                                      | `'File upload currently not possible.'` |
| `i18nUploadFile`     | `i-1-8n-upload-file`     | Label for upload file button                                                                                                                                                                   | `string`                                                                                                                      | `'Upload file…'`                        |
| `loadingText`        | `loading-text`           | Will be used by state = UploadFileState.LOADING                                                                                                                                                | `string`                                                                                                                      | `'Checking files…'`                     |
| `multiline`          | `multiline`              | Whether the text should wrap to more than one line                                                                                                                                             | `boolean`                                                                                                                     | `false`                                 |
| `multiple`           | `multiple`               | If multiple is true the user can drop or select multiple files                                                                                                                                 | `boolean`                                                                                                                     | `false`                                 |
| `selectFileText`     | `select-file-text`       | Will be used by state = UploadFileState.SELECT_FILE                                                                                                                                            | `string`                                                                                                                      | `'+ Drag files here or…'`               |
| `state`              | `state`                  | After a file is uploaded you can set the upload component to a defined state                                                                                                                   | `UploadFileState.LOADING \| UploadFileState.SELECT_FILE \| UploadFileState.UPLOAD_FAILED \| UploadFileState.UPLOAD_SUCCESSED` | `UploadFileState.SELECT_FILE`           |
| `uploadFailedText`   | `upload-failed-text`     | Will be used by state = UploadFileState.UPLOAD_FAILED                                                                                                                                          | `string`                                                                                                                      | `'Upload failed. Please try again.'`    |
| `uploadSuccessText`  | `upload-success-text`    | Will be used by state = UploadFileState.UPLOAD_SUCCESSED                                                                                                                                       | `string`                                                                                                                      | `'Upload successful'`                   |


## Events

| Event          | Description                                                              | Type                  |
| -------------- | ------------------------------------------------------------------------ | --------------------- |
| `filesChanged` | You get an array of Files after drop-action or browse action is finished | `CustomEvent<File[]>` |


## Methods

### `setFilesToUpload(obj: any) => Promise<void>`

Set files

#### Returns

Type: `Promise<void>`




----------------------------------------------


