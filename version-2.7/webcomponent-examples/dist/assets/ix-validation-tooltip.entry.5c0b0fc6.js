import { r as registerInstance, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { f as flip, a as autoUpdate, i as inline, s as shift, o as offset, b as arrow, c as computePosition } from "./floating-ui.dom.esm-d4ad786a.60f1e3fd.js";
const validationTooltipCss = '.text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a{color:var(--theme-color-primary)}:host{display:inline-block;position:relative;width:100%}:host .validation-tooltip{background-color:var(--theme-tootlip--background);color:var(--theme-tooltip--color);padding:5px 10px;border-radius:4px;font-size:13px;border:1px solid var(--theme-tooltip--border-color);box-shadow:0 0 2px 0 rgba(0, 0, 40, 0.1), 0 4px 8px 0 rgba(0, 0, 40, 0.1), 0 12px 18px 0 rgba(0, 0, 40, 0.1)}:host .validation-tooltip #arrow,:host .validation-tooltip #arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host .validation-tooltip #arrow{visibility:hidden}:host .validation-tooltip #arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}:host .validation-tooltip>#arrow{bottom:-5px}:host .validation-tooltip>#arrow::before{border-right:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}';
const IxValidationTooltipStyle0 = validationTooltipCss;
const ValidationTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
    this.message = void 0;
    this.placement = "top";
    this.suppressAutomaticPlacement = false;
    this.isInputValid = true;
    this.tooltipPosition = void 0;
    this.arrowPosition = void 0;
  }
  get arrow() {
    return this.hostElement.shadowRoot.querySelector("#arrow");
  }
  get inputElement() {
    return this.hostElement.querySelector("input");
  }
  get formElement() {
    var _a;
    return (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.form;
  }
  get tooltipElement() {
    return this.hostElement.shadowRoot.querySelector(".validation-tooltip");
  }
  destroyAutoUpdate() {
    if (this.tooltipElement) {
      this.tooltipElement.style.display = "none";
    }
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  applyTooltipPosition() {
    this.tooltipElement.style.display = "block";
    let positionConfig = {
      strategy: "fixed",
      middleware: [
        inline(),
        shift(),
        offset({
          mainAxis: 8
        })
      ]
    };
    if (!positionConfig.middleware) {
      positionConfig.middleware = [];
    }
    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware.push(flip({ fallbackStrategy: "initialPlacement" }));
    }
    positionConfig.placement = this.placement;
    this.autoUpdateCleanup = autoUpdate(this.inputElement, this.tooltipElement, async () => {
      positionConfig.middleware = [
        ...positionConfig.middleware,
        arrow({
          element: this.arrow
        })
      ];
      const computeResponse = await computePosition(this.inputElement, this.tooltipElement, positionConfig);
      if (computeResponse.middlewareData.arrow) {
        const { x, y } = computeResponse.middlewareData.arrow;
        this.arrowPosition = {
          x,
          y
        };
        Object.assign(this.arrow.style, {
          left: x != null ? `${x}px` : "",
          top: y != null ? `${y}px` : ""
        });
      }
      this.tooltipPosition = {
        x: computeResponse.x,
        y: computeResponse.y
      };
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  componentDidLoad() {
    if (!this.inputElement) {
      throw Error("Validation tooltip is only working with an direct input child.");
    }
    if (!this.formElement) {
      throw Error("Validation tooltip is only working with an form element.");
    }
    this.formElement.addEventListener("submit", this.onSubmitBind);
    this.inputElement.addEventListener("focus", this.onInputFocusBind);
    this.observer = new MutationObserver(() => {
      if (this.inputElement.classList.contains("is-invalid")) {
        this.isInputValid = false;
        this.validationChanged();
      }
    });
    this.observer.observe(this.inputElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ["class"]
    });
  }
  onInputFocus() {
    this.isInputValid = true;
  }
  onSubmit() {
    if (this.formElement.classList.contains("needs-validation")) {
      this.isInputValid = this.inputElement.validity.valid;
    }
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyAutoUpdate();
    (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("submit", this.onSubmitBind);
    (_c = this.inputElement) === null || _c === void 0 ? void 0 : _c.removeEventListener("focus", this.onInputFocusBind);
  }
  validationChanged() {
    if (!this.isInputValid) {
      this.applyTooltipPosition();
    } else {
      this.destroyAutoUpdate();
    }
  }
  render() {
    var _a, _b;
    return h(Host, { key: "fce95b6a9df85da12c742a92ae5af48c15f5a04b" }, h("slot", { key: "c70130b23d312a884677e0aea4cf54158ebb36e4" }), h("div", { key: "551b30175043178ead3068637b7525fcf2378623", role: "tooltip", style: {
      display: "none",
      position: "fixed",
      top: "0",
      left: "0",
      transform: `translate(${Math.round(((_a = this.tooltipPosition) === null || _a === void 0 ? void 0 : _a.x) || 0)}px,${Math.round(((_b = this.tooltipPosition) === null || _b === void 0 ? void 0 : _b.y) || 0)}px)`
    }, class: "validation-tooltip text-default" }, this.message, h("slot", { key: "f9af434ac0ae7710dccca7ffc6fb6a6b71546fc3", name: "tooltip-message" }), h("div", { key: "66da811f499a7a995149e3575ef95b8eb5eac8e7", id: "arrow" })));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isInputValid": ["validationChanged"]
    };
  }
};
ValidationTooltip.style = IxValidationTooltipStyle0;
export {
  ValidationTooltip as ix_validation_tooltip
};
