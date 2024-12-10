/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { IxButton } from '@siemens/ix-react';
import Layout from '@theme/Layout';
import React, { useEffect, useLayoutEffect } from 'react';
import './uc.css';
import Notice from './_notice.md';

const CookieNotice: React.FC = () => {
  useEffect(() => {
    (window as any).UC_UI_SUPPRESS_CMP_DISPLAY = true;
  }, []);

  useLayoutEffect(() => {
    const UC_UI = (window as any).UC_UI;

    if (UC_UI && typeof UC_UI.restartEmbeddings === 'function') {
      UC_UI.restartEmbeddings();
    }
  }, []);

  return (
    <>
      <Layout title="Cookie Notice" description="Hello React Page">
        <div
          style={{
            padding: '0 4rem',
          }}
        >
          <h1>
            Siemens
            <br />
            Industrial Experience
          </h1>

          <h1>Cookie Notice</h1>
          <div>
            <IxButton
              onClick={() => {
                (window as any).UC_UI.showSecondLayer();
              }}
              style={{
                margin: '1rem 2rem 2rem 0',
              }}
            >
              Manage preferences
            </IxButton>
            <Notice />
            <div
              className="uc-embed"
              uc-data="all"
              uc-embedding-type="category"
              uc-styling="true"
            ></div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CookieNotice;
