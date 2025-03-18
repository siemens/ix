/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton, IxSelect, IxSelectItem } from '@siemens/ix-react';
import { describe, expect, it, vi } from 'vitest';
import { deepQuerySelector, screen } from 'shadow-dom-testing-library';
import userEvent from '@testing-library/user-event';
import { render } from 'vitest-browser-react';
const createShadowRootQueries = (select?: HTMLIxSelectElement) => {
  const $select = select ?? deepQuerySelector(document, 'ix-select');

  const queries = {
    queryTrigger() {
      return vi.waitFor(() => {
        const trigger = $select?.shadowRoot?.querySelector(
          '[data-select-dropdown]'
        );
        expect(trigger).toBeTruthy();
        return trigger as HTMLElement;
      });
    },

    queryDropdown() {
      return vi.waitFor(() => {
        const trigger = $select?.shadowRoot?.querySelector('ix-dropdown');
        expect(trigger).toBeTruthy();
        return trigger as HTMLElement;
      });
    },

    async expectDropdownToBeVisible() {
      const dropdown = await queries.queryDropdown();
      return vi.waitFor(() => {
        const contain = dropdown?.classList.contains('show');
        expect(contain).toBeTruthy();
        return contain;
      });
    },
  };

  return queries;
};

describe(`a describe`, () => {
  it(`a test`, async () => {
    const { getByText } = render(<IxButton>Open</IxButton>);
    const button = getByText('Open');
    const shadowButton = screen.getByText('Open');

    expect(button).not.toBe(null);
    expect(shadowButton).not.toBe(null);
  });

  it(`a another test`, async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <IxSelect onValueChange={onValueChange} i18nPlaceholder="test">
        <IxSelectItem
          value="item1"
          label="Option 1"
          data-testid="opt1"
        ></IxSelectItem>
        <IxSelectItem
          value="item2"
          label="Option 2"
          data-testid="opt2"
        ></IxSelectItem>
      </IxSelect>
    );

    const queries = createShadowRootQueries();

    const trigger = await queries.queryTrigger();
    user.click(trigger);

    await queries.expectDropdownToBeVisible();

    user.click(deepQuerySelector(screen.getByTestId('opt1'), 'button')!);

    await vi.waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith(
        expect.objectContaining({ detail: 'item1' })
      );
    });
  });
});
