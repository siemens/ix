import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { w as iconTxtDocument, b as iconError } from "./index-BeX6RWvV-CXzUIwMU.js";
const chatAttachmentCss = () => `@charset "UTF-8";:host{--ix-chat-attachment-attachment-chip--max-width:var(--si-sys-sizing-size-170);--ix-chat-attachment-status-content--gap:var(--si-sys-sizing-spacing-x-40);--ix-chat-attachment-status-content--margin-left:calc(     var(--si-sys-sizing-spacing-x-10) * 1.5   );--ix-chat-attachment-has-remove-button--gap:var(--si-sys-sizing-spacing-x-30)}:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .attachment-chip{display:block;width:100%;max-width:var(--ix-chat-attachment-attachment-chip--max-width)}:host .content,:host .status-content{display:inline-flex;align-items:center;min-width:0}:host .content{flex:1 1 auto;max-width:100%;width:100%}:host .status-content{gap:var(--ix-chat-attachment-status-content--gap)}:host .status-content ix-spinner{scale:1.7;margin-left:var(--ix-chat-attachment-status-content--margin-left)}:host .file-name{display:inline-flex;flex:1 1 auto;min-width:0;max-width:100%;overflow:hidden}:host .file-name__base{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:end}:host .file-name__extension{flex:0 0 auto;white-space:nowrap}:host .status-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-icon{flex:0 0 auto}:host ix-spinner{flex:0 0 auto}:host(.preview-supported){cursor:pointer}:host(.has-remove-button){gap:var(--ix-chat-attachment-has-remove-button--gap)}`;
const ChatAttachment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.attachmentClick = createEvent(this, "attachmentClick", 7);
    this.removeClick = createEvent(this, "removeClick", 7);
  }
  /**
   * Name of the attached file.
   */
  fileName = "";
  /**
   * Upload status of the attachment.
   */
  status = "default";
  /**
   * Icon displayed before the file name.
   */
  icon = iconTxtDocument;
  /**
   * Hide the remove action.
   */
  hideRemoveButton = false;
  /**
   * Enable preview interaction for default attachments.
   */
  previewSupported = false;
  /**
   * Accessible label for the remove action.
   */
  removeAriaLabel = "Remove attachment";
  /**
   * Event emitted when the attachment is clicked.
   */
  attachmentClick;
  /**
   * Event emitted when the remove action is clicked.
   */
  removeClick;
  canPreview() {
    return this.previewSupported && this.status === "default";
  }
  splitFileName() {
    const fileName = this.fileName.trim();
    const extensionStart = fileName.lastIndexOf(".");
    if (extensionStart <= 0 || extensionStart === fileName.length - 1) {
      return { name: fileName, extension: "" };
    }
    return {
      name: fileName.slice(0, extensionStart),
      extension: fileName.slice(extensionStart)
    };
  }
  renderFileName() {
    const { name, extension } = this.splitFileName();
    return h("span", { class: "file-name", title: this.fileName }, h("span", { class: "file-name__base" }, name || this.fileName), !!extension && h("span", { class: "file-name__extension" }, extension));
  }
  getChipVariant() {
    if (this.status === "failed") {
      return "alarm";
    }
    return "neutral";
  }
  renderChipContent() {
    if (this.status === "loading") {
      return h("span", { class: "status-content" }, h("ix-spinner", { size: "xxs", variant: "primary" }), h("span", { class: "status-label" }, this.fileName));
    }
    if (this.status === "failed") {
      return h("span", { class: "status-label" }, this.fileName);
    }
    return this.renderFileName();
  }
  handleAttachmentClick() {
    if (this.canPreview()) {
      this.attachmentClick.emit();
    }
  }
  getIcon() {
    if (this.status === "default") {
      return this.icon;
    }
    if (this.status === "loading") {
      return void 0;
    }
    if (this.status === "failed") {
      return iconError;
    }
    return this.icon;
  }
  render() {
    const isFailed = this.status === "failed";
    const isLoading = this.status === "loading";
    const canPreview = this.canPreview();
    return h(Host, { key: "8c82f76a62e32f95b1f8eec1b4978bb0d71af7f6", class: {
      failed: isFailed,
      loading: isLoading,
      "preview-supported": canPreview,
      "has-remove-button": !this.hideRemoveButton
    } }, h("ix-chip", { key: "d558fcbc8ecf466c1d126b036500daadcf06a4cc", "aria-label": canPreview ? this.fileName : void 0, ariaLabelCloseButton: this.removeAriaLabel, class: "attachment-chip", closable: !this.hideRemoveButton, icon: this.getIcon(), variant: this.getChipVariant(), outline: true, onClick: () => this.handleAttachmentClick(), onCloseChip: () => this.removeClick.emit(), inactive: !canPreview }, h("span", { key: "12b346476d1f2404d15b2c9de01ebba1ca27813b", class: "content" }, this.renderChipContent())));
  }
};
ChatAttachment.style = chatAttachmentCss();
export {
  ChatAttachment as ix_chat_attachment
};
