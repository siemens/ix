import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CRrZCTD3.js";
import { B as BaseIconButton } from "./base-icon-button-DufFLJC--CRdlsRQb.js";
import { g as getFallbackLabelFromIconName, a as a11yBoolean } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-nCmPujqf-DqREjvtV.js";
import "./base-button-DZdtpLxn-CXmN3hUZ.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-BClJdFQP-DyvnXMi-.js";
const iconToggleButtonCss = () => `:host{--ix-button-border-radius-left:var(--theme-btn--border-radius);--ix-button-border-radius-right:var(--theme-btn--border-radius);display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, 0 0.5rem)}:host ix-spinner{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:0.25rem}:host .icon-right{margin-left:0.25rem}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host{--ix-button-border-radius-left:var(--theme-btn--border-radius);--ix-button-border-radius-right:var(--theme-btn--border-radius);display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, 0 0.5rem)}:host ix-spinner{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:0.25rem}:host .icon-right{margin-left:0.25rem}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-primary{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary.selected{background-color:var(--theme-btn-primary--background--pressed);color:var(--theme-btn-primary--color--pressed)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-primary--background--pressed-hover);color:var(--theme-btn-primary--color--pressed-hover)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-primary--background--pressed-hover);color:var(--theme-btn-primary--color--pressed-active)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover,:host .btn-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-secondary{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary.selected{background-color:var(--theme-btn-secondary--background--pressed);color:var(--theme-btn-secondary--color--pressed)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-secondary--background--pressed-hover);color:var(--theme-btn-secondary--color--pressed-hover)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-secondary--background--pressed-hover);color:var(--theme-btn-secondary--color--pressed-active)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover,:host .btn-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-tertiary{background-color:var(--theme-btn-tertiary--background);color:var(--theme-btn-tertiary--color);--ix-button-color:var(--theme-btn-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-tertiary--border-color);border-style:solid}:host .btn-tertiary.selected{background-color:var(--theme-btn-tertiary--background--pressed);color:var(--theme-btn-tertiary--color--pressed)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-hover)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-active)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):hover,:host .btn-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-tertiary--border-color--hover);background-color:var(--theme-btn-tertiary--background--hover);color:var(--theme-btn-tertiary--color--hover)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):active,:host .btn-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-tertiary--border-color--active);background-color:var(--theme-btn-tertiary--background--active);color:var(--theme-btn-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-tertiary.disabled,:host(.disabled) .btn-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-tertiary--border-color--disabled);background-color:var(--theme-btn-tertiary--background--disabled);color:var(--theme-btn-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-tertiary--color--disabled)}:host .btn-subtle-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-primary{background-color:var(--theme-btn-subtle-primary--background);color:var(--theme-btn-subtle-primary--color);--ix-button-color:var(--theme-btn-subtle-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-primary--border-color);border-style:solid}:host .btn-subtle-primary.selected{background-color:var(--theme-btn-subtle-primary--background--pressed);color:var(--theme-btn-subtle-primary--color--pressed)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-primary--background--pressed-hover);color:var(--theme-btn-subtle-primary--color--pressed-hover)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-primary--background--pressed-hover);color:var(--theme-btn-subtle-primary--color--pressed-active)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-primary--border-color--hover);background-color:var(--theme-btn-subtle-primary--background--hover);color:var(--theme-btn-subtle-primary--color--hover)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):active,:host .btn-subtle-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-primary--border-color--active);background-color:var(--theme-btn-subtle-primary--background--active);color:var(--theme-btn-subtle-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-primary.disabled,:host(.disabled) .btn-subtle-primary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-primary--border-color--disabled);background-color:var(--theme-btn-subtle-primary--background--disabled);color:var(--theme-btn-subtle-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-primary--color--disabled)}:host .btn-subtle-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-secondary{background-color:var(--theme-btn-subtle-secondary--background);color:var(--theme-btn-subtle-secondary--color);--ix-button-color:var(--theme-btn-subtle-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-secondary--border-color);border-style:solid}:host .btn-subtle-secondary.selected{background-color:var(--theme-btn-subtle-secondary--background--pressed);color:var(--theme-btn-subtle-secondary--color--pressed)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-secondary--background--pressed-hover);color:var(--theme-btn-subtle-secondary--color--pressed-hover)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-secondary--background--pressed-hover);color:var(--theme-btn-subtle-secondary--color--pressed-active)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-secondary--border-color--hover);background-color:var(--theme-btn-subtle-secondary--background--hover);color:var(--theme-btn-subtle-secondary--color--hover)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-secondary--border-color--active);background-color:var(--theme-btn-subtle-secondary--background--active);color:var(--theme-btn-subtle-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-secondary.disabled,:host(.disabled) .btn-subtle-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-secondary--border-color--disabled);background-color:var(--theme-btn-subtle-secondary--background--disabled);color:var(--theme-btn-subtle-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-secondary--color--disabled)}:host .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-tertiary{background-color:var(--theme-btn-subtle-tertiary--background);color:var(--theme-btn-subtle-tertiary--color);--ix-button-color:var(--theme-btn-subtle-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-tertiary--border-color);border-style:solid}:host .btn-subtle-tertiary.selected{background-color:var(--theme-btn-subtle-tertiary--background--pressed);color:var(--theme-btn-subtle-tertiary--color--pressed)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-hover)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-active)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-tertiary--border-color--hover);background-color:var(--theme-btn-subtle-tertiary--background--hover);color:var(--theme-btn-subtle-tertiary--color--hover)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-tertiary--border-color--active);background-color:var(--theme-btn-subtle-tertiary--background--active);color:var(--theme-btn-subtle-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-tertiary.disabled,:host(.disabled) .btn-subtle-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-tertiary--border-color--disabled);background-color:var(--theme-btn-subtle-tertiary--background--disabled);color:var(--theme-btn-subtle-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-tertiary--color--disabled)}:host .btn-danger-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-primary{background-color:var(--theme-btn-danger-primary--background);color:var(--theme-btn-danger-primary--color);--ix-button-color:var(--theme-btn-danger-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-primary--border-color);border-style:solid}:host .btn-danger-primary.selected{background-color:var(--theme-btn-danger-primary--background--pressed);color:var(--theme-btn-danger-primary--color--pressed)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-primary--background--pressed-hover);color:var(--theme-btn-danger-primary--color--pressed-hover)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-primary--background--pressed-hover);color:var(--theme-btn-danger-primary--color--pressed-active)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):hover,:host .btn-danger-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-primary--border-color--hover);background-color:var(--theme-btn-danger-primary--background--hover);color:var(--theme-btn-danger-primary--color--hover)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):active,:host .btn-danger-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-primary--border-color--active);background-color:var(--theme-btn-danger-primary--background--active);color:var(--theme-btn-danger-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-primary.disabled,:host(.disabled) .btn-danger-primary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-primary--border-color--disabled);background-color:var(--theme-btn-danger-primary--background--disabled);color:var(--theme-btn-danger-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-primary--color--disabled)}:host .btn-danger-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-secondary{background-color:var(--theme-btn-danger-secondary--background);color:var(--theme-btn-danger-secondary--color);--ix-button-color:var(--theme-btn-danger-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-secondary--border-color);border-style:solid}:host .btn-danger-secondary.selected{background-color:var(--theme-btn-danger-secondary--background--pressed);color:var(--theme-btn-danger-secondary--color--pressed)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-secondary--background--pressed-hover);color:var(--theme-btn-danger-secondary--color--pressed-hover)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-secondary--background--pressed-hover);color:var(--theme-btn-danger-secondary--color--pressed-active)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-secondary--border-color--hover);background-color:var(--theme-btn-danger-secondary--background--hover);color:var(--theme-btn-danger-secondary--color--hover)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):active,:host .btn-danger-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-secondary--border-color--active);background-color:var(--theme-btn-danger-secondary--background--active);color:var(--theme-btn-danger-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-secondary.disabled,:host(.disabled) .btn-danger-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-secondary--border-color--disabled);background-color:var(--theme-btn-danger-secondary--background--disabled);color:var(--theme-btn-danger-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-secondary--color--disabled)}:host .btn-danger-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-tertiary{background-color:var(--theme-btn-danger-tertiary--background);color:var(--theme-btn-danger-tertiary--color);--ix-button-color:var(--theme-btn-danger-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-tertiary--border-color);border-style:solid}:host .btn-danger-tertiary.selected{background-color:var(--theme-btn-danger-tertiary--background--pressed);color:var(--theme-btn-danger-tertiary--color--pressed)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-tertiary--background--pressed-hover);color:var(--theme-btn-danger-tertiary--color--pressed-hover)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-tertiary--background--pressed-hover);color:var(--theme-btn-danger-tertiary--color--pressed-active)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-tertiary--border-color--hover);background-color:var(--theme-btn-danger-tertiary--background--hover);color:var(--theme-btn-danger-tertiary--color--hover)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-tertiary--border-color--active);background-color:var(--theme-btn-danger-tertiary--background--active);color:var(--theme-btn-danger-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-tertiary.disabled,:host(.disabled) .btn-danger-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-tertiary--border-color--disabled);background-color:var(--theme-btn-danger-tertiary--background--disabled);color:var(--theme-btn-danger-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-tertiary--color--disabled)}*,*::after,*::before{box-sizing:border-box}::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){*{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}::-webkit-scrollbar{width:0.5rem;height:0.5rem}::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}::-webkit-scrollbar-corner{display:none}:host{display:inline-flex;justify-content:center;align-items:center}:host button{width:100%;height:100%;overflow:hidden;padding:0}:host button.btn-oval{border-radius:6.25rem}:host .icon{color:var(--ix-icon-button-color, currentColor);margin:0}:host ix-spinner{margin:0}:host(.btn-icon-12){height:1rem;width:1rem;min-width:1rem;min-height:1rem}:host(.btn-icon-16){height:1.5rem;width:1.5rem;min-width:1.5rem;min-height:1.5rem}:host(.btn-icon-32){height:2rem;width:2rem;min-width:2rem;min-height:2rem}`;
const IconToggleButton = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.pressedChange = createEvent(this, "pressedChange", 7);
  }
  /**
   * Button variant.
   */
  variant = "subtle-primary";
  /**
   * Outline button
   */
  outline = false;
  /**
   * Button with no background or outline
   */
  ghost = false;
  /**
   * Icon name
   */
  icon;
  /**
   * Button in oval shape
   *
   * @since 3.1.0
   *
   */
  oval = false;
  /**
   * Show button as pressed
   */
  pressed = false;
  /**
   * Size of icon in button
   */
  size = "24";
  /**
   * Disable the button
   */
  disabled = false;
  /**
   * Loading button
   */
  loading = false;
  /**
   * Pressed change event
   */
  pressedChange;
  get hostElement() {
    return getElement(this);
  }
  dispatchPressedChange() {
    this.pressedChange.emit(!this.pressed);
  }
  getIconSizeClass() {
    return {
      "btn-icon-12": this.size === "12",
      "btn-icon-16": this.size === "16",
      "btn-icon-32": this.size === "24"
    };
  }
  render() {
    const baseButtonProps = {
      variant: this.variant,
      iconOnly: true,
      iconOval: this.oval,
      selected: this.pressed,
      disabled: this.disabled || this.loading,
      icon: this.icon,
      iconSize: this.size,
      loading: this.loading,
      onClick: () => this.dispatchPressedChange(),
      type: "button",
      ariaAttributes: {
        ...this.inheritAriaAttributes,
        "aria-pressed": a11yBoolean(this.pressed),
        "aria-label": this.inheritAriaAttributes["aria-label"] ?? getFallbackLabelFromIconName(this.icon)
      },
      extraClasses: {
        "icon-button": true,
        ...this.getIconSizeClass()
      }
    };
    return h(Host, { key: "db25b50b77735503ba0794945b1aa44359eb7a0e", class: {
      ...this.getIconSizeClass(),
      disabled: this.disabled || this.loading
    } }, h(BaseIconButton, { key: "0af63d8b171b58becac7fd459415f2c63a676f84", ...baseButtonProps }));
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }]
    };
  }
};
IconToggleButton.style = iconToggleButtonCss();
export {
  IconToggleButton as ix_icon_toggle_button
};
