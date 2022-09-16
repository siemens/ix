/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as echarts from 'echarts';
import brandDarkProject from './themes/brand-dark.project';
import brandLightProject from './themes/brand-light.project';
import classicDarkProject from './themes/classic-dark.project';
import classicLightProject from './themes/classic-light.project';

export default function registerEChartsThemes() {
  if (echarts === undefined) {
    console.error('echarts not found!');
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
