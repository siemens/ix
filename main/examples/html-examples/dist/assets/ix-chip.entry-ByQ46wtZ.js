import { M as Mixin, r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-C-hoZ9qs.js";
import { Y as iconCloseSmall } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BZzEjNbh-DJA2LS6E.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { h as hasSlottedContent } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { C as CHIP_VARIANTS } from "./chip.types-BdWkqvxV-CEnOtxPr.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const chipCss = () => `@charset "UTF-8";:host{--ix-chip--outline-color--focus:var(--si-sys-color-effects-focus);--ix-chip-close--color:var(--si-sys-color-text-primary);--ix-chip-icon--color--warning:var(--si-sys-color-text-warning);--ix-chip-icon--color--caution:var(--si-sys-color-text-caution);--ix-chip-icon--color--accent:var(--si-sys-color-text-accent);--ix-chip--background--danger:var(--si-sys-color-background-danger);--ix-chip--background--danger--hover:var(--si-sys-color-background-danger-hover);--ix-chip--background--danger--active:var(--si-sys-color-background-danger-active);--ix-chip--border-color--danger:var(--si-sys-color-background-danger);--ix-chip--color--danger:var(--si-sys-color-background-danger);--ix-chip--color--danger--contrast:var(--si-sys-color-text-on-danger);--ix-chip--background--critical:var(--si-sys-color-background-critical);--ix-chip--background--critical--hover:var(--si-sys-color-background-critical-hover);--ix-chip--background--critical--active:var(--si-sys-color-background-critical-active);--ix-chip--border-color--critical:var(--si-sys-color-background-critical);--ix-chip--color--critical:var(--si-sys-color-background-critical);--ix-chip--color--critical--contrast:var(--si-sys-color-text-on-critical);--ix-chip--background--caution:var(--si-sys-color-background-caution);--ix-chip--background--caution--hover:var(--si-sys-color-background-caution-hover);--ix-chip--background--caution--active:var(--si-sys-color-background-caution-active);--ix-chip--border-color--caution:var(--si-sys-color-background-caution);--ix-chip--color--caution--contrast:var(--si-sys-color-text-on-caution);--ix-chip--background--warning:var(--si-sys-color-background-warning);--ix-chip--background--warning--hover:var(--si-sys-color-background-warning-hover);--ix-chip--background--warning--active:var(--si-sys-color-background-warning-active);--ix-chip--border-color--warning:var(--si-sys-color-background-warning);--ix-chip--color--warning--contrast:var(--si-sys-color-text-on-warning);--ix-chip--background--information:var(--si-sys-color-background-information);--ix-chip--background--information--hover:var(--si-sys-color-background-information-hover);--ix-chip--background--information--active:var(--si-sys-color-background-information-active);--ix-chip--border-color--information:var(--si-sys-color-background-information);--ix-chip--color--information:var(--si-sys-color-background-information);--ix-chip--color--information--contrast:var(--si-sys-color-text-on-information);--ix-chip--background--neutral:var(--si-sys-color-background-neutral);--ix-chip--background--neutral--hover:var(--si-sys-color-background-neutral-hover);--ix-chip--background--neutral--active:var(--si-sys-color-background-neutral-active);--ix-chip--border-color--neutral:var(--si-sys-color-background-neutral);--ix-chip--color--neutral:var(--si-sys-color-background-neutral);--ix-chip--color--neutral--contrast:var(--si-sys-color-text-on-neutral);--ix-chip--background--success:var(--si-sys-color-background-success);--ix-chip--background--success--hover:var(--si-sys-color-background-success-hover);--ix-chip--background--success--active:var(--si-sys-color-background-success-active);--ix-chip--border-color--success:var(--si-sys-color-background-success);--ix-chip--color--success:var(--si-sys-color-background-success);--ix-chip--color--success--contrast:var(--si-sys-color-text-on-success);--ix-chip-close-button--background:rgba(0, 0, 0, 0);--ix-chip-close-button--background--active:var(--si-sys-color-background-selected);--ix-chip-close-button--background--hover:var(--si-sys-color-background-hover);--ix-chip--background--outline:var(--si-sys-color-background-accent-secondary);--ix-chip--background--outline--active:var(--si-sys-color-background-selected);--ix-chip--background--outline--hover:var(--si-sys-color-background-hover);--ix-chip--color--outline:var(--si-sys-color-text-primary);--ix-chip--background--accent:var(--si-sys-color-background-accent);--ix-chip--background--accent--active:var(--si-sys-color-background-accent-active);--ix-chip--background--accent--hover:var(--si-sys-color-background-accent-hover);--ix-chip--color--accent:var(--si-sys-color-text-on-accent);--ix-chip--background--accent--outline:var(--si-sys-color-background-accent-secondary);--ix-chip--background--accent--outline--active:var(--si-sys-color-background-accent-secondary-active);--ix-chip--background--accent--outline--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-chip--border-color--accent--outline:var(--si-sys-color-border-accent);--ix-chip--border-color--accent--outline--active:var(--si-sys-color-border-accent-active);--ix-chip--border-color--accent--outline--hover:var(--si-sys-color-border-accent-hover);--ix-chip--color--accent--outline--active:var(--si-sys-color-border-accent-active);--ix-chip--color--accent--outline:var(--si-sys-color-text-primary);--ix-chip--color--accent--outline--hover:var(--si-sys-color-border-accent-hover)}:host{--ix-chip-attachment--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-chip--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-chip--padding-inline:var(--si-sys-sizing-spacing-x-50);--ix-chip-container--padding:var(--si-sys-sizing-spacing-y-40);--ix-chip-container--height:var(--si-sys-sizing-size-80);--ix-chip-container--max-height:var(--si-sys-sizing-size-80);--ix-chip-with-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-chip-close-button-container--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-chip-inactive--padding-right--outline:var(--si-sys-sizing-spacing-x-20);--ix-chip-close--size:var(--si-sys-sizing-size-70);--ix-chip-close--inset:var(--si-sys-sizing-spacing-x-20);--ix-chip--height:var(--si-sys-sizing-size-80);--ix-chip--max-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--min-height:var(--si-sys-sizing-size-80);--ix-chip-wrap--max-height:var(--si-sys-sizing-size-80);--ix-chip-main--padding-block:var(--si-sys-sizing-spacing-y-40);--ix-chip-main--padding-right--outline:var(--si-sys-sizing-spacing-x-30);--ix-chip--border-radius:var(--si-sys-sizing-border-radius-full);--ix-chip--border-width--focus:var(--si-sys-sizing-border-width-default);--ix-chip--outline-width--focus:var(--si-sys-sizing-focus-ring-width)}:host{display:inline-block;position:relative;height:var(--ix-chip--height);max-height:var(--ix-chip--max-height)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}.chip-wrap{display:inline-flex;width:inherit;max-width:100%;box-sizing:border-box;position:relative;align-items:stretch;border-radius:var(--ix-chip--border-radius);vertical-align:top;min-height:var(--ix-chip-wrap--min-height);max-height:var(--ix-chip-wrap--max-height)}.chip-wrap .chip-main{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;margin:0;box-sizing:border-box;display:inline-flex;align-items:center;flex:1 1 auto;min-width:0;width:100%;border-radius:inherit;padding-block:var(--ix-chip-main--padding-block);padding-inline:var(--ix-chip--padding-inline);font:inherit;text-align:inherit;color:inherit;cursor:pointer;background:transparent}.chip-wrap .chip-main:disabled{cursor:default}.chip-wrap .chip-main:focus-visible{outline:var(--ix-chip--outline-width--focus) solid var(--ix-chip--outline-color--focus);outline-offset:var(--ix-chip--outline-offset--focus)}.chip-wrap .chip-main .content-wrapper{display:inline-flex;align-items:center;flex:1;min-width:0}.chip-wrap .chip-main .content-wrapper.has-label .with-icon{margin-right:var(--ix-chip-with-icon--margin-right)}.chip-wrap .chip-main .slot-container{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:0 1 auto;min-width:0}.chip-wrap .chip-main .slot-container slot::slotted(*){max-width:100%;min-width:0}.chip-wrap.centerContent .chip-main .content-wrapper{justify-content:center;text-align:center}.chip-wrap.inactive .chip-main{pointer-events:none}.chip-wrap.outline .chip-main{padding-left:calc(var(--ix-chip--padding-inline) - var(--ix-chip--border-width--focus))}.chip-wrap.outline:not(.closable) .chip-main{padding-right:calc(var(--ix-chip--padding-inline) - var(--ix-chip--border-width--focus))}.chip-wrap.outline.closable .chip-main{padding-right:calc(var(--ix-chip-close--inset) + var(--ix-chip-close--size) + var(--ix-chip-main--padding-right--outline) - var(--ix-chip--border-width--focus))}.chip-wrap:not(.outline) .chip-main{padding-left:var(--ix-chip--padding-inline)}.chip-wrap:not(.outline):not(.closable) .chip-main{padding-right:var(--ix-chip--padding-inline)}.chip-wrap:not(.outline).closable .chip-main{padding-right:calc(var(--ix-chip-close--inset) + var(--ix-chip-close--size) + var(--ix-chip-main--padding-right--outline))}.chip-wrap .chip-close{position:absolute;right:var(--ix-chip-close--inset);top:50%;transform:translateY(-50%);width:var(--ix-chip-close--size);height:var(--ix-chip-close--size);box-sizing:border-box;border:0;margin:0;padding:0;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;font:inherit;color:var(--ix-chip-close--color);border-radius:50%;flex-shrink:0;z-index:1}.chip-wrap .chip-close:focus-visible{outline:var(--ix-chip--outline-width--focus) solid var(--ix-chip--outline-color--focus);outline-offset:var(--ix-chip--outline-offset--focus)}.chip-wrap .chip-close__icon{display:block;pointer-events:none}.chip-wrap.outline{border-width:var(--ix-chip--border-width--focus);border-style:solid}.chip-wrap.accent:not(.outline){color:var(--ix-chip--color--accent)}.chip-wrap.accent:not(.outline) .chip-main{background-color:var(--ix-chip--background--accent);color:var(--ix-chip--color--accent)}.chip-wrap.accent:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--accent--hover)}.chip-wrap.accent:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--accent--active)}.chip-wrap.accent:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.accent:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--accent--hover)}.chip-wrap.accent:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--accent--active)}.chip-wrap.accent.outline{color:var(--ix-chip--color--accent--outline);background-color:var(--ix-chip--background--accent--outline);border:solid var(--ix-chip--border-width--focus) var(--ix-chip--border-color--accent--outline)}.chip-wrap.accent.outline:hover:not(.inactive){border-color:var(--ix-chip--border-color--accent--outline--hover)}.chip-wrap.accent.outline:active:not(.inactive){border-color:var(--ix-chip--border-color--accent--outline--active)}.chip-wrap.accent.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--accent--outline)}.chip-wrap.accent.outline .chip-main:hover{background-color:var(--ix-chip--background--accent--outline--hover)}.chip-wrap.accent.outline .chip-main:active{background-color:var(--ix-chip--background--accent--outline--active)}.chip-wrap.accent.outline.icon .with-icon{color:var(--ix-chip-icon--color--accent)}.chip-wrap.accent.outline:hover:not(.inactive).icon .with-icon{color:var(--ix-chip--color--accent--outline--hover)}.chip-wrap.accent.outline:active:not(.inactive).icon .with-icon{color:var(--ix-chip--color--accent--outline--active)}.chip-wrap.accent.outline .chip-close{color:inherit}.chip-wrap.accent.outline .chip-close:hover{background-color:var(--ix-chip--background--accent--outline--hover)}.chip-wrap.accent.outline .chip-close:active{background-color:var(--ix-chip--background--accent--outline--active)}.chip-wrap.danger:not(.outline){color:var(--ix-chip--color--danger--contrast)}.chip-wrap.danger:not(.outline) .chip-main{background-color:var(--ix-chip--background--danger);color:var(--ix-chip--color--danger--contrast)}.chip-wrap.danger:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--danger--hover)}.chip-wrap.danger:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--danger--active)}.chip-wrap.danger:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.danger:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--danger--hover)}.chip-wrap.danger:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--danger--active)}.chip-wrap.danger.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--danger)}.chip-wrap.danger.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.danger.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.danger.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.danger.outline.icon .with-icon{color:var(--ix-chip--color--danger)}.chip-wrap.danger.outline .chip-close{color:inherit}.chip-wrap.danger.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.danger.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.critical:not(.outline){color:var(--ix-chip--color--critical--contrast)}.chip-wrap.critical:not(.outline) .chip-main{background-color:var(--ix-chip--background--critical);color:var(--ix-chip--color--critical--contrast)}.chip-wrap.critical:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--critical--hover)}.chip-wrap.critical:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--critical--active)}.chip-wrap.critical:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.critical:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--critical--hover)}.chip-wrap.critical:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--critical--active)}.chip-wrap.critical.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--critical)}.chip-wrap.critical.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.critical.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.critical.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.critical.outline.icon .with-icon{color:var(--ix-chip--color--critical)}.chip-wrap.critical.outline .chip-close{color:inherit}.chip-wrap.critical.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.critical.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.caution:not(.outline){color:var(--ix-chip--color--caution--contrast)}.chip-wrap.caution:not(.outline) .chip-main{background-color:var(--ix-chip--background--caution);color:var(--ix-chip--color--caution--contrast)}.chip-wrap.caution:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--caution--hover)}.chip-wrap.caution:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--caution--active)}.chip-wrap.caution:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.caution:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--caution--hover)}.chip-wrap.caution:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--caution--active)}.chip-wrap.caution.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--caution)}.chip-wrap.caution.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.caution.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.caution.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.caution.outline.icon .with-icon{color:var(--ix-chip-icon--color--caution)}.chip-wrap.caution.outline .chip-close{color:inherit}.chip-wrap.caution.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.caution.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.warning:not(.outline){color:var(--ix-chip--color--warning--contrast)}.chip-wrap.warning:not(.outline) .chip-main{background-color:var(--ix-chip--background--warning);color:var(--ix-chip--color--warning--contrast)}.chip-wrap.warning:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--warning--hover)}.chip-wrap.warning:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--warning--active)}.chip-wrap.warning:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.warning:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--warning--hover)}.chip-wrap.warning:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--warning--active)}.chip-wrap.warning.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--warning)}.chip-wrap.warning.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.warning.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.warning.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.warning.outline.icon .with-icon{color:var(--ix-chip-icon--color--warning)}.chip-wrap.warning.outline .chip-close{color:inherit}.chip-wrap.warning.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.warning.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.information:not(.outline){color:var(--ix-chip--color--information--contrast)}.chip-wrap.information:not(.outline) .chip-main{background-color:var(--ix-chip--background--information);color:var(--ix-chip--color--information--contrast)}.chip-wrap.information:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--information--hover)}.chip-wrap.information:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--information--active)}.chip-wrap.information:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.information:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--information--hover)}.chip-wrap.information:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--information--active)}.chip-wrap.information.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--information)}.chip-wrap.information.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.information.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.information.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.information.outline.icon .with-icon{color:var(--ix-chip--color--information)}.chip-wrap.information.outline .chip-close{color:inherit}.chip-wrap.information.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.information.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.neutral:not(.outline){color:var(--ix-chip--color--neutral--contrast)}.chip-wrap.neutral:not(.outline) .chip-main{background-color:var(--ix-chip--background--neutral);color:var(--ix-chip--color--neutral--contrast)}.chip-wrap.neutral:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--neutral--hover)}.chip-wrap.neutral:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--neutral--active)}.chip-wrap.neutral:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.neutral:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--neutral--hover)}.chip-wrap.neutral:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--neutral--active)}.chip-wrap.neutral.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--neutral)}.chip-wrap.neutral.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.neutral.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.neutral.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.neutral.outline.icon .with-icon{color:var(--ix-chip--color--neutral)}.chip-wrap.neutral.outline .chip-close{color:inherit}.chip-wrap.neutral.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.neutral.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.success:not(.outline){color:var(--ix-chip--color--success--contrast)}.chip-wrap.success:not(.outline) .chip-main{background-color:var(--ix-chip--background--success);color:var(--ix-chip--color--success--contrast)}.chip-wrap.success:not(.outline) .chip-main:hover{background-color:var(--ix-chip--background--success--hover)}.chip-wrap.success:not(.outline) .chip-main:active{background-color:var(--ix-chip--background--success--active)}.chip-wrap.success:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.success:not(.outline) .chip-close:hover{background-color:var(--ix-chip--background--success--hover)}.chip-wrap.success:not(.outline) .chip-close:active{background-color:var(--ix-chip--background--success--active)}.chip-wrap.success.outline{color:var(--ix-chip--color--outline);background-color:var(--ix-chip--background--outline);border-color:var(--ix-chip--border-color--success)}.chip-wrap.success.outline .chip-main{background-color:transparent;color:var(--ix-chip--color--outline)}.chip-wrap.success.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.success.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.success.outline.icon .with-icon{color:var(--ix-chip--color--success)}.chip-wrap.success.outline .chip-close{color:inherit}.chip-wrap.success.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.success.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.outline .chip-close{background-color:var(--ix-chip-close-button--background)}.chip-wrap.outline .chip-close:hover{background-color:var(--ix-chip-close-button--background--hover)}.chip-wrap.outline .chip-close:active{background-color:var(--ix-chip-close-button--background--active)}.chip-wrap.custom.outline{background-color:var(--ix-chip--background--outline)}.chip-wrap.custom.outline .chip-main{background-color:transparent}.chip-wrap.custom.outline .chip-main:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.custom.outline .chip-main:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.custom.outline .chip-close{color:inherit}.chip-wrap.custom.outline .chip-close:hover{background-color:var(--ix-chip--background--outline--hover)}.chip-wrap.custom.outline .chip-close:active{background-color:var(--ix-chip--background--outline--active)}.chip-wrap.custom:not(.outline) .chip-main{position:relative}.chip-wrap.custom:not(.outline) .chip-main:hover::after,.chip-wrap.custom:not(.outline) .chip-main:active::after{content:"";display:block;position:absolute;inset:0;border-radius:var(--ix-chip--border-radius);pointer-events:none}.chip-wrap.custom:not(.outline) .chip-main:hover::after{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-main:active::after{background-color:color-mix(in srgb, currentColor 20%, transparent)}.chip-wrap.custom:not(.outline) .chip-close{color:inherit;background-color:var(--ix-chip-close-button--background)}.chip-wrap.custom:not(.outline) .chip-close:hover{background-color:color-mix(in srgb, currentColor 10%, transparent)}.chip-wrap.custom:not(.outline) .chip-close:active{background-color:color-mix(in srgb, currentColor 20%, transparent)}:host(.attachment-chip) .chip-wrap{border-radius:var(--ix-chip-attachment--border-radius)}`;
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
   * Defaults to `accent`. When unset or set to an unknown value the chip falls back to `accent` styling.
   *
   * @breaking-change 6.0.0 Status variant values renamed and default changed from `primary` to `accent`
   */
  variant = "accent";
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
   */
  tooltipText = false;
  /**
   * Center the content of the chip.
   * Set to false to disable centering.
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
  hasLabel = false;
  labelObserver;
  containerElementRef = makeRef();
  getIgnoredAriaAttributes() {
    return ["role"];
  }
  componentWillLoad() {
    super.componentWillLoad();
    this.hasLabel = this.hostHasLabel();
  }
  connectedCallback() {
    super.connectedCallback();
    this.hasLabel = this.hostHasLabel();
    if (typeof MutationObserver === "undefined") {
      return;
    }
    if (!this.labelObserver) {
      this.labelObserver = new MutationObserver(() => {
        this.hasLabel = this.hostHasLabel();
      });
    }
    this.labelObserver.observe(this.hostElement, {
      characterData: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    this.labelObserver?.disconnect();
    super.disconnectedCallback();
  }
  hostHasLabel() {
    return Array.from(this.hostElement.childNodes).some((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        return true;
      }
      return node.nodeType === Node.TEXT_NODE && (node.textContent ?? "").trim().length > 0;
    });
  }
  handleSlotChange = (event) => {
    this.hasLabel = hasSlottedContent(event.target);
  };
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
    const variant = CHIP_VARIANTS.includes(this.variant) ? this.variant : "accent";
    const { wrap: customWrapStyle, main: customMainStyle } = this.getCustomStyles(variant);
    const wrapClasses = {
      "chip-wrap": true,
      outline: this.outline,
      inactive: this.inactive,
      danger: variant === "danger",
      warning: variant === "warning",
      caution: variant === "caution",
      information: variant === "information",
      accent: variant === "accent",
      critical: variant === "critical",
      success: variant === "success",
      neutral: variant === "neutral",
      custom: variant === "custom",
      closable: this.closable,
      icon: !!this.icon,
      centerContent: this.centerContent
    };
    const iconIsDecorative = !this.ariaLabelIcon?.trim();
    const hasAccessibleName = !!this.inheritAriaAttributes["aria-label"]?.trim() || !!this.inheritAriaAttributes["aria-labelledby"]?.trim();
    const hasTooltip = !!this.tooltipText || this.hostElement.hasAttribute("tooltip-text");
    const needsGroupRole = hasAccessibleName && (this.closable || hasTooltip);
    return h(Host, { key: "1dfdbe558f356cce8984ab401dd58c0b1fba419a", role: this.getHostRole(needsGroupRole), class: {
      inactive: this.inactive
    } }, h("div", { key: "a4eb49cdcd9c455f8a44243f773b6c997329932c", ref: this.containerElementRef, class: wrapClasses, style: customWrapStyle }, h("button", { key: "8738bfb5e7111ea9f90240cad0d442d73530f63e", type: "button", class: "chip-main", ...this.inheritAriaAttributes, disabled: this.inactive, style: customMainStyle }, h("div", { key: "d4bdacf181fc347e5a2f8b3583f37c0936ae4417", class: {
      "content-wrapper": true,
      "has-label": this.hasLabel
    } }, this.icon && h("ix-icon", { key: "2cef214ef4494faa31472e51bdfe7f6c88779e64", class: {
      "with-icon": true
    }, name: this.icon, "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative), style: this.getIconStyle(variant) }), h("span", { key: "bb2f2d683abcaf6edb47725759c565f09d755f06", class: "slot-container" }, h("slot", { key: "62fefff676225e41df7cfaf34aeaa38680284d6a", onSlotchange: this.handleSlotChange })))), this.closable && h("button", { key: "6818674c580b5b2ea87017d4d61cec2d444e0b9a", type: "button", class: "chip-close", "aria-label": this.ariaLabelCloseButton, onClick: (event) => {
      this.closeChip.emit(event);
      event.stopPropagation();
    } }, h("ix-icon", { key: "aadc24d07b00f3ac8c77a8e311a63c8ebbd7b258", class: "chip-close__icon", name: iconCloseSmall, size: "16", "aria-hidden": "true" }))), this.getTooltip());
  }
};
Chip.style = chipCss();
export {
  Chip as ix_chip
};
