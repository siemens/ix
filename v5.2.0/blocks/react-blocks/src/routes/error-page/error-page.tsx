/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton } from '@siemens/ix-react';
import styles from './error-page.module.css';

export default function ErrorPage() {
  const goHome = () => {
    window.location.hash = '/';
  };

  return (
    <section className={styles.page} aria-label="404 error page">
      <div className={styles.spacer} />

      <div className={styles.content}>
        <p className={styles.errorCode}>404</p>

        <div className={styles.textContent}>
          <h1 className={styles.title}>Not found</h1>
          <p className={styles.message}>
            Sorry, we&apos;re not able to find that page. It may have been
            deleted or moved.
          </p>
        </div>

        <IxButton onClick={goHome}>Go home</IxButton>
      </div>

      <div className={styles.spacer} />
    </section>
  );
}