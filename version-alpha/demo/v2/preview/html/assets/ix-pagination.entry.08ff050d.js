import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { B as BaseButton } from "./base-button-IZFEmS6o.c9ddc9e1.js";
import { a as a11yBoolean } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
import { b as iconChevronRightSmall, C as iconChevronLeftSmall } from "./index-CrTP-icT.451e0ae2.js";
const paginationCss = ".ix-form-control,.ix-form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}.ix-form-control::-moz-placeholder,.ix-form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.ix-form-control::placeholder,.ix-form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.ix-form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.ix-form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.ix-form-control:focus-visible{color:var(--theme-input--color)}.ix-form-control[type=number]{text-align:right}.ix-form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.ix-form-control.readonly,.ix-form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.ix-form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only,.ix-form-control[readonly],.ix-form-control[readOnly],.ix-form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.ix-form-control:read-only::-moz-placeholder,.ix-form-control[readonly]::-moz-placeholder,.ix-form-control[readOnly]::-moz-placeholder,.ix-form-control.readonly::-moz-placeholder{color:transparent}.ix-form-control:-moz-read-only::placeholder{color:transparent}.ix-form-control:read-only::placeholder,.ix-form-control[readonly]::placeholder,.ix-form-control[readOnly]::placeholder,.ix-form-control.readonly::placeholder{color:transparent}.ix-form-control:disabled,.ix-form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.ix-form-control:disabled::-moz-placeholder,.ix-form-control.disabled::-moz-placeholder{color:transparent}.ix-form-control:disabled::placeholder,.ix-form-control.disabled::placeholder{color:transparent}.ix-form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.ix-form-control{padding:0 0.312rem}textarea.ix-form-control{padding:0.375rem 0.5rem}input.ix-form-control.disabled,input.ix-form-control:disabled{color:var(--theme-input--color--disabled)}input.ix-form-control:-moz-read-only{cursor:default}input.ix-form-control:read-only,input.ix-form-control.readonly{cursor:default}:host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}*,*::after,*::before{box-sizing:border-box}::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){*{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}::-webkit-scrollbar{width:0.5rem;height:0.5rem}::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}::-webkit-scrollbar-corner{display:none}:host .btn-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-danger,:host .btn-danger.focus,:host .btn-danger:focus-visible{background-color:var(--theme-btn-danger--background);color:var(--theme-btn-danger--color);--ix-button-color:var(--theme-btn-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger--border-color);border-style:solid}:host .btn-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger.selected:not(.disabled):not(:disabled):active,:host .btn-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-danger--border-color--hover);background-color:var(--theme-btn-danger--background--hover);color:var(--theme-btn-danger--color--hover)}:host .btn-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger:not(.disabled):not(:disabled):active,:host .btn-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger--border-color--active);background-color:var(--theme-btn-danger--background--active);color:var(--theme-btn-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger.disabled,:host(.disabled) .btn-danger:disabled{pointer-events:none;border-color:var(--theme-btn-danger--border-color--disabled);background-color:var(--theme-btn-danger--background--disabled);color:var(--theme-btn-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger--color--disabled)}:host .btn-outline-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-danger,:host .btn-outline-danger.focus,:host .btn-outline-danger:focus-visible{background-color:var(--theme-btn-outline-danger--background);color:var(--theme-btn-outline-danger--color);--ix-button-color:var(--theme-btn-outline-danger--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-danger--border-color);border-style:solid}:host .btn-outline-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger.selected:not(.disabled):not(:disabled):active,:host .btn-outline-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-danger--border-color--hover);background-color:var(--theme-btn-outline-danger--background--hover);color:var(--theme-btn-outline-danger--color--hover)}:host .btn-outline-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-danger:not(.disabled):not(:disabled):active,:host .btn-outline-danger:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-danger--border-color--active);background-color:var(--theme-btn-outline-danger--background--active);color:var(--theme-btn-outline-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-danger.disabled,:host(.disabled) .btn-outline-danger:disabled{pointer-events:none;border-color:var(--theme-btn-outline-danger--border-color--disabled);background-color:var(--theme-btn-outline-danger--background--disabled);color:var(--theme-btn-outline-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-danger--color--disabled)}:host .btn-invisible-danger{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-danger,:host .btn-invisible-danger.focus,:host .btn-invisible-danger:focus-visible{background-color:var(--theme-btn-invisible-danger--background);color:var(--theme-btn-invisible-danger--color);--ix-button-color:var(--theme-btn-invisible-danger--color);border-color:transparent}:host .btn-invisible-danger:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-danger.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-danger.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-danger--background--hover);color:var(--theme-btn-invisible-danger--color--hover)}:host .btn-invisible-danger:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-danger:not(.disabled):not(:disabled):active,:host .btn-invisible-danger:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-danger--background--active);color:var(--theme-btn-invisible-danger--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-danger.disabled,:host(.disabled) .btn-invisible-danger:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-danger--background--disabled);color:var(--theme-btn-invisible-danger--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-danger--color--disabled)}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{display:inline-flex;justify-content:center;align-items:center}:host button{width:100%;height:100%;overflow:hidden;padding:0}:host button.btn-oval{border-radius:6.25rem}:host ix-icon{color:var(--ix-icon-button-color, currentColor);margin:0}:host ix-spinner{margin:0}:host(.btn-icon-12){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host(.btn-icon-16){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host(.btn-icon-32){height:2rem;width:2rem;min-width:2rem;min-height:2rem}:host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host,:host .advanced-pagination,:host .item-count{display:inline-flex;align-items:center}:host .basic-pagination{padding:0 0.125rem}:host .advanced-pagination{padding:0 0.75rem}:host .page-selection{width:4.125rem;text-align:center;margin:0 0.5rem;-moz-appearance:textfield;-webkit-appearance:textfield}:host .page-buttons{white-space:nowrap}:host .total-count{white-space:nowrap}:host .item-count{flex-grow:1;justify-content:flex-end;margin-inline-start:1.5rem}:host .item-count ix-select{width:4.5rem;margin-inline-start:1.5rem}:host button{width:auto;min-width:2rem;height:2rem;padding:0 0.5rem}:host button+button{margin-inline-start:0.125rem}";
const Pagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageSelected = createEvent(this, "pageSelected", 7);
    this.itemCountChanged = createEvent(this, "itemCountChanged", 7);
    this.baseButtonConfig = {
      variant: "secondary",
      outline: false,
      ghost: true,
      iconOnly: true,
      iconOval: false,
      disabled: false,
      icon: "",
      loading: false,
      selected: false,
      type: "button"
    };
    this.maxCountPages = 7;
    this.advanced = false;
    this.itemCount = 15;
    this.showItemCount = true;
    this.count = 0;
    this.selectedPage = 0;
    this.i18nPage = "Page";
    this.i18nOf = "of";
    this.i18nItems = "Items";
  }
  selectPage(index) {
    const oldIndex = this.selectedPage;
    if (index < 0) {
      this.selectedPage = 0;
    } else if (index > this.count - 1) {
      this.selectedPage = this.count - 1;
    } else {
      this.selectedPage = index;
    }
    const { defaultPrevented } = this.pageSelected.emit(this.selectedPage);
    if (defaultPrevented) {
      this.selectedPage = oldIndex;
    }
  }
  increase() {
    if (this.selectedPage === this.count - 1) {
      return;
    }
    this.selectPage(this.selectedPage + 1);
  }
  decrease() {
    if (this.selectedPage === 0) {
      return;
    }
    this.selectPage(this.selectedPage - 1);
  }
  getPageButton(index) {
    const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => this.selectPage(index), selected: this.selectedPage === index, ariaAttributes: {
      "aria-pressed": a11yBoolean(this.selectedPage === index)
    } });
    return h(BaseButton, Object.assign({}, baseButtonProps), index + 1);
  }
  renderPageButtons() {
    const pagesBeforeOverflow = Math.floor(this.maxCountPages / 2);
    const hasOverflow = this.count > this.maxCountPages;
    const hasOverflowStart = hasOverflow && this.selectedPage > pagesBeforeOverflow;
    const hasOverflowEnd = hasOverflow && this.selectedPage < this.count - pagesBeforeOverflow - 1;
    const pageButtons = [];
    let start = 0;
    let end = Math.min(this.count, this.maxCountPages);
    let pageCount = Math.floor((this.maxCountPages - 4) / 2);
    if (hasOverflowStart) {
      const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => {
        if (hasOverflowEnd) {
          this.selectPage(this.selectedPage - Math.max(0, 2 * pageCount + 1));
        } else {
          this.selectPage(this.count - this.maxCountPages);
        }
      } });
      pageButtons.push(this.getPageButton(0));
      pageButtons.push(h(BaseButton, Object.assign({}, baseButtonProps), "..."));
      if (hasOverflowEnd) {
        start = this.count - this.maxCountPages + 2;
      } else {
        start = this.count - this.maxCountPages + 2;
        end = this.count;
      }
    }
    if (hasOverflowEnd) {
      if (hasOverflowStart) {
        start = this.selectedPage - pageCount;
        end = this.selectedPage + pageCount + 1;
      } else {
        end = this.maxCountPages - 2;
      }
    }
    for (let i = start; i < end; i++) {
      pageButtons.push(this.getPageButton(i));
    }
    if (hasOverflowEnd) {
      const baseButtonProps = Object.assign(Object.assign({}, this.baseButtonConfig), { onClick: () => {
        if (hasOverflowStart) {
          this.selectPage(this.selectedPage + Math.max(0, 2 * pageCount + 1));
        } else {
          this.selectPage(this.maxCountPages - 1);
        }
      } });
      pageButtons.push(h(BaseButton, Object.assign({}, baseButtonProps), "..."));
      pageButtons.push(this.getPageButton(this.count - 1));
    }
    return h("span", { class: "page-buttons" }, pageButtons);
  }
  render() {
    return h(Host, { key: "496bf848a39c020780a071e470b4f4bed1798282" }, h("ix-icon-button", { key: "31c7be256d5f08d99053330c2cdab6448877f84c", disabled: !this.count || this.selectedPage === 0, ghost: true, icon: iconChevronLeftSmall, onClick: () => this.decrease() }), this.advanced ? h("div", { class: "advanced-pagination" }, h("ix-typography", { format: "body" }, this.i18nPage), h("input", { class: "ix-form-control page-selection", type: "number", min: "1", max: this.count, value: this.selectedPage + 1, onChange: (event) => {
      const eventTarget = event.target;
      if (eventTarget) {
        const index = Number.parseInt(eventTarget.value);
        this.selectPage(index - 1);
      }
    } }), h("span", { class: "total-count" }, h("ix-typography", { format: "body" }, this.i18nOf, " ", this.count))) : h("span", { class: "basic-pagination" }, this.renderPageButtons(), " "), h("ix-icon-button", { key: "5c276d3ad4933665283d2f3c941daccb9b91cafb", disabled: !this.count || this.selectedPage === this.count - 1, ghost: true, icon: iconChevronRightSmall, onClick: () => this.increase() }), this.advanced && this.showItemCount ? h("span", { class: "item-count" }, h("ix-typography", { format: "body" }, this.i18nItems), h("ix-select", { hideListHeader: true, i18nPlaceholder: "", i18nSelectListHeader: "", value: `${this.itemCount}`, onValueChange: (e) => {
      const count = Number.parseInt(Array.isArray(e.detail) ? e.detail[0] : e.detail);
      this.itemCountChanged.emit(count);
    } }, h("ix-select-item", { label: "10", value: "10" }), h("ix-select-item", { label: "15", value: "15" }), h("ix-select-item", { label: "20", value: "20" }), h("ix-select-item", { label: "40", value: "40" }), h("ix-select-item", { label: "100", value: "100" }))) : "");
  }
  get hostElement() {
    return getElement(this);
  }
};
Pagination.style = paginationCss;
export {
  Pagination as ix_pagination
};
