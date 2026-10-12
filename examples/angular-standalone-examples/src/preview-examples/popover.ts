/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { addIcons } from '@siemens/ix-icons';
import { iconInfo } from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxPill,
  IxPopover,
  IxPopoverContent,
  IxPopoverFooter,
  IxPopoverHeader,
  IxPopoverImage,
} from '@siemens/ix-angular/standalone';

addIcons({ iconInfo });

const POPOVER_IMAGE_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='160'%3E%3Crect fill='%232a2a4a' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' fill='%23e0e0e0' text-anchor='middle' dy='.3em' font-size='18'%3ERelease%20preview%3C/text%3E%3C/svg%3E";

@Component({
  selector: 'app-example',
  imports: [
    IxButton,
    IxPill,
    IxPopover,
    IxPopoverHeader,
    IxPopoverImage,
    IxPopoverContent,
    IxPopoverFooter,
  ],
  templateUrl: './popover.html',
})
export default class Popover {
  readonly popoverImageSrc = POPOVER_IMAGE_SRC;
}
