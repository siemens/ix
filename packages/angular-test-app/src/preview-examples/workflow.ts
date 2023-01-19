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
  template: `<ix-workflow-steps>
    <ix-workflow-step status="done">Step 1</ix-workflow-step>
    <ix-workflow-step status="success">Step 2</ix-workflow-step>
    <ix-workflow-step status="open">Step 3</ix-workflow-step>
    <ix-workflow-step status="warning">Step 4</ix-workflow-step>
    <ix-workflow-step status="error">Step 5</ix-workflow-step>
    <ix-workflow-step disabled>Step 6</ix-workflow-step>
  </ix-workflow-steps>`,
})
export default class Workflow {}
