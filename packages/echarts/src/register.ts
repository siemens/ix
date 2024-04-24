/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ECharts } from 'echarts';
import brandDarkProject from './themes/brand-dark';
import brandLightProject from './themes/brand-light';
import classicDarkProject from './themes/classic-dark';
import classicLightProject from './themes/classic-light';

declare global {
  interface Window {
    echarts: ECharts;
  }
}

export default function registerEChartsThemes(echartsInstance?: any) {
  const echarts = echartsInstance ?? window.echarts;

  if (!echarts) {
    throw Error('echarts not found');
  }

  [
    classicDarkProject,
    classicLightProject,
    brandDarkProject,
    brandLightProject,
  ].forEach((themeBundle) => {
    echarts.registerTheme(themeBundle.themeName, themeBundle.theme);
  });
}
