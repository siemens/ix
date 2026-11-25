/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { addons, types, useGlobals } from 'storybook/manager-api';
import { Button, PopoverProvider } from 'storybook/internal/components';

const FONT_SIZE_GLOBAL = 'ixFontSize';

const ADDON_ID = 'ix/font-size';
const DEFAULT_FONT_SIZE = 16;
const MIN_FONT_SIZE = 8;
const MAX_FONT_SIZE = 32;

const h = React.createElement;

function FontSizeIcon() {
  return h(
    'svg',
    {
      width: 14,
      height: 14,
      viewBox: '0 0 14 14',
      fill: 'currentColor',
      'aria-hidden': true,
    },
    h('text', { x: 0, y: 12, fontSize: 9, fontWeight: 700 }, 'A'),
    h('text', { x: 6, y: 12, fontSize: 13, fontWeight: 700 }, 'A')
  );
}

function FontSizeTool() {
  const [globals, updateGlobals] = useGlobals();
  const value = Number(globals[FONT_SIZE_GLOBAL]);
  const isCustom = Number.isFinite(value) && value > 0;
  const fontSize = isCustom ? value : DEFAULT_FONT_SIZE;

  const setFontSize = (size: number | '') =>
    updateGlobals({ [FONT_SIZE_GLOBAL]: size });

  const popover = h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 220,
      },
    },
    h(
      'label',
      {
        htmlFor: `${ADDON_ID}-slider`,
        style: { display: 'flex', justifyContent: 'space-between' },
      },
      h('span', null, 'Base font size'),
      h('strong', null, `${fontSize}px`)
    ),
    h('input', {
      id: `${ADDON_ID}-slider`,
      type: 'range',
      min: MIN_FONT_SIZE,
      max: MAX_FONT_SIZE,
      step: 1,
      value: fontSize,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        setFontSize(Number(event.target.value)),
    }),
    h(
      Button,
      {
        size: 'small',
        variant: 'outline',
        ariaLabel: false,
        disabled: !isCustom,
        onClick: () => setFontSize(''),
      },
      `Reset to default (${DEFAULT_FONT_SIZE}px)`
    )
  );

  return h(
    PopoverProvider,
    {
      ariaLabel: 'Base font size',
      placement: 'bottom',
      padding: 12,
      popover,
    },
    h(
      Button,
      {
        key: ADDON_ID,
        variant: 'ghost',
        padding: 'small',
        ariaLabel: 'Base font size',
        tooltip: isCustom
          ? `Base font size: ${fontSize}px`
          : 'Base font size (default)',
      },
      h(FontSizeIcon),
      isCustom ? h('span', null, `${fontSize}px`) : null
    )
  );
}

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOL,
    title: 'Base font size',
    match: ({ viewMode, tabId }) =>
      !tabId && (viewMode === 'story' || viewMode === 'docs'),
    render: FontSizeTool,
  });
});
