'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const baseButton = require('./base-button-6ef79cb6.js');

const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}.button-disabled.sc-ix-button-h{pointer-events:none}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.variant = 'Primary';
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.selected = false;
    this.disabled = false;
    this.type = 'button';
  }
  render() {
    return (index.h(index.Host, { class: {
        'button-disabled': this.disabled,
      } }, index.h("button", { type: this.type, class: baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, index.h("slot", null))));
  }
};
Button.style = buttonCss;

exports.ix_button = Button;
