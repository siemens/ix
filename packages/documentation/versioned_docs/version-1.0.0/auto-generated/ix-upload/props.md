| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|accept| The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). [accept]{@link https ://www.w3schools.com/tags/att_input_accept.asp} | `accept` | `string` | `undefined` |
|disabled| Disable all input events | `disabled` | `boolean` | `false` |
|i18nUploadDisabled| Text for disabled state | `i-1-8n-upload-disabled` | `string` | `'File upload currently not possible.'` |
|i18nUploadFile| Label for upload file button | `i-1-8n-upload-file` | `string` | `'Upload file…'` |
|loadingText| Will be used by state = UploadFileState.LOADING | `loading-text` | `string` | `'Checking files…'` |
|multiline| Whether the text should wrap to more than one line | `multiline` | `boolean` | `false` |
|multiple| If multiple is true the user can drop or select multiple files | `multiple` | `boolean` | `false` |
|selectFileText| Will be used by state = UploadFileState.SELECT_FILE | `select-file-text` | `string` | `'+ Drag files here or…'` |
|state| After a file is uploaded you can set the upload component to a defined state | `state` | `UploadFileState.LOADING ｜ UploadFileState.SELECT_FILE ｜ UploadFileState.UPLOAD_FAILED ｜ UploadFileState.UPLOAD_SUCCESSED` | `UploadFileState.SELECT_FILE` |
|uploadFailedText| Will be used by state = UploadFileState.UPLOAD_FAILED | `upload-failed-text` | `string` | `'Upload failed. Please try again.'` |
|uploadSuccessText| Will be used by state = UploadFileState.UPLOAD_SUCCESSED | `upload-success-text` | `string` | `'Upload successful'` |
