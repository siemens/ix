/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
//@ts-ignore
import { createMutationObserver } from '../../utils/mutation-observer';
import { EventList } from '../event-list';

jest.mock('../../utils/mutation-observer');

describe('event-list', () => {
  beforeEach(() => {
    //@ts-ignore
    createMutationObserver = jest.fn(() => ({
      observe: jest.fn(),
    }));
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: `
        <ix-event-list>
          <ix-event-list-item  />
        </ix-event-list>
      `,
    });
    expect(page.root).toEqualHtml(`
      <ix-event-list class="item-size-s">
        <mock:shadow-root>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <ix-event-list-item></ix-event-list-item>
      </ix-event-list>
    `);
  });

  it('compact', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: `
        <ix-event-list>
          <ix-event-list-item  />
        </ix-event-list>
      `,
    });

    const eventList = page.doc.querySelector(
      'ix-event-list'
    ) as HTMLIxEventListElement;

    eventList.compact = true;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ix-event-list class="compact item-size-s">
        <mock:shadow-root>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <ix-event-list-item></ix-event-list-item>
      </ix-event-list>
    `);
  });

  it('animated', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: '<div></div>',
    });

    const eventList = page.doc.createElement('ix-event-list');
    const eventListItem = page.doc.createElement('ix-event-list-item');

    eventListItem.animate = jest.fn();

    eventList.appendChild(eventListItem);
    page.root.appendChild(eventList);

    await page.waitForChanges();

    expect(eventListItem.animate).toHaveBeenCalled();

    expect(page.root).toEqualHtml(`
      <ix-event-list class="item-size-s">
        <mock:shadow-root>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <ix-event-list-item></ix-event-list-item>
      </ix-event-list>
    `);
  });

  it('not animated', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: '<div></div>',
    });

    const eventList = page.doc.createElement('ix-event-list');
    eventList.animated = false;

    const eventListItem = page.doc.createElement('ix-event-list-item');

    eventListItem.animate = jest.fn();

    eventList.appendChild(eventListItem);
    page.root.appendChild(eventList);

    await page.waitForChanges();

    expect(eventListItem.animate).not.toHaveBeenCalled();

    expect(page.root).toEqualHtml(`
      <ix-event-list class="item-size-s">
        <mock:shadow-root>
          <ul>
            <slot></slot>
          </ul>
        </mock:shadow-root>
        <ix-event-list-item></ix-event-list-item>
      </ix-event-list>
    `);
  });
});
