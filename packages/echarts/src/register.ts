/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as echarts from 'echarts';
import brandDarkProject from './themes/brand-dark';
import brandLightProject from './themes/brand-light';
import classicDarkProject from './themes/classic-dark';
import classicLightProject from './themes/classic-light';

export default function registerEChartsThemes(echartsInstance?: any) {
  const chart = echartsInstance ?? echarts;
  if (chart === undefined) {
    console.error('echarts not found!');
  }

  [
    classicDarkProject,
    classicLightProject,
    brandDarkProject,
    brandLightProject,
  ].forEach((themeBundle) => {
    chart.registerTheme(themeBundle.themeName, themeBundle.theme);
  });
}
