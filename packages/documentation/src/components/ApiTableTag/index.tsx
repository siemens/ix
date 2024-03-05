/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import './ApiTableTag.css';

export function ApiTableDeprecatedTag(props: { message: string }) {
  return (
    <div className="ApiTableTag">
      <div className="Tag Tag--Deprecated">Deprecated</div>
      <div className="Tag__Message--Deprecated">{props.message}</div>
    </div>
  );
}

export function ApiTableSinceTag(props: { message: string }) {
  return (
    <div className="ApiTableTag">
      <div className="Tag">Since {props.message}</div>
    </div>
  );
}
