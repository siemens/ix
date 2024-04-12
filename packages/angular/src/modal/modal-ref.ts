/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { closeModal, dismissModal } from '@siemens/ix';

export class IxActiveModal<TData = any, TReason = any> {
  modalElement: HTMLElement;

  constructor(private readonly modalData?: TData) {}

  public get data() {
    return this.modalData;
  }

  /**
   * Close the active modal
   *
   * @param reason
   */
  public close(reason: TReason) {
    closeModal(this.modalElement, reason);
  }

  /**
   * Dismiss the active modal
   *
   * @param reason
   */
  public dismiss(reason?: TReason) {
    dismissModal(this.modalElement, reason);
  }
}

export class InternalIxActiveModal<
  TData = any,
  TReason = any
> extends IxActiveModal<TData, TReason> {
  setModalElement(element: HTMLElement) {
    this.modalElement = element;
  }
}
