import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.8b5b8f81.js";
import { U as UploadFileState } from "./upload-file-state-de676cd5.96d9c6b3.js";
const uploadCss = ":host{display:block;min-height:4rem;height:4rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:3px}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--theme-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--theme-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--theme-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:1rem}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:1rem}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:0.5rem;height:1.5rem;width:1.5rem}:host .file-upload-area .state>ix-icon{margin-inline-end:0.5rem}:host .file-upload-area .state>ix-icon.icon-error{color:var(--theme-color-alarm)}:host .file-upload-area .state>ix-icon.icon-success{color:var(--theme-color-success)}:host(.disabled){pointer-events:none}";
const IxUploadStyle0 = uploadCss;
const Upload = class {
  get inputElement() {
    return this.hostElement.shadowRoot.querySelector("#upload-browser");
  }
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filesChanged = createEvent(this, "filesChanged", 7);
    this.accept = void 0;
    this.multiple = false;
    this.multiline = false;
    this.disabled = false;
    this.state = UploadFileState.SELECT_FILE;
    this.selectFileText = "+ Drag files here or\u2026";
    this.loadingText = "Checking files\u2026";
    this.uploadFailedText = "Upload failed. Please try again.";
    this.uploadSuccessText = "Upload successful";
    this.i18nUploadFile = "Upload file\u2026";
    this.i18nUploadDisabled = "File upload currently not possible.";
    this.isFileOver = false;
  }
  fileDropped(evt) {
    evt.preventDefault();
    if (this.disabled) {
      return;
    }
    const file = evt.dataTransfer.files;
    this.isFileOver = false;
    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }
  fileOver(event) {
    if (this.state !== UploadFileState.LOADING) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    }
    if (!this.multiple && event.dataTransfer.items.length > 1) {
      event.preventDefault();
      event.stopPropagation();
      event.dataTransfer.effectAllowed = "none";
      event.dataTransfer.dropEffect = "none";
    } else {
      this.isFileOver = true;
    }
  }
  fileLeave() {
    this.isFileOver = false;
  }
  fileChangeEvent(event) {
    if (this.disabled) {
      return;
    }
    this.filesToUpload = this.convertToFileArray(event.target.files);
    this.filesChanged.emit(this.filesToUpload);
    this.inputElement.type = "";
    this.inputElement.type = "file";
  }
  convertToFileArray(filesFromEvent) {
    let files = [];
    if (filesFromEvent instanceof FileList) {
      files = Array.from(filesFromEvent);
    } else {
      files = [filesFromEvent];
    }
    return files;
  }
  renderUploadState() {
    if (this.disabled) {
      return h("span", { class: "state" }, h("span", { class: "upload-text" }, this.i18nUploadDisabled));
    }
    switch (this.state) {
      case UploadFileState.SELECT_FILE:
        return h("span", { class: "state" }, h("span", { class: "upload-text" }, this.selectFileText));
      case UploadFileState.LOADING:
        return h("span", { class: "state" }, h("ix-spinner", { variant: "primary" }), h("span", { class: "upload-text" }, this.loadingText));
      case UploadFileState.UPLOAD_FAILED:
        return h("span", { class: "state" }, h("ix-icon", { name: "error", class: "icon-error" }), h("span", { class: "upload-text" }, this.uploadFailedText));
      case UploadFileState.UPLOAD_SUCCESSED:
        return h("span", { class: "state" }, h("ix-icon", { name: "success", class: "icon-success" }), h("span", { class: "upload-text" }, this.uploadSuccessText));
      default:
        return "";
    }
  }
  async setFilesToUpload(obj) {
    this.filesToUpload = obj;
  }
  render() {
    return h(Host, { key: "c13c30ad2fa2a251ad872d7b0461f625798a3d2a" }, h("div", { key: "572bf6899630cdc1fdff1518750415270792a368", class: {
      "file-upload-area": true,
      "file-over": this.state !== UploadFileState.LOADING && this.isFileOver,
      checking: this.state === UploadFileState.LOADING,
      disabled: this.disabled,
      multiline: this.multiline
    }, onDrop: (e) => {
      if (this.state !== UploadFileState.LOADING) {
        this.fileDropped(e);
      }
    }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave(), draggable: !this.disabled }, this.renderUploadState(), h("div", { key: "5c48357676e704f0e285e510059593c526ca47fc" }, h("input", { key: "5ed9faca22b46db4962c64ff3822c59d3e44cf95", multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", onChange: (e) => {
      this.fileChangeEvent(e);
    }, accept: this.accept }), h("ix-button", { key: "6e5bcfec5d982c8674e6bf38bbf1e0d805b1af0f", tabindex: "-1", outline: true, onClick: () => this.inputElement.click(), disabled: this.disabled || this.state === UploadFileState.LOADING }, this.i18nUploadFile))));
  }
  get hostElement() {
    return getElement(this);
  }
};
Upload.style = IxUploadStyle0;
export {
  Upload as ix_upload
};
