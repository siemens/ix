import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-J1r-v9CX.js";
import { c as iconWarning, d as iconInfo, m as iconCircleStop, n as iconSendRightFilled } from "./index-BcWSlcx_-DijX28Uj.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const chatInputCss = () => `:host{display:block;width:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .chat-input{display:flex;flex-direction:column;width:100%;min-height:8rem;padding:var(--theme-space-2);box-sizing:border-box;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);color:var(--theme-input--color)}:host .follow-up-prompts{display:none;flex-wrap:wrap;align-items:flex-start;gap:var(--theme-space-1);width:100%;margin-bottom:var(--theme-space-1)}:host .follow-up-prompts ::slotted(*){flex:0 1 auto}:host .follow-up-prompts ::slotted(ix-button){max-width:25rem;min-width:5rem}:host .follow-up-prompts ::slotted(ix-icon-button){flex:0 0 auto}:host .chat-input:hover{border-color:var(--theme-input--border-color--hover);background-color:var(--theme-input--background--hover)}:host .chat-input:focus-within{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus)}:host .attachments{display:none;box-sizing:border-box;width:100%;max-width:100%;gap:var(--theme-space-2);margin-bottom:var(--theme-space-2)}:host .attachments.has-attachments{display:flex}:host .attachments--wrap{flex-wrap:wrap;max-height:calc(4rem + var(--theme-space-2));overflow:hidden}:host .attachments--scroll{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden}:host .attachments--scroll *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .attachments--scroll *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host .attachments--scroll *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host .attachments--scroll *::-webkit-scrollbar-corner{display:none}:host .attachments--scroll::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .attachments--scroll{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host .attachments--scroll::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host .attachments--scroll::-webkit-scrollbar-corner{display:none}:host .attachments.has-attachment-scrollbar{padding-bottom:0.25rem}:host .attachments ::slotted(ix-chat-attachment){flex:0 1 auto}:host .attachments--scroll ::slotted(ix-chat-attachment){flex:0 0 auto}:host textarea{flex:1 1 auto;width:100%;min-height:2rem;padding:0;border:0;outline:0;box-sizing:border-box;resize:none;background:transparent;color:inherit;font:inherit}:host textarea::-moz-placeholder{color:var(--theme-input-hint--color)}:host textarea::placeholder{color:var(--theme-input-hint--color)}:host .character-limit{display:flex;align-items:center;gap:var(--theme-space-1);width:100%;margin-top:var(--theme-space-2)}:host .character-limit ix-icon{flex:0 0 auto}:host .character-limit--soft ix-icon{color:var(--theme-color-info)}:host .character-limit--hard ix-icon{color:var(--theme-color-warning)}:host .action-row{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:2rem;margin-top:var(--theme-space-1)}:host .left-actions,:host .right-actions{display:flex;align-items:center;gap:var(--theme-space-1)}:host .left-actions{flex:1 1 auto;min-width:0}:host .right-actions{flex:0 0 auto;justify-content:flex-end}:host .disclaimer{display:block;width:100%;margin-top:var(--theme-space-1);text-align:center}:host(.has-follow-up) .follow-up-prompts{display:flex}:host(.disabled){pointer-events:none}:host(.disabled) .chat-input{border-color:var(--theme-input--border-color--disabled);box-shadow:none;color:var(--theme-input--color--disabled);background-color:transparent}:host(.disabled) textarea::-moz-placeholder{color:transparent}:host(.disabled) textarea::placeholder{color:transparent}:host(.readonly) .chat-input{border-color:var(--theme-input--border-color--readonly);box-shadow:none;background-color:transparent}:host(.readonly) .chat-input:hover,:host(.readonly) .chat-input:focus-within{border-color:var(--theme-input--border-color--readonly);outline:none}`;
const ChatInput = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    this.ixChange = createEvent(this, "ixChange", 7);
    this.promptSubmit = createEvent(this, "promptSubmit", 7);
    if (hostRef.$hostElement$["s-ei"]) {
      this.formInternals = hostRef.$hostElement$["s-ei"];
    } else {
      this.formInternals = hostRef.$hostElement$.attachInternals();
      hostRef.$hostElement$["s-ei"] = this.formInternals;
    }
  }
  get hostElement() {
    return getElement(this);
  }
  formInternals;
  /**
   * The state of the chat input, which can be either 'input' or 'processing'.
   */
  state = "input";
  /**
   * The name of the chat input.
   */
  name;
  /**
   * The placeholder text for the chat input.
   */
  placeholder = "Enter a command, question or topic...";
  /**
   * The value of the chat input.
   */
  value = "";
  /**
   * Specifies whether the chat input is disabled.
   */
  disabled = false;
  /**
   * Specifies whether the chat input is readonly.
   */
  readonly = false;
  /**
   * Accessible label for the native textarea.
   */
  textareaLabel = "Chat input";
  /**
   * The maximum length of the chat input.
   */
  maxLength;
  /**
   * Character limit used for the optional inline character limit message.
   * Falls back to `maxLength` when not set.
   */
  characterLimit;
  /**
   * i18n label for the hard character limit message.
   * Use `{current}` and `{limit}` placeholders to place the values in any order.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nCharacterLimitReached = "Character limit reached ({current} / {limit} characters)";
  /**
   * i18n label for the soft character limit warning.
   * Use `{current}` and `{limit}` placeholders to place the values in any order.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nCharacterLimitWarning = "You're nearing the limit ({current} / {limit} characters)";
  /**
   * Percentage of the character limit that triggers the soft warning. Define a number between 0 and 1 (e.g. 0.8 for 80%).
   */
  characterLimitWarningThreshold = 0.9;
  /**
   * Minimum number of visible text rows.
   */
  minRows = 1;
  /**
   * Maximum number of visible text rows before the input becomes scrollable.
   */
  maxRows = 6;
  /**
   * If true, pressing Enter inserts a line break instead of submitting the prompt.
   */
  insertLineBreakOnEnter = false;
  /**
   * Disclaimer text displayed below the chat input.
   */
  disclaimer = "This content is AI-generated. Always verify the information for accuracy.";
  /**
   * Event emitted when the value of the chat input changes.
   */
  valueChange;
  /**
   * Event emitted when the chat input loses focus.
   */
  ixBlur;
  /**
   * Event emitted when the chat input loses focus and the value has changed.
   */
  ixChange;
  /**
   * Event emitted when the prompt is submitted by the send button or Enter key.
   */
  promptSubmit;
  /** @internal */
  initialValue;
  hasAttachments = false;
  hasAttachmentScrollbar = false;
  hasFollowUp = false;
  attachmentsRef = makeRef((attachments) => {
    this.initAttachmentResizeObserver(attachments);
    this.scheduleAttachmentScrollbarUpdate();
  });
  textareaRef = makeRef((textarea) => {
    this.updateTextareaHeight(textarea);
  });
  attachmentResizeObserver;
  attachmentMutationObserver;
  isAttachmentScrollbarUpdateQueued = false;
  componentWillLoad() {
    super.componentWillLoad();
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
    this.updateHasFollowUp();
  }
  componentDidLoad() {
    super.componentDidLoad();
    this.updateHasFollowUp();
    this.initAttachmentMutationObserver();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }
  componentDidRender() {
    super.componentDidRender();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.attachmentResizeObserver?.disconnect();
    this.attachmentMutationObserver?.disconnect();
  }
  onValueChange(value) {
    this.formInternals.setFormValue(value);
    this.updateTextareaHeight();
  }
  onRowsChange() {
    this.updateTextareaHeight();
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /**
   * Returns the native textarea element used by the chat input.
   * @since 5.1.0
   */
  async getNativeInputElement() {
    return this.textareaRef.waitForCurrent();
  }
  /**
   * Focuses the chat input.
   * @since 5.1.0
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  canSubmit() {
    return !this.disabled && !this.readonly && this.value.trim().length > 0;
  }
  emitIxChangeIfNeeded() {
    if (this.initialValue !== this.value) {
      this.ixChange.emit(this.value);
      this.initialValue = this.value;
    }
  }
  submitPrompt() {
    if (!this.canSubmit()) {
      return;
    }
    this.emitIxChangeIfNeeded();
    this.promptSubmit.emit(this.value);
  }
  updateTextareaHeight(textarea = this.textareaRef.current) {
    if (!textarea) {
      return;
    }
    const computedStyle = getComputedStyle(textarea);
    const lineHeight = Number.parseFloat(computedStyle.lineHeight) || 24;
    const minRows = Math.max(this.minRows, 1);
    const maxRows = Math.max(this.maxRows, minRows);
    const borderHeight = textarea.offsetHeight - textarea.clientHeight || Number.parseFloat(computedStyle.borderTopWidth) + Number.parseFloat(computedStyle.borderBottomWidth);
    const minHeight = lineHeight * minRows + borderHeight;
    const maxHeight = lineHeight * maxRows + borderHeight;
    textarea.style.height = "auto";
    textarea.style.minHeight = `${minHeight}px`;
    const nextHeight = Math.min(Math.max(textarea.scrollHeight + borderHeight, minHeight), maxHeight);
    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight + borderHeight > maxHeight ? "auto" : "hidden";
  }
  getCharacterLimit() {
    const limit = this.characterLimit ?? this.maxLength;
    return typeof limit === "number" && Number.isFinite(limit) && limit > 0 ? limit : void 0;
  }
  getNormalizedCharacterLimitWarningThreshold() {
    if (!Number.isFinite(this.characterLimitWarningThreshold)) {
      return 0.9;
    }
    return Math.min(Math.max(this.characterLimitWarningThreshold, 0), 1);
  }
  isSoftCharacterLimitWarning() {
    const limit = this.getCharacterLimit();
    if (!limit || this.isCharacterLimitReached()) {
      return false;
    }
    const warningLength = Math.ceil(limit * this.getNormalizedCharacterLimitWarningThreshold());
    return this.value.length >= warningLength;
  }
  isCharacterLimitReached() {
    const limit = this.getCharacterLimit();
    if (!limit) {
      return false;
    }
    return this.value.length >= limit;
  }
  getCharacterLimitMessage() {
    const limit = this.getCharacterLimit();
    const current = this.value.length;
    if (!limit) {
      return void 0;
    }
    if (this.isCharacterLimitReached()) {
      return this.formatCharacterLimitMessage(this.i18nCharacterLimitReached, current, limit);
    }
    if (this.isSoftCharacterLimitWarning()) {
      return this.formatCharacterLimitMessage(this.i18nCharacterLimitWarning, current, limit);
    }
    return void 0;
  }
  formatCharacterLimitMessage(template, current, limit) {
    return template.split("{current}").join(String(current)).split("{limit}").join(String(limit));
  }
  getCharacterLimitState() {
    if (this.isCharacterLimitReached()) {
      return "hard";
    }
    if (this.isSoftCharacterLimitWarning()) {
      return "soft";
    }
    return void 0;
  }
  handleKeyDown(event) {
    if (event.key !== "Enter" || event.shiftKey || event.altKey || event.ctrlKey || event.metaKey || this.insertLineBreakOnEnter || this.state === "processing") {
      return;
    }
    event.preventDefault();
    this.submitPrompt();
  }
  renderCharacterLimit() {
    const message = this.getCharacterLimitMessage();
    const state = this.getCharacterLimitState();
    if (!message || !state) {
      return null;
    }
    return h("ix-typography", { class: {
      "character-limit": true,
      "character-limit--soft": state === "soft",
      "character-limit--hard": state === "hard"
    }, textColor: "std" }, h("ix-icon", { "aria-hidden": "true", name: state === "hard" ? iconWarning : iconInfo, size: "16" }), message);
  }
  handleAttachmentsSlotChange(event) {
    const slot = event.target;
    this.hasAttachments = slot.assignedElements({
      flatten: true
    }).length > 0;
    this.scheduleAttachmentScrollbarUpdate();
  }
  handleFollowUpSlotChange(event) {
    this.hasFollowUp = this.hasAssignedContent(event.target);
  }
  hasAssignedContent(slot) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }
  updateHasFollowUp() {
    this.hasFollowUp = this.hostElement.querySelectorAll('[slot="follow-up"]').length > 0;
  }
  initAttachmentResizeObserver(attachments) {
    this.attachmentResizeObserver?.disconnect();
    this.attachmentResizeObserver = new ResizeObserver(() => this.scheduleAttachmentScrollbarUpdate());
    this.attachmentResizeObserver.observe(attachments);
  }
  initAttachmentMutationObserver() {
    this.attachmentMutationObserver = createMutationObserver(() => {
      this.updateHasFollowUp();
      this.scheduleAttachmentScrollbarUpdate();
    });
    this.attachmentMutationObserver.observe(this.hostElement, {
      attributes: true,
      childList: true,
      subtree: true
    });
  }
  scheduleAttachmentScrollbarUpdate() {
    if (this.isAttachmentScrollbarUpdateQueued) {
      return;
    }
    this.isAttachmentScrollbarUpdateQueued = true;
    requestAnimationFrameNoNgZone(() => {
      this.isAttachmentScrollbarUpdateQueued = false;
      this.updateAttachmentScrollbar();
    });
  }
  updateAttachmentScrollbar() {
    const attachments = this.attachmentsRef.current;
    if (!attachments) {
      return;
    }
    const computedStyle = getComputedStyle(attachments);
    const hasHorizontalScrollbar = ["auto", "scroll"].includes(computedStyle.overflowX) && attachments.scrollWidth - attachments.clientWidth > 1;
    const hasVerticalScrollbar = ["auto", "scroll"].includes(computedStyle.overflowY) && attachments.scrollHeight - attachments.clientHeight > 1;
    const hasAttachmentScrollbar = this.hasAttachments && (hasHorizontalScrollbar || hasVerticalScrollbar);
    if (this.hasAttachmentScrollbar !== hasAttachmentScrollbar) {
      this.hasAttachmentScrollbar = hasAttachmentScrollbar;
    }
  }
  render() {
    const isProcessing = this.state === "processing";
    const disabledSubmitButton = isProcessing || !this.canSubmit() && this.state === "input";
    const submitButtonIcon = isProcessing ? iconCircleStop : iconSendRightFilled;
    return h(Host, { key: "f57258663d212820f135067103cdd65794065fdf", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      "has-follow-up": this.hasFollowUp
    } }, h("div", { key: "4101db76bcc4e5a7beab149a9d357c03f0da42e5", class: "follow-up-prompts" }, h("slot", { key: "2a65bd59a866ef101ae457aae992a950899ccfd6", name: "follow-up", onSlotchange: (event) => this.handleFollowUpSlotChange(event) })), h("div", { key: "edbd06caf7b8c40e32d023b420e70b500f4e3971", class: "chat-input" }, h("div", { key: "e2572b2a716b1a475b570309f00cced13a551029", ref: this.attachmentsRef, class: {
      attachments: true,
      "attachments--scroll": true,
      "has-attachment-scrollbar": this.hasAttachmentScrollbar,
      "has-attachments": this.hasAttachments
    } }, h("slot", { key: "98a16a041ad1bd302d239ac12b3bacb94f06276f", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("textarea", { key: "23370970c4a2879f46e82355debeb48d0f84bc69", id: this.getHostElementId() + "-textarea", ref: this.textareaRef, readOnly: this.readonly, disabled: this.disabled, maxLength: this.getCharacterLimit(), rows: this.minRows, value: this.value, placeholder: this.placeholder, "aria-label": this.textareaLabel, onFocus: () => {
      this.initialValue = this.value;
    }, onInput: (event) => {
      const textarea = event.target;
      this.updateFormInternalValue(textarea.value);
      this.valueChange.emit(textarea.value);
      this.updateTextareaHeight(textarea);
    }, onKeyDown: (event) => this.handleKeyDown(event), onBlur: () => {
      this.ixBlur.emit();
      this.emitIxChangeIfNeeded();
    } }), this.renderCharacterLimit(), h("div", { key: "1fe45c7f387a5c1b744c0c81ccadd7462affe6b1", class: "action-row" }, h("div", { key: "03171f79e3fb736c738a95965af17190ed9e229b", class: "left-actions" }, h("slot", { key: "0843217e24d1208ec1c2b3f4d4ac589ea5b16b0a", name: "start" })), h("div", { key: "9038e70ebb59a0bd91ad6b4f343f9d32e24171f0", class: "right-actions" }, h("slot", { key: "0fd5a6e101632ed729b84c7916f80a9be08f9e5a", name: "end" }), h("ix-icon-button", { key: "e37813f6699d118284a4c4ca0e66aab6d60a6f66", "aria-label": isProcessing ? "Stop processing" : "Submit prompt", class: "submit-button", disabled: disabledSubmitButton, icon: submitButtonIcon, size: "24", variant: "tertiary", onClick: () => this.submitPrompt() })))), this.disclaimer && h("ix-typography", { key: "6b041d0bc870c2125389667ac22e035c573f8ff2", class: "disclaimer", format: "body-sm", textColor: "soft" }, this.disclaimer));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "onValueChange": 0
      }],
      "minRows": [{
        "onRowsChange": 0
      }],
      "maxRows": [{
        "onRowsChange": 0
      }]
    };
  }
};
ChatInput.style = chatInputCss();
export {
  ChatInput as ix_chat_input
};
