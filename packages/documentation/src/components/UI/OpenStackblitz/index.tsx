/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Button from '../Button';
import { iconElectricalEnergyFilled } from '@siemens/ix-icons/icons';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { openStackBlitz } from '@site/src/lib/stackblitz';
import { FrameworkTypes } from '@site/src/hooks/use-framework';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function OpenStackblitz(
  props: Readonly<{
    mount: string;
    framework: FrameworkTypes;
    files: Record<string, string>;
  }>
) {
  const baseUrl = useBaseUrl('/demo/v2/');

  return (
    <BrowserOnly>
      {() => (
        <Button
          onClick={() => {
            openStackBlitz({
              baseUrl,
              framework: props.framework,
              name: props.mount,
              sourcePath: props.files,
              version: 'latest',
            });
          }}
        >
          {React.createElement('ix-icon', { name: iconElectricalEnergyFilled })}
          <span className="ButtonText">Open Stackblitz</span>
        </Button>
      )}
    </BrowserOnly>
  );
}
