import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { w as iconTxtDocument, b as iconError } from "./index-BeX6RWvV-CXzUIwMU.js";
const chatAttachmentCss = () => `@charset "UTF-8";:host{display:inline-block}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .attachment-chip{display:block;width:100%;max-width:20rem}:host .content,:host .status-content{display:inline-flex;align-items:center;min-width:0}:host .content{flex:1 1 auto;max-width:100%;width:100%}:host .status-content{gap:var(--theme-space-1)}:host .status-content ix-spinner{scale:1.7;margin-left:0.1875rem}:host .file-name{display:inline-flex;flex:1 1 auto;min-width:0;max-width:100%;overflow:hidden}:host .file-name__base{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:end}:host .file-name__extension{flex:0 0 auto;white-space:nowrap}:host .status-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-icon{flex:0 0 auto}:host ix-spinner{flex:0 0 auto}:host(.preview-supported){cursor:pointer}:host(.has-remove-button){gap:var(--theme-space-0)}`;
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
      return h("span", { class: "status-content" }, h("ix-spinner", { size: "xx-small", variant: "primary" }), h("span", { class: "status-label" }, this.fileName));
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
    return h(Host, { key: "6d228e12a51a06711a97f216a854432e44340590", class: {
      failed: isFailed,
      loading: isLoading,
      "preview-supported": canPreview,
      "has-remove-button": !this.hideRemoveButton
    } }, h("ix-chip", { key: "a3369a7981eb355f606162efc1a01c290f49076c", "aria-label": canPreview ? this.fileName : void 0, ariaLabelCloseButton: this.removeAriaLabel, class: "attachment-chip", closable: !this.hideRemoveButton, icon: this.getIcon(), variant: this.getChipVariant(), outline: true, onClick: () => this.handleAttachmentClick(), onCloseChip: () => this.removeClick.emit(), inactive: !canPreview }, h("span", { key: "51b3a72b579776c09587b1bd430aceb146e04e49", class: "content" }, this.renderChipContent())));
  }
};
ChatAttachment.style = chatAttachmentCss();
export {
  ChatAttachment as ix_chat_attachment
};
