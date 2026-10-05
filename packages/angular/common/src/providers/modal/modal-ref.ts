/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { closeModal, dismissModal } from '@siemens/ix';

type PendingModalAction<TReason> =
  | {
      type: 'close';
      reason: TReason;
    }
  | {
      type: 'dismiss';
      reason?: TReason;
    };

export class IxActiveModal<TData = any, TReason = any> {
  modalElement: HTMLElement;
  protected pendingAction?: PendingModalAction<TReason>;

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
    if (!this.modalElement) {
      this.pendingAction ??= {
        type: 'close',
        reason,
      };
      return;
    }

    closeModal(this.modalElement, reason);
  }

  /**
   * Dismiss the active modal
   *
   * @param reason
   */
  public dismiss(reason?: TReason) {
    if (!this.modalElement) {
      this.pendingAction ??= {
        type: 'dismiss',
        reason,
      };
      return;
    }

    dismissModal(this.modalElement, reason);
  }
}

export class InternalIxActiveModal<
  TData = any,
  TReason = any
> extends IxActiveModal<TData, TReason> {
  setModalElement(element: HTMLElement) {
    this.modalElement = element;

    const pendingAction = this.pendingAction;
    this.pendingAction = undefined;

    if (pendingAction?.type === 'close') {
      this.close(pendingAction.reason);
      return;
    }

    if (pendingAction?.type === 'dismiss') {
      this.dismiss(pendingAction.reason);
    }
  }
}
