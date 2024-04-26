import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.918151cc.js";
import { B as BaseButton } from "./base-button-37b915d6.5330cd1c.js";
import { L as LogicalFilterOperator, I as InputState } from "./logical-filter-operator-f6701df5.246c3a20.js";
const categoryFilterCss = `:host{display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host ix-icon{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none}:host(.disabled){cursor:default}:host .btn-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-outline-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-primary,:host .btn-outline-primary.focus,:host .btn-outline-primary:focus-visible{background-color:var(--theme-btn-outline-primary--background);color:var(--theme-btn-outline-primary--color);--ix-button-color:var(--theme-btn-outline-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-primary--border-color);border-style:solid}:host .btn-outline-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-primary--border-color--hover);background-color:var(--theme-btn-outline-primary--background--hover);color:var(--theme-btn-outline-primary--color--hover)}:host .btn-outline-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-primary:not(.disabled):not(:disabled):active,:host .btn-outline-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-primary--border-color--active);background-color:var(--theme-btn-outline-primary--background--active);color:var(--theme-btn-outline-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-primary.disabled,:host(.disabled) .btn-outline-primary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-primary--border-color--disabled);background-color:var(--theme-btn-outline-primary--background--disabled);color:var(--theme-btn-outline-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-primary--color--disabled)}:host .btn-invisible-primary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-primary,:host .btn-invisible-primary.focus,:host .btn-invisible-primary:focus-visible{background-color:var(--theme-btn-invisible-primary--background);color:var(--theme-btn-invisible-primary--color);--ix-button-color:var(--theme-btn-invisible-primary--color);border-color:transparent}:host .btn-invisible-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-primary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-primary--background--hover);color:var(--theme-btn-invisible-primary--color--hover)}:host .btn-invisible-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-primary:not(.disabled):not(:disabled):active,:host .btn-invisible-primary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-primary--background--active);color:var(--theme-btn-invisible-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-primary.disabled,:host(.disabled) .btn-invisible-primary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-primary--background--disabled);color:var(--theme-btn-invisible-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-primary--color--disabled)}:host .btn-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-outline-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-outline-secondary,:host .btn-outline-secondary.focus,:host .btn-outline-secondary:focus-visible{background-color:var(--theme-btn-outline-secondary--background);color:var(--theme-btn-outline-secondary--color);--ix-button-color:var(--theme-btn-outline-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-outline-secondary--border-color);border-style:solid}:host .btn-outline-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-outline-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-outline-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):hover{border-color:var(--theme-btn-outline-secondary--border-color--hover);background-color:var(--theme-btn-outline-secondary--background--hover);color:var(--theme-btn-outline-secondary--color--hover)}:host .btn-outline-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-outline-secondary:not(.disabled):not(:disabled):active,:host .btn-outline-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-outline-secondary--border-color--active);background-color:var(--theme-btn-outline-secondary--background--active);color:var(--theme-btn-outline-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-outline-secondary.disabled,:host(.disabled) .btn-outline-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-outline-secondary--border-color--disabled);background-color:var(--theme-btn-outline-secondary--background--disabled);color:var(--theme-btn-outline-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-outline-secondary--color--disabled)}:host .btn-invisible-secondary{border-radius:var(--theme-btn--border-radius)}:host .btn-invisible-secondary,:host .btn-invisible-secondary.focus,:host .btn-invisible-secondary:focus-visible{background-color:var(--theme-btn-invisible-secondary--background);color:var(--theme-btn-invisible-secondary--color);--ix-button-color:var(--theme-btn-invisible-secondary--color);border-color:transparent}:host .btn-invisible-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-invisible-secondary.selected{background-color:var(--theme-color-ghost--selected);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost--selected-hover);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-color-ghost--selected-active);color:var(--theme-color-dynamic)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover);color:var(--theme-btn-invisible-secondary--color--hover)}:host .btn-invisible-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-invisible-secondary:not(.disabled):not(:disabled):active,:host .btn-invisible-secondary:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-invisible-secondary--background--active);color:var(--theme-btn-invisible-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-invisible-secondary.disabled,:host(.disabled) .btn-invisible-secondary:disabled{pointer-events:none;background-color:var(--theme-btn-invisible-secondary--background--disabled);color:var(--theme-btn-invisible-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-invisible-secondary--color--disabled)}:host{min-width:5rem}.dropdown-group{margin:0.687rem;display:block;position:relative;width:21.562rem;border-radius:0.25rem;background-color:#f8f9fa;border:solid 0.062rem rgba(0, 0, 0, 0.25)}.dropdown-group .dropdown-group-title{display:block;position:relative;font-size:0.875rem;text-align:left;margin:0.937rem 0 1.25rem 0.937rem}.dropdown-group .dropdown-group-content{position:relative;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;height:11.562rem;margin:0.937rem 0 0.937rem 0.937rem}.dropdown-group .dropdown-group-content>*{margin-bottom:1rem}.dropdown-group-submit{display:flex;justify-content:space-between;margin:0 0.687rem 0 0.687rem}.dropdown-menu{position:absolute;background-color:var(--theme-menu--background);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);border:var(--theme-menu--border-thickness) solid var(--theme-menu--border--color);border-radius:var(--theme-menu--border-radius);max-width:100vw;padding:0.25rem 0;transition:background-color var(--theme-default-time);box-shadow:var(--theme-menu--box-shadow)}.dropdown-menu.xl>.dropdown-item{height:2.5rem;line-height:2.187rem}.dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dropdown-buttons{display:flex;padding:0.25rem 0.5rem}.dropdown-buttons ix-icon-button+ix-icon-button{margin-inline-start:0.5rem}.dropdown-item{display:flex;height:2.5rem;position:relative;align-items:center;cursor:pointer;padding:0 2rem;border:1px solid transparent;color:var(--theme-menu-item--color);background-color:transparent}.dropdown-item:focus-visible{background-color:var(--theme-menu-item--background);color:var(--theme-menu-item--color)}.dropdown-item:focus-visible{outline:none;background-color:var(--theme-menu-item--background);border-color:#119fff;color:var(--theme-menu-item--color--focus)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):hover{color:var(--theme-menu-item--color--hover);background-color:var(--theme-menu-item--background--hover)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):active,.dropdown-item:not(.disabled):not(:disabled).active{color:var(--theme-menu-item--color--active);background-color:var(--theme-menu-item--background--active)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--theme-menu-item--color--disabled);background-color:var(--theme-menu-item--background--disabled)}.dropdown-item>a,.dropdown-item a:hover,.dropdown-item a:active{color:var(--theme-color-std-text)}.dropdown-item>.glyph{color:var(--theme-menu-item-icon--color);margin-inline-end:0.5rem}.dropdown-item>.glyph.disabled{color:var(--color-weak-text)}.dropdown-item>.glyph.glyph-single-check{color:var(--theme-menu-item-icon-check--color)}.dropdown-item>input[type=checkbox]+label{margin-bottom:0px}.dropdown-item>input[type=checkbox]+label::before{margin-right:1rem}.dropdown-divider{border-top:1px solid var(--theme-menu-separator--background);margin:0.25rem 0}button.dropdown-toggle{position:relative;padding-right:1.5rem}button.dropdown-toggle::after{position:absolute;top:45%;right:0.5rem}.form-control,.form-control-plaintext{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);color:var(--theme-input--color);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:var(--theme-input--border-radius);height:2rem;min-height:2rem;min-width:2rem;background-color:var(--theme-input--background);border:solid 1px var(--theme-input--border-color);box-shadow:var(--theme-input--box-shadow);padding-inline-start:0.5rem;padding-inline-end:0.5rem}.form-control::-moz-placeholder,.form-control-plaintext::-moz-placeholder{color:var(--theme-input-hint--color)}.form-control::placeholder,.form-control-plaintext::placeholder{color:var(--theme-input-hint--color)}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled),.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover);cursor:auto}.form-control:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible,.form-control-plaintext:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline-offset:var(--theme-input--focus--outline-offset);box-shadow:var(--theme-input--box-shadow);outline:1px solid var(--theme-color-focus-bdr)}.form-control:focus-visible{color:var(--theme-input--color)}.form-control[type=number]{text-align:right}.form-control[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}.form-control.readonly,.form-control[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}.form-control:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only,.form-control[readonly],.form-control[readOnly],.form-control.readonly{box-shadow:none !important;outline:none !important;border-color:var(--theme-input--border-color);cursor:default !important}.form-control:read-only::-moz-placeholder,.form-control[readonly]::-moz-placeholder,.form-control[readOnly]::-moz-placeholder,.form-control.readonly::-moz-placeholder{color:transparent}.form-control:-moz-read-only::placeholder{color:transparent}.form-control:read-only::placeholder,.form-control[readonly]::placeholder,.form-control[readOnly]::placeholder,.form-control.readonly::placeholder{color:transparent}.form-control:disabled,.form-control.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--theme-input--border-color-bottom--disabled)}.form-control:disabled::-moz-placeholder,.form-control.disabled::-moz-placeholder{color:transparent}.form-control:disabled::placeholder,.form-control.disabled::placeholder{color:transparent}.form-control-plaintext{outline:0}.form-group{position:relative}.input-wrapper{display:flex;position:relative;align-items:center;flex-wrap:nowrap}.input-wrapper>.glyph{display:block;position:absolute;margin-inline-start:0.312rem;color:var(--theme-color-std-text)}.input-wrapper>input{padding-inline-start:2.2rem}select.form-control{padding:0 0.312rem}textarea.form-control{padding:0.375rem 0.5rem}input.disabled,input:disabled{color:var(--theme-input--color--disabled)}input:-moz-read-only{cursor:default}input:read-only,input.readonly{cursor:default}label{color:var(--theme-color-soft-text);padding:2px 0px}label.label-alignment-left{padding:6px 0px}input{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input:-webkit-autofill,input:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}input::-moz-placeholder{color:var(--theme-input-hint--color)}input::placeholder{color:var(--theme-input-hint--color)}input.hover,input:hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}input.focus,input:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}input:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only,input:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}input.read-only::-moz-placeholder,input:read-only::-moz-placeholder{color:transparent}input:-moz-read-only::placeholder{color:transparent}input.read-only::placeholder,input:read-only::placeholder{color:transparent}input:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}input:disabled::-moz-placeholder{color:transparent}input:disabled::placeholder{color:transparent}input[type=number]{text-align:right}input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}textarea{height:3.25rem;padding:0.375rem 1.25rem 0.375rem 0.5rem}textarea{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}textarea:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea:-webkit-autofill,textarea:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}textarea::-moz-placeholder{color:var(--theme-input-hint--color)}textarea::placeholder{color:var(--theme-input-hint--color)}textarea.hover,textarea:hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}textarea.focus,textarea:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}textarea:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only,textarea:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}textarea.read-only::-moz-placeholder,textarea:read-only::-moz-placeholder{color:transparent}textarea:-moz-read-only::placeholder{color:transparent}textarea.read-only::placeholder,textarea:read-only::placeholder{color:transparent}textarea:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}textarea:disabled::-moz-placeholder{color:transparent}textarea:disabled::placeholder{color:transparent}textarea~.valid-feedback,textarea~.invalid-feedback,input~.valid-feedback,input~.invalid-feedback{display:none;font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}form textarea~.valid-feedback,form input~.valid-feedback{color:var(--theme-color-success)}form textarea~.invalid-feedback,form input~.invalid-feedback{color:var(--theme-color-alarm-text)}form:not([novalidate]) :invalid,form:not([novalidate]) .is-invalid,form.was-validated :invalid,form.was-validated .is-invalid{background-color:var(--theme-input-error--background);border-color:var(--theme-input-error--border-color);background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='512px' height='512px' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: sketchtool 62 (101010) - https://sketch.com --%3E%3Ctitle%3Eerror%3C/title%3E%3Cdesc%3ECreated with sketchtool.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0.75'%3E%3Cg id='error' fill='%23ff2640'%3E%3Cg id='error/error'%3E%3Cpath d='M256,42.6666667 C373.626371,42.6666667 469.333333,138.373627 469.333333,256 C469.333333,373.626371 373.626371,469.333333 256,469.333333 C138.373627,469.333333 42.6666667,373.626371 42.6666667,256 C42.6666667,138.373627 138.373627,42.6666667 256,42.6666667 Z M256,85.3333333 C161.559631,85.3333333 85.3333333,161.559631 85.3333333,256 C85.3333333,350.44037 161.559631,426.666667 256,426.666667 C350.44037,426.666667 426.666667,350.44037 426.666667,256 C426.666667,161.559631 350.44037,85.3333333 256,85.3333333 Z M326.248389,155.581722 L356.418278,185.751611 L286.168667,255.999667 L356.418278,326.248389 L326.248389,356.418278 L255.999667,286.168667 L185.751611,356.418278 L155.581722,326.248389 L225.829667,255.999667 L155.581722,185.751611 L185.751611,155.581722 L255.999667,225.829667 L326.248389,155.581722 Z' id='Combined-Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important;background-position:left calc(0.375em + 0.1875rem) center;padding-right:0.75rem;padding-left:calc(1.5em + 0.75rem);background-size:18px;background-repeat:no-repeat}form:not([novalidate]) :invalid~.invalid-feedback,form:not([novalidate]) .is-invalid~.invalid-feedback,form.was-validated :invalid~.invalid-feedback,form.was-validated .is-invalid~.invalid-feedback{display:block}form:not([novalidate]) :valid~.valid-feedback,form:not([novalidate]) .is-valid~.valid-feedback,form.was-validated :valid~.valid-feedback,form.was-validated .is-valid~.valid-feedback{display:block}form:not(.was-validated) .invalid-feedback,form:not(.was-validated) .valid-feedback{display:none !important}:host{display:block;position:relative;height:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host :host(:focus-visible:not(.disabled):not(:disabled)){border-color:var(--theme-color-primary);box-shadow:0 0 0.25rem 0 var(--theme-color-primary) !important}:host .reset-button{position:absolute;top:0.25rem;right:0.25rem}:host .reset-button.hide-reset-button{display:none}:host .input-container{display:flex;height:auto;max-height:3.75rem;padding:1px 1.5rem 1px 1.75rem !important}:host .input-container:not(.readonly):not(.disabled){font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}:host .input-container:not(.readonly):not(.disabled):-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly):not(.disabled):-webkit-autofill,:host .input-container:not(.readonly):not(.disabled):autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly):not(.disabled)::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly):not(.disabled)::placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly):not(.disabled).hover,:host .input-container:not(.readonly):not(.disabled):hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly):not(.disabled).focus,:host .input-container:not(.readonly):not(.disabled):focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container:not(.readonly):not(.disabled):disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container:not(.readonly):not(.disabled):disabled::-moz-placeholder{color:transparent}:host .input-container:not(.readonly):not(.disabled):disabled::placeholder{color:transparent}:host .input-container.disabled{color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container.readonly{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;min-height:2rem;width:100%;padding:0.25rem 0.5rem;background-color:var(--theme-input--background);color:var(--theme-input--color);text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow)}:host .input-container.readonly:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly:-webkit-autofill,:host .input-container.readonly:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly::placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly.hover,:host .input-container.readonly:hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container.readonly.focus,:host .input-container.readonly:focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.readonly:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly.read-only,:host .input-container.readonly:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly.read-only::-moz-placeholder,:host .input-container.readonly:read-only::-moz-placeholder{color:transparent}:host .input-container.readonly:-moz-read-only::placeholder{color:transparent}:host .input-container.readonly.read-only::placeholder,:host .input-container.readonly:read-only::placeholder{color:transparent}:host .input-container.readonly:disabled{box-shadow:none;background-color:transparent;outline:none;border:none;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container.readonly:disabled::-moz-placeholder{color:transparent}:host .input-container.readonly:disabled::placeholder{color:transparent}:host .input-container.no-icon{padding-left:0.25rem}:host .token-container{flex-grow:1;overflow:hidden}:host .text-input{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);width:auto;height:1.75rem;min-height:1.5rem;background:transparent;flex-grow:1;box-shadow:none}:host .text-input,:host .text-input:hover,:host .text-input:focus-visible{border:none;outline:none}:host .text-input.hide-placeholder::-moz-placeholder{opacity:0}:host .text-input.hide-placeholder::placeholder{opacity:0}:host .list-unstyled{display:flex;flex-wrap:wrap;list-style:none;padding:0;margin:0;overflow-y:auto}:host ix-icon{position:absolute;top:0.5rem;left:0.5rem}:host ix-filter-chip{margin-right:0.25rem}:host .category-preview{display:flex;align-items:center;height:1.5rem;background-color:var(--theme-bg-3);border-top-left-radius:1rem;border-bottom-left-radius:1rem;padding:0.5rem;margin:2px 0}:host ul{height:100%}:host ul>li,:host input{padding-inline-start:0;padding-top:2px;padding-bottom:2px}:host ix-dropdown{min-width:10rem !important}:host ix-dropdown .dropdown-item-container{display:flex;flex-direction:column}:host ix-dropdown .dropdown-item-container .dropdown-item{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:2.5rem;margin:0.25rem 0.5rem;padding-inline:0.5rem;border:1px solid transparent;border-radius:100rem;width:auto;justify-content:flex-start;flex-grow:1}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr)}:host ix-dropdown .dropdown-item-container .category-item{border-end-end-radius:0;border-start-end-radius:0}:host ix-dropdown .dropdown-item-container .category-item-value{border-start-start-radius:0;border-end-start-radius:0}:host ix-dropdown .btn-toggle-operator{width:2rem;height:2rem;margin-inline:0.5rem}:host .d-none{display:none}`;
const IxCategoryFilterStyle0 = categoryFilterCss;
const CategoryFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.categoryChanged = createEvent(this, "categoryChanged", 7);
    this.inputChanged = createEvent(this, "inputChanged", 7);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    this.ID_CUSTOM_FILTER_VALUE = "CW_CUSTOM_FILTER_VALUE";
    this.showDropdown = void 0;
    this.textInput = void 0;
    this.hasFocus = void 0;
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.inputValue = void 0;
    this.category = void 0;
    this.filterTokens = [];
    this.disabled = false;
    this.readonly = false;
    this.filterState = void 0;
    this.placeholder = void 0;
    this.categories = void 0;
    this.nonSelectableCategories = {};
    this.suggestions = void 0;
    this.icon = "search";
    this.hideIcon = void 0;
    this.staticOperator = void 0;
    this.repeatCategories = true;
    this.tmpDisableScrollIntoView = true;
    this.labelCategories = "Categories";
    this.i18nPlainText = "Filter by text";
  }
  watchFilterState(newValue) {
    this.setFilterState(newValue);
  }
  componentDidLoad() {
    var _a, _b;
    if (this.filterState !== void 0) {
      setTimeout(() => this.setFilterState(this.filterState));
    }
    (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", this.handleFormElementKeyDown.bind(this));
    (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => e.preventDefault());
    if (this.textInput == null) {
      console.warn("ix-category-filter - unable to add event listeners to native input element");
      return;
    }
    this.textInput.addEventListener("focusin", () => {
      this.hasFocus = true;
    });
    this.textInput.addEventListener("focusout", () => this.hasFocus = false);
    this.textInput.addEventListener("input", () => {
      this.inputValue = this.textInput.value;
      const inputState = new InputState(this.inputValue, this.category);
      this.inputChanged.emit(inputState);
    });
    this.textInput.addEventListener("keydown", this.handleInputElementKeyDown.bind(this));
  }
  setFilterState(state) {
    this.filterTokens = [];
    for (const token of state.tokens) {
      this.addToken(token, this.ID_CUSTOM_FILTER_VALUE, this.categoryLogicalOperator, false);
    }
    for (const category of state.categories) {
      this.addToken(category.value, category.id, category.operator, false);
    }
    this.emitFilterEvent();
  }
  closeDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.hostElement.shadowRoot.querySelector("ix-dropdown").show = false;
  }
  handleFormElementKeyDown(e) {
    switch (e.code) {
      case "Enter":
      case "NumpadEnter":
        if (!document.activeElement.classList.contains("dropdown-item")) {
          return;
        }
        const token = document.activeElement.getAttribute("data-id");
        if (this.hasCategorySelection()) {
          if (this.category !== void 0) {
            this.addToken(token, this.category);
          } else if (document.activeElement.classList.contains("category-item-id")) {
            this.selectCategory(token);
          }
        } else {
          this.addToken(token);
        }
        e.preventDefault();
        break;
      case "ArrowUp":
        this.focusPreviousItem();
        e.preventDefault();
        break;
      case "ArrowDown":
        this.showDropdown = true;
        this.focusNextItem();
        e.preventDefault();
        break;
      case "Escape":
        this.closeDropdown();
        break;
    }
  }
  focusPreviousItem() {
    const sibling = document.activeElement.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  focusNextItem() {
    const sibling = document.activeElement.nextSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  handleInputElementKeyDown(e) {
    var _a;
    switch (e.code) {
      case "ArrowDown":
        const selector = `.category-item-${this.category !== void 0 ? "value" : "id"}`;
        let item = this.hostElement.shadowRoot.querySelector(selector);
        if (item instanceof HTMLElement) {
          item.focus();
          e.stopPropagation();
        } else if ((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) {
          item = this.hostElement.shadowRoot.querySelector(".category-item");
          if (item instanceof HTMLElement) {
            item.focus();
            e.stopPropagation();
          }
        }
        break;
      case "Backspace":
        if (this.textInput.value !== "") {
          return;
        }
        if (this.category !== void 0) {
          this.category = void 0;
          return;
        }
        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;
      case "Enter":
      case "NumpadEnter":
        this.addToken(this.inputValue, this.category);
        e.preventDefault();
        break;
    }
  }
  emitFilterEvent() {
    const tokens = this.filterTokens.filter((item) => item.id === this.ID_CUSTOM_FILTER_VALUE).map((item) => item.value);
    const categories = this.filterTokens.filter((item) => item.id !== this.ID_CUSTOM_FILTER_VALUE);
    const filterState = {
      tokens,
      categories
    };
    this.filterChanged.emit(filterState);
  }
  addToken(token, category = this.ID_CUSTOM_FILTER_VALUE, operator = this.categoryLogicalOperator, emitEvent = true) {
    if (token === void 0 || token === null) {
      return;
    }
    const newToken = token.trim();
    if (newToken === "") {
      return;
    }
    if (this.hasToken(newToken)) {
      return;
    }
    const pair = { id: category, value: newToken, operator };
    this.filterTokens = [...this.filterTokens, pair];
    this.textInput.value = "";
    this.inputValue = "";
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    if (this.category !== void 0) {
      this.category = void 0;
    }
    this.isScrollStateDirty = true;
    this.textInput.focus();
    if (emitEvent) {
      this.emitFilterEvent();
    }
    this.closeDropdown();
  }
  removeToken(index) {
    this.filterTokens = this.filterTokens.filter((_, i) => i !== index);
    this.emitFilterEvent();
  }
  getCategoryIds() {
    const ids = [];
    for (const id in this.categories) {
      if (Object.prototype.hasOwnProperty.call(this.categories, id)) {
        ids.push(id);
      }
    }
    return ids;
  }
  selectCategory(category) {
    this.category = category;
    this.textInput.value = "";
    this.inputValue = "";
    this.textInput.focus();
    this.categoryChanged.emit(category);
  }
  resetFilter(e) {
    e.stopPropagation();
    this.closeDropdown();
    this.filterTokens = [];
    this.emitFilterEvent();
  }
  filterMultiples(value) {
    if (this.repeatCategories) {
      return true;
    }
    const isCategoryAlreadySet = this.filterTokens.find((token) => token.id === value);
    return !isCategoryAlreadySet;
  }
  hasToken(token) {
    return this.filterTokens.some((filterToken) => {
      const hasSameValue = filterToken.value === token;
      if (!hasSameValue) {
        return false;
      }
      if (this.category !== void 0) {
        return this.category === filterToken.id;
      }
      if (filterToken.id) {
        return filterToken.id === this.ID_CUSTOM_FILTER_VALUE;
      }
      return hasSameValue;
    });
  }
  filterDuplicateTokens(value) {
    return !this.hasToken(value);
  }
  filterByInput(value) {
    if (this.inputValue === void 0 || this.inputValue === "") {
      return true;
    }
    return value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1;
  }
  toggleCategoryOperator() {
    switch (this.categoryLogicalOperator) {
      case LogicalFilterOperator.EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.NOT_EQUAL;
        break;
      case LogicalFilterOperator.NOT_EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
        break;
    }
  }
  getFilterChipLabel(value) {
    var _a, _b, _c;
    if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
      return value.value;
    }
    const operatorString = value.operator === LogicalFilterOperator.EQUAL ? "=" : "!=";
    const label = (_c = (_b = (_a = this.categories[value.id]) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : this.nonSelectableCategories[value.id]) !== null && _c !== void 0 ? _c : value.id;
    return `${label} ${operatorString} ${value.value}`;
  }
  getFilteredSuggestions() {
    var _a, _b;
    if (!((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length)) {
      return [];
    }
    return (_b = this.suggestions) === null || _b === void 0 ? void 0 : _b.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value));
  }
  hasCategorySelection() {
    return this.categories !== void 0;
  }
  renderPlainSuggestions() {
    return h("div", { class: "dropdown-item-container" }, this.getFilteredSuggestions().map((suggestion) => h("button", { class: "dropdown-item", "data-id": suggestion, onClick: () => this.addToken(suggestion), key: suggestion, title: suggestion }, suggestion)));
  }
  renderOperatorButton() {
    if (this.staticOperator) {
      return "";
    }
    const params = {
      type: "button",
      variant: "secondary",
      outline: false,
      ghost: true,
      iconOnly: true,
      iconOval: false,
      selected: false,
      disabled: this.disabled || this.staticOperator !== void 0,
      loading: false,
      icon: "",
      onClick: (e) => {
        e.stopPropagation();
        this.toggleCategoryOperator();
      },
      extraClasses: {
        "btn-icon-32": true,
        "btn-toggle-operator": true
      }
    };
    return h(BaseButton, Object.assign({}, params), this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL ? "=" : "!=");
  }
  getFilterOperatorString() {
    let operator;
    if (this.staticOperator !== void 0) {
      operator = this.staticOperator;
    } else {
      operator = this.categoryLogicalOperator;
    }
    return `${operator === LogicalFilterOperator.EQUAL ? "=" : "!="} `;
  }
  renderCategoryValues() {
    var _a, _b;
    return h("div", { class: "dropdown-item-container" }, this.renderOperatorButton(), h("div", { class: "dropdown-header" }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), (_b = this.categories[this.category]) === null || _b === void 0 ? void 0 : _b.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => h("button", { class: "dropdown-item category-item-value", "data-id": id, title: id, key: id, onClick: () => this.addToken(id, this.category) }, `${this.getFilterOperatorString()} ${id}`)));
  }
  renderDropdownContent() {
    if (this.hasCategorySelection()) {
      if (this.category !== void 0) {
        return this.renderCategoryValues();
      } else {
        return this.renderCategorySelection();
      }
    } else
      return this.renderPlainSuggestions();
  }
  renderCategorySelection() {
    var _a;
    return h("div", { class: "dropdown-item-container" }, (_a = this.getCategoryIds()) === null || _a === void 0 ? void 0 : _a.filter((id) => this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
      var _a2;
      return h("button", { class: "dropdown-item category-item category-item-id", "data-id": id, title: this.categories[id].label, key: id, onClick: (e) => {
        e.preventDefault();
        this.selectCategory(id);
      }, tabindex: "0" }, (_a2 = this.categories[id]) === null || _a2 === void 0 ? void 0 : _a2.label);
    }));
  }
  getDropdownHeader() {
    if (this.categories !== void 0) {
      if (this.category !== void 0) {
        return null;
      } else {
        return this.labelCategories;
      }
    }
    return this.i18nPlainText;
  }
  componentDidRender() {
    if (this.isScrollStateDirty) {
      if (!this.tmpDisableScrollIntoView) {
        this.textInput.scrollIntoView();
      }
      this.isScrollStateDirty = false;
    }
  }
  getResetButton() {
    return h("ix-icon-button", { onClick: (e) => this.resetFilter(e), class: {
      "reset-button": true,
      "hide-reset-button": !this.filterTokens.length && this.category === void 0
    }, ghost: true, oval: true, icon: "clear", size: "16" });
  }
  getIconColor() {
    if (this.disabled) {
      return "color-componentn-1";
    }
    if (this.readonly) {
      return "color-std-txt";
    }
    return "color-primary";
  }
  render() {
    var _a;
    return h(Host, { key: "e3d9a6ad2b7ec95a28cfa3dd0c282d86ce7c87fa" }, h("form", { key: "f5f26e119209a3e17569ca9ffa6ce41c38e7b69e", ref: (el) => this.formElement = el }, h("div", { key: "4161e5ea74f88a9ef49f14c2cc42bea501a7d942", "read-only": this.readonly, class: {
      "input-container": true,
      disabled: this.disabled,
      focus: this.hasFocus,
      readonly: this.readonly,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { key: "7c520dc604d6c3b46f3c5db7cba28fccace5c230", color: this.getIconColor(), class: { "d-none": this.hideIcon }, name: this.icon, size: "16" }), h("div", { key: "690b4e2650bc972a21fe6c9bcb297c244175c6a2", class: "token-container" }, h("ul", { key: "85835f4296d3d76aac5facd005911090df5e1108", class: "list-unstyled" }, this.filterTokens.map((value, index) => h("li", { key: value.toString(), class: {
      animate__animated: true,
      animate__fadein: true
    } }, h("ix-filter-chip", { disabled: this.disabled, readonly: this.readonly, onClick: (e) => e.stopPropagation(), onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("li", { class: {
      "category-preview": true,
      "d-none": this.category === void 0
    } }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), h("input", { key: "02716370b81e5cdc39a60f7685a31e2b55137d12", class: {
      "text-input": true,
      "hide-placeholder": this.readonly || this.disabled || this.category !== void 0
    }, autocomplete: "off", name: "category-filter-input", disabled: this.disabled, readonly: this.readonly, ref: (el) => this.textInput = el, type: "text", placeholder: this.placeholder }))), !this.readonly && !this.disabled && this.getResetButton())), this.disabled || this.readonly ? "" : h("ix-dropdown", { show: this.showDropdown, closeBehavior: "outside", offset: { mainAxis: 2 }, anchor: this.textInput, trigger: this.hostElement, header: this.getDropdownHeader() }, this.renderDropdownContent()));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "filterState": ["watchFilterState"]
    };
  }
};
CategoryFilter.style = IxCategoryFilterStyle0;
export {
  CategoryFilter as ix_category_filter
};
