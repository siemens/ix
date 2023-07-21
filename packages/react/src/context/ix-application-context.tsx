/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PropsWithChildren } from 'react';
import { IxContext } from '../context';
import { ReactFrameworkDelegate, reactFrameworkDelegate } from '../delegate';
import { IxOverlay, PORTAL_ID } from '../modal/portal';

type Props = PropsWithChildren;

export class IxApplicationContext extends React.Component<Props> {
  private delegate: ReactFrameworkDelegate = reactFrameworkDelegate;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <IxContext.Provider
        value={{
          delegate: this.delegate,
        }}
      >
        {this.props.children}
        <IxOverlay delegate={this.delegate}></IxOverlay>
        <div id={PORTAL_ID}></div>
      </IxContext.Provider>
    );
  }
}
