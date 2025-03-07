/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  IxCol,
  IxIcon,
  IxIconButton,
  IxInputGroup,
  IxLayoutGrid,
  IxRow,
  showToast,
} from '@siemens/ix-react';
import React, { useEffect, useState } from 'react';
import { resolveColorValue, themeColors } from './resolve-colors';
import './ThemeColors.css';
import { useTheme } from '@site/src/utils/hooks/useTheme';

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
    <div className="Color__Preview">
      <img src={`${baseUrl}img/chessboard_pattern.png`} />
      <div
        className="Color__Value"
        style={{
          backgroundColor: props.color,
        }}
      ></div>
    </div>
  );
}

const ThemeColors: React.FC = () => {
  const [colors, setColors] = useState(themeColors);
  const theme = useTheme();

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
    await showToast({
      message: 'Copied to clipboard!',
      autoCloseDelay: 800,
    });
  };

  useEffect(() => {
    setColors([...colors]);
  }, [theme]);

  return (
    <div className="Theme__Colors">
      <Search onChange={(value) => updateFilter(value)} />
      <IxLayoutGrid>
        {colors.map((color) => {
          const colorValue = resolveColorValue(color);
          return (
            <IxRow key={color} className={'Section'}>
              <IxCol size="3">
                <ColorPreview color={colorValue!} />
              </IxCol>
              <IxCol size="5">
                <div className="Color__Name">{color}</div>
              </IxCol>
              <IxCol size="3">
                <div className="Color__RGB">{colorValue}</div>
              </IxCol>
              <IxCol size="1">
                <IxIconButton
                  icon="copy"
                  ghost
                  style={{ marginRight: '1rem' }}
                  className="Copy__Icon"
                  oval
                  onClick={() => copyToClipboard(color)}
                />
              </IxCol>
            </IxRow>
          );
        })}
      </IxLayoutGrid>
    </div>
  );
};

export default ThemeColors;
