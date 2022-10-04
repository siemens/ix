'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const baseButton = require('./base-button-eb1d47db.js');
const popper = require('./popper-d7a0f999.js');

const splitButtonCss = ".sc-ix-split-button-h{display:block}";

const SplitButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.buttonClick = index.createEvent(this, "buttonClick", 7);
    /**
     * Color variant of button
     */
    this.variant = 'Primary';
    /**
     * Button outline variant
     */
    this.outline = false;
    /**
     * Button invisible
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button invisible
     */
    this.ghost = false;
    /**
     * Button icon
     */
    this.icon = '';
    /**
     * Splitbutton icon
     */
    this.splitIcon = 'context-menu';
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Placement of the dropdown
     */
    this.placement = 'bottom-start';
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-split-button-item'));
  }
  clickOutside(e) {
    if (!this.hostElement.contains(e.target)) {
      this.toggle = false;
    }
  }
  componentDidLoad() {
    const element = this.hostElement.querySelector('.anchor');
    this.popover = this.hostElement.querySelector('ix-dropdown');
    this.popperInstance = popper.createPopper(element, this.popover, {
      strategy: 'fixed',
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
        {
          name: 'flip',
          options: {
            padding: 8,
          },
        },
      ],
    });
    window.addEventListener('click', this.clickOutside.bind(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    window.removeEventListener('click', this.clickOutside.bind(this));
  }
  toggleDropdown() {
    this.toggle = !this.toggle;
  }
  render() {
    return (index.h(index.Host, { class: "btn-group" }, index.h("button", { class: baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? index.h("ix-icon", { name: this.icon }) : null, " ", this.label), index.h("button", { class: Object.assign(Object.assign({}, baseButton.getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
        anchor: true,
      }), onClick: () => this.toggleDropdown() }, index.h("ix-icon", { name: this.splitIcon }), index.h("ix-dropdown", { show: this.toggle }, index.h("slot", null)))));
  }
  get hostElement() { return index.getElement(this); }
};
SplitButton.style = splitButtonCss;

const splitButtonItemCss = ".sc-ix-split-button-item-h{display:block}";

const SplitButtonItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.itemClick = index.createEvent(this, "itemClick", 7);
  }
  render() {
    return (index.h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) }));
  }
  get hostElement() { return index.getElement(this); }
};
SplitButtonItem.style = splitButtonItemCss;

exports.ix_split_button = SplitButton;
exports.ix_split_button_item = SplitButtonItem;
