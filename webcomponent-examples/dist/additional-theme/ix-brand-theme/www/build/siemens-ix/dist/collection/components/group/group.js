/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class Group {
  constructor() { this.suppressHeaderSelection = false; this.header = undefined; this.subHeader = undefined; this.collapsed = true; this.selected = undefined; this.index = undefined; this.expandOnHeaderClick = false; this.dropdownTriggerRef = undefined; }
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
      }, tabindex: "0" }, h("div", { class: "group-header-clickable", onClick: (e) => this.onHeaderClick(e) }, h("div", { class: "group-header-selection-indicator" }), h("ix-icon", { class: "btn-expand-header", name: `chevron-${this.collapsed ? 'right' : 'down'}-small`, onClick: (e) => this.onExpandClick(e) }), h("div", { class: "group-header-content" }, this.header ? (h("div", { class: "group-header-props-container" }, h("div", { class: "group-header-title" }, h("span", { title: this.header }, this.header)), h("div", { class: "group-subheader", title: this.subHeader }, this.subHeader))) : null, h("slot", { name: "header" }))), h("ix-group-context-menu", null, h("slot", { name: "dropdown" }))), h("div", { class: {
        'group-content': true,
        'd-none': this.collapsed,
      } }, h("slot", null)), h("div", { class: "d-none" }, h("ix-group-item", { class: "footer last", suppressSelection: true, focusable: false }, h("slot", { name: "footer" })))));
  }
  static get is() { return "ix-group"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["group.css"]
    };
  }
  static get properties() {
    return {
      "suppressHeaderSelection": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prevent header from being selectable"
        },
        "attribute": "suppress-header-selection",
        "reflect": false,
        "defaultValue": "false"
      },
      "header": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Group header"
        },
        "attribute": "header",
        "reflect": false
      },
      "subHeader": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Group header subtitle"
        },
        "attribute": "sub-header",
        "reflect": false
      },
      "collapsed": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether the group is collapsed or expanded. Defaults to true."
        },
        "attribute": "collapsed",
        "reflect": true,
        "defaultValue": "true"
      },
      "selected": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether the group is selected."
        },
        "attribute": "selected",
        "reflect": true
      },
      "index": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The index of the selected group entry.\nIf undefined no group item is selected."
        },
        "attribute": "index",
        "reflect": true
      },
      "expandOnHeaderClick": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Expand the group if the header is clicked"
        },
        "attribute": "expand-on-header-click",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "dropdownTriggerRef": {}
    };
  }
  static get events() {
    return [{
        "method": "selectGroup",
        "name": "selectGroup",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when whole group gets selected."
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }, {
        "method": "selectItem",
        "name": "selectItem",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits when group item gets selected."
        },
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        }
      }, {
        "method": "collapsedChanged",
        "name": "collapsedChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Group collapsed"
        },
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get listeners() {
    return [{
        "name": "keydown",
        "method": "onKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
