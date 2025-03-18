import { r as registerInstance, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { B as BaseIconButton } from "./base-icon-button-bH_gbsvW.d71da72d.js";
import { g as getFallbackLabelFromIconName } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
import "./base-button-IZFEmS6o.c9ddc9e1.js";
const iconButtonCss = ":host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}*,*::after,*::before{box-sizing:border-box}::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){*{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}::-webkit-scrollbar{width:0.5rem;height:0.5rem}::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}::-webkit-scrollbar-corner{display:none}:host .btn-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-danger,:host .btn-danger.focus,:host .btn-danger:focus-visible{background-color:var(--theme-btn-danger--background);color:var(--theme-btn-danger--color);--ix-button-color:var(--theme-btn-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger--border-color);border-style:solid}:host .btn-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):active,:host .btn-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-danger--border-color--hover);background-color:var(--theme-btn-danger--background--hover);color:var(--theme-btn-danger--color--hover)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):active,:host .btn-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger--border-color--active);background-color:var(--theme-btn-danger--background--active);color:var(--theme-btn-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger.disabled,:host(.disabled) .btn-danger:disabled{pointer-events:none;border-color:var(--theme-btn-danger--border-color--disabled);background-color:var(--theme-btn-danger--background--disabled);color:var(--theme-btn-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger--color--disabled)}:host .btn-outline-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-danger,:host .btn-outline-danger.focus,:host .btn-outline-danger:focus-visible{background-color:var(--theme-btn-outline-danger--background);color:var(--theme-btn-outline-danger--color);--ix-button-color:var(--theme-btn-outline-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-danger--border-color);border-style:solid}:host .btn-outline-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):active,:host .btn-outline-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-danger--border-color--hover);background-color:var(--theme-btn-outline-danger--background--hover);color:var(--theme-btn-outline-danger--color--hover)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):active,:host .btn-outline-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-danger--border-color--active);background-color:var(--theme-btn-outline-danger--background--active);color:var(--theme-btn-outline-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-danger.disabled,:host(.disabled) .btn-outline-danger:disabled{pointer-events:none;border-color:var(--theme-btn-outline-danger--border-color--disabled);background-color:var(--theme-btn-outline-danger--background--disabled);color:var(--theme-btn-outline-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-danger--color--disabled)}:host .btn-invisible-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-danger,:host .btn-invisible-danger.focus,:host .btn-invisible-danger:focus-visible{background-color:var(--theme-btn-invisible-danger--background);color:var(--theme-btn-invisible-danger--color);--ix-button-color:var(--theme-btn-invisible-danger--color);border-color:transparent}:host .btn-invisible-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-danger--background--hover);color:var(--theme-btn-invisible-danger--color--hover)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):active,:host .btn-invisible-danger:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-danger--background--active);color:var(--theme-btn-invisible-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-danger.disabled,:host(.disabled) .btn-invisible-danger:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-danger--background--disabled);color:var(--theme-btn-invisible-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-danger--color--disabled)}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{display:inline-flex;justify-content:center;align-items:center}:host button{width:100%;height:100%;overflow:hidden;padding:0}:host button.btn-oval{border-radius:6.25rem}:host ix-icon{color:var(--ix-icon-button-color, currentColor);margin:0}:host ix-spinner{margin:0}:host(.btn-icon-12){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host(.btn-icon-16){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host(.btn-icon-32){height:2rem;width:2rem;min-width:2rem;min-height:2rem}";
const IconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "secondary";
    this.outline = false;
    this.ghost = false;
    this.oval = false;
    this.size = "24";
    this.disabled = false;
    this.type = "button";
    this.loading = false;
  }
  componentDidLoad() {
    if (this.type === "submit") {
      const submitButton = document.createElement("button");
      submitButton.style.display = "none";
      submitButton.type = "submit";
      submitButton.tabIndex = -1;
      this.hostElement.appendChild(submitButton);
      this.submitButtonElement = submitButton;
    }
  }
  dispatchFormEvents() {
    if (this.type === "submit" && this.submitButtonElement) {
      this.submitButtonElement.click();
    }
  }
  getIconSizeClass() {
    return {
      "btn-icon-12": this.size === "12",
      "btn-icon-16": this.size === "16",
      "btn-icon-32": this.size === "24" || !this.size
    };
  }
  render() {
    const baseButtonProps = {
      ariaAttributes: {
        "aria-label": this.a11yLabel ? this.a11yLabel : getFallbackLabelFromIconName(this.icon)
      },
      variant: this.variant,
      outline: this.outline,
      ghost: this.ghost,
      iconOnly: true,
      iconOval: this.oval,
      selected: false,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconColor: this.iconColor,
      iconSize: this.size,
      loading: this.loading,
      onClick: () => this.dispatchFormEvents(),
      type: this.type,
      extraClasses: this.getIconSizeClass()
    };
    return h(Host, { key: "6a8627c8e3e093bfb86d60748fcac8f7677b3463", class: Object.assign(Object.assign({}, this.getIconSizeClass()), { disabled: this.disabled || this.loading }) }, h(BaseIconButton, Object.assign({ key: "be439ea407b8c736e014775fe209d99cb6663631" }, baseButtonProps)));
  }
  get hostElement() {
    return getElement(this);
  }
};
IconButton.style = iconButtonCss;
const spinnerCss = ':host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.xx-small{width:0.75rem;height:0.75rem;min-width:0.75rem;min-height:0.75rem;max-width:0.75rem;max-height:0.75rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}.xx-small::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:1px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}.xx-small:not(.hide-track)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:1px solid var(--theme-color-ghost--hover)}.primary::after{border-color:var(--theme-color-dynamic)}.primary::before{border-color:var(--theme-color-ghost--hover)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.x-small{width:1.25rem;height:1.25rem;min-width:1.25rem;min-height:1.25rem;max-width:1.25rem;max-height:1.25rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}.x-small::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}.x-small:not(.hide-track)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}.primary::after{border-color:var(--theme-color-dynamic)}.primary::before{border-color:var(--theme-color-ghost--hover)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.small{width:1.5rem;height:1.5rem;min-width:1.5rem;min-height:1.5rem;max-width:1.5rem;max-height:1.5rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}.small::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}.small:not(.hide-track)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}.primary::after{border-color:var(--theme-color-dynamic)}.primary::before{border-color:var(--theme-color-ghost--hover)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.medium{width:2rem;height:2rem;min-width:2rem;min-height:2rem;max-width:2rem;max-height:2rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}.medium::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}.medium:not(.hide-track)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:2px solid var(--theme-color-ghost--hover)}.primary::after{border-color:var(--theme-color-dynamic)}.primary::before{border-color:var(--theme-color-ghost--hover)}:host{display:block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}.large{width:6rem;height:6rem;min-width:6rem;min-height:6rem;max-width:6rem;max-height:6rem;border-radius:100%;position:relative;animation:rotate 2s linear infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes clipMask{0%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}12.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)}25%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)}37.5%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)}50%{clip-path:polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)}62.5%{clip-path:polygon(50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 0)}75%{clip-path:polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 0 100%, 0 0)}87.5%{clip-path:polygon(50% 50%, 0 100%, 0 100%, 0 100%, 0 100%, 0 0)}100%{clip-path:polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)}}.large::after{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--ix-button-color, var(--theme-color-soft-text));animation:clipMask 3s linear infinite}.large:not(.hide-track)::before{content:"";box-sizing:border-box;position:absolute;inset:8.33%;border-radius:100%;border:4px solid var(--theme-color-ghost--hover)}.primary::after{border-color:var(--theme-color-dynamic)}.primary::before{border-color:var(--theme-color-ghost--hover)}';
const Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "secondary";
    this.size = "medium";
    this.hideTrack = false;
  }
  render() {
    return h(Host, { key: "15221afa9c3c12da7ec6ac08dc1e3ce668a488d0" }, h("div", { key: "de8fd99101c4ff06e5500aee38e91345e94d68ac", class: {
      primary: this.variant === "primary",
      [this.size]: true,
      "hide-track": this.hideTrack
    } }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Spinner.style = spinnerCss;
export {
  IconButton as ix_icon_button,
  Spinner as ix_spinner
};
