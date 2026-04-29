/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Page, expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const DATE_TIME_PICKER_SELECTOR = 'ix-datetime-picker';
const getHourCell = (page: Page, hour: number) =>
  page
    .locator('ix-time-picker')
    .first()
    .getByRole('button', { name: `hr: ${hour}`, exact: true });

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-datetime-picker></ix-datetime-picker>`);
  const datePicker = page.locator(DATE_TIME_PICKER_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
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
