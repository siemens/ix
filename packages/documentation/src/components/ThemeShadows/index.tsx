/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { toast } from '@siemens/ix';
import { IxCol, IxIconButton, IxLayoutGrid, IxRow } from '@siemens/ix-react';
import React, { useState } from 'react';
import { themeShadows } from './shadows';
import './ThemeShadows.css';
import { useTheme } from '@site/src/utils/hooks/useTheme';

function ShadowPreview(props: { border: string }) {
  return (
    <div className="Shadow__Preview">
      <div
        style={{
          boxShadow: `var(${props.border})`,
        }}
      ></div>
    </div>
  );
}

const ThemeShadows: React.FC = () => {
  useTheme();
  const [borders] = useState(themeShadows);

  const copyToClipboard = async (value: string) => {
    await navigator.clipboard.writeText(value);
    toast.success({
      message: 'Copied to clipboard!',
      autoCloseDelay: 800,
    });
  };

  return (
    <div className="Theme__Shadows">
      <IxLayoutGrid>
        {borders.map((border) => {
          return (
            <IxRow key={border} className={'Section'}>
              <IxCol size="2">
                <ShadowPreview border={border} />
              </IxCol>
              <IxCol size="9" className="Shadow__Name">
                {border}
              </IxCol>
              <IxCol size="1">
                <IxIconButton
                  icon="copy"
                  ghost
                  style={{ marginRight: '1rem' }}
                  className="Copy__Icon"
                  oval
                  onClick={() => copyToClipboard(border)}
                />
              </IxCol>
            </IxRow>
          );
        })}
      </IxLayoutGrid>
    </div>
  );
};

export default ThemeShadows;
