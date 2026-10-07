/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Page, expect } from '@playwright/test';
import { DateTime } from 'luxon';
import {
  calendarDayCell,
  dateChangeDetail,
  formatDateTime,
  recordEvents,
  regressionTest,
  timePickerHourCell,
} from '@utils/test';

const DATE_TIME_PICKER_SELECTOR = 'ix-datetime-picker';
const getHourCell = (page: Page, hour: number) =>
  page
    .locator('ix-time-picker')
    .first()
    .getByRole('option', { name: `hr: ${hour}`, exact: true });

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-datetime-picker></ix-datetime-picker>`);
  const datePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
  await expect(datePicker).toHaveAttribute('hydrated');
});

regressionTest(
  'passes minTime/maxTime constraints to nested time-picker',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-picker single-selection time-format="HH:mm:ss" time="12:00:00" min-time="13:00:00" max-time="17:30:00"></ix-datetime-picker>`
    );

    await expect(getHourCell(page, 12)).toBeDisabled();
    await expect(getHourCell(page, 13)).not.toBeDisabled();
  }
);

regressionTest(
  'range mode: ignores minTime/maxTime and warns when configured',
  async ({ mount, page }) => {
    const warnings: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });

    await mount(
      `<ix-datetime-picker from="2026/02/10" to="2026/02/28" date-format="yyyy/LL/dd" time-format="HH:mm:ss" time="12:00:00" min-date="2026/02/01" max-date="2026/02/28" min-time="13:00:00" max-time="17:30:00"></ix-datetime-picker>`
    );

    await expect(getHourCell(page, 12)).not.toBeDisabled();
    await expect(getHourCell(page, 13)).not.toBeDisabled();
    await expect(getHourCell(page, 18)).not.toBeDisabled();
    await expect(getHourCell(page, 17)).not.toBeDisabled();
    expect(
      warnings.some((line) =>
        line.includes(
          '[ix-datetime-picker] `minTime`/`maxTime` are ignored when range selection is enabled'
        )
      )
    ).toBe(true);
  }
);

