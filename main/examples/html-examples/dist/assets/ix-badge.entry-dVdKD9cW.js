import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { a as a11yBoolean } from "./a11y-DD206pTM-BiwZPW5s.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-D76QMfpO-DgBj8N2Y.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as convertToRemString } from "./rwd.util-DIEEaulE-B7dE3uhl.js";
import { h as hasSlottedElements } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { h as iconCircleFilled, a as iconSuccess, j as iconSuccessFilled, d as iconInfo, k as iconInfoFilled, l as iconTriangleFilled, c as iconWarning, m as iconWarningFilled, n as iconRhombFilled, o as iconWarningRhomb, p as iconWarningRhombFilled, b as iconError, q as iconErrorFilled, r as iconAlarm, s as iconAlarmFilled } from "./index-BeX6RWvV-CXzUIwMU.js";
import { C as CHIP_VARIANTS } from "./chip.types-4ZsT_zIm-Dsc4eXJe.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const BADGE_STATUS_ICON_FALLBACK_VARIANT = "info";
const BADGE_STATUS_ICON_BY_VARIANT = {
  alarm: {
    filled: iconAlarmFilled,
    outline: iconAlarm,
    plate: iconCircleFilled
  },
  error: {
    filled: iconErrorFilled,
    outline: iconError,
    plate: iconCircleFilled
  },
  critical: {
    filled: iconWarningRhombFilled,
    outline: iconWarningRhomb,
    plate: iconRhombFilled
  },
  warning: {
    filled: iconWarningFilled,
    outline: iconWarning,
    plate: iconTriangleFilled
  },
  info: {
    filled: iconInfoFilled,
    outline: iconInfo,
    plate: iconCircleFilled
  },
  success: {
    filled: iconSuccessFilled,
    outline: iconSuccess,
    plate: iconCircleFilled
  }
};
function isBadgeStatusIconVariant(variant) {
  return Object.hasOwn(BADGE_STATUS_ICON_BY_VARIANT, variant);
}
function resolveStatusIconVariant(variant) {
  return isBadgeStatusIconVariant(variant) ? variant : BADGE_STATUS_ICON_FALLBACK_VARIANT;
}
function getBadgeStatusIcon(variant, outline = false) {
  const icons = BADGE_STATUS_ICON_BY_VARIANT[resolveStatusIconVariant(variant)];
  return outline ? icons.outline : icons.filled;
}
function getBadgeStatusIconPlate(variant) {
  return BADGE_STATUS_ICON_BY_VARIANT[resolveStatusIconVariant(variant)].plate;
}
function getResolvedStatusIconVariant(variant) {
  return resolveStatusIconVariant(variant);
}
const BADGE_ANATOMY_TYPES = [
  "label",
  "counter",
  "dot",
  "status-icon"
];
const BADGE_POSITIONS = ["top-after", "bottom-after"];
const BADGE_ATTACHED_OFFSET_DEFAULTS = {
  dot: { x: -6, y: -6 },
  label: { x: -10, y: -10 },
  counter: { x: -10, y: -10 },
  "status-icon": { x: -10, y: -10 }
};
const BADGE_OVERFLOW_THRESHOLD = 99;
const INTEGER_LABEL_PATTERN = /^-?\d+(\.\d+)?$/;
const OVERFLOW_LABEL = `${BADGE_OVERFLOW_THRESHOLD}+`;
function formatBadgeLabel(type, label) {
  switch (type) {
    case "counter":
      return formatCounterLabel(label);
    case "label":
      return formatTextLabel(label);
    case "dot":
    case "status-icon":
      return null;
  }
}
function coerceLabelText(label) {
  if (label === void 0 || label === null) {
    return "";
  }
  return String(label).trim();
}
function formatTextLabel(label) {
  const trimmed = coerceLabelText(label);
  if (!trimmed) {
    return null;
  }
  return trimmed;
}
function formatCounterLabel(label) {
  const trimmed = coerceLabelText(label);
  if (!trimmed) {
    return null;
  }
  if (trimmed === OVERFLOW_LABEL) {
    return OVERFLOW_LABEL;
  }
  if (!INTEGER_LABEL_PATTERN.test(trimmed)) {
    return null;
  }
  const intValue = Math.trunc(Number(trimmed));
  if (intValue > BADGE_OVERFLOW_THRESHOLD) {
    return OVERFLOW_LABEL;
  }
  return String(intValue);
}
const badgeCss = () => `@charset "UTF-8";:host{--ix-badge-primary-background:var(--si-sys-color-background-accent);--ix-badge-primary-border-color:var(--si-sys-color-border-accent);--ix-badge-primary-color:var(--si-sys-color-text-accent);--ix-badge-primary-contrast-color:var(--si-sys-color-text-on-accent);--ix-badge-alarm-background:var(--si-sys-color-background-danger);--ix-badge-alarm-border-color:var(--si-sys-color-border-danger);--ix-badge-alarm-color:var(--si-sys-color-text-danger);--ix-badge-alarm-contrast-color:var(--si-sys-color-text-on-danger);--ix-badge-critical-background:var(--si-sys-color-background-critical);--ix-badge-critical-border-color:var(--si-sys-color-border-critical);--ix-badge-critical-color:var(--si-sys-color-text-critical);--ix-badge-critical-contrast-color:var(--si-sys-color-text-on-critical);--ix-badge-warning-background:var(--si-sys-color-background-warning);--ix-badge-warning-border-color:var(--si-sys-color-border-warning);--ix-badge-warning-color:var(--si-sys-color-text-warning);--ix-badge-warning-contrast-color:var(--si-sys-color-text-on-warning);--ix-badge-info-background:var(--si-sys-color-background-information);--ix-badge-info-border-color:var(--si-sys-color-border-information);--ix-badge-info-color:var(--si-sys-color-text-information);--ix-badge-info-contrast-color:var(--si-sys-color-text-on-information);--ix-badge-success-background:var(--si-sys-color-background-success);--ix-badge-success-border-color:var(--si-sys-color-border-success);--ix-badge-success-color:var(--si-sys-color-text-success);--ix-badge-success-contrast-color:var(--si-sys-color-text-on-success);--ix-badge-neutral-background:var(--si-sys-color-background-neutral);--ix-badge-neutral-border-color:var(--si-sys-color-border-neutral);--ix-badge-neutral-color:var(--si-sys-color-text-secondary);--ix-badge-neutral-contrast-color:var(--si-sys-color-text-on-neutral);--ix-badge-outline-background:transparent;--ix-badge-default-color:var(--si-sys-color-text-primary);--ix-badge-contrast-ring-color:var(--si-sys-color-background-0);--ix-badge-pulse-color:var(--ix-badge-primary-background)}:host{--ix-badge-offset-x:0rem;--ix-badge-offset-y:0rem;--ix-badge-max-width:none;--ix-badge-animation-duration:2s;--ix-badge-indicator--font:var(--si-sys-typography-body-sbold);--ix-badge-counter--font-weight:bold;--ix-badge-label--font-weight:400;--ix-badge--line-height:var(--si-sys-sizing-size-60);--ix-badge-tooltip--font-size:0.875rem;--ix-badge-indicator--border-radius:var(--si-sys-sizing-border-radius-full);--ix-badge-indicator--border-width:var(--si-sys-sizing-border-width-default);--ix-badge-indicator--outline-width:var(--si-sys-sizing-border-width-default);--ix-badge-indicator--width:var(--si-sys-sizing-size-40);--ix-badge-indicator--height:var(--si-sys-sizing-size-40);--ix-badge-indicator--min-width:var(--si-sys-sizing-size-40);--ix-badge-indicator--min-height:var(--si-sys-sizing-size-40);--ix-badge--height:var(--si-sys-sizing-size-60);--ix-badge--min-width:var(--si-sys-sizing-size-60);--ix-badge--min-height:var(--si-sys-sizing-size-60);--ix-badge-indicator--padding-inline:var(--si-sys-sizing-spacing-x-20);--ix-badge-label--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-badge-indicator--gap:var(--si-sys-sizing-spacing-x-20);--ix-badge-indicator-outline--padding-inline:calc(     var(--si-sys-sizing-spacing-x-40) - var(--si-sys-sizing-border-width-default)   );--ix-badge-status-icon--width:var(--si-sys-sizing-size-60);--ix-badge-status-icon-stack-outline--icon-size:calc(     var(--si-sys-sizing-size-60) * 0.96   );--ix-badge-status-icon--icon-size:calc(var(--si-sys-sizing-size-60) * 0.96);--ix-badge-pulse-status--inset:calc(var(--si-sys-sizing-size-60) * 0.02);--ix-badge-pulse-border--inset:calc(     var(--si-sys-sizing-border-width-default) / 2   );--ix-badge-pulse-border--inset--expanded:calc(     var(--si-sys-sizing-border-width-default) / 2 - var(--si-sys-sizing-size-60) *       0.4   );--ix-badge-pulse-border--border-width--expanded:calc(     var(--si-sys-sizing-size-60) * 0.4   );--ix-badge-pulse-border--inset--end:calc(     var(--si-sys-sizing-border-width-default) / 2 - var(--si-sys-sizing-size-60) *       0.5   );--ix-badge-pulse-border--border-width--end:calc(     var(--si-sys-sizing-size-60) * 0.5   )}:host{display:inline-block;position:relative;width:-moz-fit-content;width:fit-content;max-width:100%;vertical-align:top}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}.anchor{display:contents}:host(.attached) ::slotted(*){position:relative;z-index:0}.indicator{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:var(--ix-badge-indicator--border-radius);font:var(--ix-badge-indicator--font);max-width:var(--ix-badge-max-width);z-index:1;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap;isolation:isolate}:host([type=label]:not(.attached)) .indicator,:host([type=counter]:not(.attached)) .indicator{pointer-events:auto;-webkit-user-select:text;-moz-user-select:text;user-select:text}:host(.with-tooltip:not(.attached)) .indicator{pointer-events:auto}.label{position:relative;z-index:1;min-width:0;overflow:hidden;text-overflow:ellipsis}:host(.attached) .indicator{position:absolute;z-index:1;pointer-events:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:default}:host(.attached.top-after) .indicator{top:var(--ix-badge-offset-y);inset-inline-end:var(--ix-badge-offset-x)}:host(.attached.bottom-after) .indicator{bottom:var(--ix-badge-offset-y);inset-inline-end:var(--ix-badge-offset-x)}:host([type=dot]:not(.attached)),:host([type=counter]:not(.attached)),:host([type=label]:not(.attached)),:host([type=status-icon]:not(.attached)){display:inline-flex;line-height:0;font-size:0}:host ix-tooltip{font-size:var(--ix-badge-tooltip--font-size);line-height:normal}:host([type=dot]:not(.attached)) slot,:host([type=counter]:not(.attached)) slot,:host([type=label]:not(.attached)) slot,:host([type=status-icon]:not(.attached)) slot{flex:0 0 0;width:0;height:0;overflow:hidden}:host([type=dot]) .indicator{width:var(--ix-badge-indicator--width);height:var(--ix-badge-indicator--height);min-width:var(--ix-badge-indicator--min-width);min-height:var(--ix-badge-indicator--min-height);padding:0;line-height:0;font-size:0;flex-shrink:0}:host([type=counter]) .indicator,:host([type=label]) .indicator{height:var(--ix-badge--height);min-width:var(--ix-badge--min-width);min-height:var(--ix-badge--min-height);flex-shrink:0}:host([type=counter]) .indicator{padding-inline:var(--ix-badge-indicator--padding-inline);font-weight:var(--ix-badge-counter--font-weight);line-height:var(--ix-badge--line-height)}:host([type=label]) .indicator{padding-inline:var(--ix-badge-label--padding-inline);gap:var(--ix-badge-indicator--gap);font-weight:var(--ix-badge-label--font-weight);line-height:var(--ix-badge--line-height)}:host([type=label]:not(.attached)) .indicator{width:100%;box-sizing:border-box}:host([type=label].outline.with-icon) .indicator{padding-inline:var(--ix-badge-indicator-outline--padding-inline)}:host([type=label].align-left) .indicator{justify-content:flex-start}:host([type=label]) .icon{flex-shrink:0}:host([type=counter]) .label,:host([type=label]) .label{line-height:var(--ix-badge--line-height)}:host([type=status-icon]) .indicator{display:inline-flex;align-items:center;justify-content:center;width:var(--ix-badge-status-icon--width);height:var(--ix-badge--height);min-width:var(--ix-badge--min-width);min-height:var(--ix-badge--min-height);padding:0;line-height:0;font-size:0;flex-shrink:0;background-color:transparent;border:none}:host([type=status-icon]:not(.outline)) .status-icon-stack{position:relative;display:block;width:var(--ix-badge-status-icon-stack-outline--icon-size);height:var(--ix-badge-status-icon-stack-outline--icon-size);flex-shrink:0}:host([type=status-icon]) .status-icon{flex-shrink:0;width:var(--ix-badge-status-icon--icon-size);height:var(--ix-badge-status-icon--icon-size);min-width:var(--ix-badge-status-icon--icon-size);min-height:var(--ix-badge-status-icon--icon-size)}:host([type=status-icon]:not(.outline)) .status-icon-stack .status-icon{position:absolute;inset:0}:host([type=status-icon].alarm){--ix-badge-pulse-color:var(--ix-badge-alarm-color)}:host([type=status-icon].alarm) .status-icon:not(.status-icon-plate){color:var(--ix-badge-alarm-color)}:host([type=status-icon].critical){--ix-badge-pulse-color:var(--ix-badge-critical-color)}:host([type=status-icon].critical) .status-icon:not(.status-icon-plate){color:var(--ix-badge-critical-color)}:host([type=status-icon].warning){--ix-badge-pulse-color:var(--ix-badge-warning-color)}:host([type=status-icon].warning) .status-icon:not(.status-icon-plate){color:var(--ix-badge-warning-color)}:host([type=status-icon].info){--ix-badge-pulse-color:var(--ix-badge-info-color)}:host([type=status-icon].info) .status-icon:not(.status-icon-plate){color:var(--ix-badge-info-color)}:host([type=status-icon].success){--ix-badge-pulse-color:var(--ix-badge-success-color)}:host([type=status-icon].success) .status-icon:not(.status-icon-plate){color:var(--ix-badge-success-color)}:host([type=status-icon].error){--ix-badge-pulse-color:var(--ix-badge-alarm-color)}:host([type=status-icon].error) .status-icon:not(.status-icon-plate){color:var(--ix-badge-alarm-color)}:host([type=status-icon].alarm:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-alarm-background)}:host([type=status-icon].alarm:not(.outline)) .status-icon-glyph{color:var(--ix-badge-alarm-background)}:host([type=status-icon].alarm:not(.outline)) .status-icon-plate{color:var(--ix-badge-alarm-contrast-color)}:host([type=status-icon].critical:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-critical-background)}:host([type=status-icon].critical:not(.outline)) .status-icon-glyph{color:var(--ix-badge-critical-background)}:host([type=status-icon].critical:not(.outline)) .status-icon-plate{color:var(--ix-badge-critical-contrast-color)}:host([type=status-icon].warning:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-warning-background)}:host([type=status-icon].warning:not(.outline)) .status-icon-glyph{color:var(--ix-badge-warning-background)}:host([type=status-icon].warning:not(.outline)) .status-icon-plate{color:var(--ix-badge-warning-contrast-color)}:host([type=status-icon].info:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-info-background)}:host([type=status-icon].info:not(.outline)) .status-icon-glyph{color:var(--ix-badge-info-background)}:host([type=status-icon].info:not(.outline)) .status-icon-plate{color:var(--ix-badge-info-contrast-color)}:host([type=status-icon].success:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-success-background)}:host([type=status-icon].success:not(.outline)) .status-icon-glyph{color:var(--ix-badge-success-background)}:host([type=status-icon].success:not(.outline)) .status-icon-plate{color:var(--ix-badge-success-contrast-color)}:host([type=status-icon].error:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-alarm-background)}:host([type=status-icon].error:not(.outline)) .status-icon-glyph{color:var(--ix-badge-alarm-background)}:host([type=status-icon].error:not(.outline)) .status-icon-plate{color:var(--ix-badge-alarm-contrast-color)}:host(.primary:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-primary-background)}:host(.primary:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-primary-background);color:var(--ix-badge-primary-contrast-color)}:host(.primary.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-primary-border-color)}:host(.primary.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-primary-border-color)}:host(.alarm:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-alarm-background)}:host(.alarm:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-alarm-background);color:var(--ix-badge-alarm-contrast-color)}:host(.alarm.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-alarm-border-color)}:host(.alarm.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-alarm-border-color)}:host(.critical:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-critical-background)}:host(.critical:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-critical-background);color:var(--ix-badge-critical-contrast-color)}:host(.critical.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-critical-border-color)}:host(.critical.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-critical-border-color)}:host(.warning:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-warning-background)}:host(.warning:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-warning-background);color:var(--ix-badge-warning-contrast-color)}:host(.warning.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-warning-border-color)}:host(.warning.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-warning-border-color)}:host(.info:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-info-background)}:host(.info:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-info-background);color:var(--ix-badge-info-contrast-color)}:host(.info.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-info-border-color)}:host(.info.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-info-border-color)}:host(.neutral:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-neutral-background)}:host(.neutral:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-neutral-background);color:var(--ix-badge-neutral-contrast-color)}:host(.neutral.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-neutral-border-color)}:host(.neutral.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-neutral-border-color)}:host(.success:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-success-background)}:host(.success:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-success-background);color:var(--ix-badge-success-contrast-color)}:host(.success.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-success-border-color)}:host(.success.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-success-border-color)}:host(.custom:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-custom-background)}:host(.custom:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-custom-background);color:var(--ix-badge-custom-color)}:host(.custom.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-custom-background)}:host(.custom.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-custom-background);color:var(--ix-badge-custom-color, var(--ix-badge-default-color))}:host(.border:not(.outline):not([type=status-icon])) .indicator{outline:var(--ix-badge-indicator--outline-width) solid var(--ix-badge-contrast-ring-color);outline-offset:0}:host ::slotted(.description){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);clip-path:inset(50%);white-space:nowrap;border:0}:host(.enable-animation) .indicator{overflow:visible;position:relative}:host(.attached.enable-animation) .indicator{position:absolute}:host([type=status-icon].enable-animation) .indicator::after{content:"";position:absolute;inset:var(--ix-badge-pulse-status--inset);z-index:-1;pointer-events:none;border-radius:inherit;background-color:var(--ix-badge-pulse-color);transform:scale(0.521);transform-origin:center;opacity:0;animation:ix-badge-pulse-status var(--ix-badge-animation-duration) linear infinite}:host(.enable-animation:not([type=status-icon])) .indicator::after{content:"";position:absolute;inset:var(--ix-badge-pulse-border--inset);z-index:-1;pointer-events:none;box-sizing:border-box;background-color:transparent;border-style:solid;border-color:var(--ix-badge-pulse-color);border-width:0;border-radius:inherit;opacity:0;animation:ix-badge-pulse-border var(--ix-badge-animation-duration) linear infinite}@media (prefers-reduced-motion: reduce){:host(.enable-animation) .indicator::after{animation:none;opacity:0;transform:none;background-color:transparent;border-width:0}}@keyframes ix-badge-pulse-border{0%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0}5%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0.5}45%{opacity:0.4}80%{animation-timing-function:ease-out;inset:var(--ix-badge-pulse-border--inset--expanded);border-width:var(--ix-badge-pulse-border--border-width--expanded);opacity:0.1}90%{inset:var(--ix-badge-pulse-border--inset--end);border-width:var(--ix-badge-pulse-border--border-width--end);opacity:0}100%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0}}@keyframes ix-badge-pulse-status{0%{transform:scale(0.521);opacity:0}5%{transform:scale(0.521);opacity:0.5;animation-timing-function:cubic-bezier(0.637, 0.43, 0.928, 1.008)}45%{transform:scale(1);opacity:0.4}80%{animation-timing-function:ease-out;transform:scale(1.6);opacity:0.1}90%{transform:scale(1.8);opacity:0}100%{transform:scale(0.521);opacity:0}}`;
const BADGE_DESCRIPTION_SLOT = "description";
const Badge = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Badge type (`counter`, `label`, `dot`, or `status-icon`).
   *
   * @since 5.2.0
   */
  type = "counter";
  /**
   * Visible text or count.
   * Required for `label` and `counter`. Omit for `dot` and `status-icon`.
   * Counters accept integers only (decimals truncated); values above 99 render as `99+`.
   *
   * @since 5.2.0
   */
  label;
  /**
   * Color variant.
   * For `status-icon`, unsupported values fall back to `info`.
   * Use `error` only with `status-icon` (other types map it to `alarm`).
   *
   * @since 5.2.0
   */
  variant = "primary";
  /**
   * Show the badge in outline style.
   *
   * @since 5.2.0
   */
  outline = false;
  /**
   * Add a high-contrast border on filled badges.
   * Ignored when **outline** is `true` or **type** is `status-icon`.
   *
   * @since 5.2.0
   */
  border = false;
  /**
   * Position relative to the slotted anchor.
   * Only has an effect when attached.
   *
   * @since 5.2.0
   */
  position = "top-after";
  /**
   * Extra horizontal offset in pixels.
   * Only has an effect when attached.
   * Added to the type default.
   *
   * @since 5.2.0
   */
  offsetX = 0;
  /**
   * Extra vertical offset in pixels.
   * Only has an effect when attached.
   * Added to the type default.
   *
   * @since 5.2.0
   */
  offsetY = 0;
  /**
   * Play the attention pulse animation.
   * Override duration with `--ix-badge-animation-duration` (default `2s`).
   *
   * @since 5.2.0
   */
  enableAnimation = false;
  /**
   * Custom background or border color.
   * Only has an effect when **variant** is `custom`.
   *
   * @since 5.2.0
   */
  background;
  /**
   * Custom text color.
   * Only has an effect when **variant** is `custom`.
   *
   * @since 5.2.0
   */
  badgeColor;
  /**
   * Leading icon name.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  icon;
  /**
   * Accessible name for the leading icon.
   * When unset, the icon is decorative if **label** provides visible text.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  ariaLabelIcon;
  /**
   * Left-align label content.
   * Only has an effect when **type** is `label`.
   *
   * @since 5.2.0
   */
  alignLeft = false;
  /**
   * Display a tooltip when the badge is standalone.
   * By default, no tooltip is displayed.
   * Add the attribute to use the badge label (or host `aria-label`) as the tooltip, or pass a string for custom text.
   * Ignored when the badge is attached to an anchor.
   *
   * @since 5.2.0
   */
  tooltipText = false;
  hasAnchor = false;
  descriptionId = "";
  anchorElements = [];
  slotElement;
  indicatorElementRef = makeRef();
  hasDisconnected = false;
  componentWillLoad() {
    super.componentWillLoad();
    this.descriptionId = `${this.getHostElementId()}-description`;
    const hasAnchor = this.detectHasAnchor();
    if (hasAnchor) {
      this.hasAnchor = true;
      this.inheritAriaAttributes = {};
      return;
    }
    this.hasAnchor = false;
  }
  componentDidLoad() {
    this.syncAnchorDescribedBy();
  }
  componentDidRender() {
    const nextHasAnchor = this.detectHasAnchor();
    if (nextHasAnchor !== this.hasAnchor) {
      this.applyAnchorMode(nextHasAnchor);
      this.syncAnchorDescribedBy();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasDisconnected) {
      this.syncAnchorDescribedBy();
      this.hasDisconnected = false;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearAnchorDescribedBy();
    this.hasDisconnected = true;
  }
  labelOrTypeChanged() {
    if (this.hasAnchor) {
      this.syncAnchorDescribedBy();
    }
  }
  setSlotRef = (element) => {
    this.slotElement = element;
  };
  onSlotChange = () => {
    this.applyAnchorMode(this.detectHasAnchor());
    this.syncAnchorDescribedBy();
  };
  isDescriptionElement(element) {
    return element.getAttribute("slot") === BADGE_DESCRIPTION_SLOT || !!this.descriptionId && element.id === this.descriptionId;
  }
  getAnchorElements() {
    return Array.from(this.hostElement.children).filter((child) => child instanceof HTMLElement && !this.isDescriptionElement(child));
  }
  detectHasAnchor() {
    if (hasSlottedElements(this.slotElement)) {
      return true;
    }
    return this.getAnchorElements().length > 0;
  }
  applyAnchorMode(hasAnchor) {
    if (hasAnchor === this.hasAnchor) {
      return;
    }
    this.clearAnchorDescribedBy();
    if (hasAnchor) {
      this.hasAnchor = true;
      this.readAriaAttributesFromHost();
      this.inheritAriaAttributes = {};
      this.descriptionId = `${this.getHostElementId()}-description`;
      return;
    }
    this.hasAnchor = false;
    this.inheritAriaAttributes = this.readAriaAttributesFromHost();
  }
  getResolvedVariant() {
    if (this.variant === "error") {
      return this.getResolvedType() === "status-icon" ? "error" : "alarm";
    }
    return CHIP_VARIANTS.includes(this.variant) ? this.variant : "primary";
  }
  getResolvedType() {
    return BADGE_ANATOMY_TYPES.includes(this.type) ? this.type : "counter";
  }
  getResolvedPosition() {
    return BADGE_POSITIONS.includes(this.position) ? this.position : "top-after";
  }
  getResolvedOffsets() {
    const type = this.getResolvedType();
    const defaults = this.hasAnchor ? BADGE_ATTACHED_OFFSET_DEFAULTS[type] : { x: 0, y: 0 };
    return {
      x: defaults.x + this.offsetX,
      y: defaults.y + this.offsetY
    };
  }
  getFormattedLabel(type) {
    return formatBadgeLabel(type, this.label);
  }
  getAccessibleText(formattedLabel) {
    return formattedLabel || void 0;
  }
  isTooltipRequested() {
    return !!(this.tooltipText || this.hostElement.hasAttribute("tooltip-text"));
  }
  hasVisibleIndicator(type, formattedLabel) {
    if (type === "counter" || type === "label") {
      return !!formattedLabel;
    }
    return type === "dot" || type === "status-icon";
  }
  shouldShowTooltip(type, formattedLabel) {
    return !this.hasAnchor && this.isTooltipRequested() && this.hasVisibleIndicator(type, formattedLabel);
  }
  getTooltipContent(formattedLabel) {
    if (typeof this.tooltipText === "string" && this.tooltipText.trim()) {
      return this.tooltipText.trim();
    }
    return formattedLabel?.trim() || this.inheritAriaAttributes["aria-label"]?.trim() || this.hostElement.getAttribute("aria-label")?.trim() || void 0;
  }
  getTooltip(formattedLabel) {
    if (!this.shouldShowTooltip(this.getResolvedType(), formattedLabel)) {
      return null;
    }
    const text = this.getTooltipContent(formattedLabel);
    if (!text) {
      return null;
    }
    return h("ix-tooltip", { for: this.indicatorElementRef.waitForCurrent(), "aria-label": text }, text);
  }
  syncAnchorDescribedBy() {
    this.clearAnchorDescribedBy();
    if (!this.hasAnchor) {
      return;
    }
    const accessibleText = this.getAccessibleText(this.getFormattedLabel(this.getResolvedType()));
    if (!accessibleText) {
      return;
    }
    const descriptionEl = this.ensureLightDomDescription(accessibleText);
    const anchors = this.getAnchorElements();
    for (const anchor of anchors) {
      const existing = anchor.getAttribute("aria-describedby");
      const ids = new Set(existing?.split(/\s+/).filter((id) => id.length > 0) ?? []);
      ids.add(descriptionEl.id);
      anchor.setAttribute("aria-describedby", Array.from(ids).join(" "));
      anchor.dataset.ixBadgeDescribedby = descriptionEl.id;
    }
    this.anchorElements = anchors;
  }
  ensureLightDomDescription(text) {
    let descriptionEl = Array.from(this.hostElement.children).find((child) => child instanceof HTMLElement && this.isDescriptionElement(child));
    if (!descriptionEl) {
      descriptionEl = document.createElement("span");
      descriptionEl.slot = BADGE_DESCRIPTION_SLOT;
      descriptionEl.className = "description";
      this.hostElement.appendChild(descriptionEl);
    }
    descriptionEl.id = this.descriptionId;
    descriptionEl.textContent = text;
    return descriptionEl;
  }
  removeLightDomDescription() {
    Array.from(this.hostElement.children).filter((child) => child instanceof HTMLElement && this.isDescriptionElement(child)).forEach((child) => child.remove());
  }
  clearAnchorDescribedBy() {
    for (const anchor of this.anchorElements) {
      if (anchor.dataset.ixBadgeDescribedby !== this.descriptionId) {
        continue;
      }
      const existing = anchor.getAttribute("aria-describedby");
      const ids = existing?.split(/\s+/).filter((id) => id !== this.descriptionId) ?? [];
      delete anchor.dataset.ixBadgeDescribedby;
      if (ids.length > 0) {
        anchor.setAttribute("aria-describedby", ids.join(" "));
      } else {
        anchor.removeAttribute("aria-describedby");
      }
    }
    this.anchorElements = [];
    this.removeLightDomDescription();
  }
  renderIndicatorShell(_accessibleText, content) {
    return h("div", { class: "indicator", ref: this.indicatorElementRef, "aria-hidden": this.hasAnchor ? a11yBoolean(true) : void 0 }, content);
  }
  renderIndicator(type, variant, accessibleText, formattedLabel) {
    if (type === "counter") {
      if (!formattedLabel) {
        return null;
      }
      return this.renderIndicatorShell(accessibleText, h("span", { class: "label" }, formattedLabel));
    }
    if (type === "dot") {
      return this.renderIndicatorShell(accessibleText);
    }
    if (type === "label") {
      if (!formattedLabel) {
        return null;
      }
      const iconIsDecorative = !this.ariaLabelIcon?.trim();
      return this.renderIndicatorShell(accessibleText, [
        this.icon ? h("ix-icon", { key: "icon", class: "icon", name: this.icon, size: "16", "aria-label": this.ariaLabelIcon, "aria-hidden": a11yBoolean(iconIsDecorative) }) : null,
        h("span", { key: "label", class: "label" }, formattedLabel)
      ]);
    }
    if (type === "status-icon") {
      if (this.outline) {
        return this.renderIndicatorShell(accessibleText, h("ix-icon", { class: "status-icon", name: getBadgeStatusIcon(variant, true), "aria-hidden": a11yBoolean(true) }));
      }
      return this.renderIndicatorShell(accessibleText, h("span", { class: "status-icon-stack" }, h("ix-icon", { class: "status-icon status-icon-plate", name: getBadgeStatusIconPlate(variant), "aria-hidden": a11yBoolean(true) }), h("ix-icon", { class: "status-icon status-icon-glyph", name: getBadgeStatusIcon(variant, false), "aria-hidden": a11yBoolean(true) })));
    }
    return null;
  }
  render() {
    const type = this.getResolvedType();
    const variant = this.getResolvedVariant();
    const position = this.getResolvedPosition();
    const offsets = this.getResolvedOffsets();
    const formattedLabel = this.getFormattedLabel(type);
    const accessibleText = this.getAccessibleText(formattedLabel);
    const hostVariant = type === "status-icon" ? getResolvedStatusIconVariant(variant) : variant;
    const showBorder = this.border && type !== "status-icon";
    const showTooltip = this.shouldShowTooltip(type, formattedLabel);
    const customHostStyle = hostVariant === "custom" ? {
      "--ix-badge-custom-background": this.background,
      "--ix-badge-custom-color": this.badgeColor
    } : void 0;
    return h(Host, { key: "eb7ef79ac10f2e4073b485297b4f42bf5bb9b6ee", ...this.hasAnchor ? {} : this.inheritAriaAttributes, class: {
      attached: this.hasAnchor,
      outline: this.outline,
      border: showBorder,
      "enable-animation": this.enableAnimation,
      "align-left": this.alignLeft,
      "with-icon": type === "label" && !!this.icon,
      "with-tooltip": showTooltip,
      ...this.hasAnchor ? { [position]: true } : {},
      [hostVariant]: true
    }, style: {
      ...customHostStyle,
      ...this.hasAnchor ? {
        "--ix-badge-offset-x": convertToRemString(offsets.x),
        "--ix-badge-offset-y": convertToRemString(offsets.y)
      } : {}
    } }, h("slot", { key: "b5aef2e59b995b5c1d9321a7a5467368a1211fa7", name: BADGE_DESCRIPTION_SLOT }), h("div", { key: "c92b6a087d54a50f727d8266b16cc0992b6216fe", class: "anchor" }, h("slot", { key: "bba96cc0a74ce12a02eb17333c0878739ef3c1c2", ref: this.setSlotRef, onSlotchange: this.onSlotChange })), this.renderIndicator(type, variant, accessibleText, formattedLabel), this.getTooltip(formattedLabel));
  }
  static get watchers() {
    return {
      "label": [{
        "labelOrTypeChanged": 0
      }],
      "type": [{
        "labelOrTypeChanged": 0
      }]
    };
  }
};
Badge.style = badgeCss();
export {
  Badge as ix_badge
};
