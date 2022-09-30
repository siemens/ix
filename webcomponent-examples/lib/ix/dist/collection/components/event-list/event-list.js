/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';
import { convertToRemString } from '../utils/rwd.util';
export class EventList {
  constructor() {
    this.mutationObserver = createMutationObserver(this.onMutation.bind(this));
    /**
     * Determines the height of list items.
     * This can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.
     * In case a number is supplied it will get converted to rem internally.
     * Defaults to 'S'.
     */
    this.itemHeight = 'S';
    /**
     * Make event-list items more compact
     */
    this.compact = false;
    /**
     * Animate state change transitions. Defaults to 'true'.
     */
    this.animated = true;
  }
  componentDidLoad() {
    if (this.animated) {
      this.triggerFadeIn();
    }
    if (typeof this.itemHeight === 'number') {
      const height = convertToRemString(this.itemHeight);
      this.el.querySelectorAll('.ix-event-list-item').forEach((item) => {
        item.classList.add('d-flex');
        this.setCustomHeight(item, height);
      });
    }
    this.mutationObserver.observe(this.el, { childList: true, subtree: true });
  }
  onMutation(mutationRecords) {
    this.triggerFadeOut().then(() => {
      if (typeof this.itemHeight === 'number') {
        const height = convertToRemString(this.itemHeight);
        mutationRecords
          .filter((mutation) => mutation.type === 'childList')
          .forEach((mutation) => mutation.addedNodes.forEach((item) => {
          var _a;
          const itemHtml = item;
          if (!((_a = itemHtml.classList) === null || _a === void 0 ? void 0 : _a.contains('ix-event-list-item'))) {
            return;
          }
          itemHtml.classList.add('d-flex');
          this.setCustomHeight(itemHtml, height);
        }));
      }
      this.triggerFadeIn();
    });
  }
  setCustomHeight(item, height) {
    item.style.height = height;
    item.style.maxHeight = height;
  }
  triggerFadeOut() {
    if (!this.animated) {
      return Promise.resolve();
    }
    const keyframes = [
      {
        opacity: 1,
        easing: 'ease-in',
      },
      { opacity: 0 },
    ];
    const listElement = this.el.querySelector('ul');
    return listElement.animate(keyframes, {
      duration: EventList.fadeOutDuration,
    }).finished;
  }
  triggerFadeIn() {
    if (!this.animated) {
      return;
    }
    const listItems = this.el.querySelectorAll('.ix-event-list-item');
    listItems.forEach((e, i) => {
      const delay = i * 80;
      const offset = delay / (delay + EventList.fadeInDuration);
      const keyframes = [
        { opacity: 0 },
        { opacity: 0, easing: 'ease-out', offset },
        { opacity: 1 },
      ];
      const options = {
        duration: EventList.fadeInDuration + delay,
        iterations: 1,
      };
      e.animate(keyframes, options);
    });
  }
  render() {
    return (h(Host, { class: {
        'item-size-s': this.itemHeight === 'S',
        'item-size-l': this.itemHeight === 'L',
        compact: this.compact,
        chevron: this.chevron,
      } },
      h("ul", null,
        h("slot", null))));
  }
  static get is() { return "ix-event-list"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["event-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["event-list.css"]
  }; }
  static get properties() { return {
    "itemHeight": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "'S' | 'L' | number",
        "resolved": "\"L\" | \"S\" | number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines the height of list items.\nThis can either be one of two predefined sizes ('S' or 'L') or an absolute pixel value.\nIn case a number is supplied it will get converted to rem internally.\nDefaults to 'S'."
      },
      "attribute": "item-height",
      "reflect": false,
      "defaultValue": "'S'"
    },
    "compact": {
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
        "text": "Make event-list items more compact"
      },
      "attribute": "compact",
      "reflect": false,
      "defaultValue": "false"
    },
    "animated": {
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
        "text": "Animate state change transitions. Defaults to 'true'."
      },
      "attribute": "animated",
      "reflect": false,
      "defaultValue": "true"
    },
    "chevron": {
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
        "text": "Display a chevron icon in list items. Defaults to 'false'"
      },
      "attribute": "chevron",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
EventList.fadeOutDuration = 50;
EventList.fadeInDuration = 150;
