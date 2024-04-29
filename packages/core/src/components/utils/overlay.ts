/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxComponent } from '../utils/internal';

export interface IxOverlayComponent extends IxComponent {
  isPresent(): boolean;

  willPresent?(): boolean;
  willDismiss?(): boolean;

  present(): void;
  dismiss(): void;
}

export class OverlayController {
  overlays: Set<IxOverlayComponent> = new Set();

  connected(instance: IxOverlayComponent): void {
    this.overlays.add(instance);
  }

  disconnected(instance: IxOverlayComponent): void {
    this.overlays.delete(instance);
  }

  present(instance: IxOverlayComponent): void {
    if (instance.willPresent && !instance.willPresent()) {
      return;
    }
    this.dismissOthers(instance);
    instance.present();
  }

  dismiss(instance: IxOverlayComponent): void {
    if (instance.willDismiss && !instance.willDismiss()) {
      return;
    }
    instance.dismiss();
  }

  private dismissOthers(instance: IxOverlayComponent): void {
    this.overlays.forEach((overlay) => {
      if (overlay !== instance) {
        this.dismiss(overlay);
      }
    });
  }
}
