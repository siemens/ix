/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea class="form-control" placeholder="Enter text here">
  Some example text
</textarea>
  `,
})
export class Textarea {}
