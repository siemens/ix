/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { EventListItem } from '../event-list-item';

describe('event-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EventListItem],
      html: '<event-list-item></event-list-item>',
    });

    expect(page.root).toEqualHtml('<event-list-item></event-list-item>');
  });
});
