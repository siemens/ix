import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './dropdown.js';
import { d as defineCustomElement$4 } from './group-item.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './icon-button.js';

const groupCss = ".sc-ix-group-h{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}.sc-ix-group-h .group-header-context-button.sc-ix-group{display:block;position:relative;margin-top:5px;margin-right:5px;margin-left:auto}.sc-ix-group-h .group-header-context-button.sc-ix-group ix-icon-button.sc-ix-group::after{display:none}.sc-ix-group-h .group-header.sc-ix-group{height:4rem;min-height:4rem;max-height:4rem;border-radius:0.25rem;border:var(--theme-std-bdr-1);display:flex;background-color:var(--theme-group-item--background);border:1px solid var(--theme-group-item--border-color);color:var(--theme-group-header--color);cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover);border-color:var(--theme-group-item--border-color--hover)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active);border-color:var(--theme-group-item--border-color--active)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):focus-visible{border-color:var(--focus--border-color);border-radius:var(--theme-group--border-radius--focus);outline:none}.sc-ix-group-h .group-header-clickable.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}.sc-ix-group-h .group-header.expand.sc-ix-group{border-bottom-left-radius:0;border-bottom-right-radius:0}.sc-ix-group-h .group-header-selection-indicator.sc-ix-group{width:0.25rem}.sc-ix-group-h .group-header-content.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;padding:0.5rem;padding-left:0;width:100%}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-props-container.sc-ix-group{width:100%}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group>*.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.sc-ix-group-h .group-header-content.sc-ix-group .group-subheader.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}.sc-ix-group-h .expand-icon.sc-ix-group{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}.sc-ix-group-h .btn-expand-header.sc-ix-group{margin:0.5rem;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.sc-ix-group-h .group-content.sc-ix-group{display:flex;flex-direction:column}.sc-ix-group-h .group-header.selected.sc-ix-group{border:var(--theme-primary-bdr-2);background-color:var(--theme-group-item--background--selected)}.sc-ix-group-h .group-header.selected.sc-ix-group .group-header-selection-indicator.sc-ix-group{background-color:var(--theme-color-input-focus)}.sc-ix-group-h .footer.sc-ix-group{height:auto;min-height:0}";

const Group = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.selectGroup = createEvent(this, "selectGroup", 7);
    this.selectItem = createEvent(this, "selectItem", 7);
    this.collapsedChanged = createEvent(this, "collapsedChanged", 7);
    /**
     * Prevent header from being selectable
     */
    this.suppressHeaderSelection = false;
    /**
     * Whether the group is collapsed or expanded. Defaults to true.
     */
    this.collapsed = true;
    /**
     * Expand the group if the header is clicked
     */
    this.expandOnHeaderClick = false;
  }
  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-group-dropdown-item'));
  }
  get groupItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-group-item:not(.footer)'));
  }
  get groupContent() {
    return this.hostElement.querySelector('.group-content');
  }
  get footer() {
    return this.hostElement.querySelector('.footer');
  }
  async onKeyDown(event) {
    const targetElement = event.target;
    if (!this.hostElement.contains(targetElement)) {
      return;
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      if (targetElement.classList.contains('group-header')) {
        if (this.suppressHeaderSelection) {
          this.collapsed = !this.collapsed;
        }
        else {
          this.selected = !this.selected;
        }
      }
      else if (targetElement.matches('ix-group-item')) {
        const groupItem = targetElement;
        groupItem.selected = !groupItem.selected;
      }
    }
  }
  onExpandClick(event) {
    const wasCollapsed = this.collapsed;
    this.collapsed = !this.collapsed;
    if (!wasCollapsed && this.index !== undefined) {
      this.index = undefined;
      this.setGroupSelection(true);
    }
    this.collapsedChanged.emit(this.collapsed);
    event.stopPropagation();
  }
  onHeaderClick(event) {
    this.setGroupSelection(!this.selected);
    if (this.suppressHeaderSelection) {
      this.onExpandClick(event);
    }
  }
  onItemClick(index) {
    if (index === this.index) {
      this.index = undefined;
      this.selectItem.emit(undefined);
    }
    else {
      this.index = index;
      this.selectItem.emit(index);
    }
    this.setGroupSelection(false);
  }
  setGroupSelection(selection) {
    if (!this.suppressHeaderSelection) {
      this.selected = selection;
      this.selectGroup.emit(this.selected);
    }
  }
  componentWillRender() {
    var _a;
    this.groupItems.forEach((item, index) => {
      var _a;
      item.selected = index === this.index;
      item.index = index;
      item.classList.remove('last');
      if (!((_a = this.footer) === null || _a === void 0 ? void 0 : _a.children.length) &&
        index === this.groupItems.length - 1) {
        item.classList.add('last');
      }
    });
    if (((_a = this.footer) === null || _a === void 0 ? void 0 : _a.childElementCount) > 1) {
      this.groupContent.appendChild(this.footer);
    }
  }
  componentDidLoad() {
    this.groupContent.addEventListener('selectedChanged', (evt) => {
      this.onItemClick(evt.detail.index);
    });
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'group-header': true,
        expand: !this.collapsed,
        selected: this.selected,
      }, tabindex: "0" }, h("div", { class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { class: "group-header-selection-indicator" }), h("ix-icon", { class: "btn-expand-header", name: `chevron-${this.collapsed ? 'right' : 'down'}-small`, onClick: (e) => this.onExpandClick(e) }), h("div", { class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { name: "header" }))), h("div", { class: { 'group-header-context-button': true, 'd-none': false } }, h("ix-icon-button", { ref: (ref) => (this.dropdownTriggerRef = ref), size: "24", ghost: true, icon: "context-menu" }), h("ix-dropdown", { trigger: this.dropdownTriggerRef }, h("slot", { name: "dropdown" })))), h("div", { class: {
        'group-content': true,
        'd-none': this.collapsed,
      } }, h("slot", null)), h("div", { class: "d-none" }, h("ix-group-item", { class: "footer last", suppressSelection: true, focusable: false }, h("slot", { name: "footer" })))));
  }
  get hostElement() { return this; }
  static get style() { return groupCss; }
}, [6, "ix-group", {
    "suppressHeaderSelection": [4, "suppress-header-selection"],
    "header": [1],
    "subHeader": [1, "sub-header"],
    "collapsed": [1540],
    "selected": [1540],
    "index": [1538],
    "expandOnHeaderClick": [4, "expand-on-header-click"],
    "dropdownTriggerRef": [32]
  }, [[8, "keydown", "onKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-group", "ix-dropdown", "ix-group-item", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Group);
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-group-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxGroup = Group;
const defineCustomElement = defineCustomElement$1;

export { IxGroup, defineCustomElement };
