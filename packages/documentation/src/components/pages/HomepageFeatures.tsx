/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'animate__animated animate__fadeInUp')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={`${image}`} />
      </div>
      <div className="text--center padding-horiz--sm text-default">{description}</div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const base = useBaseUrl('/');

  const FeatureList: FeatureItem[] = [
    {
      title: 'Sketch Library',
      image: base + 'img/394px-Sketch_Logo.png',
      description: (
        <>
          <p className="mb-0">Download our</p>
          <p>
            <a href={base + 'files/core_ui_sketch.zip'} target="_blank">
              latest Sketch Library
            </a>
          </p>
        </>
      ),
    },
    {
      title: 'Powered by Web components',
      image: base + 'img/webcomponents.png',
      description: (
        <>
          <p className="mb-0">Powered by</p>
          <p className="mb-0">Web components</p>
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container mt-0">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
