import { r as registerInstance, h } from './index-55cfd20d.js';
import { g as getButtonClasses } from './base-button-7bfb747f.js';

const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Button varaint
     */
    this.variant = 'Primary';
    /**
     * Outline button
     */
    this.outline = false;
    /**
     * Invisible button
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button with no background or outline
     */
    this.ghost = false;
    /**
     * Show button as selected. Should be used with outline or invisible
     */
    this.selected = false;
    /**
     * Disable the button
     */
    this.disabled = false;
    /**
     * Type of the button
     */
    this.type = 'button';
  }
  render() {
    return (h("button", { type: this.type, class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, h("slot", null)));
  }
};
Button.style = buttonCss;

export { Button as ix_button };
