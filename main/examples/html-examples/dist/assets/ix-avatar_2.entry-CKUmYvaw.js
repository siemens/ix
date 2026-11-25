import { M as Mixin, r as registerInstance, g as getElement, a as readTask, h, F as Fragment, H as Host, c as createEvent } from "./index-CgUi6DzV-CSMVgu78.js";
import { B as BaseButton } from "./base-button-DQT_06rD-DwqzzGwm.js";
import { b as a11yHostAttributes, a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { d as closestElement, a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { P as PROXY_LISTITEM_ID_SUFFIX, u as updateFocusProxyList, F as FocusProxy } from "./focus-proxy-DqR0voRV-CVFFuQ14.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { A as AriaActiveDescendantMixin } from "./aria-activedescendant.mixin-Crf0HAxu-86bOXquG.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
const avatarCss = () => `@charset "UTF-8";:host{--ix-button--outline-color--focus:var(--si-sys-color-effects-focus);--ix-button--background--danger-primary:var(--si-sys-color-background-danger);--ix-button--background--danger-primary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--danger-primary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-primary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-primary:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-primary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-secondary:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-secondary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--border-color--danger-secondary--active:var(--si-sys-color-border-danger);--ix-button--border-color--danger-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--danger-secondary--hover:var(--si-sys-color-border-danger);--ix-button--color--danger-secondary:var(--si-sys-color-text-danger);--ix-button--color--danger-secondary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-secondary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--active:var(--si-sys-color-background-danger-active);--ix-button--background--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--danger-tertiary--hover:var(--si-sys-color-background-danger-hover);--ix-button--border-color--danger-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--danger-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--danger-tertiary:var(--si-sys-color-text-danger);--ix-button--color--danger-tertiary--active:var(--si-sys-color-text-on-danger);--ix-button--color--danger-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--danger-tertiary--hover:var(--si-sys-color-text-on-danger);--ix-button--background--primary:var(--si-sys-color-background-accent);--ix-button--background--primary--active:var(--si-sys-color-background-accent-active);--ix-button--background--primary--disabled:var(--si-sys-color-background-1);--ix-button--background--primary--hover:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed:var(--si-sys-color-background-accent-hover);--ix-button--background--primary--pressed--hover:var(--si-sys-color-background-accent-hover);--ix-button--border-color--primary:rgba(0, 0, 0, 0);--ix-button--border-color--primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--primary--hover:rgba(0, 0, 0, 0);--ix-button--color--primary:var(--si-sys-color-text-on-accent);--ix-button--color--primary--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--primary--hover:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--active:var(--si-sys-color-text-on-accent);--ix-button--color--primary--pressed--hover:var(--si-sys-color-text-on-accent);--ix-button--background--secondary:var(--si-sys-color-background-accent-secondary);--ix-button--background--secondary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--secondary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--secondary:var(--si-sys-color-border-accent);--ix-button--border-color--secondary--active:var(--si-sys-color-border-accent-active);--ix-button--border-color--secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--secondary--hover:var(--si-sys-color-border-accent-hover);--ix-button--color--secondary:var(--si-sys-color-text-accent);--ix-button--color--secondary--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--secondary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--secondary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-primary:var(--si-sys-color-background-2);--ix-button--background--subtle-primary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-primary--disabled:var(--si-sys-color-background-1);--ix-button--background--subtle-primary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-primary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-primary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-primary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-primary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-primary:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-primary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-primary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-primary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-secondary:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-secondary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-secondary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-secondary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-secondary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-secondary:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--active:var(--si-sys-color-border-2);--ix-button--border-color--subtle-secondary--disabled:var(--si-sys-color-border-3);--ix-button--border-color--subtle-secondary--hover:var(--si-sys-color-border-2);--ix-button--color--subtle-secondary:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-secondary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-secondary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-secondary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--active:var(--si-sys-color-background-selected);--ix-button--background--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--subtle-tertiary--hover:var(--si-sys-color-background-hover);--ix-button--background--subtle-tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--subtle-tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--subtle-tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--subtle-tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--subtle-tertiary:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--active:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--subtle-tertiary--hover:var(--si-sys-color-text-primary);--ix-button--color--subtle-tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--active:var(--si-sys-color-text-accent-hover);--ix-button--color--subtle-tertiary--pressed--hover:var(--si-sys-color-text-accent-hover);--ix-button--background--tertiary:rgba(0, 0, 0, 0);--ix-button--background--tertiary--active:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--background--tertiary--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--background--tertiary--pressed:var(--si-sys-color-background-accent-secondary-active);--ix-button--background--tertiary--pressed--hover:var(--si-sys-color-background-accent-secondary-hover);--ix-button--border-color--tertiary:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--active:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--disabled:rgba(0, 0, 0, 0);--ix-button--border-color--tertiary--hover:rgba(0, 0, 0, 0);--ix-button--color--tertiary:var(--si-sys-color-text-accent);--ix-button--color--tertiary--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--disabled:var(--si-sys-color-text-disabled);--ix-button--color--tertiary--hover:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed:var(--si-sys-color-text-accent-hover);--ix-button--color--tertiary--pressed--active:var(--si-sys-color-text-accent-active);--ix-button--color--tertiary--pressed--hover:var(--si-sys-color-text-accent-hover)}:host{--ix-button--border-radius:var(--si-sys-sizing-border-radius-xs);--ix-button--border-width:var(--si-sys-sizing-border-width-default);--ix-button--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-button--outline-offset--focus:var(--si-sys-sizing-focus-ring-offset);--ix-button--padding:0 var(--si-sys-sizing-spacing-x-40);--ix-button--min-height:var(--si-sys-sizing-size-80);--ix-button--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-button-icon-right--margin-left:var(--si-sys-sizing-spacing-x-20);--ix-button--min-width:var(--si-sys-sizing-size-120)}:host{--ix-avatar--outline-color--focus:var(--si-sys-color-effects-focus);--ix-avatar--background:var(--si-sys-color-background-neutral);--ix-avatar--color:var(--si-sys-color-text-on-neutral)}:host{--ix-avatar--border-radius:var(--si-sys-sizing-border-radius-full);--ix-avatar--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-avatar--outline-offset--focus:calc(-1 * var(--ix-avatar--outline-width--focus));--ix-avatar-image--height:var(--si-sys-sizing-rem-size-80);--ix-avatar-image--width:var(--si-sys-sizing-rem-size-80);--ix-avatar-image--min-height:var(--si-sys-sizing-rem-size-80);--ix-avatar-image--min-width:var(--si-sys-sizing-rem-size-80);--ix-avatar-initials--height:var(--si-sys-sizing-rem-size-80);--ix-avatar-initials--width:var(--si-sys-sizing-rem-size-80);--ix-avatar-initials--min-height:var(--si-sys-sizing-rem-size-80);--ix-avatar-initials--min-width:var(--si-sys-sizing-rem-size-80);--ix-avatar-header--size:var(--si-sys-sizing-size-80);--ix-avatar-initials--margin-top:calc(var(--si-sys-sizing-spacing-y-10) / 2);--ix-avatar-user-info--height:var(--si-sys-sizing-size-90);--ix-avatar-user-info--padding:var(--si-sys-sizing-spacing-y-60);--ix-avatar-user-info--width:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100));--ix-avatar-user-info--min-width:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100));--ix-avatar-user-info--max-width:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100) + var(--si-sys-sizing-spacing-x-20));--ix-avatar-user-info--gap:var(--si-sys-sizing-spacing-x-60);--ix-avatar-user-info-avatar--width:var(--si-sys-sizing-size-80);--ix-avatar-user--max-width:var(--si-sys-sizing-size-150)}:host{display:flex;position:relative;width:-moz-fit-content;width:fit-content}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .avatar{display:flex;align-items:center}:host .avatar>.avatar-image{height:var(--ix-avatar-image--height);width:var(--ix-avatar-image--width);min-height:var(--ix-avatar-image--min-height);min-width:var(--ix-avatar-image--min-width);border-radius:var(--ix-avatar--border-radius)}:host .avatar>.avatar-initials{display:flex;align-items:center;justify-content:center;height:var(--ix-avatar-initials--height);width:var(--ix-avatar-initials--width);min-height:var(--ix-avatar-initials--min-height);min-width:var(--ix-avatar-initials--min-width);border-radius:var(--ix-avatar--border-radius);background-color:var(--ix-avatar--background);color:var(--ix-avatar--color)}:host .avatar>.avatar-initials>ix-typography{margin-top:var(--ix-avatar-initials--margin-top)}:host .avatar #avatar-path-background{fill:var(--ix-avatar--background)}:host .avatar #avatar-path-person{fill:var(--ix-avatar--color)}:host .user-info{display:flex;flex-direction:row;position:relative;height:var(--ix-avatar-user-info--height);padding:var(--ix-avatar-user-info--padding);width:var(--ix-avatar-user-info--width);min-width:var(--ix-avatar-user-info--min-width);max-width:var(--ix-avatar-user-info--max-width);gap:var(--ix-avatar-user-info--gap)}:host .user-info .avatar{width:var(--ix-avatar-user-info-avatar--width);pointer-events:none}:host .user-info .user{display:flex;position:relative;flex-direction:column;justify-content:center;max-width:var(--ix-avatar-user--max-width);width:100%;overflow:hidden}:host .user-info .username{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host .user-info .extra{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.avatar-button) button{border-radius:var(--ix-avatar--border-radius) !important;--ix-avatar-image--height:var(--ix-avatar-header--size);--ix-avatar-image--width:var(--ix-avatar-header--size);--ix-avatar-image--min-height:var(--ix-avatar-header--size);--ix-avatar-image--min-width:var(--ix-avatar-header--size);--ix-avatar-initials--height:var(--ix-avatar-header--size);--ix-avatar-initials--width:var(--ix-avatar-header--size);--ix-avatar-initials--min-height:var(--ix-avatar-header--size);--ix-avatar-initials--min-width:var(--ix-avatar-header--size);all:unset;box-sizing:border-box;display:inline-flex;flex-direction:row;flex-wrap:nowrap;overflow:hidden;align-items:center;justify-content:center;width:100%;height:100%;min-height:inherit;padding:var(--ix-button--padding)}:host(.avatar-button) button{padding:0px}:host(.avatar-button) .btn-subtle-tertiary{text-align:start;border-top-left-radius:var(--ix-button--border-radius-left);border-bottom-left-radius:var(--ix-button--border-radius-left);border-top-right-radius:var(--ix-button--border-radius-right);border-bottom-right-radius:var(--ix-button--border-radius-right)}:host(.avatar-button) .btn-subtle-tertiary{background-color:var(--ix-button--background--subtle-tertiary);color:var(--ix-button--color--subtle-tertiary);--ix-button--color:var(--ix-button--color--subtle-tertiary);border-width:var(--ix-button--border-width);border-color:var(--ix-button--border-color--subtle-tertiary);border-style:solid}:host(.avatar-button) .btn-subtle-tertiary.selected{background-color:var(--ix-button--background--subtle-tertiary--pressed);color:var(--ix-button--color--subtle-tertiary--pressed)}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).hover{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--hover)}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-subtle-tertiary.selected:not(.disabled):not(:disabled).active{background-color:var(--ix-button--background--subtle-tertiary--pressed--hover);color:var(--ix-button--color--subtle-tertiary--pressed--active)}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled):hover,:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled).hover{border-color:var(--ix-button--border-color--subtle-tertiary--hover);background-color:var(--ix-button--background--subtle-tertiary--hover);color:var(--ix-button--color--subtle-tertiary--hover)}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled){cursor:pointer}:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled):active,:host(.avatar-button) .btn-subtle-tertiary:not(.disabled):not(:disabled).active{border-color:var(--ix-button--border-color--subtle-tertiary--active);background-color:var(--ix-button--background--subtle-tertiary--active);color:var(--ix-button--color--subtle-tertiary--active)}:host(.avatar-button) button:focus-visible{outline:var(--ix-avatar--outline-width--focus) solid var(--ix-avatar--outline-color--focus);outline-offset:var(--ix-avatar--outline-offset--focus)}:host(.avatar-button) .avatar{transform:scale(0.8)}:host(.avatar-button) .proxy-list{all:unset;position:absolute;left:0px;top:0px;overflow:hidden;color:transparent;opacity:0;pointer-events:all;z-index:1000}:host(.avatar-button) .proxy-list li{height:2px;width:2px;pointer-events:all}:host(.avatar-button.active) .btn-subtle-tertiary:not(.disabled):not(:disabled){border-color:var(--ix-button--border-color--subtle-tertiary--active);background-color:var(--ix-button--background--subtle-tertiary--active);color:var(--ix-button--color--subtle-tertiary--active)}`;
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
  return h(Fragment, null, h("div", { class: "user-info", onClick: (event) => event.preventDefault() }, h(AvatarImage, { image: props.image, initials: props.initials, ariaLabel: props.ariaLabel }), h("div", { class: "user" }, h("div", { class: "username" }, props.userName), props.extra && h("ix-typography", { class: "extra", "text-color": "secondary" }, props.extra))));
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
   */
  tooltipText;
  /**
   * aria-label for the tooltip
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
const menuAvatarItemCss = () => `@charset "UTF-8";:host{--ix-menu-avatar-item--color:var(--si-sys-color-text-primary)}:host{display:block;color:var(--ix-menu-avatar-item--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:8px;height:8px}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}`;
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
    return h("ix-dropdown-item", { key: "a98de9acc8796ed7369650eeb04fe1f5900328b2", ref: this.dropdownItemRef, icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
};
MenuAvatarItem.style = menuAvatarItemCss();
export {
  Avatar as ix_avatar,
  MenuAvatarItem as ix_menu_avatar_item
};
