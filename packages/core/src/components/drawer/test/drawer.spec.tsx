/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './animejs.mock';
import { render, h } from '@stencil/vitest';
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it } from 'vitest';

describe('ix-drawer', () => {
  async function setup() {
    const rendered = await render(<ix-drawer>Example Content</ix-drawer>);
    const drawer = rendered.root as HTMLIxDrawerElement;

    return { ...rendered, drawer };
  }

  it('opens the drawer', async () => {
    const { drawer, waitForChanges } = await setup();

    drawer.show = true;
    await waitForChanges();

    expect(drawer.show).toBe(true);
    expect(drawer).toHaveTextContent('Example Content');
  });

  it('closes the drawer', async () => {
    const { drawer, waitForChanges } = await setup();

    drawer.show = true;
    await waitForChanges();

    const closeButton = drawer.shadowRoot!.querySelector(
      '[data-testid="close-button"]'
    )!;
    fireEvent.click(closeButton);

    await waitForChanges();
    expect(drawer.show).toBe(false);
  });

  it('drawer is displayed at full height, if fullHeight is set to true', async () => {
    const { drawer, waitForChanges } = await setup();

    drawer.fullHeight = true;
    await waitForChanges();

    expect(drawer.style.height.includes('100%')).toBe(true);
  });

  it('drawer is NOT displayed at full height, if fullHeight is set to false', async () => {
    const { drawer, waitForChanges } = await setup();

    drawer.fullHeight = false;
    await waitForChanges();

    expect(drawer.style.height.includes('auto')).toBe(true);
  });

  it('emits an event, when show changed', async () => {
    const { drawer, spyOnEvent, waitForChanges } = await setup();
    const openSpy = spyOnEvent('open');

    drawer.show = true;
    await waitForChanges();

    expect(openSpy).toHaveReceivedEvent();
  });
});
