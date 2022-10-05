/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import { Grid } from 'ag-grid-community';
export class IxAgGrid {
  componentDidLoad() {
    this.initializeGrid();
  }
  initializeGrid() {
    if (!this.gridOptions) {
      return;
    }
    if (!this.grid) {
      const gridDiv = this.host.querySelector('div.ag-theme-ix');
      this.grid = new Grid(gridDiv, this.gridOptions);
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.grid) === null || _a === void 0 ? void 0 : _a.destroy();
  }
  render() {
    return (h(Host, null, h("div", { style: {
        height: '100%',
        width: '100%',
      }, class: "ag-theme-alpine-dark ag-theme-ix" })));
  }
  static get is() { return "ix-ag-grid"; }
  static get encapsulation() { return "scoped"; }
  static get properties() {
    return {
      "gridOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "GridOptions",
          "resolved": "GridOptions<any>",
          "references": {
            "GridOptions": {
              "location": "import",
              "path": "ag-grid-community"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        }
      }
    };
  }
  static get elementRef() { return "host"; }
  static get watchers() {
    return [{
        "propName": "gridOptions",
        "methodName": "initializeGrid"
      }];
  }
}
