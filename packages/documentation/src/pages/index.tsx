/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ImageUrl from '@site/static/img/logo_coreui.svg';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { getDefaultTheme } from '../components/config';
import HomepageFeatures from '../components/pages/HomepageFeatures';
import styles from './index.module.css';

function FooterButton(props: { label: string; icon: string }) {
  return (
    <div
      className={clsx(
        styles.Footer_Button,
        'animate__animated animate__fadeInUp'
      )}
    >
      <div className={clsx('text-h2', styles.Footer__Button__Title)}>
        {props.label}
      </div>
      <div className={styles.Footer_Button__Icon}>
        <i
          className={clsx(
            'glyph glyph-' + props.icon,
            styles.Big__Icon,
            'animate__animated animate__headShake animate__infinite'
          )}
        ></i>
      </div>
    </div>
  );
}

function Homepage() {
  const base = useBaseUrl('/');
  const context = useDocusaurusContext();

  useEffect(() => {
    document.body.className = getDefaultTheme(context);
  }, []);

  return (
    <div className={styles.Homepage}>
      <div className={styles.Homepage__Main}>
        <div className={styles.Homepage__Left}>
          <div
            className={clsx(
              styles.Homepage__Headline,
              'text-h2',
              'animate__animated animate__fadeIn'
            )}
          >
            <div>
              <p
                className="mb-0"
                style={{
                  fontWeight: 'normal',
                  fontStretch: 'normal',
                  fontStyle: 'normal',
                }}
              >
                Welcome to
              </p>
              <p className="mb-0" style={{ fontWeight: 900 }}>
                Siemens iX
              </p>
            </div>
          </div>
          <div
            className={clsx(
              styles.Homepage__Text,
              'animate__animated animate__fadeInLeft'
            )}
          >
            iX provides a{' '}
            <span className={styles.Homepage__Text__Signal}>
              holistic design system
            </span>{' '}
            for building attractive and intuitive web applications. It allows
            for a{' '}
            <span className={styles.Homepage__Text__Signal}>
              fully integrated workstream
            </span>{' '}
            from the concept and design phases all the way to actual UI
            development. UX designers can build high fidelity mockups and visual
            designs with{' '}
            <span className={styles.Homepage__Text__Signal}>
              iX design elements
            </span>
            , that later can easily be implemented using pixel perfect and
            highly reusable{' '}
            <span className={styles.Homepage__Text__Signal}>
              iX Web Components
            </span>
            .
          </div>
        </div>
        <div className={styles.Homepage__Right}>
          <ImageUrl
            className={clsx(
              styles.Logo,
              'animate__animated animate__fadeInRightBig'
            )}
          />
        </div>
      </div>
      <div className={styles.Homepage__Footer}>
        <Link
          to={`${base}docs/getting-started`}
          style={{
            textDecoration: 'none',
          }}
        >
          <FooterButton label="Getting started now!" icon="arrow-right" />
        </Link>
        <div className={styles.Homepage__Features}>
          <HomepageFeatures></HomepageFeatures>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={`
      Siemens iX provides a holistic design system for building attractive and intuitive web applications.
      It allows for a fully integrated workstream from the concept and design phases all the way to actual UI development.
      UX designers can build high fidelity mockups and visual designs with Siemens iX design elements,
      that later can easily be implemented using pixel perfect and highly reusable Siemens iX Web Components.
      Siemens iX is aligned with Siemens Brand Design, to ensure a continuous evolution path for application user interfaces.
    `}
    >
      <Homepage />
    </Layout>
  );
}
