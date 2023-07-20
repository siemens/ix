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
import { IxOverlay } from '../modal/portal';

type Props = PropsWithChildren;

export class IxApplicationContext extends React.Component<Props> {
  static PORTAL_ID = 'ix-portal';
  private delegate: ReactFrameworkDelegate = reactFrameworkDelegate;

  constructor(props: Props) {
    super(props);
  }

  addOverlay?: (id: string, view: any) => void;
  removeOverlay?: (id: string) => void;

  render() {
    return (
      <IxContext.Provider
        value={{
          delegate: this.delegate,
          addOverlay: (id, view) =>
            this.addOverlay && this.addOverlay(id, view),
          removeOverlay: (id) => this.removeOverlay && this.removeOverlay(id),
        }}
      >
        {this.props.children}
        <IxOverlay delegate={this.delegate}></IxOverlay>
        <div id={IxApplicationContext.PORTAL_ID}></div>
      </IxContext.Provider>
    );
  }
}
