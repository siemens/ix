/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it } from 'vitest';
import {
  applyModalA11yAttributes,
  decodeModalConfig,
  decodeModalHeaderConfig,
} from '../modal-config';

describe('decodeModalConfig', () => {
  it('keeps only public ix-modal properties', () => {
    const beforeDismiss = () => true;
    const decoded = decodeModalConfig({
      content: 'text',
      size: '480',
      centered: true,
      closeOnBackdropClick: true,
      isNonBlocking: true,
      beforeDismiss,
      innerHTML: '<img src=x onerror=alert(1)>',
      outerHTML: '<div></div>',
      onclick: () => {},
    });

    expect(decoded).toEqual({
      size: '480',
      centered: true,
      closeOnBackdropClick: true,
      isNonBlocking: true,
      beforeDismiss,
    });
  });

  it('maps animation and backdrop to disableAnimation and hideBackdrop', () => {
    expect(decodeModalConfig({ animation: false, backdrop: false })).toEqual({
      disableAnimation: true,
      hideBackdrop: true,
    });
    expect(decodeModalConfig({ animation: true, backdrop: true })).toEqual({
      disableAnimation: false,
      hideBackdrop: false,
    });
  });

  it('prefers explicit disableAnimation and hideBackdrop', () => {
    expect(
      decodeModalConfig({
        animation: false,
        disableAnimation: false,
        backdrop: false,
        hideBackdrop: false,
      })
    ).toEqual({ disableAnimation: false, hideBackdrop: false });
  });

  it('ignores inherited properties', () => {
    const config = Object.create({ size: '720', innerHTML: 'x' });
    expect(decodeModalConfig(config)).toEqual({});
  });
});

describe('decodeModalHeaderConfig', () => {
  it('keeps only public ix-modal-header properties', () => {
    expect(
      decodeModalHeaderConfig({
        icon: 'info',
        iconColor: '--color',
        messageTitle: 'Title',
        message: 'Message',
        innerHTML: '<img src=x onerror=alert(1)>',
      })
    ).toEqual({ icon: 'info', iconColor: '--color' });
  });
});

describe('applyModalA11yAttributes', () => {
  it('sets aria attributes without mutating the config', () => {
    const element = document.createElement('div');
    const config = { ariaDescribedby: 'desc', ariaLabelledby: 'label' };

    applyModalA11yAttributes(element, config);

    expect(element.getAttribute('aria-describedby')).toBe('desc');
    expect(element.getAttribute('aria-labelledby')).toBe('label');
    expect(config).toEqual({ ariaDescribedby: 'desc', ariaLabelledby: 'label' });
  });
});
