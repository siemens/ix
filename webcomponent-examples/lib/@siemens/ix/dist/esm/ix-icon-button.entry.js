import { r as registerInstance, h } from './index-55cfd20d.js';
import { g as getButtonClasses } from './base-button-7bfb747f.js';

const IconButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Variant of button
     */
    this.variant = 'Secondary';
    /**
     * Size of icon in button
     */
    this.size = '24';
    /**
     * Selected state only working with outline or invisible
     */
    this.selected = false;
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Type of the button
     */
    this.type = 'button';
  }
  getIconButtonClasses() {
    return Object.assign({ 'btn-icon-xs': this.size === '12', 'btn-icon-s': this.size === '16' }, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled));
  }
  render() {
    return (h("button", { class: this.getIconButtonClasses(), type: this.type }, h("ix-icon", { size: this.size, name: this.icon, color: this.color }), h("div", { style: { display: 'none' } }, h("slot", null))));
  }
};

export { IconButton as ix_icon_button };
