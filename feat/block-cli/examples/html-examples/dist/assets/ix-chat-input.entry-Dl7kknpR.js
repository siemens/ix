import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-DSse0xVy.js";
import { c as iconWarning, d as iconInfo, x as iconCircleStop, y as iconSendRightFilled } from "./index-BeX6RWvV-CXzUIwMU.js";
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
    return h(Host, { key: "72c1e2139cdf152b32d84a4f8e5292361e63489c", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      "has-follow-up": this.hasFollowUp
    } }, h("div", { key: "88a8ccbdafceda33f39bc1266f50966af22fa830", class: "follow-up-prompts" }, h("slot", { key: "10cbddca520c0eaed028f05f9d6c14977e8043db", name: "follow-up", onSlotchange: (event) => this.handleFollowUpSlotChange(event) })), h("div", { key: "65235d296b9d6e452332746229300bdb9a766aec", class: "chat-input" }, h("div", { key: "856ae3152ac0c5665e8a83f250cfd7ad53a9d778", ref: this.attachmentsRef, class: {
      attachments: true,
      "attachments--scroll": true,
      "has-attachment-scrollbar": this.hasAttachmentScrollbar,
      "has-attachments": this.hasAttachments
    } }, h("slot", { key: "c8c108ef47848cfaee5074c545ff9f9b7000a71d", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("textarea", { key: "55cb475c3ea359f198f26f04b0c89d6a972e1799", id: this.getHostElementId() + "-textarea", ref: this.textareaRef, readOnly: this.readonly, disabled: this.disabled, maxLength: this.getCharacterLimit(), rows: this.minRows, value: this.value, placeholder: this.placeholder, "aria-label": this.textareaLabel, onFocus: () => {
      this.initialValue = this.value;
    }, onInput: (event) => {
      const textarea = event.target;
      this.updateFormInternalValue(textarea.value);
      this.valueChange.emit(textarea.value);
      this.updateTextareaHeight(textarea);
    }, onKeyDown: (event) => this.handleKeyDown(event), onBlur: () => {
      this.ixBlur.emit();
      this.emitIxChangeIfNeeded();
    } }), this.renderCharacterLimit(), h("div", { key: "64844f6f38de39980e9ac250ea6edfad8599cb61", class: "action-row" }, h("div", { key: "ae3d9b5bbc4828610f6d3ba27135eb0595325e2f", class: "left-actions" }, h("slot", { key: "36bd038c725a205671fdba70298c39899e7e35ac", name: "start" })), h("div", { key: "5d27e8d2dd186d73c7f2677f73221b5106159a9a", class: "right-actions" }, h("slot", { key: "54757427353728d8462137a645a1cc6c4133ebcc", name: "end" }), h("ix-icon-button", { key: "ac42d94d4999731a1b76a1163083781258f82573", "aria-label": isProcessing ? "Stop processing" : "Submit prompt", class: "submit-button", disabled: disabledSubmitButton, icon: submitButtonIcon, size: "24", variant: "tertiary", onClick: () => this.submitPrompt() })))), this.disclaimer && h("ix-typography", { key: "572264e22f9d76d980299b163a961e2a6bf9deed", class: "disclaimer", format: "body-sm", textColor: "soft" }, this.disclaimer));
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
