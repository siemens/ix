/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-chip closable outline> Primary </ix-chip>
    <ix-chip icon="print">Primary with icon</ix-chip>
    <ix-chip icon="print" style="width: 10rem" closable> Primary </ix-chip>

    <ix-chip variant="critical" closable outline> Alarm </ix-chip>
    <ix-chip variant="alarm" icon="print"> Alarm with icon </ix-chip>
    <ix-chip variant="alarm" icon="print" style="width: 10rem" closable>
      Alarm
    </ix-chip>
    <ix-chip variant="warning" icon="print" style="width: 10rem" closable>
      Alarm
    </ix-chip>
    <ix-chip
      background="purple"
      color="green"
      variant="custom"
      icon="print"
      style="width: 10rem"
      closable
    >
      Custom
    </ix-chip>
  `,
})
export default class Chip {}
