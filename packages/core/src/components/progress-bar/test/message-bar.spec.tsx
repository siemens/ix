/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { ProgressBar } from '../progress-bar';

describe('ix-progress-bar', () => {
  it('has correct default values', async () => {
    await newSpecPage({
      components: [ProgressBar],
      html: '<ix-progress-bar></ix-progress-bar>',
    });

    const progressBar = document.querySelector('ix-progress-bar');
    const progressBarDiv = progressBar.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressBarDiv.style.width).toBe('0%');
    expect(progressBarDiv.style.backgroundColor).toBe('var(--theme-color-primary)');
  });

  it('has correct values with invalid inputs', async () => {
    await newSpecPage({
      components: [ProgressBar],
      html: '<ix-progress-bar value="120" variant="critical"></ix-progress-bar>',
    });

    const progressBar = document.querySelector('ix-progress-bar');
    const progressBarDiv = progressBar.shadowRoot.querySelector('.progress') as HTMLElement;
    expect(progressBarDiv.style.width).toBe('100%');
    expect(progressBarDiv.style.backgroundColor).toBe('var(--theme-color-critical--active)');
  });
});
