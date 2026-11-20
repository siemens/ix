import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-P-1aad6e.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BZzEjNbh-BVF1Oj4n.js";
import { H as HookValidationLifecycle } from "./validation-Di-_grhN-DEErUSYg.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const toggleCss = () => `@charset "UTF-8";:host{--ix-toggle--outline-color--focus:var(--si-sys-color-effects-focus);--ix-toggle-label--color--disabled:var(--si-sys-color-text-disabled);--ix-toggle--background--off:var(--si-sys-color-background-1);--ix-toggle--background--off--active:var(--si-sys-color-background-selected);--ix-toggle--background--off--disabled:rgba(0, 0, 0, 0);--ix-toggle--background--off--hover:var(--si-sys-color-background-hover);--ix-toggle--background--info--off:var(--si-sys-color-background-1);--ix-toggle--background--info--off--active:var(--si-sys-color-background-selected);--ix-toggle--background--info--off--hover:var(--si-sys-color-background-hover);--ix-toggle--background--invalid--off:var(--si-sys-color-background-1);--ix-toggle--background--invalid--off--active:var(--si-sys-color-background-selected);--ix-toggle--background--invalid--off--hover:var(--si-sys-color-background-hover);--ix-toggle--background--valid--off:var(--si-sys-color-background-1);--ix-toggle--background--valid--off--active:var(--si-sys-color-background-selected);--ix-toggle--background--valid--off--hover:var(--si-sys-color-background-hover);--ix-toggle--background--warning--off:var(--si-sys-color-background-1);--ix-toggle--background--warning--off--active:var(--si-sys-color-background-selected);--ix-toggle--background--warning--off--hover:var(--si-sys-color-background-hover);--ix-toggle--border-color--off:var(--si-sys-color-border-2);--ix-toggle--border-color--off--active:var(--si-sys-color-border-2);--ix-toggle--border-color--off--hover:var(--si-sys-color-border-2);--ix-toggle--border-color--info--off:var(--si-sys-color-background-information);--ix-toggle--border-color--info--off--active:var(--si-sys-color-background-information);--ix-toggle--border-color--info--off--hover:var(--si-sys-color-background-information);--ix-toggle--border-color--invalid--off:var(--si-sys-color-border-danger);--ix-toggle--border-color--invalid--off--active:var(--si-sys-color-border-danger);--ix-toggle--border-color--invalid--off--hover:var(--si-sys-color-border-danger);--ix-toggle--border-color--valid--off:var(--si-sys-color-border-2);--ix-toggle--border-color--valid--off--active:var(--si-sys-color-border-2);--ix-toggle--border-color--valid--off--hover:var(--si-sys-color-border-2);--ix-toggle--border-color--warning--off:var(--si-sys-color-border-warning);--ix-toggle--border-color--warning--off--active:var(--si-sys-color-border-warning);--ix-toggle--border-color--warning--off--hover:var(--si-sys-color-border-warning);--ix-toggle--background--on:var(--si-sys-color-background-accent);--ix-toggle--background--on--active:var(--si-sys-color-background-accent-active);--ix-toggle--background--on--disabled:var(--si-sys-color-text-disabled);--ix-toggle--background--on--hover:var(--si-sys-color-background-accent-hover);--ix-toggle--background--info--on:var(--si-sys-color-background-information);--ix-toggle--background--info--on--active:var(--si-sys-color-background-information-active);--ix-toggle--background--info--on--hover:var(--si-sys-color-background-information-hover);--ix-toggle--background--invalid--on:var(--si-sys-color-background-danger);--ix-toggle--background--invalid--on--active:var(--si-sys-color-background-danger-active);--ix-toggle--background--invalid--on--hover:var(--si-sys-color-background-danger-hover);--ix-toggle--background--valid--on:var(--si-sys-color-background-accent);--ix-toggle--background--valid--on--active:var(--si-sys-color-background-accent-active);--ix-toggle--background--valid--on--hover:var(--si-sys-color-background-accent-hover);--ix-toggle--background--warning--on:var(--si-sys-color-background-warning);--ix-toggle--background--warning--on--active:var(--si-sys-color-background-warning-active);--ix-toggle--background--warning--on--hover:var(--si-sys-color-background-warning-hover);--ix-toggle--border-color--on:rgba(0, 0, 0, 0);--ix-toggle--border-color--on--active:rgba(0, 0, 0, 0);--ix-toggle--border-color--on--hover:rgba(0, 0, 0, 0);--ix-toggle--border-color--info--on:rgba(0, 0, 0, 0);--ix-toggle--border-color--info--on--active:rgba(0, 0, 0, 0);--ix-toggle--border-color--info--on--hover:rgba(0, 0, 0, 0);--ix-toggle--border-color--invalid--on:rgba(0, 0, 0, 0);--ix-toggle--border-color--invalid--on--active:rgba(0, 0, 0, 0);--ix-toggle--border-color--invalid--on--hover:rgba(0, 0, 0, 0);--ix-toggle--border-color--valid--on:rgba(0, 0, 0, 0);--ix-toggle--border-color--valid--on--active:rgba(0, 0, 0, 0);--ix-toggle--border-color--valid--on--hover:rgba(0, 0, 0, 0);--ix-toggle--border-color--warning--on:var(--si-sys-color-border-warning);--ix-toggle--border-color--warning--on--active:var(--si-sys-color-border-warning);--ix-toggle--border-color--warning--on--hover:var(--si-sys-color-border-warning);--ix-toggle-thumb--background--off:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--off--active:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--off--disabled:var(--si-sys-color-text-disabled);--ix-toggle-thumb--background--off--hover:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--info--off:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--info--off--active:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--info--off--hover:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--invalid--off:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--invalid--off--active:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--invalid--off--hover:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--valid--off:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--valid--off--active:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--valid--off--hover:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--warning--off:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--warning--off--active:var(--si-sys-color-text-secondary);--ix-toggle-thumb--background--warning--off--hover:var(--si-sys-color-text-secondary);--ix-toggle-thumb--border-color--off:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--off--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--off--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--off:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--off--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--off--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--off:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--off--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--off--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--off:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--off--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--off--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--off:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--off--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--off--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--background--on:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--on--active:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--on--disabled:var(--si-sys-color-text-inverse);--ix-toggle-thumb--background--on--hover:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--info--on:var(--si-sys-color-text-on-information);--ix-toggle-thumb--background--info--on--active:var(--si-sys-color-text-on-information);--ix-toggle-thumb--background--info--on--hover:var(--si-sys-color-text-on-information);--ix-toggle-thumb--background--invalid--on:var(--si-sys-color-text-on-danger);--ix-toggle-thumb--background--invalid--on--active:var(--si-sys-color-text-on-danger);--ix-toggle-thumb--background--invalid--on--hover:var(--si-sys-color-text-on-danger);--ix-toggle-thumb--background--valid--on:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--valid--on--active:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--valid--on--hover:var(--si-sys-color-text-on-accent);--ix-toggle-thumb--background--warning--on:var(--si-sys-color-text-on-warning);--ix-toggle-thumb--background--warning--on--active:var(--si-sys-color-text-on-warning);--ix-toggle-thumb--background--warning--on--hover:var(--si-sys-color-text-on-warning);--ix-toggle-thumb--border-color--on:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--on--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--on--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--on:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--on--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--info--on--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--on:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--on--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--invalid--on--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--on:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--on--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--valid--on--hover:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--on:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--on--active:rgba(0, 0, 0, 0);--ix-toggle-thumb--border-color--warning--on--hover:rgba(0, 0, 0, 0)}:host{--ix-toggle-track--transition-duration:var(--theme-default-time);--ix-toggle-thumb--transition-duration:var(--theme-default-time);--ix-toggle--min-height:var(--si-sys-sizing-size-70);--ix-toggle--max-height:calc(100% - var(--si-sys-sizing-spacing-y-40));--ix-toggle--margin-block-start:var(--si-sys-sizing-spacing-y-20);--ix-toggle--margin-block-end:var(--si-sys-sizing-spacing-y-20);--ix-toggle-label--margin-block-start:var(--si-sys-sizing-spacing-y-20);--ix-toggle-label--margin-inline-start:var(--si-sys-sizing-spacing-x-40);--ix-toggle-label--min-height:var(--si-sys-sizing-size-60);--ix-toggle-switch--width:var(--si-sys-sizing-size-100);--ix-toggle-switch--min-width:var(--si-sys-sizing-size-100);--ix-toggle-switch--max-width:var(--si-sys-sizing-size-100);--ix-toggle-switch--height:var(--si-sys-sizing-size-70);--ix-toggle-slider--height:var(--si-sys-sizing-size-50);--ix-toggle-slider--width:var(--si-sys-sizing-size-50);--ix-toggle-slider--left:var(--si-sys-sizing-spacing-x-10);--ix-toggle-slider--transform--checked:translateX(var(--si-sys-sizing-size-70));--ix-toggle-slider--transform:translateX(var(--si-sys-sizing-spacing-x-50));--ix-toggle-slider--border-radius:var(--si-sys-sizing-border-radius-full);--ix-toggle-slider--border-width:var(--si-sys-sizing-border-width-default);--ix-toggle-switch--border-width:var(--si-sys-sizing-border-width-default);--ix-toggle--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-toggle-switch--outline-offset:calc(var(--si-sys-sizing-focus-ring-offset) / 2);--ix-toggle-switch--opacity:0.5}:host{display:inline-flex;flex-direction:row;position:relative;min-height:var(--ix-toggle--min-height);max-height:var(--ix-toggle--max-height);margin-block-start:var(--ix-toggle--margin-block-start);margin-block-end:var(--ix-toggle--margin-block-end)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .wrapper{display:flex;align-items:flex-start;width:100%;max-height:100%}:host .label{word-break:break-word;display:block;white-space:normal;overflow:hidden;margin-block-start:var(--ix-toggle-label--margin-block-start);margin-inline-start:var(--ix-toggle-label--margin-inline-start);min-height:var(--ix-toggle-label--min-height)}:host .switch{all:unset;position:relative;display:inline-block;width:var(--ix-toggle-switch--width);min-width:var(--ix-toggle-switch--min-width);max-width:var(--ix-toggle-switch--max-width);height:var(--ix-toggle-switch--height)}:host .slider{position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--ix-toggle--background--off);transition:var(--ix-toggle-track--transition-duration);border-radius:var(--ix-toggle-slider--border-radius);border:var(--ix-toggle-slider--border-width) solid transparent}:host .slider:before{position:absolute;content:"";height:var(--ix-toggle-slider--height);width:var(--ix-toggle-slider--width);left:var(--ix-toggle-slider--left);top:0;bottom:0;margin-block:auto;background-color:var(--ix-toggle-thumb--background--off);transition:var(--ix-toggle-thumb--transition-duration);border-radius:50%;border:var(--ix-toggle-slider--border-width) solid var(--ix-toggle-thumb--border-color--off)}:host .switch.checked>.slider::before{background-color:var(--ix-toggle-thumb--background--on);transform:var(--ix-toggle-slider--transform--checked)}:host .switch>.slider{border-color:var(--ix-toggle--border-color--off)}:host .switch:hover>.slider{background-color:var(--ix-toggle--background--off--hover);border-color:var(--ix-toggle--border-color--off--hover)}:host .switch:hover>.slider:before{background-color:var(--ix-toggle-thumb--background--off--hover);border:var(--ix-toggle-switch--border-width) solid var(--ix-toggle-thumb--border-color--off--hover)}:host .switch:active>.slider{background-color:var(--ix-toggle--background--off--active);border-color:var(--ix-toggle--border-color--off--active)}:host .switch:active>.slider:before{background-color:var(--ix-toggle-thumb--background--off--active);border:var(--ix-toggle-switch--border-width) solid var(--ix-toggle-thumb--border-color--off--active)}:host .switch.checked>.slider{background-color:var(--ix-toggle--background--on);border-color:var(--ix-toggle--border-color--on)}:host .switch.checked>.slider:before{border:var(--ix-toggle-switch--border-width) solid var(--ix-toggle-thumb--border-color--on)}:host .switch.checked:hover>.slider{background-color:var(--ix-toggle--background--on--hover);border-color:var(--ix-toggle--border-color--on--hover)}:host .switch.checked:hover>.slider:before{background-color:var(--ix-toggle-thumb--background--on--hover);border:var(--ix-toggle-switch--border-width) solid var(--ix-toggle-thumb--border-color--on--hover)}:host .switch.checked:active>.slider{background-color:var(--ix-toggle--background--on--active);border-color:var(--ix-toggle--border-color--on--active)}:host .switch.checked:active>.slider:before{background-color:var(--ix-toggle-thumb--background--on--active);border:var(--ix-toggle-switch--border-width) solid var(--ix-toggle-thumb--border-color--on--active)}:host .switch.indeterminate>.slider::before{transform:var(--ix-toggle-slider--transform)}:host(:not(.disabled)) .wrapper{cursor:pointer}:host(:focus),:host(:focus-visible){outline:none}:host(:not(.disabled):focus-visible) .switch>.slider{outline:var(--ix-toggle--outline-width--focus) solid var(--ix-toggle--outline-color--focus);outline-offset:var(--ix-toggle-switch--outline-offset)}:host(.disabled){pointer-events:none}:host(.disabled) .switch{opacity:var(--ix-toggle-switch--opacity)}:host(.disabled) .switch>.slider{background-color:var(--ix-toggle--background--off--disabled)}:host(.disabled) .switch>.slider:before{background-color:var(--ix-toggle-thumb--background--off--disabled)}:host(.disabled) .switch.checked>.slider{background-color:var(--ix-toggle--background--on--disabled)}:host(.disabled) .switch.checked>.slider:before{background-color:var(--ix-toggle-thumb--background--on--disabled)}:host(.disabled) .label{color:var(--ix-toggle-label--color--disabled)}:host(.ix-valid:not(.disabled)) .slider{--ix-toggle--background--off:var(--ix-toggle--background--valid--off);--ix-toggle--background--off--hover:var(--ix-toggle--background--valid--off--hover);--ix-toggle--background--off--active:var(--ix-toggle--background--valid--off--active);--ix-toggle-thumb--border-color--off:var(--ix-toggle-thumb--border-color--valid--off);--ix-toggle-thumb--border-color--off--hover:var(--ix-toggle-thumb--border-color--valid--off--hover);--ix-toggle-thumb--border-color--off--active:var(--ix-toggle-thumb--border-color--valid--off--active);--ix-toggle-thumb--background--off:var(--ix-toggle-thumb--background--valid--off);--ix-toggle-thumb--background--off--hover:var(--ix-toggle-thumb--background--valid--off--hover);--ix-toggle-thumb--background--off--active:var(--ix-toggle-thumb--background--valid--off--active);--ix-toggle--border-color--off:var(--ix-toggle--border-color--valid--off);--ix-toggle--border-color--off--hover:var(--ix-toggle--border-color--valid--off--hover);--ix-toggle--border-color--off--active:var(--ix-toggle--border-color--valid--off--active);--ix-toggle--background--on:var(--ix-toggle--background--valid--on);--ix-toggle--background--on--hover:var(--ix-toggle--background--valid--on--hover);--ix-toggle--background--on--active:var(--ix-toggle--background--valid--on--active);--ix-toggle-thumb--border-color--on:var(--ix-toggle-thumb--border-color--valid--on);--ix-toggle-thumb--border-color--on--hover:var(--ix-toggle-thumb--border-color--valid--on--hover);--ix-toggle-thumb--border-color--on--active:var(--ix-toggle-thumb--border-color--valid--on--active);--ix-toggle-thumb--background--on:var(--ix-toggle-thumb--background--valid--on);--ix-toggle-thumb--background--on--hover:var(--ix-toggle-thumb--background--valid--on--hover);--ix-toggle-thumb--background--on--active:var(--ix-toggle-thumb--background--valid--on--active);--ix-toggle--border-color--on:var(--ix-toggle--border-color--valid--on);--ix-toggle--border-color--on--hover:var(--ix-toggle--border-color--valid--on--hover);--ix-toggle--border-color--on--active:var(--ix-toggle--border-color--valid--on--active)}:host(.ix-info:not(.disabled)) .slider{--ix-toggle--background--off:var(--ix-toggle--background--info--off);--ix-toggle--background--off--hover:var(--ix-toggle--background--info--off--hover);--ix-toggle--background--off--active:var(--ix-toggle--background--info--off--active);--ix-toggle-thumb--border-color--off:var(--ix-toggle-thumb--border-color--info--off);--ix-toggle-thumb--border-color--off--hover:var(--ix-toggle-thumb--border-color--info--off--hover);--ix-toggle-thumb--border-color--off--active:var(--ix-toggle-thumb--border-color--info--off--active);--ix-toggle-thumb--background--off:var(--ix-toggle-thumb--background--info--off);--ix-toggle-thumb--background--off--hover:var(--ix-toggle-thumb--background--info--off--hover);--ix-toggle-thumb--background--off--active:var(--ix-toggle-thumb--background--info--off--active);--ix-toggle--border-color--off:var(--ix-toggle--border-color--info--off);--ix-toggle--border-color--off--hover:var(--ix-toggle--border-color--info--off--hover);--ix-toggle--border-color--off--active:var(--ix-toggle--border-color--info--off--active);--ix-toggle--background--on:var(--ix-toggle--background--info--on);--ix-toggle--background--on--hover:var(--ix-toggle--background--info--on--hover);--ix-toggle--background--on--active:var(--ix-toggle--background--info--on--active);--ix-toggle-thumb--border-color--on:var(--ix-toggle-thumb--border-color--info--on);--ix-toggle-thumb--border-color--on--hover:var(--ix-toggle-thumb--border-color--info--on--hover);--ix-toggle-thumb--border-color--on--active:var(--ix-toggle-thumb--border-color--info--on--active);--ix-toggle-thumb--background--on:var(--ix-toggle-thumb--background--info--on);--ix-toggle-thumb--background--on--hover:var(--ix-toggle-thumb--background--info--on--hover);--ix-toggle-thumb--background--on--active:var(--ix-toggle-thumb--background--info--on--active);--ix-toggle--border-color--on:var(--ix-toggle--border-color--info--on);--ix-toggle--border-color--on--hover:var(--ix-toggle--border-color--info--on--hover);--ix-toggle--border-color--on--active:var(--ix-toggle--border-color--info--on--active)}:host(.ix-warning:not(.disabled)) .slider{--ix-toggle--background--off:var(--ix-toggle--background--warning--off);--ix-toggle--background--off--hover:var(--ix-toggle--background--warning--off--hover);--ix-toggle--background--off--active:var(--ix-toggle--background--warning--off--active);--ix-toggle-thumb--border-color--off:var(--ix-toggle-thumb--border-color--warning--off);--ix-toggle-thumb--border-color--off--hover:var(--ix-toggle-thumb--border-color--warning--off--hover);--ix-toggle-thumb--border-color--off--active:var(--ix-toggle-thumb--border-color--warning--off--active);--ix-toggle-thumb--background--off:var(--ix-toggle-thumb--background--warning--off);--ix-toggle-thumb--background--off--hover:var(--ix-toggle-thumb--background--warning--off--hover);--ix-toggle-thumb--background--off--active:var(--ix-toggle-thumb--background--warning--off--active);--ix-toggle--border-color--off:var(--ix-toggle--border-color--warning--off);--ix-toggle--border-color--off--hover:var(--ix-toggle--border-color--warning--off--hover);--ix-toggle--border-color--off--active:var(--ix-toggle--border-color--warning--off--active);--ix-toggle--background--on:var(--ix-toggle--background--warning--on);--ix-toggle--background--on--hover:var(--ix-toggle--background--warning--on--hover);--ix-toggle--background--on--active:var(--ix-toggle--background--warning--on--active);--ix-toggle-thumb--border-color--on:var(--ix-toggle-thumb--border-color--warning--on);--ix-toggle-thumb--border-color--on--hover:var(--ix-toggle-thumb--border-color--warning--on--hover);--ix-toggle-thumb--border-color--on--active:var(--ix-toggle-thumb--border-color--warning--on--active);--ix-toggle-thumb--background--on:var(--ix-toggle-thumb--background--warning--on);--ix-toggle-thumb--background--on--hover:var(--ix-toggle-thumb--background--warning--on--hover);--ix-toggle-thumb--background--on--active:var(--ix-toggle-thumb--background--warning--on--active);--ix-toggle--border-color--on:var(--ix-toggle--border-color--warning--on);--ix-toggle--border-color--on--hover:var(--ix-toggle--border-color--warning--on--hover);--ix-toggle--border-color--on--active:var(--ix-toggle--border-color--warning--on--active)}:host(.ix-invalid--required:not(.disabled)) .slider{--ix-toggle--background--off:var(--ix-toggle--background--invalid--off);--ix-toggle--background--off--hover:var(--ix-toggle--background--invalid--off--hover);--ix-toggle--background--off--active:var(--ix-toggle--background--invalid--off--active);--ix-toggle-thumb--border-color--off:var(--ix-toggle-thumb--border-color--invalid--off);--ix-toggle-thumb--border-color--off--hover:var(--ix-toggle-thumb--border-color--invalid--off--hover);--ix-toggle-thumb--border-color--off--active:var(--ix-toggle-thumb--border-color--invalid--off--active);--ix-toggle-thumb--background--off:var(--ix-toggle-thumb--background--invalid--off);--ix-toggle-thumb--background--off--hover:var(--ix-toggle-thumb--background--invalid--off--hover);--ix-toggle-thumb--background--off--active:var(--ix-toggle-thumb--background--invalid--off--active);--ix-toggle--border-color--off:var(--ix-toggle--border-color--invalid--off);--ix-toggle--border-color--off--hover:var(--ix-toggle--border-color--invalid--off--hover);--ix-toggle--border-color--off--active:var(--ix-toggle--border-color--invalid--off--active);--ix-toggle--background--on:var(--ix-toggle--background--invalid--on);--ix-toggle--background--on--hover:var(--ix-toggle--background--invalid--on--hover);--ix-toggle--background--on--active:var(--ix-toggle--background--invalid--on--active);--ix-toggle-thumb--border-color--on:var(--ix-toggle-thumb--border-color--invalid--on);--ix-toggle-thumb--border-color--on--hover:var(--ix-toggle-thumb--border-color--invalid--on--hover);--ix-toggle-thumb--border-color--on--active:var(--ix-toggle-thumb--border-color--invalid--on--active);--ix-toggle-thumb--background--on:var(--ix-toggle-thumb--background--invalid--on);--ix-toggle-thumb--background--on--hover:var(--ix-toggle-thumb--background--invalid--on--hover);--ix-toggle-thumb--background--on--active:var(--ix-toggle-thumb--background--invalid--on--active);--ix-toggle--border-color--on:var(--ix-toggle--border-color--invalid--on);--ix-toggle--border-color--on--hover:var(--ix-toggle--border-color--invalid--on--hover);--ix-toggle--border-color--on--active:var(--ix-toggle--border-color--invalid--on--active)}:host(.ix-invalid:not(.disabled)) .slider{--ix-toggle--background--off:var(--ix-toggle--background--invalid--off);--ix-toggle--background--off--hover:var(--ix-toggle--background--invalid--off--hover);--ix-toggle--background--off--active:var(--ix-toggle--background--invalid--off--active);--ix-toggle-thumb--border-color--off:var(--ix-toggle-thumb--border-color--invalid--off);--ix-toggle-thumb--border-color--off--hover:var(--ix-toggle-thumb--border-color--invalid--off--hover);--ix-toggle-thumb--border-color--off--active:var(--ix-toggle-thumb--border-color--invalid--off--active);--ix-toggle-thumb--background--off:var(--ix-toggle-thumb--background--invalid--off);--ix-toggle-thumb--background--off--hover:var(--ix-toggle-thumb--background--invalid--off--hover);--ix-toggle-thumb--background--off--active:var(--ix-toggle-thumb--background--invalid--off--active);--ix-toggle--border-color--off:var(--ix-toggle--border-color--invalid--off);--ix-toggle--border-color--off--hover:var(--ix-toggle--border-color--invalid--off--hover);--ix-toggle--border-color--off--active:var(--ix-toggle--border-color--invalid--off--active);--ix-toggle--background--on:var(--ix-toggle--background--invalid--on);--ix-toggle--background--on--hover:var(--ix-toggle--background--invalid--on--hover);--ix-toggle--background--on--active:var(--ix-toggle--background--invalid--on--active);--ix-toggle-thumb--border-color--on:var(--ix-toggle-thumb--border-color--invalid--on);--ix-toggle-thumb--border-color--on--hover:var(--ix-toggle-thumb--border-color--invalid--on--hover);--ix-toggle-thumb--border-color--on--active:var(--ix-toggle-thumb--border-color--invalid--on--active);--ix-toggle-thumb--background--on:var(--ix-toggle-thumb--background--invalid--on);--ix-toggle-thumb--background--on--hover:var(--ix-toggle-thumb--background--invalid--on--hover);--ix-toggle-thumb--background--on--active:var(--ix-toggle-thumb--background--invalid--on--active);--ix-toggle--border-color--on:var(--ix-toggle--border-color--invalid--on);--ix-toggle--border-color--on--hover:var(--ix-toggle--border-color--invalid--on--hover);--ix-toggle--border-color--on--active:var(--ix-toggle--border-color--invalid--on--active)}`;
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
const Toggle = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
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
  formInternals;
  get hostElement() {
    return getElement(this);
  }
  /**
   * Name of the checkbox component
   */
  name;
  /**
   * Value of the checkbox component
   */
  value = "on";
  /**
   * Whether the slide-toggle element is checked or not.
   */
  checked = false;
  /**
   * Whether the slide-toggle element is disabled or not.
   */
  disabled = false;
  /**
   * If true the control is in indeterminate state
   */
  indeterminate = false;
  /**
   * Text for on state
   */
  textOn = "On";
  /**
   * Text for off state
   */
  textOff = "Off";
  /**
   * Text for indeterminate state
   */
  textIndeterminate = "Mixed";
  /**
   * Hide `on` and `off` text
   */
  hideText = false;
  /**
   * Required state of the checkbox component.
   *
   * If true, checkbox needs to be checked to be valid
   */
  required = false;
  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  checkedChange;
  /** @internal */
  valueChange;
  /**
   * An event will be dispatched each time the toggle is blurred.
   */
  ixBlur;
  touched = false;
  onCheckedChange(newChecked) {
    if (this.disabled) {
      return;
    }
    const wasIndeterminate = this.indeterminate;
    const oldChecked = this.checked;
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = newChecked;
    const { defaultPrevented } = this.checkedChange.emit(this.checked);
    if (defaultPrevented) {
      this.indeterminate = wasIndeterminate;
      this.checked = oldChecked;
    }
  }
  componentWillLoad() {
    super.componentWillLoad();
    this.updateFormInternalValue();
  }
  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(null);
    }
  }
  watchCheckedChange() {
    this.touched = true;
    this.updateFormInternalValue();
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
  resolveAriaLabel() {
    if (this.inheritAriaAttributes["aria-labelledby"]) {
      return void 0;
    }
    return this.inheritAriaAttributes["aria-label"];
  }
  render() {
    let toggleText = this.textOff;
    if (this.checked) {
      toggleText = this.textOn;
    }
    if (this.indeterminate) {
      toggleText = this.textIndeterminate;
    }
    const ariaLabel = this.resolveAriaLabel();
    const ariaChecked = this.indeterminate ? "mixed" : a11yBoolean(this.checked);
    return h(Host, { key: "9012d0de83278699da8945938503be1e596490b4", ...this.inheritAriaAttributes, role: "switch", tabindex: this.disabled ? -1 : 0, "aria-label": ariaLabel, "aria-checked": ariaChecked, "aria-disabled": a11yBoolean(this.disabled), "aria-required": a11yBoolean(this.required), class: {
      disabled: this.disabled
    }, onBlur: () => this.ixBlur.emit(), onFocus: () => this.touched = true, onKeyDown: (e) => {
      if (this.disabled)
        return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        this.onCheckedChange(!this.checked);
      }
    }, onClick: () => {
      if (!this.disabled) {
        this.onCheckedChange(!this.checked);
      }
    } }, h("div", { key: "c6948622b766cb204abdc4f3b14d2910d2c83179", class: "wrapper" }, h("div", { key: "119fa969778342210f34bcaacd3bd64c7630e420", class: {
      switch: true,
      checked: this.checked,
      indeterminate: this.indeterminate
    }, "aria-hidden": "true" }, h("div", { key: "eec5b49b682470dac7db75ca343f7ddcad4a563b", class: "slider" })), !this.hideText && h("ix-typography", { key: "e0b1a98e543ac3bd07157ddfc42858da96d18583", class: "label", "aria-hidden": "true" }, toggleText)));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "checked": [{
        "watchCheckedChange": 0
      }]
    };
  }
};
__decorate([
  HookValidationLifecycle()
], Toggle.prototype, "updateClassMappings", null);
Toggle.style = toggleCss();
export {
  Toggle as ix_toggle
};
