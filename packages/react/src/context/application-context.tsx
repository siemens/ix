'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { PropsWithChildren } from 'react';
import { ReactFrameworkDelegate, reactFrameworkDelegate } from '../delegate';
import { IxOverlay, PORTAL_ID } from '../modal/portal';
import { IxContext } from './context';

export type IxApplicationContextProps = PropsWithChildren;

export class IxApplicationContext extends React.Component<IxApplicationContextProps> {
  private delegate: ReactFrameworkDelegate = reactFrameworkDelegate;

  constructor(props: IxApplicationContextProps) {
    super(props);
    this.delegate.isUsingReactPortal = true;
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
