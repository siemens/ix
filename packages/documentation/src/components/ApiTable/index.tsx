/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { ApiTableDeprecatedTag, ApiTableSinceTag } from '../ApiTableTag';
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
    <div className="ApiTable__Row with--border">
      <div className="ApiTable__Col">
        <div className="ApiTable__Name">
          {props?.attribute?.name}
          {props?.attribute?.tags
            ?.filter((tag) => tag.type === 'since')
            .map((tag) => (
              <ApiTableSinceTag
                message={tag.message}
                key={`Tag_Since_${props?.attribute?.name}`}
              />
            ))}
          {props?.attribute?.tags
            ?.filter((tag) => tag.type === 'deprecated')
            .map((tag) => (
              <ApiTableDeprecatedTag
                message={tag.message}
                key={`Tag_Deprecated_${props?.attribute?.name}`}
              />
            ))}
        </div>
      </div>
      <div className="ApiTable__Col">
        <div className="ApiTable__Content">
          <span className="Attribute__Description">
            {props?.attribute?.description}
          </span>
          <div>
            {props?.attribute?.definition
              ?.filter((attribute) => attribute.value !== undefined)
              .map((attribute) => (
                <div className="ApiTable__Row Attribute" key={attribute.name}>
                  <div className="ApiTable__ColAuto Attribute__Name">
                    {attribute.name}:
                  </div>
                  <code className="ApiTable__ColAuto Attribute__Value">
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
    <div className="ApiTable">
      <div className="ApiTable__Row with--border">
        <div className="ApiTable__Col ApiTable__Headline">Name</div>
        <div className="ApiTable__Col ApiTable__Headline">
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
