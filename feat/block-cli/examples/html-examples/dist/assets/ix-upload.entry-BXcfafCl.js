import { g as getElement, a as registerInstance, c as createEvent, h, H as Host } from "./global-DX2OdaCL.js";
import { Q as iconSuccess, A as iconError } from "./index-Cl7fhG1I-C77BCFLW.js";
import { b as a11yHostAttributes } from "./a11y-B5k8YVR0-BOSd6BQK.js";
var UploadFileState;
(function(UploadFileState2) {
  UploadFileState2["SELECT_FILE"] = "SELECT_FILE";
  UploadFileState2["LOADING"] = "LOADING";
  UploadFileState2["UPLOAD_FAILED"] = "UPLOAD_FAILED";
  UploadFileState2["UPLOAD_SUCCESSED"] = "UPLOAD_SUCCESSED";
})(UploadFileState || (UploadFileState = {}));
const uploadCss = () => `:host{display:block;min-height:4rem;height:4rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .file-upload-area{display:flex;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden;height:100%;width:100%;padding:1rem;border:1px dashed var(--theme-upload--border-color);border-radius:var(--theme-upload--border-radius);color:var(--theme-upload-text--color)}:host .file-upload-area.multiline{max-height:unset;height:auto}:host .file-upload-area.multiline .glyph{align-self:flex-start;margin-block-start:3px}:host .file-upload-area.multiline>div{align-self:flex-start}:host .file-upload-area:not(.multiline) .state,:host .file-upload-area:not(.multiline) .upload-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .file-upload-area:not(.disabled).file-over{border-color:var(--theme-upload--border-color--dragover);border-style:solid}:host .file-upload-area.checking{color:var(--theme-upload-text--color--checking);border-style:solid}:host .file-upload-area.disabled{border-style:solid;color:var(--theme-upload-text--color--disabled)}:host .file-upload-area ix-button{margin-inline-start:1rem}:host .file-upload-area .upload-browser{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}:host .file-upload-area .loader{margin:2.187rem auto;font-size:0.937rem;width:1rem;height:1rem;border-radius:50%;position:relative;text-indent:-9999em;animation:optimise-loading 1.1s infinite ease;transform:translateZ(0)}:host .file-upload-area .upload-filename{margin-bottom:1rem}:host .file-upload-area .state{display:flex;align-items:center}:host .file-upload-area .state>ix-spinner{margin-inline-end:0.5rem}:host .file-upload-area .state>ix-icon{margin-inline-end:0.5rem}:host .file-upload-area .state>ix-icon.icon-error{color:var(--theme-color-alarm)}:host .file-upload-area .state>ix-icon.icon-success{color:var(--theme-color-success)}:host(.disabled){pointer-events:none}`;
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
    return h(Host, { key: "f9ce97575b5d554a2e383db9fb797c90a44e5705", ...a11y, "aria-disabled": disabled }, h("div", { key: "fe99fba26dbe596758a48a645d446e929028cf07", class: {
      "file-upload-area": true,
      "file-over": this.state !== UploadFileState.LOADING && this.isFileOver,
      checking: this.state === UploadFileState.LOADING,
      disabled: this.disabled,
      multiline: this.multiline
    }, onDrop: (e) => {
      if (this.state !== UploadFileState.LOADING) {
        this.fileDropped(e);
      }
    }, onDragOver: (e) => this.fileOver(e), onDragLeave: () => this.fileLeave() }, this.renderUploadState(), h("div", { key: "19166a205c2cefe32c3182be7659dfa3dfdf4c46" }, h("input", { key: "7feea6bbf7909508a594c8c222c6f5bd6b79ab83", "aria-label": ariaLabel, "aria-disabled": disabled, multiple: this.multiple, type: "file", class: "upload-browser", id: "upload-browser", ...directoryAttributes, tabindex: "-1", onChange: (e) => {
      this.fileChangeEvent(e);
    }, accept: this.accept, disabled }), h("ix-button", { key: "8c9b781e3b20d6f2b69555d28ef3fb41ab2afaf5", variant: "secondary", "aria-disabled": disabled, onClick: () => this.inputElement.click(), disabled }, this.i18nUploadFile ?? (this.directoryUpload ? "Upload folder…" : "Upload file…")))));
  }
};
Upload.style = uploadCss();
export {
  Upload as ix_upload
};
