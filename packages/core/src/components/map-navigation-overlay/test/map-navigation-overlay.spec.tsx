/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { MapNavigationOverlay } from '../map-navigation-overlay';

describe('map-navigation-overlay', () => {
  let page: any;
  let mapNavigationOverlay: any;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [MapNavigationOverlay],
      html: `<map-navigation-overlay></map-navigation-overlay>`,
    });
    mapNavigationOverlay = page.doc.querySelector('cw-map-navigation');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });
  
});
