import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { O as iconMinus, P as iconPlus } from "./index-BeX6RWvV-CXzUIwMU.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { m as mapValidationResult, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, g as checkInternalValidity, o as onInputBlurWithChange, d as SlotStart, I as InputElement, j as onEnterKeyChangeEmit, f as onInputFocus, k as checkAllowedKeys, S as SlotEnd } from "./input.fc-Cwmx0lGN-CUAAuycg.js";
import { H as HookValidationLifecycle } from "./validation-DXpftrw5-Bpiv-t_k.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-JJddxCCh-B7dE3uhl.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const numberInputCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-background-4);--ix-input--background--hover:var(--si-sys-background-4);--ix-input--background--invalid:var(--si-sys-background-1);--ix-input--background--invalid--focus:var(--si-sys-background-4);--ix-input--background--invalid--hover:var(--si-sys-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-background-1);--ix-input--background--warning--focus:var(--si-sys-background-4);--ix-input--background--warning--hover:var(--si-sys-background-4);--ix-input--border-color:var(--si-sys-border-2);--ix-input--border-color--autofill:var(--si-sys-border-2);--ix-input--border-color--disabled:var(--si-sys-border-4);--ix-input--border-color--focus:var(--si-sys-border-1);--ix-input--border-color--hover:var(--si-sys-border-1);--ix-input--border-color--info:var(--si-sys-border-information);--ix-input--border-color--info--active:var(--si-sys-border-information);--ix-input--border-color--info--hover:var(--si-sys-border-information);--ix-input--border-color--invalid:var(--si-sys-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-border-danger);--ix-input--border-color--readonly:var(--si-sys-border-4);--ix-input--border-color--warning:var(--si-sys-background-warning);--ix-input--border-color--warning--active:var(--si-sys-background-warning);--ix-input--border-color--warning--hover:var(--si-sys-background-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-border-4);--ix-input--border-radius:var(--theme-small-border-radius);--ix-input--border-width:var(--theme-border-width-default);--ix-input--box-shadow:none;--ix-input--color:var(--si-sys-text-primary);--ix-input--color--autofill:var(--si-sys-text-primary);--ix-input--color--disabled:var(--si-sys-text-disabled);--ix-input--focus--outline-offset:var(--theme-focus-outline-offset);--ix-input-error--background:var(--si-sys-background-1);--ix-input-error--border-color:var(--si-sys-border-danger);--ix-input-error-icon--color:var(--si-sys-text-danger);--ix-input-extra--background--active:var(--si-sys-background-4);--ix-input-extra--background--hover:var(--si-sys-background-4);--ix-input-gripper--color:var(--si-sys-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-text-disabled);--ix-input-hint--color:var(--si-sys-text-secondary);--ix-input-search-icon--color:var(--si-sys-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-text-primary);--ix-input-select-icon--color--active:var(--si-sys-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-text-primary);--ix-input-unit--color:var(--si-sys-text-secondary)}input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--ix-input--background, var(--si-sys-background-1));color:var(--ix-input--color, var(--si-sys-text-primary));-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color, var(--si-sys-border-2));border-radius:var(--ix-input--border-radius, var(--theme-small-border-radius));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}input::-moz-placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}input::placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--disabled, var(--si-sys-border-4))}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--ix-input--background, var(--si-sys-background-1));color:var(--ix-input--color, var(--si-sys-text-primary));-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color, var(--si-sys-border-2));border-radius:var(--ix-input--border-radius, var(--theme-small-border-radius));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}textarea::-moz-placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}textarea::placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--disabled, var(--si-sys-border-4))}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;padding:calc(0.375rem - var(--ix-input--border-width, var(--theme-border-width-default))) calc(0.5rem - var(--ix-input--border-width, var(--theme-border-width-default)))}textarea:not([rows]){height:3.25rem}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--ix-input--border-color--info, var(--si-sys-border-information))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--ix-input--border-color--info--hover, var(--si-sys-border-information)) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--info--active, var(--si-sys-border-information)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--warning, var(--si-sys-background-1));border-color:var(--ix-input--border-color--warning--active, var(--theme-color-warning-bdr)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--warning--hover, var(--si-sys-background-4));border-color:var(--ix-input--border-color--warning--hover, var(--theme-color-warning-bdr)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--warning--active, var(--theme-color-warning-bdr)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--invalid, var(--si-sys-background-1));border-color:var(--ix-input--border-color--invalid, var(--si-sys-border-danger)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--invalid--hover, var(--si-sys-background-4));border-color:var(--ix-input--border-color--invalid--hover, var(--si-sys-border-danger)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--invalid--active, var(--si-sys-border-danger)) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--ix-input--border-width)}:host .end-container{right:0.25rem}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(0.5rem - 0.25rem)}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(0.25rem - 0.25rem)}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - 0.25rem)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--ix-input--color--disabled)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--ix-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--ix-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--invalid--active) !important}:host .input-wrapper.show-stepper-buttons input[type=number]{min-width:6rem}:host .number-stepper-container{display:flex;position:relative;flex-direction:row;flex-wrap:nowrap}:host .number-stepper-container.container-hidden{display:none}`;
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
let numberInputIds = 0;
const INVALID_NUMBER_INPUT_REGEX = /[^\dEe+\-.,]/;
const NumberInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
    this.ixChange = createEvent(this, "ixChange", 7);
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
   * name of the input element
   */
  name;
  /**
   * placeholder of the input element
   */
  placeholder;
  /**
   * The value of the input field. Supports numeric values, scientific notation (1E6, 1E-6), or undefined for empty.
   */
  value = 0;
  /**
   * Indicates if the field is required. When required, empty values (undefined) are not accepted.
   */
  required = false;
  /**
   * Disables the input field
   */
  disabled = false;
  /**
   * Indicates if the field is read-only
   */
  readonly = false;
  /**
   * The helper text for the input field
   */
  helperText;
  /**
   * The info text for the input field
   */
  infoText;
  /**
   * Indicates if the text should be shown as a tooltip
   */
  showTextAsTooltip;
  /**
   * The valid text for the input field
   */
  validText;
  /**
   * The warning text for the input field
   */
  warningText;
  /**
   * The label for the input field
   */
  label;
  /**
   * The error text for the input field
   */
  invalidText;
  /**
   * The pattern for the input field
   */
  pattern;
  /**
   * The minimum value for the input field
   */
  min;
  /**
   * The maximum value for the input field
   */
  max;
  /**
   * The allowed characters pattern for the input field
   */
  allowedCharactersPattern;
  /**
   * Indicates if the stepper buttons should be shown
   */
  showStepperButtons;
  /**
   * Step value to increment or decrement the input value. Default step value is 1.
   *
   */
  step = 1;
  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  suppressSubmitOnEnter = false;
  /**
   * Text alignment within the number input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  textAlignment = "end";
  /**
   * If true, the valueChange event will return null instead of 0 for an empty input state.
   * This property will be removed in 5.0.0 and this behaviour will be default.
   *
   * @since 4.1.0
   */
  allowEmptyValueChange = false;
  /**
   * Event emitted when the value of the input field changes
   */
  valueChange;
  /**
   * Event emitted when the validity state of the input field changes
   */
  validityStateChange;
  /**
   * Event emitted when the input field loses focus
   */
  ixBlur;
  /**
   * Event emitted when the input field loses focus and the value has changed
   * @since 4.4.0
   */
  ixChange;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  isInvalidByRequired = false;
  inputRef = makeRef();
  slotEndRef = makeRef();
  slotStartRef = makeRef();
  numberInputId = `number-input-${numberInputIds++}`;
  touched = false;
  /** @internal */
  initialValue;
  disposableChangesAndVisibilityObservers;
  onValueChange(newValue) {
    this.updateOptionalFormInternalValue(newValue);
  }
  updateClassMappings(result) {
    mapValidationResult(this, result);
  }
  componentWillLoad() {
    this.updateOptionalFormInternalValue(this.value);
  }
  connectedCallback() {
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  disconnectedCallback() {
    this.disposableChangesAndVisibilityObservers?.();
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputRef.current);
  }
  convertNumberStringToFloat(input) {
    if (!input || input.trim() === "") {
      return void 0;
    }
    const parsed = Number.parseFloat(input);
    return Number.isNaN(parsed) ? void 0 : parsed;
  }
  isScientificNotation(input) {
    const parsed = Number.parseFloat(input);
    return !Number.isNaN(parsed) && Number.isFinite(parsed) && /[eE]/.test(input);
  }
  formatValue(value) {
    if (value === void 0 || value === null) {
      return "";
    }
    return value.toString();
  }
  handleValueChangeEvent(value) {
    this.valueChange.emit(this.allowEmptyValueChange ? value : value ?? 0);
  }
  updateFormInternalValue(value) {
    this.updateOptionalFormInternalValue(value);
  }
  updateOptionalFormInternalValue(value) {
    const formValue = value !== void 0 && value !== null ? value.toString() : "";
    this.formInternals.setFormValue(formValue);
    this.value = value;
    if (this.inputRef.current && this.touched) {
      checkInternalValidity(this, this.inputRef.current);
    }
  }
  handleInputChange = (inputValue) => {
    const parsedValue = this.convertNumberStringToFloat(inputValue);
    const isScientificNotation = this.isScientificNotation(inputValue.trim());
    if (isScientificNotation) {
      this.formInternals.setFormValue(inputValue);
    }
    this.handleValueChangeEvent(parsedValue);
  };
  handleBlur = () => {
    if (!this.inputRef.current)
      return;
    const inputValue = this.inputRef.current.value;
    const parsedValue = this.convertNumberStringToFloat(inputValue);
    this.updateOptionalFormInternalValue(parsedValue);
    if (parsedValue !== void 0 && this.inputRef.current) {
      this.inputRef.current.value = this.formatValue(parsedValue);
    }
    this.updateOptionalFormInternalValue(parsedValue);
    onInputBlurWithChange(this, this.inputRef.current, parsedValue);
    this.touched = true;
  };
  handleKeyDown = (event) => {
    if (this.disabled || this.readonly) {
      return;
    }
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        this.handleStepOperation("up");
        break;
      case "ArrowDown":
        event.preventDefault();
        this.handleStepOperation("down");
        break;
    }
  };
  handleBeforeInput = (e) => {
    if (this.disabled || this.readonly)
      return;
    if (e.inputType === "insertText") {
      const character = e.data;
      if (character && INVALID_NUMBER_INPUT_REGEX.test(character)) {
        e.preventDefault();
      }
    }
    if (e.inputType === "insertFromPaste") {
      const dt = e.dataTransfer || e.clipboardData;
      const text = dt?.getData?.("text") ?? "";
      if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
        e.preventDefault();
      }
    }
  };
  handlePaste = (e) => {
    const text = e.clipboardData?.getData("text") ?? "";
    if (INVALID_NUMBER_INPUT_REGEX.test(text)) {
      e.preventDefault();
    }
  };
  getDecimalPlaces(num) {
    const match = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/.exec("" + num);
    if (!match) {
      return 0;
    }
    return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
  }
  handleStepOperation(operation) {
    if (!this.inputRef.current) {
      return;
    }
    const currentValue = this.convertNumberStringToFloat(this.inputRef.current.value) ?? 0;
    const stepValue = typeof this.step === "string" ? Number.parseFloat(this.step) : this.step ?? 1;
    let newValue;
    if (operation === "up") {
      newValue = currentValue + stepValue;
    } else {
      newValue = currentValue - stepValue;
    }
    const decimalPlaces = Math.max(this.getDecimalPlaces(currentValue), this.getDecimalPlaces(stepValue));
    newValue = Number(newValue.toFixed(decimalPlaces));
    if (this.min !== void 0) {
      const minValue = typeof this.min === "string" ? Number.parseFloat(this.min) : this.min;
      newValue = Math.max(newValue, minValue);
    }
    if (this.max !== void 0) {
      const maxValue = typeof this.max === "string" ? Number.parseFloat(this.max) : this.max;
      newValue = Math.min(newValue, maxValue);
    }
    this.inputRef.current.value = newValue.toString();
    this.updateFormInternalValue(newValue);
    checkInternalValidity(this, this.inputRef.current);
    this.handleValueChangeEvent(newValue);
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /** @internal */
  async hasValidValue() {
    const nativeInput = await this.getNativeInputElement();
    if (nativeInput.value === "") {
      return !this.required;
    }
    const parsedValue = this.convertNumberStringToFloat(nativeInput.value);
    return parsedValue !== void 0;
  }
  /**
   * Returns the native input element used under the hood
   */
  getNativeInputElement() {
    return this.inputRef.waitForCurrent();
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns true if the input field has been touched
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  render() {
    const showStepperButtons = this.showStepperButtons && (this.disabled || this.readonly) === false;
    return h(Host, { key: "435fe4534db74642704a1f10287d013336c6ec56", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "56a7a570cd5ebd63421c2e68339bbea7e944e0c3", id: this.numberInputId, required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.inputRef }, h("div", { key: "ddfa3344632328835221c6d26b29e9907e766f25", class: {
      "input-wrapper": true,
      "show-stepper-buttons": !!this.showStepperButtons
    } }, h(SlotStart, { key: "92e5f24d15c994118a55d68044239b52d90fa0de", slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h(InputElement, { key: "6af3e01b22025139560de92ed91ecee5ccf5373b", id: this.numberInputId, readonly: this.readonly, disabled: this.disabled, step: this.step, min: this.min, max: this.max, pattern: this.pattern, type: "number", isInvalid: this.isInvalid, required: this.required, value: this.formatValue(this.value), placeholder: this.placeholder, inputRef: this.inputRef, onKeyPress: (event) => checkAllowedKeys(this, event), onKeyDown: (event) => this.handleKeyDown(event), onBeforeInput: (event) => this.handleBeforeInput(event), onPaste: (event) => this.handlePaste(event), onFocus: () => onInputFocus(this, this.value), onEnterKeyChange: (event) => onEnterKeyChangeEmit(event, this, this.value), valueChange: this.handleInputChange, updateFormInternalValue: (value) => {
      const parsedValue = this.convertNumberStringToFloat(value);
      const isScientificNotation = this.isScientificNotation(value.trim());
      if (isScientificNotation) {
        this.formInternals.setFormValue(value);
        this.value = parsedValue;
      } else {
        this.updateOptionalFormInternalValue(parsedValue);
      }
    }, onBlur: this.handleBlur, form: this.formInternals.form ?? void 0, suppressSubmitOnEnter: this.suppressSubmitOnEnter, textAlignment: this.textAlignment }), h(SlotEnd, { key: "caa801f12c79c43587acd501a19afb10609cc7b8", slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("div", { key: "51b7d1daadc8f55b6ade3befb758a268cea893e2", class: {
      "number-stepper-container": true,
      "container-hidden": !showStepperButtons
    } }, h("ix-icon-button", { key: "e172ef899cd2523a00088b2a48945129e2194ffe", variant: "subtle-tertiary", icon: iconMinus, size: "16", class: "number-stepper-button step-minus", "aria-label": "decrement number", onClick: () => this.handleStepOperation("down") }), h("ix-icon-button", { key: "fd85938957354abf56c3e81623a8b3a0423870eb", variant: "subtle-tertiary", icon: iconPlus, size: "16", class: "number-stepper-button step-plus", "aria-label": "increment number", onClick: () => this.handleStepOperation("up") }))))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "value": [{
        "onValueChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], NumberInput.prototype, "updateClassMappings", null);
NumberInput.style = numberInputCss();
export {
  NumberInput as ix_number_input
};
