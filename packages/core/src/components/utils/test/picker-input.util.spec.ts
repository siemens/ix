/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it, vi } from 'vitest';
import { createPickerInputBlur } from '../input/picker-input.util';

const setup = (isPickerOpen: boolean) => {
  const state = { isPickerOpen };
  const onLeave = vi.fn();
  const inputBlur = createPickerInputBlur({
    isPickerOpen: () => state.isPickerOpen,
    onLeave,
  });
  return { state, onLeave, inputBlur };
};

describe('createPickerInputBlur', () => {
  it('leaves the field on blur while the picker is closed', () => {
    const { onLeave, inputBlur } = setup(false);

    inputBlur.onBlur();

    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('defers the blur until the picker closes', () => {
    const { state, onLeave, inputBlur } = setup(true);

    inputBlur.onBlur();
    expect(onLeave).not.toHaveBeenCalled();

    state.isPickerOpen = false;
    inputBlur.onPickerClosed();
    inputBlur.onPickerClosed();
    expect(onLeave).toHaveBeenCalledTimes(1);
  });

  it('drops the deferred blur when the field is focused again', () => {
    const { state, onLeave, inputBlur } = setup(true);

    inputBlur.onBlur();
    inputBlur.onFocus();
    state.isPickerOpen = false;
    inputBlur.onPickerClosed();

    expect(onLeave).not.toHaveBeenCalled();
  });

  it('does not leave the field when the picker closes without a blur', () => {
    const { onLeave, inputBlur } = setup(true);

    inputBlur.onPickerClosed();

    expect(onLeave).not.toHaveBeenCalled();
  });
});
