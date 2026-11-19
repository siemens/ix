import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-CNdMQz6S.js";
import { w as iconSearch, v as iconClear } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { B as BaseButton } from "./base-button-DQT_06rD-CyzQS1Lo.js";
import { b as a11yHostAttributes } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { w as waitForComponentReady } from "./component-ready-Azbf-mLi-CS6kXq-R.js";
import { a as addDisposableEventListener } from "./disposable-event-listener-CKoABG1h-D5kNsG5G.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { r as requestAnimationFrameNoNgZone } from "./requestAnimationFrame-BEuV0Xpe-CBtvTq-Q.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
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
const categoryFilterCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button--background--danger-primary:var(--si-sys-color-background-danger);--ix-button--background--danger-primary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--danger-primary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-primary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-primary:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-primary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-secondary:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--border-color--danger-secondary--active:var(--si-sys-color-border-danger);--ix-button--border-color--danger-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--danger-secondary--hover:var(--si-sys-color-border-danger);--ix-button--color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--color--danger-secondary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-secondary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-tertiary:var(--si-sys-color-text-danger);--ix-button--color--danger-tertiary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-tertiary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--primary:var(--si-sys-color-background-accent);--ix-button--background--primary--active:var(--si-sys-color-background-accent-active);--ix-button--background--primary--disabled:var(--si-sys-color-background-1);--ix-button--background--primary--hover:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed--hover:var(--si-sys-color-background-accent-hover);--ix-button--border-color--primary:rgba(0, 0, 0, 0);--ix-button--border-color--primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--primary--hover:rgba(0, 0, 0, 0);--ix-button--color--primary:var(--si-sys-color-text-on-accent);--ix-button--color--primary--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--primary--hover:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--hover:var(--si-sys-color-text-on-accent);--ix-button--background--secondary:var(--si-sys-color-background-accent-secondary);--ix-button--background--secondary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--secondary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--secondary:var(--si-sys-color-border-accent);--ix-button--border-color--secondary--active:var(--si-sys-color-border-accent-active);--ix-button--border-color--secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--secondary--hover:var(--si-sys-color-border-accent-hover);--ix-button--color--secondary:var(--si-sys-color-text-accent);--ix-button--color--secondary--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--secondary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-primary:var(--si-sys-color-background-2);--ix-button--background--subtle-primary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--subtle-primary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-primary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-primary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-primary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-primary:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-primary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-secondary:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-secondary:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--active:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--subtle-secondary--hover:var(--si-sys-color-border-2);--ix-button--color--subtle-secondary:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-secondary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-tertiary:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-tertiary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--tertiary:rgba(0, 0, 0, 0);--ix-button--background--tertiary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--tertiary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--tertiary:var(--si-sys-color-text-accent);--ix-button--color--tertiary--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--tertiary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--pressed--hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-button--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-button--border-radius-left:var(--ix-button--border-radius);--ix-button--border-radius-right:var(--ix-button--border-radius);display:inline-block;height:var(--ix-button--height);vertical-align:middle;cursor:pointer;font:var(--si-sys-typography-body-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button--padding)}:host ix-spinner{margin-right:var(--ix-button--margin-right)}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:var(--ix-button-icon--margin-right)}:host .icon-right{margin-left:var(--ix-button-icon-right--margin-left)}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--outline-offset--focus)}:host .btn:focus-visible{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--outline-offset--focus)}:host{--ix-button--border-radius-left:var(--ix-button--border-radius);--ix-button--border-radius-right:var(--ix-button--border-radius);display:inline-block;height:var(--ix-button--height);vertical-align:middle;cursor:pointer;font:var(--si-sys-typography-body-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host button,:host a{all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button--padding)}:host ix-spinner{margin-right:var(--ix-button--margin-right)}:host .content{display:inline-block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}:host .content-start{width:100%}:host .icon{pointer-events:none;margin-right:var(--ix-button-icon--margin-right)}:host .icon-right{margin-left:var(--ix-button-icon-right--margin-left)}:host(.disabled){cursor:default}:host(.ix-focused) .btn{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--outline-offset--focus)}:host .btn:focus-visible{outline:var(--ix-button--outline-width--focus) solid var(--ix-button--outline-color--focus);outline-offset:var(--ix-button--outline-offset--focus)}:host .btn-primary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-primary{background-color:var(--ix-button--background--primary);color:var(--ix-button--color--primary);--ix-button--color:var(--ix-button--color--primary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--primary);border-style:solid}:host .btn-primary.selected{background-color:var(--ix-button--background--primary--pressed);color:var(--ix-button--color--primary--pressed)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--primary--pressed--hover);color:var(--ix-button--color--primary--pressed--hover)}:host .btn-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary.selected:not(.disabled):not(:disabled):active,:host .btn-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--primary--pressed--hover);color:var(--ix-button--color--primary--pressed--active)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):hover,:host .btn-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--primary--hover);background-color:var(--ix-button--background--primary--hover);color:var(--ix-button--color--primary--hover)}:host .btn-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-primary:not(.disabled):not(:disabled):active,:host .btn-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--primary--active);background-color:var(--ix-button--background--primary--active);color:var(--ix-button--color--primary--active)}:host(.active:not(.disabled)) .btn-primary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--primary--active);background-color:var(--ix-button--background--primary--active);color:var(--ix-button--color--primary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-primary.disabled,:host(.disabled) .btn-primary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--primary--disabled);background-color:var(--ix-button--background--primary--disabled);color:var(--ix-button--color--primary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--primary--disabled)}:host .btn-secondary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-secondary{background-color:var(--ix-button--background--secondary);color:var(--ix-button--color--secondary);--ix-button--color:var(--ix-button--color--secondary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--secondary);border-style:solid}:host .btn-secondary.selected{background-color:var(--ix-button--background--secondary--pressed);color:var(--ix-button--color--secondary--pressed)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--secondary--pressed--hover);color:var(--ix-button--color--secondary--pressed--hover)}:host .btn-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--secondary--pressed--hover);color:var(--ix-button--color--secondary--pressed--active)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):hover,:host .btn-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--secondary--hover);background-color:var(--ix-button--background--secondary--hover);color:var(--ix-button--color--secondary--hover)}:host .btn-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-secondary:not(.disabled):not(:disabled):active,:host .btn-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--secondary--active);background-color:var(--ix-button--background--secondary--active);color:var(--ix-button--color--secondary--active)}:host(.active:not(.disabled)) .btn-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--secondary--active);background-color:var(--ix-button--background--secondary--active);color:var(--ix-button--color--secondary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-secondary.disabled,:host(.disabled) .btn-secondary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--secondary--disabled);background-color:var(--ix-button--background--secondary--disabled);color:var(--ix-button--color--secondary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--secondary--disabled)}:host .btn-tertiary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-tertiary{background-color:var(--ix-button--background--tertiary);color:var(--ix-button--color--tertiary);--ix-button--color:var(--ix-button--color--tertiary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--tertiary);border-style:solid}:host .btn-tertiary.selected{background-color:var(--ix-button--background--tertiary--pressed);color:var(--ix-button--color--tertiary--pressed)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--tertiary--pressed--hover);color:var(--ix-button--color--tertiary--pressed--hover)}:host .btn-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--tertiary--pressed--hover);color:var(--ix-button--color--tertiary--pressed--active)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):hover,:host .btn-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--tertiary--hover);background-color:var(--ix-button--background--tertiary--hover);color:var(--ix-button--color--tertiary--hover)}:host .btn-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-tertiary:not(.disabled):not(:disabled):active,:host .btn-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--tertiary--active);background-color:var(--ix-button--background--tertiary--active);color:var(--ix-button--color--tertiary--active)}:host(.active:not(.disabled)) .btn-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--tertiary--active);background-color:var(--ix-button--background--tertiary--active);color:var(--ix-button--color--tertiary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-tertiary.disabled,:host(.disabled) .btn-tertiary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--tertiary--disabled);background-color:var(--ix-button--background--tertiary--disabled);color:var(--ix-button--color--tertiary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--tertiary--disabled)}:host .btn-subtle-primary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-subtle-primary{background-color:var(--ix-button--background--subtle-primary);color:var(--ix-button--color--subtle-primary);--ix-button--color:var(--ix-button--color--subtle-primary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--subtle-primary);border-style:solid}:host .btn-subtle-primary.selected{background-color:var(--ix-button--background--subtle-primary--pressed);color:var(--ix-button--color--subtle-primary--pressed)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--subtle-primary--pressed--hover);color:var(--ix-button--color--subtle-primary--pressed--hover)}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-primary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--subtle-primary--pressed--hover);color:var(--ix-button--color--subtle-primary--pressed--active)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):hover,:host .btn-subtle-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--subtle-primary--hover);background-color:var(--ix-button--background--subtle-primary--hover);color:var(--ix-button--color--subtle-primary--hover)}:host .btn-subtle-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-primary:not(.disabled):not(:disabled):active,:host .btn-subtle-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--subtle-primary--active);background-color:var(--ix-button--background--subtle-primary--active);color:var(--ix-button--color--subtle-primary--active)}:host(.active:not(.disabled)) .btn-subtle-primary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--subtle-primary--active);background-color:var(--ix-button--background--subtle-primary--active);color:var(--ix-button--color--subtle-primary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-primary.disabled,:host(.disabled) .btn-subtle-primary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--subtle-primary--disabled);background-color:var(--ix-button--background--subtle-primary--disabled);color:var(--ix-button--color--subtle-primary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--subtle-primary--disabled)}:host .btn-subtle-secondary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-subtle-secondary{background-color:var(--ix-button--background--subtle-secondary);color:var(--ix-button--color--subtle-secondary);--ix-button--color:var(--ix-button--color--subtle-secondary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--subtle-secondary);border-style:solid}:host .btn-subtle-secondary.selected{background-color:var(--ix-button--background--subtle-secondary--pressed);color:var(--ix-button--color--subtle-secondary--pressed)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--subtle-secondary--pressed--hover);color:var(--ix-button--color--subtle-secondary--pressed--hover)}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--subtle-secondary--pressed--hover);color:var(--ix-button--color--subtle-secondary--pressed--active)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):hover,:host .btn-subtle-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--subtle-secondary--hover);background-color:var(--ix-button--background--subtle-secondary--hover);color:var(--ix-button--color--subtle-secondary--hover)}:host .btn-subtle-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-secondary:not(.disabled):not(:disabled):active,:host .btn-subtle-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--subtle-secondary--active);background-color:var(--ix-button--background--subtle-secondary--active);color:var(--ix-button--color--subtle-secondary--active)}:host(.active:not(.disabled)) .btn-subtle-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--subtle-secondary--active);background-color:var(--ix-button--background--subtle-secondary--active);color:var(--ix-button--color--subtle-secondary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-secondary.disabled,:host(.disabled) .btn-subtle-secondary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--subtle-secondary--disabled);background-color:var(--ix-button--background--subtle-secondary--disabled);color:var(--ix-button--color--subtle-secondary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--subtle-secondary--disabled)}:host .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-subtle-tertiary{background-color:var(--ix-button--background--subtle-tertiary);color:var(--ix-button--color--subtle-tertiary);--ix-button--color:var(--ix-button--color--subtle-tertiary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--subtle-tertiary);border-style:solid}:host .btn-subtle-tertiary.selected{background-color:var(--ix-button--background--subtle-tertiary--pressed);color:var(--ix-button--color--subtle-tertiary--pressed)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--hover)}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--active)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--subtle-tertiary--hover);background-color:var(--ix-button--background--subtle-tertiary--hover);color:var(--ix-button--color--subtle-tertiary--hover)}:host .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--subtle-tertiary--active);background-color:var(--ix-button--background--subtle-tertiary--active);color:var(--ix-button--color--subtle-tertiary--active)}:host(.active:not(.disabled)) .btn-subtle-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--subtle-tertiary--active);background-color:var(--ix-button--background--subtle-tertiary--active);color:var(--ix-button--color--subtle-tertiary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-subtle-tertiary.disabled,:host(.disabled) .btn-subtle-tertiary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--subtle-tertiary--disabled);background-color:var(--ix-button--background--subtle-tertiary--disabled);color:var(--ix-button--color--subtle-tertiary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--subtle-tertiary--disabled)}:host .btn-danger-primary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-danger-primary{background-color:var(--ix-button--background--danger-primary);color:var(--ix-button--color--danger-primary);--ix-button--color:var(--ix-button--color--danger-primary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--danger-primary);border-style:solid}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):hover,:host .btn-danger-primary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--danger-primary--hover);background-color:var(--ix-button--background--danger-primary--hover);color:var(--ix-button--color--danger-primary--hover)}:host .btn-danger-primary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-primary:not(.disabled):not(:disabled):active,:host .btn-danger-primary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--danger-primary--active);background-color:var(--ix-button--background--danger-primary--active);color:var(--ix-button--color--danger-primary--active)}:host(.active:not(.disabled)) .btn-danger-primary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--danger-primary--active);background-color:var(--ix-button--background--danger-primary--active);color:var(--ix-button--color--danger-primary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-primary.disabled,:host(.disabled) .btn-danger-primary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--danger-primary--disabled);background-color:var(--ix-button--background--danger-primary--disabled);color:var(--ix-button--color--danger-primary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--danger-primary--disabled)}:host .btn-danger-secondary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-danger-secondary{background-color:var(--ix-button--background--danger-secondary);color:var(--ix-button--color--danger-secondary);--ix-button--color:var(--ix-button--color--danger-secondary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--danger-secondary);border-style:solid}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):hover,:host .btn-danger-secondary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--danger-secondary--hover);background-color:var(--ix-button--background--danger-secondary--hover);color:var(--ix-button--color--danger-secondary--hover)}:host .btn-danger-secondary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-secondary:not(.disabled):not(:disabled):active,:host .btn-danger-secondary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--danger-secondary--active);background-color:var(--ix-button--background--danger-secondary--active);color:var(--ix-button--color--danger-secondary--active)}:host(.active:not(.disabled)) .btn-danger-secondary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--danger-secondary--active);background-color:var(--ix-button--background--danger-secondary--active);color:var(--ix-button--color--danger-secondary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-secondary.disabled,:host(.disabled) .btn-danger-secondary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--danger-secondary--disabled);background-color:var(--ix-button--background--danger-secondary--disabled);color:var(--ix-button--color--danger-secondary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--danger-secondary--disabled)}:host .btn-danger-tertiary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host .btn-danger-tertiary{background-color:var(--ix-button--background--danger-tertiary);color:var(--ix-button--color--danger-tertiary);--ix-button--color:var(--ix-button--color--danger-tertiary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--danger-tertiary);border-style:solid}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):hover,:host .btn-danger-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--danger-tertiary--hover);background-color:var(--ix-button--background--danger-tertiary--hover);color:var(--ix-button--color--danger-tertiary--hover)}:host .btn-danger-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host .btn-danger-tertiary:not(.disabled):not(:disabled):active,:host .btn-danger-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--danger-tertiary--active);background-color:var(--ix-button--background--danger-tertiary--active);color:var(--ix-button--color--danger-tertiary--active)}:host(.active:not(.disabled)) .btn-danger-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--danger-tertiary--active);background-color:var(--ix-button--background--danger-tertiary--active);color:var(--ix-button--color--danger-tertiary--active)}:host(.disabled){pointer-events:none}:host(.disabled) .btn-danger-tertiary.disabled,:host(.disabled) .btn-danger-tertiary:disabled{pointer-events:none;border-color:var(--ix-button--border-color--danger-tertiary--disabled);background-color:var(--ix-button--background--danger-tertiary--disabled);color:var(--ix-button--color--danger-tertiary--disabled);opacity:1;--ix-button--color:var(--ix-button--color--danger-tertiary--disabled)}:host{min-width:var(--ix-button--min-width)}:host{--ix-input--background:var(--si-sys-color-background-1);--ix-input--background--autofill:rgba(0, 0, 0, 0);--ix-input--background--hover:var(--si-sys-color-background-4);--ix-input--background--invalid:var(--si-sys-color-background-1);--ix-input--background--invalid--hover:var(--si-sys-color-background-4);--ix-input--background--warning:var(--si-sys-color-background-1);--ix-input--background--warning--hover:var(--si-sys-color-background-4);--ix-input--border-color:var(--si-sys-color-border-2);--ix-input--border-color--autofill:var(--si-sys-color-border-2);--ix-input--border-color--disabled:var(--si-sys-color-border-4);--ix-input--border-color--focus:var(--si-sys-color-border-1);--ix-input--border-color--hover:var(--si-sys-color-border-1);--ix-input--border-color--info:var(--si-sys-color-border-information);--ix-input--border-color--info--active:var(--si-sys-color-border-information);--ix-input--border-color--info--hover:var(--si-sys-color-border-information);--ix-input--border-color--invalid:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--active:var(--si-sys-color-border-danger);--ix-input--border-color--invalid--hover:var(--si-sys-color-border-danger);--ix-input--border-color--readonly:var(--si-sys-color-border-4);--ix-input--border-color--warning--active:var(--si-sys-color-border-warning);--ix-input--border-color--warning--hover:var(--si-sys-color-border-warning);--ix-input--color:var(--si-sys-color-text-primary);--ix-input--color--autofill:var(--si-sys-color-text-primary);--ix-input--color--disabled:var(--si-sys-color-text-disabled);--ix-input--outline-color--focus:var(--si-sys-color-effects-focus);--ix-input-hint--color:var(--si-sys-color-text-secondary)}:host{--ix-input--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-input--border-width:var(--si-sys-sizing-border-width-default);--ix-input--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-input--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-input--min-height:var(--si-sys-sizing-size-80);--ix-input--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-input-spin-button--margin-left:var(--si-sys-sizing-spacing-x-10);--ix-input-textarea--padding:calc(var(--si-sys-sizing-spacing-y-30) - var(--ix-input--border-width)) calc(var(--si-sys-sizing-spacing-x-40) - var(--ix-input--border-width));--ix-input-textarea--height:var(--si-sys-sizing-size-110);--ix-input-start-container--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-input-icon--margin-left--compact:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--inset:var(--si-sys-sizing-spacing-x-20);--ix-input-end-container--margin-right:var(--si-sys-sizing-spacing-x-40);--ix-input-icon--margin-right--compact:var(--si-sys-sizing-spacing-x-20);--ix-input-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-input-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-input-show-stepper-buttons--min-width:var(--si-sys-sizing-size-130);--ix-input-password-eye--margin-left:var(--si-sys-sizing-spacing-x-10)}:host{--ix-category-filter-dropdown-item--outline-color--focus:var(--si-sys-color-effects-focus);--ix-category-filter-category-preview--background:rgba(0, 0, 0, 0);--ix-category-filter-header--color:var(--si-sys-color-text-secondary);--ix-category-filter-dropdown-item--color:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--color--focus:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--color--hover:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--background-color--hover:var(--si-sys-color-background-hover);--ix-category-filter-dropdown-item--color--active:var(--si-sys-color-text-primary);--ix-category-filter-dropdown-item--background-color--active:var(--si-sys-color-background-selected);--ix-category-filter-dropdown-item--color--disabled:var(--si-sys-color-text-disabled);--ix-category-filter-a--color--active:var(--si-sys-color-text-primary);--ix-category-filter-glyph--color:var(--si-sys-color-text-secondary);--ix-category-filter-glyph--color--disabled:var(--color-weak-text);--ix-category-filter-glyph-single-check--color:var(--si-sys-color-text-secondary)}:host{--ix-category-filter-dropdown-item--padding:0 var(--si-sys-sizing-spacing-x-90);--ix-category-filter-glyph--margin-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-reset-button--top:var(--si-sys-sizing-spacing-y-20);--ix-category-filter-reset-button--right:var(--si-sys-sizing-spacing-x-20);--ix-category-filter-input-container--padding-block:var(--si-sys-sizing-border-width-default);--ix-category-filter-input-container--padding--with-icon:var(--ix-category-filter-input-container--padding-block) var(--si-sys-sizing-spacing-x-80) var(--ix-category-filter-input-container--padding-block) calc(var(--si-sys-sizing-spacing-x-80) + var(--si-sys-sizing-spacing-x-20));--ix-category-filter-input-container--padding--no-icon:var(--ix-category-filter-input-container--padding-block) var(--si-sys-sizing-spacing-x-80) var(--ix-category-filter-input-container--padding-block) var(--si-sys-sizing-spacing-x-20);--ix-category-filter-icon--top:var(--si-sys-sizing-spacing-y-40);--ix-category-filter-icon--left:var(--si-sys-sizing-spacing-x-40);--ix-category-filter--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-category-filter-category-preview--padding:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40);--ix-category-filter-dropdown-header--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-category-filter-dropdown-item--margin:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-40);--ix-category-filter-dropdown-item--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-button-toggle-operator--margin-inline:var(--si-sys-sizing-spacing-x-40);--ix-category-filter-category-preview--margin:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-list-unstyled--padding-top:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-list-unstyled--padding-bottom:var(--si-sys-sizing-spacing-y-10);--ix-category-filter-dropdown-item--height:var(--si-sys-sizing-size-90);--ix-category-filter-input-container--max-height:calc(var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-y-50));--ix-category-filter-text-input--height:calc(var(--si-sys-sizing-size-70) + var(--si-sys-sizing-spacing-y-20));--ix-category-filter-text-input--min-height:calc(var(--si-sys-sizing-size-70) + var(--si-sys-sizing-spacing-y-20));--ix-category-filter-icon--size:var(--si-sys-sizing-icon-sm);--ix-category-filter-category-preview--height:var(--si-sys-sizing-size-70);--ix-category-filter-category-preview--border-top-left-radius:var(--si-sys-sizing-spacing-x-60);--ix-category-filter-category-preview--border-bottom-left-radius:var(--si-sys-sizing-spacing-x-60);--ix-category-filter--min-width:var(--si-sys-sizing-size-150);--ix-category-filter-dropdown-header--height:var(--si-sys-sizing-size-90);--ix-category-filter-button-toggle-operator--width:var(--si-sys-sizing-size-80);--ix-category-filter-button-toggle-operator--height:var(--si-sys-sizing-size-80);--ix-category-filter-dropdown-item--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-category-filter-dropdown-item--outline-offset--focus:calc(-1 * var(--ix-category-filter-dropdown-item--outline-width--focus));--ix-category-filter-dropdown-item--border-radius:var(--si-sys-sizing-border-radius-full)}:host{display:block;position:relative;height:auto}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .reset-button{position:absolute;top:var(--ix-category-filter-reset-button--top);right:var(--ix-category-filter-reset-button--right)}:host .reset-button.hide-reset-button{display:none}:host .input-container:not(.readonly){min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container:not(.readonly)[type=number]{text-align:right}:host .input-container:not(.readonly)[type=number]::-webkit-inner-spin-button{margin-left:var(--ix-input-spin-button--margin-left);display:none}:host .input-container:not(.readonly):-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container:not(.readonly):-webkit-autofill,:host .input-container:not(.readonly):autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container:not(.readonly)::-moz-placeholder{color:var(--ix-input-hint--color)}:host .input-container:not(.readonly)::placeholder{color:var(--ix-input-hint--color)}:host .input-container:not(.readonly).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly).hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container:not(.readonly):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--outline-offset--focus);border-color:var(--ix-input--border-color--focus) !important}:host .input-container:not(.readonly).focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container:not(.readonly):focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--outline-offset--focus);border-color:var(--ix-input--border-color--focus) !important}:host .input-container:not(.readonly):disabled,:host .input-container:not(.readonly).disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container:not(.readonly):disabled::-moz-placeholder,:host .input-container:not(.readonly).disabled::-moz-placeholder{color:transparent}:host .input-container:not(.readonly):disabled::placeholder,:host .input-container:not(.readonly).disabled::placeholder{color:transparent}:host .input-container.readonly{min-height:var(--ix-input--min-height);width:auto;padding:var(--ix-input--padding);background-color:var(--ix-input--background);color:var(--ix-input--color);-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;text-overflow:ellipsis;border:var(--ix-input--border-width) solid var(--ix-input--border-color);border-radius:var(--ix-input--border-radius);font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .input-container.readonly[type=number]{text-align:right}:host .input-container.readonly[type=number]::-webkit-inner-spin-button{margin-left:var(--ix-input-spin-button--margin-left);display:none}:host .input-container.readonly:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container.readonly:-webkit-autofill,:host .input-container.readonly:autofill{-webkit-box-shadow:0 0 0 1000px var(--ix-input--background--autofill) inset !important;-webkit-text-fill-color:var(--ix-input--color--autofill) !important;background-color:var(--ix-input--background--autofill) !important;border:var(--ix-input--border-width) solid var(--ix-input--border-color--autofill) !important;color:var(--ix-input--color--autofill) !important}:host .input-container.readonly::-moz-placeholder{color:var(--ix-input-hint--color)}:host .input-container.readonly::placeholder{color:var(--ix-input-hint--color)}:host .input-container.readonly.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container.readonly.hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:hover:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container.readonly.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only),:host .input-container.readonly:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:-moz-read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--outline-offset--focus);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.readonly.focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only),:host .input-container.readonly:focus:not(.readonly,.read-only,.disabled,[readonly],[disabled],:read-only){outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--outline-offset--focus);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.readonly:-moz-read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}:host .input-container.readonly.read-only,:host .input-container.readonly:read-only{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--readonly)}:host .input-container.readonly.read-only::-moz-placeholder,:host .input-container.readonly:read-only::-moz-placeholder{color:transparent}:host .input-container.readonly:-moz-read-only::placeholder{color:transparent}:host .input-container.readonly.read-only::placeholder,:host .input-container.readonly:read-only::placeholder{color:transparent}:host .input-container.readonly:disabled,:host .input-container.readonly.disabled{background-color:transparent;outline:none;border:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container.readonly:disabled::-moz-placeholder,:host .input-container.readonly.disabled::-moz-placeholder{color:transparent}:host .input-container.readonly:disabled::placeholder,:host .input-container.readonly.disabled::placeholder{color:transparent}:host .input-container:not(.no-icon){padding:var(--ix-category-filter-input-container--padding--with-icon)}:host .input-container.no-icon{padding:var(--ix-category-filter-input-container--padding--no-icon)}:host .input-container:not(.readonly):not(.disabled):hover{border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}:host .input-container:not(.readonly):not(.disabled).focus{outline:var(--ix-input--outline-width--focus) solid var(--ix-input--outline-color--focus);outline-offset:var(--ix-input--outline-offset--focus);border-color:var(--ix-input--border-color--focus) !important}:host .input-container.disabled{color:var(--ix-input--color--disabled);border-bottom:var(--ix-input--border-width) solid var(--ix-input--border-color--disabled)}:host .input-container{display:flex;height:auto;max-height:var(--ix-category-filter-input-container--max-height)}:host .token-container{flex-grow:1;overflow:hidden}:host .text-input{width:auto;height:var(--ix-category-filter-text-input--height);min-height:var(--ix-category-filter-text-input--min-height);background:transparent;color:inherit;flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .text-input::-moz-placeholder{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--ix-input-hint--color)}:host .text-input::placeholder{font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;color:var(--ix-input-hint--color)}:host .text-input,:host .text-input:hover,:host .text-input:focus,:host .text-input:focus-visible{border:none !important;outline:none !important}:host .text-input.hide-placeholder::-moz-placeholder{opacity:0}:host .text-input.hide-placeholder::placeholder{opacity:0}:host .list-unstyled{display:flex;flex-wrap:wrap;height:100%;overflow-y:auto}:host ix-icon{block-size:var(--ix-category-filter-icon--size);inline-size:var(--ix-category-filter-icon--size);min-block-size:var(--ix-category-filter-icon--size);min-inline-size:var(--ix-category-filter-icon--size);position:absolute;top:var(--ix-category-filter-icon--top);left:var(--ix-category-filter-icon--left)}:host ix-filter-chip{margin-right:var(--ix-category-filter--margin-right)}:host .category-preview{display:flex;align-items:center;height:var(--ix-category-filter-category-preview--height);background-color:var(--ix-category-filter-category-preview--background);border-top-left-radius:var(--ix-category-filter-category-preview--border-top-left-radius);border-bottom-left-radius:var(--ix-category-filter-category-preview--border-bottom-left-radius);padding:var(--ix-category-filter-category-preview--padding);margin:var(--ix-category-filter-category-preview--margin) 0}:host ul{height:100%}:host .list-unstyled>span:not(.category-preview),:host input{padding-inline-start:0;padding-top:var(--ix-category-filter-list-unstyled--padding-top);padding-bottom:var(--ix-category-filter-list-unstyled--padding-bottom)}:host ix-dropdown{min-width:var(--ix-category-filter--min-width) !important;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host ix-dropdown .dropdown-item-container{display:flex;flex-direction:column}:host ix-dropdown .dropdown-item-container .dropdown-header{display:flex;align-items:center;height:var(--ix-category-filter-dropdown-header--height);color:var(--ix-category-filter-header--color);padding:var(--ix-category-filter-dropdown-header--padding)}:host ix-dropdown .dropdown-item-container .dropdown-item{display:flex;height:var(--ix-category-filter-dropdown-item--height);position:relative;align-items:center;cursor:pointer;padding:var(--ix-category-filter-dropdown-item--padding);color:var(--ix-category-filter-dropdown-item--color);background-color:transparent}:host ix-dropdown .dropdown-item-container .dropdown-item:focus-visible{outline:var(--ix-category-filter-dropdown-item--outline-width--focus) solid var(--ix-category-filter-dropdown-item--outline-color--focus);outline-offset:var(--ix-category-filter-dropdown-item--outline-offset--focus);background-color:transparent;color:var(--ix-category-filter-dropdown-item--color--focus)}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled){cursor:pointer}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):hover,:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled).hover{color:var(--ix-category-filter-dropdown-item--color--hover);background-color:var(--ix-category-filter-dropdown-item--background-color--hover)}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled){cursor:pointer}:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled):active,:host ix-dropdown .dropdown-item-container .dropdown-item:not(.disabled):not(:disabled).active{color:var(--ix-category-filter-dropdown-item--color--active);background-color:var(--ix-category-filter-dropdown-item--background-color--active)}:host ix-dropdown .dropdown-item-container .dropdown-item.disabled,:host ix-dropdown .dropdown-item-container .dropdown-item:disabled{color:var(--ix-category-filter-dropdown-item--color--disabled);background-color:transparent}:host ix-dropdown .dropdown-item-container .dropdown-item>a,:host ix-dropdown .dropdown-item-container .dropdown-item a:hover,:host ix-dropdown .dropdown-item-container .dropdown-item a:active{color:var(--ix-category-filter-a--color--active)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph{color:var(--ix-category-filter-glyph--color);margin-inline-end:var(--ix-category-filter-glyph--margin-inline-end)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph.disabled{color:var(--ix-category-filter-glyph--color--disabled)}:host ix-dropdown .dropdown-item-container .dropdown-item>.glyph.glyph-single-check{color:var(--ix-category-filter-glyph-single-check--color)}:host ix-dropdown .dropdown-item-container .dropdown-item{height:var(--ix-category-filter-dropdown-item--height);margin:var(--ix-category-filter-dropdown-item--margin);padding-inline:var(--ix-category-filter-dropdown-item--padding-inline);border-radius:var(--ix-category-filter-dropdown-item--border-radius);width:auto;justify-content:flex-start;flex-grow:1;font:var(--si-sys-typography-body);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host ix-dropdown .dropdown-item-container .category-item{border-end-end-radius:0;border-start-end-radius:0}:host ix-dropdown .dropdown-item-container .category-item-value{border-start-start-radius:0;border-end-start-radius:0}:host ix-dropdown .btn-toggle-operator{width:var(--ix-category-filter-button-toggle-operator--width);height:var(--ix-category-filter-button-toggle-operator--height);margin-inline:var(--ix-category-filter-button-toggle-operator--margin-inline)}:host .display-none{display:none}:host(.active:not(.disabled)) .input-container:not(.readonly):not(.disabled){border-color:var(--ix-input--border-color--hover) !important;background-color:var(--ix-input--background--hover)}`;
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
   *
   * Processing time grows quadratically with the number of tokens and categorical filters.
   * Bound the size of untrusted or user-controlled filter states to keep the page responsive.
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
   */
  ariaLabelResetButton;
  /**
   * ARIA label for the operator button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelOperatorButton;
  /**
   * ARIA label for the filter input
   * Will be set as aria-label on the nested HTML input element
   */
  ariaLabelFilterInput;
  /**
   * Enable Popover API rendering for dropdown.
   *
   * @default false
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
    await Promise.all(chips.map((chip) => waitForComponentReady(chip)));
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
    return h(Host, { key: "6e154f93d98acca20b554e82bcb7214fcdccc37f", class: { active: this.showDropdown } }, h("form", { key: "a2f54199ced2c579bbeac836d6909cfeb84a0351", ref: (el) => this.formElement = el }, h("div", { key: "1d87a349cae3001dec75526d05ad0b10ecfd04fc", "read-only": this.readonly, class: {
      "input-container": true,
      disabled: this.disabled,
      focus: this.hasFocus,
      readonly: this.readonly,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { key: "b97854a93598491c5be0b51692ba1bef71823edf", color: this.getIconColor(), class: { "display-none": this.hideIcon }, name: this.icon ?? iconSearch, size: "16" }), h("div", { key: "0b52d8416820628e53fe60d62f4eaac557e97258", class: "token-container" }, h("div", { key: "ecdcd41ffb80705f38fc3219cb7a04acc6860268", class: "list-unstyled", ref: (el) => this.tokenListElement = el }, this.filterTokens.map((value, index) => h("span", { key: value.toString() }, h("ix-filter-chip", { disabled: this.disabled, readonly: this.readonly, onClick: (e) => e.stopPropagation(), onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("span", { class: {
      "category-preview": true,
      "display-none": this.category === ""
    } }, this.categories[this.category]?.label), h("input", { key: "062e023f3d67c77a66dbf52d9140b07f98b57542", class: {
      "text-input": true,
      "hide-placeholder": this.readonly || this.disabled || this.category !== ""
    }, autocomplete: "off", name: "category-filter-input", disabled: this.disabled, readonly: this.readonly, ref: this.textInput, type: "text", placeholder: this.placeholder, ...this.a11yAttributes, "aria-label": this.ariaLabelFilterInput }))), !this.readonly && !this.disabled && this.getResetButton())), this.disabled || this.readonly ? "" : h("ix-dropdown", { show: this.showDropdown, closeBehavior: "outside", offset: { mainAxis: 2 }, anchor: this.textInput?.waitForCurrent(), trigger: this.hostElement, header: this.getDropdownHeader(), enableTopLayer: this.enableTopLayer, keyboardActivationKeys: ["ArrowUp", "ArrowDown"], keyboardItemTriggerKeys: ["Enter"], onShowChanged: (event) => {
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
