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
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function OpenStackblitz(
  props: Readonly<{
    mount: string;
    framework: FrameworkTypes;
    files: Record<string, string>;
  }>
) {
  const context = useDocusaurusContext();
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
              version:
                (context.siteConfig.customFields.playgroundVersion as string) ??
                'latest',
            });
          }}
        >
          {React.createElement('ix-icon', {
            name: iconElectricalEnergyFilled,
            size: '16',
          })}
          <span className="ButtonText">Open Stackblitz</span>
        </Button>
      )}
    </BrowserOnly>
  );
}
