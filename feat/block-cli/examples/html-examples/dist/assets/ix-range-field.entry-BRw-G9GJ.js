import { M as Mixin, a as registerInstance, g as getElement, h, H as Host } from "./global-DX2OdaCL.js";
import { c as iconArrowRight } from "./index-Cl7fhG1I-C77BCFLW.js";
import { i as isIxInputFieldComponent, a as isIxInputFieldWithPickerComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-Chfbghog-DFMCI9TH.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./focus-utilities-DnaItyVQ-Degzwldb.js";
import "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
const rangeFieldCss = () => `:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host{display:inline-flex;position:relative;gap:0.25rem}:host .range-delimiter{order:2;flex:0 0 auto;margin-top:0.25rem}:host .range-delimiter.has-label{margin-top:2rem}:host ::slotted(:first-child),:host ::slotted(:last-child){flex:1 1 0;min-width:0}:host ::slotted(:first-child){order:1}:host ::slotted(:last-child){order:3}:host ::slotted(.fallback-label-margin){margin-top:1.8rem}:host(.hide-arrow){gap:0.5rem}`;
const RangeField = class extends Mixin(...DefaultMixins) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * The type of the input range. If set to "time-range", the input range will be displayed as a time range.
   */
  type;
  /**
   * Hides the arrow icon between the two input fields. This can be used when the input range is used in a context where the arrow icon is not desired, such as in a form field with a custom label.
   */
  hideArrow = false;
  observeElements;
  hasLabel = false;
  elements;
  warnInDev(message, element) {
  }
  componentWillLoad() {
    this.observeElements = new MutationObserver(() => {
      this.validateRangeElements();
    });
    this.observeElements.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["label"]
    });
    this.validateRangeElements();
  }
  disconnectedCallback() {
    this.observeElements?.disconnect();
  }
  validateRangeElements() {
    if (!this.type) {
      throw new Error("Input range type is not specified.");
    }
    const elements = this.hostElement?.children;
    if (!elements) {
      return;
    }
    if (elements?.length !== 2) {
      throw new Error("Input range must have exactly two child elements.");
    }
    let validElements = false;
    if (this.type === "time-range") {
      validElements = Array.from(elements).every((element) => element.tagName.toLowerCase() === "ix-time-input");
    } else if (this.type === "date-range") {
      validElements = Array.from(elements).every((element) => element.tagName.toLowerCase() === "ix-date-input");
    } else if (this.type === "datetime-range") {
      validElements = Array.from(elements).every((element) => element.tagName.toLowerCase() === "ix-datetime-input");
    }
    if (!validElements) {
      throw new Error(`Input range elements are not valid for the specified type (type=${this.type}). Current elements: ${Array.from(elements).map((el) => el.tagName.toLowerCase()).join(", ")}`);
    }
    this.elements = Array.from(elements);
    this.hasLabel = this.elements.some((element) => !!element.label);
    if (!this.hasLabel) {
      return;
    }
    this.elements.forEach((element) => {
      if (!element.label) {
        element.classList.add("fallback-label-margin");
        return;
      }
      element.classList.remove("fallback-label-margin");
    });
  }
  async onValueChange(evt) {
    if (!this.elements) {
      return;
    }
    const [firstElement, secondElement] = this.elements;
    if (hasKeyboardMode()) {
      return;
    }
    if (!evt.detail || evt.target !== firstElement) {
      return;
    }
    if (!isIxInputFieldComponent(firstElement)) {
      this.warnInDev("First element is not an input field component.", firstElement);
      return;
    }
    if (!isIxInputFieldComponent(secondElement)) {
      this.warnInDev("Second element is not an input field component.", secondElement);
      return;
    }
    const input = await secondElement.getNativeInputElement();
    input?.focus();
    if (!isIxInputFieldWithPickerComponent(secondElement)) {
      this.warnInDev("Second element is not an input field with picker component.", secondElement);
      return;
    }
    requestAnimationFrameNoNgZone(() => secondElement.openPicker());
  }
  render() {
    return h(Host, { key: "9a7a7fe48f24b453a0ec97441a295ecdedce01bc", class: { "hide-arrow": this.hideArrow }, role: "group" }, !this.hideArrow && h("ix-icon", { key: "6e70058b9ed46a3d0d8a9d81db96a1449a94eb00", "aria-hidden": "true", class: {
      "range-delimiter": true,
      "has-label": this.hasLabel
    }, name: iconArrowRight }), h("slot", { key: "f700e47951e5a58c9232adb5a79fa01f42d369fa" }));
  }
};
RangeField.style = rangeFieldCss();
export {
  RangeField as ix_range_field
};
