import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { B as iconCalendar } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { f as formatWithLocale } from "./date-time-locale-z9QO_wsw-BUrPNoSy.js";
import { c as createPickerValidityStateTracker, h as handleSubmitOnEnterKeydown, e as emitPickerValidityState, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, S as SlotEnd, f as onInputFocus, o as onInputBlurWithChange, d as SlotStart } from "./input.fc-BueXFqYe-BLX1k-Zr.js";
import { i as isWithinTimePickerConstraints, g as getTimePickerConstraintBounds } from "./time-picker-constraints-ZuBunBEp-CCtK56CP.js";
import { I as InputPickerMixin, h as handleIconClick, o as openDropdown, c as closeDropdown, a as createValidityState } from "./input-picker.mixin-COwy2iok-CoMJLfZ8.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { g as getLuxonDateOnlyFormatMask, a as getLuxonTimeFormatMask } from "./luxon-datetime-format-masks-CoQiziG8-DpxwPfu4.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { c as createClassMutationObserver, g as getValidationText, H as HookValidationLifecycle } from "./validation-aas5KJBP-DcF6SYCa.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-DIEEaulE-B7dE3uhl.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./dropdown-controller-C8s2mHuA-BYHx5hRI.js";
import "./path-utils-DfQsu85Q-BnoIgQFc.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const datetimeInputCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-color-background-4);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--focus:var(--si-sys-color-background-4);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--focus:var(--si-sys-color-background-4);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning:var(--si-sys-color-border-warning);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-color-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-color-border-4);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-error--background:var(--si-sys-color-background-1);--ix-input-error--border-color:var(--si-sys-color-border-danger);--ix-input-error-icon--color:var(--si-sys-color-text-danger);--ix-input-extra--background--active:var(--si-sys-color-background-4);--ix-input-extra--background--hover:var(--si-sys-color-background-4);--ix-input-gripper--color:var(--si-sys-color-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-color-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-color-text-disabled);--ix-input-hint--color:var(--si-sys-color-text-secondary);--ix-input-search-icon--color:var(--si-sys-color-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-color-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-color-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-color-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-color-text-primary);--ix-input-select-icon--color--active:var(--si-sys-color-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-color-text-primary);--ix-input-unit--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-right:calc(     var(--si-sys-sizing-spacing-x-10) * -1   );--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(       var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)     )     calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:calc(     var(--si-sys-sizing-size-100) + 2 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}input{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input::-moz-placeholder{color:var(--ix-input-hint--color)}input::placeholder{color:var(--ix-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only,input:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--ix-input-hint--color)}textarea::placeholder{color:var(--ix-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only,textarea:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);padding:var(--ix-input-textarea--padding)}textarea:not([rows]){height:var(--ix-input-textarea--height)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--ix-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--ix-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--ix-input--border-width)}:host .end-container{right:var(--ix-input-end-container--inset)}:host .start-container ::slotted(*){margin-left:var(--ix-input-start-container--margin-left)}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:var(--ix-input-icon-compact--margin-left)}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(var(--ix-input-end-container--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(var(--ix-input-icon-compact--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - var(--ix-input-end-container--inset))}:host .bottom-text{margin-top:var(--ix-input-bottom-text--margin-top);margin-bottom:var(--ix-input-bottom-text--margin-bottom)}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--ix-input--color--disabled)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--ix-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--ix-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .calendar-hidden{display:none}:host(.readonly) input{pointer-events:none}`;
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
const DatetimeInput = class extends Mixin(...DefaultMixins, InputPickerMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
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
  /** Name of the form control for form submission */
  name;
  /** Placeholder text when input is empty */
  placeholder;
  /** Value in display format (e.g., "2026/01/21 13:07:04" for default format) */
  value = "";
  /**
   * Luxon date and time format for display (e.g., 'yyyy/LL/dd HH:mm:ss' → "2026/01/20 13:07:04").
   *
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "yyyy/LL/dd HH:mm:ss";
  /** Locale for date/time formatting (e.g., 'en-US', 'de-DE') */
  locale;
  watchLocalePropHandler() {
    this.onInput(this.value);
  }
  /** Whether the field is required */
  required = false;
  /** Whether the input is disabled */
  disabled = false;
  /** Whether the input is read-only (calendar icon hidden) */
  readonly = false;
  /** Minimum allowed date (matching format or date-only, e.g., "2026/01/20") */
  minDate;
  /** Maximum allowed date (matching format or date-only, e.g., "2026/12/31") */
  maxDate;
  /**
   * Earliest selectable time (tokens matching the time portion of `format`). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  minTime;
  /**
   * Latest selectable time (tokens matching the time portion of `format`). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  maxTime;
  /** Label text displayed above the input */
  label;
  /** Helper text displayed below the input */
  helperText;
  /** Validation message for invalid state */
  invalidText;
  /** Informational message */
  infoText;
  /** Warning message */
  warningText;
  /** Success/valid message */
  validText;
  /** Show helper text as tooltip instead of below input */
  showTextAsTooltip = false;
  /** Error message when datetime cannot be parsed */
  i18nErrorDateTimeUnparsable = "Date time is not valid";
  /** Text for confirm button in picker (prop name matches datetime-picker) */
  i18nDone = "Confirm";
  /** Header text for time picker section */
  i18nTime = "Time";
  /** ARIA label for previous month navigation button */
  ariaLabelPreviousMonthButton = "Previous month";
  /** ARIA label for next month navigation button */
  ariaLabelNextMonthButton = "Next month";
  /**
   * ARIA label for the calendar icon button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCalendarButton = "Toggle calendar";
  /** Show week numbers in date picker */
  showWeekNumbers = false;
  /** First day of week (0=Sunday, 1=Monday, etc.) */
  weekStartIndex = 0;
  /** Prevent form submission when Enter is pressed */
  suppressSubmitOnEnter = false;
  /** Text alignment within the input field */
  textAlignment = "start";
  /**
   * Enable Popover API rendering for dropdown.
   */
  enableTopLayer = false;
  /** Emitted when the datetime value changes. Payload is display format or undefined */
  valueChange;
  /** Emitted when validation state changes */
  validityStateChange;
  /** Emitted when the input receives focus */
  ixFocus;
  /** Emitted when the input loses focus */
  ixBlur;
  /**
   * Emitted when the date/time value changes via user interaction.
   *
   * Fires in two scenarios:
   * - When the input loses focus (blur) and the value has changed
   * - When a new date/time is selected in the picker and confirmed
   *
   * Does NOT fire when:
   * - The picker is opened/closed without confirming a change
   * - The input is blurred without modifying the value
   * - The value is changed programmatically via the value property
   */
  ixChange;
  isInputInvalid = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  slotStartRef = makeRef();
  slotEndRef = makeRef();
  inputElementRef = makeRef();
  dropdownElementRef = makeRef();
  datetimePickerRef = makeRef();
  show = false;
  from = null;
  time = null;
  classObserver;
  initialValue;
  invalidReason;
  touched = false;
  validityTracker = createPickerValidityStateTracker();
  disposableChangesAndVisibilityObservers;
  watchValuePropHandler(newValue) {
    this.onInput(newValue);
  }
  watchMinTimePropHandler() {
    this.revalidateCurrentValue();
  }
  watchMaxTimePropHandler() {
    this.revalidateCurrentValue();
  }
  get combinedFormat() {
    return this.format;
  }
  get dateOnlyFormat() {
    return getLuxonDateOnlyFormatMask(this.format);
  }
  get timeOnlyFormat() {
    return getLuxonTimeFormatMask(this.format);
  }
  syncPickerState() {
    if (!this.value) {
      this.from = null;
      this.time = null;
      return;
    }
    const dateTime = DateTime.fromFormat(this.value, this.combinedFormat, {
      locale: this.locale
    });
    if (dateTime.isValid) {
      this.from = formatWithLocale(dateTime, this.dateOnlyFormat, this.locale);
      this.time = formatWithLocale(dateTime, this.timeOnlyFormat, this.locale);
    } else {
      this.from = null;
      this.time = null;
    }
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
      this.from = null;
      this.time = null;
      this.emitValidityStateChangeIfChanged();
      this.formInternals.setFormValue(null);
      this.valueChange.emit(value);
      return;
    }
    if (!this.format) {
      return;
    }
    const dateTime = DateTime.fromFormat(value, this.combinedFormat, {
      locale: this.locale
    });
    const validationResult = this.computeConstraintValidation(dateTime);
    this.isInputInvalid = validationResult.isInvalid;
    this.invalidReason = validationResult.reason;
    if (dateTime.isValid) {
      this.from = formatWithLocale(dateTime, this.dateOnlyFormat, this.locale);
      this.time = formatWithLocale(dateTime, this.timeOnlyFormat, this.locale);
    } else {
      this.from = null;
      this.time = null;
    }
    if (this.isInputInvalid) {
      this.formInternals.setFormValue(null);
    } else {
      this.formInternals.setFormValue(value);
    }
    this.emitValidityStateChangeIfChanged();
    this.valueChange.emit(value);
  }
  parseConstraintDate(dateString, boundary) {
    if (!dateString) {
      return null;
    }
    const localeOpts = { locale: this.locale };
    let parsed = DateTime.fromFormat(dateString, this.format, localeOpts);
    if (!parsed.isValid) {
      parsed = DateTime.fromFormat(dateString, this.dateOnlyFormat, localeOpts);
    }
    if (!parsed.isValid) {
      return null;
    }
    return boundary === "start" ? parsed.startOf("day") : parsed.endOf("day");
  }
  validateConstraints(dateTime, minDateTime, maxDateTime, minTime, maxTime) {
    const isFormatInvalid = !dateTime.isValid;
    const isBeforeMin = !!(minDateTime?.isValid && dateTime.isValid && dateTime < minDateTime);
    const isAfterMax = !!(maxDateTime?.isValid && dateTime.isValid && dateTime > maxDateTime);
    const isOutsideTimeWindow = dateTime.isValid && !isWithinTimePickerConstraints(dateTime, minTime, maxTime);
    const isInvalid = isFormatInvalid || isBeforeMin || isAfterMax || isOutsideTimeWindow;
    let reason;
    if (isBeforeMin) {
      reason = "rangeUnderflow";
    } else if (isAfterMax) {
      reason = "rangeOverflow";
    } else if (isOutsideTimeWindow) {
      reason = "customError";
    } else if (isFormatInvalid) {
      reason = dateTime.invalidReason || void 0;
    }
    return { isInvalid, reason };
  }
  getTimeConstraintBoundsForDate(dateTime, minDateTime, maxDateTime) {
    if (!dateTime.isValid) {
      return { min: null, max: null };
    }
    const bounds = getTimePickerConstraintBounds(this.minTime, this.maxTime, this.timeOnlyFormat, dateTime.startOf("day"), this.locale);
    const hasDateBounds = !!(minDateTime?.isValid || maxDateTime?.isValid);
    if (!hasDateBounds) {
      return bounds;
    }
    const applyMinTime = !!minDateTime?.isValid && dateTime.hasSame(minDateTime, "day");
    const applyMaxTime = !!maxDateTime?.isValid && dateTime.hasSame(maxDateTime, "day");
    return {
      min: applyMinTime ? bounds.min : null,
      max: applyMaxTime ? bounds.max : null
    };
  }
  computeConstraintValidation(dateTime) {
    const minDateTime = this.parseConstraintDate(this.minDate, "start");
    const maxDateTime = this.parseConstraintDate(this.maxDate, "end");
    const { min: minTime, max: maxTime } = this.getTimeConstraintBoundsForDate(dateTime, minDateTime, maxDateTime);
    return this.validateConstraints(dateTime, minDateTime, maxDateTime, minTime, maxTime);
  }
  revalidateCurrentValue() {
    if (!this.value || !this.format) {
      return;
    }
    const dateTime = DateTime.fromFormat(this.value, this.combinedFormat, {
      locale: this.locale
    });
    if (!dateTime.isValid) {
      return;
    }
    const validationResult = this.computeConstraintValidation(dateTime);
    this.isInputInvalid = validationResult.isInvalid;
    this.invalidReason = validationResult.reason;
    this.emitValidityStateChangeIfChanged();
  }
  handleInputKeyDown(event) {
    handleSubmitOnEnterKeydown(event, this.suppressSubmitOnEnter, this.formInternals.form);
  }
  initPickerValues() {
    this.syncPickerState();
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.from = formatWithLocale(now, this.dateOnlyFormat, this.locale);
        this.time = formatWithLocale(now, this.timeOnlyFormat, this.locale);
      }
    }
  }
  onCalendarClick(event) {
    handleIconClick(event, this.show, () => this.openDropdown(), this.inputElementRef);
  }
  async openDropdown() {
    this.initPickerValues();
    return openDropdown(this.dropdownElementRef);
  }
  async closeDropdown() {
    return closeDropdown(this.dropdownElementRef);
  }
  updateFormInternalValue(value) {
    if (value) {
      this.formInternals.setFormValue(value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  /**
   * Returns whether the input has a value.
   * @internal
   */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /**
   * Returns the associated HTML form element.
   * @internal
   */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  /**
   * Get the native input element
   * @internal
   */
  getNativeInputElement() {
    return this.inputElementRef.waitForCurrent();
  }
  /**
   * Focus the native input element
   * @internal
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Returns whether the input field has been touched.
   * @internal
   */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  /**
   * Returns the validity state of the input.
   * @internal
   */
  getValidityState() {
    return Promise.resolve(createValidityState(this.isInputInvalid, !!this.required, this.value));
  }
  async onInputValidationChange() {
    this.isInvalid = this.isInputInvalid;
    const state = await this.getValidityState();
    const validityState = {
      valid: state.valid,
      valueMissing: state.valueMissing,
      rangeUnderflow: this.invalidReason === "rangeUnderflow",
      rangeOverflow: this.invalidReason === "rangeOverflow",
      typeMismatch: !!(this.invalidReason && this.invalidReason !== "rangeUnderflow" && this.invalidReason !== "rangeOverflow"),
      customError: state.customError,
      badInput: state.badInput,
      patternMismatch: false,
      stepMismatch: state.stepMismatch,
      tooLong: state.tooLong,
      tooShort: state.tooShort,
      invalidReason: this.invalidReason
    };
    this.validityStateChange.emit(validityState);
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
  emitChange(value) {
    if (this.initialValue !== value) {
      this.ixChange.emit(value);
      this.initialValue = value;
    }
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    this.onInput(this.value);
    this.checkClassList();
    this.updateFormInternalValue(this.value);
    this.initialValue = this.value;
  }
  updatePaddings() {
    adjustPaddingForStartAndEnd(this.slotStartRef.current, this.slotEndRef.current, this.inputElementRef.current);
  }
  disconnectedCallback() {
    this.classObserver?.destroy();
    this.disposableChangesAndVisibilityObservers?.();
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  handleDateSelect = (event) => {
    const { from, time } = event.detail;
    if (!from || !time) {
      return;
    }
    const dateOnly = DateTime.fromFormat(from, this.dateOnlyFormat, {
      locale: this.locale
    });
    const timeOnly = DateTime.fromFormat(time, this.timeOnlyFormat, {
      locale: this.locale
    });
    if (!dateOnly.isValid || !timeOnly.isValid) {
      return;
    }
    const dateTimeCombined = dateOnly.set({
      hour: timeOnly.hour,
      minute: timeOnly.minute,
      second: timeOnly.second,
      millisecond: timeOnly.millisecond
    });
    const displayValue = formatWithLocale(dateTimeCombined, this.format, this.locale);
    this.onInput(displayValue);
    this.emitChange(displayValue);
    this.closeDropdown();
  };
  getPickerElement() {
    return this.dropdownElementRef;
  }
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, disabled: this.disabled, name: this.name, placeholder: this.placeholder, readonly: this.readonly, ref: this.inputElementRef, required: this.required, style: {
      textAlign: this.textAlignment
    }, type: "text", value: this.value ?? "", onBlur: () => {
      onInputBlurWithChange(this, this.inputElementRef.current, this.value);
      this.touched = true;
      this.emitValidityStateChangeIfChanged();
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: () => {
      onInputFocus(this, this.value);
      this.ixFocus.emit();
    }, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onKeyDown: (event) => this.handleInputKeyDown(event) }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { "aria-label": this.ariaLabelCalendarButton, "aria-expanded": a11yBoolean(this.show), tabindex: -1, class: { "calendar-hidden": this.disabled || this.readonly }, variant: "subtle-tertiary", icon: iconCalendar, size: "16", onClick: (event) => this.onCalendarClick(event) })));
  }
  render() {
    const invalidText = getValidationText(this.isInputInvalid, this.invalidText, this.i18nErrorDateTimeUnparsable);
    return h(Host, { key: "0e9cbb470cf01189a4b157ae92eff0d0a7ebd425", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      active: this.show
    } }, h("ix-field-wrapper", { key: "284e7bc5a823e2b3700f6d3dfa162a4fee7b4dce", controlRef: this.inputElementRef, helperText: this.helperText, infoText: this.infoText, invalidText, isInfo: this.isInfo, isInvalid: this.isInvalid, isValid: this.isValid, isWarning: this.isWarning, label: this.label, required: this.required, showTextAsTooltip: this.showTextAsTooltip, validText: this.validText, warningText: this.warningText }, this.renderInput()), h("ix-dropdown", { key: "3995544c721c4b556685e35b8c684324dfb83c4b", class: "datetime-dropdown", closeBehavior: "outside", "data-testid": "datetime-dropdown", enableTopLayer: this.enableTopLayer, ref: this.dropdownElementRef, show: this.show, suppressOverflowBehavior: true, trigger: this.inputElementRef.waitForCurrent(), onShowChanged: (event) => {
      this.show = event.detail;
    }, focusTrapOptions: {
      targetElement: this.datetimePickerRef,
      trapFocusInShadowDom: true
    }, callbackFocusElement: async () => {
      const datetimePicker = this.datetimePickerRef.current;
      if (datetimePicker) {
        const datePickerElement = await datetimePicker.getDatepickerElement();
        datePickerElement?.focusActiveDay();
      }
      return true;
    }, keyboardActivationKeys: ["ArrowUp", "ArrowDown"] }, h("ix-datetime-picker", { key: "f504f2688bc2f820bc11924897138982ccca8724", ariaLabelNextMonthButton: this.ariaLabelNextMonthButton, ariaLabelPreviousMonthButton: this.ariaLabelPreviousMonthButton, dateFormat: this.dateOnlyFormat, embedded: true, from: this.from ?? "", i18nDone: this.i18nDone, i18nTime: this.i18nTime, locale: this.locale, maxDate: this.maxDate, maxTime: this.maxTime, minDate: this.minDate, minTime: this.minTime, ref: this.datetimePickerRef, showWeekNumbers: this.showWeekNumbers, singleSelection: true, time: this.time ?? "", timeFormat: this.timeOnlyFormat, weekStartIndex: this.weekStartIndex, onDateSelect: this.handleDateSelect })));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "locale": [{
        "watchLocalePropHandler": 0
      }],
      "value": [{
        "watchValuePropHandler": 0
      }],
      "minTime": [{
        "watchMinTimePropHandler": 0
      }],
      "maxTime": [{
        "watchMaxTimePropHandler": 0
      }],
      "isInputInvalid": [{
        "onInputValidationChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], DatetimeInput.prototype, "hookValidationLifecycle", null);
DatetimeInput.style = datetimeInputCss();
export {
  DatetimeInput as ix_datetime_input
};
