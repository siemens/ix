/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { DateTime } from 'luxon';
import { DateTimeCard } from '../../date-time-card/date-time-card';
import { DatePicker } from '../date-picker';

describe('date-picker-rework without range', () => {
  it('should have default date selected', async () => {
    const page = await newSpecPage({
      components: [DateTimeCard, DatePicker],
      template: () => <ix-date-picker range={false}></ix-date-picker>,
    });

    const datePicker = page.doc.querySelector('ix-date-picker');
    const currentDate = await datePicker.getCurrentDate();

    expect(currentDate.start).toEqual(
      DateTime.now().toFormat(datePicker.format)
    );
    expect(currentDate.end).toEqual(undefined);
  });

  it('should have no default date selected', async () => {
    const page = await newSpecPage({
      components: [DateTimeCard, DatePicker],
      template: () => (
        <ix-date-picker range={false} from={null}></ix-date-picker>
      ),
    });

    const datePicker = page.doc.querySelector('ix-date-picker');

    await page.waitForChanges();

    const currentDate = await datePicker.getCurrentDate();
    const isAnyDateSelected = datePicker.querySelectorAll(
      '.calendar-item.selected'
    );
    expect(isAnyDateSelected.length).toBe(0);

    expect(currentDate.start).toEqual(undefined);
    expect(currentDate.end).toEqual(undefined);
  });
});

describe('date-picker-rework WITH range', () => {
  it('should have default date selected', async () => {
    const page = await newSpecPage({
      components: [DateTimeCard, DatePicker],
      template: () => <ix-date-picker range={true}></ix-date-picker>,
    });

    const datePicker = page.doc.querySelector('ix-date-picker');
    const currentDate = await datePicker.getCurrentDate();

    expect(currentDate.start).toEqual(
      DateTime.now().toFormat(datePicker.format)
    );
    expect(currentDate.end).toEqual(undefined);
  });

  it('should have no default date selected', async () => {
    const page = await newSpecPage({
      components: [DateTimeCard, DatePicker],
      template: () => (
        <ix-date-picker range={true} from={null}></ix-date-picker>
      ),
    });

    const datePicker = page.doc.querySelector('ix-date-picker');

    await page.waitForChanges();

    const currentDate = await datePicker.getCurrentDate();
    const isAnyDateSelected = datePicker.querySelectorAll(
      '.calendar-item.selected'
    );
    expect(isAnyDateSelected.length).toBe(0);

    expect(currentDate.start).toEqual(undefined);
    expect(currentDate.end).toEqual(undefined);
  });
});