regressionTest(
  'applies minTime on minDate when dateFormat includes time tokens and selected date is date-only',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-picker single-selection from="2026/02/01" date-format="yyyy/LL/dd HH:mm:ss" time-format="HH:mm:ss" time="12:00:00" min-date="2026/02/01" max-date="2026/02/28" min-time="13:00:00" max-time="17:30:00"></ix-datetime-picker>`
    );

    await expect(getHourCell(page, 12)).toBeDisabled();
    await expect(getHourCell(page, 13)).not.toBeDisabled();
  }
);

regressionTest.describe('min/max time combination matrix', () => {
  regressionTest(
    'without minDate/maxDate: minTime only constrains all dates',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/10" date-format="yyyy/LL/dd" time-format="HH:mm:ss" min-time="13:00:00"></ix-datetime-picker>`
      );

      await expect(getHourCell(page, 12)).toBeDisabled();
      await expect(getHourCell(page, 13)).not.toBeDisabled();
    }
  );

  regressionTest(
    'without minDate/maxDate: maxTime only constrains all dates',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/10" date-format="yyyy/LL/dd" time-format="HH:mm:ss" max-time="17:30:00"></ix-datetime-picker>`
      );

      await expect(getHourCell(page, 18)).toBeDisabled();
      await expect(getHourCell(page, 17)).not.toBeDisabled();
    }
  );

  regressionTest(
    'with minDate/maxDate: middle dates are not constrained by minTime/maxTime',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/10" date-format="yyyy/LL/dd" time-format="HH:mm:ss" min-date="2026/02/01" max-date="2026/02/28" min-time="13:00:00" max-time="17:30:00"></ix-datetime-picker>`
      );

      await expect(getHourCell(page, 12)).not.toBeDisabled();
      await expect(getHourCell(page, 18)).not.toBeDisabled();
    }
  );

  regressionTest(
    'with minDate only: minTime applies on minDate',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/01" date-format="yyyy/LL/dd" time-format="HH:mm:ss" min-date="2026/02/01" min-time="13:00:00"></ix-datetime-picker>`
      );
      await expect(getHourCell(page, 12)).toBeDisabled();
    }
  );

  regressionTest(
    'with minDate only: minTime does not apply after minDate',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/02" date-format="yyyy/LL/dd" time-format="HH:mm:ss" min-date="2026/02/01" min-time="13:00:00"></ix-datetime-picker>`
      );
      await expect(getHourCell(page, 12)).not.toBeDisabled();
    }
  );

  regressionTest(
    'with maxDate only: maxTime applies on maxDate',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/28" date-format="yyyy/LL/dd" time-format="HH:mm:ss" max-date="2026/02/28" max-time="17:30:00"></ix-datetime-picker>`
      );
      await expect(getHourCell(page, 18)).toBeDisabled();
    }
  );

  regressionTest(
    'with maxDate only: maxTime does not apply before maxDate',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/27" date-format="yyyy/LL/dd" time-format="HH:mm:ss" max-date="2026/02/28" max-time="17:30:00"></ix-datetime-picker>`
      );
      await expect(getHourCell(page, 18)).not.toBeDisabled();
    }
  );

  regressionTest(
    'init time outside range does not affect boundary-date decision',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection from="2026/02/01" date-format="yyyy/LL/dd" time-format="HH:mm:ss" time="12:00:00" min-date="2026/02/01" max-date="2026/02/28" min-time="13:00:00" max-time="17:30:00"></ix-datetime-picker>`
      );

      await expect(getHourCell(page, 12)).toBeDisabled();
      await expect(getHourCell(page, 13)).not.toBeDisabled();
    }
  );
});

regressionTest(
  'forwards i18nTime prop to i18nHeader of embedded time-picker',
  async ({ mount, page }) => {
    await mount(
      `<ix-datetime-picker single-selection i18n-time="Custom Time Label"></ix-datetime-picker>`
    );

    const header = page
      .locator('ix-time-picker')
      .first()
      .getByText('Custom Time Label', { exact: true });
    await expect(header).toHaveText('Custom Time Label');
  }
);

regressionTest.describe('locale support', () => {
  regressionTest(
    'dateSelect emits locale-formatted values and locale-independent ISO fields',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker locale="de" date-format="dd MMMM yyyy" from="05 März 2023" to="10 März 2023" time-format="HH:mm:ss" time="14:30:00"></ix-datetime-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datetimePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
      const dateSelectEvent = datetimePicker.evaluate((element) => {
        return new Promise<string>((resolve) => {
          element.addEventListener('dateSelect', (event: any) =>
            // Using JSON.stringify to deserialize js object between chrome instance and test
            resolve(JSON.stringify(event.detail))
          );
        });
      });

      await datetimePicker.getByText(/^12$/).first().click();
      await datetimePicker.getByText(/^15$/).first().click();
      await datetimePicker.getByRole('button', { name: 'Done' }).click();

      const detail = JSON.parse(await dateSelectEvent);
      expect(detail.from).toBe('12 März 2023');
      expect(detail.to).toBe('15 März 2023');
      expect(detail.isoFrom).toBe('2023-03-12');
      expect(detail.isoTo).toBe('2023-03-15');
      expect(detail.time).toBe('14:30:00');
      expect(detail.isoTime).toMatch(/^14:30:00/);
    }
  );

  regressionTest(
    'dateChange emits locale-formatted values and locale-independent ISO fields',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection locale="de" date-format="dd MMMM yyyy" from="05 März 2023" time-format="HH:mm:ss" time="14:30:00"></ix-datetime-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datetimePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
      const dateChangeEvent = datetimePicker.evaluate((element) => {
        return new Promise<string>((resolve) => {
          element.addEventListener('dateChange', (event: any) =>
            resolve(JSON.stringify(event.detail))
          );
        });
      });

      await datetimePicker.getByText(/^17$/).first().click();

      const detail = JSON.parse(await dateChangeEvent);
      expect(detail.from).toBe('17 März 2023');
      expect(detail.isoFrom).toBe('2023-03-17');
    }
  );

  regressionTest(
    'isoTime stays in 24h ISO format for a 12h time format',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection locale="en-US" date-format="yyyy/LL/dd" from="2023/03/05" time-format="hh:mm:ss a" time="02:30:00 PM"></ix-datetime-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const datetimePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
      const dateSelectEvent = datetimePicker.evaluate((element) => {
        return new Promise<string>((resolve) => {
          element.addEventListener('dateSelect', (event: any) =>
            resolve(JSON.stringify(event.detail))
          );
        });
      });

      await datetimePicker.getByText(/^17$/).first().click();
      await datetimePicker.getByRole('button', { name: 'Done' }).click();

      const detail = JSON.parse(await dateSelectEvent);
      expect(detail.time).toBe('02:30:00 PM');
      expect(detail.isoTime).toMatch(/^14:30:00/);
      expect(detail.isoFrom).toBe('2023-03-17');
    }
  );

  regressionTest(
    'localized month names are rendered in the date picker header',
    async ({ mount, page }) => {
      await mount(
        `<ix-datetime-picker single-selection locale="de" date-format="dd MMMM yyyy" from="05 März 2023"></ix-datetime-picker>`
      );
      await page.waitForSelector('ix-date-time-card');

      const monthButton = page
        .locator('ix-date-picker')
        .getByRole('button', { name: 'Select month' });
      await expect(monthButton).toHaveText(/März/);
    }
  );
});

regressionTest.describe('datetime picker tests single', () => {
  regressionTest.beforeEach(async ({ mount }) => {
    await mount(
      `
      <ix-datetime-picker
        single-selection
        from="1990/03/29"
        date-format="yyyy/LL/dd"
        time="09:10:12"
        time-format="HH:mm:ss"
        week-start-index="1"
      ></ix-datetime-picker>
      `
    );
  });

  regressionTest('change time', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const timeChangeEvent = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('timeChange', (data) => f(data));
      });
    });

    await getHourCell(page, 12).click();

    await expect(timeChangeEvent).resolves.toBeTruthy();
  });

  regressionTest('change date', async ({ page }) => {
    await page.waitForSelector('ix-date-time-card');

    const dateChangeEvent = page.evaluate(() => {
      return new Promise((f) => {
        document.addEventListener('dateChange', (data) => f(data));
      });
    });

    await page.getByText(/^17$/).first().click();

    await expect(dateChangeEvent).resolves.toBeTruthy();
  });
});

// Dates and times used by the confirmation tests. Picked dates stay in the
// month of `committed`, which the picker shows on load.
const TIME_FORMAT = 'HH:mm:ss';
const committed = DateTime.fromISO('2024-05-10T10:30:00');
const committedTo = committed.plus({ days: 2 });
const picked = committed.plus({ days: 10, hours: 1 });
const pickedTo = picked.plus({ days: 2 });

const formatTime = (time: DateTime) => formatDateTime(time, TIME_FORMAT);

const datetimePickerLocator = (page: Page) =>
  page.locator('ix-datetime-picker');

const dayCell = (page: Page, date: DateTime) =>
  calendarDayCell(datetimePickerLocator(page), date);

const hourCell = (page: Page, time: DateTime) =>
  timePickerHourCell(datetimePickerLocator(page), time);

/** Mounts the picker with `from` and `time` of `from`, plus an optional `to`. */
const mountDatetimePicker = async (
  mount: (html: string) => Promise<unknown>,
  page: Page,
  {
    from,
    to,
    attributes = '',
  }: { from: DateTime; to?: DateTime; attributes?: string }
) => {
  const toAttribute = to ? ` to="${formatDateTime(to)}"` : '';
  await mount(
    `<ix-datetime-picker from="${formatDateTime(from)}"${toAttribute} time="${formatTime(from)}" ${attributes}></ix-datetime-picker>`
  );
  await expect(datetimePickerLocator(page)).toHaveClass(/hydrated/);
};

regressionTest.describe('require confirmation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mountDatetimePicker(mount, page, {
      from: committed,
      attributes: 'single-selection require-confirmation',
    });
  });

  regressionTest('emits changes only when confirmed', async ({ page }) => {
    const datetimePicker = datetimePickerLocator(page);
    const events = await recordEvents(datetimePicker, [
      'dateChange',
      'timeChange',
      'dateSelect',
      'dateCancel',
    ]);

    await dayCell(page, picked).click();
    await hourCell(page, picked).click();
    expect(await events()).toEqual([]);

    await datetimePicker.getByTestId('confirm').click();

    expect(await events()).toEqual([
      {
        type: 'dateChange',
        detail: expect.objectContaining(dateChangeDetail(picked)),
      },
      { type: 'timeChange', detail: formatTime(picked) },
      {
        type: 'dateSelect',
        detail: expect.objectContaining({
          ...dateChangeDetail(picked),
          time: formatTime(picked),
        }),
      },
    ]);
  });

  regressionTest(
    'cancel restores the confirmed date and time',
    async ({ page }) => {
      const datetimePicker = datetimePickerLocator(page);
      const events = await recordEvents(datetimePicker, [
        'dateChange',
        'timeChange',
        'dateSelect',
        'dateCancel',
      ]);

      await dayCell(page, picked).click();
      await hourCell(page, picked).click();
      await datetimePicker.getByTestId('cancel').click();

      await expect(dayCell(page, committed)).toHaveAttribute(
        'aria-selected',
        'true'
      );
      await expect(dayCell(page, picked)).toHaveAttribute(
        'aria-selected',
        'false'
      );
      await expect(hourCell(page, committed)).toHaveAttribute(
        'aria-selected',
        'true'
      );
      expect((await events()).map((event) => event.type)).toEqual([
        'dateCancel',
      ]);
    }
  );
});

regressionTest.describe('require confirmation option', () => {
  regressionTest(
    'does not leak pending range changes',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, {
        from: committed,
        to: committedTo,
        attributes: 'require-confirmation',
      });
      const events = await recordEvents(datetimePickerLocator(page), [
        'dateChange',
        'dateRangeChange',
      ]);

      await dayCell(page, picked).click();
      await dayCell(page, pickedTo).click();

      expect(await events()).toEqual([]);
    }
  );

  regressionTest(
    'renders no cancel button without require confirmation',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, { from: committed });
      const datetimePicker = datetimePickerLocator(page);

      await expect(datetimePicker.getByTestId('cancel')).toHaveCount(0);
      await expect(
        datetimePicker.getByRole('button', { name: 'Done' })
      ).toBeVisible();
    }
  );
});

regressionTest.describe('primary button disabled state', () => {
  regressionTest(
    'confirm is disabled until something different is picked',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, {
        from: committed,
        attributes: 'single-selection require-confirmation',
      });
      const confirm = datetimePickerLocator(page).getByRole('button', {
        name: 'Confirm',
      });

      await expect(confirm).toBeDisabled();

      await dayCell(page, picked).click();
      await expect(confirm).toBeEnabled();

      // Re-selecting the committed date leaves nothing to confirm
      await dayCell(page, committed).click();
      await expect(confirm).toBeDisabled();
    }
  );

  regressionTest(
    'confirm is disabled while the range is incomplete',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, {
        from: committed,
        to: committedTo,
        attributes: 'require-confirmation',
      });
      const confirm = datetimePickerLocator(page).getByRole('button', {
        name: 'Confirm',
      });

      await dayCell(page, picked).click();
      await expect(confirm).toBeDisabled();

      await dayCell(page, pickedTo).click();
      await expect(confirm).toBeEnabled();
    }
  );

  regressionTest(
    'done is disabled until something different is picked and after done',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, {
        from: committed,
        attributes: 'single-selection',
      });
      const done = datetimePickerLocator(page).getByRole('button', {
        name: 'Done',
      });

      await expect(done).toBeDisabled();

      await hourCell(page, picked).click();
      await expect(done).toBeEnabled();

      await done.click();
      await expect(done).toBeDisabled();
    }
  );

  regressionTest(
    'done stays enabled when the host echoes changes back to the props',
    async ({ mount, page }) => {
      await mountDatetimePicker(mount, page, {
        from: committed,
        attributes: 'single-selection',
      });
      const datetimePicker = datetimePickerLocator(page);
      await datetimePicker.evaluate((el: HTMLIxDatetimePickerElement) => {
        el.addEventListener('dateChange', (event) => {
          const detail = (event as CustomEvent).detail;
          el.from = typeof detail === 'string' ? detail : detail.from;
        });
        el.addEventListener('timeChange', (event) => {
          el.time = (event as CustomEvent<string>).detail;
        });
      });

      await dayCell(page, picked).click();
      await hourCell(page, picked).click();

      await expect(
        datetimePicker.getByRole('button', { name: 'Done' })
      ).toBeEnabled();
    }
  );
});

regressionTest(
  'done button is full-width only on small screens',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await mountDatetimePicker(mount, page, {
      from: committed,
      attributes: 'single-selection',
    });
    const footer = page.locator(
      'ix-datetime-picker ix-confirmation-footer.layout-responsive'
    );
    const done = footer.getByTestId('confirm');

    const isFullWidth = async () => {
      const footerBox = await footer.boundingBox();
      const doneBox = await done.boundingBox();
      if (!footerBox || !doneBox) {
        throw new Error('Footer is not rendered');
      }
      return Math.round(doneBox.width) === Math.round(footerBox.width);
    };

    await expect.poll(isFullWidth).toBe(false);

    await page.setViewportSize({ width: 500, height: 768 });
    await expect.poll(isFullWidth).toBe(true);
  }
);
