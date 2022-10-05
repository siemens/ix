/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Event, h, Host, Prop, Watch } from '@stencil/core';
import Hyperlist from 'hyperlist';
import { renderDefaultItem } from '../tree-item/default-tree-item';
export class Tree {
  constructor() {
    /**
     * Selection and collapsed state management
     */
    this.context = {};
    this.toggleListener = new Map();
    this.itemClickListener = new Map();
    this.updates = new Map();
  }
  getVirtualizerOptions() {
    const list = this.buildTreeList(this.model[this.root]);
    return {
      itemHeight: 32,
      total: list.length,
      generate: (index) => {
        const item = list[index];
        const renderedTreeItem = this.host.querySelector(`[data-tree-node-id="${item.id}"]`);
        const context = this.getContext(item.id);
        if (renderedTreeItem) {
          renderedTreeItem.hasChildren = item.hasChildren;
          renderedTreeItem.context = Object.assign({}, context);
          if (this.updates.has(item.id)) {
            const doUpdate = this.updates.get(item.id);
            doUpdate(item, Object.assign({}, this.context));
          }
          return renderedTreeItem;
        }
        const update = (callback) => {
          this.updates.set(item.id, callback);
        };
        let innerElement = null;
        if (this.renderItem) {
          innerElement = this.renderItem(index, item, list, Object.assign({}, this.context), update);
        }
        if (innerElement === null) {
          innerElement = renderDefaultItem(item, context, update);
        }
        const el = innerElement;
        el.setAttribute('data-tree-node-id', item.id);
        el.style.paddingLeft = item.level + 'rem';
        el.style.paddingRight = '1rem';
        if (!this.itemClickListener.has(el)) {
          const itemClickCallback = (e) => {
            e.preventDefault();
            e.stopPropagation();
            Object.values(this.context).forEach((c) => (c.isSelected = false));
            const context = this.getContext(item.id);
            context.isSelected = true;
            this.setContext(item.id, context);
          };
          el.addEventListener('itemClick', itemClickCallback);
          this.itemClickListener.set(el, itemClickCallback);
        }
        if (item.hasChildren && !this.toggleListener.has(el)) {
          const toggleCallback = (e) => {
            e.preventDefault();
            e.stopPropagation();
            const context = this.getContext(list[index].id);
            context.isExpanded = !context.isExpanded;
            this.setContext(item.id, context);
          };
          el.addEventListener('toggle', toggleCallback);
          this.toggleListener.set(el, toggleCallback);
        }
        return el;
      },
    };
  }
  setContext(id, context) {
    this.context = Object.assign(Object.assign({}, this.context), { [id]: context });
    this.contextChange.emit(this.context);
  }
  getContext(id) {
    if (!this.context) {
      return {
        isExpanded: false,
        isSelected: false,
      };
    }
    if (!this.context[id]) {
      this.context[id] = {
        isExpanded: false,
        isSelected: false,
      };
    }
    return this.context[id];
  }
  buildTreeList(root, level = 0) {
    const itemList = [];
    if (root === null || root === void 0 ? void 0 : root.hasChildren) {
      const newLevel = level + 1;
      root.children.forEach((id) => {
        const item = this.model[id];
        const context = this.getContext(id);
        itemList.push(Object.assign(Object.assign({}, item), { level }));
        if (item.hasChildren && context.isExpanded) {
          itemList.push(...this.buildTreeList(item, newLevel));
        }
      });
    }
    return itemList;
  }
  componentDidLoad() {
    const config = this.getVirtualizerOptions();
    this.hyperlist = new Hyperlist(this.host, config);
    this.observer = new MutationObserver((records) => {
      let removed = [];
      records.forEach((record) => {
        removed = [...removed, ...Array.from(record.removedNodes)];
        record.addedNodes.forEach((an) => {
          const index = removed.indexOf(an);
          if (index >= 0) {
            removed.splice(index, 1);
          }
        });
      });
      this.nodeRemoved.emit(removed);
    });
    this.observer.observe(this.host, {
      childList: true,
    });
  }
  componentWillRender() {
    this.refreshList();
  }
  disconnectedCallback() {
    this.hyperlist.destroy();
    this.observer.disconnect();
  }
  modelChange() {
    this.refreshList();
  }
  refreshList() {
    if (this.hyperlist) {
      this.hyperlist.refresh(this.host, this.getVirtualizerOptions());
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "ix-tree"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["tree.css"]
  }; }
  static get styleUrls() { return {
    "$": ["tree.css"]
  }; }
  static get properties() { return {
    "root": {
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
        "text": "Initial root element will not be rendered"
      },
      "attribute": "root",
      "reflect": false
    },
    "model": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "TreeModel<any>",
        "resolved": "{ [x: string]: TreeItem<any>; }",
        "references": {
          "TreeModel": {
            "location": "import",
            "path": "./tree-model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Tree modal"
      }
    },
    "renderItem": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "<T = any>(\n    index: number,\n    data: T,\n    dataList: Array<T>,\n    context: TreeContext,\n    update: (callback: UpdateCallback) => void\n  ) => HTMLElement",
        "resolved": "<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement",
        "references": {
          "T": {
            "location": "global"
          },
          "Array": {
            "location": "global"
          },
          "TreeContext": {
            "location": "import",
            "path": "./tree-model"
          },
          "UpdateCallback": {
            "location": "import",
            "path": "./tree-model"
          },
          "HTMLElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Render function of tree items"
      }
    },
    "context": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "TreeContext",
        "resolved": "{ [x: string]: TreeItemContext; }",
        "references": {
          "TreeContext": {
            "location": "import",
            "path": "./tree-model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Selection and collapsed state management"
      },
      "defaultValue": "{}"
    }
  }; }
  static get events() { return [{
      "method": "contextChange",
      "name": "contextChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Context changed"
      },
      "complexType": {
        "original": "TreeContext",
        "resolved": "{ [x: string]: TreeItemContext; }",
        "references": {
          "TreeContext": {
            "location": "import",
            "path": "./tree-model"
          }
        }
      }
    }, {
      "method": "nodeRemoved",
      "name": "nodeRemoved",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emits removed nodes"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "model",
      "methodName": "modelChange"
    }]; }
}
