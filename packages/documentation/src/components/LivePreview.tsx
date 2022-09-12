/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import HTMLPreview from '@site/src/components/HTMLPreview';
import React from 'react';

export default function LivePreview(props: {
  name: string;
  height: string;
  hideCode?: boolean;
  framework?: 'webcomponent' | 'angular';
  theme?: string;
}): JSX.Element {
  return (
    <>
      <HTMLPreview {...props}></HTMLPreview>
    </>
  );
}
