/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

export default async function loadExamples(
  name: string,
  frameworks = ['web-component', 'angular', 'react', 'vue']
) {
  const config = {};

  if (frameworks.includes('web-component')) {
    const { default: WebComponentHTML } = await import(
      //@ts-ignore
      `../../docs/auto-generated/previews/web-component/${name}.md`
    );

    config['javascript'] = WebComponentHTML as React.ReactElement;
  }

  if (frameworks.includes('react')) {
    const { default: ReactTSX } = await import(
      //@ts-ignore
      `../../docs/auto-generated/previews/react/${name}.md`
    );

    config['react'] = ReactTSX as React.ReactElement;
  }

  if (frameworks.includes('vue')) {
    const { default: Vue } = await import(
      //@ts-ignore
      `../../docs/auto-generated/previews/vue/${name}.md`
    );

    config['vue'] = Vue as React.ReactElement;
  }

  if (frameworks.includes('angular')) {
    const { default: AngularTS } = await import(
      //@ts-ignore
      `../../docs/auto-generated/previews/angular/${name}.ts.md`
    );

    const { default: AngularHTML } = await import(
      //@ts-ignore
      `../../docs/auto-generated/previews/angular/${name}.html.md`
    );

    config['angular'] = {
      [`${name}.html`]: AngularHTML,
      [`${name}.ts`]: AngularTS,
    };
  }

  return config;
}
