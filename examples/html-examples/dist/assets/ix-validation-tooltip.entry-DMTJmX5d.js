import { r as registerInstance, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
import { i as inline, s as shift, o as offset, f as flip, a as autoUpdate, b as arrow, c as computePosition } from "./floating-ui.dom-CAqtPJ4--DFASu3km.js";
const validationTooltipCss = '.text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:inline-block;position:relative;width:100%;z-index:var(--theme-z-index-tooltip)}:host .validation-tooltip{background-color:var(--theme-tooltip--background);color:var(--theme-tooltip--color);padding:5px 10px;border-radius:4px;font-size:13px;border:1px solid var(--theme-tooltip--border-color);box-shadow:0 0 2px 0 rgba(0, 0, 40, 0.1), 0 4px 8px 0 rgba(0, 0, 40, 0.1), 0 12px 18px 0 rgba(0, 0, 40, 0.1)}:host .validation-tooltip #arrow,:host .validation-tooltip #arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host .validation-tooltip #arrow{visibility:hidden}:host .validation-tooltip #arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tooltip--background)}:host .validation-tooltip>#arrow{bottom:-5px}:host .validation-tooltip>#arrow::before{border-right:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}';
const ValidationTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.placement = "top";
    this.suppressAutomaticPlacement = false;
    this.isInputValid = true;
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
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
    var _a, _b, _c, _d;
    return h(Host, { key: "3bbb1884ba4d874e0187b0a649f8ffa276cd998f" }, h("slot", { key: "00503ee8eee8224d3cea5e94e1a73cd40ee4949e" }), h("div", { key: "27f89d9bf7edefd71ce731edf0e0a491ab3e2814", role: "tooltip", style: {
      display: "none",
      position: "fixed",
      top: "0",
      left: "0",
      transform: `translate(${Math.round((_b = (_a = this.tooltipPosition) === null || _a === void 0 ? void 0 : _a.x) !== null && _b !== void 0 ? _b : 0)}px,${Math.round((_d = (_c = this.tooltipPosition) === null || _c === void 0 ? void 0 : _c.y) !== null && _d !== void 0 ? _d : 0)}px)`
    }, class: "validation-tooltip text-default" }, this.message, h("slot", { key: "4b7d8a68f3e7efd19b166beea935210295afb6f6", name: "tooltip-message" }), h("div", { key: "3ab710662e09333589b25dd49c128b5cd1229843", id: "arrow" })));
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
ValidationTooltip.style = validationTooltipCss;
export {
  ValidationTooltip as ix_validation_tooltip
};
