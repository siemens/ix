/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { ReactNode, isValidElement, cloneElement } from 'react';
import { IxIcon, IxTypography } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

import './NoteBlock.scss';

function prependHref(node: ReactNode): ReactNode {
  if (isValidElement(node)) {
    if (node.props.href) {
      return cloneElement(node, {
        href: `./../../../docs/controls/${node.props.href}`,
        children: React.Children.map(node.props.children, prependHref),
      });
    }
    return cloneElement(node, {
      children: React.Children.map(node.props.children, prependHref),
    });
  }
  return node;
}

export default function NoteBlock(props: { children: React.ReactNode }) {
  const modifiedChildren = React.Children.map(props.children, prependHref);

  return (
    <div className="NoteBlock">
      <div className="NoteBlock__Header">
        <IxIcon name={iconInfo} size="16"></IxIcon>
        <IxTypography format="label-lg" bold>
          NOTE
        </IxTypography>
      </div>
      <div className="NoteBlock__Content">
        <IxTypography format="label-lg">{modifiedChildren}</IxTypography>
      </div>
    </div>
  );
}
