/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './Color.module.css';
import alphaBackground from './transparency500.png';

const listOfMandatoryColors = [
  'color-ghost',
  'color-ghost--hover',
  'color-ghost--active',
  'color-primary',
  'color-primary--contrast',
  'color-primary--hover',
  'color-primary--active',
  'color-dynamic',
  'color-secondary',
  'color-secondary--hover',
  'color-secondary--active',
  'color-component-1',
  'color-component-1--hover',
  'color-component-1--active',
  'color-component-2',
  'color-component-3',
  'color-component-4',
  'color-component-5',
  'color-component-6',
  'color-component-7--hover',
  'color-component-7',
  'color-component-7--active',
  'color-component-error',
  'color-component-8',
  'color-ghost--selected',
  'color-ghost--selected-hover',
  'color-ghost--selected-active',
  'color-ghost-primary--active',
  'color-ghost-primary--hover',
  'color-ghost-alt',
  'color-ghost-alt--hover',
  'color-ghost-alt--active',
  'color-ghost-alt--selected',
  'color-ghost-alt--selected-hover',
  'color-ghost-alt--selected-active',
  'color-primary--disabled',
  'color-dynamic--hover',
  'color-dynamic--active',
  'color-dynamic-alt',
  'color-dynamic-alt--hover',
  'color-dynamic-alt--active',
  'color-component-8--hover',
  'color-component-9',
  'color-component-9--hover',
  'color-component-9--active',
  'color-component-9--disabled',
  'color-component-10',
  'color-component-10--hover',
  'color-component-10--active',
  'color-component-10--disabled',
  'color-1--hover',
  'color-1--active',
  'color-component-11',
  'color-0',
  'color-1',
  'color-2',
  'color-3',
  'color-4',
  'color-5',
  'color-6',
  'color-7',
  'color-8',
  'color-std-bdr',
  'color-soft-bdr',
  'color-weak-bdr',
  'color-x-weak-bdr',
  'color-focus-bdr',
  'color-contrast-bdr',
  'color-alarm',
  'color-alarm--hover',
  'color-alarm--active',
  'color-alarm--contrast',
  'color-alarm-40',
  'color-alarm-10',
  'color-warning',
  'color-warning--hover',
  'color-warning--active',
  'color-warning--contrast',
  'color-warning-40',
  'color-warning-10',
  'color-critical',
  'color-critical--hover',
  'color-critical--active',
  'color-critical--contrast',
  'color-critical-40',
  'color-success',
  'color-success--hover',
  'color-success--active',
  'color-success--contrast',
  'color-success-40',
  'color-info',
  'color-info--hover',
  'color-info--active',
  'color-info--contrast',
  'color-info-40',
  'color-neutral',
  'color-neutral--hover',
  'color-neutral--active',
  'color-neutral--contrast',
  'color-neutral-40',
  'color-contrast-text',
  'color-std-text',
  'color-soft-text',
  'color-weak-text',
  'color-inv-contrast-text',
  'color-inv-std-text',
  'color-inv-soft-text',
  'color-inv-weak-text',
  'color-alarm-text',
  'color-shadow-1',
  'color-shadow-2',
  'color-shadow-3',
  'color-lightbox',
  'color-backdrop',
  'color-backdrop-3',
];

export default function Color() {
  const [keyValueColors, setKeyValueColors] = useState<[string, string][]>([]);
  const refs = useRef<{ [k: string]: any }>({});

  useLayoutEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      extractCustomCssProperties();
    });

    const extractCustomCssProperties = () => {
      setTimeout(() => {
        const computedStyle = getComputedStyle(document.body);
        const styleValues: [string, string][] = listOfMandatoryColors.map(
          (name) => [
            `--theme-${name}`,
            computedStyle.getPropertyValue(`--theme-${name}`),
          ]
        );

        setKeyValueColors(styleValues);
      });
    };

    extractCustomCssProperties();

    mutationObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <table className={clsx(styles.table)}>
        <thead>
          <tr>
            <th>Custom Property Name</th>
            <th>Name</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {keyValueColors.map(([k, v]) => (
            <tr key={k}>
              <td>
                <input
                  readOnly
                  className="form-control"
                  defaultValue={k}
                  ref={refs[k]}
                  onFocus={(e) => {
                    // copyToClipboard(e.target as HTMLInputElement);
                  }}
                />
              </td>
              <td>{k.substring('--theme-color-'.length)}</td>
              <td className={clsx(styles.colorPreviewRow)}>
                <img className={clsx(styles.img)} src={alphaBackground} />
                <div
                  className={clsx(styles.colorPreview)}
                  style={{
                    backgroundColor: v,
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
