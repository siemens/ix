/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type AgGridCommunity from 'ag-grid-community';
import checkboxStyles from './checkbox.style.css';
import headerStyles from './header.style.css';
import tooltipStyles from './tooltip.style.css';
import radioStyles from './radio.style.css';
import inputStyles from './input.style.css';
import { aggridIxThemeParams } from './aggrid-ix-theme-params.ts';
import { iconOverrides } from 'ag-grid-community';
import {
  iconFilter,
  iconSortDescending,
  iconSortAscending,
  iconAppMenu,
  iconDragGripper,
} from '@siemens/ix-icons/icons';

const additionalThemeParams = { fontFamily: ['Siemens Sans', 'sans-serif'] };
const stripedRowThemeParams = {
  oddRowBackgroundColor: 'var(--si-sys-background-0)',
};

export type IxThemeOptions = {
  /**
   * Enables alternating row background colors.
   */
  stripedRows?: boolean;
};

// Flexible type for multiple versions
type AgGridModule = {
  createPart: typeof AgGridCommunity.createPart;
  themeAlpine: typeof AgGridCommunity.themeAlpine;
  [key: string]: any;
};

function extractSvgFromDataUri(dataUri: string): string {
  let svgString = dataUri.replace(/^data:image\/svg\+xml;utf8,/, '');
  svgString = decodeURIComponent(svgString);
  svgString = svgString.replace(/<\?xml[^?]*\?>/g, '');
  svgString = svgString.replace(/fill='none'/g, "fill='currentColor'");
  svgString = svgString.replace(/stroke='none'/g, "stroke='currentColor'");

  return svgString.trim();
}

function createIxTheme(agModule: AgGridModule, options?: IxThemeOptions) {
  const { createPart, themeAlpine } = agModule;

  const themeParams = {
    ...aggridIxThemeParams,
    ...additionalThemeParams,
    ...(options?.stripedRows ? stripedRowThemeParams : {}),
  };

  const base = themeAlpine.withParams({
    ...themeParams,
  });

  const iconCSS = iconOverrides({
    type: 'image',
    mask: true,
    icons: {
      filter: {
        svg: extractSvgFromDataUri(iconFilter),
      },
      asc: {
        svg: extractSvgFromDataUri(iconSortAscending),
      },
      desc: {
        svg: extractSvgFromDataUri(iconSortDescending),
      },
      menu: {
        svg: extractSvgFromDataUri(iconAppMenu),
      },
      grip: {
        svg: extractSvgFromDataUri(iconDragGripper),
      },
    },
  });

  const theme = base
    .withPart(
      createPart({
        feature: 'checkboxStyle',
        params: {},
        css: checkboxStyles,
      })
    )
    .withPart(
      createPart({
        feature: 'radioStyle',
        params: {},
        css: radioStyles,
      })
    )
    .withPart(
      createPart({
        feature: 'headerCustomStyles',
        params: {},
        css: headerStyles,
      })
    )
    .withPart(
      createPart({
        feature: 'tooltipCustomStyles',
        params: {},
        css: tooltipStyles,
      })
    )
    .withPart(
      createPart({
        feature: 'inputCustomStyles',
        params: {},
        css: inputStyles,
      })
    )
    .withPart(
      createPart({
        feature: 'iconOverrides',
        params: {},
        css: iconCSS.css,
      })
    );

  return theme;
}

const getIxTheme = (agModule: AgGridModule, options?: IxThemeOptions) => {
  return createIxTheme(agModule, options);
};

const getIxThemeAsync = async (
  importModule: () => Promise<AgGridModule> | AgGridModule,
  options?: IxThemeOptions
) => {
  const agLib = await importModule();
  return createIxTheme(agLib, options);
};

export { getIxTheme, getIxThemeAsync };
