/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { MapNavigationOverlay } from '../map-navigation-overlay';

describe('map-navigation-overlay', () => {
  let page: any;
  let mapNavigationOverlay: any;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [MapNavigationOverlay],
      html: '<map-navigation-overlay></map-navigation-overlay>',
    });
    mapNavigationOverlay = page.doc.querySelector('ix-map-navigation');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });
});
