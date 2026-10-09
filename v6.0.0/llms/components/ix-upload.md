# ix-upload

> Control for selecting and uploading files.

- Web component: `<ix-upload>`
- React/Vue: `IxUpload` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-upload>` (`IxModule` from `@siemens/ix-angular` or `IxUpload` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/upload/guide.md

## Figma IDs

- 1028:14676

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

## Methods

- `setFilesToUpload(obj: any) => Promise<void>` - Set files

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- upload (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [upload](../patterns.md#upload): Use this pattern to provide a file upload area with a list of uploaded files and remove actions for each file.
