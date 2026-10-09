import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { B as iconCalendar } from "./index-BeX6RWvV-CXzUIwMU.js";
import { p as parseWithLocale } from "./date-time-locale-z9QO_wsw-BUrPNoSy.js";
import { c as createPickerValidityStateTracker, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, h as handleSubmitOnEnterKeydown, S as SlotEnd, o as onInputBlurWithChange, d as SlotStart, e as emitPickerValidityState } from "./input.fc-BueXFqYe-BLX1k-Zr.js";
import { I as InputPickerMixin, h as handleIconClick, o as openDropdown, c as closeDropdown, a as createValidityState } from "./input-picker.mixin-COwy2iok-CoMJLfZ8.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { D as DefaultMixins, h as hasKeyboardMode } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { a as a11yBoolean, f as forceTabIndex } from "./a11y-DD206pTM-BiwZPW5s.js";
import { c as createClassMutationObserver, g as getValidationText, H as HookValidationLifecycle } from "./validation-aas5KJBP-DcF6SYCa.js";
import "./datetime-D1WplX1z-grPSvmS5.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-DIEEaulE-B7dE3uhl.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./dropdown-controller-C8s2mHuA-BYHx5hRI.js";
import "./path-utils-DfQsu85Q-BnoIgQFc.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const dateInputCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-color-background-4);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--focus:var(--si-sys-color-background-4);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--focus:var(--si-sys-color-background-4);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning:var(--si-sys-color-border-warning);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-color-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-color-border-4);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-error--background:var(--si-sys-color-background-1);--ix-input-error--border-color:var(--si-sys-color-border-danger);--ix-input-error-icon--color:var(--si-sys-color-text-danger);--ix-input-extra--background--active:var(--si-sys-color-background-4);--ix-input-extra--background--hover:var(--si-sys-color-background-4);--ix-input-gripper--color:var(--si-sys-color-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-color-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-color-text-disabled);--ix-input-hint--color:var(--si-sys-color-text-secondary);--ix-input-search-icon--color:var(--si-sys-color-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-color-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-color-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-color-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-color-text-primary);--ix-input-select-icon--color--active:var(--si-sys-color-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-color-text-primary);--ix-input-unit--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-right:calc(     var(--si-sys-sizing-spacing-x-10) * -1   );--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(       var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)     )     calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:calc(     var(--si-sys-sizing-size-100) + 2 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}input{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input::-moz-placeholder{color:var(--ix-input-hint--color)}input::placeholder{color:var(--ix-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only,input:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--ix-input-hint--color)}textarea::placeholder{color:var(--ix-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only,textarea:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);padding:var(--ix-input-textarea--padding)}textarea:not([rows]){height:var(--ix-input-textarea--height)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--ix-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--ix-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--ix-input--border-width)}:host .end-container{right:var(--ix-input-end-container--inset)}:host .start-container ::slotted(*){margin-left:var(--ix-input-start-container--margin-left)}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:var(--ix-input-icon-compact--margin-left)}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(var(--ix-input-end-container--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(var(--ix-input-icon-compact--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - var(--ix-input-end-container--inset))}:host .bottom-text{margin-top:var(--ix-input-bottom-text--margin-top);margin-bottom:var(--ix-input-bottom-text--margin-bottom)}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--ix-input--color--disabled)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--ix-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--ix-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .calendar-hidden{display:none}:host(.readonly) input{pointer-events:none}`;
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
const DateInput = class extends Mixin(...DefaultMixins, InputPickerMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 6);
    this.validityStateChange = createEvent(this, "validityStateChange", 7);
    this.ixFocus = createEvent(this, "ixFocus", 7);
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
   * Name of the input element.
   */
  name;
  /**
   * Placeholder of the input element.
   */
  placeholder;
  /**
   * Value of the input element.
   */
  value = "";
  watchValuePropHandler(newValue) {
    this.onInput(newValue);
  }
  /**
   * The earliest date that can be selected by the date input/picker.
   * If not set there will be no restriction.
   */
  minDate = "";
  /**
   * The latest date that can be selected by the date input/picker.
   * If not set there will be no restriction.
   */
  maxDate = "";
  /**
   * Locale identifier (e.g. 'en' or 'de').
   * The locale is used to translate the labels for weekdays and months,
   * determine the default order of weekdays, and parse user input.
   * Values emitted via `valueChange` reflect the locale-formatted string
   * as typed or selected by the user.
   */
  locale;
  /**
   * Date format string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd";
  watchLocaleFormatHandler() {
    this.onInput(this.value);
  }
  /**
   * Required attribute.
   */
  required;
  /**
   * Helper text below the input field.
   */
  helperText;
  /**
   * Label of the input field.
   */
  label;
  /**
   * ARIA label for the calendar icon button.
   * Will be set as aria-label on the nested HTML button element.
   *
   * @since 3.2.0
   */
  ariaLabelCalendarButton = "Open calendar";
  /**
   * Error text below the input field.
   */
  invalidText;
  /**
   * Readonly attribute.
   */
  readonly = false;
  /**
   * Disabled attribute.
   */
  disabled = false;
  /**
   * Info text below the input field.
   */
  infoText;
  /**
   * Warning text below the input field.
   */
  warningText;
  /**
   * Valid text below the input field.
   */
  validText;
  /**
   * Show text as tooltip.
   */
  showTextAsTooltip;
  /**
   * I18n string for the error message when the date is not parsable.
   */
  i18nErrorDateUnparsable = "Date is not valid";
  /**
   * Shows week numbers displayed on the left side of the date picker.
   *
   * @since 3.0.0
   */
  showWeekNumbers = false;
  /**
   * The index of the day the week starts on, as a 0-based index into Luxon's
   * `Info.weekdays()` array. That array is always ordered Monday-first
   * regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday.
   * E.g. weekStartIndex = 6 results in starting the week on Sunday.
   */
  weekStartIndex = 0;
  /**
   * ARIA label for the previous month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelPreviousMonthButton = "Previous month";
  /**
   * ARIA label for the next month icon button.
   * Will be set as aria-label on the nested HTML button element.
   */
  ariaLabelNextMonthButton = "Next month";
  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  suppressSubmitOnEnter = false;
  /**
   * Text alignment within the date input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
   */
  textAlignment = "start";
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Value change event. Emitted when the input value changes.
   */
  valueChange;
  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  validityStateChange;
  /** @internal */
  ixFocus;
  /** @internal */
  ixBlur;
  /**
   * Change event. Emitted when the date input loses focus and the value has changed.
   *
   * @since 4.4.0
   */
  ixChange;
  show = false;
  from = null;
  isInputInvalid = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  focus = false;
  slotStartRef = makeRef();
  slotEndRef = makeRef();
  datepickerRef = makeRef();
  inputElementRef = makeRef();
  dropdownElementRef = makeRef();
  classObserver;
  initialValue;
  invalidReason;
  touched = false;
  validityTracker = createPickerValidityStateTracker();
  disposableChangesAndVisibilityObservers;
  updateFormInternalValue(value) {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
    this.value = value;
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }
    this.checkClassList();
    this.updateFormInternalValue(this.value);
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputElementRef.current);
  }
  disconnectedCallback() {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }
  watchValue() {
    this.from = this.value;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
      this.emitValidityStateChangeIfChanged();
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
      return;
    }
    if (!this.format) {
      return;
    }
    const date = parseWithLocale(value, this.format, this.locale);
    const minDate = parseWithLocale(this.minDate, this.format, this.locale);
    const maxDate = parseWithLocale(this.maxDate, this.format, this.locale);
    this.isInputInvalid = !date.isValid || date < minDate || date > maxDate;
    if (this.isInputInvalid) {
      this.invalidReason = date.invalidReason ?? void 0;
      this.from = void 0;
    } else {
      this.updateFormInternalValue(value);
      this.closeDropdown();
      if (hasKeyboardMode()) {
        this.inputElementRef.current?.focus();
      }
    }
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }
  onCalenderClick(event) {
    handleIconClick(event, this.show, () => this.openDropdown(), this.inputElementRef);
  }
  async openDropdown() {
    return openDropdown(this.dropdownElementRef);
  }
  async closeDropdown() {
    return closeDropdown(this.dropdownElementRef);
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  handleInputKeyDown(event) {
    handleSubmitOnEnterKeydown(event, this.suppressSubmitOnEnter, this.formInternals.form);
  }
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { "aria-haspopup": "true", autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, disabled: this.disabled, readOnly: this.readonly, readonly: this.readonly, required: this.required, ref: this.inputElementRef, type: "text", value: this.value ?? "", placeholder: this.placeholder, name: this.name, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: async () => {
      this.ixFocus.emit();
    }, onBlur: () => {
      this.touched = true;
      onInputBlurWithChange(this, this.inputElementRef.current, this.value);
      this.emitValidityStateChangeIfChanged();
    }, onKeyDown: (event) => this.handleInputKeyDown(event), style: {
      textAlign: this.textAlignment
    } }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { tabindex: -1, ref: (ref) => forceTabIndex(ref, -1), "aria-label": this.ariaLabelCalendarButton, "data-testid": "open-calendar", class: { "calendar-hidden": this.disabled || this.readonly }, variant: "subtle-tertiary", size: "16", icon: iconCalendar, "aria-expanded": a11yBoolean(this.show), onClick: (event) => this.onCalenderClick(event) })));
  }
  hookValidationLifecycle({ isInfo, isInvalid, isInvalidByRequired, isValid, isWarning }) {
    this.isInvalid = isInvalid || isInvalidByRequired || this.isInputInvalid;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }
  emitValidityStateChangeIfChanged() {
    return emitPickerValidityState(this);
  }
  /** @internal */
  getValidityState() {
    return Promise.resolve(createValidityState(this.isInputInvalid, !!this.required, this.value));
  }
  /**
   * Get the native input element
   */
  getNativeInputElement() {
    return this.inputElementRef.waitForCurrent();
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns whether the text field has been touched.
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  getPickerElement() {
    return this.dropdownElementRef;
  }
  render() {
    const invalidText = getValidationText(this.isInputInvalid, this.invalidText, this.i18nErrorDateUnparsable);
    return h(Host, { key: "40a7b67b924db475959c92c4c78d899641955cbe", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      active: this.show
    }, onFocusout: (e) => {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget) {
        return;
      }
      this.closeDropdown();
    } }, h("ix-field-wrapper", { key: "ac254e9a7b605da19419889e980254accc503510", label: this.label, helperText: this.helperText, isInvalid: this.isInvalid, invalidText, infoText: this.infoText, isInfo: this.isInfo, isWarning: this.isWarning, warningText: this.warningText, isValid: this.isValid, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, required: this.required, controlRef: this.inputElementRef }, this.renderInput()), h("ix-dropdown", { key: "488a4f459f8624c88634e0d73592aa52e75cd714", "data-testid": "date-dropdown", trigger: this.inputElementRef.waitForCurrent(), ref: this.dropdownElementRef, closeBehavior: "outside", enableTopLayer: this.enableTopLayer, suppressOverflowBehavior: true, show: this.show, onShowChanged: (event) => {
      this.show = event.detail;
    }, focusTrapOptions: {
      targetElement: this.datepickerRef,
      trapFocusInShadowDom: true
    }, callbackFocusElement: async () => {
      this.datepickerRef.current?.focusActiveDay();
      return true;
    }, keyboardActivationKeys: ["ArrowUp", "ArrowDown"] }, h("ix-date-picker", { key: "694f21b4eccc0de81afcdb8fe6f983ad9c5d7092", ref: this.datepickerRef, format: this.format, locale: this.locale, singleSelection: true, from: this.from ?? "", minDate: this.minDate, maxDate: this.maxDate, onDateChange: (event) => {
      const { from } = event.detail;
      this.onInput(from);
      if (this.initialValue !== from) {
        this.ixChange.emit(from);
        this.initialValue = from;
      }
    }, showWeekNumbers: this.showWeekNumbers, weekStartIndex: this.weekStartIndex, ariaLabelNextMonthButton: this.ariaLabelNextMonthButton, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, embedded: true })));
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
        "watchValuePropHandler": 0
      }, {
        "watchValue": 0
      }],
      "locale": [{
        "watchLocaleFormatHandler": 0
      }],
      "format": [{
        "watchLocaleFormatHandler": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], DateInput.prototype, "hookValidationLifecycle", null);
DateInput.style = dateInputCss();
export {
  DateInput as ix_date_input
};
