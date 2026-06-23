# ix-upload

> No component summary available.

## Documentation

- None

## Figma IDs

- 1028:14676

## Related examples

- upload
  - angular: [../../examples/angular-examples/src/preview-examples/upload.ts](../../examples/angular-examples/src/preview-examples/upload.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/upload.ts](../../examples/angular-standalone-examples/src/preview-examples/upload.ts)
  - html: [../../examples/html-examples/src/preview-examples/upload.html](../../examples/html-examples/src/preview-examples/upload.html)
  - react: [../../examples/react-examples/src/preview-examples/upload.tsx](../../examples/react-examples/src/preview-examples/upload.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/upload.vue](../../examples/vue-examples/src/preview-examples/upload.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `accept`; attr: `accept`; type: `string | undefined` - The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload). See {@link https://www.w3schools.com/tags/att_input_accept.asp}
- `directoryUpload`; attr: `directory-upload`; type: `boolean`; default: `false` - If directoryUpload is true the user can drop or select a folder containing one or more files
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable all input events
- `i18nUploadDisabled`; attr: `i18n-upload-disabled`; type: `string`; default: `'File upload currently not possible.'` - Text for disabled state
- `i18nUploadFile`; attr: `i18n-upload-file`; type: `string | undefined` - Label for upload file or folder button
- `loadingText`; attr: `loading-text`; type: `string | undefined` - Will be used by state = UploadFileState.LOADING
- `multiline`; attr: `multiline`; type: `boolean`; default: `false` - Whether the text should wrap to more than one line
- `multiple`; attr: `multiple`; type: `boolean`; default: `false` - If multiple is true the user can drop or select multiple files
- `selectFileText`; attr: `select-file-text`; type: `string | undefined` - Will be used by state = UploadFileState.SELECT_FILE
- `state`; attr: `state`; type: `UploadFileState.LOADING | UploadFileState.SELECT_FILE | UploadFileState.UPLOAD_FAILED | UploadFileState.UPLOAD_SUCCESSED`; default: `UploadFileState.SELECT_FILE` - After a file is uploaded you can set the upload component to a defined state
- `uploadFailedText`; attr: `upload-failed-text`; type: `string`; default: `'Upload failed. Please try again.'` - Will be used by state = UploadFileState.UPLOAD_FAILED
- `uploadSuccessText`; attr: `upload-success-text`; type: `string`; default: `'Upload successful'` - Will be used by state = UploadFileState.UPLOAD_SUCCESSED

## Events

- `filesChanged` - You get an array of Files after drop-action or browse action is finished

## Slots

- None
