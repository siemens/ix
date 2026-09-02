import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment, H as Host } from "./global-Do6maBom.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { a as hasSlottedContent } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { H as HookValidationLifecycle } from "./validation-DXpftrw5-Bpiv-t_k.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const checkboxCss = () => `@charset "UTF-8";:host{--ix-checkbox-checkmark--color:var(--si-sys-text-on-accent);--ix-checkbox--outline-color--focus:var(--si-sys-effects-focus);--ix-checkbox-label--gap:var(--theme-space-0);--ix-checkbox--border-width:var(--theme-border-width-default);--ix-checkbox--focus--outline-offset:var(--theme-focus-outline-offset);--ix-checkbox-checked--background:var(--si-sys-background-accent);--ix-checkbox-checked--background--active:var(--si-sys-background-accent-active);--ix-checkbox-checked--background--disabled:var(--si-sys-text-disabled);--ix-checkbox-checked--background--hover:var(--si-sys-background-accent-hover);--ix-checkbox-checked--background--info:var(--si-sys-background-information);--ix-checkbox-checked--background--info--active:var(--si-sys-background-information-active);--ix-checkbox-checked--background--info--hover:var(--si-sys-background-information-hover);--ix-checkbox-checked--background--invalid:var(--si-sys-background-danger);--ix-checkbox-checked--background--invalid--active:var(--si-sys-background-danger-active);--ix-checkbox-checked--background--invalid--hover:var(--si-sys-background-danger-hover);--ix-checkbox-checked--background--warning:var(--si-sys-background-warning);--ix-checkbox-checked--background--warning--active:var(--si-sys-background-warning-active);--ix-checkbox-checked--background--warning--hover:var(--si-sys-background-warning-hover);--ix-checkbox-checked--border-color:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--active:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--disabled:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--hover:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--info:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--info--active:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--info--hover:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--invalid:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--invalid--active:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--invalid--hover:rgba(0, 0, 0, 0);--ix-checkbox-checked--border-color--warning:var(--si-sys-background-warning);--ix-checkbox-checked--border-color--warning--active:var(--si-sys-background-warning);--ix-checkbox-checked--border-color--warning--hover:var(--si-sys-background-warning);--ix-checkbox-checked--color:var(--si-sys-text-on-accent);--ix-checkbox-checked--color--active:var(--si-sys-text-on-accent);--ix-checkbox-checked--color--disabled:var(--si-sys-text-inverse);--ix-checkbox-checked--color--hover:var(--si-sys-text-on-accent);--ix-checkbox-checked--color--info:var(--si-sys-text-on-information);--ix-checkbox-checked--color--info--active:var(--si-sys-text-on-information);--ix-checkbox-checked--color--info--hover:var(--si-sys-text-on-information);--ix-checkbox-checked--color--invalid:var(--si-sys-text-on-danger);--ix-checkbox-checked--color--invalid--active:var(--si-sys-text-on-danger);--ix-checkbox-checked--color--invalid--hover:var(--si-sys-text-on-danger);--ix-checkbox-checked--color--warning:var(--si-sys-text-on-warning);--ix-checkbox-checked--color--warning--active:var(--si-sys-text-on-warning);--ix-checkbox-checked--color--warning--hover:var(--si-sys-text-on-warning);--ix-checkbox-label--color:var(--si-sys-text-primary);--ix-checkbox-label--color--disabled:var(--si-sys-text-disabled);--ix-checkbox-mixed--background:var(--si-sys-background-accent);--ix-checkbox-mixed--background--active:var(--si-sys-background-accent-active);--ix-checkbox-mixed--background--disabled:var(--si-sys-text-disabled);--ix-checkbox-mixed--background--hover:var(--si-sys-background-accent-hover);--ix-checkbox-mixed--background--invalid:var(--si-sys-background-danger);--ix-checkbox-mixed--background--invalid--active:var(--si-sys-background-danger-active);--ix-checkbox-mixed--background--invalid--hover:var(--si-sys-background-danger-hover);--ix-checkbox-mixed--background--warning:var(--si-sys-background-warning);--ix-checkbox-mixed--background--warning--active:var(--si-sys-background-warning-active);--ix-checkbox-mixed--background--warning--hover:var(--si-sys-background-warning-hover);--ix-checkbox-mixed--border-color:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--active:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--disabled:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--hover:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--info:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--info--active:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--info--hover:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--invalid:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--invalid--active:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--invalid--hover:rgba(0, 0, 0, 0);--ix-checkbox-mixed--border-color--warning:var(--si-sys-background-warning);--ix-checkbox-mixed--border-color--warning--active:var(--si-sys-background-warning);--ix-checkbox-mixed--border-color--warning--hover:var(--si-sys-background-warning);--ix-checkbox-mixed--color:var(--si-sys-text-on-accent);--ix-checkbox-mixed--color--active:var(--si-sys-text-on-accent);--ix-checkbox-mixed--color--disabled:var(--si-sys-text-inverse);--ix-checkbox-mixed--color--hover:var(--si-sys-text-on-accent);--ix-checkbox-mixed--color--info:var(--si-sys-text-on-information);--ix-checkbox-mixed--color--info--active:var(--si-sys-text-on-information);--ix-checkbox-mixed--color--info--hover:var(--si-sys-text-on-information);--ix-checkbox-mixed--color--invalid:var(--si-sys-text-on-danger);--ix-checkbox-mixed--color--invalid--active:var(--si-sys-text-on-danger);--ix-checkbox-mixed--color--invalid--hover:var(--si-sys-text-on-danger);--ix-checkbox-mixed--color--warning:var(--si-sys-text-on-warning);--ix-checkbox-mixed--color--warning--active:var(--si-sys-text-on-warning);--ix-checkbox-mixed--color--warning--hover:var(--si-sys-text-on-warning);--ix-checkbox-unchecked--background:var(--si-sys-background-1);--ix-checkbox-unchecked--background--active:var(--si-sys-background-active);--ix-checkbox-unchecked--background--disabled:rgba(0, 0, 0, 0);--ix-checkbox-unchecked--background--hover:var(--si-sys-background-hover);--ix-checkbox-unchecked--background--info:var(--si-sys-background-1);--ix-checkbox-unchecked--background--info--active:var(--si-sys-background-active);--ix-checkbox-unchecked--background--info--hover:var(--si-sys-background-hover);--ix-checkbox-unchecked--background--invalid:var(--si-sys-background-1);--ix-checkbox-unchecked--background--invalid--active:var(--si-sys-background-active);--ix-checkbox-unchecked--background--invalid--hover:var(--si-sys-background-hover);--ix-checkbox-unchecked--background--warning:var(--si-sys-background-1);--ix-checkbox-unchecked--background--warning--active:var(--si-sys-background-active);--ix-checkbox-unchecked--background--warning--hover:var(--si-sys-background-hover);--ix-checkbox-unchecked--border-color:var(--si-sys-border-2);--ix-checkbox-unchecked--border-color--active:var(--si-sys-border-2);--ix-checkbox-unchecked--border-color--disabled:var(--si-sys-text-disabled);--ix-checkbox-unchecked--border-color--hover:var(--si-sys-border-2);--ix-checkbox-unchecked--border-color--info:var(--si-sys-border-information);--ix-checkbox-unchecked--border-color--info--active:var(--si-sys-border-information);--ix-checkbox-unchecked--border-color--info--hover:var(--si-sys-border-information);--ix-checkbox-unchecked--border-color--invalid:var(--si-sys-border-danger);--ix-checkbox-unchecked--border-color--invalid--active:var(--si-sys-border-danger);--ix-checkbox-unchecked--border-color--invalid--hover:var(--si-sys-border-danger);--ix-checkbox-unchecked--border-color--warning:var(--si-sys-background-warning);--ix-checkbox-unchecked--border-color--warning--active:var(--si-sys-background-warning);--ix-checkbox-unchecked--border-color--warning--hover:var(--si-sys-background-warning)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .checkbox-button{height:1.5rem;width:1.5rem;flex-shrink:0;display:flex;align-items:center;justify-content:center}:host button{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:1.125rem;min-width:1.125rem;max-width:1.125rem;height:1.125rem;min-height:1.125rem;max-height:1.125rem}:host button:disabled{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host button:focus-visible{outline:0.0625rem solid var(--ix-checkbox--outline-color--focus);outline-offset:var(--ix-checkbox--focus--outline-offset)}:host input[type=checkbox]{display:none}:host label{display:flex;justify-content:flex-start;align-items:center;gap:var(--ix-checkbox-label--gap);width:100%;height:100%;cursor:pointer}:host(.label-less) ix-typography{display:none}:host button{background-color:var(--ix-checkbox-unchecked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color)}:host(:hover) button{background-color:var(--ix-checkbox-unchecked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--hover)}:host(:active) button{background-color:var(--ix-checkbox-unchecked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--active)}:host(.checked) button,:host(.indeterminate) button{background-color:var(--ix-checkbox-checked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color)}:host(.checked:hover) button,:host(.indeterminate:hover) button{background-color:var(--ix-checkbox-checked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--hover)}:host(.checked:active) button,:host(.indeterminate:active) button{background-color:var(--ix-checkbox-checked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--active)}:host(.disabled) button{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host(.checked.disabled) button,:host(.indeterminate.disabled) button{background-color:var(--ix-checkbox-checked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--disabled)}:host(.ix-info) button{--ix-checkbox-unchecked--background:var(     --ix-checkbox-unchecked--background--info   );--ix-checkbox-unchecked--background--hover:var(     --ix-checkbox-unchecked--background--info--hover   );--ix-checkbox-unchecked--background--active:var(     --ix-checkbox-unchecked--background--info--active   );--ix-checkbox-unchecked--border-color:var(     --ix-checkbox-unchecked--border-color--info   );--ix-checkbox-unchecked--border-color--hover:var(     --ix-checkbox-unchecked--border-color--info--hover   );--ix-checkbox-unchecked--border-color--active:var(     --ix-checkbox-unchecked--border-color--info--active   );--ix-checkbox-checked--background:var(     --ix-checkbox-checked--background--info   );--ix-checkbox-checked--background--hover:var(     --ix-checkbox-checked--background--info--hover   );--ix-checkbox-checked--background--active:var(     --ix-checkbox-checked--background--info--active   );--ix-checkbox-checked--border-color:var(     --ix-checkbox-checked--border-color--info   );--ix-checkbox-checked--border-color--hover:var(     --ix-checkbox-checked--border-color--info--hover   );--ix-checkbox-checked--border-color--active:var(     --ix-checkbox-checked--border-color--info--active   );--ix-checkbox-mixed--background:var(     --ix-checkbox-mixed--background--info   );--ix-checkbox-mixed--background--hover:var(     --ix-checkbox-mixed--background--info--hover   );--ix-checkbox-mixed--background--active:var(     --ix-checkbox-mixed--background--info--active   );--ix-checkbox-mixed--border-color:var(     --ix-checkbox-mixed--border-color--info   );--ix-checkbox-mixed--border-color--hover:var(     --ix-checkbox-mixed--border-color--info--hover   );--ix-checkbox-mixed--border-color--active:var(     --ix-checkbox-mixed--border-color--info--active   );background-color:var(--ix-checkbox-unchecked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color)}:host(.ix-info:hover) button{background-color:var(--ix-checkbox-unchecked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--hover)}:host(.ix-info:active) button{background-color:var(--ix-checkbox-unchecked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--active)}:host(.ix-info.checked) button,:host(.ix-info.indeterminate) button{background-color:var(--ix-checkbox-checked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color)}:host(.ix-info.checked:hover) button,:host(.ix-info.indeterminate:hover) button{background-color:var(--ix-checkbox-checked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--hover)}:host(.ix-info.checked:active) button,:host(.ix-info.indeterminate:active) button{background-color:var(--ix-checkbox-checked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--active)}:host(.ix-info.disabled) button{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) button,:host(.ix-info.indeterminate.disabled) button{background-color:var(--ix-checkbox-checked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--disabled)}:host(.ix-warning) button{--ix-checkbox-unchecked--background:var(     --ix-checkbox-unchecked--background--warning   );--ix-checkbox-unchecked--background--hover:var(     --ix-checkbox-unchecked--background--warning--hover   );--ix-checkbox-unchecked--background--active:var(     --ix-checkbox-unchecked--background--warning--active   );--ix-checkbox-unchecked--border-color:var(     --ix-checkbox-unchecked--border-color--warning   );--ix-checkbox-unchecked--border-color--hover:var(     --ix-checkbox-unchecked--border-color--warning--hover   );--ix-checkbox-unchecked--border-color--active:var(     --ix-checkbox-unchecked--border-color--warning--active   );--ix-checkbox-checked--background:var(     --ix-checkbox-checked--background--warning   );--ix-checkbox-checked--background--hover:var(     --ix-checkbox-checked--background--warning--hover   );--ix-checkbox-checked--background--active:var(     --ix-checkbox-checked--background--warning--active   );--ix-checkbox-checked--border-color:var(     --ix-checkbox-checked--border-color--warning   );--ix-checkbox-checked--border-color--hover:var(     --ix-checkbox-checked--border-color--warning--hover   );--ix-checkbox-checked--border-color--active:var(     --ix-checkbox-checked--border-color--warning--active   );--ix-checkbox-mixed--background:var(     --ix-checkbox-mixed--background--warning   );--ix-checkbox-mixed--background--hover:var(     --ix-checkbox-mixed--background--warning--hover   );--ix-checkbox-mixed--background--active:var(     --ix-checkbox-mixed--background--warning--active   );--ix-checkbox-mixed--border-color:var(     --ix-checkbox-mixed--border-color--warning   );--ix-checkbox-mixed--border-color--hover:var(     --ix-checkbox-mixed--border-color--warning--hover   );--ix-checkbox-mixed--border-color--active:var(     --ix-checkbox-mixed--border-color--warning--active   );background-color:var(--ix-checkbox-unchecked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color)}:host(.ix-warning:hover) button{background-color:var(--ix-checkbox-unchecked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--hover)}:host(.ix-warning:active) button{background-color:var(--ix-checkbox-unchecked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--active)}:host(.ix-warning.checked) button,:host(.ix-warning.indeterminate) button{background-color:var(--ix-checkbox-checked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color)}:host(.ix-warning.checked:hover) button,:host(.ix-warning.indeterminate:hover) button{background-color:var(--ix-checkbox-checked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--hover)}:host(.ix-warning.checked:active) button,:host(.ix-warning.indeterminate:active) button{background-color:var(--ix-checkbox-checked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--active)}:host(.ix-warning.disabled) button{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) button,:host(.ix-warning.indeterminate.disabled) button{background-color:var(--ix-checkbox-checked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--disabled)}:host(.ix-invalid--required) button{--ix-checkbox-unchecked--background:var(     --ix-checkbox-unchecked--background--invalid   );--ix-checkbox-unchecked--background--hover:var(     --ix-checkbox-unchecked--background--invalid--hover   );--ix-checkbox-unchecked--background--active:var(     --ix-checkbox-unchecked--background--invalid--active   );--ix-checkbox-unchecked--border-color:var(     --ix-checkbox-unchecked--border-color--invalid   );--ix-checkbox-unchecked--border-color--hover:var(     --ix-checkbox-unchecked--border-color--invalid--hover   );--ix-checkbox-unchecked--border-color--active:var(     --ix-checkbox-unchecked--border-color--invalid--active   );--ix-checkbox-checked--background:var(     --ix-checkbox-checked--background--invalid   );--ix-checkbox-checked--background--hover:var(     --ix-checkbox-checked--background--invalid--hover   );--ix-checkbox-checked--background--active:var(     --ix-checkbox-checked--background--invalid--active   );--ix-checkbox-checked--border-color:var(     --ix-checkbox-checked--border-color--invalid   );--ix-checkbox-checked--border-color--hover:var(     --ix-checkbox-checked--border-color--invalid--hover   );--ix-checkbox-checked--border-color--active:var(     --ix-checkbox-checked--border-color--invalid--active   );--ix-checkbox-mixed--background:var(     --ix-checkbox-mixed--background--invalid   );--ix-checkbox-mixed--background--hover:var(     --ix-checkbox-mixed--background--invalid--hover   );--ix-checkbox-mixed--background--active:var(     --ix-checkbox-mixed--background--invalid--active   );--ix-checkbox-mixed--border-color:var(     --ix-checkbox-mixed--border-color--invalid   );--ix-checkbox-mixed--border-color--hover:var(     --ix-checkbox-mixed--border-color--invalid--hover   );--ix-checkbox-mixed--border-color--active:var(     --ix-checkbox-mixed--border-color--invalid--active   );background-color:var(--ix-checkbox-unchecked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color)}:host(.ix-invalid--required:hover) button{background-color:var(--ix-checkbox-unchecked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--hover)}:host(.ix-invalid--required:active) button{background-color:var(--ix-checkbox-unchecked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--active)}:host(.ix-invalid--required.checked) button,:host(.ix-invalid--required.indeterminate) button{background-color:var(--ix-checkbox-checked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color)}:host(.ix-invalid--required.checked:hover) button,:host(.ix-invalid--required.indeterminate:hover) button{background-color:var(--ix-checkbox-checked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) button,:host(.ix-invalid--required.indeterminate:active) button{background-color:var(--ix-checkbox-checked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--active)}:host(.ix-invalid--required.disabled) button{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) button,:host(.ix-invalid--required.indeterminate.disabled) button{background-color:var(--ix-checkbox-checked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--disabled)}:host(.ix-invalid) button{--ix-checkbox-unchecked--background:var(     --ix-checkbox-unchecked--background--invalid   );--ix-checkbox-unchecked--background--hover:var(     --ix-checkbox-unchecked--background--invalid--hover   );--ix-checkbox-unchecked--background--active:var(     --ix-checkbox-unchecked--background--invalid--active   );--ix-checkbox-unchecked--border-color:var(     --ix-checkbox-unchecked--border-color--invalid   );--ix-checkbox-unchecked--border-color--hover:var(     --ix-checkbox-unchecked--border-color--invalid--hover   );--ix-checkbox-unchecked--border-color--active:var(     --ix-checkbox-unchecked--border-color--invalid--active   );--ix-checkbox-checked--background:var(     --ix-checkbox-checked--background--invalid   );--ix-checkbox-checked--background--hover:var(     --ix-checkbox-checked--background--invalid--hover   );--ix-checkbox-checked--background--active:var(     --ix-checkbox-checked--background--invalid--active   );--ix-checkbox-checked--border-color:var(     --ix-checkbox-checked--border-color--invalid   );--ix-checkbox-checked--border-color--hover:var(     --ix-checkbox-checked--border-color--invalid--hover   );--ix-checkbox-checked--border-color--active:var(     --ix-checkbox-checked--border-color--invalid--active   );--ix-checkbox-mixed--background:var(     --ix-checkbox-mixed--background--invalid   );--ix-checkbox-mixed--background--hover:var(     --ix-checkbox-mixed--background--invalid--hover   );--ix-checkbox-mixed--background--active:var(     --ix-checkbox-mixed--background--invalid--active   );--ix-checkbox-mixed--border-color:var(     --ix-checkbox-mixed--border-color--invalid   );--ix-checkbox-mixed--border-color--hover:var(     --ix-checkbox-mixed--border-color--invalid--hover   );--ix-checkbox-mixed--border-color--active:var(     --ix-checkbox-mixed--border-color--invalid--active   );background-color:var(--ix-checkbox-unchecked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color)}:host(.ix-invalid:hover) button{background-color:var(--ix-checkbox-unchecked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--hover)}:host(.ix-invalid:active) button{background-color:var(--ix-checkbox-unchecked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--active)}:host(.ix-invalid.checked) button,:host(.ix-invalid.indeterminate) button{background-color:var(--ix-checkbox-checked--background);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color)}:host(.ix-invalid.checked:hover) button,:host(.ix-invalid.indeterminate:hover) button{background-color:var(--ix-checkbox-checked--background--hover);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--hover)}:host(.ix-invalid.checked:active) button,:host(.ix-invalid.indeterminate:active) button{background-color:var(--ix-checkbox-checked--background--active);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--active)}:host(.ix-invalid.disabled) button{background-color:var(--ix-checkbox-unchecked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) button,:host(.ix-invalid.indeterminate.disabled) button{background-color:var(--ix-checkbox-checked--background--disabled);border:var(--ix-checkbox--border-width) solid var(--ix-checkbox-checked--border-color--disabled)}:host(.disabled){pointer-events:none}:host(.disabled) button,:host(.disabled) label,:host(.disabled) input{pointer-events:none}`;
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
const Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkedChange = createEvent(this, "checkedChange", 7);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.ixBlur = createEvent(this, "ixBlur", 7);
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
   * Name of the checkbox component
   */
  name;
  /**
   * Value of the checkbox component
   */
  value = "on";
  /**
   * Label for the checkbox component
   */
  label;
  /**
   * Checked state of the checkbox component
   */
  checked = false;
  /**
   * Disabled state of the checkbox component
   */
  disabled = false;
  /**
   * Indeterminate state of the checkbox component
   */
  indeterminate = false;
  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  required = false;
  /**
   * Event emitted when the checked state of the checkbox changes
   */
  checkedChange;
  /**
   * Event emitted when the value of the checkbox changes
   */
  valueChange;
  /**
   * Event emitted when the checkbox is blurred
   */
  ixBlur;
  touched = false;
  hasDefaultSlotElements = false;
  defaultSlotElement;
  inputRef = makeRef((checkboxRef) => {
    checkboxRef.checked = this.checked;
  });
  setCheckedState(newChecked) {
    this.checked = newChecked;
    this.checkedChange.emit(this.checked);
  }
  onCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  componentDidLoad() {
    this.updateDefaultSlotElements();
  }
  updateDefaultSlotElements() {
    this.hasDefaultSlotElements = hasSlottedContent(this.defaultSlotElement);
  }
  get isLabelLess() {
    return !this.label && !this.hasDefaultSlotElements;
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? "on");
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  /** @internal */
  hasValidValue() {
    return Promise.resolve(this.checked);
  }
  /** @internal */
  getAssociatedFormElement() {
    return Promise.resolve(this.formInternals.form);
  }
  /** @internal */
  isTouched() {
    return Promise.resolve(this.touched);
  }
  updateClassMappings() {
  }
  renderCheckmark() {
    return h("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, this.indeterminate && h(Fragment, null, h("rect", { width: "18", height: "18", fill: "transparent" }), h("rect", { x: "3", y: "8", width: "12", height: "2", fill: "var(--ix-checkbox-checkmark--color)" })), this.checked && h("path", { d: "M3.65625 8.15625L8.4375 12.9375L14.625 3.9375", stroke: "var(--ix-checkbox-checkmark--color)", "stroke-width": "2" }));
  }
  render() {
    return h(Host, { key: "3118dd14737a9169e7c79bce82c26cabb8a39cca", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "checkbox", class: {
      disabled: this.disabled,
      checked: this.checked,
      indeterminate: this.indeterminate,
      "label-less": this.isLabelLess
    }, onFocus: () => this.touched = true, onBlur: () => this.ixBlur.emit() }, h("label", { key: "cfff472520f67f0b5bfc2e3aa85f9553008dfc0a" }, h("input", { key: "4a68190ffddbec159b3da2ac52d2fbd0f00cf8eb", "aria-checked": a11yBoolean(this.checked), required: this.required, disabled: this.disabled, checked: this.checked, ref: this.inputRef, type: "checkbox", onChange: () => this.setCheckedState(!this.checked) }), h("div", { key: "ea47537dbef294f4617eadb32997b280d7fc1e32", class: "checkbox-button" }, h("button", { key: "4e01e3698d787bacc8e3adde418d15f05cf3ddad", disabled: this.disabled, class: {
      checked: this.checked
    }, onClick: () => this.setCheckedState(!this.checked) }, this.renderCheckmark())), h("ix-typography", { key: "c9b240ecf01acd34460d101f4fa9e9763d955308", format: "label", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "a5164a0dde4d1bb167e257018b52e4d690e3b3fe", onSlotchange: () => this.updateDefaultSlotElements(), ref: (element) => this.defaultSlotElement = element }))));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "checked": [{
        "onCheckedChange": 0
      }],
      "value": [{
        "onValueChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Checkbox.prototype, "updateClassMappings", null);
Checkbox.style = checkboxCss();
export {
  Checkbox as ix_checkbox
};
