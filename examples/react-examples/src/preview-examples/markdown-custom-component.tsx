/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { MarkdownComponentContext } from '@siemens/ix';
import {
  createMarkdownComponent,
  IxButton,
  IxMarkdown,
} from '@siemens/ix-react';

function Asset({ ctx }: { ctx: MarkdownComponentContext }) {
  return (
    <div>
      <span>
        {ctx.text} ({ctx.attributes.status})
      </span>{' '}
      <IxButton
        variant="secondary"
        onClick={() => ctx.emitAction('open-asset', { id: ctx.attributes.id })}
      >
        Open asset
      </IxButton>
    </div>
  );
}

const options = {
  components: { asset: createMarkdownComponent(Asset) },
};

const markdown = [
  'The following asset needs attention:',
  '',
  '::asset[Pump P-102]{id=p-102 status=warning}',
].join('\n');

export default () => {
  return (
    <IxMarkdown
      markdown={markdown}
      options={options}
      onActionClick={(event) => console.log('Markdown action', event.detail)}
    ></IxMarkdown>
  );
};
