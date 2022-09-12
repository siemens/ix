// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-custom-label',
  template: ` <ix-toggle text-off="Offline" text-on="Online"></ix-toggle> `,
})
export class ToggleCustomLabel {}
