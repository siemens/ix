// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
