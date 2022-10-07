/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import './DesignKit.css';

export default function DesignKit() {
  return (
    <div className="Design__Kit">
      <div className="text-h2 Label">Access our design kits below!</div>
      <div className="Icon">
        <i className="glyph glyph-download" />
      </div>
    </div>
  );
}
