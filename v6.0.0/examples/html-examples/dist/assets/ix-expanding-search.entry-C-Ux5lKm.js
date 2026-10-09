import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { D as iconClear, E as iconSearch } from "./index-BeX6RWvV-CXzUIwMU.js";
const expandingSearchCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-color-background-4);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--focus:var(--si-sys-color-background-4);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--focus:var(--si-sys-color-background-4);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning:var(--si-sys-color-border-warning);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-color-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-color-border-4);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-error--background:var(--si-sys-color-background-1);--ix-input-error--border-color:var(--si-sys-color-border-danger);--ix-input-error-icon--color:var(--si-sys-color-text-danger);--ix-input-extra--background--active:var(--si-sys-color-background-4);--ix-input-extra--background--hover:var(--si-sys-color-background-4);--ix-input-gripper--color:var(--si-sys-color-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-color-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-color-text-disabled);--ix-input-hint--color:var(--si-sys-color-text-secondary);--ix-input-search-icon--color:var(--si-sys-color-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-color-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-color-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-color-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-color-text-primary);--ix-input-select-icon--color--active:var(--si-sys-color-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-color-text-primary);--ix-input-unit--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-right:calc(     var(--si-sys-sizing-spacing-x-10) * -1   );--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(       var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)     )     calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:calc(     var(--si-sys-sizing-size-100) + 2 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}:host{--ix-expanding-search-button-search--outline-color--focus:var(     --focus--border-color   );--ix-expanding-search-button--border--active:var(--si-sys-sizing-border-width-default)     solid var(--si-sys-color-border-2)}:host{--ix-expanding-search-input-container--transition-duration:var(     --theme-medium-time   );--ix-expanding-search-button--transition-duration:var(--theme-default-time);--ix-expanding-search--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-expanding-search--container-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-80) + var(--si-sys-sizing-border-width-default)   );--ix-expanding-search--height:var(--ix-input--min-height);--ix-expanding-search-collapsed--width:var(--si-sys-sizing-spacing-x-80);--ix-expanding-search-button-search--max-width:var(--si-sys-sizing-size-80);--ix-expanding-search-button-search--max-height:var(--si-sys-sizing-size-80);--ix-expanding-search-button-search-expanded--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-expanding-search-button-search-active--width:var(--si-sys-sizing-size-80);--ix-expanding-search-button-search-active--height:var(--si-sys-sizing-size-80);--ix-expanding-search-button-clear--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-expanding-search-input--padding-left:var(--si-sys-sizing-spacing-x-90);--ix-expanding-search-input--padding-right:var(--si-sys-sizing-spacing-x-100);--ix-expanding-search--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-flex;width:auto;height:var(--ix-expanding-search--height);align-items:center;justify-content:space-between;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-container{transition:all var(--ix-expanding-search-input-container--transition-duration) ease-in-out}:host input{color:var(--ix-input--color);border-radius:var(--ix-input--border-radius);height:var(--ix-input--min-height);min-height:var(--ix-input--min-height);min-width:var(--ix-input--min-height);background-color:var(--ix-input--background);border:solid var(--ix-input--border-width) var(--ix-input--border-color);padding:var(--ix-input--padding)}:host input{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host input::-moz-placeholder{color:var(--ix-input-hint--color)}:host input::placeholder{color:var(--ix-input-hint--color)}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover);cursor:auto}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover);cursor:auto}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host input:focus-visible{color:var(--ix-input--color)}:host input[type=number]{text-align:right}:host input[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}:host input.readonly,:host input[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host input:-moz-read-only{outline:none !important;border-color:var(--ix-input--border-color--readonly);cursor:default !important}:host input:read-only,:host input[readonly],:host input[readOnly],:host input.readonly{outline:none !important;border-color:var(--ix-input--border-color--readonly);cursor:default !important}:host input:read-only::-moz-placeholder,:host input[readonly]::-moz-placeholder,:host input[readOnly]::-moz-placeholder,:host input.readonly::-moz-placeholder{color:transparent}:host input:-moz-read-only::placeholder{color:transparent}:host input:read-only::placeholder,:host input[readonly]::placeholder,:host input[readOnly]::placeholder,:host input.readonly::placeholder{color:transparent}:host input:disabled,:host input.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--ix-input--color--disabled);border-color:var(--ix-input--border-color--disabled)}:host input:disabled::-moz-placeholder,:host input.disabled::-moz-placeholder{color:transparent}:host input:disabled::placeholder,:host input.disabled::placeholder{color:transparent}:host input{cursor:auto !important;width:100%}:host .expanded{width:var(--ix-expanding-search--container-width)}:host .expanded.fullWidth{width:100%}:host .collapsed{width:var(--ix-expanding-search-collapsed--width);border:none}:host{}:host .btn-search-icon{align-self:center;margin:auto;position:relative}:host .btn-search{display:flex;max-width:var(--ix-expanding-search-button-search--max-width);max-height:var(--ix-expanding-search-button-search--max-height);border-radius:var(--ix-expanding-search--border-radius);transition:all var(--ix-expanding-search-button--transition-duration) ease-in-out;z-index:1;align-items:center;position:relative;border:none}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):hover,:host .btn-search:not(.disabled):not(:disabled).hover{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):active,:host .btn-search:not(.disabled):not(:disabled).active{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:none}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:var(--ix-expanding-search-button-search--outline-color--focus);outline-width:var(--ix-expanding-search--outline-width--focus);outline-style:solid}:host .btn-search.btn-search--expanded{margin-left:var(--ix-expanding-search-button-search-expanded--margin-left);pointer-events:none}:host .btn-search:active{width:var(--ix-expanding-search-button-search-active--width);height:var(--ix-expanding-search-button-search-active--height);border-radius:var(--ix-expanding-search--border-radius);border:var(--ix-expanding-search-button--border--active) !important}:host{}:host .input-container{display:flex;position:absolute;align-items:center;flex-wrap:nowrap}:host .btn-clear{position:absolute;border-radius:var(--ix-expanding-search--border-radius);right:0px;margin-right:var(--ix-expanding-search-button-clear--margin-right)}:host .input{padding-left:var(--ix-expanding-search-input--padding-left) !important;padding-right:var(--ix-expanding-search-input--padding-right) !important}:host .opacity-before{opacity:0}:host .opacity-after{opacity:1}:host(.right-position){width:var(--ix-expanding-search--container-width) !important}:host(.right-position.fullWidth){width:100% !important}:host(.right-position.fullWidth) .fullWidth{width:100% !important}`;
const ExpandingSearch = class {
  /**
   * Search icon
   */
  icon;
  /**
   * Placeholder text
   */
  placeholder = "Enter text here";
  /**
   * Default value
   */
  value = "";
  /**
   * If true the search field will fill all available horizontal space of it's parent container when expanded.
   */
  fullWidth = false;
  /**
   * button variant
   */
  variant = "tertiary";
  /**
   * ARIA label for the search icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelSearchIconButton;
  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelClearIconButton = "Clear search";
  /**
   * ARIA label for the search input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 3.2.0
   */
  ariaLabelSearchInput = "Search input";
  isFieldChanged = false;
  expanded = false;
  hasFocus = false;
  /**
   * Value changed
   */
  valueChange;
  expandInput() {
    setTimeout(this.focusTextInput, 300);
    this.expanded = true;
  }
  collapseInput() {
    if (!this.isFieldChanged && this.expanded) {
      this.expanded = false;
    }
  }
  clearInput() {
    this.value = "";
    this.isFieldChanged = false;
  }
  onChange(e) {
    this.value = e.target.value;
    if (this.isFieldChanged && this.value === "") {
      this.isFieldChanged = false;
    } else {
      this.isFieldChanged = true;
    }
    this.valueChange.emit(this.value);
  }
  textInput;
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput?.focus();
  }
  clearClicked() {
    this.clearInput();
    this.textInput?.focus();
    this.valueChange.emit(this.value);
  }
  render() {
    return h(Host, { key: "b0a6b373c5063fe5a862fe8147a0bcaf1f433413", class: {
      expanded: this.expanded,
      "right-position": this.expanded,
      fullWidth: this.fullWidth
    } }, h("ix-icon-button", { key: "157ac98db08ab21cb703fe254bfeb418ce9cbc73", size: this.expanded ? "16" : "24", icon: this.icon ?? iconSearch, variant: this.expanded ? "tertiary" : this.variant, "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0, iconColor: this.hasFocus ? "--si-sys-color-text-accent" : void 0, class: {
      "btn-search": true,
      "btn-search--expanded": this.expanded
    }, "aria-label": this.ariaLabelSearchIconButton ?? (this.expanded ? "Close search" : "Open search") }), h("div", { key: "662aa5086a70bb36ebe31bce9e407839b4b26ebf", class: {
      expanded: this.expanded,
      fullWidth: this.fullWidth,
      collapsed: !this.expanded,
      "disable-pointer": !this.expanded,
      "input-container": true
    }, "data-testid": "input-wrapper" }, h("input", { key: "07ebcab4697c94b83e64816cfea9cb7441a8315c", class: {
      input: this.expanded,
      "disable-pointer": !this.expanded,
      "opacity-before": !this.expanded,
      "opacity-after": this.expanded
    }, ref: (el) => this.textInput = el, "data-testid": "input", placeholder: this.placeholder, type: "text", value: this.value, onBlur: () => {
      this.collapseInput();
      this.hasFocus = false;
    }, onFocus: () => this.hasFocus = true, onInput: (e) => this.onChange(e), tabindex: this.expanded ? 0 : -1, "aria-label": this.ariaLabelSearchInput }), this.isFieldChanged ? h("ix-icon-button", { class: "btn-clear", icon: iconClear, variant: "subtle-tertiary", size: "16", "data-testid": "clear-button", onClick: () => this.clearClicked(), "aria-label": this.ariaLabelClearIconButton }) : null));
  }
};
ExpandingSearch.style = expandingSearchCss();
export {
  ExpandingSearch as ix_expanding_search
};
