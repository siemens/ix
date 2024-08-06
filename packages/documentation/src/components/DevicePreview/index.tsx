/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton } from '@siemens/ix-react';
import './DevicePreview.scss';
import { useState } from 'react';
import clsx from 'clsx';

const DevicePreview = (props: { children: any }) => {
  return (
    <>
      <div className="DeviceToolbar"></div>
      <figure className="DevicePreview">
        <div className="Content">
          <iframe src={`/ionic-preview?preview-mode=ios`}></iframe>
        </div>
        <div className="Frame"></div>
      </figure>
    </>
  );
};

export default DevicePreview;
