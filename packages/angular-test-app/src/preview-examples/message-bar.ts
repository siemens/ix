/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-bar',
  template: `
    <ix-message-bar>Message text</ix-message-bar>
    <ix-message-bar type="warning">Message text</ix-message-bar>
    <ix-message-bar type="danger">
      <div class="d-flex align-items-center justify-content-between">
        Message text <ix-button>Action</ix-button>
      </div>
    </ix-message-bar>
  `,
})
export class MessageBar {}
