/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mySidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'contact-us',
    },
    {
      type: 'category',
      label: 'What\'s happening?',
      items: [
        {
          type: 'doc',
          id: 'roadmap',
        },
        {
          type: 'doc',
          id: 'release-info',
        },
        {
          type: 'doc',
          id: 'installation/CHANGELOG',
        },
      ],
    },
    {
      type: 'category',
      label: 'Designing',
      items: [
        {
          type: 'doc',
          id: 'getting-started-for-designers',
        },
        {
          type: 'doc',
          id: 'design-kit/design-kit',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developing',
      items: [
        {
          type: 'doc',
          id: 'getting-started',
        },
        {
          type: 'category',
          label: 'Installation',
          items: [
            {
              type: 'doc',
              id: 'installation/installation',
            },
            {
              type: 'doc',
              id: 'installation/angular',
            },
            {
              type: 'doc',
              id: 'installation/react',
            },
            {
              type: 'doc',
              id: 'installation/javascript',
            },
            {
              type: 'doc',
              id: 'installation/vue',
            },
            {
              type: 'doc',
              id: 'installation/blazor',
            },
            {
              type: 'doc',
              id: 'installation/csp',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'UX Writing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'language',
        },
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        {
          type: 'autogenerated',
          dirName: 'migration',
        },
      ],
    },
    {
      type: 'category',
      label: 'Styles',
      items: [
        {
          type: 'doc',
          id: 'icon-library/icons',
        },
        {
          type: 'autogenerated',
          dirName: 'theming',
        },
      ],
    },
    {
      type: 'category',
      label: 'Theming',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines',
        },
      ],
    },
    {
      type: 'category',
      label: 'Components',
      items: [
        {
          type: 'autogenerated',
          dirName: 'controls',
        },
      ],
    },
  ],
};

export default sidebars;
