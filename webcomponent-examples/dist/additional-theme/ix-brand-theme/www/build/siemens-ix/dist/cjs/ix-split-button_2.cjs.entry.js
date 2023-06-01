'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');
const baseButton = require('./base-button-6ef79cb6.js');

const splitButtonCss = ".sc-ix-split-button-h{display:inline-block}.sc-ix-split-button-h .middle-gap.sc-ix-split-button{gap:0.125rem}.sc-ix-split-button-h .left-button-border.sc-ix-split-button{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";

const SplitButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonClick = index.createEvent(this, "buttonClick", 7);
    this.variant = 'Primary';
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.label = undefined;
    this.icon = '';
    this.splitIcon = 'context-menu';
    this.disabled = false;
    this.placement = 'bottom-start';
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-split-button-item'));
  }
  linkTriggerRef() {
    if (this.triggerElement && this.dropdownElement) {
      this.dropdownElement.trigger = this.triggerElement;
    }
  }
  componentDidLoad() {
    this.linkTriggerRef();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: { 'btn-group': true, 'middle-gap': !this.outline } }, index.h("button", { class: Object.assign(Object.assign({}, baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled)), {
        'left-button-border': !this.outline,
      }), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? index.h("ix-icon", { name: this.icon }) : null, " ", this.label), index.h("button", { ref: (r) => (this.triggerElement = r), class: Object.assign(Object.assign({}, baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
        anchor: true,
      }) }, index.h("ix-icon", { name: this.splitIcon }))), index.h("ix-dropdown", { ref: (r) => (this.dropdownElement = r) }, index.h("slot", null))));
  }
  get hostElement() { return index.getElement(this); }
};
SplitButton.style = splitButtonCss;

const splitButtonItemCss = ".sc-ix-split-button-item-h{display:block}";

const SplitButtonItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClick = index.createEvent(this, "itemClick", 7);
    this.icon = undefined;
    this.label = undefined;
  }
  render() {
    return (index.h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() { return index.getElement(this); }
};
SplitButtonItem.style = splitButtonItemCss;

exports.ix_split_button = SplitButton;
exports.ix_split_button_item = SplitButtonItem;
