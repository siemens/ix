import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { $ as iconCloseSmall } from "./index-BeX6RWvV-CXzUIwMU.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-D76QMfpO-DgBj8N2Y.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { C as CHIP_VARIANTS } from "./chip.types-4ZsT_zIm-Dsc4eXJe.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
import "./shadow-dom-C7UpA3Tm-CtINZypD.js";
const chipCss = () => `@charset "UTF-8";:host{--ix-chip--outline-color--focus:var(--si-sys-color-effects-focus);--ix-chip-close--color:var(--si-sys-color-text-primary);--ix-chip-warning-icon--color:var(--si-sys-color-text-warning);--ix-chip-primary-icon--color:var(--si-sys-color-text-accent);--ix-chip-alarm--background:var(--si-sys-color-background-danger);--ix-chip-alarm--background--hover:var(--si-sys-color-background-danger-hover);--ix-chip-alarm--background--active:var(--si-sys-color-background-danger-active);--ix-chip-alarm--border-color:var(--si-sys-color-background-danger);--ix-chip-alarm--color:var(--si-sys-color-background-danger);--ix-chip-alarm--color--contrast:var(--si-sys-color-text-on-danger);--ix-chip-critical--background:var(--si-sys-color-background-critical);--ix-chip-critical--background--hover:var(--si-sys-color-background-critical-hover);--ix-chip-critical--background--active:var(--si-sys-color-background-critical-active);--ix-chip-critical--border-color:var(--si-sys-color-background-critical);--ix-chip-critical--color:var(--si-sys-color-background-critical);--ix-chip-critical--color--contrast:var(--si-sys-color-text-on-critical);--ix-chip-warning--background:var(--si-sys-color-background-warning);--ix-chip-warning--background--hover:var(--si-sys-color-background-warning-hover);--ix-chip-warning--background--active:var(--si-sys-color-background-warning-active);--ix-chip-warning--border-color:var(--si-sys-color-background-warning);--ix-chip-warning--color:var(--si-sys-color-background-warning);--ix-chip-warning--color--contrast:var(--si-sys-color-text-on-warning);--ix-chip-info--background:var(--si-sys-color-background-information);--ix-chip-info--background--hover:var(--si-sys-color-background-information-hover);--ix-chip-info--background--active:var(--si-sys-color-background-information-active);--ix-chip-info--border-color:var(--si-sys-color-background-information);--ix-chip-info--color:var(--si-sys-color-background-information);--ix-chip-info--color--contrast:var(--si-sys-color-text-on-information);--ix-chip-neutral--background:var(--si-sys-color-background-neutral);--ix-chip-neutral--background--hover:var(--si-sys-color-background-neutral-hover);--ix-chip-neutral--background--active:var(--si-sys-color-background-neutral-active);--ix-chip-neutral--border-color:var(--si-sys-color-background-neutral);--ix-chip-neutral--color:var(--si-sys-color-background-neutral);--ix-chip-neutral--color--contrast:var(--si-sys-color-text-on-neutral);--ix-chip-success--background:var(--si-sys-color-background-success);--ix-chip-success--background--hover:var(--si-sys-color-background-success-hover);--ix-chip-success--background--active:var(--si-sys-color-background-success-active);--ix-chip-success--border-color:var(--si-sys-color-background-success);--ix-chip-success--color:var(--si-sys-color-background-success);--ix-chip-success--color--contrast:var(--si-sys-color-text-on-success);--ix-chip--background:var(--si-sys-color-background-1);--ix-chip--background--active:var(--si-sys-color-background-selected);--ix-chip--background--hover:var(--si-sys-color-background-hover);--ix-chip--color:var(--si-sys-color-text-primary);--ix-chip-close-button--background:rgba(0, 0, 0, 0);--ix-chip-close-button--background--active:var(--si-sys-color-background-selected);--ix-chip-close-button--background--hover:var(--si-sys-color-background-hover);--ix-chip-close-button--color:var(--si-sys-color-text-secondary);--ix-chip-outline--background:var(--si-sys-color-background-accent-secondary);--ix-chip-outline--background--active:var(--si-sys-color-background-selected);--ix-chip-outline--background--hover:var(--si-sys-color-background-hover);--ix-chip-outline--color:var(--si-sys-color-text-primary);--ix-chip-primary--background:var(--si-sys-color-background-accent);--ix-chip-primary--background--active:var(--si-sys-color-background-accent-active);--ix-chip-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-chip-primary--color:var(--si-sys-color-text-on-accent);--ix-chip-primary--color--active:var(--si-sys-color-text-on-accent);--ix-chip-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-chip-primary-outline--background:var(--si-sys-color-background-accent-secondary);--ix-chip-primary-outline--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-chip-primary-outline--background--display:var(--si-sys-color-background-accent-secondary);--ix-chip-primary-outline--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-chip-primary-outline--border-color:var(--si-sys-color-border-accent);--ix-chip-primary-outline--border-color--active:var(--si-sys-color-border-accent-active);--ix-chip-primary-outline--border-color--display:var(--si-sys-color-border-accent);--ix-chip-primary-outline--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-chip-primary-outline--color:var(--si-sys-color-border-accent);--ix-chip-primary-outline--color--active:var(--si-sys-color-border-accent-active);--ix-chip-primary-outline--color--display:var(--si-sys-color-text-primary);--ix-chip-primary-outline--color--hover:var(--si-sys-color-border-accent-hover);--ix-chip-container--outline-color--focus:#199fff;--ix-chip-container--background-color--hover:rgba(0, 0, 0, 0.1);--ix-chip-container--background-color--active:rgba(0, 0, 0, 0.2)}:host{--ix-chip-attachment--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-chip--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-chip--padding-inline:var(--si-sys-sizing-spacing-x-50);--ix-chip-container--padding:var(--si-sys-sizing-spacing-y-40);--ix-chip-container--height:var(--si-sys-sizing-size-80);--ix-chip-container--max-height:var(--si-sys-sizing-size-80);--ix-chip-with-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-chip-close-button-container--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-chip-inactive-outline--padding-right:var(--si-sys-sizing-spacing-x-20);--ix-chip--close-size:var(--si-sys-sizing-size-70);--ix-chip--close-inset:var(--si-sys-sizing-spacing-x-20);--ix-chip--height:var(--si-sys-sizing-size-80);--ix-chip--max-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--min-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--max-height:var(--si-sys-sizing-size-80);--ix-chip-main--padding-block:var(--si-sys-sizing-spacing-y-40);--ix-chip-main-outline--padding-right:var(--si-sys-sizing-spacing-x-30);--ix-chip--border-radius:var(--si-sys-sizing-border-radius-full);--ix-chip--border-width--focus:var(--si-sys-sizing-border-width-default);--ix-chip--outline-width--focus:var(--si-sys-sizing-border-width-default)}:host{display:inline-block;position:relative;height:var(--ix-chip--height);max-height:var(--ix-chip--max-height)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}.chip-wrap{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:stretch;border-radius:var(--ix-chip--border-radius);vertical-align:top;min-height:var(--ix-chip-wrap--min-height);max-height:var(--ix-chip-wrap--max-height)}.chip-wrap .chip-main{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;margin:0;box-sizing:border-box;display:inline-flex;align-items:center;flex:1 1 auto;min-width:0;width:100%;border-radius:inherit;padding-block:var(--ix-chip-main--padding-block);padding-inline:var(--ix-chip--padding-inline);font:inherit;text-align:inherit;color:inherit;cursor:pointer;background:transparent}.chip-wrap .chip-main:disabled{cursor:default}.chip-wrap .chip-main:focus-visible{outline:var(--ix-chip--outline-width--focus) solid var(--ix-chip--outline-color--focus);outline-offset:var(--ix-chip--focus--outline-offset)}.chip-wrap .chip-main .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.chip-wrap .chip-main .with-icon{margin-right:var(--ix-chip-with-icon--margin-right)}.chip-wrap .chip-main .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 1 auto;min-width:0}.chip-wrap .chip-main .slot-container slot::slotted(*){max-width:100%;min-width:0}.chip-wrap.centerContent .chip-main .content-wrapper{justify-content:center;text-align:center}.chip-wrap.inactive .chip-main{pointer-events:none}.chip-wrap.outline .chip-main{padding-left:calc(var(--ix-chip--padding-inline) - var(--ix-chip--border-width--focus))}.chip-wrap.outline:not(.closable) .chip-main{padding-right:calc(var(--ix-chip--padding-inline) - var(--ix-chip--border-width--focus))}.chip-wrap.outline.closable .chip-main{padding-right:calc(var(--ix-chip--close-inset) + var(--ix-chip--close-size) + var(--ix-chip-main-outline--padding-right) - var(--ix-chip--border-width--focus))}.chip-wrap:not(.outline) .chip-main{padding-left:var(--ix-chip--padding-inline)}.chip-wrap:not(.outline):not(.closable) .chip-main{padding-right:var(--ix-chip--padding-inline)}.chip-wrap:not(.outline).closable .chip-main{padding-right:calc(var(--ix-chip--close-inset) + var(--ix-chip--close-size) + var(--ix-chip-main-outline--padding-right))}.chip-wrap .chip-close{position:absolute;right:var(--ix-chip--close-inset);top:50%;transform:translateY(-50%);width:var(--ix-chip--close-size);height:var(--ix-chip--close-size);box-sizing:border-box;border:0;margin:0;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;color:var(--ix-chip-close--color);border-radius:50%;flex-shrink:0;z-index:1}.chip-wrap .chip-close:focus-visible{outline:var(--ix-chip--outline-width--focus) solid var(--ix-chip--outline-color--focus);outline-offset:var(--ix-chip--focus--outline-offset)}.chip-wrap .chip-close__icon{display:block;pointer-events:none}.chip-wrap.outline{border-width:var(--ix-chip--border-width--focus);border-style:solid}.chip-wrap.primary:not(.outline){color:var(--ix-chip-primary--color)}.chip-wrap.primary:not(.outline) .chip-main{background-color:var(--ix-chip-primary--background);color:var(--ix-chip-primary--color)}.chip-wrap.primary:not(.outline) .chip-main:hover{background-color:var(--ix-chip-primary--background--hover)}.chip-wrap.primary:not(.outline) .chip-main:active{background-color:var(--ix-chip-primary--background--active)}.chip-wrap.primary:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.primary:not(.outline) .chip-close:hover{background-color:var(--ix-chip-primary--background--hover)}.chip-wrap.primary:not(.outline) .chip-close:active{background-color:var(--ix-chip-primary--background--active)}.chip-wrap.primary.outline{color:var(--ix-chip-primary-outline--color--display);background-color:var(--ix-chip-primary-outline--background);border:solid var(--ix-chip--border-width--focus) var(--ix-chip-primary-outline--border-color)}.chip-wrap.primary.outline:hover:not(.inactive){border-color:var(--ix-chip-primary-outline--border-color--hover)}.chip-wrap.primary.outline:active:not(.inactive){border-color:var(--ix-chip-primary-outline--border-color--active)}.chip-wrap.primary.outline .chip-main{background-color:transparent;color:var(--ix-chip-primary-outline--color--display)}.chip-wrap.primary.outline .chip-main:hover{background-color:var(--ix-chip-primary-outline--background--hover)}.chip-wrap.primary.outline .chip-main:active{background-color:var(--ix-chip-primary-outline--background--active)}.chip-wrap.primary.outline.icon .with-icon{color:var(--ix-chip-primary-icon--color)}.chip-wrap.primary.outline:hover:not(.inactive).icon .with-icon{color:var(--ix-chip-primary-outline--color--hover)}.chip-wrap.primary.outline:active:not(.inactive).icon .with-icon{color:var(--ix-chip-primary-outline--color--active)}.chip-wrap.primary.outline .chip-close{color:inherit}.chip-wrap.primary.outline .chip-close:hover{background-color:var(--ix-chip-primary-outline--background--hover)}.chip-wrap.primary.outline .chip-close:active{background-color:var(--ix-chip-primary-outline--background--active)}.chip-wrap.alarm:not(.outline){color:var(--ix-chip-alarm--color--contrast)}.chip-wrap.alarm:not(.outline) .chip-main{background-color:var(--ix-chip-alarm--background);color:var(--ix-chip-alarm--color--contrast)}.chip-wrap.alarm:not(.outline) .chip-main:hover{background-color:var(--ix-chip-alarm--background--hover)}.chip-wrap.alarm:not(.outline) .chip-main:active{background-color:var(--ix-chip-alarm--background--active)}.chip-wrap.alarm:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.alarm:not(.outline) .chip-close:hover{background-color:var(--ix-chip-alarm--background--hover)}.chip-wrap.alarm:not(.outline) .chip-close:active{background-color:var(--ix-chip-alarm--background--active)}.chip-wrap.alarm.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-alarm--border-color)}.chip-wrap.alarm.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.alarm.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.alarm.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.alarm.outline.icon .with-icon{color:var(--ix-chip-alarm--color)}.chip-wrap.alarm.outline .chip-close{color:inherit}.chip-wrap.alarm.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.alarm.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.critical:not(.outline){color:var(--ix-chip-critical--color--contrast)}.chip-wrap.critical:not(.outline) .chip-main{background-color:var(--ix-chip-critical--background);color:var(--ix-chip-critical--color--contrast)}.chip-wrap.critical:not(.outline) .chip-main:hover{background-color:var(--ix-chip-critical--background--hover)}.chip-wrap.critical:not(.outline) .chip-main:active{background-color:var(--ix-chip-critical--background--active)}.chip-wrap.critical:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.critical:not(.outline) .chip-close:hover{background-color:var(--ix-chip-critical--background--hover)}.chip-wrap.critical:not(.outline) .chip-close:active{background-color:var(--ix-chip-critical--background--active)}.chip-wrap.critical.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-critical--border-color)}.chip-wrap.critical.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.critical.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.critical.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.critical.outline.icon .with-icon{color:var(--ix-chip-critical--color)}.chip-wrap.critical.outline .chip-close{color:inherit}.chip-wrap.critical.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.critical.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.warning:not(.outline){color:var(--ix-chip-warning--color--contrast)}.chip-wrap.warning:not(.outline) .chip-main{background-color:var(--ix-chip-warning--background);color:var(--ix-chip-warning--color--contrast)}.chip-wrap.warning:not(.outline) .chip-main:hover{background-color:var(--ix-chip-warning--background--hover)}.chip-wrap.warning:not(.outline) .chip-main:active{background-color:var(--ix-chip-warning--background--active)}.chip-wrap.warning:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.warning:not(.outline) .chip-close:hover{background-color:var(--ix-chip-warning--background--hover)}.chip-wrap.warning:not(.outline) .chip-close:active{background-color:var(--ix-chip-warning--background--active)}.chip-wrap.warning.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-warning--border-color)}.chip-wrap.warning.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.warning.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.warning.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.warning.outline.icon .with-icon{color:var(--ix-chip-warning-icon--color)}.chip-wrap.warning.outline .chip-close{color:inherit}.chip-wrap.warning.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.warning.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.info:not(.outline){color:var(--ix-chip-info--color--contrast)}.chip-wrap.info:not(.outline) .chip-main{background-color:var(--ix-chip-info--background);color:var(--ix-chip-info--color--contrast)}.chip-wrap.info:not(.outline) .chip-main:hover{background-color:var(--ix-chip-info--background--hover)}.chip-wrap.info:not(.outline) .chip-main:active{background-color:var(--ix-chip-info--background--active)}.chip-wrap.info:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.info:not(.outline) .chip-close:hover{background-color:var(--ix-chip-info--background--hover)}.chip-wrap.info:not(.outline) .chip-close:active{background-color:var(--ix-chip-info--background--active)}.chip-wrap.info.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-info--border-color)}.chip-wrap.info.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.info.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.info.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.info.outline.icon .with-icon{color:var(--ix-chip-info--color)}.chip-wrap.info.outline .chip-close{color:inherit}.chip-wrap.info.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.info.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.neutral:not(.outline){color:var(--ix-chip-neutral--color--contrast)}.chip-wrap.neutral:not(.outline) .chip-main{background-color:var(--ix-chip-neutral--background);color:var(--ix-chip-neutral--color--contrast)}.chip-wrap.neutral:not(.outline) .chip-main:hover{background-color:var(--ix-chip-neutral--background--hover)}.chip-wrap.neutral:not(.outline) .chip-main:active{background-color:var(--ix-chip-neutral--background--active)}.chip-wrap.neutral:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.neutral:not(.outline) .chip-close:hover{background-color:var(--ix-chip-neutral--background--hover)}.chip-wrap.neutral:not(.outline) .chip-close:active{background-color:var(--ix-chip-neutral--background--active)}.chip-wrap.neutral.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-neutral--border-color)}.chip-wrap.neutral.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.neutral.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.neutral.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.neutral.outline.icon .with-icon{color:var(--ix-chip-neutral--color)}.chip-wrap.neutral.outline .chip-close{color:inherit}.chip-wrap.neutral.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.neutral.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.success:not(.outline){color:var(--ix-chip-success--color--contrast)}.chip-wrap.success:not(.outline) .chip-main{background-color:var(--ix-chip-success--background);color:var(--ix-chip-success--color--contrast)}.chip-wrap.success:not(.outline) .chip-main:hover{background-color:var(--ix-chip-success--background--hover)}.chip-wrap.success:not(.outline) .chip-main:active{background-color:var(--ix-chip-success--background--active)}.chip-wrap.success:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.success:not(.outline) .chip-close:hover{background-color:var(--ix-chip-success--background--hover)}.chip-wrap.success:not(.outline) .chip-close:active{background-color:var(--ix-chip-success--background--active)}.chip-wrap.success.outline{color:var(--ix-chip-outline--color);background-color:var(--ix-chip-outline--background);border-color:var(--ix-chip-success--border-color)}.chip-wrap.success.outline .chip-main{background-color:transparent;color:var(--ix-chip-outline--color)}.chip-wrap.success.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.success.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.success.outline.icon .with-icon{color:var(--ix-chip-success--color)}.chip-wrap.success.outline .chip-close{color:inherit}.chip-wrap.success.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.success.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.outline .chip-close{background-color:var(--ix-chip-close-button--background)}.chip-wrap.outline .chip-close:hover{background-color:var(--ix-chip-close-button--background--hover)}.chip-wrap.outline .chip-close:active{background-color:var(--ix-chip-close-button--background--active)}.chip-wrap.custom.outline{background-color:var(--ix-chip-outline--background)}.chip-wrap.custom.outline .chip-main{background-color:transparent}.chip-wrap.custom.outline .chip-main:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.custom.outline .chip-main:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.custom.outline .chip-close{color:inherit}.chip-wrap.custom.outline .chip-close:hover{background-color:var(--ix-chip-outline--background--hover)}.chip-wrap.custom.outline .chip-close:active{background-color:var(--ix-chip-outline--background--active)}.chip-wrap.custom:not(.outline) .chip-main{position:relative}.chip-wrap.custom:not(.outline) .chip-main:hover::after,.chip-wrap.custom:not(.outline) .chip-main:active::after{content:"";display:block;position:absolute;inset:0;border-radius:var(--ix-chip--border-radius);pointer-events:none}.chip-wrap.custom:not(.outline) .chip-main:hover::after{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-main:active::after{background-color:color-mix(in srgb, currentColor 20%, transparent)}.chip-wrap.custom:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.custom:not(.outline) .chip-close:hover{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-close:active{background-color:color-mix(in srgb, currentColor 20%, transparent)}:host(.attachment-chip) .chip-wrap{border-radius:var(--ix-chip-attachment--border-radius)}`;
const Chip = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
    this.closeChip = createEvent(this, "closeChip", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Chip variant.
   * Defaults to `primary`. When unset or set to an unknown value the chip falls back to `primary` styling.
   */
  variant = "primary";
  /**
   * Determines if the chip is interactive. If true no user input (e.g. mouse states, keyboard navigation)
   * will be possible on the main chip content.
   */
  inactive = false;
  /**
   * Show close icon
   */
  closable = false;
  /**
   * Show icon
   */
  icon;
  /**
   * Accessible name for the leading icon.
   * When unset, the icon is treated as decorative (hidden from assistive tech) when the default slot supplies a visible label.
   *
   * @since 5.0.0
   */
  ariaLabelIcon;
  /**
   * Custom background color.
   * Only has an effect on chips with `variant='custom'`
   */
  background;
  /**
   * Custom font and icon color.
   * Only has an effect on chips with `variant='custom'`
   */
  chipColor;
  /**
   * Show chip with outline style
   */
  outline = false;
  /**
   * Display a tooltip. By default, no tooltip will be displayed.
   * Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
   *
   * @since 3.0.0
   */
  tooltipText = false;
  /**
   * Center the content of the chip.
   * Set to false to disable centering.
   * @since 3.2.0
   */
  centerContent = false;
  /**
   * ARIA label for the close button
   * Will be set as aria-label on the nested HTML button element
   */
  ariaLabelCloseButton = "Close chip";
  /**
   * Fire event if close button is clicked
   */
  closeChip;
  containerElementRef = makeRef();
  getIgnoredAriaAttributes() {
    return ["role"];
  }
  componentWillLoad() {
    super.componentWillLoad();
  }
  getTooltip() {
    if (!this.tooltipText && !this.hostElement.hasAttribute("tooltip-text")) {
      return null;
    }
    const text = typeof this.tooltipText === "string" && this.tooltipText.trim() ? this.tooltipText : this.hostElement.textContent?.trim();
    return h("ix-tooltip", { for: this.containerElementRef.waitForCurrent(), "aria-label": text || void 0 }, text);
  }
  getCustomStyles(variant) {
    const wrap = {};
    const main = {};
    if (variant !== "custom") {
      return { wrap, main };
    }
    main.color = this.chipColor;
    if (this.chipColor) {
      wrap.color = this.chipColor;
    }
    if (this.outline && this.background) {
      wrap.borderColor = this.background;
    } else if (!this.outline && this.background) {
      main.backgroundColor = this.background;
    }
    return { wrap, main };
  }
  getIconStyle(variant) {
    if (variant !== "custom") {
      return void 0;
    }
    return { color: this.outline ? this.background : this.chipColor };
  }
  getHostRole(needsGroupRole) {
    if (this.hostElement.hasAttribute("role")) {
      return this.hostElement.getAttribute("role") ?? void 0;
    }
    return needsGroupRole ? "group" : void 0;
  }
  render() {
    const variant = CHIP_VARIANTS.includes(this.variant) ? this.variant : "primary";
    const { wrap: customWrapStyle, main: customMainStyle } = this.getCustomStyles(variant);
    const wrapClasses = {
      "chip-wrap": true,
      outline: this.outline,
      inactive: this.inactive,
      alarm: variant === "alarm",
      critical: variant === "critical",
      info: variant === "info",
      neutral: variant === "neutral",
      primary: variant === "primary",
      success: variant === "success",
      warning: variant === "warning",
      custom: variant === "custom",
      closable: this.closable,
      icon: !!this.icon,
      centerContent: this.centerContent
    };
    const iconIsDecorative = !this.ariaLabelIcon?.trim();
    const hasAccessibleName = !!this.inheritAriaAttributes["aria-label"]?.trim() || !!this.inheritAriaAttributes["aria-labelledby"]?.trim();
    const hasTooltip = !!this.tooltipText || this.hostElement.hasAttribute("tooltip-text");
    const needsGroupRole = hasAccessibleName && (this.closable || hasTooltip);
    return h(Host, { key: "26ae5243071357a3397f2ca308c00fc13277c952", role: this.getHostRole(needsGroupRole), class: {
      inactive: this.inactive
    } }, h("div", { key: "93666321ddcc20f183d917eb2f5b2869b36513c0", ref: this.containerElementRef, class: wrapClasses, style: customWrapStyle }, h("button", { key: "447747e344a8003030edd96cdaf0b42b2efe4376", type: "button", class: "chip-main", ...this.inheritAriaAttributes, disabled: this.inactive, style: customMainStyle }, h("div", { key: "474361de99e874d091c9b685a2c0711ad8e09c54", class: "content-wrapper" }, this.icon && h("ix-icon", { key: "5714baabb4689488ce4616610a1eb13460b132c2", class: {
      "with-icon": true
    }, name: this.icon, "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative), style: this.getIconStyle(variant) }), h("span", { key: "a66bb08c774c5a227c86813a7980ce3a15687367", class: "slot-container" }, h("slot", { key: "5a4a68ef488c1393b632ed5a52486febb7943fd8" })))), this.closable && h("button", { key: "651fbebe035d402e270a829e5c8a50306a0e2267", type: "button", class: "chip-close", "aria-label": this.ariaLabelCloseButton, onClick: (event) => {
      this.closeChip.emit(event);
      event.stopPropagation();
    } }, h("ix-icon", { key: "2c2ef8fe06bf2a1b3dd0346e55185b5feeaf2b8f", class: "chip-close__icon", name: iconCloseSmall, size: "16", "aria-hidden": "true" }))), this.getTooltip());
  }
};
Chip.style = chipCss();
export {
  Chip as ix_chip
};
