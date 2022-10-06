/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import styles from './Card.module.css';

export function Card(
  props: React.PropsWithChildren<{
    label: string;
    isPrimary?: boolean;
    icon?: string;
    link: string;
    size: string;
    autoWidth?: boolean;
    style?: CSSProperties;
  }>
) {
  const { preferredVersion } = useDocsPreferredVersion();

  function link() {
    if (!preferredVersion) {
      return useBaseUrl(`/docs/${props.link}`);
    }

    if (props.link?.startsWith('http')) {
      return props.link;
    }
    const path = preferredVersion.path;

    return useBaseUrl(`${path}/${props.link}`);
  }
  function getIcon() {
    //@ts-ignore
    return <ix-icon name={props.icon}></ix-icon>;
  }

  return (
    <Link
      to={link()}
      style={{
        textDecoration: 'none',
      }}
    >
      <div
        className={clsx(
          styles.Card,
          {
            [styles.Card__Primary]: props.isPrimary,
            [styles.With__Icon]: props.icon,
            [styles.Auto__Width]: props.autoWidth,
          },
          props.size === 'big' ? styles.Card_big : styles.Card
        )}
        style={props.style}
      >
        <div
          className={clsx(styles.Label, 'text-h2', {
            [styles.Full__Height]: !props.icon,
          })}
        >
          {props.label}
        </div>
        {props.icon ? (
          <>
            <div className={styles.Splitter}></div>
            <div className={clsx(styles.Icon)}>{getIcon()}</div>
          </>
        ) : null}
        {props.children}
      </div>
    </Link>
  );
}

export function CardList(props: React.PropsWithChildren<any>) {
  return <div className={clsx(styles.Card__List)}>{props.children}</div>;
}
