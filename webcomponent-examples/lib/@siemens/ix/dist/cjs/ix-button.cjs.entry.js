'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const baseButton = require('./base-button-eb1d47db.js');

const buttonCss = ".sc-ix-button-h{display:inline-block;height:2rem}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("button", { type: this.type, class: baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, false, false, this.selected, this.disabled) }, index.h("slot", null)));
  }
};
Button.style = buttonCss;

exports.ix_button = Button;
