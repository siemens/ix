import { g as getElement, r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { a as iconSuccess, b as iconError } from "./index-BeX6RWvV-CXzUIwMU.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
var UploadFileState;
(function(UploadFileState2) {
  UploadFileState2["SELECT_FILE"] = "SELECT_FILE";
  UploadFileState2["LOADING"] = "LOADING";
  UploadFileState2["UPLOAD_FAILED"] = "UPLOAD_FAILED";
  UploadFileState2["UPLOAD_SUCCESSED"] = "UPLOAD_SUCCESSED";
})(UploadFileState || (UploadFileState = {}));
const uploadCss = () => `@charset "UTF-8";:host{--ix-upload-error-icon--color:var(--si-sys-color-text-danger);--ix-upload-success-icon--color:var(--si-sys-color-text-success);--ix-upload--border-color:var(--si-sys-color-border-3);--ix-upload--border-color--dragover:var(--si-sys-color-border-accent-hover);--ix-upload-text--color:var(--si-sys-color-text-primary);--ix-upload-text--color--checking:var(--si-sys-color-text-primary);--ix-upload-text--color--disabled:var(--si-sys-color-text-disabled)}:host{--ix-upload--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-upload--min-height:var(--si-sys-sizing-size-110);--ix-upload--height:var(--si-sys-sizing-size-110);--ix-upload-file-upload-area--padding:var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-60);--ix-upload-file-upload-area--margin-inline-start:var(--si-sys-sizing-spacing-x-60);--ix-upload-loader--margin:calc(var(--si-sys-sizing-spacing-y-60) * 2.187)     auto;--ix-upload-loader--width:var(--si-sys-sizing-size-50);--ix-upload-loader--height:var(--si-sys-sizing-size-50);--ix-upload-filename--margin-bottom:var(--si-sys-sizing-spacing-y-60);--ix-upload-state--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-upload-icon--icon-size:var(--si-sys-sizing-icon-lg);--ix-upload-icon--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-upload-file-upload-area--border-width:var(--si-sys-sizing-border-width-default);--ix-upload-glyph--margin-block-start:calc(     var(--si-sys-sizing-spacing-y-10) * 1.5   );--ix-upload-loader--font-size:0.937rem;--ix-upload-loader--animation-duration:1.1s}:host{display:block;min-height:var(--ix-upload--min-height);height:var(--ix-upload--height)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:var(--ix-upload-file-upload-area--padding);border:var(--ix-upload-file-upload-area--border-width) dashed var(--ix-upload--border-color);border-radius:var(--ix-upload--border-radius);color:var(--ix-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:var(--ix-upload-glyph--margin-block-start)}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--ix-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--ix-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--ix-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:var(--ix-upload-file-upload-area--margin-inline-start)}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:var(--ix-upload-loader--margin);font-size:var(--ix-upload-loader--font-size);width:var(--ix-upload-loader--width);height:var(--ix-upload-loader--height);border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading var(--ix-upload-loader--animation-duration) infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:var(--ix-upload-filename--margin-bottom)}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:var(--ix-upload-state--margin-inline-end)}:host .file-upload-area .state>ix-icon{block-size:var(--ix-upload-icon--icon-size);inline-size:var(--ix-upload-icon--icon-size);margin-inline-end:var(--ix-upload-icon--margin-inline-end);min-block-size:var(--ix-upload-icon--icon-size);min-inline-size:var(--ix-upload-icon--icon-size)}:host .file-upload-area .state>ix-icon.icon-error{color:var(--ix-upload-error-icon--color)}:host .file-upload-area .state>ix-icon.icon-success{color:var(--ix-upload-success-icon--color)}:host(.disabled){pointer-events:none}`;
const Upload = class {
  /**
   * The accept attribute specifies the types of files that the server accepts (that can be submitted through a file upload).
   * See {@link https://www.w3schools.com/tags/att_input_accept.asp}
   */
  accept;
  /**
   * If multiple is true the user can drop or select multiple files
   */
  multiple = false;
  /**
   * If directoryUpload is true the user can drop or select a folder containing one or more files
   *
   * @since 5.1.0
   */
  directoryUpload = false;
  /**
   * Whether the text should wrap to more than one line
   */
  multiline = false;
  /**
   * Disable all input events
   */
  disabled = false;
  /**
   * After a file is uploaded you can set the upload component to a defined state
   */
  state = UploadFileState.SELECT_FILE;
  /**
   * Will be used by state = UploadFileState.SELECT_FILE
   */
  selectFileText;
  /**
   * Will be used by state = UploadFileState.LOADING
   */
  loadingText;
  /**
   * Will be used by state = UploadFileState.UPLOAD_FAILED
   */
  uploadFailedText = "Upload failed. Please try again.";
  /**
   * Will be used by state = UploadFileState.UPLOAD_SUCCESSED
   */
  uploadSuccessText = "Upload successful";
  /**
   * Label for upload file or folder button
   */
  i18nUploadFile;
  /**
   * Text for disabled state
   */
  i18nUploadDisabled = "File upload currently not possible.";
  /**
   * You get an array of Files after drop-action or browse action is finished
   */
  filesChanged;
  get hostElement() {
    return getElement(this);
  }
  get inputElement() {
    return this.hostElement.shadowRoot.querySelector("#upload-browser");
  }
  isFileOver = false;
  filesToUpload;
  a11y = {};
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.filesChanged = createEvent(this, "filesChanged", 7);
  }
  componentWillLoad() {
    this.a11y = a11yHostAttributes(this.hostElement);
  }
  fileDropped(evt) {
    evt.preventDefault();
    if (this.disabled) {
      return;
    }
    if (!evt.dataTransfer) {
      return;
    }
    const file = evt.dataTransfer.files;
    this.isFileOver = false;
    this.filesToUpload = this.convertToFileArray(file);
    this.filesChanged.emit(this.filesToUpload);
  }
  fileOver(event) {
    if (!event.dataTransfer) {
      return;
    }
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
    if (!event.target) {
      return;
    }
    this.filesToUpload = this.convertToFileArray(event.target.files);
    this.filesChanged.emit(this.filesToUpload);
    this.inputElement.type = "";
    this.inputElement.type = "file";
  }
  convertToFileArray(filesFromEvent) {
    let files = [];
    if (!filesFromEvent) {
      return [];
    }
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
        return h("span", { class: "state" }, h("span", { class: "upload-text" }, this.selectFileText ?? (this.directoryUpload ? "+ Drag folder here or…" : "+ Drag files here or…")));
      case UploadFileState.LOADING:
        return h("span", { class: "state" }, h("ix-spinner", { variant: "primary" }), h("span", { class: "upload-text" }, this.loadingText ?? (this.directoryUpload ? "Checking folder…" : "Checking files…")));
      case UploadFileState.UPLOAD_FAILED:
        return h("span", { class: "state" }, h("ix-icon", { name: iconError, class: "icon-error" }), h("span", { class: "upload-text" }, this.uploadFailedText));
      case UploadFileState.UPLOAD_SUCCESSED:
        return h("span", { class: "state" }, h("ix-icon", { name: iconSuccess, class: "icon-success" }), h("span", { class: "upload-text" }, this.uploadSuccessText));
      default:
        return "";
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
    const disabled = this.disabled || this.state === UploadFileState.LOADING;
    const directoryAttributes = this.directoryUpload ? { webkitdirectory: true, directory: true, multiple: true } : {};
    const defaultAriaLabel = this.directoryUpload ? "Upload folder" : "Upload files";
    const { "aria-label": ariaLabel = defaultAriaLabel, ...a11y } = this.a11y;
    return h(Host, { key: "62e595d82d3d26da39f71d872b0fcfecae16b44b", ...a11y, "aria-disabled": disabled }, h("div", { key: "da2527045229e002a83fc0cedd62963703bd09ac", class: {
      "file-upload-area": true,
      "file-over": this.state !== UploadFileState.LOADING && this.isFileOver,
      checking: this.state === UploadFileState.LOADING,
      disabled: this.disabled,
      multiline: this.multiline
    }, onDrop: (e) => {
      if (this.state !== UploadFileState.LOADING) {
        this.fileDropped(e);
      }
    }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave() }, this.renderUploadState(), h("div", { key: "09ba91103276d3d6813ade82bfc8c88fb33fe7bf" }, h("input", { key: "33a02e7f2d755c3fc36bab2403a0888535888413", "aria-label": ariaLabel, "aria-disabled": disabled, multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", ...directoryAttributes, tabindex: "-1", onChange: (e) => {
      this.fileChangeEvent(e);
    }, accept: this.accept, disabled }), h("ix-button", { key: "17b5e6f474d7adf1bbe70c0b3c11de1da5ca5f1d", variant: "secondary", "aria-disabled": disabled, onClick: () => this.inputElement.click(), disabled }, this.i18nUploadFile ?? (this.directoryUpload ? "Upload folder…" : "Upload file…")))));
  }
};
Upload.style = uploadCss();
export {
  Upload as ix_upload
};
