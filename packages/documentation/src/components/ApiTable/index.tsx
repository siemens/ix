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
  const description = props?.attribute?.description || '';
  const linkPattern = /\{@link "(.+?)"\}/;
  const parts = description.split(linkPattern);

  const content = (
    <>
      {parts.map((part, index) => {
        if (part.includes('http')) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
            >
              link
            </a>
          );
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </>
  );

  return (
    <div className="row with--border">
      <div className="col-sm-6">
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
      <div className="col-sm-6">
        <div className="ApiTable__Content">
          <div className="Attribute__Description">{content}</div>
          <div className="container-fluid">
            {props?.attribute?.definition
              ?.filter((attribute) => attribute.value !== undefined)
              .map((attribute) => (
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
