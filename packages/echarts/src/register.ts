/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ECharts } from 'echarts';
import brandDark from './themes/brand-dark';
import brandLight from './themes/brand-light';
import communityDark from './themes/community-dark';
import communityLight from './themes/community-light';

declare global {
  interface Window {
    echarts: ECharts;
  }
}

export default function registerTheme(echartsInstance?: any) {
  const echarts = echartsInstance ?? window.echarts;

  if (!echarts) {
    throw Error('echarts not found');
  }

  [communityDark, communityLight, brandDark, brandLight].forEach((themeBundle) => {
    echarts.registerTheme(themeBundle.themeName, themeBundle.theme);
  });
}
