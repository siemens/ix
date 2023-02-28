/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import { toast } from '@siemens/ix';
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-react';
import React, { useState } from 'react';
import { resolveColorValue, themeColors } from './resolve-colors';
import './ThemeColors.css';

function Search(props: { onChange: (value: string) => void }) {
  return (
    <IxInputGroup style={{ marginBottom: '2rem' }}>
      <IxIcon
        name="search"
        slot="input-start"
        size="16"
        color="color-primary"
      ></IxIcon>

      <input
        type={'text'}
        className={'form-control'}
        placeholder="Search"
        onChange={(input) => {
          const value = input.target.value;
          props.onChange(value);
        }}
      />
    </IxInputGroup>
  );
}

function ColorPreview(props: { color: string }) {
  const baseUrl = useBaseUrl('/');
  return (
    <div className="col-1">
      <div className="Color__Preview">
        <img src={`${baseUrl}img/transparency500.png`} />
        <div
          className="Color__Value"
          style={{
            backgroundColor: props.color,
          }}
        ></div>
      </div>
    </div>
  );
}

function ThemeColors() {
  const [colors, setColors] = useState(themeColors);

  const updateFilter = (filter) => {
    setColors([
      ...themeColors.filter((color) => {
        if (!filter) {
          return true;
        }

        return color.toLowerCase().includes(filter.toLowerCase());
      }),
    ]);
  };

  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast.success({
      message: 'Copied to clipboard!',
      autoCloseDelay: 800,
    });
  };

  return (
    <div className="Theme__Colors">
      <Search onChange={(value) => updateFilter(value)} />
      <div className="container-fluid">
        {colors.map((color) => {
          const colorValue = resolveColorValue(color);
          return (
            <div key={color} className={'Section row'}>
              <ColorPreview color={colorValue} />
              <div className="col-7 Color__Name">{color}</div>
              <div className="col Color__RGB">{colorValue}</div>
              <IxIconButton
                icon="copy"
                ghost
                style={{ marginRight: '1rem' }}
                className="col-1 Copy__Icon"
                oval
                onClick={() => copyToClipboard(color)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeColors;
