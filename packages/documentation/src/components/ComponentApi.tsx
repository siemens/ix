// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { resolveStencilComponent } from '@site/src/utils/compodoc.util';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useFramework } from '../utils/useFramework';
import styles from './ComponentApi.module.css';

function StencilApi(props: { name: string }) {
  const [inputs, setInputs] = useState<
    Partial<{
      name: string;
      type: string;
      mutable: boolean;
      attr: string;
      reflectToAttr: boolean;
      docs: string;
      docsTags: any[];
      default: string;
      values: {
        type: string;
      }[];
      optional: boolean;
      required: boolean;
    }>[]
  >([]);

  const [outputs, setOutputs] = useState<
    {
      event: string;
      detail: string;
      bubbles: boolean;
      cancelable: boolean;
      composed: boolean;
      docs: string;
      docsTags: any[];
    }[]
  >([]);

  useEffect(() => {
    const component = resolveStencilComponent(props.name);
    if (component?.props) {
      setInputs(component.props);
    }

    if (component?.events) {
      setOutputs(component.events);
    }
  }, []);

  const getProperties = () => {
    if (inputs?.length === 0) {
      return null;
    }
    return (
      <>
        <p className="text-l-title">Properties</p>
        <table
          cellSpacing="4"
          className={clsx(
            'table',
            styles.componentApiTable,
            'text-default'
          )}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Attribute</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((input, i) => (
              <tr key={i} className={clsx(styles.row)}>
                <td>{input.name}</td>
                <td>{input?.attr}</td>
                <td>{input?.docs}</td>
                <td>{input?.type}</td>
                <td>{input?.default}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const getEvents = () => {
    if (outputs?.length === 0) {
      return null;
    }
    return (
      <>
        <p className="text-l-title">Events</p>
        <table
          cellSpacing="4"
          className={clsx('table', styles.componentApiTable)}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {outputs.map((output, i) => (
              <tr key={i} className={clsx(styles.row)}>
                <td>{output.event}</td>
                <td>{output?.docs}</td>
                <td>{output?.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      {getProperties()}
      {getEvents()}
    </>
  );
}

export default function ComponentApi(props: {
  name: string;
  framework: string;
}): JSX.Element {
  const framework = useFramework(undefined);

  return (
    <>
      <p className="text-l-title">{props.name}</p>
      <StencilApi name={props.name}></StencilApi>
    </>
  );
}
