import { M as Mixin, r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-cTztV9I4.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BZzEjNbh-B1kz3e97.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as convertToRemString } from "./rwd.util-n94Jj1GG-B7dE3uhl.js";
import { a as hasSlottedElements } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { B as iconDocument, V as iconCircleFilled, b as iconSuccess, Z as iconSuccessFilled, _ as iconSquareFilled, d as iconInfo, $ as iconInfoFilled, a0 as iconRhombFilled, e as iconWarningRhomb, a1 as iconWarningRhombFilled, X as iconTriangleFilled, f as iconWarning, a2 as iconWarningFilled, a3 as iconOctagonFilled, c as iconWarningOctagon, a4 as iconWarningOctagonFilled, a as iconError, a5 as iconErrorFilled, g as iconAlarm, a6 as iconAlarmFilled } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import { C as CHIP_VARIANTS } from "./chip.types-BdWkqvxV-CEnOtxPr.js";
import { m as menuController } from "./menu-service-DYOa8RGJ-B6sy0L8-.js";
import { c as createMutationObserver } from "./mutation-observer-CX81WQtk-DFcmhOTk.js";
import { c as createSequentialId } from "./uuid-D3T7Lr4G-CKA8Zb0e.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
const BADGE_STATUS_ICON_FALLBACK_VARIANT = "information";
const BADGE_STATUS_ICON_BY_VARIANT = {
  danger: {
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
    filled: iconWarningOctagonFilled,
    outline: iconWarningOctagon,
    plate: iconOctagonFilled
  },
  warning: {
    filled: iconWarningFilled,
    outline: iconWarning,
    plate: iconTriangleFilled
  },
  caution: {
    filled: iconWarningRhombFilled,
    outline: iconWarningRhomb,
    plate: iconRhombFilled
  },
  information: {
    filled: iconInfoFilled,
    outline: iconInfo,
    plate: iconSquareFilled
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
const BADGE_VARIANTS = CHIP_VARIANTS;
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
const badgeCss = () => `@charset "UTF-8";:host{--ix-badge-accent-background:var(--si-sys-color-background-accent);--ix-badge-accent-border-color:var(--si-sys-color-border-accent);--ix-badge-accent-color:var(--si-sys-color-text-accent);--ix-badge-accent-contrast-color:var(--si-sys-color-text-on-accent);--ix-badge-danger-background:var(--si-sys-color-background-danger);--ix-badge-danger-border-color:var(--si-sys-color-border-danger);--ix-badge-danger-color:var(--si-sys-color-text-danger);--ix-badge-danger-contrast-color:var(--si-sys-color-text-on-danger);--ix-badge-critical-background:var(--si-sys-color-background-critical);--ix-badge-critical-border-color:var(--si-sys-color-border-critical);--ix-badge-critical-color:var(--si-sys-color-text-critical);--ix-badge-critical-contrast-color:var(--si-sys-color-text-on-critical);--ix-badge-warning-background:var(--si-sys-color-background-warning);--ix-badge-warning-border-color:var(--si-sys-color-border-warning);--ix-badge-warning-color:var(--si-sys-color-text-warning);--ix-badge-warning-contrast-color:var(--si-sys-color-text-on-warning);--ix-badge-caution-background:var(--si-sys-color-background-caution);--ix-badge-caution-border-color:var(--si-sys-color-border-caution);--ix-badge-caution-color:var(--si-sys-color-text-caution);--ix-badge-caution-contrast-color:var(--si-sys-color-text-on-caution);--ix-badge-information-background:var(--si-sys-color-background-information);--ix-badge-information-border-color:var(--si-sys-color-border-information);--ix-badge-information-color:var(--si-sys-color-text-information);--ix-badge-information-contrast-color:var(--si-sys-color-text-on-information);--ix-badge-success-background:var(--si-sys-color-background-success);--ix-badge-success-border-color:var(--si-sys-color-border-success);--ix-badge-success-color:var(--si-sys-color-text-success);--ix-badge-success-contrast-color:var(--si-sys-color-text-on-success);--ix-badge-neutral-background:var(--si-sys-color-background-neutral);--ix-badge-neutral-border-color:var(--si-sys-color-border-neutral);--ix-badge-neutral-color:var(--si-sys-color-text-secondary);--ix-badge-neutral-contrast-color:var(--si-sys-color-text-on-neutral);--ix-badge-outline-background:transparent;--ix-badge-default-color:var(--si-sys-color-text-primary);--ix-badge-contrast-ring-color:var(--si-sys-color-background-0);--ix-badge-pulse-color:var(--ix-badge-accent-background)}:host{--ix-badge-offset-x:0rem;--ix-badge-offset-y:0rem;--ix-badge-max-width:none;--ix-badge-animation-duration:2s;--ix-badge-indicator--font:var(--si-sys-typography-body-sbold);--ix-badge-counter--font-weight:bold;--ix-badge-label--font-weight:400;--ix-badge--line-height:var(--si-sys-sizing-size-60);--ix-badge-tooltip--font-size:0.875rem;--ix-badge-indicator--border-radius:var(--si-sys-sizing-border-radius-full);--ix-badge-indicator--border-width:var(--si-sys-sizing-border-width-default);--ix-badge-indicator--outline-width:var(--si-sys-sizing-border-width-default);--ix-badge-indicator--width:var(--si-sys-sizing-size-40);--ix-badge-indicator--height:var(--si-sys-sizing-size-40);--ix-badge-indicator--min-width:var(--si-sys-sizing-size-40);--ix-badge-indicator--min-height:var(--si-sys-sizing-size-40);--ix-badge--height:var(--si-sys-sizing-size-60);--ix-badge--min-width:var(--si-sys-sizing-size-60);--ix-badge--min-height:var(--si-sys-sizing-size-60);--ix-badge-indicator--padding-inline:var(--si-sys-sizing-spacing-x-20);--ix-badge-label--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-badge-indicator--gap:var(--si-sys-sizing-spacing-x-20);--ix-badge-indicator-outline--padding-inline:var(--si-sys-sizing-spacing-x-40);--ix-badge-status-icon--width:var(--si-sys-sizing-size-60);--ix-badge-status-icon-stack-outline--icon-size:var(--si-sys-sizing-size-60);--ix-badge-status-icon--icon-size:var(--si-sys-sizing-size-60);--ix-badge-pulse-status--inset:0;--ix-badge-pulse-border--inset:0;--ix-badge-pulse-border--border-width--expanded:var(--si-sys-sizing-spacing-x-40);--ix-badge-pulse-border--inset--expanded:calc(     -1 * var(--ix-badge-pulse-border--border-width--expanded)   );--ix-badge-pulse-border--border-width--end:var(--si-sys-sizing-spacing-x-50);--ix-badge-pulse-border--inset--end:calc(     -1 * var(--ix-badge-pulse-border--border-width--end)   )}:host{display:inline-block;position:relative;width:-moz-fit-content;width:fit-content;max-width:100%;vertical-align:top}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}.anchor{display:contents}:host(.attached) ::slotted(*){position:relative;z-index:0}.indicator{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:var(--ix-badge-indicator--border-radius);font:var(--ix-badge-indicator--font);max-width:var(--ix-badge-max-width);z-index:1;pointer-events:none;-moz-user-select:none;user-select:none;white-space:nowrap;isolation:isolate}:host([type=label]:not(.attached)) .indicator,:host([type=counter]:not(.attached)) .indicator{pointer-events:auto;-moz-user-select:text;user-select:text}:host(.with-tooltip:not(.attached)) .indicator{pointer-events:auto}.label{position:relative;z-index:1;min-width:0;overflow:hidden;text-overflow:ellipsis}:host(.attached) .indicator{position:absolute;z-index:1;pointer-events:auto;-moz-user-select:none;user-select:none;cursor:default}:host(.attached.top-after) .indicator{top:var(--ix-badge-offset-y);inset-inline-end:var(--ix-badge-offset-x)}:host(.attached.bottom-after) .indicator{bottom:var(--ix-badge-offset-y);inset-inline-end:var(--ix-badge-offset-x)}:host([type=dot]:not(.attached)),:host([type=counter]:not(.attached)),:host([type=label]:not(.attached)),:host([type=status-icon]:not(.attached)){display:inline-flex;line-height:0;font-size:0}:host ix-tooltip{font-size:var(--ix-badge-tooltip--font-size);line-height:normal}:host([type=dot]:not(.attached)) slot,:host([type=counter]:not(.attached)) slot,:host([type=label]:not(.attached)) slot,:host([type=status-icon]:not(.attached)) slot{flex:0 0 0;width:0;height:0;overflow:hidden}:host([type=dot]) .indicator{width:var(--ix-badge-indicator--width);height:var(--ix-badge-indicator--height);min-width:var(--ix-badge-indicator--min-width);min-height:var(--ix-badge-indicator--min-height);padding:0;line-height:0;font-size:0;flex-shrink:0}:host([type=counter]) .indicator,:host([type=label]) .indicator{height:var(--ix-badge--height);min-width:var(--ix-badge--min-width);min-height:var(--ix-badge--min-height);flex-shrink:0}:host([type=counter]) .indicator{padding-inline:var(--ix-badge-indicator--padding-inline);font-weight:var(--ix-badge-counter--font-weight);line-height:var(--ix-badge--line-height)}:host([type=label]) .indicator{padding-inline:var(--ix-badge-label--padding-inline);gap:var(--ix-badge-indicator--gap);font-weight:var(--ix-badge-label--font-weight);line-height:var(--ix-badge--line-height)}:host([type=label]:not(.attached)) .indicator{width:100%;box-sizing:border-box}:host([type=label].outline.with-icon) .indicator{padding-inline:var(--ix-badge-indicator-outline--padding-inline)}:host([type=label].align-left) .indicator{justify-content:flex-start}:host([type=label]) .icon{flex-shrink:0}:host([type=counter]) .label,:host([type=label]) .label{line-height:var(--ix-badge--line-height)}:host([type=counter]) .label{text-box:trim-both cap alphabetic}:host([type=status-icon]) .indicator{display:inline-flex;align-items:center;justify-content:center;width:var(--ix-badge-status-icon--width);height:var(--ix-badge--height);min-width:var(--ix-badge--min-width);min-height:var(--ix-badge--min-height);padding:0;line-height:0;font-size:0;flex-shrink:0;background-color:transparent;border:none}:host([type=status-icon]:not(.outline)) .status-icon-stack{position:relative;display:block;width:var(--ix-badge-status-icon-stack-outline--icon-size);height:var(--ix-badge-status-icon-stack-outline--icon-size);flex-shrink:0}:host([type=status-icon]) .status-icon{flex-shrink:0;width:var(--ix-badge-status-icon--icon-size);height:var(--ix-badge-status-icon--icon-size);min-width:var(--ix-badge-status-icon--icon-size);min-height:var(--ix-badge-status-icon--icon-size)}:host([type=status-icon]:not(.outline)) .status-icon-stack .status-icon{position:absolute;inset:0}:host([type=status-icon].danger){--ix-badge-pulse-color:var(--ix-badge-danger-color)}:host([type=status-icon].danger) .status-icon:not(.status-icon-plate){color:var(--ix-badge-danger-color)}:host([type=status-icon].critical){--ix-badge-pulse-color:var(--ix-badge-critical-color)}:host([type=status-icon].critical) .status-icon:not(.status-icon-plate){color:var(--ix-badge-critical-color)}:host([type=status-icon].warning){--ix-badge-pulse-color:var(--ix-badge-warning-color)}:host([type=status-icon].warning) .status-icon:not(.status-icon-plate){color:var(--ix-badge-warning-color)}:host([type=status-icon].caution){--ix-badge-pulse-color:var(--ix-badge-caution-color)}:host([type=status-icon].caution) .status-icon:not(.status-icon-plate){color:var(--ix-badge-caution-color)}:host([type=status-icon].information){--ix-badge-pulse-color:var(--ix-badge-information-color)}:host([type=status-icon].information) .status-icon:not(.status-icon-plate){color:var(--ix-badge-information-color)}:host([type=status-icon].success){--ix-badge-pulse-color:var(--ix-badge-success-color)}:host([type=status-icon].success) .status-icon:not(.status-icon-plate){color:var(--ix-badge-success-color)}:host([type=status-icon].error){--ix-badge-pulse-color:var(--ix-badge-danger-color)}:host([type=status-icon].error) .status-icon:not(.status-icon-plate){color:var(--ix-badge-danger-color)}:host([type=status-icon].danger:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-danger-background)}:host([type=status-icon].danger:not(.outline)) .status-icon-glyph{color:var(--ix-badge-danger-background)}:host([type=status-icon].danger:not(.outline)) .status-icon-plate{color:var(--ix-badge-danger-contrast-color)}:host([type=status-icon].critical:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-critical-background)}:host([type=status-icon].critical:not(.outline)) .status-icon-glyph{color:var(--ix-badge-critical-background)}:host([type=status-icon].critical:not(.outline)) .status-icon-plate{color:var(--ix-badge-critical-contrast-color)}:host([type=status-icon].warning:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-warning-background)}:host([type=status-icon].warning:not(.outline)) .status-icon-glyph{color:var(--ix-badge-warning-background)}:host([type=status-icon].warning:not(.outline)) .status-icon-plate{color:var(--ix-badge-warning-contrast-color)}:host([type=status-icon].caution:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-caution-background)}:host([type=status-icon].caution:not(.outline)) .status-icon-glyph{color:var(--ix-badge-caution-background)}:host([type=status-icon].caution:not(.outline)) .status-icon-plate{color:var(--ix-badge-caution-contrast-color)}:host([type=status-icon].information:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-information-background)}:host([type=status-icon].information:not(.outline)) .status-icon-glyph{color:var(--ix-badge-information-background)}:host([type=status-icon].information:not(.outline)) .status-icon-plate{color:var(--ix-badge-information-contrast-color)}:host([type=status-icon].success:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-success-background)}:host([type=status-icon].success:not(.outline)) .status-icon-glyph{color:var(--ix-badge-success-background)}:host([type=status-icon].success:not(.outline)) .status-icon-plate{color:var(--ix-badge-success-contrast-color)}:host([type=status-icon].error:not(.outline)){--ix-badge-pulse-color:var(--ix-badge-danger-background)}:host([type=status-icon].error:not(.outline)) .status-icon-glyph{color:var(--ix-badge-danger-background)}:host([type=status-icon].error:not(.outline)) .status-icon-plate{color:var(--ix-badge-danger-contrast-color)}:host(.danger:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-danger-background)}:host(.danger:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-danger-background);color:var(--ix-badge-danger-contrast-color)}:host(.danger.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-danger-border-color)}:host(.danger.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-danger-border-color)}:host(.warning:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-warning-background)}:host(.warning:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-warning-background);color:var(--ix-badge-warning-contrast-color)}:host(.warning.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-warning-border-color)}:host(.warning.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-warning-border-color)}:host(.caution:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-caution-background)}:host(.caution:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-caution-background);color:var(--ix-badge-caution-contrast-color)}:host(.caution.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-caution-border-color)}:host(.caution.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-caution-border-color)}:host(.information:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-information-background)}:host(.information:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-information-background);color:var(--ix-badge-information-contrast-color)}:host(.information.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-information-border-color)}:host(.information.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-information-border-color)}:host(.accent:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-accent-background)}:host(.accent:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-accent-background);color:var(--ix-badge-accent-contrast-color)}:host(.accent.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-accent-border-color)}:host(.accent.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-accent-border-color)}:host(.critical:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-critical-background)}:host(.critical:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-critical-background);color:var(--ix-badge-critical-contrast-color)}:host(.critical.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-critical-border-color)}:host(.critical.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-critical-border-color)}:host(.success:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-success-background)}:host(.success:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-success-background);color:var(--ix-badge-success-contrast-color)}:host(.success.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-success-border-color)}:host(.success.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-success-border-color)}:host(.neutral:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-neutral-background)}:host(.neutral:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-neutral-background);color:var(--ix-badge-neutral-contrast-color)}:host(.neutral.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-neutral-border-color)}:host(.neutral.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);color:var(--ix-badge-default-color);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-neutral-border-color)}:host(.custom:not(.outline):not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-custom-background)}:host(.custom:not(.outline):not([type=status-icon])) .indicator{background-color:var(--ix-badge-custom-background);color:var(--ix-badge-custom-color)}:host(.custom.outline:not([type=status-icon])){--ix-badge-pulse-color:var(--ix-badge-custom-background)}:host(.custom.outline:not([type=status-icon])) .indicator{background-color:var(--ix-badge-outline-background);border:var(--ix-badge-indicator--border-width) solid var(--ix-badge-custom-background);color:var(--ix-badge-custom-color, var(--ix-badge-default-color))}:host(.border:not(.outline):not([type=status-icon])) .indicator{outline:var(--ix-badge-indicator--outline-width) solid var(--ix-badge-contrast-ring-color);outline-offset:0}:host ::slotted(.description){position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);clip-path:inset(50%);white-space:nowrap;border:0}:host(.enable-animation) .indicator{overflow:visible;position:relative}:host(.attached.enable-animation) .indicator{position:absolute}:host([type=status-icon].enable-animation) .indicator::after{content:"";position:absolute;inset:var(--ix-badge-pulse-status--inset);z-index:-1;pointer-events:none;border-radius:inherit;background-color:var(--ix-badge-pulse-color);transform:scale(0.521);transform-origin:center;opacity:0;animation:ix-badge-pulse-status var(--ix-badge-animation-duration) linear infinite}:host(.enable-animation:not([type=status-icon])) .indicator::after{content:"";position:absolute;inset:var(--ix-badge-pulse-border--inset);z-index:-1;pointer-events:none;box-sizing:border-box;background-color:transparent;border-style:solid;border-color:var(--ix-badge-pulse-color);border-width:0;border-radius:inherit;opacity:0;animation:ix-badge-pulse-border var(--ix-badge-animation-duration) linear infinite}@media (prefers-reduced-motion: reduce){:host(.enable-animation) .indicator::after{animation:none;opacity:0;transform:none;background-color:transparent;border-width:0}}@keyframes ix-badge-pulse-border{0%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0}5%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0.5}45%{opacity:0.4}80%{animation-timing-function:ease-out;inset:var(--ix-badge-pulse-border--inset--expanded);border-width:var(--ix-badge-pulse-border--border-width--expanded);opacity:0.1}90%{inset:var(--ix-badge-pulse-border--inset--end);border-width:var(--ix-badge-pulse-border--border-width--end);opacity:0}100%{inset:var(--ix-badge-pulse-border--inset);border-width:0;opacity:0}}@keyframes ix-badge-pulse-status{0%{transform:scale(0.521);opacity:0}5%{transform:scale(0.521);opacity:0.5;animation-timing-function:cubic-bezier(0.637, 0.43, 0.928, 1.008)}45%{transform:scale(1);opacity:0.4}80%{animation-timing-function:ease-out;transform:scale(1.6);opacity:0.1}90%{transform:scale(1.8);opacity:0}100%{transform:scale(0.521);opacity:0}}`;
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
   * For `status-icon`, glyphs exist for `critical`, `danger`, `error`, `warning`,
   * `caution`, `success`, and `information`; other values fall back to `information`.
   * Use `error` only with `status-icon` (other types map it to `danger`).
   *
   * @since 5.2.0
   */
  variant = "accent";
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
      return this.getResolvedType() === "status-icon" ? "error" : "danger";
    }
    return BADGE_VARIANTS.includes(this.variant) ? this.variant : "accent";
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
    return h(Host, { key: "c64396a79081f622b0b5542a94a673164283204c", ...this.hasAnchor ? {} : this.inheritAriaAttributes, class: {
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
    } }, h("slot", { key: "373264d9f6adb3f56fe236060684e160228a7cd1", name: BADGE_DESCRIPTION_SLOT }), h("div", { key: "caef316959a96cc55590591c9b74277d4da33ef8", class: "anchor" }, h("slot", { key: "bca592d5118ba6b73c71a3e42c6ce753e41676f9", ref: this.setSlotRef, onSlotchange: this.onSlotChange })), this.renderIndicator(type, variant, accessibleText, formattedLabel), this.getTooltip(formattedLabel));
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
const menuItemCss = () => `@charset "UTF-8";:host{--ix-menu-item-tab--outline-color--focus:var(--si-sys-color-effects-focus);--ix-menu-item--color--disabled:var(--si-sys-color-text-disabled);--ix-menu-item-primary--background--selected:var(--si-sys-color-background-0);--ix-menu-item-primary--border-color--selected:var(--si-sys-color-border-accent-hover);--ix-menu-item-primary--color:var(--si-sys-color-text-primary);--ix-menu-item-primary-icon--color:var(--si-sys-color-text-primary);--ix-menu-item-primary-icon--color--selected:var(--si-sys-color-text-primary);--ix-menu-item-secondary--background--selected:var(--si-sys-color-background-0)}:host{--ix-menu-item--height:var(--si-sys-sizing-size-100);--ix-menu-item-tab-icon--slot-width:var(--si-sys-sizing-icon-lg);--ix-menu-item--padding-inline:calc(     (         var(--si-sys-sizing-size-100) - var(             --ix-menu-item-tab-icon--slot-width           )       ) /       2   );--ix-menu-item-tab-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-menu-item-tab-icon--margin-inline:var(--si-sys-sizing-spacing-x-10);--ix-menu-item-tab-text--margin:0 var(--si-sys-sizing-spacing-x-60) 0     var(--si-sys-sizing-spacing-x-70);--ix-menu-item-bottom-tab-bottom--bottom-height:var(--si-sys-sizing-size-90);--ix-menu-item-tab--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-menu-item-tab-icon--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-menu-item-tab-icon--padding-right:var(--si-sys-sizing-spacing-x-40);--ix-menu-item-tab-text--margin-left:var(--si-sys-sizing-spacing-x-40);--ix-menu-item-tab--z-index:500;--ix-menu-item--outline-width--focus:var(--si-sys-sizing-focus-ring-width);--ix-menu-item-tab--outline-offset:calc(     -1 * var(--ix-menu-item--outline-width--focus)   );--ix-menu-item-notification--top:var(--si-sys-sizing-spacing-y-20);--ix-menu-item-notification--right:calc(     100% - var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-x-20)   );--ix-menu-item-tab--width:var(--si-sys-sizing-border-width-emphasis);--ix-menu-item-notification--padding-left:var(--si-sys-sizing-spacing-x-40)}:host{position:relative;display:block;cursor:pointer;height:var(--ix-menu-item-height, var(--ix-menu-item--height));min-height:var(--ix-menu-item-height, var(--ix-menu-item--height));max-height:var(--ix-menu-item-height, var(--ix-menu-item--height))}:host .tab{all:unset;box-sizing:border-box;display:flex;position:relative;align-items:center;height:var(--ix-menu-item-height, var(--ix-menu-item--height));width:100%;z-index:var(--ix-menu-item-tab--z-index);padding-left:var(--ix-menu-item--padding-inline)}:host .tab:not(.disabled):not(:disabled).hover,:host .tab:not(.disabled):not(:disabled):hover{background-color:var(--si-sys-color-background-hover)}:host .tab:not(.disabled):not(:disabled).active,:host .tab:not(.disabled):not(:disabled):active{background-color:var(--si-sys-color-background-active)}:host .tab-icon{block-size:var(--ix-menu-item-tab-icon--icon-size);color:var(--ix-menu-item-primary-icon--color);inline-size:var(--ix-menu-item-tab-icon--icon-size);min-block-size:var(--ix-menu-item-tab-icon--icon-size);min-inline-size:var(--ix-menu-item-tab-icon--icon-size);margin-inline:var(--ix-menu-item-tab-icon--margin-inline);position:relative;pointer-events:none}:host .tab:focus-visible{outline:var(--ix-menu-item--outline-width--focus) solid var(--ix-menu-item-tab--outline-color--focus);outline-offset:var(--ix-menu-item-tab--outline-offset)}:host .notification{position:absolute;top:var(--ix-menu-item-notification--top);right:var(--ix-menu-item-notification--right);flex-shrink:0}:host .tab-text{display:block;color:var(--ix-menu-item-primary--color);margin:var(--ix-menu-item-tab-text--margin);-moz-user-select:none;user-select:none;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(.active) .tab,:host(.selected) .tab{background-color:var(--ix-menu-item-primary--background--selected)}:host(.active) .tab::before,:host(.selected) .tab::before{content:"";background-color:var(--ix-menu-item-primary--border-color--selected);height:var(--ix-menu-item-height, var(--ix-menu-item--height));width:var(--ix-menu-item-tab--width);left:0;position:absolute}:host(.active) .tab>.glyph,:host(.selected) .tab>.glyph{color:var(--ix-menu-item-primary-icon--color--selected)}:host(.disabled){color:var(--ix-menu-item--color--disabled);pointer-events:none;cursor:default}:host(.disabled) .tab>.tab-icon{color:var(--ix-menu-item--color--disabled)}:host(.disabled) .tab-text{color:var(--ix-menu-item--color--disabled)}:host(.bottom-tab),:host([slot=bottom]){min-height:var(--ix-menu-item-bottom-tab-bottom--bottom-height);height:var(--ix-menu-item-bottom-tab-bottom--bottom-height);max-height:var(--ix-menu-item-bottom-tab-bottom--bottom-height)}:host(.bottom-tab) .tab,:host([slot=bottom]) .tab{height:var(--ix-menu-item-bottom-tab-bottom--bottom-height)}:host(.bottom-tab) .tab::before,:host([slot=bottom]) .tab::before{height:var(--ix-menu-item-bottom-tab-bottom--bottom-height);background-color:transparent}:host(.bottom-tab).active:hover,:host(.bottom-tab).selected:hover,:host([slot=bottom]).active:hover,:host([slot=bottom]).selected:hover{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.bottom-tab).active:active,:host(.bottom-tab).selected:active,:host([slot=bottom]).active:active,:host([slot=bottom]).selected:active{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.bottom-tab.active) .tab,:host(.bottom-tab.selected) .tab,:host(.active[slot=bottom]) .tab,:host(.selected[slot=bottom]) .tab{background-color:var(--ix-menu-item-secondary--background--selected)}:host(.tab-nested) .tab{flex-direction:row;padding-left:calc(var(--ix-menu-item-tab--padding-left) + var(--ix-menu-item--padding-inline))}:host(.tab-nested) .tab .notification{position:relative;top:0;right:0;padding-left:var(--ix-menu-item-notification--padding-left)}:host(.tab-nested) .tab .tab-icon{padding-left:var(--ix-menu-item-tab-icon--padding-left);padding-right:var(--ix-menu-item-tab-icon--padding-right)}:host(.tab-nested) .tab .tab-text{margin-left:var(--ix-menu-item-tab-text--margin-left)}:host(.tab-nested) .tab::before{display:none}`;
let sequenceId = 0;
const MenuItem = class extends Mixin(...DefaultMixins, InheritAriaAttributesMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  /**
   * Label of the menu item. Will also be used as tooltip text
   */
  label;
  /**
   * Move the Tab to a top position.
   */
  home = false;
  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   */
  bottom = false;
  /**
   * Name of the icon you want to display. Icon names can be resolved from the documentation {@link https://ix.siemens.io/docs/icon-library/icons}
   */
  icon;
  /**
   * Show notification count on tab
   */
  notifications;
  /**
   * State to display active
   */
  active = false;
  /**
   * Disable tab and remove event handlers
   */
  disabled = false;
  /**
   * Will be shown as tooltip text, if not provided menu text content will be used.
   *
   * @since 4.0.0
   */
  tooltipText;
  /**
   * Disable the tooltip for this menu item.
   *
   * @since 6.0.0
   */
  disableTooltip = false;
  /**
   * URL for the button link. When provided, the button will render as an anchor tag.
   *
   * The value is forwarded unchanged to the `href` of the native anchor. URL schemes such as
   * `javascript:` or `data:` are not rejected. Do not bind untrusted input; validate destinations
   * against an allowlist (for example `https:` and relative URLs).
   *
   * @since 4.0.0
   */
  href;
  /**
   * Specifies where to open the linked document when href is provided.
   *
   * @since 4.0.0
   */
  target = "_self";
  /**
   * Specifies the relationship between the current document and the linked document when href is provided.
   *
   * @since 4.0.0
   */
  rel;
  /** @internal */
  isCategory = false;
  /** @internal */
  menuCategoryLabel;
  get hostElement() {
    return getElement(this);
  }
  tooltip;
  menuExpanded = false;
  isInMenuContext = false;
  hostTabIndex = -1;
  /** @internal */
  async setTabIndex(value) {
    this.hostTabIndex = value;
  }
  internalItemId = createSequentialId("ix-menu-item-", sequenceId++);
  buttonRef = makeRef();
  isHostedInsideCategory = false;
  menuExpandedDisposer;
  observer = createMutationObserver(() => {
    this.setTooltip();
  });
  componentWillLoad() {
    super.componentWillLoad();
    this.isHostedInsideCategory = !!this.hostElement.closest("ix-menu-category");
    const rootNode = this.hostElement.getRootNode();
    const isInMenuShadowDOM = rootNode instanceof ShadowRoot && rootNode.host?.tagName?.toLowerCase() === "ix-menu";
    const directParent = this.hostElement.parentElement;
    const isMenuChild = !this.isHostedInsideCategory && (directParent?.tagName?.toLowerCase() === "ix-menu" || directParent?.tagName?.toLowerCase() === "a" && directParent?.parentElement?.tagName?.toLowerCase() === "ix-menu");
    this.isInMenuContext = isInMenuShadowDOM || isMenuChild;
    this.onIconChange();
    this.menuExpanded = menuController.nativeElement?.expand || false;
    this.menuExpandedDisposer = menuController.expandChange.on((expand) => this.menuExpanded = expand);
  }
  componentWillRender() {
    this.setTooltip();
  }
  setTooltip() {
    this.tooltip = this.tooltipText ?? this.label ?? this.hostElement.textContent ?? void 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.menuExpandedDisposer) {
      this.menuExpandedDisposer.dispose();
    }
  }
  onIconChange() {
    if (!this.isHostedInsideCategory && !this.hostElement.icon) {
      this.icon = iconDocument;
    }
  }
  handleClick(event) {
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  handleCategoryKeyDown(e) {
    if ((e.key === "Enter" || e.key === " ") && this.isHostedInsideCategory) {
      this.returnFocusToParentCategoryMenuItem();
    }
  }
  getAriaLabel() {
    if ("aria-label" in this.inheritAriaAttributes) {
      return this.inheritAriaAttributes["aria-label"];
    }
    const hasDistinctTooltip = this.tooltipText && this.tooltipText !== this.label && this.tooltipText !== this.hostElement.textContent;
    if (hasDistinctTooltip) {
      return `${this.label ?? this.menuCategoryLabel ?? this.hostElement.textContent ?? ""} ${this.tooltipText}`;
    }
    return void 0;
  }
  getEffectiveRole(externalRole) {
    const internalRole = this.isHostedInsideCategory || this.isCategory || this.isInMenuContext ? "menuitem" : void 0;
    return externalRole ?? internalRole;
  }
  returnFocusToParentCategoryMenuItem() {
    const categoryElement = this.hostElement.closest("ix-menu-category");
    const categoryMenuItem = categoryElement?.shadowRoot?.querySelector("ix-menu-item.category-parent");
    categoryElement?.dispatchEvent(new CustomEvent("ixMenuCategoryItemSelect", {
      bubbles: true,
      composed: true
    }));
    categoryMenuItem?.focus();
  }
  render() {
    let extendedAttributes = {};
    if (this.home) {
      extendedAttributes = {
        slot: "home"
      };
    }
    if (this.bottom) {
      extendedAttributes = {
        slot: "bottom"
      };
    }
    const { role: externalRole, ...inheritedA11yWithoutRole } = this.inheritAriaAttributes;
    const effectiveRole = this.getEffectiveRole(externalRole);
    const commonAttributes = {
      class: "tab",
      ...inheritedA11yWithoutRole
    };
    const menuContent = [
      this.icon && h("ix-icon", { key: "c125e771751c9073f3deadc869667dffb15a222c", class: "tab-icon", name: this.icon, "aria-hidden": "true" }),
      this.notifications ? h("ix-badge", { class: "notification", type: "counter", label: String(this.notifications) }) : null,
      h("span", { key: "acd18081b1fb7aa698508d38cacdb1570322db45", id: this.internalItemId, class: "tab-text typography-body" }, this.label, h("slot", { key: "658cdf00a6af021d848f2ceadbcb410ea2b54512" }))
    ];
    const ariaLabel = this.getAriaLabel();
    return h(Host, { key: "3e5aec0e7bf79c902171173eacdb07ae0936f3f4", class: {
      disabled: this.disabled,
      "home-tab": this.home,
      "bottom-tab": this.bottom,
      active: this.active,
      "tab-nested": this.isHostedInsideCategory,
      "ix-focusable": !this.disabled
    }, ...extendedAttributes }, this.href ? h("a", { ...commonAttributes, role: effectiveRole, href: this.disabled ? void 0 : this.href, target: this.target, rel: this.rel, tabIndex: this.isInMenuContext || this.isCategory ? this.hostTabIndex : void 0, ref: this.buttonRef, onKeyDown: (e) => this.handleCategoryKeyDown(e), "aria-disabled": a11yBoolean(this.disabled), "aria-label": ariaLabel, "aria-current": this.active ? "page" : void 0 }, menuContent) : h("button", { ...commonAttributes, role: effectiveRole, tabIndex: this.isInMenuContext || this.isCategory ? this.hostTabIndex : void 0, ref: this.buttonRef, onKeyDown: (e) => this.handleCategoryKeyDown(e), "aria-disabled": a11yBoolean(this.disabled), "aria-label": ariaLabel, "aria-current": this.active ? "page" : void 0 }, menuContent), !this.disableTooltip && h("ix-tooltip", { key: "fe2f3180e9b306b12ff64cbb25378be544cce14c", for: this.buttonRef.waitForCurrent(), placement: "right", showDelay: 1e3, interactive: false, "aria-hidden": "true", "aria-labelledby": this.internalItemId }, this.tooltip));
  }
  static get delegatesFocus() {
    return true;
  }
  static get watchers() {
    return {
      "icon": [{
        "onIconChange": 0
      }]
    };
  }
};
MenuItem.style = menuItemCss();
export {
  Badge as ix_badge,
  MenuItem as ix_menu_item
};
