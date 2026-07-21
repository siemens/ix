import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, f as forceUpdate, H as Host } from "./global-CRrZCTD3.js";
import { q as iconClear, t as iconChevronUpSmall, h as iconChevronDownSmall, E as iconPlus } from "./index-DgUGsIlh-CLxQRaVd.js";
import { a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, a as PROXY_LIST_ID_SUFFIX, u as updateFocusProxyList, F as FocusProxy } from "./focus-proxy-BQyoX-Kl-yQy1OX0d.js";
import { q as queryElements, I as IX_FOCUS_VISIBLE_ACTIVE } from "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-N8cCybX6.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const selectCss = () => `:host{display:inline-block;position:relative;min-height:2rem;height:auto;border-radius:var(--theme-input--border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .select{position:relative;display:flex;align-items:center;width:100%;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem;box-shadow:var(--theme-inset-shadow-1) !important}:host .select:hover:not(.readonly):not(.disabled){background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}:host .select.readonly,:host .select.disabled{box-shadow:none !important}:host .select.readonly,:host .select.readonly:hover,:host .select.readonly:active,:host .select.disabled,:host .select.disabled:hover,:host .select.disabled:active{background-color:transparent !important}:host .select.readonly:focus,:host .select.readonly:focus-within,:host .select.readonly:focus-visible,:host .select.disabled:focus,:host .select.disabled:focus-within,:host .select.disabled:focus-visible{outline:none}:host .select.readonly input:focus,:host .select.readonly input:focus-visible,:host .select.disabled input:focus,:host .select.disabled input:focus-visible{outline:none}:host .select.disabled{border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--disabled)}:host .select.disabled input{color:var(--theme-input--color--disabled)}:host .select.readonly{border:var(--theme-input--border-thickness) solid var(--theme-input--border-color--readonly)}:host .select.readonly input{color:var(--theme-input--color--readonly)}:host .trigger{display:flex;align-items:center;flex-grow:1;height:100%}:host .input-container{display:flex;position:relative;align-items:flex-start;width:100%;height:100%}:host .input-container .chips{position:relative;display:flex;align-items:center;flex-wrap:nowrap;height:100%;flex-grow:1;overflow:hidden}:host .input-container .chips>ix-filter-chip{margin:0.1rem;flex-shrink:0;max-width:min(40%, 14rem)}:host .input-container .chips>ix-filter-chip.chip-measuring{position:absolute;visibility:hidden;pointer-events:none}:host .input-container .chips>ix-filter-chip.chip-overflow{cursor:pointer}:host .input-container .chips>ix-filter-chip.chip-overflow:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .input-container ix-icon-button{height:1.875rem;width:1.875rem;min-height:1.875rem;min-width:1.875rem}:host .input-container input{background:transparent;height:1.75rem;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container input,:host .input-container input:hover,:host .input-container input:focus-visible{border:none;outline:none}:host .input-container input::-moz-placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input::placeholder{color:var(--theme-input-select-icon--color)}:host .input-container input.hide-placeholder::-moz-placeholder{opacity:0}:host .input-container input.hide-placeholder::placeholder{opacity:0}:host ix-dropdown{display:flex;flex-direction:column;max-width:100%}:host .overflow-dropdown-content{display:flex;flex-direction:column;align-items:flex-start;gap:0.25rem;max-height:16rem;overflow-y:auto;padding:0.5rem}:host .dropdown-visible{--ix-icon-button-color:var(--theme-color-std-text--hover)}:host .add-item{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}:host .select-list-header{display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 1rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .hidden{display:none !important}:host .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host .proxy-list li{height:2px;width:2px;pointer-events:all}:host(.ix-focused) .select,:host(.show-focus-outline) .select{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--warning);background-color:var(--theme-input--background--warning)}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--warning--hover) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select{border-color:var(--theme-input--border-color--invalid);background-color:var(--theme-input--background--invalid)}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:hover{border-color:var(--theme-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .select:active{border-color:var(--theme-input--border-color--invalid--active) !important}`;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let selectId = 0;
const Select = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.inputChange = createEvent(this, "inputChange", 7);
    this.addItem = createEvent(this, "addItem", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
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
   * A string that represents the element's name attribute,
   * containing a name that identifies the element when submitting the form.
   */
  name;
  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected
   */
  required = false;
  /**
   * Label for the select component
   */
  label;
  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelClearIconButton = "Clear selection";
  /**
   * ARIA label for the add item
   *
   * @since TODO: Define
   */
  ariaLabelAddItem = "Add item";
  /**
   * Accessible label template for the overflow indicator chip shown in multiple
   * mode when not all selected chips fit on a single row. The `{count}`
   * placeholder is replaced with the number of hidden items (e.g. "3 more").
   *
   * @since 5.1.0
   */
  i18nMoreItems = "{count} more";
  /**
   * Warning text for the select component
   **/
  warningText;
  /**
   * Info text for the select component
   **/
  infoText;
  /**
   * Error text for the select component
   **/
  invalidText;
  /**
   * Valid text for the select component
   **/
  validText;
  /**
   * Helper text for the select component
   **/
  helperText;
  /**
   * Show helper, error, info, warning text as tooltip
   */
  showTextAsTooltip;
  /**
   * Current selected value.
   * This corresponds to the value property of ix-select-items
   */
  value = "";
  /**
   * Show clear button
   */
  allowClear = false;
  /**
   * Selection mode
   */
  mode = "single";
  /**
   * Select is extendable
   */
  editable = false;
  /**
   * If true the select will be in disabled state
   */
  disabled = false;
  /**
   * If true the select will be in readonly mode
   */
  readonly = false;
  /**
   * Input field placeholder
   */
  i18nPlaceholder = "Select an option";
  /**
   * Input field placeholder for editable select
   */
  i18nPlaceholderEditable = "Type of select option";
  /**
   * Select list header
   */
  i18nSelectListHeader = "Select an option";
  /**
   * Information inside of dropdown if no items where found with current filter text
   */
  i18nNoMatches = "No matches";
  /**
   * Chip label for all selected items in multiple mode.
   */
  i18nAllSelected = "All";
  /**
   * Prefix for the accessible name of the close control on a selected chip in multiple mode.
   * The chip label or value is appended (e.g. "Remove Item 1").
   *
   * @since 5.0.0
   */
  i18nRemoveSelectedItem = "Remove";
  /**
   * Hide list header
   */
  hideListHeader = false;
  /**
   * The width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   */
  dropdownWidth;
  /**
   * The maximum width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
   * By default the maximum width of the dropdown element is set to 100%.
   */
  dropdownMaxWidth;
  /**
   * Show "all" chip when all items are selected in multiple mode
   */
  collapseMultipleSelection = false;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Value changed
   */
  valueChange;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChange;
  /**
   * Item added to selection
   */
  addItem;
  /**
   * Blur input
   */
  ixBlur;
  dropdownShow = false;
  selectedLabels = [];
  isDropdownEmpty = false;
  inputFilterText = "";
  inputValue = "";
  visibleChipValues = null;
  hiddenChipValues = [];
  overflowDropdownShow = false;
  hasInputFocus = false;
  dropdownItemsVisualFocused = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  hostId = `ix-select-${selectId++}`;
  dropdownWrapperRef = makeRef();
  dropdownAnchorRef = makeRef();
  inputRef = makeRef();
  dropdownRef = makeRef();
  chipElementRefs = /* @__PURE__ */ new Map();
  chipWidths = /* @__PURE__ */ new Map();
  overflowChipRef = makeRef();
  chipsContainerRef = makeRef();
  clearButtonRef = makeRef();
  chipHorizontalMargin = 4;
  triggerMinWidth = 78;
  overflowChipFallbackWidth = 52;
  overflowChipWidth = 0;
  chipsResizeObserver;
  overflowDropdownOpenedByKeyboard = false;
  proxyListObserver = null;
  inputElement;
  touched = false;
  get nonShadowItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item"));
  }
  get shadowItems() {
    return Array.from(this.hostElement.shadowRoot.querySelectorAll("ix-select-item"));
  }
  get focusableItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item:not([disabled]):not([hidden]), ix-dropdown-item:not([disabled]):not([hidden])"));
  }
  get allFocusableItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-select-item, ix-dropdown-item"));
  }
  get items() {
    return [...this.nonShadowItems, ...this.shadowItems];
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemElement() {
    return this.hostElement.querySelector("ix-dropdown-item.add-item");
  }
  get isSingleMode() {
    return this.mode === "single";
  }
  get isMultipleMode() {
    return this.mode === "multiple";
  }
  get isEveryDropdownItemHidden() {
    return this.items.every((item) => item.hidden === true);
  }
  watchValue(value) {
    this.value = value;
    this.updateSelection();
  }
  watchDisabledReadonly() {
    this.chipWidths.clear();
    this.overflowChipWidth = 0;
  }
  updateFormInternalValue(value) {
    if (Array.isArray(value)) {
      this.formInternals.setFormValue(value.join(","));
    } else {
      this.formInternals.setFormValue(value);
    }
  }
  /** @internal */
  async hasValidValue() {
    return this.required && !!this.hasValue();
  }
  hasValue() {
    if (Array.isArray(this.value)) {
      return !!this.value.length;
    }
    return !!this.value;
  }
  itemClick(newId) {
    const oldValue = this.value;
    const value = this.toggleValue(newId);
    this.value = value;
    const defaultPrevented = this.emitValueChange(value);
    if (defaultPrevented) {
      this.value = oldValue;
      return;
    }
    this.updateSelection();
    if (this.isMultipleMode && this.inputFilterText) {
      this.clearInput();
      this.removeHiddenAttributeFromItems();
    }
  }
  emitAddItem(value) {
    if (value === void 0 || value.trim() === "") {
      return false;
    }
    const { defaultPrevented } = this.addItem.emit(value);
    if (defaultPrevented) {
      return true;
    }
    const newItem = document.createElement("ix-select-item");
    newItem.value = value;
    newItem.label = value;
    this.addItemElement?.before(newItem);
    requestAnimationFrameNoNgZone(() => {
      this.clearInput();
      this.itemClick(value);
    });
    return false;
  }
  toggleValue(itemValue) {
    if (!this.isMultipleMode) {
      return itemValue;
    }
    if (!this.value) {
      return [itemValue];
    }
    let value = this.value;
    if (!Array.isArray(value)) {
      value = [value];
    }
    if (value.includes(itemValue)) {
      return value.filter((value2) => value2 !== itemValue);
    } else {
      return [...value, itemValue];
    }
  }
  updateSelection() {
    let ids = [];
    if (this.value) {
      ids = Array.isArray(this.value) ? [...this.value] : [this.value];
    }
    this.items.forEach((item) => {
      item.selected = ids.some((i) => {
        if (typeof i !== typeof item.value) {
          return i.toString() === item.value.toString();
        } else {
          return i === item.value;
        }
      });
    });
    this.selectedLabels = this.selectedItems.map((item) => item.label ?? item.value);
    this.pruneChipWidthCache();
    if (this.dropdownShow && this.inputFilterText) {
      return;
    }
    if (this.selectedLabels?.length && this.isSingleMode) {
      this.inputValue = this.selectedLabels[0] ?? "";
    } else {
      this.inputValue = "";
    }
    this.inputElement && (this.inputElement.value = this.inputValue);
  }
  emitValueChange(value) {
    const { defaultPrevented } = this.valueChange.emit(value);
    if (defaultPrevented) {
      return true;
    }
    this.updateFormInternalValue(value);
    return false;
  }
  createAddItemElement() {
    const onAddItemButtonClick = () => {
      this.emitAddItem(this.inputFilterText);
    };
    const createElement = () => {
      const addItemElement = document.createElement("ix-dropdown-item");
      addItemElement.hidden = true;
      addItemElement.setAttribute("data-testid", "add-item");
      addItemElement.icon = iconPlus;
      addItemElement.classList.add("add-item");
      addItemElement.addEventListener("click", onAddItemButtonClick);
      addItemElement.style.order = Number.MAX_SAFE_INTEGER.toString();
      addItemElement.ariaHidden = "true";
      addItemElement.role = "presentation";
      return addItemElement;
    };
    const isRendered = this.hostElement.querySelector(".add-item");
    if (!isRendered) {
      this.hostElement.appendChild(createElement());
    }
  }
  componentDidLoad() {
    this.inputElement?.addEventListener("input", () => {
      this.dropdownShow = true;
      this.inputChange.emit(this.inputElement?.value);
    });
    this.createAddItemElement();
    this.proxyListObserver = new MutationObserver(() => {
      this.updateAriaProxyListbox();
    });
    this.proxyListObserver.observe(this.hostElement, {
      attributes: true,
      attributeFilter: ["aria-selected"],
      subtree: true,
      childList: true
    });
    const chipsContainer = this.chipsContainerRef.current;
    if (chipsContainer) {
      this.chipsResizeObserver = new ResizeObserver(() => {
        this.handleChipsContainerResize();
      });
      this.chipsResizeObserver.observe(chipsContainer);
    }
  }
  componentWillLoad() {
    this.updateSelection();
    this.updateFormInternalValue(this.value);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.proxyListObserver?.disconnect();
    this.chipsResizeObserver?.disconnect();
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.chipWidths.clear();
    this.updateSelection();
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  getActiveVisualFocusedItem() {
    const elements = queryElements(this.hostElement, `.${IX_FOCUS_VISIBLE_ACTIVE}`);
    if (elements.length > 0) {
      return elements[0];
    }
    return null;
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    if (event.detail) {
      this.inputElement?.focus();
      if (this.hasValue()) {
        this.inputElement?.select();
      }
      if (!this.inputFilterText) {
        this.removeHiddenAttributeFromItems();
      }
      this.isDropdownEmpty = this.isEveryDropdownItemHidden;
      this.checkVisibilityOfProxyList();
    } else {
      this.updateSelection();
      this.inputFilterText = "";
      this.dropdownItemsVisualFocused = false;
      this.inputElement?.setAttribute("aria-activedescendant", "");
    }
  }
  setItemFilter() {
    this.inputFilterText = this.inputElement?.value.trim() ?? "";
    if (this.inputFilterText) {
      this.items.forEach((item) => {
        const proxyItem = this.hostElement.shadowRoot?.getElementById(`${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`);
        item.hidden = false;
        if (proxyItem) {
          proxyItem.hidden = false;
          proxyItem.setAttribute("aria-hidden", "false");
        }
        if (!item.label?.toLowerCase().includes(this.inputFilterText.toLowerCase())) {
          item.hidden = true;
          if (proxyItem) {
            proxyItem.hidden = true;
            proxyItem.setAttribute("aria-hidden", "true");
          }
        }
      });
    } else {
      this.removeHiddenAttributeFromItems();
    }
    this.isDropdownEmpty = this.isEveryDropdownItemHidden;
    this.checkVisibilityOfProxyList();
  }
  checkVisibilityOfProxyList() {
    const proxyList = this.hostElement?.shadowRoot?.getElementById(`${this.hostId}-${PROXY_LIST_ID_SUFFIX}`);
    if (!proxyList) {
      return;
    }
    proxyList.hidden = this.isDropdownEmpty;
  }
  removeHiddenAttributeFromItems() {
    this.items.forEach((item) => {
      item.hidden = false;
      const proxyItem = this.hostElement.shadowRoot?.getElementById(`${item.id}-${PROXY_LISTITEM_ID_SUFFIX}`);
      if (proxyItem) {
        proxyItem.hidden = false;
        proxyItem.setAttribute("aria-hidden", "false");
      }
    });
  }
  clearInput() {
    if (this.inputElement) {
      this.inputElement.value = "";
    }
    this.inputFilterText = "";
  }
  clear() {
    this.clearInput();
    this.selectedLabels = [];
    const emptyValue = this.isSingleMode ? "" : [];
    this.value = emptyValue;
    this.emitValueChange(emptyValue);
    this.dropdownShow = false;
  }
  onInputBlur(event) {
    this.ixBlur.emit();
    this.touched = true;
    this.hasInputFocus = false;
    if (this.editable) {
      return;
    }
    if (this.isSingleMode) {
      return;
    }
    const target = event.target;
    if (!this.dropdownShow && this.mode !== "multiple") {
      target.value = this.selectedLabels.toString();
    }
  }
  onInputFocus() {
    this.hasInputFocus = true;
  }
  placeholderValue() {
    if (this.disabled) {
      return "";
    }
    if (this.readonly) {
      return "";
    }
    if (this.editable) {
      return this.i18nPlaceholderEditable;
    }
    return this.i18nPlaceholder;
  }
  isAddItemVisible() {
    return !this.itemExists(this.inputFilterText) && this.editable && this.inputFilterText;
  }
  shouldDisplayAllChip() {
    return this.selectedItems.length === this.items.length && this.collapseMultipleSelection;
  }
  getRemoveChipAriaLabel(item) {
    const name = (item.label ?? item.value)?.toString().trim();
    if (!name) {
      return this.i18nRemoveSelectedItem;
    }
    return `${this.i18nRemoveSelectedItem} ${name}`;
  }
  renderAllChip() {
    return h("ix-filter-chip", { disabled: this.disabled || this.readonly, ariaLabelCloseIconButton: `${this.i18nRemoveSelectedItem} ${this.i18nAllSelected}`, onCloseClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    } }, `${this.i18nAllSelected} (${this.selectedItems.length})`);
  }
  renderChip(item, measuring) {
    const value = item.value.toString();
    return h("ix-filter-chip", { class: {
      "chip-measuring": measuring
    }, disabled: this.disabled || this.readonly, key: value, ariaLabelCloseIconButton: this.getRemoveChipAriaLabel(item), ref: (ref) => {
      if (ref) {
        this.chipElementRefs.set(value, ref);
        return;
      }
      this.chipElementRefs.delete(value);
    }, onCloseClick: () => {
      this.itemClick(item.value);
      this.inputElement?.focus();
    } }, item.label);
  }
  renderHiddenChip(item) {
    return h("ix-filter-chip", { class: "chip-hidden-item", disabled: this.disabled || this.readonly, key: `hidden-${item.value}`, ariaLabelCloseIconButton: this.getRemoveChipAriaLabel(item), onCloseClick: () => {
      this.overflowDropdownShow = false;
      this.itemClick(item.value);
      this.inputElement?.focus();
    } }, item.label);
  }
  renderOverflowChip() {
    const count = this.hiddenChipValues.length;
    const ariaLabel = this.i18nMoreItems.replace("{count}", count.toString());
    return h("ix-filter-chip", { key: "overflow-chip", class: "chip-overflow", hideCloseButton: true, disabled: this.disabled || this.readonly, tabindex: this.disabled || this.readonly ? -1 : 0, role: "button", "aria-haspopup": "listbox", "aria-expanded": a11yBoolean(this.overflowDropdownShow), "aria-label": ariaLabel, ref: this.overflowChipRef, onClick: (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.toggleOverflowDropdown();
    }, onKeyDown: (event) => {
      if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.overflowDropdownOpenedByKeyboard = true;
        this.overflowDropdownShow = true;
      }
    } }, `+${count}`);
  }
  renderMultipleModeChips() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.shouldDisplayAllChip()) {
      return this.renderAllChip();
    }
    const selected = this.selectedItems;
    if (selected.length === 0) {
      return null;
    }
    const visibleItems = selected.filter((item) => {
      const value = item.value.toString();
      if (!this.chipWidths.has(value)) {
        return false;
      }
      return this.visibleChipValues === null || this.visibleChipValues.includes(value);
    });
    const unmeasuredItems = selected.filter((item) => !this.chipWidths.has(item.value.toString()));
    return [
      ...visibleItems.map((item) => this.renderChip(item, false)),
      this.hiddenChipValues.length > 0 ? this.renderOverflowChip() : null,
      ...unmeasuredItems.map((item) => this.renderChip(item, true))
    ];
  }
  renderOverflowDropdown() {
    return h("ix-dropdown", { class: "overflow-dropdown", show: this.overflowDropdownShow, anchor: this.overflowChipRef.waitForCurrent(), closeBehavior: "outside", placement: "bottom-start", onShowChanged: (event) => {
      this.overflowDropdownShow = event.detail;
      if (event.detail && this.overflowDropdownOpenedByKeyboard) {
        this.overflowDropdownOpenedByKeyboard = false;
        this.focusOverflowRemoveButton(0);
      }
    } }, h("div", { class: "overflow-dropdown-content" }, this.hiddenChipValues.map((value) => {
      const item = this.selectedItems.find((selectedItem) => selectedItem.value.toString() === value);
      return item ? this.renderHiddenChip(item) : null;
    })));
  }
  toggleOverflowDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.overflowDropdownShow = !this.overflowDropdownShow;
  }
  getOverflowRemoveButtons() {
    const dropdown = this.hostElement.shadowRoot?.querySelector("ix-dropdown.overflow-dropdown");
    if (!dropdown) {
      return [];
    }
    return Array.from(dropdown.querySelectorAll("ix-filter-chip.chip-hidden-item")).flatMap((chip) => {
      const iconButton = chip.shadowRoot?.querySelector("ix-icon-button");
      const button = iconButton?.shadowRoot?.querySelector("button");
      return button ? [button] : [];
    });
  }
  focusOverflowRemoveButton(index) {
    requestAnimationFrameNoNgZone(() => {
      const buttons = this.getOverflowRemoveButtons();
      const button = buttons[index];
      if (!button) {
        return;
      }
      button.focus({ preventScroll: true });
      button.scrollIntoView({ block: "nearest" });
    });
  }
  onOverflowRemoveButtonKeyDown(event) {
    if (!this.overflowDropdownShow) {
      return;
    }
    const buttons = this.getOverflowRemoveButtons();
    const currentIndex = buttons.findIndex((button) => event.composedPath().includes(button));
    if (currentIndex === -1) {
      return;
    }
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton((currentIndex + 1) % buttons.length);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton((currentIndex - 1 + buttons.length) % buttons.length);
        break;
      }
      case "Tab": {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.focusOverflowRemoveButton(event.shiftKey ? (currentIndex - 1 + buttons.length) % buttons.length : (currentIndex + 1) % buttons.length);
        break;
      }
      case "Escape": {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.overflowDropdownShow = false;
        this.focusOverflowChip();
        break;
      }
    }
  }
  focusOverflowChip() {
    requestAnimationFrameNoNgZone(() => {
      this.overflowChipRef.current?.focus({ preventScroll: true });
    });
  }
  pruneChipWidthCache() {
    const validValues = new Set(this.selectedItems.map((item) => item.value.toString()));
    for (const value of this.chipWidths.keys()) {
      if (!validValues.has(value)) {
        this.chipWidths.delete(value);
      }
    }
  }
  sameChipValues(a, b) {
    if (a === b) {
      return true;
    }
    if (a === null || b === null) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    return a.every((value, index) => value === b[index]);
  }
  applyOverflowState(visible, hidden) {
    if (!this.sameChipValues(this.visibleChipValues, visible)) {
      this.visibleChipValues = visible;
    }
    if (!this.sameChipValues(this.hiddenChipValues, hidden)) {
      this.hiddenChipValues = hidden;
    }
    if (hidden.length === 0 && this.overflowDropdownShow) {
      this.overflowDropdownShow = false;
    }
  }
  getChipWidthWithMargin(value) {
    return (this.chipWidths.get(value) ?? 0) + this.chipHorizontalMargin;
  }
  getOverflowChipWidthWithMargin() {
    return (this.overflowChipWidth || this.overflowChipFallbackWidth) + this.chipHorizontalMargin;
  }
  canShowAllChips(values, available) {
    const totalWidth = values.reduce((width, value) => width + this.getChipWidthWithMargin(value), 0);
    return totalWidth <= available;
  }
  getOverflowChipValues(values, available) {
    const [firstValue, ...remainingValues] = values;
    if (firstValue === void 0) {
      return { visible: [], hidden: [] };
    }
    const visible = [firstValue];
    const hidden = [];
    let usedWidth = this.getChipWidthWithMargin(firstValue);
    const overflowChipWidth = this.getOverflowChipWidthWithMargin();
    for (const [index, value] of remainingValues.entries()) {
      const width = this.getChipWidthWithMargin(value);
      if (usedWidth + width + overflowChipWidth <= available) {
        visible.push(value);
        usedWidth += width;
        continue;
      }
      hidden.push(...remainingValues.slice(index));
      break;
    }
    return { visible, hidden };
  }
  hasUnmeasuredSelectedChips(values) {
    return values.some((value) => !this.chipWidths.has(value));
  }
  getChipOverflowContext() {
    if (!this.isMultipleMode || this.shouldDisplayAllChip()) {
      this.applyOverflowState(null, []);
      return null;
    }
    const container = this.chipsContainerRef.current;
    if (!container) {
      return null;
    }
    const values = this.selectedItems.map((item) => item.value.toString());
    if (values.length === 0) {
      this.applyOverflowState(null, []);
      return null;
    }
    return { container, values };
  }
  handleChipsContainerResize() {
    const context = this.getChipOverflowContext();
    if (!context) {
      return;
    }
    if (this.hasUnmeasuredSelectedChips(context.values)) {
      forceUpdate(this);
      return;
    }
    this.calculateChipOverflow(context);
  }
  calculateChipOverflow(context = this.getChipOverflowContext()) {
    if (!context) {
      return;
    }
    const { container, values } = context;
    if (!values.every((value) => this.chipWidths.has(value))) {
      return;
    }
    const clearButtonWidth = this.allowClear && this.clearButtonRef.current ? this.clearButtonRef.current.offsetWidth : 0;
    const available = container.clientWidth - this.triggerMinWidth - clearButtonWidth;
    if (this.canShowAllChips(values, available)) {
      this.applyOverflowState(null, []);
      return;
    }
    const { visible, hidden } = this.getOverflowChipValues(values, available);
    this.applyOverflowState(visible, hidden);
  }
  async waitForComponentReady(element) {
    const stencilComponent = element;
    if (typeof stencilComponent?.componentOnReady === "function") {
      await stencilComponent.componentOnReady();
    }
  }
  waitForNextFrame() {
    return new Promise((resolve) => requestAnimationFrameNoNgZone(() => resolve()));
  }
  async waitForChipLayout(elements) {
    await Promise.all(elements.map((element) => this.waitForComponentReady(element)));
    await this.waitForNextFrame();
  }
  async measureSelectedChipWidths(items) {
    const elements = items.map((item) => this.chipElementRefs.get(item.value.toString()));
    await this.waitForChipLayout(elements);
    let measuredAny = false;
    for (const item of items) {
      const value = item.value.toString();
      const element = this.chipElementRefs.get(value);
      if (element && element.offsetWidth > 0) {
        this.chipWidths.set(value, element.offsetWidth);
        measuredAny = true;
      }
    }
    return measuredAny;
  }
  async measureOverflowChipWidth() {
    if (this.hiddenChipValues.length === 0 || this.overflowChipWidth > 0) {
      return;
    }
    const overflowElement = await this.overflowChipRef.waitForCurrent();
    await this.waitForChipLayout([overflowElement]);
    if (overflowElement.offsetWidth > 0) {
      this.overflowChipWidth = overflowElement.offsetWidth;
    }
  }
  async componentDidRender() {
    if (!this.isMultipleMode || this.shouldDisplayAllChip()) {
      this.applyOverflowState(null, []);
      return;
    }
    const selected = this.selectedItems;
    if (selected.length === 0) {
      this.applyOverflowState(null, []);
      return;
    }
    const unmeasured = selected.filter((item) => !this.chipWidths.has(item.value.toString()));
    if (unmeasured.length > 0) {
      const measuredAny = await this.measureSelectedChipWidths(unmeasured);
      if (measuredAny) {
        this.calculateChipOverflow();
        forceUpdate(this);
      }
      return;
    }
    await this.measureOverflowChipWidth();
    this.calculateChipOverflow();
  }
  onValidationChange({ isInvalid, isInvalidByRequired, isValid, isInfo, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isValid = isValid;
    this.isWarning = isWarning;
    this.isInfo = isInfo;
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /**
   * Returns the native input element used in the component.
   */
  getNativeInputElement() {
    if (this.inputElement) {
      return Promise.resolve(this.inputElement);
    } else {
      return Promise.reject(new Error("Input element not found"));
    }
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    const inputElement = await this.getNativeInputElement();
    if (inputElement) {
      inputElement.focus();
    }
  }
  /**
   * Check if the input field has been touched.
   * @internal
   * */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  getControllingAriaElement() {
    return this.inputRef.waitForCurrent();
  }
  isAriaActiveDescendantActive() {
    return this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return "proxy-listbox-item";
  }
  componentWillRender() {
    if (this.addItemElement) {
      this.addItemElement.hidden = !this.isAddItemVisible();
      this.addItemElement.label = this.inputFilterText;
    }
    this.updateAriaProxyListbox();
    if (this.isMultipleMode && !this.shouldDisplayAllChip()) {
      const selected = this.selectedItems;
      const allMeasured = selected.length > 0 && selected.every((item) => this.chipWidths.has(item.value.toString()));
      if (allMeasured) {
        this.calculateChipOverflow();
      }
    }
  }
  updateAriaProxyListbox() {
    const ariaActiveDescendantHelper = this.hostElement.shadowRoot?.getElementById(`${this.hostId}-proxy-listbox`);
    if (this.focusableItems.length === 0) {
      return;
    }
    updateFocusProxyList(ariaActiveDescendantHelper, this.focusableItems, (item, proxyElement) => {
      const isSelectItem = item.tagName === "IX-SELECT-ITEM";
      const ariaLabel = item.getAttribute("aria-label") || item.label || (isSelectItem ? item.value : "") || "";
      const selected = isSelectItem ? item.selected : item.checked;
      proxyElement.role = "option";
      proxyElement.innerText = item.label ?? "";
      proxyElement.ariaLabel = ariaLabel;
      proxyElement.ariaSelected = a11yBoolean(!!selected);
      proxyElement.addEventListener("click", (event) => {
        event.stopPropagation();
        event.preventDefault();
        item.click();
      });
      if (this.addItemElement === item) {
        proxyElement.ariaLabel = `${this.ariaLabelAddItem}: ${item.label}`;
      }
      item.ariaHidden = "true";
    });
  }
  render() {
    return h(Host, { key: "abf6cea59c8cb1ec47717a11ba0e69b2c4bdc3a4", id: this.getHostElementId(), class: {
      readonly: this.readonly,
      disabled: this.disabled,
      "show-focus-outline": this.hasInputFocus && !this.dropdownItemsVisualFocused
    }, tabIndex: this.disabled ? -1 : 0 }, h("ix-field-wrapper", { key: "3fc16ad7e1a7b813588745a2aca786c6f16907c7", required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "c45495d1ec72aeff393610893693a1d9af3ee118", class: {
      select: true,
      disabled: this.disabled,
      readonly: this.readonly
    }, ref: (ref) => {
      this.dropdownAnchorRef(ref);
      this.dropdownWrapperRef(ref);
    } }, h("div", { key: "f4cef6d471ebd1c752a1ddab53b046dd9d6ebba5", class: "input-container" }, h("div", { key: "695972df9d98bea96c4b8ec8873e32a525b82a97", class: "chips", ref: this.chipsContainerRef }, this.isMultipleMode && this.renderMultipleModeChips(), h("div", { key: "314373ea0a0bed039ab0ac9733c40f585cca2eb0", class: "trigger" }, h("input", { key: "2a6784e154bd23640255756453892651007a5574", id: `${this.hostId}-input`, role: "combobox", "aria-controls": `${this.hostId}-proxy-listbox`, "aria-expanded": a11yBoolean(this.dropdownShow), "aria-autocomplete": "list", "aria-disabled": a11yBoolean(this.disabled), autocomplete: "off", "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, required: this.required, type: "text", class: {
      "allow-clear": this.allowClear && !!this.selectedLabels?.length
    }, placeholder: this.placeholderValue(), value: this.inputValue ?? "", ref: (ref) => {
      this.inputElement = ref;
      this.inputRef(ref);
    }, onFocus: () => this.onInputFocus(), onBlur: (e) => this.onInputBlur(e), onInput: () => this.setItemFilter() }), this.allowClear && !this.disabled && !this.readonly && (this.selectedLabels?.length || this.inputFilterText) ? h("ix-icon-button", { key: "clear", class: "clear", icon: iconClear, variant: "subtle-tertiary", oval: true, size: "16", ref: this.clearButtonRef, onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.clear();
    }, "aria-label": this.ariaLabelClearIconButton }) : null, this.disabled || this.readonly ? null : h("ix-icon-button", { "aria-label": this.dropdownShow ? "Close select dropdown" : "Open select dropdown", "aria-hidden": "true", tabindex: -1, ref: (ref) => {
      if (!ref) {
        return;
      }
      const element = ref;
      element.tabIndex = -1;
      element.ariaHidden = "true";
    }, "data-select-dropdown": true, key: "dropdown", class: { "dropdown-visible": this.dropdownShow }, icon: this.dropdownShow ? iconChevronUpSmall : iconChevronDownSmall, variant: "subtle-tertiary" })))))), h("ix-dropdown", { key: "8513692ee102ef011eb69db2548a5360afb089f8", id: `${this.hostId}-listbox`, keyboardActivationKeys: ["ArrowUp", "ArrowDown"], keyboardItemTriggerKeys: ["Enter"], disableFocusTrap: true, focusHost: this.hostElement, ref: this.dropdownRef, show: this.dropdownShow, closeBehavior: this.isMultipleMode ? "outside" : "both", hidden: this.disabled || this.readonly, anchor: this.dropdownAnchorRef.waitForCurrent(), trigger: this.dropdownWrapperRef.waitForCurrent(), onShowChange: (event) => {
      if ((this.disabled || this.readonly) && event.detail) {
        event.preventDefault();
      }
    }, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", enableTopLayer: this.enableTopLayer, overwriteDropdownStyle: async () => {
      const styleOverwrites = {};
      const minWidth = this.hostElement.shadowRoot?.querySelector(".select")?.getBoundingClientRect().width;
      if (minWidth) {
        styleOverwrites.minWidth = `${minWidth}px`;
      }
      if (this.dropdownWidth) {
        styleOverwrites.width = `min(${this.dropdownWidth}, 100%)`;
      }
      if (this.dropdownMaxWidth) {
        styleOverwrites.maxWidth = `min(${this.dropdownMaxWidth}, 100%)`;
      }
      return styleOverwrites;
    }, onClick: (event) => {
      const target = event.target;
      const isTargetElement = target.tagName === "IX-DROPDOWN-ITEM" || target.tagName === "IX-SELECT-ITEM";
      if (!isTargetElement) {
        return;
      }
      const activeVisualFocusedItem = this.getActiveVisualFocusedItem();
      const item = activeVisualFocusedItem ?? target;
      if (!item) {
        return;
      }
      event.stopPropagation();
      if (!item.classList.contains("add-item")) {
        this.itemClick(item.value);
        this.setItemFilter();
      }
      if (this.isSingleMode) {
        this.dropdownShow = false;
      }
    } }, h("div", { key: "5af656133c26e7007fb23cd9ec1592ac48a5fc97", "aria-hidden": "true", class: {
      "select-list-header": true,
      hidden: this.hideListHeader || this.isDropdownEmpty
    }, title: this.i18nSelectListHeader, onClick: (e) => e.preventDefault() }, this.i18nSelectListHeader), h("slot", { key: "5c46ae494231b55b4ae91d374e88906f0b4c4c77", onSlotchange: () => {
      this.updateSelection();
    } }), h(FocusProxy, { key: "a079ab815c6e2a0782ad599e87b6501112e7f791", hostId: this.hostId, otherProps: {
      "aria-hidden": a11yBoolean(!this.dropdownShow),
      "aria-multiselectable": a11yBoolean(this.isMultipleMode),
      hidden: this.disabled || this.readonly
    } }), this.isDropdownEmpty && !this.editable && h("div", { key: "340e633426815cc8c8a3e78ea03715eb632b58ff", class: "select-list-header" }, this.i18nNoMatches)), this.isMultipleMode && !this.shouldDisplayAllChip() && this.hiddenChipValues.length > 0 && this.renderOverflowDropdown());
  }
  static get delegatesFocus() {
    return true;
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "watchValue": 0
      }],
      "disabled": [{
        "watchDisabledReadonly": 0
      }],
      "readonly": [{
        "watchDisabledReadonly": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Select.prototype, "onValidationChange", null);
Select.style = selectCss();
export {
  Select as ix_select
};
