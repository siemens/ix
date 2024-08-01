/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect, useState } from 'react';
import './accordion.scss';
import clsx from 'clsx';
import { IxIcon } from '@siemens/ix-react';

let uniqueId = 0;

export default function Accordion(
  props: React.PropsWithChildren<{
    title: string;
    id?: string;
    showBorderBottom: boolean;
  }>
) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const panelId = `accordion-${props.id || uniqueId++}-panel`;

  function onHeaderKeyDown(e: React.KeyboardEvent<HTMLHeadingElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      setExpanded(!expanded);
      e.preventDefault();
    }
  }

  useEffect(() => {
    if (props.id && window.location.hash === `#${props.id}`) {
      setExpanded(true);
      document.getElementById(props.id)?.scrollIntoView();
    }
  }, [props.id]);

  return (
    <div
      className={clsx('Accordion', {
        ['Accordion__Expanded']: expanded,
        ['Accordion__Last']: props.showBorderBottom,
      })}
    >
      <a id={props.id}></a>
      <h3
        onClick={() => setExpanded(!expanded)}
        onKeyDown={(e) => {
          onHeaderKeyDown(e);
        }}
        role="heading"
      >
        <div
          className="Accordion__Header"
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          aria-controls={panelId}
        >
          <span className="anchor Accordion__Title" id={props.id}>
            {props.title}
          </span>
          <IxIcon
            color={expanded ? 'color-dynamic' : 'color-std-text'}
            name={expanded ? 'minus' : 'plus'}
          ></IxIcon>
        </div>
      </h3>
      {expanded && (
        <div id={panelId} className="Accordion__Panel">
          {props.children}
        </div>
      )}
    </div>
  );
}
