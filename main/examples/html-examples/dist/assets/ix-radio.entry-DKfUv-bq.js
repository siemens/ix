import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { c as createClassMutationObserver } from "./validation-aas5KJBP-DcF6SYCa.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const radioCss = () => `@charset "UTF-8";:host{--ix-radio-checkmark--background:var(--si-sys-color-text-on-accent);--ix-radio--outline-color--focus:var(--si-sys-color-effects-focus);--ix-radio-checked--background:var(--si-sys-color-background-accent);--ix-radio-checked--background--active:var(--si-sys-color-background-accent-active);--ix-radio-checked--background--disabled:var(--si-sys-color-text-disabled);--ix-radio-checked--background--hover:var(--si-sys-color-background-accent-hover);--ix-radio-checked--background--info:var(--si-sys-color-background-information);--ix-radio-checked--background--info--active:var(--si-sys-color-background-information-active);--ix-radio-checked--background--info--hover:var(--si-sys-color-background-information-hover);--ix-radio-checked--background--invalid:var(--si-sys-color-background-danger);--ix-radio-checked--background--invalid--active:var(--si-sys-color-background-danger-active);--ix-radio-checked--background--invalid--hover:var(--si-sys-color-background-danger-hover);--ix-radio-checked--background--warning:var(--si-sys-color-background-warning);--ix-radio-checked--background--warning--active:var(--si-sys-color-background-warning-active);--ix-radio-checked--background--warning--hover:var(--si-sys-color-background-warning-hover);--ix-radio-checked--border-color:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--active:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--disabled:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--hover:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--info:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--info--active:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--info--hover:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--invalid:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--invalid--active:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--invalid--hover:rgba(0, 0, 0, 0);--ix-radio-checked--border-color--warning:var(--si-sys-color-border-warning);--ix-radio-checked--border-color--warning--active:var(--si-sys-color-border-warning);--ix-radio-checked--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-radio-checked--color:var(--si-sys-color-text-on-accent);--ix-radio-checked--color--active:var(--si-sys-color-text-on-accent);--ix-radio-checked--color--disabled:var(--si-sys-color-text-inverse);--ix-radio-checked--color--hover:var(--si-sys-color-text-on-accent);--ix-radio-checked--color--info:var(--si-sys-color-text-on-information);--ix-radio-checked--color--info--active:var(--si-sys-color-text-on-information);--ix-radio-checked--color--info--hover:var(--si-sys-color-text-on-information);--ix-radio-checked--color--invalid:var(--si-sys-color-text-on-danger);--ix-radio-checked--color--invalid--active:var(--si-sys-color-text-on-danger);--ix-radio-checked--color--invalid--hover:var(--si-sys-color-text-on-danger);--ix-radio-checked--color--warning:var(--si-sys-color-text-on-warning);--ix-radio-checked--color--warning--active:var(--si-sys-color-text-on-warning);--ix-radio-checked--color--warning--hover:var(--si-sys-color-text-on-warning);--ix-radio-label--color:var(--si-sys-color-text-primary);--ix-radio-label--color--disabled:var(--si-sys-color-text-disabled);--ix-radio-unchecked--background:var(--si-sys-color-background-1);--ix-radio-unchecked--background--active:var(--si-sys-color-background-selected);--ix-radio-unchecked--background--disabled:rgba(0, 0, 0, 0);--ix-radio-unchecked--background--hover:var(--si-sys-color-background-hover);--ix-radio-unchecked--background--info:var(--si-sys-color-background-1);--ix-radio-unchecked--background--info--active:var(--si-sys-color-background-selected);--ix-radio-unchecked--background--info--hover:var(--si-sys-color-background-hover);--ix-radio-unchecked--background--invalid:var(--si-sys-color-background-1);--ix-radio-unchecked--background--invalid--active:var(--si-sys-color-background-selected);--ix-radio-unchecked--background--invalid--hover:var(--si-sys-color-background-hover);--ix-radio-unchecked--background--warning:var(--si-sys-color-background-1);--ix-radio-unchecked--background--warning--active:var(--si-sys-color-background-selected);--ix-radio-unchecked--background--warning--hover:var(--si-sys-color-background-hover);--ix-radio-unchecked--border-color:var(--si-sys-color-border-2);--ix-radio-unchecked--border-color--active:var(--si-sys-color-border-2);--ix-radio-unchecked--border-color--disabled:var(--si-sys-color-text-disabled);--ix-radio-unchecked--border-color--hover:var(--si-sys-color-border-2);--ix-radio-unchecked--border-color--info:var(--si-sys-color-border-information);--ix-radio-unchecked--border-color--info--active:var(--si-sys-color-border-information);--ix-radio-unchecked--border-color--info--hover:var(--si-sys-color-border-information);--ix-radio-unchecked--border-color--invalid:var(--si-sys-color-border-danger);--ix-radio-unchecked--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-radio-unchecked--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-radio-unchecked--border-color--warning:var(--si-sys-color-border-warning);--ix-radio-unchecked--border-color--warning--active:var(--si-sys-color-border-warning);--ix-radio-unchecked--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-radio-checkmark--border-color:white}:host{--ix-radio--border-width:var(--si-sys-sizing-border-width-default);--ix-radio--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-radio-checkmark--border-width-initial:var(--si-sys-sizing-border-width-default);--ix-radio-checkmark--border-radius:var(--si-sys-sizing-border-radius-full);--ix-radio--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-radio-checkmark--width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--min-width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--max-width:var(--si-sys-sizing-size-60);--ix-radio-checkmark--height:var(--si-sys-sizing-size-60);--ix-radio-checkmark--min-height:var(--si-sys-sizing-size-60);--ix-radio-checkmark--max-height:var(--si-sys-sizing-size-60);--ix-radio-button--height:var(--si-sys-sizing-size-70);--ix-radio-button--width:var(--si-sys-sizing-size-70);--ix-radio-selection-indicator--width:var(--si-sys-sizing-size-30);--ix-radio-selection-indicator--height:var(--si-sys-sizing-size-30);--ix-radio--margin:var(--si-sys-sizing-spacing-y-10) 0 var(--si-sys-sizing-spacing-y-10)     var(--si-sys-sizing-spacing-x-40)}:host{display:inline-block;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .radio-checkmark{all:unset;display:inline-flex;position:relative;align-items:center;justify-content:center;width:var(--ix-radio-checkmark--width);min-width:var(--ix-radio-checkmark--min-width);max-width:var(--ix-radio-checkmark--max-width);height:var(--ix-radio-checkmark--height);min-height:var(--ix-radio-checkmark--min-height);max-height:var(--ix-radio-checkmark--max-height);border:var(--ix-radio-checkmark--border-width-initial) solid var(--ix-radio-checkmark--border-color);border-radius:var(--ix-radio-checkmark--border-radius)}:host .radio-button{height:var(--ix-radio-button--height);width:var(--ix-radio-button--width);display:flex;align-items:center;justify-content:center}:host label{display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%}:host .checkmark{border-radius:var(--ix-radio-checkmark--border-radius);background-color:var(--ix-radio-checkmark--background);width:var(--ix-radio-selection-indicator--width);height:var(--ix-radio-selection-indicator--height)}:host .radio-checkmark{background-color:var(--ix-radio-unchecked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color)}:host(:hover) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--hover)}:host(:active) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--active)}:host(.checked) .radio-checkmark,:host([indeterminate]) .radio-checkmark{background-color:var(--ix-radio-checked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color)}:host(.checked:hover) .radio-checkmark,:host([indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio-checked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--hover)}:host(.checked:active) .radio-checkmark,:host([indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio-checked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--disabled)}:host(.checked.disabled) .radio-checkmark,:host([indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio-checked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--disabled)}:host(:focus-visible){outline:var(--ix-radio--outline-width--focus) solid var(--ix-radio--outline-color--focus);outline-offset:var(--ix-radio--focus--outline-offset)}ix-typography{margin:var(--ix-radio--margin)}:host(.ix-info:not(.disabled)) .radio-checkmark{--ix-radio-unchecked--background:var(     --ix-radio-unchecked--background--info   );--ix-radio-unchecked--background--hover:var(     --ix-radio-unchecked--background--info--hover   );--ix-radio-unchecked--background--active:var(     --ix-radio-unchecked--background--info--active   );--ix-radio-unchecked--border-color:var(     --ix-radio-unchecked--border-color--info   );--ix-radio-unchecked--border-color--hover:var(     --ix-radio-unchecked--border-color--info--hover   );--ix-radio-unchecked--border-color--active:var(     --ix-radio-unchecked--border-color--info--active   );--ix-radio-checked--background:var(     --ix-radio-checked--background--info   );--ix-radio-checked--background--hover:var(     --ix-radio-checked--background--info--hover   );--ix-radio-checked--background--active:var(     --ix-radio-checked--background--info--active   );--ix-radio-checked--border-color:var(     --ix-radio-checked--border-color--info   );--ix-radio-checked--border-color--hover:var(     --ix-radio-checked--border-color--info--hover   );--ix-radio-checked--border-color--active:var(     --ix-radio-checked--border-color--info--active   );--ix-radio-mixed--background:var(     --ix-radio-mixed--background--info   );--ix-radio-mixed--background--hover:var(     --ix-radio-mixed--background--info--hover   );--ix-radio-mixed--background--active:var(     --ix-radio-mixed--background--info--active   );--ix-radio-mixed--border-color:var(     --ix-radio-mixed--border-color--info   );--ix-radio-mixed--border-color--hover:var(     --ix-radio-mixed--border-color--info--hover   );--ix-radio-mixed--border-color--active:var(     --ix-radio-mixed--border-color--info--active   )}:host(.ix-info) .radio-checkmark{background-color:var(--ix-radio-unchecked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color)}:host(.ix-info:hover) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--hover)}:host(.ix-info:active) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--active)}:host(.ix-info.checked) .radio-checkmark,:host(.ix-info[indeterminate]) .radio-checkmark{background-color:var(--ix-radio-checked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color)}:host(.ix-info.checked:hover) .radio-checkmark,:host(.ix-info[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio-checked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--hover)}:host(.ix-info.checked:active) .radio-checkmark,:host(.ix-info[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio-checked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--active)}:host(.ix-info.disabled) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--disabled)}:host(.ix-info.checked.disabled) .radio-checkmark,:host(.ix-info[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio-checked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--disabled)}:host(.ix-warning:not(.disabled)) .radio-checkmark{--ix-radio-unchecked--background:var(     --ix-radio-unchecked--background--warning   );--ix-radio-unchecked--background--hover:var(     --ix-radio-unchecked--background--warning--hover   );--ix-radio-unchecked--background--active:var(     --ix-radio-unchecked--background--warning--active   );--ix-radio-unchecked--border-color:var(     --ix-radio-unchecked--border-color--warning   );--ix-radio-unchecked--border-color--hover:var(     --ix-radio-unchecked--border-color--warning--hover   );--ix-radio-unchecked--border-color--active:var(     --ix-radio-unchecked--border-color--warning--active   );--ix-radio-checked--background:var(     --ix-radio-checked--background--warning   );--ix-radio-checked--background--hover:var(     --ix-radio-checked--background--warning--hover   );--ix-radio-checked--background--active:var(     --ix-radio-checked--background--warning--active   );--ix-radio-checked--border-color:var(     --ix-radio-checked--border-color--warning   );--ix-radio-checked--border-color--hover:var(     --ix-radio-checked--border-color--warning--hover   );--ix-radio-checked--border-color--active:var(     --ix-radio-checked--border-color--warning--active   );--ix-radio-mixed--background:var(     --ix-radio-mixed--background--warning   );--ix-radio-mixed--background--hover:var(     --ix-radio-mixed--background--warning--hover   );--ix-radio-mixed--background--active:var(     --ix-radio-mixed--background--warning--active   );--ix-radio-mixed--border-color:var(     --ix-radio-mixed--border-color--warning   );--ix-radio-mixed--border-color--hover:var(     --ix-radio-mixed--border-color--warning--hover   );--ix-radio-mixed--border-color--active:var(     --ix-radio-mixed--border-color--warning--active   )}:host(.ix-warning) .radio-checkmark{background-color:var(--ix-radio-unchecked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color)}:host(.ix-warning:hover) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--hover)}:host(.ix-warning:active) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--active)}:host(.ix-warning.checked) .radio-checkmark,:host(.ix-warning[indeterminate]) .radio-checkmark{background-color:var(--ix-radio-checked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color)}:host(.ix-warning.checked:hover) .radio-checkmark,:host(.ix-warning[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio-checked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--hover)}:host(.ix-warning.checked:active) .radio-checkmark,:host(.ix-warning[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio-checked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--active)}:host(.ix-warning.disabled) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--disabled)}:host(.ix-warning.checked.disabled) .radio-checkmark,:host(.ix-warning[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio-checked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--disabled)}:host(.ix-invalid--required:not(.disabled)) .radio-checkmark{--ix-radio-unchecked--background:var(     --ix-radio-unchecked--background--invalid   );--ix-radio-unchecked--background--hover:var(     --ix-radio-unchecked--background--invalid--hover   );--ix-radio-unchecked--background--active:var(     --ix-radio-unchecked--background--invalid--active   );--ix-radio-unchecked--border-color:var(     --ix-radio-unchecked--border-color--invalid   );--ix-radio-unchecked--border-color--hover:var(     --ix-radio-unchecked--border-color--invalid--hover   );--ix-radio-unchecked--border-color--active:var(     --ix-radio-unchecked--border-color--invalid--active   );--ix-radio-checked--background:var(     --ix-radio-checked--background--invalid   );--ix-radio-checked--background--hover:var(     --ix-radio-checked--background--invalid--hover   );--ix-radio-checked--background--active:var(     --ix-radio-checked--background--invalid--active   );--ix-radio-checked--border-color:var(     --ix-radio-checked--border-color--invalid   );--ix-radio-checked--border-color--hover:var(     --ix-radio-checked--border-color--invalid--hover   );--ix-radio-checked--border-color--active:var(     --ix-radio-checked--border-color--invalid--active   );--ix-radio-mixed--background:var(     --ix-radio-mixed--background--invalid   );--ix-radio-mixed--background--hover:var(     --ix-radio-mixed--background--invalid--hover   );--ix-radio-mixed--background--active:var(     --ix-radio-mixed--background--invalid--active   );--ix-radio-mixed--border-color:var(     --ix-radio-mixed--border-color--invalid   );--ix-radio-mixed--border-color--hover:var(     --ix-radio-mixed--border-color--invalid--hover   );--ix-radio-mixed--border-color--active:var(     --ix-radio-mixed--border-color--invalid--active   )}:host(.ix-invalid--required) .radio-checkmark{background-color:var(--ix-radio-unchecked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color)}:host(.ix-invalid--required:hover) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--hover)}:host(.ix-invalid--required:active) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--active)}:host(.ix-invalid--required.checked) .radio-checkmark,:host(.ix-invalid--required[indeterminate]) .radio-checkmark{background-color:var(--ix-radio-checked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color)}:host(.ix-invalid--required.checked:hover) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio-checked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--hover)}:host(.ix-invalid--required.checked:active) .radio-checkmark,:host(.ix-invalid--required[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio-checked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--active)}:host(.ix-invalid--required.disabled) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--disabled)}:host(.ix-invalid--required.checked.disabled) .radio-checkmark,:host(.ix-invalid--required[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio-checked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--disabled)}:host(.ix-invalid:not(.disabled)) .radio-checkmark{--ix-radio-unchecked--background:var(     --ix-radio-unchecked--background--invalid   );--ix-radio-unchecked--background--hover:var(     --ix-radio-unchecked--background--invalid--hover   );--ix-radio-unchecked--background--active:var(     --ix-radio-unchecked--background--invalid--active   );--ix-radio-unchecked--border-color:var(     --ix-radio-unchecked--border-color--invalid   );--ix-radio-unchecked--border-color--hover:var(     --ix-radio-unchecked--border-color--invalid--hover   );--ix-radio-unchecked--border-color--active:var(     --ix-radio-unchecked--border-color--invalid--active   );--ix-radio-checked--background:var(     --ix-radio-checked--background--invalid   );--ix-radio-checked--background--hover:var(     --ix-radio-checked--background--invalid--hover   );--ix-radio-checked--background--active:var(     --ix-radio-checked--background--invalid--active   );--ix-radio-checked--border-color:var(     --ix-radio-checked--border-color--invalid   );--ix-radio-checked--border-color--hover:var(     --ix-radio-checked--border-color--invalid--hover   );--ix-radio-checked--border-color--active:var(     --ix-radio-checked--border-color--invalid--active   );--ix-radio-mixed--background:var(     --ix-radio-mixed--background--invalid   );--ix-radio-mixed--background--hover:var(     --ix-radio-mixed--background--invalid--hover   );--ix-radio-mixed--background--active:var(     --ix-radio-mixed--background--invalid--active   );--ix-radio-mixed--border-color:var(     --ix-radio-mixed--border-color--invalid   );--ix-radio-mixed--border-color--hover:var(     --ix-radio-mixed--border-color--invalid--hover   );--ix-radio-mixed--border-color--active:var(     --ix-radio-mixed--border-color--invalid--active   )}:host(.ix-invalid) .radio-checkmark{background-color:var(--ix-radio-unchecked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color)}:host(.ix-invalid:hover) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--hover)}:host(.ix-invalid:active) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--active)}:host(.ix-invalid.checked) .radio-checkmark,:host(.ix-invalid[indeterminate]) .radio-checkmark{background-color:var(--ix-radio-checked--background);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color)}:host(.ix-invalid.checked:hover) .radio-checkmark,:host(.ix-invalid[indeterminate]:hover) .radio-checkmark{background-color:var(--ix-radio-checked--background--hover);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--hover)}:host(.ix-invalid.checked:active) .radio-checkmark,:host(.ix-invalid[indeterminate]:active) .radio-checkmark{background-color:var(--ix-radio-checked--background--active);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--active)}:host(.ix-invalid.disabled) .radio-checkmark{background-color:var(--ix-radio-unchecked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-unchecked--border-color--disabled)}:host(.ix-invalid.checked.disabled) .radio-checkmark,:host(.ix-invalid[indeterminate].disabled) .radio-checkmark{background-color:var(--ix-radio-checked--background--disabled);border:var(--ix-radio--border-width) solid var(--ix-radio-checked--border-color--disabled)}`;
const Radio = class {
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
   * Name of the radio component
   */
  name;
  /**
   * Value of the radio component
   */
  value;
  /**
   * Label for the radio component
   */
  label;
  /**
   * Disabled state of the radio component
   */
  disabled = false;
  /**
   * Checked state of the radio component
   */
  checked = false;
  /**
   * Requires the radio component and its group to be checked for the form to be submittable
   *
   * @since 3.0.0
   */
  required = false;
  /**
   * Event emitted when the checked state of the radio changes
   */
  checkedChange;
  /**
   * Event emitted when the value of the radio changes
   */
  valueChange;
  /**
   * Event emitted when the radio is blurred
   */
  ixBlur;
  classMutationObserver;
  /** @internal */
  async setCheckedState(newChecked) {
    if (this.checked) {
      return;
    }
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }
    this.checked = newChecked;
  }
  async onCheckedChange() {
    this.updateFormInternalValue();
  }
  onValueChange() {
    this.valueChange.emit(this.value);
  }
  connectedCallback() {
    const parent = this.hostElement.closest("ix-radio-group");
    if (parent) {
      this.classMutationObserver = createClassMutationObserver(parent, () => {
        this.hostElement.classList.toggle("ix-invalid--required", parent.classList.contains("ix-invalid--required"));
      });
    }
  }
  disconnectedCallback() {
    if (this.classMutationObserver) {
      this.classMutationObserver.destroy();
    }
  }
  componentWillLoad() {
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value ?? "on");
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  onKeyDown(event) {
    if (this.disabled) {
      return;
    }
    let preventEvent = false;
    if (event.code === "Space") {
      preventEvent = true;
      this.setCheckedState(true);
    }
    const closestRadioGroup = this.hostElement.closest("ix-radio-group");
    switch (event.code) {
      case "ArrowUp":
      case "ArrowLeft":
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, false);
        break;
      case "ArrowDown":
      case "ArrowRight":
        preventEvent = true;
        closestRadioGroup?.setCheckedToNextItem(this.hostElement, true);
        break;
    }
    if (preventEvent) {
      event.stopPropagation();
      event.preventDefault();
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
  render() {
    let tabIndex = 0;
    if (this.disabled) {
      tabIndex = -1;
    }
    return h(Host, { key: "80812369f1d5f8115ed8e6d7cdf19e6468483f99", "aria-checked": a11yBoolean(this.checked), "aria-disabled": a11yBoolean(this.disabled), role: "radio", tabindex: tabIndex, class: {
      disabled: this.disabled,
      checked: this.checked
    }, onClick: () => {
      if (this.disabled)
        return;
      this.setCheckedState(true);
    }, onKeyDown: (event) => this.onKeyDown(event), onBlur: () => this.ixBlur.emit() }, h("label", { key: "a27bff54778887a7a2d3b06541e10ddd70a1b4d8" }, h("div", { key: "381ed3624c4ba35ca7b95adfec1a3b62c7deaf50", class: "radio-button" }, h("div", { key: "12ed30da1d6d6c85510fc4da3a35de326bdb5f1a", "aria-hidden": "true", class: {
      ["radio-checkmark"]: true,
      checked: this.checked
    } }, h("div", { key: "211ede7280a706d60a541aabf791b41bbe195fd3", class: "checkmark", style: { visibility: this.checked ? "visible" : "hidden" } }))), this.label && h("ix-typography", { key: "4a0c5ac9b0faaff2d111d4f4032fb3d6355a633c", format: "body", textColor: this.disabled ? "weak" : "std" }, this.label, h("slot", { key: "8aef2143af58689f206e1a88b7e874f394a5a864" }))));
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
Radio.style = radioCss();
export {
  Radio as ix_radio
};
