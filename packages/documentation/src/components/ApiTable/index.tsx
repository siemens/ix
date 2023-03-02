/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import './ApiTable.css';

export type ApiTableTagType = 'since' | 'deprecated';

export type ApiTableTag = {
  type: ApiTableTagType;
  message: string;
};

export type ApiTableEntry = {
  name: string;
  description: string;
  definition: ApiTableEntryDefinition;
  tags?: ApiTableTag[];
};

export type ApiTableEntryDefinition = {
  name: string;
  value: string;
}[];

function ApiTableRow(props: { attribute: ApiTableEntry }) {
  return (
    <div className="row with--border">
      <div className="col-sm-6">
        <div className="ApiTable__Name">
          {props?.attribute?.name}
          {props?.attribute?.tags
            ?.filter((tag) => tag.type === 'since')
            .map((tag) => (
              <div className="Tag">Since {tag.message}</div>
            ))}
          {props?.attribute?.tags
            ?.filter((tag) => tag.type === 'deprecated')
            .map((tag) => (
              <>
                <div className="Tag Tag--Deprecated">Deprecated</div>
                <div className="Tag__Message--Deprecated">{tag.message}</div>
              </>
            ))}
        </div>
      </div>
      <div className="col-sm-6">
        <div className="ApiTable__Content">
          <span className="Attribute__Description">
            {props?.attribute?.description}
          </span>
          <div className="container-fluid">
            {props?.attribute?.definition?.map((attribute) => (
              <div className="row Attribute" key={attribute.name}>
                <div className="col-auto Attribute__Name">
                  {attribute.name}:
                </div>
                <code className="col-auto Attribute__Value">
                  {attribute.value}
                </code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiTable(props: { attributes: ApiTableEntry[] }) {
  return (
    <div className="container-fluid ApiTable">
      <div className="row with--border">
        <div className="col-sm-6 ApiTable__Headline">Name</div>
        <div className="col-sm-6 ApiTable__Headline">
          Description and specifications
        </div>
      </div>
      {props?.attributes?.map((attribute) => (
        <ApiTableRow attribute={attribute} key={attribute.name} />
      ))}
    </div>
  );
}

export default ApiTable;
