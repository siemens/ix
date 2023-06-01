'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const floatingUi_dom_esm = require('./floating-ui.dom.esm-5dc15e2f.js');
const alignment = require('./alignment-51e20690.js');

const validationTooltipCss = ".text-xs.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-validation-tooltip{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-validation-tooltip{color:var(--theme-color-primary)}.sc-ix-validation-tooltip-h{display:inline-block;position:relative}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip{background-color:var(--theme-tootlip--background);color:var(--theme-tooltip--color);padding:5px 10px;border-radius:4px;font-size:13px;border:1px solid var(--theme-tooltip--border-color);box-shadow:0 0 2px 0 rgba(0, 0, 40, 0.1), 0 4px 8px 0 rgba(0, 0, 40, 0.1), 0 12px 18px 0 rgba(0, 0, 40, 0.1)}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip,.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{position:absolute;width:8px;height:8px;background:inherit}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip{visibility:hidden}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip #arrow.sc-ix-validation-tooltip::before{visibility:visible;content:\"\";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip{bottom:-5px}.sc-ix-validation-tooltip-h .validation-tooltip.sc-ix-validation-tooltip>#arrow.sc-ix-validation-tooltip::before{border-right:1px solid var(--theme-tooltip--border-color);border-bottom:1px solid var(--theme-tooltip--border-color)}";

const ValidationTooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onSubmitBind = this.onSubmit.bind(this);
    this.onInputFocusBind = this.onInputFocus.bind(this);
    this.message = undefined;
    this.placement = 'top';
    this.isInputValid = true;
    this.tooltipPosition = undefined;
    this.arrowPosition = undefined;
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
  destoryAutoUpdate() {
    this.tooltipElement.style.display = 'none';
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }
  applyTooltipPosition() {
    this.tooltipElement.style.display = 'block';
    let positionConfig = {
      strategy: 'fixed',
      middleware: [
        floatingUi_dom_esm.inline(),
        floatingUi_dom_esm.shift(),
        floatingUi_dom_esm.offset({
          mainAxis: 8,
        }),
      ],
    };
    if (this.placement.includes('auto')) {
      positionConfig.middleware.push(floatingUi_dom_esm.autoPlacement({
        alignment: alignment.getAlignment(this.placement),
      }));
    }
    else {
      positionConfig.placement = this.placement;
    }
    this.autoUpdateCleanup = floatingUi_dom_esm.autoUpdate(this.inputElement, this.tooltipElement, async () => {
      positionConfig.middleware = [
        ...positionConfig.middleware,
        floatingUi_dom_esm.arrow({
          element: this.arrow,
        }),
      ];
      const computeResponse = await floatingUi_dom_esm.computePosition(this.inputElement, this.tooltipElement, positionConfig);
      if (computeResponse.middlewareData.arrow) {
        const { x, y } = computeResponse.middlewareData.arrow;
        this.arrowPosition = {
          x,
          y,
        };
        Object.assign(this.arrow.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
        });
      }
      this.tooltipPosition = {
        x: computeResponse.x,
        y: computeResponse.y,
      };
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });
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
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destoryAutoUpdate();
    this.formElement.removeEventListener('submit', this.onSubmitBind);
    this.inputElement.removeEventListener('focus', this.onInputFocusBind);
  }
  validationChanged() {
    if (!this.isInputValid) {
      this.applyTooltipPosition();
    }
    else {
      this.destoryAutoUpdate();
    }
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, null, index.h("slot", null), index.h("div", { role: "tooltip", style: {
        display: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        transform: `translate(${Math.round(((_a = this.tooltipPosition) === null || _a === void 0 ? void 0 : _a.x) || 0)}px,${Math.round(((_b = this.tooltipPosition) === null || _b === void 0 ? void 0 : _b.y) || 0)}px)`,
      }, class: "validation-tooltip text-default" }, this.message, index.h("slot", { name: "tooltip-message" }), index.h("div", { id: "arrow" }))));
  }
  get hostElement() { return index.getElement(this); }
  static get watchers() { return {
    "isInputValid": ["validationChanged"]
  }; }
};
ValidationTooltip.style = validationTooltipCss;

exports.ix_validation_tooltip = ValidationTooltip;
