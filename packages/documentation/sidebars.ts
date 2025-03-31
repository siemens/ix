/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

function createTabItem(item: {
  id: string;
  label: string;
  items: {
    id: string;
    label: string;
  }[];
}): any {
  return {
    type: 'category',
    label: item.label,
    link: {
      type: 'doc',
      id: item.id,
    },
    className: 'category-tabs',
    collapsed: true,
    collapsible: false,
    items: item.items.map((child) => ({
      type: 'doc',
      id: child.id,
      className: 'display-none',
      label: child.label,
    })),
  };
}

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  home: [
    'home/overview',
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',
      label: 'Getting started',
      items: [
        'home/getting-started/developers',
        'home/getting-started/designers',
        'home/getting-started/starter-app',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',
      label: 'Migration and upgrade',
      items: [
        'home/migration/3_0_0/index',
        'home/migration/2_0_0/index',
        'home/migration/core-ui',
        'home/migration/uxt',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',
      label: 'Installation',
      items: [
        'home/installation/angular',
        'home/installation/react',
        'home/installation/javascript',
        'home/installation/vue',
        'home/installation/blazor',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Theme',
      items: ['home/theming/usage-developers', 'home/theming/usage-designers'],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Releases',
      items: [
        'home/releases/roadmap',
        'home/releases/release-version',
        'home/releases/changelog',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Support',
      items: [
        'home/support/contact-us',
        'home/support/faq',
        {
          type: 'link',
          href: 'https://github.com/siemens/ix',
          label: 'GitHub',
        },
        {
          type: 'link',
          href: 'https://github.com/siemens/ix/blob/main/CONTRIBUTING.md',
          label: 'Contribution',
        },
      ],
      collapsed: true,
    },
  ],
  components: [
    'components/overview',
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Application frame',
      items: [
        createTabItem({
          id: 'components/application/index',
          label: 'Application',
          items: [
            {
              id: 'components/application/guide',
              label: 'Usage',
            },
            {
              id: 'components/application/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/application-header/index',
          label: 'Application header',
          items: [
            {
              id: 'components/application-header/guide',
              label: 'Usage',
            },
            {
              id: 'components/application-header/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/application-menu/index',
          label: 'Application menu',
          items: [
            {
              id: 'components/application-menu/guide',
              label: 'Usage',
            },
            {
              id: 'components/application-menu/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/avatar/index',
          label: 'Avatar',
          items: [
            {
              id: 'components/avatar/guide',
              label: 'Usage',
            },
            {
              id: 'components/avatar/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/content/index',
          label: 'Content',
          items: [
            {
              id: 'components/content/guide',
              label: 'Usage',
            },
            {
              id: 'components/content/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/content-header/index',
          label: 'Content header',
          items: [
            {
              id: 'components/content-header/guide',
              label: 'Usage',
            },
            {
              id: 'components/content-header/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/about-and-legal/index',
          label: 'About and legal',
          items: [
            {
              id: 'components/about-and-legal/guide',
              label: 'Usage',
            },
            {
              id: 'components/about-and-legal/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/settings/index',
          label: 'Settings',
          items: [
            {
              id: 'components/settings/guide',
              label: 'Usage',
            },
            {
              id: 'components/settings/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/popover-news/index',
          label: 'Popover news',
          items: [
            {
              id: 'components/popover-news/guide',
              label: 'Usage',
            },
            {
              id: 'components/popover-news/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Navigation and hierarchy',
      items: [
        createTabItem({
          id: 'components/breadcrumb/index',
          label: 'Breadcrumb',
          items: [
            {
              id: 'components/breadcrumb/guide',
              label: 'Usage',
            },
            {
              id: 'components/breadcrumb/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/group/index',
          label: 'Group',
          items: [
            {
              id: 'components/group/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/pagination/index',
          label: 'Pagination',
          items: [
            {
              id: 'components/pagination/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/tabs/index',
          label: 'Tabs',
          items: [
            {
              id: 'components/tabs/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/tree/index',
          label: 'Tree',
          items: [
            {
              id: 'components/tree/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/workflow/index',
          label: 'Workflow',
          items: [
            {
              id: 'components/workflow/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Containers and layout',
      items: [
        createTabItem({
          id: 'components/blind/index',
          label: 'Blind',
          items: [
            {
              id: 'components/blind/guide',
              label: 'Usage',
            },
            {
              id: 'components/blind/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/card/index',
          label: 'Card',
          items: [
            {
              id: 'components/card/guide',
              label: 'Usage',
            },
            {
              id: 'components/card/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/card-list/index',
          label: 'Card list',
          items: [
            {
              id: 'components/card-list/guide',
              label: 'Usage',
            },
            {
              id: 'components/card-list/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/dropdown/index',
          label: 'Dropdown',
          items: [
            {
              id: 'components/dropdown/guide',
              label: 'Usage',
            },
            {
              id: 'components/dropdown/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/flip/index',
          label: 'Flip',
          items: [
            {
              id: 'components/flip/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/event-list/index',
          label: 'Event list',
          items: [
            {
              id: 'components/event-list/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/drawer/index',
          label: 'Drawer',
          items: [
            {
              id: 'components/drawer/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/layout-auto/index',
          label: 'Layout auto',
          items: [
            {
              id: 'components/layout-auto/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/layout-grid/index',
          label: 'Layout grid',
          items: [
            {
              id: 'components/layout-grid/guide',
              label: 'Usage',
            },
            {
              id: 'components/layout-grid/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/modal/index',
          label: 'Modal',
          items: [
            {
              id: 'components/modal/code',
              label: 'Code',
            },
          ],
        }),
        'components/panes/index',
        createTabItem({
          id: 'components/panes/index',
          label: 'Panes',
          items: [
            {
              id: 'components/panes/guide',
              label: 'Usage',
            },
            {
              id: 'components/panes/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/tile/index',
          label: 'Tile',
          items: [
            {
              id: 'components/tile/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Forms',
      items: [
        createTabItem({
          id: 'components/forms-field/index',
          label: 'Forms field',
          items: [
            {
              id: 'components/forms-field/guide',
              label: 'Usage',
            },
            {
              id: 'components/forms-field/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/forms-layout/index',
          label: 'Forms layout',
          items: [
            {
              id: 'components/forms-layout/guide',
              label: 'Usage',
            },
            {
              id: 'components/forms-layout/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/forms-validation/index',
          label: 'Forms validation',
          items: [
            {
              id: 'components/forms-validation/guide',
              label: 'Usage',
            },
            {
              id: 'components/forms-validation/code',
              label: 'Code',
            },
          ],
        }),
        'components/forms-behavior/index',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Input fields and selections',
      items: [
        createTabItem({
          id: 'components/category-filter/index',
          label: 'Category filter',
          items: [
            {
              id: 'components/category-filter/guide',
              label: 'Usage',
            },
            {
              id: 'components/category-filter/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/checkbox/index',
          label: 'Checkbox',
          items: [
            {
              id: 'components/checkbox/guide',
              label: 'Usage',
            },
            {
              id: 'components/checkbox/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/custom-field/index',
          label: 'Custom field',
          items: [
            {
              id: 'components/custom-field/guide',
              label: 'Usage',
            },
            {
              id: 'components/custom-field/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/date-dropdown/index',
          label: 'Date dropdown',
          items: [
            {
              id: 'components/date-dropdown/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/input-date/index',
          label: 'Date input',
          items: [
            {
              id: 'components/input-date/guide',
              label: 'Usage',
            },
            {
              id: 'components/input-date/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/date-picker/index',
          label: 'Date picker',
          items: [
            {
              id: 'components/date-picker/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/date-time-picker/index',
          label: 'Datetime picker',
          items: [
            {
              id: 'components/date-time-picker/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/expanding-search/index',
          label: 'Expanding search',
          items: [
            {
              id: 'components/expanding-search/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/input-number/index',
          label: 'Number input',
          items: [
            {
              id: 'components/input-number/guide',
              label: 'Usage',
            },
            {
              id: 'components/input-number/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/radio/index',
          label: 'Radio',
          items: [
            {
              id: 'components/radio/guide',
              label: 'Usage',
            },
            {
              id: 'components/radio/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/select/index',
          label: 'Select',
          items: [
            {
              id: 'components/select/guide',
              label: 'Usage',
            },
            {
              id: 'components/select/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/slider/index',
          label: 'Slider',
          items: [
            {
              id: 'components/slider/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/input/index',
          label: 'Input',
          items: [
            {
              id: 'components/input/guide',
              label: 'Usage',
            },
            {
              id: 'components/input/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/textarea/index',
          label: 'Textarea',
          items: [
            {
              id: 'components/textarea/guide',
              label: 'Usage',
            },
            {
              id: 'components/textarea/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/time-picker/index',
          label: 'Time picker',
          items: [
            {
              id: 'components/time-picker/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/toggle/index',
          label: 'Toggle',
          items: [
            {
              id: 'components/toggle/guide',
              label: 'Usage',
            },
            {
              id: 'components/toggle/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/upload/index',
          label: 'Upload',
          items: [
            {
              id: 'components/upload/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Buttons and actions',
      items: [
        createTabItem({
          id: 'components/button/index',
          label: 'Button',
          items: [
            {
              id: 'components/button/guide',
              label: 'Usage',
            },
            {
              id: 'components/button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/dropdown-button/index',
          label: 'Dropdown button',
          items: [
            {
              id: 'components/dropdown-button/guide',
              label: 'Usage',
            },
            {
              id: 'components/dropdown-button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/icon-button/index',
          label: 'Icon button',
          items: [
            {
              id: 'components/icon-button/guide',
              label: 'Usage',
            },
            {
              id: 'components/icon-button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/link-button/index',
          label: 'Link button',
          items: [
            {
              id: 'components/link-button/guide',
              label: 'Usage',
            },
            {
              id: 'components/link-button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/split-button/index',
          label: 'Split button',
          items: [
            {
              id: 'components/split-button/guide',
              label: 'Usage',
            },
            {
              id: 'components/split-button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/toggle-button/index',
          label: 'Toggle button',
          items: [
            {
              id: 'components/toggle-button/guide',
              label: 'Usage',
            },
            {
              id: 'components/toggle-button/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/chip/index',
          label: 'Chip',
          items: [
            {
              id: 'components/chip/guide',
              label: 'Usage',
            },
            {
              id: 'components/chip/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'System feedback and status',
      items: [
        createTabItem({
          id: 'components/empty-state/index',
          label: 'Empty state',
          items: [
            {
              id: 'components/empty-state/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/messagebar/index',
          label: 'Message bar',
          items: [
            {
              id: 'components/messagebar/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/pill/index',
          label: 'Pill',
          items: [
            {
              id: 'components/pill/guide',
              label: 'Usage',
            },
            {
              id: 'components/pill/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/spinner/index',
          label: 'Spinner',
          items: [
            {
              id: 'components/spinner/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/toast/index',
          label: 'Toast',
          items: [
            {
              id: 'components/toast/guide',
              label: 'Usage',
            },
            {
              id: 'components/toast/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/tooltip/index',
          label: 'Tooltip',
          items: [
            {
              id: 'components/tooltip/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Data display',
      items: [
        createTabItem({
          id: 'components/grid/index',
          label: 'Data grid',
          items: [
            {
              id: 'components/grid/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/html-grid/index',
          label: 'HTML grid',
          items: [
            {
              id: 'components/html-grid/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/key-value/index',
          label: 'Key value',
          items: [
            {
              id: 'components/key-value/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/key-value-list/index',
          label: 'Key value list',
          items: [
            {
              id: 'components/key-value-list/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'components/kpi/index',
          label: 'KPI',
          items: [
            {
              id: 'components/kpi/code',
              label: 'Code',
            },
          ],
        }),
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Charts',
      items: [
        'components/charts-overview/index',
        'components/line-chart/index',
        'components/bar-chart/index',
        'components/gauge-chart/index',
        'components/pie-chart/index',
        'components/3d/index',
        'components/special-chart/index',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Deprecated',
      items: [
        createTabItem({
          id: 'legacy/basic-navigation/index',
          label: 'Basic navigation',
          items: [
            {
              id: 'legacy/basic-navigation/guide',
              label: 'Usage',
            },
            {
              id: 'legacy/basic-navigation/code',
              label: 'Code',
            },
          ],
        }),
        createTabItem({
          id: 'legacy/map-navigation/index',
          label: 'Map navigation',
          items: [
            {
              id: 'legacy/map-navigation/guide',
              label: 'Usage',
            },
            {
              id: 'legacy/map-navigation/code',
              label: 'Code',
            },
          ],
        }),
        'legacy/checkbox',
        'legacy/input',
        'legacy/radiobutton',
        'legacy/textarea',
        'legacy/validation',
      ],
    },
  ],

  guidelines: [
    'guidelines/overview',
    'guidelines/accessibility',
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Responsive design',
      items: [
        'guidelines/mobile/mobile-app-dev',
        'guidelines/mobile/mobile-ux',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'Conversational design',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/conversational-design',
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'UX Writing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/language',
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      className: 'doc-sidebar-item-bold',

      label: 'CLI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/cli',
        },
      ],
      collapsed: true,
    },
  ],
  icons: [
    'icons/icon-library',
    'icons/icon-usage',
    'icons/design-new-icons',
    'icons/developing-with-icons',
  ],
  styles: [
    'styles/colors',
    createTabItem({
      id: 'styles/typography/index',
      label: 'Typography',
      items: [
        {
          id: 'styles/typography/guide',
          label: 'Usage',
        },
        {
          id: 'styles/typography/code',
          label: 'Code',
        },
      ],
    }),
    'styles/borders',
    'styles/shadows',
    'styles/animation',
  ],
};

export default sidebars;
