/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Input } from '@angular/core';
import type { MarkdownAction, MarkdownComponentContext } from '@siemens/ix';
import { createMarkdownComponent } from '@siemens/ix-angular';
import { IxButton, IxMarkdown } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-asset',
  imports: [IxButton],
  template: `
    <span>{{ text }} ({{ attributes['status'] }})</span>
    <ix-button
      variant="secondary"
      (click)="emitAction('open-asset', { id: attributes['id'] })"
    >
      Open asset
    </ix-button>
  `,
})
class Asset {
  @Input() text = '';
  @Input() attributes: Record<string, string> = {};
  @Input() emitAction: MarkdownComponentContext['emitAction'] = () => {};
}

@Component({
  selector: 'app-example',
  imports: [IxMarkdown],
  templateUrl: './markdown-custom-component.html',
})
export default class MarkdownCustomComponent {
  options = {
    components: { asset: createMarkdownComponent(Asset) },
  };

  markdown = [
    'The following asset needs attention:',
    '',
    '::asset[Pump P-102]{id=p-102 status=warning}',
  ].join('\n');

  onActionClick(event: CustomEvent<MarkdownAction>) {
    console.log('Markdown action', event.detail);
  }
}
