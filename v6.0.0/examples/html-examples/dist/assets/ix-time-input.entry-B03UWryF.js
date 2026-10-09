import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { Y as iconClock } from "./index-BeX6RWvV-CXzUIwMU.js";
import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
import { c as createPickerValidityStateTracker, j as onEnterKeyChangeEmit, h as handleSubmitOnEnterKeydown, a as addDisposableChangesAndVisibilityObservers, b as adjustPaddingForStartAndEnd, S as SlotEnd, o as onInputBlurWithChange, d as SlotStart, e as emitPickerValidityState } from "./input.fc-BueXFqYe-BLX1k-Zr.js";
import { g as getTimePickerConstraintBounds, i as isWithinTimePickerConstraints } from "./time-picker-constraints-ZuBunBEp-CCtK56CP.js";
import { I as InputPickerMixin, h as handleIconClick, o as openDropdown, c as closeDropdown, a as createValidityState } from "./input-picker.mixin-COwy2iok-CoMJLfZ8.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { p as parseWithLocale } from "./date-time-locale-z9QO_wsw-BUrPNoSy.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import { a as a11yBoolean, f as forceTabIndex } from "./a11y-DD206pTM-BiwZPW5s.js";
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
const timeInputCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-color-background-4);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--focus:var(--si-sys-color-background-4);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--focus:var(--si-sys-color-background-4);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning:var(--si-sys-color-border-warning);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-color-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-color-border-4);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-error--background:var(--si-sys-color-background-1);--ix-input-error--border-color:var(--si-sys-color-border-danger);--ix-input-error-icon--color:var(--si-sys-color-text-danger);--ix-input-extra--background--active:var(--si-sys-color-background-4);--ix-input-extra--background--hover:var(--si-sys-color-background-4);--ix-input-gripper--color:var(--si-sys-color-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-color-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-color-text-disabled);--ix-input-hint--color:var(--si-sys-color-text-secondary);--ix-input-search-icon--color:var(--si-sys-color-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-color-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-color-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-color-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-color-text-primary);--ix-input-select-icon--color--active:var(--si-sys-color-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-color-text-primary);--ix-input-unit--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-right:calc(     var(--si-sys-sizing-spacing-x-10) * -1   );--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(       var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)     )     calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:calc(     var(--si-sys-sizing-size-100) + 2 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}input{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}input::-moz-placeholder{color:var(--ix-input-hint--color)}input::placeholder{color:var(--ix-input-hint--color)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}input:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only,input:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--ix-input-hint--color)}textarea::placeholder{color:var(--ix-input-hint--color)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}textarea:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only,textarea:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:var(--ix-input--min-height);padding:var(--ix-input-textarea--padding)}textarea:not([rows]){height:var(--ix-input-textarea--height)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--ix-input--border-color--info)}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--ix-input--border-color--info--hover) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--info--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--hover) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--warning--active) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--ix-input--border-width)}:host .end-container{right:var(--ix-input-end-container--inset)}:host .start-container ::slotted(*){margin-left:var(--ix-input-start-container--margin-left)}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:var(--ix-input-icon-compact--margin-left)}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(var(--ix-input-end-container--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(var(--ix-input-icon-compact--margin-right) - var(--ix-input-end-container--inset))}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - var(--ix-input-end-container--inset))}:host .bottom-text{margin-top:var(--ix-input-bottom-text--margin-top);margin-bottom:var(--ix-input-bottom-text--margin-bottom)}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--ix-input--color--disabled)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.active:not(.disabled):not(.readonly)) input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--ix-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--ix-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--invalid--active) !important}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host input{width:100%;height:100%}:host .time-icon-hidden{display:none}:host(.readonly) input{pointer-events:none}.input-wrapper{position:relative}`;
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
const TimeInput = class extends Mixin(...DefaultMixins, InputPickerMixin) {
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
   * Format of time string.
   * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
   */
  format = "TT";
  /**
   * Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  minTime;
  /**
   * Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
   *
   * @since 5.0.0
   */
  maxTime;
  watchMinTimePropHandler() {
    this.revalidateCurrentValue();
  }
  watchMaxTimePropHandler() {
    this.revalidateCurrentValue();
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
   * I18n string for the error message when the time is not parsable.
   */
  i18nErrorTimeUnparsable = "Time is not valid";
  /**
   * Interval for hour selection.
   */
  hourInterval = 1;
  /**
   * Interval for minute selection.
   */
  minuteInterval = 1;
  /**
   * Interval for second selection.
   */
  secondInterval = 1;
  /**
   * Interval for millisecond selection.
   */
  millisecondInterval = 100;
  /**
   * Text of the time picker confirm button.
   */
  i18nSelectTime = "Confirm";
  /**
   * Text for the time picker top label.
   */
  i18nTime = "Time";
  /**
   * Text for the time picker hour column header.
   */
  i18nHourColumnHeader = "hr";
  /**
   * Text for the time picker minute column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMinuteColumnHeader = "min";
  /**
   * Text for the time picker second column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nSecondColumnHeader = "sec";
  /**
   * Text for the time picker millisecond column header.
   */
  // eslint-disable-next-line @stencil-community/decorators-style
  i18nMillisecondColumnHeader = "ms";
  /**
   * If false, pressing Enter will submit the form (if inside a form).
   * Set to true to suppress submit on Enter.
   */
  suppressSubmitOnEnter = false;
  /**
   * Locale identifier (e.g. 'en' or 'de'). Passed to the embedded time picker for locale-aware parsing and formatting.
   *
   * @since 6.0.0
   */
  locale;
  watchLocalePropHandler() {
    this.onInput(this.value);
  }
  /**
   * Label for the AM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  i18nAm = "AM";
  /**
   * Label for the PM button in 12-hour mode.
   *
   * @since 6.0.0
   */
  i18nPm = "PM";
  /**
   * Hides the header of the picker.
   *
   * @since 4.0.0
   */
  hideHeader = false;
  /**
   * Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
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
   * ARIA label for the time picker toggle button
   * Will be set as aria-label for the nested HTML button element
   *
   * @since 5.0.0
   */
  ariaLabelTimeToggleButton = "Toggle time picker";
  /**
   * Value change event. Emitted when the input value changes.
   */
  valueChange;
  /**
   * Validation state change event. Emitted when the validation state changes.
   */
  validityStateChange;
  /** @internal */
  ixFocus;
  /** @internal */
  ixBlur;
  /**
   * Change event. Emitted when the time input loses focus and the value has changed.
   *
   * @since 4.4.0
   */
  ixChange;
  show = false;
  time = null;
  isInputInvalid = false;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  focus = false;
  slotStartRef = makeRef();
  slotEndRef = makeRef();
  timePickerRef = makeRef();
  inputElementRef = makeRef();
  dropdownElementRef = makeRef();
  classObserver;
  initialValue;
  invalidReason;
  touched = false;
  validityTracker = createPickerValidityStateTracker();
  disposableChangesAndVisibilityObservers;
  handleInputKeyDown(event) {
    if (event.key === "ArrowDown") {
      this.show = true;
      requestAnimationFrameNoNgZone(() => {
        const focusableTimeButton = this.timePickerRef.current?.shadowRoot?.querySelector('button[tabindex="0"]');
        focusableTimeButton?.focus();
      });
    }
    onEnterKeyChangeEmit(event, this, this.value);
    handleSubmitOnEnterKeydown(event, this.suppressSubmitOnEnter, this.formInternals.form);
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }
  connectedCallback() {
    this.classObserver = createClassMutationObserver(this.hostElement, () => this.checkClassList());
    this.disposableChangesAndVisibilityObservers = addDisposableChangesAndVisibilityObservers(this.hostElement, this.updatePaddings.bind(this));
  }
  componentWillLoad() {
    if (!this.value) {
      const now = DateTime.now();
      if (now.isValid) {
        this.value = now.toFormat(this.format, { locale: this.locale });
      }
    }
    this.onInput(this.value);
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
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  isWithinConfiguredBounds(parsed) {
    const baseDay = parsed.startOf("day");
    const { min, max } = getTimePickerConstraintBounds(this.minTime, this.maxTime, this.format, baseDay, this.locale);
    return isWithinTimePickerConstraints(parsed, min, max);
  }
  syncPickerTimeFromValue() {
    const trimmed = this.value?.trim() ?? "";
    if (!trimmed) {
      this.time = null;
      return;
    }
    const parsed = parseWithLocale(trimmed, this.format, this.locale);
    if (!parsed.isValid) {
      this.time = null;
      return;
    }
    this.time = trimmed;
  }
  validateNonEmptyValue(value) {
    if (!this.format) {
      return null;
    }
    const time = parseWithLocale(value, this.format, this.locale);
    if (time.isValid && this.isWithinConfiguredBounds(time)) {
      return {
        isInputInvalid: false,
        invalidReason: void 0
      };
    }
    return {
      isInputInvalid: true,
      invalidReason: time.isValid ? "customError" : time.invalidReason ?? void 0
    };
  }
  revalidateCurrentValue() {
    if (!this.value) {
      return;
    }
    const validity = this.validateNonEmptyValue(this.value);
    if (!validity) {
      return;
    }
    this.isInputInvalid = validity.isInputInvalid;
    this.invalidReason = validity.invalidReason;
    this.emitValidityStateChangeIfChanged();
    this.syncPickerTimeFromValue();
  }
  async onInput(value) {
    this.value = value;
    if (!value) {
      this.isInputInvalid = false;
      this.invalidReason = void 0;
      this.emitValidityStateChangeIfChanged();
      this.updateFormInternalValue(value);
      this.valueChange.emit(value);
      this.syncPickerTimeFromValue();
      return;
    }
    const validity = this.validateNonEmptyValue(value);
    if (!validity) {
      this.syncPickerTimeFromValue();
      return;
    }
    this.isInputInvalid = validity.isInputInvalid;
    this.invalidReason = validity.invalidReason;
    this.emitValidityStateChangeIfChanged();
    this.updateFormInternalValue(value);
    this.valueChange.emit(value);
    this.syncPickerTimeFromValue();
  }
  onTimeIconClick(event) {
    handleIconClick(event, this.show, () => this.openDropdown(), this.inputElementRef);
  }
  async openDropdown() {
    this.syncPickerTimeFromValue();
    return openDropdown(this.dropdownElementRef);
  }
  async closeDropdown() {
    return closeDropdown(this.dropdownElementRef);
  }
  checkClassList() {
    this.isInvalid = this.hostElement.classList.contains("ix-invalid");
  }
  renderInput() {
    return h("div", { class: "input-wrapper" }, h(SlotStart, { slotStartRef: this.slotStartRef, onSlotChange: () => this.updatePaddings() }), h("input", { "aria-haspopup": "true", autoComplete: "off", class: {
      "is-invalid": this.isInputInvalid
    }, style: {
      textAlign: this.textAlignment
    }, disabled: this.disabled, readOnly: this.readonly, required: this.required, ref: this.inputElementRef, type: "text", value: this.value, placeholder: this.placeholder, name: this.name, onInput: (event) => {
      const target = event.target;
      this.onInput(target.value);
    }, onClick: (event) => {
      if (this.show) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, onFocus: async () => {
      this.initialValue = this.value;
      this.ixFocus.emit();
    }, onBlur: () => {
      onInputBlurWithChange(this, this.inputElementRef.current, this.value);
      this.touched = true;
      this.emitValidityStateChangeIfChanged();
    }, onKeyDown: (event) => this.handleInputKeyDown(event) }), h(SlotEnd, { slotEndRef: this.slotEndRef, onSlotChange: () => this.updatePaddings() }, h("ix-icon-button", { tabindex: -1, ref: (ref) => forceTabIndex(ref, -1), "data-testid": "open-time-picker", class: { "time-icon-hidden": this.disabled || this.readonly }, variant: "subtle-tertiary", size: "16", icon: iconClock, onClick: (event) => this.onTimeIconClick(event), "aria-label": this.ariaLabelTimeToggleButton, "aria-expanded": a11yBoolean(this.show) })));
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
    const invalidText = getValidationText(this.isInputInvalid, this.invalidText, this.i18nErrorTimeUnparsable);
    return h(Host, { key: "05e1e1d3292cceef61f48d973f4630cb2a2cea9c", class: {
      disabled: this.disabled,
      readonly: this.readonly,
      active: this.show
    }, onFocusout: () => {
      this.closeDropdown();
    } }, h("ix-field-wrapper", { key: "677e9348d764de3abb6cee1b4c5cf9ba494f9495", label: this.label, helperText: this.helperText, isInvalid: this.isInvalid, invalidText, infoText: this.infoText, isInfo: this.isInfo, isWarning: this.isWarning, warningText: this.warningText, isValid: this.isValid, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, required: this.required, controlRef: this.inputElementRef }, this.renderInput()), h("ix-dropdown", { key: "6c84a486f967e5fbcf4dc8c39952627cc043c1f5", "data-testid": "time-dropdown", trigger: this.inputElementRef.waitForCurrent(), ref: this.dropdownElementRef, closeBehavior: "outside", enableTopLayer: this.enableTopLayer, suppressOverflowBehavior: true, show: this.show, onShowChanged: (event) => {
      this.show = event.detail;
    }, focusTrapOptions: {
      targetElement: this.timePickerRef,
      trapFocusInShadowDom: true
    } }, h("ix-time-picker", { key: "6b469177ff97cdbd9308ed3d95e899cae9c843c8", ref: this.timePickerRef, format: this.format, locale: this.locale, time: this.time ?? "", minTime: this.minTime, maxTime: this.maxTime, hourInterval: this.hourInterval, minuteInterval: this.minuteInterval, secondInterval: this.secondInterval, millisecondInterval: this.millisecondInterval, embedded: true, hideHeader: this.hideHeader, i18nConfirmTime: this.i18nSelectTime, i18nHeader: this.i18nTime, i18nHourColumnHeader: this.i18nHourColumnHeader, i18nSecondColumnHeader: this.i18nSecondColumnHeader, i18nMinuteColumnHeader: this.i18nMinuteColumnHeader, i18nMillisecondColumnHeader: this.i18nMillisecondColumnHeader, i18nAm: this.i18nAm, i18nPm: this.i18nPm, onTimeSelect: (event) => {
      this.onInput(event.detail);
      if (this.initialValue !== event.detail) {
        this.ixChange.emit(event.detail);
        this.initialValue = event.detail;
      }
      this.show = false;
    } })));
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
      }],
      "minTime": [{
        "watchMinTimePropHandler": 0
      }],
      "maxTime": [{
        "watchMaxTimePropHandler": 0
      }],
      "locale": [{
        "watchLocalePropHandler": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], TimeInput.prototype, "hookValidationLifecycle", null);
TimeInput.style = timeInputCss();
export {
  TimeInput as ix_time_input
};
