'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const uploadFileState = require('./upload-file-state-923b2c65.js');

const uploadCss = ".sc-ix-upload-h{display:block;min-height:4rem;height:4rem}.sc-ix-upload-h .file-upload-area.sc-ix-upload{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}.sc-ix-upload-h .file-upload-area.multiline.sc-ix-upload{max-height:unset;height:auto}.sc-ix-upload-h .file-upload-area.multiline.sc-ix-upload .glyph.sc-ix-upload{align-self:flex-start;-webkit-margin-before:3px;margin-block-start:3px}.sc-ix-upload-h .file-upload-area.multiline.sc-ix-upload>div.sc-ix-upload{align-self:flex-start}.sc-ix-upload-h .file-upload-area.sc-ix-upload:not(.multiline) .state.sc-ix-upload,.sc-ix-upload-h .file-upload-area.sc-ix-upload:not(.multiline) .upload-text.sc-ix-upload{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-upload-h .file-upload-area.file-over.sc-ix-upload{border-color:var(--theme-upload--border-color--dragover);border-style:solid}.sc-ix-upload-h .file-upload-area.checking.sc-ix-upload{color:var(--theme-upload-text--color--checking);border-style:solid}.sc-ix-upload-h .file-upload-area.disabled.sc-ix-upload{border-style:solid;color:var(--theme-upload-text--color--disabled)}.sc-ix-upload-h .file-upload-area.sc-ix-upload ix-button.sc-ix-upload{-webkit-margin-start:1rem;margin-inline-start:1rem}.sc-ix-upload-h .file-upload-area.sc-ix-upload .upload-browser.sc-ix-upload{opacity:0;overflow:hidden;position:absolute;z-index:-1}.sc-ix-upload-h .file-upload-area.sc-ix-upload .loader.sc-ix-upload{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}.sc-ix-upload-h .file-upload-area.sc-ix-upload .upload-filename.sc-ix-upload{margin-bottom:1rem}.sc-ix-upload-h .file-upload-area.sc-ix-upload .state.sc-ix-upload{display:flex;align-items:center}.sc-ix-upload-h .file-upload-area.sc-ix-upload .state.sc-ix-upload>ix-spinner.sc-ix-upload{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem;height:1.5rem;width:1.5rem}.sc-ix-upload-h .file-upload-area.sc-ix-upload .state.sc-ix-upload>i.sc-ix-upload{-webkit-margin-end:0.5rem;margin-inline-end:0.5rem}.sc-ix-upload-h .file-upload-area.sc-ix-upload .state.sc-ix-upload>i.glyph-error.sc-ix-upload{color:var(--theme-color-alarm)}.sc-ix-upload-h .file-upload-area.sc-ix-upload .state.sc-ix-upload>i.glyph-success.sc-ix-upload{color:var(--theme-color-success)}";

const Upload = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.filesChanged = index.createEvent(this, "filesChanged", 7);
    /**
     * If multiple is true the user can drop or select multiple files
     */
    this.multiple = false;
    /**
     * Whether the text should wrap to more than one line
     */
    this.multiline = false;
    /**
     * Disable all input events
     */
    this.disabled = false;
    /**
     * After a file is uploaded you can set the upload component to a defined state
     */
    this.state = uploadFileState.UploadFileState.SELECT_FILE;
    /**
     * Will be used by state = UploadFileState.SELECT_FILE
     */
    this.selectFileText = '+ Drag files here or…';
    /**
     * Will be used by state = UploadFileState.LOADING
     */
    this.loadingText = 'Checking files…';
    /**
     * Will be used by state = UploadFileState.UPLOAD_FAILED
     */
    this.uploadFailedText = 'Upload failed. Please try again.';
    /**
     * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
     */
    this.uploadSuccessText = 'Upload successful';
    /**
     * Label for upload file button
     */
    this.i18nUploadFile = 'Upload file…';
    /**
     * Text for disabled state
     */
    this.i18nUploadDisabled = 'File upload currently not possible.';
    this.isFileOver = false;
  }
  get inputElement() {
    return this.hostElement.querySelector('#upload-browser');
  }
  fileDropped(evt) {
    evt.preventDefault();
    const file = evt.dataTransfer.files;
    this.isFileOver = false;
    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }
  fileOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    if (!this.multiple && event.dataTransfer.items.length > 1) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = 'none';
      event.dataTransfer.dropEffect = 'none';
    }
    else {
      this.isFileOver = true;
    }
  }
  fileLeave() {
    this.isFileOver = false;
  }
  fileChangeEvent(event) {
    this.filesToUpload = this.convertToFileArray(event.target.files);
    this.filesChanged.emit(this.filesToUpload);
    // Workaround for bug in native input element, that prevents the user from uploading
    // a file with the same name as the most recent one, but with changed content.
    this.inputElement.type = '';
    this.inputElement.type = 'file';
  }
  convertToFileArray(filesFromEvent) {
    let files = [];
    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    }
    else {
      files = [filesFromEvent];
    }
    return files;
  }
  renderUploadState() {
    if (this.disabled) {
      return (index.h("span", { class: "state" }, index.h("span", { class: "upload-text" }, this.i18nUploadDisabled)));
    }
    switch (this.state) {
      case uploadFileState.UploadFileState.SELECT_FILE:
        return (index.h("span", { class: "state" }, index.h("span", { class: "upload-text" }, this.selectFileText)));
      case uploadFileState.UploadFileState.LOADING:
        return (index.h("span", { class: "state" }, index.h("ix-spinner", { variant: "primary" }), index.h("span", { class: "upload-text" }, this.loadingText)));
      case uploadFileState.UploadFileState.UPLOAD_FAILED:
        return (index.h("span", { class: "state" }, index.h("i", { class: "glyph glyph-error" }), index.h("span", { class: "upload-text" }, this.uploadFailedText)));
      case uploadFileState.UploadFileState.UPLOAD_SUCCESSED:
        return (index.h("span", { class: "state" }, index.h("i", { class: "glyph glyph-success" }), index.h("span", { class: "upload-text" }, this.uploadSuccessText)));
      default:
        return '';
    }
  }
  /**
   * Set files
   * @param obj
   */
  async setFilesToUpload(obj) {
    this.filesToUpload = obj;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: {
        'file-upload-area': true,
        'file-over': this.isFileOver,
        checking: this.state === uploadFileState.UploadFileState.LOADING,
        disabled: this.disabled,
        multiline: this.multiline,
      }, onDrop: (e) => this.fileDropped(e), onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled }, this.renderUploadState(), index.h("div", null, index.h("input", { multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
        this.fileChangeEvent(e);
      }, accept: this.accept }), index.h("ix-button", { tabindex: "-1", outline: true, onClick: () => this.inputElement.click(), disabled: this.disabled || this.state === uploadFileState.UploadFileState.LOADING }, this.i18nUploadFile)))));
  }
  get hostElement() { return index.getElement(this); }
};
Upload.style = uploadCss;

exports.ix_upload = Upload;
