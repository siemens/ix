/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Prop, Watch } from '@stencil/core';
import anime from 'animejs';
export class Blind {
  constructor() {
    /**
     * Collapsed state
     */
    this.collapsed = false;
  }
  onHeaderClick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }
  componentDidLoad() {
    this.animateCollapse(this.collapsed);
  }
  get content() {
    return this.hostElement.querySelector('.blind-content');
  }
  animation(isCollapsed) {
    this.animateCollapse(isCollapsed);
  }
  animateCollapse(isCollapsed) {
    if (isCollapsed) {
      this.rotateChevronRight();
    }
    else {
      this.rotateChevronDown();
    }
  }
  rotateChevronDown() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: 'easeInOutSine',
      rotateZ: 90,
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: 'easeInOutSine',
      opacity: 1,
    });
  }
  rotateChevronRight() {
    anime({
      targets: this.chevronRef,
      duration: 150,
      easing: 'easeInOutSine',
      rotateZ: 0,
    });
    anime({
      targets: this.content,
      duration: 150,
      easing: 'easeInOutSine',
      opacity: 0,
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: {
          'blind-header': true,
          closed: this.collapsed,
        }, onClick: (e) => this.onHeaderClick(e) },
        h("span", { ref: (ref) => (this.chevronRef = ref), class: {
            glyph: true,
            'glyph-chevron-right-small': true,
          } }),
        h("div", { class: "blind-header-title" }, this.label !== undefined ? (h("span", { class: "blind-header-title-default" }, this.label)) : (h("slot", { name: "custom-header" })))),
      h("div", { class: {
          'blind-content': true,
          hide: this.collapsed,
        } },
        h("slot", null))));
  }
  static get is() { return "ix-blind"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["blind.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["blind.css"]
  }; }
  static get properties() { return {
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
        "text": "Collapsed state"
      },
      "attribute": "collapsed",
      "reflect": true,
      "defaultValue": "false"
    },
    "label": {
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
        "text": "Label of blind"
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "collapsedChange",
      "name": "collapsedChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Collapsed state changed"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get elementRef() { return "hostElement"; }
  static get watchers() { return [{
      "propName": "collapsed",
      "methodName": "animation"
    }]; }
}
