/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';
export class FlipTileContent {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "ix-flip-tile-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["flip-tile-content.css"]
  }; }
  static get styleUrls() { return {
    "$": ["flip-tile-content.css"]
  }; }
}
