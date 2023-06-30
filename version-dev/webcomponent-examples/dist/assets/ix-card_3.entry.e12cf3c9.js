import { r as registerInstance, h, H as Host, g as getElement } from "./index.fceb1a46.js";
const cardCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;align-self:flex-start;overflow:hidden;width:20rem;border:1px solid var(--ix-card-border-color, var(--theme-color-soft-bdr));border-radius:var(--theme-default-border-radius)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .card-content{display:block;position:relative;flex-shrink:0;flex-grow:1;width:100%;padding:1rem 1rem;height:calc(100% - 2rem);background-color:var(--ix-card-background, transparent);border-top-left-radius:var(--theme-default-border-radius);border-top-right-radius:var(--theme-default-border-radius)}:host .card-footer{display:flex;position:relative;width:100%}:host(.card-insight){--ix-card-background:transparent;--ix-card-border-color:var(--theme-color-soft-bdr)}:host(.card-notification){--ix-card-background:var(--theme-color-component-1)}:host(.card-alarm){--ix-card-background:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}:host(.card-critical){--ix-card-background:var(--theme-color-critical);color:var(--theme-color-critical--contrast)}:host(.card-warning){--ix-card-background:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}:host(.card-success){--ix-card-background:var(--theme-color-success);color:var(--theme-color-success--contrast)}:host(.card-info){--ix-card-background:var(--theme-color-info);color:var(--theme-color-info--contrast)}:host(.card-neutral){--ix-card-background:var(--theme-color-neutral);color:var(--theme-color-neutral--contrast)}:host(:not(.card-insight)){--ix-card-border-color:transparent}";
const Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "insight";
  }
  render() {
    return h(Host, { class: `card-${this.variant}` }, h("div", { class: "card-content" }, h("slot", null)), h("div", { class: "card-footer" }, h("slot", { name: "card-accordion" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Card.style = cardCss;
const cardContentCss = ":host{display:flex;position:relative;flex-direction:column;align-items:flex-start;gap:0.5rem;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}";
const CardContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
CardContent.style = cardContentCss;
const VariantsMapping = {
  "x-small": "text-xs",
  small: "text-s",
  caption: "text-caption",
  "caption-single": "text-caption-single",
  default: "text-default",
  "default-single": "text-default-single",
  large: "text-l",
  "large-single": "text-l-single",
  h2: "text-h2",
  "display-large": "text-xl",
  "default-title": "text-default-title",
  "default-title-single": "text-default-title-single"
};
const typographyCss = ":host .text-xs{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}:host .text-s{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}:host .text-caption{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host .text-caption-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}:host .text-default{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host .text-default-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}:host .text-default-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host .text-default-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}:host .text-l{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}:host .text-l-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}:host .text-l-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host .text-l-title-single{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}:host .text-h2{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}:host .text-xl{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}";
const IxTypography = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "default";
    this.color = void 0;
  }
  render() {
    const typographyClass = {
      [VariantsMapping[this.variant]]: true
    };
    const fontColor = this.color !== void 0 ? `var(--theme-color-${this.color}-text)` : "inherit";
    return h("div", { class: typographyClass, style: {
      color: fontColor
    } }, h("slot", null));
  }
};
IxTypography.style = typographyCss;
export {
  Card as ix_card,
  CardContent as ix_card_content,
  IxTypography as ix_typography
};
