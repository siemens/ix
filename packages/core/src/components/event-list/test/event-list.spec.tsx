/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { newSpecPage } from '@stencil/core/testing';
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
        <cw-event-list>
          <cw-event-list-item  />
        </cw-event-list>
      `,
    });
    expect(page.root).toEqualHtml(`
      <cw-event-list class="item-size-s">
        <ul>
          <cw-event-list-item />
        </ul>
      </cw-event-list>
    `);
  });

  it('compact', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: `
        <cw-event-list>
          <cw-event-list-item  />
        </cw-event-list>
      `,
    });

    const eventList = page.doc.querySelector('cw-event-list') as HTMLCwEventListElement;

    eventList.compact = true;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <cw-event-list class="compact item-size-s">
        <ul>
          <cw-event-list-item />
        </ul>
      </cw-event-list>
    `);
  });

  it('animated', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: `<div></div>`,
    });

    const eventList = page.doc.createElement('cw-event-list');
    const eventListItem = page.doc.createElement('cw-event-list-item');
    eventListItem.classList.add('cw-event-list-item');

    eventListItem.animate = jest.fn();

    eventList.appendChild(eventListItem);
    page.root.appendChild(eventList);

    await page.waitForChanges();

    expect(eventListItem.animate).toHaveBeenCalled();

    expect(page.root).toEqualHtml(`
    <cw-event-list class="item-size-s">
      <ul>
        <cw-event-list-item class="cw-event-list-item"></cw-event-list-item>
      </ul>
    </cw-event-list>
    `);
  });

  it('not animated', async () => {
    const page = await newSpecPage({
      components: [EventList],
      html: `<div></div>`,
    });

    const eventList = page.doc.createElement('cw-event-list');
    eventList.animated = false;

    const eventListItem = page.doc.createElement('cw-event-list-item');
    eventListItem.classList.add('cw-event-list-item');

    eventListItem.animate = jest.fn();

    eventList.appendChild(eventListItem);
    page.root.appendChild(eventList);

    await page.waitForChanges();

    expect(eventListItem.animate).not.toHaveBeenCalled();

    expect(page.root).toEqualHtml(`
    <cw-event-list class="item-size-s">
      <ul>
        <cw-event-list-item class="cw-event-list-item"></cw-event-list-item>
      </ul>
    </cw-event-list>
    `);
  });
});
