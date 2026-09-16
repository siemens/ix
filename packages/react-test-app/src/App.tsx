/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxTypography } from '@siemens/ix-react';

function App({ paths = [] }: { paths?: string[] }) {
  return (
    <div style={{ padding: '1rem' }}>
      <IxTypography format="h2">React preview examples</IxTypography>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '1rem 0 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
      >
        {[...paths].sort().map((path) => (
          <li key={path}>
            <a href={path}>{path.replace('/preview/', '')}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
