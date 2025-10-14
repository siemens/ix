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
import { aggridIxThemeParams } from './aggrid-ix-theme-params.ts';
import { iconOverrides } from 'ag-grid-community';
import {
  iconFilter,
  iconSortDescending,
  iconSortAscending,
  iconAppMenu,
  iconDragGripper,
} from '@siemens/ix-icons/icons';

type AgGridModule = typeof AgGridCommunity;

function extractSvgFromDataUri(dataUri: string): string {
  let svgString = dataUri.replace(/^data:image\/svg\+xml;utf8,/, '');
  svgString = decodeURIComponent(svgString);
  svgString = svgString.replace(/<\?xml[^?]*\?>/g, '');
  svgString = svgString.replace(/fill='none'/g, "fill='currentColor'");
  svgString = svgString.replace(/stroke='none'/g, "stroke='currentColor'");

  return svgString.trim();
}

const useIxTheme = async (
  importModule: () => Promise<AgGridModule> | AgGridModule
) => {
  const { createPart, themeAlpine } = await importModule();
  const base = themeAlpine.withParams({
    ...aggridIxThemeParams,
  });

  function modifyParts() {
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
      .withoutPart('checkboxStyle')
      .withPart(
        createPart({
          feature: 'checkboxStyle',
          params: {},
          css: checkboxStyles,
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
          feature: 'iconOverrides',
          params: {},
          css: iconCSS.css,
        })
      );

    return theme;
  }

  return modifyParts();
};

export { useIxTheme };
