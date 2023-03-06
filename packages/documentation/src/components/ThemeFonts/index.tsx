/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { toast } from '@siemens/ix';
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-react';
import React, { useState } from 'react';
import { themeFonts } from './fonts';
import './ThemeFonts.css';

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

function FontPreview(props: { font: string }) {
  return (
    <div className="col-4 Font__Preview" style={{ font: `var(${props.font})` }}>
      The quick brown fox
      <br /> jumps over the lazy dog.
    </div>
  );
}

function ThemeFonts() {
  const [fonts, setFonts] = useState(themeFonts);

  const updateFilter = (filter) => {
    setFonts([
      ...themeFonts.filter((font) => {
        if (!filter) {
          return true;
        }

        return font.toLowerCase().includes(filter.toLowerCase());
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
    <div className="Theme__Fonts">
      <Search onChange={(value) => updateFilter(value)} />
      <div className="container-fluid">
        {fonts.map((font) => {
          return (
            <div key={font} className={'Section row'}>
              <FontPreview font={font} />
              <div className="col-7 Fonts__Name">
                {font.substring('--theme-'.length)}
              </div>
              <IxIconButton
                icon="copy"
                ghost
                className="col-1 Copy__Icon"
                oval
                onClick={() =>
                  copyToClipboard(font.substring('--theme-'.length))
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeFonts;
