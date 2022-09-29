'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const baseButton = require('./base-button-eb1d47db.js');

const IconButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return Object.assign({ 'btn-icon-xs': this.size === '12', 'btn-icon-s': this.size === '16' }, baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled));
  }
  render() {
    return (index.h("button", { class: this.getIconButtonClasses(), type: this.type }, index.h("ix-icon", { size: this.size, name: this.icon, color: this.color }), index.h("div", { style: { display: 'none' } }, index.h("slot", null))));
  }
};

exports.ix_icon_button = IconButton;
