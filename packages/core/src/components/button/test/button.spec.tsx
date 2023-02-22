/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('ix-button', () => {
  let page: SpecPage;

  it('should be disabled without value', async () => {
    page = await newSpecPage({
      components: [Button],
      html: '<ix-button disabled>xxx</ix-button>',
    });

    await page.waitForChanges();

    expect(page.doc.querySelector('ix-button').className).toContain('disabled');
  });

  it('should be disabled with "true"', async () => {
    page = await newSpecPage({
      components: [Button],
      html: '<ix-button disabled="true">xxx</ix-button>',
    });

    await page.waitForChanges();

    expect(page.doc.querySelector('ix-button').className).toContain('disabled');
  });

  it('should NOT disabled with "false"', async () => {
    page = await newSpecPage({
      components: [Button],
      html: '<ix-button disabled="false">xxx</ix-button>',
    });

    await page.waitForChanges();

    expect(page.doc.querySelector('ix-button').className).not.toContain(
      'disabled'
    );
  });
});
