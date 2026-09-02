import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { m as mapValidationResult, g as checkInternalValidity, T as TextareaElement, o as onInputBlurWithChange, f as onInputFocus, i as getAriaAttributesForInput } from "./input.fc-Cwmx0lGN-CUAAuycg.js";
import { H as HookValidationLifecycle } from "./validation-DXpftrw5-Bpiv-t_k.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import "./rwd.util-JJddxCCh-B7dE3uhl.js";
import "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./index-XBTykBKS-D8xrYMLu.js";
function normalizeCssDimension(value) {
  if (!value) {
    return void 0;
  }
  const unitRegex = /^(\d+(?:\.\d+)?)\s*(px|rem|em|%)?$/;
  const match = unitRegex.exec(value.trim());
  if (!match) {
    return void 0;
  }
  const [, numStr, unit] = match;
  const numValue = Number.parseFloat(numStr);
  if (Number.isNaN(numValue)) {
    return void 0;
  }
  if (unit) {
    return `${numValue}${unit.toLowerCase()}`;
  }
  return `${numValue}px`;
}
const textareaCss = () => `@charset "UTF-8";:host{--ix-input--background:var(--si-sys-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-background-4);--ix-input--background--hover:var(--si-sys-background-4);--ix-input--background--invalid:var(--si-sys-background-1);--ix-input--background--invalid--focus:var(--si-sys-background-4);--ix-input--background--invalid--hover:var(--si-sys-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-background-1);--ix-input--background--warning--focus:var(--si-sys-background-4);--ix-input--background--warning--hover:var(--si-sys-background-4);--ix-input--border-color:var(--si-sys-border-2);--ix-input--border-color--autofill:var(--si-sys-border-2);--ix-input--border-color--disabled:var(--si-sys-border-4);--ix-input--border-color--focus:var(--si-sys-border-1);--ix-input--border-color--hover:var(--si-sys-border-1);--ix-input--border-color--info:var(--si-sys-border-information);--ix-input--border-color--info--active:var(--si-sys-border-information);--ix-input--border-color--info--hover:var(--si-sys-border-information);--ix-input--border-color--invalid:var(--si-sys-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-border-danger);--ix-input--border-color--readonly:var(--si-sys-border-4);--ix-input--border-color--warning:var(--si-sys-background-warning);--ix-input--border-color--warning--active:var(--si-sys-background-warning);--ix-input--border-color--warning--hover:var(--si-sys-background-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-border-4);--ix-input--border-radius:var(--theme-small-border-radius);--ix-input--border-width:var(--theme-border-width-default);--ix-input--box-shadow:none;--ix-input--color:var(--si-sys-text-primary);--ix-input--color--autofill:var(--si-sys-text-primary);--ix-input--color--disabled:var(--si-sys-text-disabled);--ix-input--focus--outline-offset:var(--theme-focus-outline-offset);--ix-input-error--background:var(--si-sys-background-1);--ix-input-error--border-color:var(--si-sys-border-danger);--ix-input-error-icon--color:var(--si-sys-text-danger);--ix-input-extra--background--active:var(--si-sys-background-4);--ix-input-extra--background--hover:var(--si-sys-background-4);--ix-input-gripper--color:var(--si-sys-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-text-disabled);--ix-input-hint--color:var(--si-sys-text-secondary);--ix-input-search-icon--color:var(--si-sys-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-text-primary);--ix-input-select-icon--color--active:var(--si-sys-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-text-primary);--ix-input-unit--color:var(--si-sys-text-secondary)}input{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--ix-input--background, var(--si-sys-background-1));color:var(--ix-input--color, var(--si-sys-text-primary));-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color, var(--si-sys-border-2));border-radius:var(--ix-input--border-radius, var(--theme-small-border-radius));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}input::-moz-placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}input::placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}input.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}input.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),input:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled,input.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--disabled, var(--si-sys-border-4))}input:disabled::-moz-placeholder,input.disabled::-moz-placeholder{color:transparent}input:disabled::placeholder,input.disabled::placeholder{color:transparent}textarea{min-height:2rem;width:auto;padding:0.25rem 0.5rem;background-color:var(--ix-input--background, var(--si-sys-background-1));color:var(--ix-input--color, var(--si-sys-text-primary));-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color, var(--si-sys-border-2));border-radius:var(--ix-input--border-radius, var(--theme-small-border-radius));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}textarea[type=number]{text-align:right}textarea[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important;background-color:var(--ix-input--background--autofill, rgba(0, 0, 0, 0)) !important;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--autofill, var(--si-sys-border-2)) !important;color:var(--ix-input--color--autofill, var(--si-sys-text-primary)) !important}textarea::-moz-placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}textarea::placeholder{color:var(--ix-input-hint--color, var(--si-sys-text-secondary))}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}textarea.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover, var(--si-sys-border-1)) !important;background-color:var(--ix-input--background--hover, var(--si-sys-background-4))}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}textarea.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),textarea:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--si-sys-effects-focus);outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));border-color:var(--ix-input--border-color--focus, var(--si-sys-border-1)) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--readonly, var(--si-sys-border-4))}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled,textarea.disabled{box-shadow:none;background-color:transparent;outline:none;border:var(--ix-input--border-width, var(--theme-border-width-default)) solid var(--ix-input--border-color--disabled, var(--si-sys-border-4))}textarea:disabled::-moz-placeholder,textarea.disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder,textarea.disabled::placeholder{color:transparent}textarea{min-height:2rem;padding:calc(0.375rem - var(--ix-input--border-width, var(--theme-border-width-default))) calc(0.5rem - var(--ix-input--border-width, var(--theme-border-width-default)))}textarea:not([rows]){height:3.25rem}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){border-color:var(--ix-input--border-color--info, var(--si-sys-border-information))}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{border-color:var(--ix-input--border-color--info--hover, var(--si-sys-border-information)) !important}textarea.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--info--active, var(--si-sys-border-information)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--warning, var(--si-sys-background-1));border-color:var(--ix-input--border-color--warning--active, var(--theme-color-warning-bdr)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--warning--hover, var(--si-sys-background-4));border-color:var(--ix-input--border-color--warning--hover, var(--theme-color-warning-bdr)) !important}textarea.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--warning--active, var(--theme-color-warning-bdr)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]),input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]){background-color:var(--ix-input--background--invalid, var(--si-sys-background-1));border-color:var(--ix-input--border-color--invalid, var(--si-sys-border-danger)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):hover{background-color:var(--ix-input--background--invalid--hover, var(--si-sys-background-4));border-color:var(--ix-input--border-color--invalid--hover, var(--si-sys-border-danger)) !important}textarea[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active,input[class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly]):active{border-color:var(--ix-input--border-color--invalid--active, var(--si-sys-border-danger)) !important}:host{--ix-textarea--background--invalid:var(--si-sys-background-1);--ix-textarea--background--invalid--hover:var(--si-sys-background-4);--ix-textarea--background--warning:var(--si-sys-background-1);--ix-textarea--background--warning--hover:var(--si-sys-background-4);--ix-textarea--border-color--info:var(--si-sys-border-information);--ix-textarea--border-color--info--active:var(--si-sys-border-information);--ix-textarea--border-color--info--hover:var(--si-sys-border-information);--ix-textarea--border-color--invalid:var(--si-sys-border-danger);--ix-textarea--border-color--invalid--active:var(--si-sys-border-danger);--ix-textarea--border-color--invalid--hover:var(--si-sys-border-danger);--ix-textarea--border-color--warning--active:var(--si-sys-background-warning);--ix-textarea--border-color--warning--hover:var(--si-sys-background-warning)}:host{display:inline-block;position:relative;width:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%}:host input{width:100%;height:100%}:host .start-container,:host .end-container{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1}:host .start-container{left:var(--ix-input--border-width)}:host .end-container{right:0.25rem}:host .start-container ::slotted(*){margin-left:0.5rem}:host .start-container ::slotted(ix-icon.size-24),:host .start-container ::slotted(ix-icon-button.btn-icon-16){margin-left:0.25rem}:host .start-container ::slotted(ix-icon-button.btn-icon-32){margin-left:0}:host .end-container ::slotted(*){margin-right:calc(0.5rem - 0.25rem)}:host .end-container ::slotted(ix-icon.size-24),:host .end-container ::slotted(ix-icon-button.btn-icon-16){margin-right:calc(0.25rem - 0.25rem)}:host .end-container ::slotted(ix-icon-button.btn-icon-32){margin-right:calc(0rem - 0.25rem)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}:host .input-wrapper:hover input:not(:disabled):not(:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-wrapper:hover input:not(:disabled):not(:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host(.disabled){pointer-events:none}:host(.disabled) input,:host(.disabled) textarea{pointer-events:none;color:var(--ix-input--color--disabled)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{border-color:var(--ix-input--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{border-color:var(--ix-input--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--warning);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--warning--hover);border-color:var(--ix-input--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input{background-color:var(--ix-input--background--invalid);border-color:var(--ix-input--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) .input-wrapper:hover input{background-color:var(--ix-input--background--invalid--hover);border-color:var(--ix-input--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) input:active{border-color:var(--ix-input--border-color--invalid--active) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea{border-color:var(--ix-textarea--border-color--info)}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:hover{border-color:var(--ix-textarea--border-color--info--hover) !important}:host(.ix-info:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:active{border-color:var(--ix-textarea--border-color--info--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea{background-color:var(--ix-textarea--background--warning);border-color:var(--ix-textarea--border-color--warning--active) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:hover{background-color:var(--ix-textarea--background--warning--hover);border-color:var(--ix-textarea--border-color--warning--hover) !important}:host(.ix-warning:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:active{border-color:var(--ix-textarea--border-color--warning--active) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea{background-color:var(--ix-textarea--background--invalid);border-color:var(--ix-textarea--border-color--invalid) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:hover,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:hover{background-color:var(--ix-textarea--background--invalid--hover);border-color:var(--ix-textarea--border-color--invalid--hover) !important}:host([class*=ix-invalid]:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:active,:host(.ix-invalid--required:not(.disabled):not(:disabled):not([disabled]):not(.readonly):not([readonly])) textarea:active{border-color:var(--ix-textarea--border-color--invalid--active) !important}`;
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
let sequentialInstanceId = 0;
const Textarea = class {
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
   * The name of the textarea field.
   */
  name;
  /**
   * The placeholder text for the textarea field.
   */
  placeholder;
  /**
   * The value of the textarea field.
   */
  value = "";
  /**
   * Determines if the textarea field is required.
   */
  required = false;
  /**
   * Determines if the textarea field is disabled.
   */
  disabled = false;
  /**
   * Determines if the textarea field is readonly.
   */
  readonly = false;
  /**
   * The helper text for the textarea field.
   */
  helperText;
  /**
   * The info text for the textarea field.
   */
  infoText;
  /**
   * Determines if the text should be displayed as a tooltip.
   */
  showTextAsTooltip;
  /**
   * The valid text for the textarea field.
   */
  validText;
  /**
   * The warning text for the textarea field.
   */
  warningText;
  /**
   * The label for the textarea field.
   */
  label;
  /**
   * The error text for the textarea field.
   */
  invalidText;
  /**
   * The height of the textarea field (e.g. "52px").
   * Will take precedence over `textareaRows` prop if both are set.
   */
  textareaHeight;
  /**
   * The width of the textarea field (e.g. "200px").
   * Will take precedence over `textareaCols` prop if both are set.
   */
  textareaWidth;
  /**
   * The height of the textarea specified by number of rows.
   * Will be overridden by `textareaHeight` prop if both are set.
   */
  textareaRows;
  /**
   * The width of the textarea specified by number of characters.
   * Will be overridden by `textareaWidth` prop if both are set.
   */
  textareaCols;
  /**
   * Determines the resize behavior of the textarea field.
   * Resizing can be enabled in one direction, both directions or completely disabled.
   */
  resizeBehavior = "both";
  /**
   * The maximum length of the textarea field.
   */
  maxLength;
  /**
   * The minimum length of the textarea field.
   */
  minLength;
  /**
   * Event emitted when the value of the textarea field changes.
   */
  valueChange;
  /**
   * Event emitted when the validity state of the textarea field changes.
   */
  validityStateChange;
  /**
   * Event emitted when the textarea field loses focus.
   */
  ixBlur;
  /**
   * Event emitted when the textarea field loses focus and the value has changed.
   *@since 4.4.0
   */
  ixChange;
  isInvalid = false;
  isValid = false;
  isInfo = false;
  isWarning = false;
  isInvalidByRequired = false;
  textAreaRef = makeRef(() => {
    this.initResizeObserver();
  });
  inputId = `ix-textarea-${sequentialInstanceId++}`;
  touched = false;
  /** @internal */
  initialValue;
  resizeObserver;
  isManuallyResized = false;
  manualHeight;
  manualWidth;
  isProgrammaticResize = false;
  lastObservedInlineHeight;
  lastObservedInlineWidth;
  updateClassMappings(result) {
    mapValidationResult(this, result);
  }
  onDimensionPropsChange() {
    this.resetManualResizeState();
    this.isProgrammaticResize = true;
  }
  onResizeBehaviorChange() {
    this.initResizeObserver();
  }
  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }
  disconnectedCallback() {
    this.resizeObserver?.disconnect();
  }
  resetManualResizeState() {
    this.isManuallyResized = false;
    this.manualHeight = void 0;
    this.manualWidth = void 0;
  }
  updateLastObservedInlineStyles(textarea) {
    this.lastObservedInlineHeight = textarea.style.height;
    this.lastObservedInlineWidth = textarea.style.width;
  }
  hasInlineStyleChange(textarea) {
    return textarea.style.height !== this.lastObservedInlineHeight || textarea.style.width !== this.lastObservedInlineWidth;
  }
  initResizeObserver() {
    this.resizeObserver?.disconnect();
    const textarea = this.textAreaRef.current;
    if (!textarea)
      return;
    if (this.resizeBehavior === "none")
      return;
    let isInitialResize = true;
    this.updateLastObservedInlineStyles(textarea);
    this.resizeObserver = new ResizeObserver(() => {
      const textarea2 = this.textAreaRef.current;
      if (!textarea2) {
        return;
      }
      if (isInitialResize) {
        isInitialResize = false;
        this.updateLastObservedInlineStyles(textarea2);
        return;
      }
      const hasInlineStyleChange = this.hasInlineStyleChange(textarea2);
      this.updateLastObservedInlineStyles(textarea2);
      if (!hasInlineStyleChange) {
        return;
      }
      if (this.isProgrammaticResize) {
        this.isProgrammaticResize = false;
        return;
      }
      this.isManuallyResized = true;
      this.manualHeight = textarea2.style.height;
      this.manualWidth = textarea2.style.width;
    });
    this.resizeObserver.observe(textarea);
  }
  updateFormInternalValue(value) {
    this.formInternals.setFormValue(value);
    this.value = value;
    if (this.textAreaRef.current && this.touched) {
      checkInternalValidity(this, this.textAreaRef.current);
    }
  }
  /** @internal */
  async getAssociatedFormElement() {
    return this.formInternals.form;
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(!!this.value);
  }
  /**
   * Get the native textarea element.
   */
  getNativeInputElement() {
    return this.textAreaRef.waitForCurrent();
  }
  /**
   * Focuses the input field
   */
  async focusInput() {
    return (await this.getNativeInputElement()).focus();
  }
  /**
   * Check if the textarea field has been touched.
   * @internal
   * */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  getTextareaHeight() {
    if (this.isManuallyResized) {
      return this.manualHeight;
    }
    return normalizeCssDimension(this.textareaHeight);
  }
  getTextareaWidth() {
    if (this.isManuallyResized) {
      return this.manualWidth || "100%";
    }
    return normalizeCssDimension(this.textareaWidth);
  }
  render() {
    return h(Host, { key: "a4bda79201945b245783fd6ac869839c7cdc364e", class: {
      disabled: this.disabled,
      readonly: this.readonly
    } }, h("ix-field-wrapper", { key: "121267e2333deb0ca4b8949aa76145c87fb4a969", required: this.required, label: this.label, helperText: this.helperText, invalidText: this.invalidText, infoText: this.infoText, warningText: this.warningText, validText: this.validText, showTextAsTooltip: this.showTextAsTooltip, isInvalid: this.isInvalid, isValid: this.isValid, isInfo: this.isInfo, isWarning: this.isWarning, controlRef: this.textAreaRef }, !!this.maxLength && this.maxLength > 0 && h("ix-typography", { key: "fc66b3e94dd6c1486a8ec33ae33f47c53b962d2f", class: "bottom-text", slot: "bottom-right", textColor: "soft" }, (this.value ?? "").length, "/", this.maxLength), h("div", { key: "0adf8e687a4b14560adde895a1ed91b4017ca35e", class: "input-wrapper" }, h(TextareaElement, { key: "4bcb44249cf68e10a3aeeb05e206198a1154a943", id: this.inputId, minLength: this.minLength, maxLength: this.maxLength, textareaCols: this.textareaCols, textareaRows: this.textareaRows, textareaHeight: this.getTextareaHeight(), textareaWidth: this.getTextareaWidth(), resizeBehavior: this.resizeBehavior, readonly: this.readonly, disabled: this.disabled, isInvalid: this.isInvalid, required: this.required, value: this.value, placeholder: this.placeholder, textAreaRef: this.textAreaRef, ariaAttributes: getAriaAttributesForInput(this), onFocus: () => onInputFocus(this, this.value), valueChange: (value) => this.valueChange.emit(value), updateFormInternalValue: (value) => this.updateFormInternalValue(value), onBlur: () => {
      onInputBlurWithChange(this, this.textAreaRef.current, this.value);
      this.touched = true;
    } }))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "textareaHeight": [{
        "onDimensionPropsChange": 0
      }],
      "textareaWidth": [{
        "onDimensionPropsChange": 0
      }],
      "textareaRows": [{
        "onDimensionPropsChange": 0
      }],
      "textareaCols": [{
        "onDimensionPropsChange": 0
      }],
      "resizeBehavior": [{
        "onResizeBehaviorChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Textarea.prototype, "updateClassMappings", null);
Textarea.style = textareaCss();
export {
  Textarea as ix_textarea
};
