import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createPopper } from './popper.js';

const validationTooltipCss = ".text-xs.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-validation-tooltip{color:var(--theme-color-primary)}.sc-ix-validation-tooltip-h{display:block}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip{background-color:var(--theme-tootlip--background);color:white;padding:5px 10px;border-radius:4px;font-size:13px;border:1px solid var(--theme-tooltip--border-color)}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip,.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{position:absolute;width:8px;height:8px;background:inherit}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip{visibility:hidden}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{visibility:visible;content:\"\";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=top].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{bottom:-5px}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=top].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-right:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=bottom].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{top:-5px}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=bottom].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-left:1px solid var(--theme-tooltip--border-color);border-top:1px solid var(--theme-tooltip--border-color)}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=left].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{right:-5px}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=left].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-right:1px solid var(--theme-tooltip--border-color);border-top:1px solid var(--theme-tooltip--border-color)}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=right].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{left:-5px}.sc-ix-validation-tooltip-h .validation-tooltip[data-popper-placement^=right].sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-left:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}";

const ValidationTooltip = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * Placement of the tooltip
     */
    this.placement = 'top';
    this.isInputValid = true;
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
  }
  get arrow() {
    return this.hostElement.querySelector('#arrow');
  }
  get inputElement() {
    return this.hostElement.querySelector('input');
  }
  get formElement() {
    return this.inputElement.form;
  }
  get tooltipElement() {
    return this.hostElement.querySelector('.validation-tooltip');
  }
  componentDidLoad() {
    if (!this.inputElement) {
      throw Error('Validation tooltip is only working with an direct input child.');
    }
    if (!this.formElement) {
      throw Error('Validation tooltip is only working with an form element.');
    }
    this.formElement.addEventListener('submit', this.onSubmitBind);
    this.inputElement.addEventListener('focus', this.onInputFocusBind);
    this.observer = new MutationObserver(() => {
      if (this.inputElement.classList.contains('is-invalid')) {
        this.isInputValid = false;
        this.validationChanged();
      }
    });
    this.observer.observe(this.inputElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
    });
  }
  onInputFocus() {
    this.isInputValid = true;
  }
  onSubmit() {
    if (this.formElement.classList.contains('needs-validation')) {
      this.isInputValid = this.inputElement.validity.valid;
    }
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.popper) === null || _b === void 0 ? void 0 : _b.destroy();
    this.formElement.removeEventListener('submit', this.onSubmitBind);
    this.inputElement.removeEventListener('focus', this.onInputFocusBind);
  }
  validationChanged() {
    if (!this.isInputValid) {
      this.tooltipElement.style.display = 'block';
      this.popper = createPopper(this.inputElement, this.tooltipElement, {
        placement: this.placement,
        strategy: 'absolute',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'arrow',
            options: {
              element: this.arrow,
            },
          },
        ],
      });
    }
    else {
      this.tooltipElement.style.display = 'none';
      this.popper.destroy();
    }
  }
  render() {
    return (h(Host, null, h("slot", null), h("div", { role: "tooltip", style: { display: 'none' }, class: "validation-tooltip text-default" }, this.message, h("slot", { name: "tooltip-message" }), h("div", { id: "arrow", "data-popper-arrow": true }))));
  }
  get hostElement() { return this; }
  static get watchers() { return {
    "isInputValid": ["validationChanged"]
  }; }
  static get style() { return validationTooltipCss; }
}, [6, "ix-validation-tooltip", {
    "message": [1],
    "placement": [1],
    "isInputValid": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-validation-tooltip"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-validation-tooltip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ValidationTooltip);
      }
      break;
  } });
}

const IxValidationTooltip = ValidationTooltip;
const defineCustomElement = defineCustomElement$1;

export { IxValidationTooltip, defineCustomElement };
