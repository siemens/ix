/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import clsx from 'clsx';
import './DevicePreview.scss';
import { useTheme } from '@site/src/utils/hooks/useTheme';

const DevicePreview = (props: {
  children: any;
  image?: string;
  style?: any;
}) => {
  const theme = useTheme();

  return (
    <figure className="DevicePreview" style={props.style}>
      <div className="Content">
        {props.image ? (
          <img src={props.image} alt="Device preview" />
        ) : (
          <iframe
            src={`/ionic-preview/?preview-mode=ios&preview-theme=${theme}#/`}
          ></iframe>
        )}
      </div>
      <div
        className={clsx('Frame', {
          Light: theme.includes('-light'),
          NoUI: !!props.image,
        })}
      ></div>
    </figure>
  );
};

export default DevicePreview;
