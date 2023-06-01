'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const baseButton = require('./base-button-6ef79cb6.js');

const iconButtonCss = ".disabled.sc-ix-icon-button-h{pointer-events:none}.sc-ix-icon-button-h .icon-button.sc-ix-icon-button{padding:0;overflow:hidden}";

const IconButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = 'Secondary';
    this.outline = undefined;
    this.invisible = undefined;
    this.ghost = undefined;
    this.oval = undefined;
    this.icon = undefined;
    this.size = '24';
    this.color = undefined;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  getIconButtonClasses() {
    return Object.assign(Object.assign({}, baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, this.oval, this.selected, this.disabled)), { 'icon-button': true, 'btn-icon-12': this.size === '12', 'btn-icon-16': this.size === '16', 'btn-icon-32': this.size === '32' || this.size === '24' || !this.size });
  }
  render() {
    return (index.h(index.Host, { class: { disabled: this.disabled } }, index.h("button", { class: this.getIconButtonClasses(), type: this.type }, index.h("ix-icon", { size: this.size, name: this.icon, color: this.color }), index.h("div", { style: { display: 'none' } }, index.h("slot", null)))));
  }
};
IconButton.style = iconButtonCss;

exports.ix_icon_button = IconButton;
