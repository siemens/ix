/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import './GuidingPrinciples.scss';

function GuidingPrincipleCard(props: { name: string }) {
  const { name } = props;
  return <div>{name}</div>;
}

function GuidingPrinciples() {
  return (
    <div className="GuidingPrinciples">
      <GuidingPrincipleCard name="xx" />
    </div>
  );
}

export default GuidingPrinciples;
