/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import clsx from 'clsx';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './Color.module.css';
import alphaBackground from './transparency500.png';
import { useCopyToClipboard } from './utils/copy-clipboard';

/**
 * Color list is initial defined in @siemens/core-ui-core/scss/themes/utils/_define-theme-colors.scss
 */
const listOfMandatoryColors = [
  'color-primary',
  'color-1',
  'color-2',
  'color-3',
  'color-4',
  'color-4a',
  'color-5',
  'color-6',
  'color-7',
  'color-alarm',
  'color-critical',
  'color-info',
  'color-neutral',
  'color-success',
  'color-warning',
  'color-alarm-text',
  'color-contrast-text',
  'color-std-text',
  'color-soft-text',
  'color-weak-text',
  'color-inv-contrast-text',
  'color-inv-std-text',
  'color-inv-soft-text',
  'color-inv-weak-text',
  'color-lightbox',
  'color-backdrop',
  'color-ghost-hover',
  'color-ghost-active',
  'color-ghost-pressed',
  'color-ghost-selected',
];

export default function Color() {
  const [keyValueColors, setKeyValueColors] = useState<[string, string][]>([]);
  const refs = useRef<{ [k: string]: any }>({});

  const copyToClipboard = useCopyToClipboard((data: any) => `var(${data})`);

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
      <ToastContainer />
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
                  className="form-control"
                  defaultValue={k}
                  ref={refs[k]}
                  onFocus={(e) => {
                    copyToClipboard(e.target as HTMLInputElement);
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
