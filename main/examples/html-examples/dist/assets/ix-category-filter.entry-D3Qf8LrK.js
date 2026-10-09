import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { E as iconSearch, D as iconClear } from "./index-BeX6RWvV-CXzUIwMU.js";
import { B as BaseButton } from "./base-button-CE8k_1TC-BjtFnklQ.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./base-button.types-CAnyVyxc-CKNxtuf9.js";
class InputState {
  token;
  category;
  hasCategory() {
    return this.category !== void 0;
  }
  constructor(token, category) {
    this.token = token;
    this.category = category;
  }
}
var LogicalFilterOperator;
(function(LogicalFilterOperator2) {
  LogicalFilterOperator2["EQUAL"] = "Equal";
  LogicalFilterOperator2["NOT_EQUAL"] = "Not equal";
})(LogicalFilterOperator || (LogicalFilterOperator = {}));
const categoryFilterCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button-danger-primary--background:var(--si-sys-color-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-color-border-danger);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-color-border-danger);--ix-button-danger-secondary--color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-color-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-primary--background:var(--si-sys-color-background-accent);--ix-button-primary--background--active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-color-text-on-accent);--ix-button-primary--color--active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-color-text-on-accent);--ix-button-secondary--background:var(--si-sys-color-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-color-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--color:var(--si-sys-color-text-accent);--ix-button-secondary--color--active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-color-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--color:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-color-text-accent);--ix-button-tertiary--color--active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-button--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-button-border-radius-left:var(--ix-button--border-radius);--ix-button-border-radius-right:var(--ix-button--border-radius);display:inline-block;height:var(--ix-button--height);vertical-align:middle;cursor:pointer;font:var(--si-sys-typography-body-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, var(--ix-button--padding))}:host ix-spinner{margin-right:var(--ix-button--margin-right)}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:var(--ix-button-icon--margin-right)}:host .icon-right{margin-left:var(--ix-button-icon-right--margin-left)}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host .btn:focus-visible{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host{--ix-button-border-radius-left:var(--ix-button--border-radius);--ix-button-border-radius-right:var(--ix-button--border-radius);display:inline-block;height:var(--ix-button--height);vertical-align:middle;cursor:pointer;font:var(--si-sys-typography-body-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, var(--ix-button--padding))}:host ix-spinner{margin-right:var(--ix-button--margin-right)}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:var(--ix-button-icon--margin-right)}:host .icon-right{margin-left:var(--ix-button-icon-right--margin-left)}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host .btn:focus-visible{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--focus--outline-offset)}:host .btn-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-primary{background-color:var(--ix-button-primary--background);color:var(--ix-button-primary--color);--ix-button-color:var(--ix-button-primary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-primary--border-color);border-style:solid}:host .btn-primary.selected{background-color:var(--ix-button-primary--background--pressed);color:var(--ix-button-primary--color--pressed)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-primary--background--pressed-hover);color:var(--ix-button-primary--color--pressed-hover)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-primary--background--pressed-hover);color:var(--ix-button-primary--color--pressed-active)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover,:host .btn-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-primary--border-color--hover);background-color:var(--ix-button-primary--background--hover);color:var(--ix-button-primary--color--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-primary--border-color--active);background-color:var(--ix-button-primary--background--active);color:var(--ix-button-primary--color--active)}:host(.active:not(.disabled)) .btn-primary:not(.disabled):not(:disabled){border-color:var(--ix-button-primary--border-color--active);background-color:var(--ix-button-primary--background--active);color:var(--ix-button-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--ix-button-primary--border-color--disabled);background-color:var(--ix-button-primary--background--disabled);color:var(--ix-button-primary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-primary--color--disabled)}:host .btn-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-secondary{background-color:var(--ix-button-secondary--background);color:var(--ix-button-secondary--color);--ix-button-color:var(--ix-button-secondary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-secondary--border-color);border-style:solid}:host .btn-secondary.selected{background-color:var(--ix-button-secondary--background--pressed);color:var(--ix-button-secondary--color--pressed)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-secondary--background--pressed-hover);color:var(--ix-button-secondary--color--pressed-hover)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-secondary--background--pressed-hover);color:var(--ix-button-secondary--color--pressed-active)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover,:host .btn-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-secondary--border-color--hover);background-color:var(--ix-button-secondary--background--hover);color:var(--ix-button-secondary--color--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-secondary--border-color--active);background-color:var(--ix-button-secondary--background--active);color:var(--ix-button-secondary--color--active)}:host(.active:not(.disabled)) .btn-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button-secondary--border-color--active);background-color:var(--ix-button-secondary--background--active);color:var(--ix-button-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--ix-button-secondary--border-color--disabled);background-color:var(--ix-button-secondary--background--disabled);color:var(--ix-button-secondary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-secondary--color--disabled)}:host .btn-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-tertiary{background-color:var(--ix-button-tertiary--background);color:var(--ix-button-tertiary--color);--ix-button-color:var(--ix-button-tertiary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-tertiary--border-color);border-style:solid}:host .btn-tertiary.selected{background-color:var(--ix-button-tertiary--background--pressed);color:var(--ix-button-tertiary--color--pressed)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-tertiary--background--pressed-hover);color:var(--ix-button-tertiary--color--pressed-hover)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-tertiary--background--pressed-hover);color:var(--ix-button-tertiary--color--pressed-active)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):hover,:host .btn-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-tertiary--border-color--hover);background-color:var(--ix-button-tertiary--background--hover);color:var(--ix-button-tertiary--color--hover)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):active,:host .btn-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-tertiary--border-color--active);background-color:var(--ix-button-tertiary--background--active);color:var(--ix-button-tertiary--color--active)}:host(.active:not(.disabled)) .btn-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button-tertiary--border-color--active);background-color:var(--ix-button-tertiary--background--active);color:var(--ix-button-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-tertiary.disabled,:host(.disabled) .btn-tertiary:disabled{pointer-events:none;border-color:var(--ix-button-tertiary--border-color--disabled);background-color:var(--ix-button-tertiary--background--disabled);color:var(--ix-button-tertiary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-tertiary--color--disabled)}:host .btn-subtle-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-primary{background-color:var(--ix-button-subtle-primary--background);color:var(--ix-button-subtle-primary--color);--ix-button-color:var(--ix-button-subtle-primary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-subtle-primary--border-color);border-style:solid}:host .btn-subtle-primary.selected{background-color:var(--ix-button-subtle-primary--background--pressed);color:var(--ix-button-subtle-primary--color--pressed)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-subtle-primary--background--pressed-hover);color:var(--ix-button-subtle-primary--color--pressed-hover)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-subtle-primary--background--pressed-hover);color:var(--ix-button-subtle-primary--color--pressed-active)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-subtle-primary--border-color--hover);background-color:var(--ix-button-subtle-primary--background--hover);color:var(--ix-button-subtle-primary--color--hover)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):active,:host .btn-subtle-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-subtle-primary--border-color--active);background-color:var(--ix-button-subtle-primary--background--active);color:var(--ix-button-subtle-primary--color--active)}:host(.active:not(.disabled)) .btn-subtle-primary:not(.disabled):not(:disabled){border-color:var(--ix-button-subtle-primary--border-color--active);background-color:var(--ix-button-subtle-primary--background--active);color:var(--ix-button-subtle-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-primary.disabled,:host(.disabled) .btn-subtle-primary:disabled{pointer-events:none;border-color:var(--ix-button-subtle-primary--border-color--disabled);background-color:var(--ix-button-subtle-primary--background--disabled);color:var(--ix-button-subtle-primary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-subtle-primary--color--disabled)}:host .btn-subtle-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-secondary{background-color:var(--ix-button-subtle-secondary--background);color:var(--ix-button-subtle-secondary--color);--ix-button-color:var(--ix-button-subtle-secondary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-subtle-secondary--border-color);border-style:solid}:host .btn-subtle-secondary.selected{background-color:var(--ix-button-subtle-secondary--background--pressed);color:var(--ix-button-subtle-secondary--color--pressed)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-subtle-secondary--background--pressed-hover);color:var(--ix-button-subtle-secondary--color--pressed-hover)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-subtle-secondary--background--pressed-hover);color:var(--ix-button-subtle-secondary--color--pressed-active)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-subtle-secondary--border-color--hover);background-color:var(--ix-button-subtle-secondary--background--hover);color:var(--ix-button-subtle-secondary--color--hover)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-subtle-secondary--border-color--active);background-color:var(--ix-button-subtle-secondary--background--active);color:var(--ix-button-subtle-secondary--color--active)}:host(.active:not(.disabled)) .btn-subtle-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button-subtle-secondary--border-color--active);background-color:var(--ix-button-subtle-secondary--background--active);color:var(--ix-button-subtle-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-secondary.disabled,:host(.disabled) .btn-subtle-secondary:disabled{pointer-events:none;border-color:var(--ix-button-subtle-secondary--border-color--disabled);background-color:var(--ix-button-subtle-secondary--background--disabled);color:var(--ix-button-subtle-secondary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-subtle-secondary--color--disabled)}:host .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-subtle-tertiary{background-color:var(--ix-button-subtle-tertiary--background);color:var(--ix-button-subtle-tertiary--color);--ix-button-color:var(--ix-button-subtle-tertiary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-subtle-tertiary--border-color);border-style:solid}:host .btn-subtle-tertiary.selected{background-color:var(--ix-button-subtle-tertiary--background--pressed);color:var(--ix-button-subtle-tertiary--color--pressed)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-hover)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-active)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-subtle-tertiary--border-color--hover);background-color:var(--ix-button-subtle-tertiary--background--hover);color:var(--ix-button-subtle-tertiary--color--hover)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-subtle-tertiary--border-color--active);background-color:var(--ix-button-subtle-tertiary--background--active);color:var(--ix-button-subtle-tertiary--color--active)}:host(.active:not(.disabled)) .btn-subtle-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button-subtle-tertiary--border-color--active);background-color:var(--ix-button-subtle-tertiary--background--active);color:var(--ix-button-subtle-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-tertiary.disabled,:host(.disabled) .btn-subtle-tertiary:disabled{pointer-events:none;border-color:var(--ix-button-subtle-tertiary--border-color--disabled);background-color:var(--ix-button-subtle-tertiary--background--disabled);color:var(--ix-button-subtle-tertiary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-subtle-tertiary--color--disabled)}:host .btn-danger-primary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-primary{background-color:var(--ix-button-danger-primary--background);color:var(--ix-button-danger-primary--color);--ix-button-color:var(--ix-button-danger-primary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-danger-primary--border-color);border-style:solid}:host .btn-danger-primary.selected{background-color:var(--ix-button-danger-primary--background--pressed);color:var(--ix-button-danger-primary--color--pressed)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-danger-primary--background--pressed-hover);color:var(--ix-button-danger-primary--color--pressed-hover)}:host .btn-danger-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-danger-primary--background--pressed-hover);color:var(--ix-button-danger-primary--color--pressed-active)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):hover,:host .btn-danger-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-danger-primary--border-color--hover);background-color:var(--ix-button-danger-primary--background--hover);color:var(--ix-button-danger-primary--color--hover)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):active,:host .btn-danger-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-danger-primary--border-color--active);background-color:var(--ix-button-danger-primary--background--active);color:var(--ix-button-danger-primary--color--active)}:host(.active:not(.disabled)) .btn-danger-primary:not(.disabled):not(:disabled){border-color:var(--ix-button-danger-primary--border-color--active);background-color:var(--ix-button-danger-primary--background--active);color:var(--ix-button-danger-primary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-primary.disabled,:host(.disabled) .btn-danger-primary:disabled{pointer-events:none;border-color:var(--ix-button-danger-primary--border-color--disabled);background-color:var(--ix-button-danger-primary--background--disabled);color:var(--ix-button-danger-primary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-danger-primary--color--disabled)}:host .btn-danger-secondary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-secondary{background-color:var(--ix-button-danger-secondary--background);color:var(--ix-button-danger-secondary--color);--ix-button-color:var(--ix-button-danger-secondary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-danger-secondary--border-color);border-style:solid}:host .btn-danger-secondary.selected{background-color:var(--ix-button-danger-secondary--background--pressed);color:var(--ix-button-danger-secondary--color--pressed)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-danger-secondary--background--pressed-hover);color:var(--ix-button-danger-secondary--color--pressed-hover)}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-danger-secondary--background--pressed-hover);color:var(--ix-button-danger-secondary--color--pressed-active)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-danger-secondary--border-color--hover);background-color:var(--ix-button-danger-secondary--background--hover);color:var(--ix-button-danger-secondary--color--hover)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):active,:host .btn-danger-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-danger-secondary--border-color--active);background-color:var(--ix-button-danger-secondary--background--active);color:var(--ix-button-danger-secondary--color--active)}:host(.active:not(.disabled)) .btn-danger-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button-danger-secondary--border-color--active);background-color:var(--ix-button-danger-secondary--background--active);color:var(--ix-button-danger-secondary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-secondary.disabled,:host(.disabled) .btn-danger-secondary:disabled{pointer-events:none;border-color:var(--ix-button-danger-secondary--border-color--disabled);background-color:var(--ix-button-danger-secondary--background--disabled);color:var(--ix-button-danger-secondary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-danger-secondary--color--disabled)}:host .btn-danger-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host .btn-danger-tertiary{background-color:var(--ix-button-danger-tertiary--background);color:var(--ix-button-danger-tertiary--color);--ix-button-color:var(--ix-button-danger-tertiary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-danger-tertiary--border-color);border-style:solid}:host .btn-danger-tertiary.selected{background-color:var(--ix-button-danger-tertiary--background--pressed);color:var(--ix-button-danger-tertiary--color--pressed)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-danger-tertiary--background--pressed-hover);color:var(--ix-button-danger-tertiary--color--pressed-hover)}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-danger-tertiary--background--pressed-hover);color:var(--ix-button-danger-tertiary--color--pressed-active)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-danger-tertiary--border-color--hover);background-color:var(--ix-button-danger-tertiary--background--hover);color:var(--ix-button-danger-tertiary--color--hover)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-danger-tertiary--border-color--active);background-color:var(--ix-button-danger-tertiary--background--active);color:var(--ix-button-danger-tertiary--color--active)}:host(.active:not(.disabled)) .btn-danger-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button-danger-tertiary--border-color--active);background-color:var(--ix-button-danger-tertiary--background--active);color:var(--ix-button-danger-tertiary--color--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-tertiary.disabled,:host(.disabled) .btn-danger-tertiary:disabled{pointer-events:none;border-color:var(--ix-button-danger-tertiary--border-color--disabled);background-color:var(--ix-button-danger-tertiary--background--disabled);color:var(--ix-button-danger-tertiary--color--disabled);opacity:1;--ix-button-color:var(--ix-button-danger-tertiary--color--disabled)}:host{min-width:var(--ix-button--min-width)}:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--disabled:rgba(0, 0, 0, 0);--ix-input--background--focus:var(--si-sys-color-background-4);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--focus:var(--si-sys-color-background-4);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--readonly:rgba(0, 0, 0, 0);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--focus:var(--si-sys-color-background-4);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning:var(--si-sys-color-border-warning);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--border-color-bottom--disabled:var(--si-sys-color-border-4);--ix-input--border-color-bottom--readonly:var(--si-sys-color-border-4);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-error--background:var(--si-sys-color-background-1);--ix-input-error--border-color:var(--si-sys-color-border-danger);--ix-input-error-icon--color:var(--si-sys-color-text-danger);--ix-input-extra--background--active:var(--si-sys-color-background-4);--ix-input-extra--background--hover:var(--si-sys-color-background-4);--ix-input-gripper--color:var(--si-sys-color-text-disabled);--ix-input-gripper--color--focus:var(--si-sys-color-text-disabled);--ix-input-gripper--color--hover:var(--si-sys-color-text-disabled);--ix-input-hint--color:var(--si-sys-color-text-secondary);--ix-input-search-icon--color:var(--si-sys-color-text-accent);--ix-input-search-icon--color--disabled:var(--si-sys-color-text-disabled);--ix-input-search-icon--color--focus:var(--si-sys-color-text-accent);--ix-input-search-icon--color--hover:var(--si-sys-color-text-accent-hover);--ix-input-select-icon--color:var(--si-sys-color-text-primary);--ix-input-select-icon--color--active:var(--si-sys-color-text-primary);--ix-input-select-icon--color--hover:var(--si-sys-color-text-primary);--ix-input-unit--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-input--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-right:calc(     var(--si-sys-sizing-spacing-x-10) * -1   );--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(       var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)     )     calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:calc(     var(--si-sys-sizing-size-100) + 2 * (var(--si-sys-sizing-spacing-y-20) - var(--si-sys-sizing-spacing-y-10))   );--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon-compact--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}:host{--ix-category-filter-dropdown-item--border-color--focus:var(--si-sys-color-effects-focus);--ix-category-filter-category-preview--background:rgba(0, 0, 0, 0);--ix-category-filter-header--color:var(--si-sys-color-text-secondary);--ix-category-filter-dropdown-item--color:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--color--focus:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--color--hover:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--background-color--hover:var(--si-sys-color-background-hover);--ix-category-filter-dropdown-item--color--active:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--background-color--active:var(--si-sys-color-background-selected);--ix-category-filter-dropdown-item--color--disabled:var(--si-sys-color-text-disabled);--ix-category-filter-a--color--active:var(--si-sys-color-text-primary);--ix-category-filter-glyph--color:var(--si-sys-color-text-secondary);--ix-category-filter-glyph--color--disabled:var(--color-weak-text);--ix-category-filter-glyph-single-check--color:var(--si-sys-color-text-secondary)}:host{--ix-category-filter-dropdown-item--padding:0 var(--si-sys-sizing-spacing-x-90);--ix-category-filter-glyph--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-reset-button--top:var(--si-sys-sizing-spacing-y-20);--ix-category-filter-reset-button--right:var(--si-sys-sizing-spacing-x-20);--ix-category-filter-input-container--padding-block:var(--si-sys-sizing-border-width-default);--ix-category-filter-input-container--padding-with-icon:var(       --ix-category-filter-input-container--padding-block     )     var(--si-sys-sizing-spacing-x-80) var(       --ix-category-filter-input-container--padding-block     ) calc(var(--si-sys-sizing-spacing-x-80) + var(--si-sys-sizing-spacing-x-20));--ix-category-filter-input-container--padding-no-icon:var(       --ix-category-filter-input-container--padding-block     )     var(--si-sys-sizing-spacing-x-80) var(       --ix-category-filter-input-container--padding-block     ) var(--si-sys-sizing-spacing-x-20);--ix-category-filter-icon--top:var(--si-sys-sizing-spacing-y-40);--ix-category-filter-icon--left:var(--si-sys-sizing-spacing-x-40);--ix-category-filter--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-category-filter-category-preview--padding:var(--si-sys-sizing-spacing-y-40)     var(--si-sys-sizing-spacing-x-40);--ix-category-filter-dropdown-header--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-category-filter-dropdown-item--margin:var(--si-sys-sizing-spacing-y-20)     var(--si-sys-sizing-spacing-x-40);--ix-category-filter-dropdown-item--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-button-toggle-operator--margin-inline:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-category-preview--margin:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-list-unstyled--padding-top:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-list-unstyled--padding-bottom:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-dropdown-item--height:var(--si-sys-sizing-size-90);--ix-category-filter-input-container--max-height:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-y-50)   );--ix-category-filter-text-input--height:calc(     var(--si-sys-sizing-size-70) + var(--si-sys-sizing-spacing-y-20)   );--ix-category-filter-text-input--min-height:calc(     var(--si-sys-sizing-size-70) + var(--si-sys-sizing-spacing-y-20)   );--ix-category-filter-icon--icon-size:var(--si-sys-sizing-icon-sm);--ix-category-filter-category-preview--height:var(--si-sys-sizing-size-70);--ix-category-filter-category-preview--border-top-left-radius:var(--si-sys-sizing-spacing-x-60);--ix-category-filter-category-preview--border-bottom-left-radius:var(--si-sys-sizing-spacing-x-60);--ix-category-filter--min-width:var(--si-sys-sizing-size-150);--ix-category-filter-dropdown-header--height:var(--si-sys-sizing-size-90);--ix-category-filter-button-toggle-operator--width:var(--si-sys-sizing-size-80);--ix-category-filter-button-toggle-operator--height:var(--si-sys-sizing-size-80);--ix-category-filter-dropdown-item--border-width:var(--si-sys-sizing-border-width-default);--ix-category-filter-dropdown-item--border-radius:var(--si-sys-sizing-border-radius-full)}:host{display:block;position:relative;height:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .reset-button{position:absolute;top:var(--ix-category-filter-reset-button--top);right:var(--ix-category-filter-reset-button--right)}:host .reset-button.hide-reset-button{display:none}:host .input-container:not(.readonly){min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container:not(.readonly)[type=number]{text-align:right}:host .input-container:not(.readonly)[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}:host .input-container:not(.readonly):-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container:not(.readonly):-webkit-autofill,:host .input-container:not(.readonly):autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container:not(.readonly)::-moz-placeholder{color:var(--ix-input-hint--color)}:host .input-container:not(.readonly)::placeholder{color:var(--ix-input-hint--color)}:host .input-container:not(.readonly).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host .input-container:not(.readonly).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host .input-container:not(.readonly):disabled,:host .input-container:not(.readonly).disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container:not(.readonly):disabled::-moz-placeholder,:host .input-container:not(.readonly).disabled::-moz-placeholder{color:transparent}:host .input-container:not(.readonly):disabled::placeholder,:host .input-container:not(.readonly).disabled::placeholder{color:transparent}:host .input-container.readonly{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container.readonly[type=number]{text-align:right}:host .input-container.readonly[type=number]::-webkit-inner-spin-button{margin-right:var(--ix-input-spin-button--margin-right);margin-left:var(--ix-input-spin-button--margin-left);display:none}:host .input-container.readonly:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container.readonly:-webkit-autofill,:host .input-container.readonly:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container.readonly::-moz-placeholder{color:var(--ix-input-hint--color)}:host .input-container.readonly::placeholder{color:var(--ix-input-hint--color)}:host .input-container.readonly.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container.readonly.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container.readonly.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.readonly.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.readonly:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}:host .input-container.readonly.read-only,:host .input-container.readonly:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}:host .input-container.readonly.read-only::-moz-placeholder,:host .input-container.readonly:read-only::-moz-placeholder{color:transparent}:host .input-container.readonly:-moz-read-only::placeholder{color:transparent}:host .input-container.readonly.read-only::placeholder,:host .input-container.readonly:read-only::placeholder{color:transparent}:host .input-container.readonly:disabled,:host .input-container.readonly.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container.readonly:disabled::-moz-placeholder,:host .input-container.readonly.disabled::-moz-placeholder{color:transparent}:host .input-container.readonly:disabled::placeholder,:host .input-container.readonly.disabled::placeholder{color:transparent}:host .input-container:not(.no-icon){padding:var(--ix-category-filter-input-container--padding-with-icon)}:host .input-container.no-icon{padding:var(--ix-category-filter-input-container--padding-no-icon)}:host .input-container:not(.readonly):not(.disabled):hover{border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly):not(.disabled).focus{outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--focus--outline-offset);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.disabled{color:var(--ix-input--color--disabled);border-bottom:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container{display:flex;height:auto;max-height:var(--ix-category-filter-input-container--max-height)}:host .token-container{flex-grow:1;overflow:hidden}:host .text-input{width:auto;height:var(--ix-category-filter-text-input--height);min-height:var(--ix-category-filter-text-input--min-height);background:transparent;color:inherit;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .text-input::-moz-placeholder{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--ix-input-hint--color)}:host .text-input::placeholder{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--ix-input-hint--color)}:host .text-input,:host .text-input:hover,:host .text-input:focus,:host .text-input:focus-visible{border:none !important;outline:none !important}:host .text-input.hide-placeholder::-moz-placeholder{opacity:0}:host .text-input.hide-placeholder::placeholder{opacity:0}:host .list-unstyled{display:flex;flex-wrap:wrap;height:100%;overflow-y:auto}:host ix-icon{block-size:var(--ix-category-filter-icon--icon-size);inline-size:var(--ix-category-filter-icon--icon-size);min-block-size:var(--ix-category-filter-icon--icon-size);min-inline-size:var(--ix-category-filter-icon--icon-size);position:absolute;top:var(--ix-category-filter-icon--top);left:var(--ix-category-filter-icon--left)}:host ix-filter-chip{margin-right:var(--ix-category-filter--margin-right)}:host .category-preview{display:flex;align-items:center;height:var(--ix-category-filter-category-preview--height);background-color:var(--ix-category-filter-category-preview--background);border-top-left-radius:var(--ix-category-filter-category-preview--border-top-left-radius);border-bottom-left-radius:var(--ix-category-filter-category-preview--border-bottom-left-radius);padding:var(--ix-category-filter-category-preview--padding);margin:var(--ix-category-filter-category-preview--margin) 0}:host ul{height:100%}:host .list-unstyled>span:not(.category-preview),:host input{padding-inline-start:0;padding-top:var(--ix-category-filter-list-unstyled--padding-top);padding-bottom:var(--ix-category-filter-list-unstyled--padding-bottom)}:host ix-dropdown{min-width:var(--ix-category-filter--min-width) !important;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host ix-dropdown .dropdown-item-container{display:flex;flex-direction:column}:host ix-dropdown .dropdown-item-container .dropdown-header{display:flex;align-items:center;height:var(--ix-category-filter-dropdown-header--height);color:var(--ix-category-filter-header--color);padding:var(--ix-category-filter-dropdown-header--padding)}:host ix-dropdown .dropdown-item-container .dropdown-item{display:flex;height:var(--ix-category-filter-dropdown-item--height);position:relative;align-items:center;cursor:pointer;padding:var(--ix-category-filter-dropdown-item--padding);border:var(--ix-category-filter-dropdown-item--border-width) solid transparent;color:var(--ix-menu-item--color, var(--ix-category-filter-dropdown-item--color));background-color:transparent}:host ix-dropdown .dropdown-item-container .dropdown-item:focus-visible{outline:none;background-color:var(--ix-menu-item--background, transparent);border-color:var(--ix-category-filter-dropdown-item--border-color--focus);color:var(--ix-menu-item--color--focus, var(--ix-category-filter-dropdown-item--color--focus))}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled){cursor:pointer}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):hover,:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled).hover{color:var(--ix-menu-item--color--hover, var(--ix-category-filter-dropdown-item--color--hover));background-color:var(--ix-menu-item--background--hover, var(--ix-category-filter-dropdown-item--background-color--hover))}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled){cursor:pointer}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):active,:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled).active{color:var(--ix-menu-item--color--active, var(--ix-category-filter-dropdown-item--color--active));background-color:var(--ix-menu-item--background--active, var(--ix-category-filter-dropdown-item--background-color--active))}:host ix-dropdown .dropdown-item-container .dropdown-item.disabled,:host ix-dropdown .dropdown-item-container .dropdown-item:disabled{color:var(--ix-menu-item--color--disabled, var(--ix-category-filter-dropdown-item--color--disabled));background-color:var(--ix-menu-item--background--disabled, transparent)}:host ix-dropdown .dropdown-item-container .dropdown-item>a,:host ix-dropdown .dropdown-item-container .dropdown-item a:hover,:host ix-dropdown .dropdown-item-container .dropdown-item a:active{color:var(--ix-category-filter-a--color--active)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph{color:var(--ix-menu-item-icon--color, var(--ix-category-filter-glyph--color));margin-inline-end:var(--ix-category-filter-glyph--margin-inline-end)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph.disabled{color:var(--ix-category-filter-glyph--color--disabled)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph.glyph-single-check{color:var(--ix-menu-item-icon-check--color, var(--ix-category-filter-glyph-single-check--color))}:host ix-dropdown .dropdown-item-container .dropdown-item{height:var(--ix-category-filter-dropdown-item--height);margin:var(--ix-category-filter-dropdown-item--margin);padding-inline:var(--ix-category-filter-dropdown-item--padding-inline);border:var(--ix-category-filter-dropdown-item--border-width) solid transparent;border-radius:var(--ix-category-filter-dropdown-item--border-radius);width:auto;justify-content:flex-start;flex-grow:1;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):focus-visible{border-color:var(--ix-category-filter-dropdown-item--border-color--focus)}:host ix-dropdown .dropdown-item-container .category-item{border-end-end-radius:0;border-start-end-radius:0}:host ix-dropdown .dropdown-item-container .category-item-value{border-start-start-radius:0;border-end-start-radius:0}:host ix-dropdown .btn-toggle-operator{width:var(--ix-category-filter-button-toggle-operator--width);height:var(--ix-category-filter-button-toggle-operator--height);margin-inline:var(--ix-category-filter-button-toggle-operator--margin-inline)}:host .display-none{display:none}:host(.active:not(.disabled)) .input-container:not(.readonly):not(.disabled){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}`;
const CategoryFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.categoryChanged = createEvent(this, "categoryChanged", 7);
    this.inputChanged = createEvent(this, "inputChanged", 7);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    this.filterCleared = createEvent(this, "filterCleared", 7);
  }
  ID_CUSTOM_FILTER_VALUE = "CW_CUSTOM_FILTER_VALUE";
  formKeyDownListener;
  preventDefaultListener;
  inputKeyDownListener;
  focusInListener;
  focusOutListener;
  inputListener;
  textInput = makeRef();
  tokenListElement;
  formElement;
  isScrollStateDirty;
  a11yAttributes;
  get hostElement() {
    return getElement(this);
  }
  showDropdown = false;
  hasFocus = false;
  categoryLogicalOperator = LogicalFilterOperator.EQUAL;
  inputValue = "";
  category = "";
  filterTokens = [];
  /**
   * If true the filter will be in disabled state
   */
  disabled = false;
  /**
   * If true the filter will be in readonly mode
   */
  readonly = false;
  /**
   * A set of search criteria to populate the component with.
   */
  filterState;
  /**
   * Placeholder text to be displayed in an empty input field.
   */
  placeholder;
  /**
   * Configuration object hash used to populate the dropdown menu for type-ahead and quick selection functionality.
   * Each ID maps to an object with a label and an array of options to select from.
   */
  categories;
  /**
   * In certain use cases some categories may not be available for selection anymore.
   * To allow proper display of set filters with these categories this ID to label mapping can be populated.
   *
   * Configuration object hash used to supply labels to the filter chips in the input field.
   * Each ID maps to a string representing the label to display.
   */
  nonSelectableCategories = {};
  /**
   * A list of strings that will be supplied as type-ahead suggestions not tied to any categories.
   */
  suggestions;
  /**
   * The icon next to the actual text input
   * Defaults to 'search'
   */
  icon;
  /**
   * Allows to hide the icon inside the text input.
   * Defaults to false
   */
  hideIcon = false;
  /**
   * If set categories will always be filtered via the respective logical operator.
   * Toggling of the operator will not be available to the user.
   */
  staticOperator;
  /**
   * If set to true, prevents that a single category can be set more than once.
   * An already set category will not appear in the category dropdown if set to true.
   */
  uniqueCategories = false;
  /**
   * i18n
   */
  labelCategories = "Categories";
  /**
   * i18n label for 'Filter by text'
   */
  i18nPlainText = "Filter by text";
  /**
   * ARIA label for the reset button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelResetButton;
  /**
   * ARIA label for the operator button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelOperatorButton;
  /**
   * ARIA label for the filter input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 3.2.0
   */
  ariaLabelFilterInput;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
   * @since 4.3.0
   */
  enableTopLayer = false;
  /**
   * Event dispatched whenever a category gets selected in the dropdown
   */
  categoryChanged;
  /**
   * Event dispatched whenever the text input changes.
   */
  inputChanged;
  /**
   * Event dispatched whenever the filter state changes.
   */
  filterChanged;
  /**
   * Event dispatched whenever the filter gets cleared.
   */
  filterCleared;
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
    this.inputValue = this.textInput?.current?.value ?? "";
    const inputState = new InputState(this.inputValue, this.category);
    this.inputChanged.emit(inputState);
    if (!this.dropdown?.show) {
      this.openDropdown();
    }
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }
  componentDidLoad() {
    setTimeout(() => {
      if (this.filterState !== void 0) {
        this.setFilterState(this.filterState);
      }
    });
    if (this.formElement !== void 0) {
      this.formKeyDownListener = addDisposableEventListener(this.formElement, "keydown", ((e) => this.handleFormElementKeyDown(e)));
      this.preventDefaultListener = addDisposableEventListener(this.formElement, "submit", this.preventDefault);
    }
    if (this.textInput?.current == null) {
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
    this.showDropdown = false;
    if (this.dropdown) {
      this.dropdown.show = false;
    }
  }
  openDropdown() {
    if (this.disabled || this.readonly) {
      return;
    }
    this.showDropdown = true;
    if (this.dropdown) {
      this.dropdown.show = true;
    }
  }
  handleFormElementKeyDown(e) {
    switch (e.code) {
      case "Enter":
      case "NumpadEnter":
        if (!document.activeElement?.classList.contains("dropdown-item")) {
          return;
        }
        const token = document.activeElement.getAttribute("data-id");
        if (token === null) {
          break;
        }
        if (this.hasCategorySelection()) {
          if (this.category !== "") {
            this.addToken(token, this.category);
            this.textInput?.current?.focus();
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
    const sibling = document.activeElement?.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  focusNextItem() {
    const sibling = document.activeElement?.nextSibling;
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
    const baseSelector = `.category-item-${this.category !== "" ? "value" : "id"}`;
    const fallbackSelector = ".category-item";
    if (!this.dropdown?.show) {
      this.openDropdown();
      requestAnimationFrameNoNgZone(() => this.focusElement(".dropdown-item"));
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    if (this.focusElement(baseSelector)) {
      e.stopPropagation();
      return;
    }
    if (this.suggestions?.length && this.focusElement(fallbackSelector)) {
      e.stopPropagation();
    }
  }
  handleInputElementKeyDown(e) {
    if (e.key === "Home" || e.key === "End") {
      e.stopPropagation();
      return;
    }
    switch (e.code) {
      case "ArrowDown": {
        this.onArrowDown(e);
        break;
      }
      case "Backspace":
        if (this.textInput?.current?.value !== "") {
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
    if (this.textInput?.current) {
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
    this.category = category;
    if (this.textInput?.current) {
      this.textInput.current.value = "";
    }
    this.inputValue = "";
    this.textInput?.current?.focus();
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
    if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
      return value.value;
    }
    const operatorString = value.operator === LogicalFilterOperator.EQUAL ? "=" : "!=";
    const label = this.categories?.[value.id]?.label ?? this.nonSelectableCategories?.[value.id] ?? value.id;
    return `${label} ${operatorString} ${value.value}`;
  }
  getFilteredSuggestions() {
    if (!this.suggestions?.length) {
      return [];
    }
    return this.suggestions?.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value));
  }
  hasCategorySelection() {
    return this.categories !== void 0;
  }
  renderPlainSuggestions() {
    return h("div", { class: "dropdown-item-container" }, this.getFilteredSuggestions().map((suggestion) => h("button", { class: "dropdown-item", "data-id": suggestion, onClick: () => {
      this.addToken(suggestion);
      this.textInput?.current?.focus();
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
    return h(BaseButton, { ...params }, this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL ? "=" : "!=");
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
    if (this.categories === void 0) {
      return;
    }
    return h("div", { class: "dropdown-item-container" }, this.renderOperatorButton(), h("div", { class: "dropdown-header" }, this.categories[this.category]?.label), this.categories[this.category]?.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => h("button", { class: "dropdown-item category-item-value", "data-id": id, title: id, key: id, onClick: (e) => {
      e.preventDefault();
      this.addToken(id, this.category);
      this.textInput?.current?.focus();
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
    return h("div", { class: "dropdown-item-container" }, this.getCategoryIds()?.filter((id) => this.categories && this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => h("button", { class: "dropdown-item category-item category-item-id", "data-id": id, title: this.categories?.[id]?.label, key: id, onClick: (e) => {
      e.preventDefault();
      this.selectCategory(id);
    }, tabindex: "0" }, this.categories?.[id]?.label)));
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
    if (!this.isScrollStateDirty || !this.tokenListElement) {
      return;
    }
    const chips = Array.from(this.tokenListElement.querySelectorAll("ix-filter-chip"));
    if (chips.length !== this.filterTokens.length) {
      return;
    }
    this.isScrollStateDirty = false;
    this.scrollTokenListToEnd(this.tokenListElement, chips);
  }
  async scrollTokenListToEnd(tokenList, chips) {
    await Promise.all(chips.map((chip) => chip.componentOnReady()));
    tokenList.scrollTop = tokenList.scrollHeight;
  }
  disconnectedCallback() {
    if (this.preventDefaultListener) {
      this.preventDefaultListener();
    }
    if (this.formKeyDownListener) {
      this.formKeyDownListener();
    }
    if (this.inputKeyDownListener) {
      this.inputKeyDownListener?.();
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
    }, variant: "tertiary", icon: iconClear, iconColor: "--si-sys-color-text-secondary", size: "16", "aria-label": this.ariaLabelResetButton });
  }
  getIconColor() {
    if (this.disabled) {
      return "--si-sys-color-text-disabled";
    }
    if (this.readonly) {
      return "--si-sys-color-text-primary";
    }
    return "--si-sys-color-text-accent";
  }
  render() {
    return h(Host, { key: "7a7ae646696e83d2525dab684872fab8604f46c0", class: { active: this.showDropdown } }, h("form", { key: "d2cc28345e6f20fc5791ce512f48a5fb57789bc6", ref: (el) => this.formElement = el }, h("div", { key: "bef9803e78f9f489e0f4154032bb946ae6299c99", "read-only": this.readonly, class: {
      "input-container": true,
      disabled: this.disabled,
      focus: this.hasFocus,
      readonly: this.readonly,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { key: "53b1d73749c3c0873fb632f58d902fcba025c02b", color: this.getIconColor(), class: { "display-none": this.hideIcon }, name: this.icon ?? iconSearch, size: "16" }), h("div", { key: "a8803141dca3657154fbf2397a96a363b4b3c73b", class: "token-container" }, h("div", { key: "761b6839a57a6cd2f56e1663c4828615c9208153", class: "list-unstyled", ref: (el) => this.tokenListElement = el }, this.filterTokens.map((value, index) => h("span", { key: value.toString(), class: {
      animate__animated: true,
      animate__fadein: true
    } }, h("ix-filter-chip", { disabled: this.disabled, readonly: this.readonly, onClick: (e) => e.stopPropagation(), onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("span", { class: {
      "category-preview": true,
      "display-none": this.category === ""
    } }, this.categories[this.category]?.label), h("input", { key: "8c2ef0eba1b5cfd2b42860c05c4c14590382e21f", class: {
      "text-input": true,
      "hide-placeholder": this.readonly || this.disabled || this.category !== ""
    }, autocomplete: "off", name: "category-filter-input", disabled: this.disabled, readonly: this.readonly, ref: this.textInput, type: "text", placeholder: this.placeholder, ...this.a11yAttributes, "aria-label": this.ariaLabelFilterInput }))), !this.readonly && !this.disabled && this.getResetButton())), this.disabled || this.readonly ? "" : h("ix-dropdown", { show: this.showDropdown, closeBehavior: "outside", offset: { mainAxis: 2 }, anchor: this.textInput?.waitForCurrent(), trigger: this.hostElement, header: this.getDropdownHeader(), enableTopLayer: this.enableTopLayer, onShowChanged: (event) => {
      this.showDropdown = event.detail;
    } }, this.renderDropdownContent()));
  }
  static get watchers() {
    return {
      "filterState": [{
        "watchFilterState": 0
      }]
    };
  }
};
CategoryFilter.style = categoryFilterCss();
export {
  CategoryFilter as ix_category_filter
};
