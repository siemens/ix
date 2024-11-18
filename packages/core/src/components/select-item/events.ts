/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export class IxSelectItemLabelChangeEvent extends CustomEvent<{
  oldValue: string;
  newValue: string;
}> {
  constructor(detail: { oldValue: string; newValue: string }) {
    super('ix-select-item:labelChange', {
      bubbles: true,
      detail,
    });
  }
}

export class IxSelectItemValueChangeEvent extends CustomEvent<{
  oldValue: string;
  newValue: string;
}> {
  constructor(detail: { oldValue: string; newValue: string }) {
    super('ix-select-item:valueChange', {
      bubbles: true,
      detail,
    });
  }
}
