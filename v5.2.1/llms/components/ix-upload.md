# ix-upload

> Control for selecting and uploading files.

## Documentation

- None

## Figma IDs

- 1028:14676

## Related examples

Example file links are relative to this Markdown file.

- upload
  - angular:
    - `angular/upload.ts`: [file](../../examples/angular/upload.ts)
  - angular-standalone:
    - `angular-standalone/upload.ts`: [file](../../examples/angular-standalone/upload.ts)
  - html:
    - `html/upload.html`: [file](../../examples/html/upload.html)
  - react:
    - `react/upload.tsx`: [file](../../examples/react/upload.tsx)
  - vue:
    - `vue/upload.vue`: [file](../../examples/vue/upload.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- [upload](../blocks.md#upload)
  - angular:
    - `angular/upload.ts`: [file](../../blocks/angular/upload.ts)
    - `angular/upload.html`: [file](../../blocks/angular/upload.html)
    - `angular/upload.css`: [file](../../blocks/angular/upload.css)
  - react:
    - `react/upload.tsx`: [file](../../blocks/react/upload.tsx)
    - `react/upload.module.css`: [file](../../blocks/react/upload.module.css)

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
