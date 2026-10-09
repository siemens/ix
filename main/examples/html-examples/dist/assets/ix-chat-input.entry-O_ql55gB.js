import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { c as iconWarning, d as iconInfo, x as iconCircleStop, y as iconSendRightFilled } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const chatInputCss = () => `@charset "UTF-8";:host{--ix-chat-input--background:var(--si-sys-color-background-1);--ix-chat-input--background--hover:var(--si-sys-color-background-4);--ix-chat-input--border-color:var(--si-sys-color-border-2);--ix-chat-input--border-color--hover:var(--si-sys-color-border-1);--ix-chat-input--border-color--focus:var(--si-sys-color-border-1);--ix-chat-input--border-color--disabled:var(--si-sys-color-border-4);--ix-chat-input--border-color--readonly:var(--si-sys-color-border-4);--ix-chat-input--color:var(--si-sys-color-text-primary);--ix-chat-input--color--disabled:var(--si-sys-color-text-disabled);--ix-chat-input-placeholder--color:var(--si-sys-color-text-secondary);--ix-chat-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-chat-input-character-limit-soft-icon--color:var(--si-sys-color-text-information);--ix-chat-input-character-limit-hard-icon--color:var(--si-sys-color-text-warning)}:host{--ix-chat-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-chat-input--border-width:var(--si-sys-sizing-border-width-default);--ix-chat-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-chat-input--min-height:calc(     var(--si-sys-sizing-size-140) + 4 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-chat-input-follow-up-prompts--max-width:calc(     var(--si-sys-sizing-size-170) + var(--si-sys-sizing-spacing-x-130)   );--ix-chat-input-follow-up-prompts--min-width:var(--si-sys-sizing-size-120);--ix-chat-input-attachments-wrap--max-height:calc(     var(--si-sys-sizing-size-110) + var(--si-sys-sizing-spacing-y-50)   );--ix-chat-input-has-attachment-scrollbar--padding-bottom:var(--si-sys-sizing-spacing-y-20);--ix-chat-input-textarea--min-height:var(--si-sys-sizing-size-80);--ix-chat-input-action-row--min-height:var(--si-sys-sizing-size-80);--ix-chat-input--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50);--ix-chat-input-follow-up-prompts--gap:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-chat-input-follow-up-prompts--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-chat-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-chat-input-attachments--gap:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50);--ix-chat-input-attachments--margin-bottom:var(--si-sys-sizing-spacing-y-50);--ix-chat-input-character-limit--gap:var(--si-sys-sizing-spacing-x-40);--ix-chat-input-character-limit--margin-top:var(--si-sys-sizing-spacing-y-50);--ix-chat-input-action-row--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-chat-input-left-actions--gap:var(--si-sys-sizing-spacing-x-40);--ix-chat-input-disclaimer--margin-top:var(--si-sys-sizing-spacing-y-40)}:host{display:block;width:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .chat-input{display:flex;flex-direction:column;width:100%;min-height:var(--ix-chat-input--min-height);padding:var(--ix-chat-input--padding);box-sizing:border-box;background-color:var(--ix-chat-input--background);border:var(--ix-chat-input--border-width) solid var(--ix-chat-input--border-color);border-radius:var(--ix-chat-input--border-radius);color:var(--ix-chat-input--color)}:host .follow-up-prompts{display:none;flex-wrap:wrap;align-items:flex-start;gap:var(--ix-chat-input-follow-up-prompts--gap);width:100%;margin-bottom:var(--ix-chat-input-follow-up-prompts--margin-bottom)}:host .follow-up-prompts ::slotted(*){flex:0 1 auto}:host .follow-up-prompts ::slotted(ix-button){max-width:var(--ix-chat-input-follow-up-prompts--max-width);min-width:var(--ix-chat-input-follow-up-prompts--min-width)}:host .follow-up-prompts ::slotted(ix-icon-button){flex:0 0 auto}:host .chat-input:hover{border-color:var(--ix-chat-input--border-color--hover);background-color:var(--ix-chat-input--background--hover)}:host .chat-input:focus-within{outline:var(--ix-chat-input--outline-width--focus) solid var(--ix-chat-input--outline-color--focus);outline-offset:var(--ix-chat-input--focus--outline-offset);border-color:var(--ix-chat-input--border-color--focus)}:host .attachments{display:none;box-sizing:border-box;width:100%;max-width:100%;gap:var(--ix-chat-input-attachments--gap);margin-bottom:var(--ix-chat-input-attachments--margin-bottom)}:host .attachments.has-attachments{display:flex}:host .attachments--wrap{flex-wrap:wrap;max-height:var(--ix-chat-input-attachments-wrap--max-height);overflow:hidden}:host .attachments--scroll{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden}:host .attachments--scroll *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host .attachments--scroll *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .attachments--scroll *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host .attachments--scroll *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host .attachments--scroll *{}:host .attachments--scroll *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host .attachments--scroll *::-webkit-scrollbar-corner{display:none}:host .attachments--scroll{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host .attachments--scroll::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host .attachments--scroll{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host .attachments--scroll::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host .attachments--scroll{}:host .attachments--scroll::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host .attachments--scroll::-webkit-scrollbar-corner{display:none}:host .attachments.has-attachment-scrollbar{padding-bottom:var(--ix-chat-input-has-attachment-scrollbar--padding-bottom)}:host .attachments ::slotted(ix-chat-attachment){flex:0 1 auto}:host .attachments--scroll ::slotted(ix-chat-attachment){flex:0 0 auto}:host textarea{flex:1 1 auto;width:100%;min-height:var(--ix-chat-input-textarea--min-height);padding:0;border:0;outline:0;box-sizing:border-box;resize:none;background:transparent;color:inherit;font:inherit}:host textarea::-moz-placeholder{color:var(--ix-chat-input-placeholder--color)}:host textarea::placeholder{color:var(--ix-chat-input-placeholder--color)}:host .character-limit{display:flex;align-items:center;gap:var(--ix-chat-input-character-limit--gap);width:100%;margin-top:var(--ix-chat-input-character-limit--margin-top)}:host .character-limit ix-icon{flex:0 0 auto}:host .character-limit--soft ix-icon{color:var(--ix-chat-input-character-limit-soft-icon--color)}:host .character-limit--hard ix-icon{color:var(--ix-chat-input-character-limit-hard-icon--color)}:host .action-row{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:var(--ix-chat-input-action-row--min-height);margin-top:var(--ix-chat-input-action-row--margin-top)}:host .left-actions,:host .right-actions{display:flex;align-items:center;gap:var(--ix-chat-input-left-actions--gap)}:host .left-actions{flex:1 1 auto;min-width:0}:host .right-actions{flex:0 0 auto;justify-content:flex-end}:host .disclaimer{display:block;width:100%;margin-top:var(--ix-chat-input-disclaimer--margin-top);text-align:center}:host(.has-follow-up) .follow-up-prompts{display:flex}:host(.disabled){pointer-events:none}:host(.disabled) .chat-input{border-color:var(--ix-chat-input--border-color--disabled);color:var(--ix-chat-input--color--disabled);background-color:transparent}:host(.disabled) textarea::-moz-placeholder{color:transparent}:host(.disabled) textarea::placeholder{color:transparent}:host(.readonly) .chat-input{border-color:var(--ix-chat-input--border-color--readonly);background-color:transparent}:host(.readonly) .chat-input:hover,:host(.readonly) .chat-input:focus-within{border-color:var(--ix-chat-input--border-color--readonly);outline:none}`;
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
    super.componentWillLoad?.();
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
    this.updateHasFollowUp();
  }
  componentDidLoad() {
    super.componentDidLoad?.();
    this.updateHasFollowUp();
    this.initAttachmentMutationObserver();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }
  componentDidRender() {
    super.componentDidRender?.();
    this.scheduleAttachmentScrollbarUpdate();
    this.updateTextareaHeight();
  }
  disconnectedCallback() {
    super.disconnectedCallback?.();
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
    return h(Host, { key: "a5615255bd4ff15c06a64d32cba147258d3956c0", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      "has-follow-up": this.hasFollowUp
    } }, h("div", { key: "bff2625b4225c03dd6d3aaab477f7c74c04e4de1", class: "follow-up-prompts" }, h("slot", { key: "0de45a0b82c9eb62fc4c0ec14867001c7e6a1e05", name: "follow-up", onSlotchange: (event) => this.handleFollowUpSlotChange(event) })), h("div", { key: "9057084efa78a733cd3bbefd2634f770159e1b7b", class: "chat-input" }, h("div", { key: "d5f4a07ffc4170016e13a083affe96174291e4a0", ref: this.attachmentsRef, class: {
      attachments: true,
      "attachments--scroll": true,
      "has-attachment-scrollbar": this.hasAttachmentScrollbar,
      "has-attachments": this.hasAttachments
    } }, h("slot", { key: "5cd1f5db345e229a649cad492a3111e32136b079", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("textarea", { key: "f1a7ff0fa7d6076b560bac8410bdd9673fa7a29a", id: this.getHostElementId() + "-textarea", ref: this.textareaRef, readOnly: this.readonly, disabled: this.disabled, maxLength: this.getCharacterLimit(), rows: this.minRows, value: this.value, placeholder: this.placeholder, "aria-label": this.textareaLabel, onFocus: () => {
      this.initialValue = this.value;
    }, onInput: (event) => {
      const textarea = event.target;
      this.updateFormInternalValue(textarea.value);
      this.valueChange.emit(textarea.value);
      this.updateTextareaHeight(textarea);
    }, onKeyDown: (event) => this.handleKeyDown(event), onBlur: () => {
      this.ixBlur.emit();
      this.emitIxChangeIfNeeded();
    } }), this.renderCharacterLimit(), h("div", { key: "e6a3ea2e4e7bf796dcdfba5908e07ec3906baf50", class: "action-row" }, h("div", { key: "0a3ead650762806cf895d63989b5c940041afc6f", class: "left-actions" }, h("slot", { key: "0bd63b1fda02f44074621b0ae085e9ee210058a7", name: "start" })), h("div", { key: "80d52a3b6f64596464b6a2580ae704c8bd11654d", class: "right-actions" }, h("slot", { key: "77dff61208ef82a9b3a0237be36d53bb9309c0d3", name: "end" }), h("ix-icon-button", { key: "68d3c6448eeeb8d0a9704fdd4241de6e45361772", "aria-label": isProcessing ? "Stop processing" : "Submit prompt", class: "submit-button", disabled: disabledSubmitButton, icon: submitButtonIcon, variant: "tertiary", onClick: () => this.submitPrompt() })))), this.disclaimer && h("ix-typography", { key: "d19c638991bdf3408e74cac0cc8c1ef19ebeaa75", class: "disclaimer", format: "body-sm", textColor: "soft" }, this.disclaimer));
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
