import { M as Mixin, a as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-Ba1Wm6ph.js";
import { a as a11yBoolean } from "./a11y-B5k8YVR0-BOSd6BQK.js";
import { D as DefaultMixins } from "./component-CijOMCrv-wyGBYWjL.js";
import { I as InheritAriaAttributesMixin } from "./inherit-aria-attributes.mixin-BTSlCVHo-C2xfp10O.js";
import { H as HookValidationLifecycle } from "./validation-VVt5EFy0-D-NZ3wqB.js";
import "./focus-utilities-B8qsiZ4M-BHg4MFsh.js";
import "./shadow-dom-BIe8Nw9M-DxOF84uP.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const toggleCss = () => `:host{display:inline-flex;flex-direction:row;position:relative;min-height:1.5rem;max-height:calc(100% - 0.5rem);margin-block-start:0.25rem;margin-block-end:0.25rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .wrapper{display:flex;align-items:flex-start;width:100%;max-height:100%}:host .label{word-break:break-word;display:block;white-space:normal;overflow:hidden;margin-block-start:0.125rem;margin-inline-start:0.5rem;min-height:1rem}:host .switch{all:unset;position:relative;display:inline-block;width:3rem;min-width:3rem;max-width:3rem;height:1.5rem}:host .slider{position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--theme-switch-off--background);transition:var(--theme-default-time);border-radius:1.5rem;border:0.0625rem solid transparent}:host .slider:before{position:absolute;content:"";height:1.125rem;width:1.125rem;left:0.125rem;bottom:0.125rem;background-color:var(--theme-switch-thumb-off--background);transition:var(--theme-default-time);border-radius:50%;border:1px solid var(--theme-switch-thumb-off--border-color)}:host .switch.checked>.slider::before{background-color:var(--theme-switch-thumb-on--background);transform:translateX(1.5rem)}:host .switch>.slider{border-color:var(--theme-switch-off--border-color)}:host .switch:hover>.slider{background-color:var(--theme-switch-off--background--hover);border-color:var(--theme-switch-off--border-color--hover)}:host .switch:hover>.slider:before{background-color:var(--theme-switch-thumb-off--background--hover);border:1px solid var(--theme-switch-thumb-off--border-color--hover)}:host .switch:active>.slider{background-color:var(--theme-switch-off--background--active);border-color:var(--theme-switch-off--border-color--active)}:host .switch:active>.slider:before{background-color:var(--theme-switch-thumb-off--background--active);border:1px solid var(--theme-switch-thumb-off--border-color--active)}:host .switch.checked>.slider{background-color:var(--theme-switch-on--background);border-color:var(--theme-switch-on--border-color)}:host .switch.checked>.slider:before{border:1px solid var(--theme-switch-thumb-on--border-color)}:host .switch.checked:hover>.slider{background-color:var(--theme-switch-on--background--hover);border-color:var(--theme-switch-on--border-color--hover)}:host .switch.checked:hover>.slider:before{background-color:var(--theme-switch-thumb-on--background--hover);border:1px solid var(--theme-switch-thumb-on--border-color--hover)}:host .switch.checked:active>.slider{background-color:var(--theme-switch-on--background--active);border-color:var(--theme-switch-on--border-color--active)}:host .switch.checked:active>.slider:before{background-color:var(--theme-switch-thumb-on--background--active);border:1px solid var(--theme-switch-thumb-on--border-color--active)}:host .switch.indeterminate>.slider::before{transform:translateX(0.75rem)}:host(:not(.disabled)) .wrapper{cursor:pointer}:host(:focus),:host(:focus-visible){outline:none}:host(:not(.disabled):focus-visible) .switch>.slider{outline:0.0625rem solid var(--theme-color-focus-bdr);outline-offset:0.0625rem}:host(.disabled){pointer-events:none}:host(.disabled) .switch{opacity:0.5}:host(.disabled) .switch>.slider{background-color:var(--theme-switch-off--background--disabled)}:host(.disabled) .switch>.slider:before{background-color:var(--theme-switch-thumb-off--background--disabled)}:host(.disabled) .switch.checked>.slider{background-color:var(--theme-switch-on--background--disabled)}:host(.disabled) .switch.checked>.slider:before{background-color:var(--theme-switch-thumb-on--background--disabled)}:host(.disabled) .label{color:var(--theme-color-weak-text)}:host(.ix-valid:not(.disabled)) .slider{--theme-switch-off--background:var(     --theme-switch-off--background--valid   );--theme-switch-off--background--hover:var(     --theme-switch-off--background--valid--hover   );--theme-switch-off--background--active:var(     --theme-switch-off--background--valid--active   );--theme-switch-thumb-off--border-color:var(     --theme-switch-thumb-off--border-color--valid   );--theme-switch-thumb-off--border-color--hover:var(     --theme-switch-thumb-off--border-color--valid--hover   );--theme-switch-thumb-off--border-color--active:var(     --theme-switch-thumb-off--border-color--valid--active   );--theme-switch-thumb-off--background:var(     --theme-switch-thumb-off--background--valid   );--theme-switch-thumb-off--background--hover:var(     --theme-switch-thumb-off--background--valid--hover   );--theme-switch-thumb-off--background--active:var(     --theme-switch-thumb-off--background--valid--active   );--theme-switch-off--border-color:var(     --theme-switch-off--border-color--valid   );--theme-switch-off--border-color--hover:var(     --theme-switch-off--border-color--valid--hover   );--theme-switch-off--border-color--active:var(     --theme-switch-off--border-color--valid--active   );--theme-switch-on--background:var(     --theme-switch-on--background--valid   );--theme-switch-on--background--hover:var(     --theme-switch-on--background--valid--hover   );--theme-switch-on--background--active:var(     --theme-switch-on--background--valid--active   );--theme-switch-thumb-on--border-color:var(     --theme-switch-thumb-on--border-color--valid   );--theme-switch-thumb-on--border-color--hover:var(     --theme-switch-thumb-on--border-color--valid--hover   );--theme-switch-thumb-on--border-color--active:var(     --theme-switch-thumb-on--border-color--valid--active   );--theme-switch-thumb-on--background:var(     --theme-switch-thumb-on--background--valid   );--theme-switch-thumb-on--background--hover:var(     --theme-switch-thumb-on--background--valid--hover   );--theme-switch-thumb-on--background--active:var(     --theme-switch-thumb-on--background--valid--active   );--theme-switch-on--border-color:var(     --theme-switch-on--border-color--valid   );--theme-switch-on--border-color--hover:var(     --theme-switch-on--border-color--valid--hover   );--theme-switch-on--border-color--active:var(     --theme-switch-on--border-color--valid--active   );--theme-switch-mixed--background:var(     --theme-switch-mixed--background--valid   );--theme-switch-mixed--background--hover:var(     --theme-switch-mixed--background--valid--hover   );--theme-switch-mixed--background--active:var(     --theme-switch-mixed--background--valid--active   );--theme-switch-thumb-mixed--border-color:var(     --theme-switch-thumb-mixed--border-color--valid   );--theme-switch-thumb-mixed--border-color--hover:var(     --theme-switch-thumb-mixed--border-color--valid--hover   );--theme-switch-thumb-mixed--border-color--active:var(     --theme-switch-thumb-mixed--border-color--valid--active   );--theme-switch-thumb-mixed--background:var(     --theme-switch-thumb-mixed--background--valid   );--theme-switch-thumb-mixed--background--hover:var(     --theme-switch-thumb-mixed--background--valid--hover   );--theme-switch-thumb-mixed--background--active:var(     --theme-switch-thumb-mixed--background--valid--active   );--theme-switch-mixed--border-color:var(     --theme-switch-mixed--border-color--valid   );--theme-switch-mixed--border-color--hover:var(     --theme-switch-mixed--border-color--valid--hover   );--theme-switch-mixed--border-color--active:var(     --theme-switch-mixed--border-color--valid--active   )}:host(.ix-info:not(.disabled)) .slider{--theme-switch-off--background:var(     --theme-switch-off--background--info   );--theme-switch-off--background--hover:var(     --theme-switch-off--background--info--hover   );--theme-switch-off--background--active:var(     --theme-switch-off--background--info--active   );--theme-switch-thumb-off--border-color:var(     --theme-switch-thumb-off--border-color--info   );--theme-switch-thumb-off--border-color--hover:var(     --theme-switch-thumb-off--border-color--info--hover   );--theme-switch-thumb-off--border-color--active:var(     --theme-switch-thumb-off--border-color--info--active   );--theme-switch-thumb-off--background:var(     --theme-switch-thumb-off--background--info   );--theme-switch-thumb-off--background--hover:var(     --theme-switch-thumb-off--background--info--hover   );--theme-switch-thumb-off--background--active:var(     --theme-switch-thumb-off--background--info--active   );--theme-switch-off--border-color:var(     --theme-switch-off--border-color--info   );--theme-switch-off--border-color--hover:var(     --theme-switch-off--border-color--info--hover   );--theme-switch-off--border-color--active:var(     --theme-switch-off--border-color--info--active   );--theme-switch-on--background:var(     --theme-switch-on--background--info   );--theme-switch-on--background--hover:var(     --theme-switch-on--background--info--hover   );--theme-switch-on--background--active:var(     --theme-switch-on--background--info--active   );--theme-switch-thumb-on--border-color:var(     --theme-switch-thumb-on--border-color--info   );--theme-switch-thumb-on--border-color--hover:var(     --theme-switch-thumb-on--border-color--info--hover   );--theme-switch-thumb-on--border-color--active:var(     --theme-switch-thumb-on--border-color--info--active   );--theme-switch-thumb-on--background:var(     --theme-switch-thumb-on--background--info   );--theme-switch-thumb-on--background--hover:var(     --theme-switch-thumb-on--background--info--hover   );--theme-switch-thumb-on--background--active:var(     --theme-switch-thumb-on--background--info--active   );--theme-switch-on--border-color:var(     --theme-switch-on--border-color--info   );--theme-switch-on--border-color--hover:var(     --theme-switch-on--border-color--info--hover   );--theme-switch-on--border-color--active:var(     --theme-switch-on--border-color--info--active   );--theme-switch-mixed--background:var(     --theme-switch-mixed--background--info   );--theme-switch-mixed--background--hover:var(     --theme-switch-mixed--background--info--hover   );--theme-switch-mixed--background--active:var(     --theme-switch-mixed--background--info--active   );--theme-switch-thumb-mixed--border-color:var(     --theme-switch-thumb-mixed--border-color--info   );--theme-switch-thumb-mixed--border-color--hover:var(     --theme-switch-thumb-mixed--border-color--info--hover   );--theme-switch-thumb-mixed--border-color--active:var(     --theme-switch-thumb-mixed--border-color--info--active   );--theme-switch-thumb-mixed--background:var(     --theme-switch-thumb-mixed--background--info   );--theme-switch-thumb-mixed--background--hover:var(     --theme-switch-thumb-mixed--background--info--hover   );--theme-switch-thumb-mixed--background--active:var(     --theme-switch-thumb-mixed--background--info--active   );--theme-switch-mixed--border-color:var(     --theme-switch-mixed--border-color--info   );--theme-switch-mixed--border-color--hover:var(     --theme-switch-mixed--border-color--info--hover   );--theme-switch-mixed--border-color--active:var(     --theme-switch-mixed--border-color--info--active   )}:host(.ix-warning:not(.disabled)) .slider{--theme-switch-off--background:var(     --theme-switch-off--background--warning   );--theme-switch-off--background--hover:var(     --theme-switch-off--background--warning--hover   );--theme-switch-off--background--active:var(     --theme-switch-off--background--warning--active   );--theme-switch-thumb-off--border-color:var(     --theme-switch-thumb-off--border-color--warning   );--theme-switch-thumb-off--border-color--hover:var(     --theme-switch-thumb-off--border-color--warning--hover   );--theme-switch-thumb-off--border-color--active:var(     --theme-switch-thumb-off--border-color--warning--active   );--theme-switch-thumb-off--background:var(     --theme-switch-thumb-off--background--warning   );--theme-switch-thumb-off--background--hover:var(     --theme-switch-thumb-off--background--warning--hover   );--theme-switch-thumb-off--background--active:var(     --theme-switch-thumb-off--background--warning--active   );--theme-switch-off--border-color:var(     --theme-switch-off--border-color--warning   );--theme-switch-off--border-color--hover:var(     --theme-switch-off--border-color--warning--hover   );--theme-switch-off--border-color--active:var(     --theme-switch-off--border-color--warning--active   );--theme-switch-on--background:var(     --theme-switch-on--background--warning   );--theme-switch-on--background--hover:var(     --theme-switch-on--background--warning--hover   );--theme-switch-on--background--active:var(     --theme-switch-on--background--warning--active   );--theme-switch-thumb-on--border-color:var(     --theme-switch-thumb-on--border-color--warning   );--theme-switch-thumb-on--border-color--hover:var(     --theme-switch-thumb-on--border-color--warning--hover   );--theme-switch-thumb-on--border-color--active:var(     --theme-switch-thumb-on--border-color--warning--active   );--theme-switch-thumb-on--background:var(     --theme-switch-thumb-on--background--warning   );--theme-switch-thumb-on--background--hover:var(     --theme-switch-thumb-on--background--warning--hover   );--theme-switch-thumb-on--background--active:var(     --theme-switch-thumb-on--background--warning--active   );--theme-switch-on--border-color:var(     --theme-switch-on--border-color--warning   );--theme-switch-on--border-color--hover:var(     --theme-switch-on--border-color--warning--hover   );--theme-switch-on--border-color--active:var(     --theme-switch-on--border-color--warning--active   );--theme-switch-mixed--background:var(     --theme-switch-mixed--background--warning   );--theme-switch-mixed--background--hover:var(     --theme-switch-mixed--background--warning--hover   );--theme-switch-mixed--background--active:var(     --theme-switch-mixed--background--warning--active   );--theme-switch-thumb-mixed--border-color:var(     --theme-switch-thumb-mixed--border-color--warning   );--theme-switch-thumb-mixed--border-color--hover:var(     --theme-switch-thumb-mixed--border-color--warning--hover   );--theme-switch-thumb-mixed--border-color--active:var(     --theme-switch-thumb-mixed--border-color--warning--active   );--theme-switch-thumb-mixed--background:var(     --theme-switch-thumb-mixed--background--warning   );--theme-switch-thumb-mixed--background--hover:var(     --theme-switch-thumb-mixed--background--warning--hover   );--theme-switch-thumb-mixed--background--active:var(     --theme-switch-thumb-mixed--background--warning--active   );--theme-switch-mixed--border-color:var(     --theme-switch-mixed--border-color--warning   );--theme-switch-mixed--border-color--hover:var(     --theme-switch-mixed--border-color--warning--hover   );--theme-switch-mixed--border-color--active:var(     --theme-switch-mixed--border-color--warning--active   )}:host(.ix-invalid--required:not(.disabled)) .slider{--theme-switch-off--background:var(     --theme-switch-off--background--invalid   );--theme-switch-off--background--hover:var(     --theme-switch-off--background--invalid--hover   );--theme-switch-off--background--active:var(     --theme-switch-off--background--invalid--active   );--theme-switch-thumb-off--border-color:var(     --theme-switch-thumb-off--border-color--invalid   );--theme-switch-thumb-off--border-color--hover:var(     --theme-switch-thumb-off--border-color--invalid--hover   );--theme-switch-thumb-off--border-color--active:var(     --theme-switch-thumb-off--border-color--invalid--active   );--theme-switch-thumb-off--background:var(     --theme-switch-thumb-off--background--invalid   );--theme-switch-thumb-off--background--hover:var(     --theme-switch-thumb-off--background--invalid--hover   );--theme-switch-thumb-off--background--active:var(     --theme-switch-thumb-off--background--invalid--active   );--theme-switch-off--border-color:var(     --theme-switch-off--border-color--invalid   );--theme-switch-off--border-color--hover:var(     --theme-switch-off--border-color--invalid--hover   );--theme-switch-off--border-color--active:var(     --theme-switch-off--border-color--invalid--active   );--theme-switch-on--background:var(     --theme-switch-on--background--invalid   );--theme-switch-on--background--hover:var(     --theme-switch-on--background--invalid--hover   );--theme-switch-on--background--active:var(     --theme-switch-on--background--invalid--active   );--theme-switch-thumb-on--border-color:var(     --theme-switch-thumb-on--border-color--invalid   );--theme-switch-thumb-on--border-color--hover:var(     --theme-switch-thumb-on--border-color--invalid--hover   );--theme-switch-thumb-on--border-color--active:var(     --theme-switch-thumb-on--border-color--invalid--active   );--theme-switch-thumb-on--background:var(     --theme-switch-thumb-on--background--invalid   );--theme-switch-thumb-on--background--hover:var(     --theme-switch-thumb-on--background--invalid--hover   );--theme-switch-thumb-on--background--active:var(     --theme-switch-thumb-on--background--invalid--active   );--theme-switch-on--border-color:var(     --theme-switch-on--border-color--invalid   );--theme-switch-on--border-color--hover:var(     --theme-switch-on--border-color--invalid--hover   );--theme-switch-on--border-color--active:var(     --theme-switch-on--border-color--invalid--active   );--theme-switch-mixed--background:var(     --theme-switch-mixed--background--invalid   );--theme-switch-mixed--background--hover:var(     --theme-switch-mixed--background--invalid--hover   );--theme-switch-mixed--background--active:var(     --theme-switch-mixed--background--invalid--active   );--theme-switch-thumb-mixed--border-color:var(     --theme-switch-thumb-mixed--border-color--invalid   );--theme-switch-thumb-mixed--border-color--hover:var(     --theme-switch-thumb-mixed--border-color--invalid--hover   );--theme-switch-thumb-mixed--border-color--active:var(     --theme-switch-thumb-mixed--border-color--invalid--active   );--theme-switch-thumb-mixed--background:var(     --theme-switch-thumb-mixed--background--invalid   );--theme-switch-thumb-mixed--background--hover:var(     --theme-switch-thumb-mixed--background--invalid--hover   );--theme-switch-thumb-mixed--background--active:var(     --theme-switch-thumb-mixed--background--invalid--active   );--theme-switch-mixed--border-color:var(     --theme-switch-mixed--border-color--invalid   );--theme-switch-mixed--border-color--hover:var(     --theme-switch-mixed--border-color--invalid--hover   );--theme-switch-mixed--border-color--active:var(     --theme-switch-mixed--border-color--invalid--active   )}:host(.ix-invalid:not(.disabled)) .slider{--theme-switch-off--background:var(     --theme-switch-off--background--invalid   );--theme-switch-off--background--hover:var(     --theme-switch-off--background--invalid--hover   );--theme-switch-off--background--active:var(     --theme-switch-off--background--invalid--active   );--theme-switch-thumb-off--border-color:var(     --theme-switch-thumb-off--border-color--invalid   );--theme-switch-thumb-off--border-color--hover:var(     --theme-switch-thumb-off--border-color--invalid--hover   );--theme-switch-thumb-off--border-color--active:var(     --theme-switch-thumb-off--border-color--invalid--active   );--theme-switch-thumb-off--background:var(     --theme-switch-thumb-off--background--invalid   );--theme-switch-thumb-off--background--hover:var(     --theme-switch-thumb-off--background--invalid--hover   );--theme-switch-thumb-off--background--active:var(     --theme-switch-thumb-off--background--invalid--active   );--theme-switch-off--border-color:var(     --theme-switch-off--border-color--invalid   );--theme-switch-off--border-color--hover:var(     --theme-switch-off--border-color--invalid--hover   );--theme-switch-off--border-color--active:var(     --theme-switch-off--border-color--invalid--active   );--theme-switch-on--background:var(     --theme-switch-on--background--invalid   );--theme-switch-on--background--hover:var(     --theme-switch-on--background--invalid--hover   );--theme-switch-on--background--active:var(     --theme-switch-on--background--invalid--active   );--theme-switch-thumb-on--border-color:var(     --theme-switch-thumb-on--border-color--invalid   );--theme-switch-thumb-on--border-color--hover:var(     --theme-switch-thumb-on--border-color--invalid--hover   );--theme-switch-thumb-on--border-color--active:var(     --theme-switch-thumb-on--border-color--invalid--active   );--theme-switch-thumb-on--background:var(     --theme-switch-thumb-on--background--invalid   );--theme-switch-thumb-on--background--hover:var(     --theme-switch-thumb-on--background--invalid--hover   );--theme-switch-thumb-on--background--active:var(     --theme-switch-thumb-on--background--invalid--active   );--theme-switch-on--border-color:var(     --theme-switch-on--border-color--invalid   );--theme-switch-on--border-color--hover:var(     --theme-switch-on--border-color--invalid--hover   );--theme-switch-on--border-color--active:var(     --theme-switch-on--border-color--invalid--active   );--theme-switch-mixed--background:var(     --theme-switch-mixed--background--invalid   );--theme-switch-mixed--background--hover:var(     --theme-switch-mixed--background--invalid--hover   );--theme-switch-mixed--background--active:var(     --theme-switch-mixed--background--invalid--active   );--theme-switch-thumb-mixed--border-color:var(     --theme-switch-thumb-mixed--border-color--invalid   );--theme-switch-thumb-mixed--border-color--hover:var(     --theme-switch-thumb-mixed--border-color--invalid--hover   );--theme-switch-thumb-mixed--border-color--active:var(     --theme-switch-thumb-mixed--border-color--invalid--active   );--theme-switch-thumb-mixed--background:var(     --theme-switch-thumb-mixed--background--invalid   );--theme-switch-thumb-mixed--background--hover:var(     --theme-switch-thumb-mixed--background--invalid--hover   );--theme-switch-thumb-mixed--background--active:var(     --theme-switch-thumb-mixed--background--invalid--active   );--theme-switch-mixed--border-color:var(     --theme-switch-mixed--border-color--invalid   );--theme-switch-mixed--border-color--hover:var(     --theme-switch-mixed--border-color--invalid--hover   );--theme-switch-mixed--border-color--active:var(     --theme-switch-mixed--border-color--invalid--active   )}`;
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
    return h(Host, { key: "374f4fe4b28fea9b334b1d6623613b9b59e42f94", ...this.inheritAriaAttributes, role: "switch", tabindex: this.disabled ? -1 : 0, "aria-label": ariaLabel, "aria-checked": ariaChecked, "aria-disabled": a11yBoolean(this.disabled), "aria-required": a11yBoolean(this.required), class: {
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
    } }, h("div", { key: "6ad38042cde688637dea43b7beb1dc071c3d8622", class: "wrapper" }, h("div", { key: "dc4eb6b66292319c4ace52249f642ae125bd09c0", class: {
      switch: true,
      checked: this.checked,
      indeterminate: this.indeterminate
    }, "aria-hidden": "true" }, h("div", { key: "c18aefe53e7a5eaa8d02b3a3c523fe613114a6af", class: "slider" })), !this.hideText && h("ix-typography", { key: "1ffdc3f62940b3963c7894c26986db0b128475ec", class: "label", "aria-hidden": "true" }, toggleText)));
  }
  static get formAssociated() {
    return true;
  }
  static get watchers() {
    return {
      "role": [{
        "ariaAttributeChanged": 0
      }],
      "aria-activedescendant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-atomic": [{
        "ariaAttributeChanged": 0
      }],
      "aria-autocomplete": [{
        "ariaAttributeChanged": 0
      }],
      "aria-braillelabel": [{
        "ariaAttributeChanged": 0
      }],
      "aria-brailleroledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-busy": [{
        "ariaAttributeChanged": 0
      }],
      "aria-checked": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-colspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-controls": [{
        "ariaAttributeChanged": 0
      }],
      "aria-current": [{
        "ariaAttributeChanged": 0
      }],
      "aria-describedby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-description": [{
        "ariaAttributeChanged": 0
      }],
      "aria-details": [{
        "ariaAttributeChanged": 0
      }],
      "aria-disabled": [{
        "ariaAttributeChanged": 0
      }],
      "aria-errormessage": [{
        "ariaAttributeChanged": 0
      }],
      "aria-expanded": [{
        "ariaAttributeChanged": 0
      }],
      "aria-flowto": [{
        "ariaAttributeChanged": 0
      }],
      "aria-haspopup": [{
        "ariaAttributeChanged": 0
      }],
      "aria-hidden": [{
        "ariaAttributeChanged": 0
      }],
      "aria-invalid": [{
        "ariaAttributeChanged": 0
      }],
      "aria-keyshortcuts": [{
        "ariaAttributeChanged": 0
      }],
      "aria-label": [{
        "ariaAttributeChanged": 0
      }],
      "aria-labelledby": [{
        "ariaAttributeChanged": 0
      }],
      "aria-level": [{
        "ariaAttributeChanged": 0
      }],
      "aria-live": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiline": [{
        "ariaAttributeChanged": 0
      }],
      "aria-multiselectable": [{
        "ariaAttributeChanged": 0
      }],
      "aria-orientation": [{
        "ariaAttributeChanged": 0
      }],
      "aria-owns": [{
        "ariaAttributeChanged": 0
      }],
      "aria-placeholder": [{
        "ariaAttributeChanged": 0
      }],
      "aria-posinset": [{
        "ariaAttributeChanged": 0
      }],
      "aria-pressed": [{
        "ariaAttributeChanged": 0
      }],
      "aria-readonly": [{
        "ariaAttributeChanged": 0
      }],
      "aria-relevant": [{
        "ariaAttributeChanged": 0
      }],
      "aria-required": [{
        "ariaAttributeChanged": 0
      }],
      "aria-roledescription": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowcount": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindex": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowindextext": [{
        "ariaAttributeChanged": 0
      }],
      "aria-rowspan": [{
        "ariaAttributeChanged": 0
      }],
      "aria-selected": [{
        "ariaAttributeChanged": 0
      }],
      "aria-setsize": [{
        "ariaAttributeChanged": 0
      }],
      "aria-sort": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemax": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuemin": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuenow": [{
        "ariaAttributeChanged": 0
      }],
      "aria-valuetext": [{
        "ariaAttributeChanged": 0
      }],
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
