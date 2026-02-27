import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
import { k as iconSearch, l as iconClear } from "./index-8HpPmDK_-DinFJk0z.js";
import { B as BaseButton } from "./base-button-D4FlHdn0-sxX166t5.js";
import { b as a11yHostAttributes } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { L as LogicalFilterOperator, I as InputState } from "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
const categoryFilterCss = ':host{--ix-button-border-radius-left:var(--theme-btn--border-radius);--ix-button-border-radius-right:var(--theme-btn--border-radius);display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:0.25rem}:host .icon-right{margin-left:0.25rem}:host(.disabled){cursor:default}:host{--ix-button-border-radius-left:var(--theme-btn--border-radius);--ix-button-border-radius-right:var(--theme-btn--border-radius);display:inline-block;height:2rem;vertical-align:middle;cursor:pointer;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:0 0.5rem}:host ix-spinner{margin-right:0.25rem}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:0.25rem}:host .icon-right{margin-left:0.25rem}:host(.disabled){cursor:default}:host .btn-primary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-primary,:host .btn-primary.focus,:host .btn-primary:focus-visible{background-color:var(--theme-btn-primary--background);color:var(--theme-btn-primary--color);--ix-button-color:var(--theme-btn-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-primary--border-color);border-style:solid}:host .btn-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-primary.selected{background-color:var(--theme-btn-primary--background--pressed);color:var(--theme-btn-primary--color--pressed)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-primary--background--pressed-hover);color:var(--theme-btn-primary--color--pressed-hover)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-primary--background--pressed-hover);color:var(--theme-btn-primary--color--pressed-active)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover,:host .btn-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-primary--border-color--hover);background-color:var(--theme-btn-primary--background--hover);color:var(--theme-btn-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-primary--border-color--active);background-color:var(--theme-btn-primary--background--active);color:var(--theme-btn-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--theme-btn-primary--border-color--disabled);background-color:var(--theme-btn-primary--background--disabled);color:var(--theme-btn-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-primary--color--disabled)}:host .btn-secondary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-secondary,:host .btn-secondary.focus,:host .btn-secondary:focus-visible{background-color:var(--theme-btn-secondary--background);color:var(--theme-btn-secondary--color);--ix-button-color:var(--theme-btn-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-secondary--border-color);border-style:solid}:host .btn-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-secondary.selected{background-color:var(--theme-btn-secondary--background--pressed);color:var(--theme-btn-secondary--color--pressed)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-secondary--background--pressed-hover);color:var(--theme-btn-secondary--color--pressed-hover)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-secondary--background--pressed-hover);color:var(--theme-btn-secondary--color--pressed-active)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover,:host .btn-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-secondary--border-color--hover);background-color:var(--theme-btn-secondary--background--hover);color:var(--theme-btn-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-secondary--border-color--active);background-color:var(--theme-btn-secondary--background--active);color:var(--theme-btn-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-secondary--border-color--disabled);background-color:var(--theme-btn-secondary--background--disabled);color:var(--theme-btn-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-secondary--color--disabled)}:host .btn-tertiary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-tertiary,:host .btn-tertiary.focus,:host .btn-tertiary:focus-visible{background-color:var(--theme-btn-tertiary--background);color:var(--theme-btn-tertiary--color);--ix-button-color:var(--theme-btn-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-tertiary--border-color);border-style:solid}:host .btn-tertiary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-tertiary.selected{background-color:var(--theme-btn-tertiary--background--pressed);color:var(--theme-btn-tertiary--color--pressed)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-hover)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-tertiary--background--pressed-hover);color:var(--theme-btn-tertiary--color--pressed-active)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):hover,:host .btn-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-tertiary--border-color--hover);background-color:var(--theme-btn-tertiary--background--hover);color:var(--theme-btn-tertiary--color--hover)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):active,:host .btn-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-tertiary--border-color--active);background-color:var(--theme-btn-tertiary--background--active);color:var(--theme-btn-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-tertiary.disabled,:host(.disabled) .btn-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-tertiary--border-color--disabled);background-color:var(--theme-btn-tertiary--background--disabled);color:var(--theme-btn-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-tertiary--color--disabled)}:host .btn-subtle-primary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-primary,:host .btn-subtle-primary.focus,:host .btn-subtle-primary:focus-visible{background-color:var(--theme-btn-subtle-primary--background);color:var(--theme-btn-subtle-primary--color);--ix-button-color:var(--theme-btn-subtle-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-primary--border-color);border-style:solid}:host .btn-subtle-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-subtle-primary.selected{background-color:var(--theme-btn-subtle-primary--background--pressed);color:var(--theme-btn-subtle-primary--color--pressed)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-primary--background--pressed-hover);color:var(--theme-btn-subtle-primary--color--pressed-hover)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-primary--background--pressed-hover);color:var(--theme-btn-subtle-primary--color--pressed-active)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-primary--border-color--hover);background-color:var(--theme-btn-subtle-primary--background--hover);color:var(--theme-btn-subtle-primary--color--hover)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):active,:host .btn-subtle-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-primary--border-color--active);background-color:var(--theme-btn-subtle-primary--background--active);color:var(--theme-btn-subtle-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-primary.disabled,:host(.disabled) .btn-subtle-primary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-primary--border-color--disabled);background-color:var(--theme-btn-subtle-primary--background--disabled);color:var(--theme-btn-subtle-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-primary--color--disabled)}:host .btn-subtle-secondary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-secondary,:host .btn-subtle-secondary.focus,:host .btn-subtle-secondary:focus-visible{background-color:var(--theme-btn-subtle-secondary--background);color:var(--theme-btn-subtle-secondary--color);--ix-button-color:var(--theme-btn-subtle-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-secondary--border-color);border-style:solid}:host .btn-subtle-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-subtle-secondary.selected{background-color:var(--theme-btn-subtle-secondary--background--pressed);color:var(--theme-btn-subtle-secondary--color--pressed)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-secondary--background--pressed-hover);color:var(--theme-btn-subtle-secondary--color--pressed-hover)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-secondary--background--pressed-hover);color:var(--theme-btn-subtle-secondary--color--pressed-active)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-secondary--border-color--hover);background-color:var(--theme-btn-subtle-secondary--background--hover);color:var(--theme-btn-subtle-secondary--color--hover)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-secondary--border-color--active);background-color:var(--theme-btn-subtle-secondary--background--active);color:var(--theme-btn-subtle-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-secondary.disabled,:host(.disabled) .btn-subtle-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-secondary--border-color--disabled);background-color:var(--theme-btn-subtle-secondary--background--disabled);color:var(--theme-btn-subtle-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-secondary--color--disabled)}:host .btn-subtle-tertiary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-tertiary,:host .btn-subtle-tertiary.focus,:host .btn-subtle-tertiary:focus-visible{background-color:var(--theme-btn-subtle-tertiary--background);color:var(--theme-btn-subtle-tertiary--color);--ix-button-color:var(--theme-btn-subtle-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-subtle-tertiary--border-color);border-style:solid}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-subtle-tertiary.selected{background-color:var(--theme-btn-subtle-tertiary--background--pressed);color:var(--theme-btn-subtle-tertiary--color--pressed)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-hover)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-subtle-tertiary--background--pressed-hover);color:var(--theme-btn-subtle-tertiary--color--pressed-active)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-subtle-tertiary--border-color--hover);background-color:var(--theme-btn-subtle-tertiary--background--hover);color:var(--theme-btn-subtle-tertiary--color--hover)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-subtle-tertiary--border-color--active);background-color:var(--theme-btn-subtle-tertiary--background--active);color:var(--theme-btn-subtle-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-tertiary.disabled,:host(.disabled) .btn-subtle-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-subtle-tertiary--border-color--disabled);background-color:var(--theme-btn-subtle-tertiary--background--disabled);color:var(--theme-btn-subtle-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-subtle-tertiary--color--disabled)}:host .btn-danger-primary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-primary,:host .btn-danger-primary.focus,:host .btn-danger-primary:focus-visible{background-color:var(--theme-btn-danger-primary--background);color:var(--theme-btn-danger-primary--color);--ix-button-color:var(--theme-btn-danger-primary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-primary--border-color);border-style:solid}:host .btn-danger-primary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger-primary.selected{background-color:var(--theme-btn-danger-primary--background--pressed);color:var(--theme-btn-danger-primary--color--pressed)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-primary--background--pressed-hover);color:var(--theme-btn-danger-primary--color--pressed-hover)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-primary--background--pressed-hover);color:var(--theme-btn-danger-primary--color--pressed-active)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):hover,:host .btn-danger-primary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-primary--border-color--hover);background-color:var(--theme-btn-danger-primary--background--hover);color:var(--theme-btn-danger-primary--color--hover)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):active,:host .btn-danger-primary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-primary--border-color--active);background-color:var(--theme-btn-danger-primary--background--active);color:var(--theme-btn-danger-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-primary.disabled,:host(.disabled) .btn-danger-primary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-primary--border-color--disabled);background-color:var(--theme-btn-danger-primary--background--disabled);color:var(--theme-btn-danger-primary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-primary--color--disabled)}:host .btn-danger-secondary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-secondary,:host .btn-danger-secondary.focus,:host .btn-danger-secondary:focus-visible{background-color:var(--theme-btn-danger-secondary--background);color:var(--theme-btn-danger-secondary--color);--ix-button-color:var(--theme-btn-danger-secondary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-secondary--border-color);border-style:solid}:host .btn-danger-secondary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger-secondary.selected{background-color:var(--theme-btn-danger-secondary--background--pressed);color:var(--theme-btn-danger-secondary--color--pressed)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-secondary--background--pressed-hover);color:var(--theme-btn-danger-secondary--color--pressed-hover)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-secondary--background--pressed-hover);color:var(--theme-btn-danger-secondary--color--pressed-active)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-secondary--border-color--hover);background-color:var(--theme-btn-danger-secondary--background--hover);color:var(--theme-btn-danger-secondary--color--hover)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):active,:host .btn-danger-secondary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-secondary--border-color--active);background-color:var(--theme-btn-danger-secondary--background--active);color:var(--theme-btn-danger-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-secondary.disabled,:host(.disabled) .btn-danger-secondary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-secondary--border-color--disabled);background-color:var(--theme-btn-danger-secondary--background--disabled);color:var(--theme-btn-danger-secondary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-secondary--color--disabled)}:host .btn-danger-tertiary{border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-tertiary,:host .btn-danger-tertiary.focus,:host .btn-danger-tertiary:focus-visible{background-color:var(--theme-btn-danger-tertiary--background);color:var(--theme-btn-danger-tertiary--color);--ix-button-color:var(--theme-btn-danger-tertiary--color);border-width:var(--theme-btn--border-thickness);border-color:var(--theme-btn-danger-tertiary--border-color);border-style:solid}:host .btn-danger-tertiary:not(.disabled):not(:disabled):focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .btn-danger-tertiary.selected{background-color:var(--theme-btn-danger-tertiary--background--pressed);color:var(--theme-btn-danger-tertiary--color--pressed)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--theme-btn-danger-tertiary--background--pressed-hover);color:var(--theme-btn-danger-tertiary--color--pressed-hover)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--theme-btn-danger-tertiary--background--pressed-hover);color:var(--theme-btn-danger-tertiary--color--pressed-active)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--theme-btn-danger-tertiary--border-color--hover);background-color:var(--theme-btn-danger-tertiary--background--hover);color:var(--theme-btn-danger-tertiary--color--hover)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary:not(.disabled):not(:disabled).active{border-color:var(--theme-btn-danger-tertiary--border-color--active);background-color:var(--theme-btn-danger-tertiary--background--active);color:var(--theme-btn-danger-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-tertiary.disabled,:host(.disabled) .btn-danger-tertiary:disabled{pointer-events:none;border-color:var(--theme-btn-danger-tertiary--border-color--disabled);background-color:var(--theme-btn-danger-tertiary--background--disabled);color:var(--theme-btn-danger-tertiary--color--disabled);opacity:1;--ix-button-color:var(--theme-btn-danger-tertiary--color--disabled)}:host{min-width:5rem}.dropdown-group{margin:0.687rem;display:block;position:relative;width:21.562rem;border-radius:0.25rem;background-color:#f8f9fa;border:solid 0.062rem rgba(0, 0, 0, 0.25)}.dropdown-group .dropdown-group-title{display:block;position:relative;font-size:0.875rem;text-align:left;margin:0.937rem 0 1.25rem 0.937rem}.dropdown-group .dropdown-group-content{position:relative;display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;height:11.562rem;margin:0.937rem 0 0.937rem 0.937rem}.dropdown-group .dropdown-group-content>*{margin-bottom:1rem}.dropdown-group-submit{display:flex;justify-content:space-between;margin:0 0.687rem 0 0.687rem}.dropdown-menu{position:absolute;background-color:var(--theme-menu--background);border:var(--theme-menu--border-thickness) solid var(--theme-menu--border--color);border-radius:var(--theme-menu--border-radius);max-width:100vw;padding:0.25rem 0;transition:background-color var(--theme-default-time);box-shadow:var(--theme-menu--box-shadow);font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.dropdown-menu.xl>.dropdown-item{height:2.5rem;line-height:2.187rem}.dropdown-header{display:flex;align-items:center;height:2.5rem;color:var(--theme-menu-header--color);padding:0 1rem}.dropdown-buttons{display:flex;padding:0.25rem 0.5rem}.dropdown-buttons ix-icon-button+ix-icon-button{margin-inline-start:0.5rem}.dropdown-item{display:flex;height:2.5rem;position:relative;align-items:center;cursor:pointer;padding:0 2rem;border:1px solid transparent;color:var(--theme-menu-item--color);background-color:transparent}.dropdown-item:focus-visible{background-color:var(--theme-menu-item--background);color:var(--theme-menu-item--color)}.dropdown-item:focus-visible{outline:none;background-color:var(--theme-menu-item--background);border-color:#119fff;color:var(--theme-menu-item--color--focus)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):hover,.dropdown-item:not(.disabled):not(:disabled).hover{color:var(--theme-menu-item--color--hover);background-color:var(--theme-menu-item--background--hover)}.dropdown-item:not(.disabled):not(:disabled){cursor:pointer}.dropdown-item:not(.disabled):not(:disabled):active,.dropdown-item:not(.disabled):not(:disabled).active{color:var(--theme-menu-item--color--active);background-color:var(--theme-menu-item--background--active)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--theme-menu-item--color--disabled);background-color:var(--theme-menu-item--background--disabled)}.dropdown-item>a,.dropdown-item a:hover,.dropdown-item a:active{color:var(--theme-color-std-text)}.dropdown-item>.glyph{color:var(--theme-menu-item-icon--color)}.dropdown-item>.glyph.disabled{color:var(--color-weak-text)}.dropdown-item>.glyph.glyph-single-check{color:var(--theme-menu-item-icon-check--color)}.dropdown-item>.glyph{margin-inline-end:0.5rem}.dropdown-item>input[type=checkbox]+label{margin-bottom:0px}.dropdown-item>input[type=checkbox]+label::before{margin-right:1rem}.dropdown-divider{border-top:1px solid var(--theme-menu-separator--background);margin:0.25rem 0}button.dropdown-toggle{position:relative;padding-right:1.5rem}button.dropdown-toggle::after{position:absolute;top:45%;right:0.5rem}:host{display:block;position:relative;height:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .reset-button{position:absolute;top:0.25rem;right:0.25rem}:host .reset-button.hide-reset-button{display:none}:host .input-container:not(.readonly):not(.no-icon){min-height:2rem;width:auto;padding:1px 1.5rem 1px 1.75rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container:not(.readonly):not(.no-icon)[type=number]{text-align:right}:host .input-container:not(.readonly):not(.no-icon)[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .input-container:not(.readonly):not(.no-icon):-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly):not(.no-icon):-webkit-autofill,:host .input-container:not(.readonly):not(.no-icon):autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly):not(.no-icon)::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly):not(.no-icon)::placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly):not(.no-icon).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):not(.no-icon):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly):not(.no-icon).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):not(.no-icon):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly):not(.no-icon).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):not(.no-icon):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container:not(.readonly):not(.no-icon).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):not(.no-icon):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container:not(.readonly):not(.no-icon):disabled,:host .input-container:not(.readonly):not(.no-icon).disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container:not(.readonly):not(.no-icon):disabled::-moz-placeholder,:host .input-container:not(.readonly):not(.no-icon).disabled::-moz-placeholder{color:transparent}:host .input-container:not(.readonly):not(.no-icon):disabled::placeholder,:host .input-container:not(.readonly):not(.no-icon).disabled::placeholder{color:transparent}:host .input-container:not(.readonly).no-icon{min-height:2rem;width:auto;padding:1px 1.5rem 1px 0.25rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container:not(.readonly).no-icon[type=number]{text-align:right}:host .input-container:not(.readonly).no-icon[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .input-container:not(.readonly).no-icon:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly).no-icon:-webkit-autofill,:host .input-container:not(.readonly).no-icon:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container:not(.readonly).no-icon::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly).no-icon::placeholder{color:var(--theme-input-hint--color)}:host .input-container:not(.readonly).no-icon.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly).no-icon:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly).no-icon.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly).no-icon:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly).no-icon.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly).no-icon:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container:not(.readonly).no-icon.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly).no-icon:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container:not(.readonly).no-icon:disabled,:host .input-container:not(.readonly).no-icon.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container:not(.readonly).no-icon:disabled::-moz-placeholder,:host .input-container:not(.readonly).no-icon.disabled::-moz-placeholder{color:transparent}:host .input-container:not(.readonly).no-icon:disabled::placeholder,:host .input-container:not(.readonly).no-icon.disabled::placeholder{color:transparent}:host .input-container.readonly:not(.no-icon){min-height:2rem;width:auto;padding:1px 1.5rem 1px 1.75rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container.readonly:not(.no-icon)[type=number]{text-align:right}:host .input-container.readonly:not(.no-icon)[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .input-container.readonly:not(.no-icon):-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly:not(.no-icon):-webkit-autofill,:host .input-container.readonly:not(.no-icon):autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly:not(.no-icon)::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly:not(.no-icon)::placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly:not(.no-icon).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:not(.no-icon):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container.readonly:not(.no-icon).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:not(.no-icon):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container.readonly:not(.no-icon).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:not(.no-icon):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.readonly:not(.no-icon).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:not(.no-icon):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.readonly:not(.no-icon):-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly:not(.no-icon).read-only,:host .input-container.readonly:not(.no-icon):read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly:not(.no-icon).read-only::-moz-placeholder,:host .input-container.readonly:not(.no-icon):read-only::-moz-placeholder{color:transparent}:host .input-container.readonly:not(.no-icon):-moz-read-only::placeholder{color:transparent}:host .input-container.readonly:not(.no-icon).read-only::placeholder,:host .input-container.readonly:not(.no-icon):read-only::placeholder{color:transparent}:host .input-container.readonly:not(.no-icon):disabled,:host .input-container.readonly:not(.no-icon).disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container.readonly:not(.no-icon):disabled::-moz-placeholder,:host .input-container.readonly:not(.no-icon).disabled::-moz-placeholder{color:transparent}:host .input-container.readonly:not(.no-icon):disabled::placeholder,:host .input-container.readonly:not(.no-icon).disabled::placeholder{color:transparent}:host .input-container.readonly.no-icon{min-height:2rem;width:auto;padding:1px 1.5rem 1px 0.25rem;background-color:var(--theme-input--background);color:var(--theme-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);box-shadow:var(--theme-input--box-shadow);font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-md);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container.readonly.no-icon[type=number]{text-align:right}:host .input-container.readonly.no-icon[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host .input-container.readonly.no-icon:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly.no-icon:-webkit-autofill,:host .input-container.readonly.no-icon:autofill{-webkit-box-shadow:0 0 0 1000px var(--theme-color-component-info) inset !important;-webkit-text-fill-color:var(--theme-input--color--autofill) !important;background-color:var(--theme-input--background--autofill) !important;border:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color--autofill) !important;color:var(--theme-input--color--autofill) !important}:host .input-container.readonly.no-icon::-moz-placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly.no-icon::placeholder{color:var(--theme-input-hint--color)}:host .input-container.readonly.no-icon.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly.no-icon:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container.readonly.no-icon.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly.no-icon:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container.readonly.no-icon.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly.no-icon:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.readonly.no-icon.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly.no-icon:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.readonly.no-icon:-moz-read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly.no-icon.read-only,:host .input-container.readonly.no-icon:read-only{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--readonly)}:host .input-container.readonly.no-icon.read-only::-moz-placeholder,:host .input-container.readonly.no-icon:read-only::-moz-placeholder{color:transparent}:host .input-container.readonly.no-icon:-moz-read-only::placeholder{color:transparent}:host .input-container.readonly.no-icon.read-only::placeholder,:host .input-container.readonly.no-icon:read-only::placeholder{color:transparent}:host .input-container.readonly.no-icon:disabled,:host .input-container.readonly.no-icon.disabled{box-shadow:none;background-color:transparent;outline:none;border:none;border-radius:0;color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container.readonly.no-icon:disabled::-moz-placeholder,:host .input-container.readonly.no-icon.disabled::-moz-placeholder{color:transparent}:host .input-container.readonly.no-icon:disabled::placeholder,:host .input-container.readonly.no-icon.disabled::placeholder{color:transparent}:host .input-container:not(.readonly):not(.disabled):hover{border-color:var(--theme-input--border-color--hover) !important;background-color:var(--theme-input--background--hover)}:host .input-container:not(.readonly):not(.disabled).focus{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-input--focus--outline-offset);border-color:var(--theme-input--border-color--focus) !important}:host .input-container.disabled{color:var(--theme-input--color--disabled);border-bottom:var(--theme-input--border-thickness, 1px) solid var(--theme-input--border-color-bottom--disabled)}:host .input-container{display:flex;height:auto;max-height:3.75rem}:host .token-container{flex-grow:1;overflow:hidden}:host .text-input{width:auto;height:1.75rem;min-height:1.5rem;background:transparent;flex-grow:1;box-shadow:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .text-input::-moz-placeholder{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--theme-color-soft-text)}:host .text-input::placeholder{font-feature-settings:"clig" off, "liga" off;font-family:Siemens Sans, Siemens Sans, Arial, Helvetica, sans-serif;font-style:normal;font-size:var(--theme-ms-0);line-height:var(--theme-line-height-sm);font-weight:var(--theme-font-weight-normal);letter-spacing:var(--theme-letter-spacing-xl);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--theme-color-soft-text)}:host .text-input,:host .text-input:hover,:host .text-input:focus,:host .text-input:focus-visible{border:none !important;outline:none !important}:host .text-input.hide-placeholder::-moz-placeholder{opacity:0}:host .text-input.hide-placeholder::placeholder{opacity:0}:host .list-unstyled{display:flex;flex-wrap:wrap;height:100%;overflow-y:auto}:host ix-icon{position:absolute;top:0.5rem;left:0.5rem}:host ix-filter-chip{margin-right:0.25rem}:host .category-preview{display:flex;align-items:center;height:1.5rem;background-color:var(--theme-bg-3);border-top-left-radius:1rem;border-bottom-left-radius:1rem;padding:0.5rem;margin:2px 0}:host ul{height:100%}:host .list-unstyled>span:not(.category-preview),:host input{padding-inline-start:0;padding-top:2px;padding-bottom:2px}:host ix-dropdown{min-width:10rem !important}:host ix-dropdown .dropdown-item-container{display:flex;flex-direction:column}:host ix-dropdown .dropdown-item-container .dropdown-item{height:2.5rem;margin:0.25rem 0.5rem;padding-inline:0.5rem;border:1px solid transparent;border-radius:100rem;width:auto;justify-content:flex-start;flex-grow:1;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr)}:host ix-dropdown .dropdown-item-container .category-item{border-end-end-radius:0;border-start-end-radius:0}:host ix-dropdown .dropdown-item-container .category-item-value{border-start-start-radius:0;border-end-start-radius:0}:host ix-dropdown .btn-toggle-operator{width:2rem;height:2rem;margin-inline:0.5rem}:host .display-none{display:none}';
const CategoryFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.categoryChanged = createEvent(this, "categoryChanged", 7);
    this.inputChanged = createEvent(this, "inputChanged", 7);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    this.filterCleared = createEvent(this, "filterCleared", 7);
    this.ID_CUSTOM_FILTER_VALUE = "CW_CUSTOM_FILTER_VALUE";
    this.textInput = makeRef();
    this.showDropdown = false;
    this.hasFocus = false;
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.inputValue = "";
    this.category = "";
    this.filterTokens = [];
    this.disabled = false;
    this.readonly = false;
    this.nonSelectableCategories = {};
    this.hideIcon = false;
    this.uniqueCategories = false;
    this.labelCategories = "Categories";
    this.i18nPlainText = "Filter by text";
    this.enableTopLayer = false;
  }
  get dropdown() {
    return this.hostElement.shadowRoot.querySelector("ix-dropdown");
  }
  watchFilterState(newValue) {
    this.setFilterState(newValue);
  }
  preventDefault(e) {
    e.preventDefault();
  }
  onFocusIn() {
    this.hasFocus = true;
  }
  onFocusOut() {
    this.hasFocus = false;
  }
  onInput() {
    var _a, _b, _c, _d;
    this.inputValue = (_c = (_b = (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : "";
    const inputState = new InputState(this.inputValue, this.category);
    this.inputChanged.emit(inputState);
    if (!((_d = this.dropdown) === null || _d === void 0 ? void 0 : _d.show)) {
      this.openDropdown();
    }
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }
  componentDidLoad() {
    var _a;
    setTimeout(() => {
      if (this.filterState !== void 0) {
        this.setFilterState(this.filterState);
      }
    });
    if (this.formElement !== void 0) {
      this.formKeyDownListener = addDisposableEventListener(this.formElement, "keydown", ((e) => this.handleFormElementKeyDown(e)));
      this.preventDefaultListener = addDisposableEventListener(this.formElement, "submit", this.preventDefault);
    }
    if (((_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) == null) {
      console.warn("ix-category-filter - unable to add event listeners to native input element");
      return;
    }
    this.inputKeyDownListener = addDisposableEventListener(this.textInput.current, "keydown", ((e) => this.handleInputElementKeyDown(e)));
    this.focusInListener = addDisposableEventListener(this.textInput.current, "focusin", () => this.onFocusIn());
    this.focusOutListener = addDisposableEventListener(this.textInput.current, "focusout", () => this.onFocusOut());
    this.inputListener = addDisposableEventListener(this.textInput.current, "input", () => this.onInput());
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
    if (this.dropdown) {
      this.dropdown.show = false;
    }
  }
  openDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }
    if (this.dropdown) {
      this.dropdown.show = true;
    }
  }
  handleFormElementKeyDown(e) {
    var _a, _b, _c;
    switch (e.code) {
      case "Enter":
      case "NumpadEnter":
        if (!((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.classList.contains("dropdown-item"))) {
          return;
        }
        const token = document.activeElement.getAttribute("data-id");
        if (token === null) {
          break;
        }
        if (this.hasCategorySelection()) {
          if (this.category !== "") {
            this.addToken(token, this.category);
            (_c = (_b = this.textInput) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.focus();
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
    var _a;
    const sibling = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  focusNextItem() {
    var _a;
    const sibling = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.nextSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  focusElement(selector) {
    const item = this.hostElement.shadowRoot.querySelector(selector);
    if (item instanceof HTMLElement) {
      item.focus();
      return true;
    }
    return false;
  }
  onArrowDown(e) {
    var _a;
    const baseSelector = `.category-item-${this.category !== "" ? "value" : "id"}`;
    const fallbackSelector = ".category-item";
    if (this.focusElement(baseSelector)) {
      e.stopPropagation();
      return;
    }
    if (((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) && this.focusElement(fallbackSelector)) {
      e.stopPropagation();
    }
  }
  handleInputElementKeyDown(e) {
    var _a, _b;
    switch (e.code) {
      case "ArrowDown": {
        this.onArrowDown(e);
        break;
      }
      case "Backspace":
        if (((_b = (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.value) !== "") {
          return;
        }
        if (this.category !== "") {
          this.category = "";
          return;
        }
        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;
      case "Enter":
      case "NumpadEnter":
        this.addToken(this.inputValue, this.category || this.ID_CUSTOM_FILTER_VALUE);
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
    var _a;
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
    if ((_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) {
      this.textInput.current.value = "";
    }
    this.inputValue = "";
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    if (this.category !== "") {
      this.category = "";
    }
    this.isScrollStateDirty = true;
    if (emitEvent) {
      this.emitFilterEvent();
    }
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
    var _a, _b, _c;
    this.category = category;
    if ((_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) {
      this.textInput.current.value = "";
    }
    this.inputValue = "";
    (_c = (_b = this.textInput) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.focus();
    this.categoryChanged.emit(category);
  }
  resetFilter(e) {
    const { defaultPrevented } = this.filterCleared.emit();
    if (defaultPrevented) {
      return;
    }
    e.stopPropagation();
    this.closeDropdown();
    this.filterTokens = [];
    if (this.category) {
      this.category = "";
      this.categoryChanged.emit(void 0);
    }
    this.emitFilterEvent();
  }
  filterMultiples(value) {
    if (!this.uniqueCategories) {
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
      if (this.category !== "") {
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
    var _a, _b, _c, _d, _e;
    if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
      return value.value;
    }
    const operatorString = value.operator === LogicalFilterOperator.EQUAL ? "=" : "!=";
    const label = (_e = (_c = (_b = (_a = this.categories) === null || _a === void 0 ? void 0 : _a[value.id]) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : (_d = this.nonSelectableCategories) === null || _d === void 0 ? void 0 : _d[value.id]) !== null && _e !== void 0 ? _e : value.id;
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
    return h("div", { class: "dropdown-item-container" }, this.getFilteredSuggestions().map((suggestion) => h("button", { class: "dropdown-item", "data-id": suggestion, onClick: () => {
      var _a, _b;
      this.addToken(suggestion);
      (_b = (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.focus();
    }, key: suggestion, title: suggestion }, suggestion)));
  }
  renderOperatorButton() {
    if (this.staticOperator) {
      return "";
    }
    const params = {
      type: "button",
      variant: "subtle-tertiary",
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
      },
      ariaAttributes: { "aria-label": this.ariaLabelOperatorButton }
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
    if (this.categories === void 0) {
      return;
    }
    return h("div", { class: "dropdown-item-container" }, this.renderOperatorButton(), h("div", { class: "dropdown-header" }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), (_b = this.categories[this.category]) === null || _b === void 0 ? void 0 : _b.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => h("button", { class: "dropdown-item category-item-value", "data-id": id, title: id, key: id, onClick: (e) => {
      var _a2, _b2;
      e.preventDefault();
      this.addToken(id, this.category);
      (_b2 = (_a2 = this.textInput) === null || _a2 === void 0 ? void 0 : _a2.current) === null || _b2 === void 0 ? void 0 : _b2.focus();
    } }, `${this.getFilterOperatorString()} ${id}`)));
  }
  renderDropdownContent() {
    if (this.hasCategorySelection()) {
      if (this.category !== "") {
        return this.renderCategoryValues();
      } else {
        return this.renderCategorySelection();
      }
    } else
      return this.renderPlainSuggestions();
  }
  renderCategorySelection() {
    var _a;
    return h("div", { class: "dropdown-item-container" }, (_a = this.getCategoryIds()) === null || _a === void 0 ? void 0 : _a.filter((id) => this.categories && this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
      var _a2, _b, _c, _d;
      return h("button", { class: "dropdown-item category-item category-item-id", "data-id": id, title: (_b = (_a2 = this.categories) === null || _a2 === void 0 ? void 0 : _a2[id]) === null || _b === void 0 ? void 0 : _b.label, key: id, onClick: (e) => {
        e.preventDefault();
        this.selectCategory(id);
      }, tabindex: "0" }, (_d = (_c = this.categories) === null || _c === void 0 ? void 0 : _c[id]) === null || _d === void 0 ? void 0 : _d.label);
    }));
  }
  getDropdownHeader() {
    if (this.categories !== void 0) {
      if (this.category !== "") {
        return void 0;
      } else {
        return this.labelCategories;
      }
    }
    return this.i18nPlainText;
  }
  componentDidRender() {
    var _a, _b;
    if (this.isScrollStateDirty) {
      (_b = (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.scrollIntoView();
      this.isScrollStateDirty = false;
    }
  }
  disconnectedCallback() {
    var _a;
    if (this.preventDefaultListener) {
      this.preventDefaultListener();
    }
    if (this.formKeyDownListener) {
      this.formKeyDownListener();
    }
    if (this.inputKeyDownListener) {
      (_a = this.inputKeyDownListener) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    if (this.focusInListener) {
      this.focusInListener();
    }
    if (this.focusOutListener) {
      this.focusOutListener();
    }
    if (this.inputListener) {
      this.inputListener();
    }
  }
  getResetButton() {
    return h("ix-icon-button", { onClick: (e) => this.resetFilter(e), class: {
      "reset-button": true,
      "hide-reset-button": !this.filterTokens.length && this.category === ""
    }, variant: "tertiary", oval: true, icon: iconClear, iconColor: "color-soft-text", size: "16", "aria-label": this.ariaLabelResetButton });
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
    var _a, _b, _c;
    return h(Host, { key: "65b3c65b77d18a156dd6cf45a45fde73ae6c0bf4" }, h("form", { key: "c2b7163951e3070a9fe4324dbd0f4648c0056a85", ref: (el) => this.formElement = el }, h("div", { key: "16937d8681d0c9a594316a6c4ad556ab92eb20b8", "read-only": this.readonly, class: {
      "input-container": true,
      disabled: this.disabled,
      focus: this.hasFocus,
      readonly: this.readonly,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { key: "bd510c385e0666220b59dbef198a717ef62a5cc2", color: this.getIconColor(), class: { "display-none": this.hideIcon }, name: (_a = this.icon) !== null && _a !== void 0 ? _a : iconSearch, size: "16" }), h("div", { key: "c7caa5f71f27b6ad5ce1ce6a8921ef0934db85ad", class: "token-container" }, h("div", { key: "47ccd44a5a0a78e15f46d1a360185bc3ad1c27be", class: "list-unstyled" }, this.filterTokens.map((value, index) => h("span", { key: value.toString(), class: {
      animate__animated: true,
      animate__fadein: true
    } }, h("ix-filter-chip", { disabled: this.disabled, readonly: this.readonly, onClick: (e) => e.stopPropagation(), onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("span", { class: {
      "category-preview": true,
      "display-none": this.category === ""
    } }, (_b = this.categories[this.category]) === null || _b === void 0 ? void 0 : _b.label), h("input", Object.assign({ key: "538e54c48a7049d77177c3650ebae73cafe85a3c", class: {
      "text-input": true,
      "hide-placeholder": this.readonly || this.disabled || this.category !== ""
    }, autocomplete: "off", name: "category-filter-input", disabled: this.disabled, readonly: this.readonly, ref: this.textInput, type: "text", placeholder: this.placeholder }, this.a11yAttributes, { "aria-label": this.ariaLabelFilterInput })))), !this.readonly && !this.disabled && this.getResetButton())), this.disabled || this.readonly ? "" : h("ix-dropdown", { show: this.showDropdown, closeBehavior: "outside", offset: { mainAxis: 2 }, anchor: (_c = this.textInput) === null || _c === void 0 ? void 0 : _c.waitForCurrent(), trigger: this.hostElement, header: this.getDropdownHeader(), enableTopLayer: this.enableTopLayer }, this.renderDropdownContent()));
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
CategoryFilter.style = categoryFilterCss;
export {
  CategoryFilter as ix_category_filter
};
