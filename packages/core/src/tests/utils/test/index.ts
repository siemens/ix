/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Locator } from '@playwright/test';
export * from './page';

export const viewPorts = {
  sm: {
    height: 800,
    width: 360,
  },
  md: {
    height: 768,
    width: 1024,
  },
  lg: {
    height: 1080,
    width: 1920,
  },
} as const;

export const preventFormSubmission = async (formLocator: Locator) => {
  return formLocator.evaluate((form: HTMLFormElement) =>
    form.addEventListener('submit', (submitEvent) => {
      submitEvent.preventDefault();
    })
  );
};

export const getFormValue = async (formLocator: Locator, key: string) => {
  return formLocator.evaluate((form: HTMLFormElement, key: string) => {
    const formData = new FormData(form);
    return formData.get(key);
  }, key);
};
