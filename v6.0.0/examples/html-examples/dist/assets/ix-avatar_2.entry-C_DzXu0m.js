import { M as Mixin, r as registerInstance, g as getElement, a as readTask, h, F as Fragment, H as Host, c as createEvent } from "./global-CU4RCWGK.js";
import { B as BaseButton } from "./base-button-CE8k_1TC-BjtFnklQ.js";
import { c as a11yHostAttributes, a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as closestElement, h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, u as updateFocusProxyList, F as FocusProxy } from "./focus-proxy-DWM2Y8PO-DMKuorxf.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-CM-NUHTW-CwKLvkpN.js";
import "./base-button.types-CAnyVyxc-CKNxtuf9.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const avatarCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button-danger-primary--background:var(--si-sys-color-background-danger);--ix-button-danger-primary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-danger-primary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-primary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-primary--color:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-primary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--background:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-secondary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-secondary--border-color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--border-color--active:var(--si-sys-color-border-danger);--ix-button-danger-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-danger-secondary--border-color--hover:var(--si-sys-color-border-danger);--ix-button-danger-secondary--color:var(--si-sys-color-text-danger);--ix-button-danger-secondary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-secondary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--background:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--active:var(--si-sys-color-background-danger-active);--ix-button-danger-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--background--hover:var(--si-sys-color-background-danger-hover);--ix-button-danger-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-danger-tertiary--color:var(--si-sys-color-text-danger);--ix-button-danger-tertiary--color--active:var(--si-sys-color-text-on-danger);--ix-button-danger-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-danger-tertiary--color--hover:var(--si-sys-color-text-on-danger);--ix-button-primary--background:var(--si-sys-color-background-accent);--ix-button-primary--background--active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-primary--background--hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed:var(--si-sys-color-background-accent-hover);--ix-button-primary--background--pressed-active:var(--si-sys-color-background-accent-active);--ix-button-primary--background--pressed-hover:var(--si-sys-color-background-accent-hover);--ix-button-primary--border-color:rgba(0, 0, 0, 0);--ix-button-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-primary--border-color--pressed-hover-active:rgba(0, 0, 0, 0);--ix-button-primary--color:var(--si-sys-color-text-on-accent);--ix-button-primary--color--active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-primary--color--hover:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-active:var(--si-sys-color-text-on-accent);--ix-button-primary--color--pressed-hover:var(--si-sys-color-text-on-accent);--ix-button-secondary--background:var(--si-sys-color-background-accent-secondary);--ix-button-secondary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-secondary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-secondary--border-color:var(--si-sys-color-border-accent);--ix-button-secondary--border-color--active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-secondary--border-color--hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed:var(--si-sys-color-border-accent-hover);--ix-button-secondary--border-color--pressed-active:var(--si-sys-color-border-accent-active);--ix-button-secondary--border-color--pressed-hover:var(--si-sys-color-border-accent-hover);--ix-button-secondary--color:var(--si-sys-color-text-accent);--ix-button-secondary--color--active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-secondary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-secondary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--background:var(--si-sys-color-background-2);--ix-button-subtle-primary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-primary--background--disabled:var(--si-sys-color-background-1);--ix-button-subtle-primary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-primary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-primary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-primary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-primary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-primary--color:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-primary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-primary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-primary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--background:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-secondary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-secondary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-secondary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-secondary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-secondary--border-color:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--disabled:var(--si-sys-color-border-3);--ix-button-subtle-secondary--border-color--hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-active:var(--si-sys-color-border-2);--ix-button-subtle-secondary--border-color--pressed-hover:var(--si-sys-color-border-2);--ix-button-subtle-secondary--color:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-secondary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-secondary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-secondary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--background:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--active:var(--si-sys-color-background-selected);--ix-button-subtle-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--background--hover:var(--si-sys-color-background-hover);--ix-button-subtle-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-subtle-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-subtle-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-subtle-tertiary--color:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--active:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-subtle-tertiary--color--hover:var(--si-sys-color-text-primary);--ix-button-subtle-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-active:var(--si-sys-color-text-accent-hover);--ix-button-subtle-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--background:rgba(0, 0, 0, 0);--ix-button-tertiary--background--active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--background--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--background--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-active:var(--si-sys-color-background-accent-secondary-active);--ix-button-tertiary--background--pressed-hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button-tertiary--border-color:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--disabled:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--hover:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-active:rgba(0, 0, 0, 0);--ix-button-tertiary--border-color--pressed-hover:rgba(0, 0, 0, 0);--ix-button-tertiary--color:var(--si-sys-color-text-accent);--ix-button-tertiary--color--active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--disabled:var(--si-sys-color-text-disabled);--ix-button-tertiary--color--hover:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed:var(--si-sys-color-text-accent-hover);--ix-button-tertiary--color--pressed-active:var(--si-sys-color-text-accent-active);--ix-button-tertiary--color--pressed-hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-button--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-avatar--outline-color--focus:var(--si-sys-color-effects-focus);--ix-avatar--background:var(--si-sys-color-background-neutral);--ix-avatar--color:var(--si-sys-color-text-on-neutral)}:host{--ix-avatar--border-radius:var(--si-sys-sizing-border-radius-full);--ix-avatar--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-avatar--focus--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-avatar-image--height:var(--si-sys-sizing-size-80);--ix-avatar-image--width:var(--si-sys-sizing-size-80);--ix-avatar-image--min-height:var(--si-sys-sizing-size-80);--ix-avatar-image--min-width:var(--si-sys-sizing-size-80);--ix-avatar-initials--height:var(--si-sys-sizing-size-80);--ix-avatar-initials--width:var(--si-sys-sizing-size-80);--ix-avatar-initials--min-height:var(--si-sys-sizing-size-80);--ix-avatar-initials--min-width:var(--si-sys-sizing-size-80);--ix-avatar-initials--margin-top:calc(     var(--si-sys-sizing-spacing-y-10) / 2   );--ix-avatar-user-info--height:var(--si-sys-sizing-size-90);--ix-avatar-user-info--padding:var(--si-sys-sizing-spacing-y-60);--ix-avatar-user-info--width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-avatar-user-info--min-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-avatar-user-info--max-width:calc(     var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-avatar-user-info--gap:var(--si-sys-sizing-spacing-x-60);--ix-avatar-user-info-avatar--width:var(--si-sys-sizing-size-80);--ix-avatar-user--max-width:var(--si-sys-sizing-size-150)}:host{display:flex;position:relative;width:-moz-fit-content;width:fit-content}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .avatar{display:flex;align-items:center}:host .avatar>.avatar-image{height:var(--ix-avatar-image--height);width:var(--ix-avatar-image--width);min-height:var(--ix-avatar-image--min-height);min-width:var(--ix-avatar-image--min-width);border-radius:var(--ix-avatar--border-radius)}:host .avatar>.avatar-initials{display:flex;align-items:center;justify-content:center;height:var(--ix-avatar-initials--height);width:var(--ix-avatar-initials--width);min-height:var(--ix-avatar-initials--min-height);min-width:var(--ix-avatar-initials--min-width);border-radius:var(--ix-avatar--border-radius);background-color:var(--ix-avatar--background);color:var(--ix-avatar--color)}:host .avatar>.avatar-initials>ix-typography{margin-top:var(--ix-avatar-initials--margin-top)}:host .avatar #avatar-path-background{fill:var(--ix-avatar--background)}:host .avatar #avatar-path-person{fill:var(--ix-avatar--color)}:host .user-info{display:flex;flex-direction:row;position:relative;height:var(--ix-avatar-user-info--height);padding:var(--ix-avatar-user-info--padding);width:var(--ix-avatar-user-info--width);min-width:var(--ix-avatar-user-info--min-width);max-width:var(--ix-avatar-user-info--max-width);gap:var(--ix-avatar-user-info--gap)}:host .user-info .avatar{width:var(--ix-avatar-user-info-avatar--width);pointer-events:none}:host .user-info .user{display:flex;position:relative;flex-direction:column;justify-content:center;max-width:var(--ix-avatar-user--max-width);width:100%;overflow:hidden}:host .user-info .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .user-info .extra{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.avatar-button) button{border-radius:var(--ix-avatar--border-radius) !important;all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;padding:var(--ix-button-padding, var(--ix-button--padding))}:host(.avatar-button) button{padding:0px}:host(.avatar-button) .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button-border-radius-left);border-bottom-left-radius:var(--ix-button-border-radius-left);border-top-right-radius:var(--ix-button-border-radius-right);border-bottom-right-radius:var(--ix-button-border-radius-right)}:host(.avatar-button) .btn-subtle-tertiary{background-color:var(--ix-button-subtle-tertiary--background);color:var(--ix-button-subtle-tertiary--color);--ix-button-color:var(--ix-button-subtle-tertiary--color);border-width:var(--ix-button--border-width);border-color:var(--ix-button-subtle-tertiary--border-color);border-style:solid}:host(.avatar-button) .btn-subtle-tertiary.selected{background-color:var(--ix-button-subtle-tertiary--background--pressed);color:var(--ix-button-subtle-tertiary--color--pressed)}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-hover)}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button-subtle-tertiary--background--pressed-hover);color:var(--ix-button-subtle-tertiary--color--pressed-active)}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button-subtle-tertiary--border-color--hover);background-color:var(--ix-button-subtle-tertiary--background--hover);color:var(--ix-button-subtle-tertiary--color--hover)}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button-subtle-tertiary--border-color--active);background-color:var(--ix-button-subtle-tertiary--background--active);color:var(--ix-button-subtle-tertiary--color--active)}:host(.avatar-button) button:focus-visible{outline:var(--ix-avatar--outline-width--focus) solid var(--ix-avatar--outline-color--focus);outline-offset:var(--ix-avatar--focus--outline-offset)}:host(.avatar-button) .avatar{transform:scale(0.8)}:host(.avatar-button) .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host(.avatar-button) .proxy-list li{height:2px;width:2px;pointer-events:all}:host(.avatar-button.active) .btn-subtle-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button-subtle-tertiary--border-color--active);background-color:var(--ix-button-subtle-tertiary--background--active);color:var(--ix-button-subtle-tertiary--color--active)}`;
function DefaultAvatar(props) {
  const { initials } = props;
  if (initials) {
    return h("div", { class: "avatar-initials" }, h("ix-typography", { format: "body-lg" }, initials));
  }
  return h("svg", { class: "avatar-image", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 32 32", "aria-label": props.ariaLabel }, h("g", { fill: "none", "fill-rule": "evenodd" }, h("path", { id: "avatar-path-background", d: "M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163\n          16-16c0-4.243-1.686-8.313-4.686-11.314C24.314 1.686 20.244 0 16 0z" }), h("path", { id: "avatar-path-person", d: "M17.897 17.91c3.8-.018 7.358 1.875 9.485 5.046-2.417 3.999-6.734 6.434-11.382\n        6.42-4.648.014-8.965-2.421-11.382-6.42 2.127-3.171 5.685-5.064\n        9.485-5.045h3.794zM15.821 2.129c3.682 0 6.667 2.984 6.667 6.666 0 3.682-2.985\n        6.667-6.667 6.667s-6.667-2.985-6.667-6.667 2.985-6.666 6.667-6.666z" })));
}
function AvatarImage(props) {
  return h("div", { class: "avatar" }, props.image ? h("img", { src: props.image, class: "avatar-image", "aria-label": props.ariaLabel }) : h(DefaultAvatar, { initials: props.initials, ariaLabel: props.ariaLabel }));
}
function UserInfo(props) {
  return h(Fragment, null, h("div", { class: "user-info", onClick: (event) => event.preventDefault() }, h(AvatarImage, { image: props.image, initials: props.initials, ariaLabel: props.ariaLabel }), h("div", { class: "user" }, h("div", { class: "username" }, props.userName), props.extra && h("ix-typography", { class: "extra", "text-color": "soft" }, props.extra))));
}
const Avatar = class extends Mixin(...DefaultMixins, ComponentIdMixin, AriaActiveDescendantMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Display an avatar image
   *
   */
  image;
  /**
   * Display the initials of the user. Will be overwritten by image
   *
   */
  initials;
  /**
   * If set an info card displaying the username will be placed inside the dropdown.
   * Note: Only working if avatar is part of the ix-application-header
   */
  username;
  /**
   * Optional description text that will be displayed underneath the username.
   * Note: Only working if avatar is part of the ix-application-header
   */
  extra;
  /**
   * Text to display in a tooltip when hovering over the avatar
   *
   * @since 4.0.0
   */
  tooltipText;
  /**
   * aria-label for the tooltip
   *
   * @since 4.0.0
   */
  ariaLabelTooltip;
  isClosestApplicationHeader = false;
  dropdownShow = false;
  hasSlottedElements = false;
  slotElement;
  dropdownElement;
  observeChildrenChange;
  tooltipRef = makeRef();
  a11yAttributes = {};
  get items() {
    return Array.from(this.hostElement.querySelectorAll("ix-dropdown-item"));
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
    const closest = closestElement("ix-application-header", this.hostElement);
    this.isClosestApplicationHeader = closest !== null;
    this.observeChildrenChange = new MutationObserver(() => {
      this.updateProxyList();
    });
    this.observeChildrenChange.observe(this.hostElement, {
      childList: true,
      subtree: true
    });
  }
  componentDidLoad() {
    this.updateProxyList();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.observeChildrenChange?.disconnect();
  }
  async slottedChanged() {
    this.hasSlottedElements = hasSlottedElements(this.slotElement);
  }
  resolveAvatarTrigger() {
    return new Promise((resolve, reject) => {
      readTask(() => {
        const button = this.hostElement.shadowRoot.querySelector("button");
        if (button) {
          resolve(button);
        } else {
          reject(new Error("ix-avatar - trigger element not found"));
        }
      });
    });
  }
  resolveTooltipTrigger() {
    return this.resolveAvatarTrigger().catch(() => this.hostElement);
  }
  onDropdownClick(event) {
    if (event.target === this.dropdownElement) {
      event.preventDefault();
    }
  }
  getControllingAriaElement() {
    return this.hostElement.shadowRoot.querySelector(`[aria-controls="${this.getHostElementId()}-proxy-listbox"]`);
  }
  isAriaActiveDescendantActive() {
    return this.dropdownShow;
  }
  getAriaActiveDescendantProxyItemId() {
    return PROXY_LISTITEM_ID_SUFFIX;
  }
  updateProxyList() {
    const items = this.items;
    const proxyList = this.hostElement.shadowRoot.querySelector(".proxy-list");
    if (!proxyList) {
      return;
    }
    updateFocusProxyList(proxyList, items, (item, proxyElement) => {
      proxyElement.role = "menuitem";
      proxyElement.innerText = item.label ?? item.textContent ?? "";
      proxyElement.ariaLabel = item.ariaLabel ?? item.label ?? item.textContent ?? "";
    });
  }
  render() {
    const ariaLabel = this.a11yAttributes["aria-label"];
    const tooltipText = this.tooltipText || this.username;
    const ariaHidden = tooltipText === this.username;
    const Avatar2 = h(Fragment, null, h(AvatarImage, { image: this.image, initials: this.initials, ariaLabel }), !!tooltipText && h("ix-tooltip", { ref: this.tooltipRef, for: this.resolveTooltipTrigger(), "aria-hidden": a11yBoolean(ariaHidden), "aria-label": this.ariaLabelTooltip }, tooltipText));
    if (this.isClosestApplicationHeader) {
      return h(Host, { slot: "ix-application-header-avatar", class: { "avatar-button": true, active: this.dropdownShow } }, h(BaseButton, { disabled: false, iconOval: false, icon: void 0, iconOnly: false, loading: false, selected: false, type: "button", variant: "subtle-tertiary", extraClasses: { active: this.dropdownShow }, ariaAttributes: {
        role: "menu",
        "aria-controls": `${this.getHostElementId()}-proxy-listbox`,
        "aria-expanded": a11yBoolean(this.dropdownShow),
        "aria-haspopup": "menu"
      } }, Avatar2), h("ix-dropdown", { ref: (ref) => this.dropdownElement = ref, trigger: this.resolveAvatarTrigger(), class: "avatar-dropdown", onClick: (e) => this.onDropdownClick(e), onShowChanged: (event) => {
        this.dropdownShow = event.detail;
        if (event.detail && this.tooltipRef.current) {
          this.tooltipRef.current.hideTooltip(0);
        }
      }, disableFocusTrap: true, focusHost: this.hostElement }, h(FocusProxy, { hostId: this.getHostElementId(), otherProps: {} }), this.username && h(Fragment, null, h(UserInfo, { extra: this.extra, image: this.image, initials: this.initials, userName: this.username, ariaLabel }), this.hasSlottedElements && h("ix-divider", { onClick: (e) => e.preventDefault() })), h("slot", { onSlotchange: () => this.slottedChanged(), ref: (ref) => this.slotElement = ref })));
    }
    return h(Host, null, Avatar2);
  }
};
Avatar.style = avatarCss();
const menuAvatarItemCss = () => `@charset "UTF-8";:host{--ix-menu-avatar-item--color:var(--si-sys-color-text-primary)}:host{display:block;color:var(--ix-menu-avatar-item--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
const MenuAvatarItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Avatar dropdown icon
   */
  icon;
  /**
   * Avatar dropdown label
   */
  label;
  /**
   * Avatar dropdown item clicked
   */
  itemClick;
  dropdownItemRef = makeRef();
  /** @internal */
  async getDropdownItemElement() {
    return this.dropdownItemRef.waitForCurrent();
  }
  render() {
    return h("ix-dropdown-item", { key: "7342ff7e27d6cc10498d6b1fb20499c669e7717b", ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
};
MenuAvatarItem.style = menuAvatarItemCss();
export {
  Avatar as ix_avatar,
  MenuAvatarItem as ix_menu_avatar_item
};
