import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

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
      label: 'Getting started',
      items: [
        'home/getting-started/developers',
        'home/getting-started/designers',
        'home/getting-started/starter-app',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        'home/migration/2_0_0/index',
        'home/migration/core-ui',
        'home/migration/uxt',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        'home/installation/angular',
        'home/installation/react',
        'home/installation/vue',
        'home/installation/blazor',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Theme',
      items: [
        'home/theming/theme',
        'home/theming/usage-developers',
        'home/theming/usage-designers',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Releases',
      items: [
        'home/releases/roadmap',
        'home/releases/release-version',
        'home/releases/changelog',
      ],
      collapsed: false,
    },
    {
      type: 'category',
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
      collapsed: false,
    },
  ],
  components: [
    {
      type: 'category',
      label: 'Application frame',
      // link: { type: 'doc', id: 'components/overview' },
      // link: { type: 'generated-index' },
      items: [
        'components/application/index',
        'components/application-header/index',
        'components/application-menu/index',
        'components/content/index',
        'components/about-and-legal/index',
        'components/settings/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Navigation and hierarchy',
      items: [
        'components/breadcrumb/index',
        'components/group/index',
        'components/pagination/index',
        'components/tabs/index',
        'components/tree/index',
        'components/workflow/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Containers and layout',
      items: [
        //TODO (not exist) 'components/action-card/index',
        'components/blind/index',
        'components/card/index',
        'components/card-list/index',
        'components/flip/index',
        'components/event-list/index',
        'components/drawer/index',
        'components/layout-auto/index',
        'components/layout-grid/index',
        'components/modal/index',
        'components/panes/index',
        //TODO (not exist) 'components/push-card/index',
        'components/tile/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Forms',
      items: [
        'components/forms-field/index',
        'components/forms-layout/index',
        'components/forms-validation/index',
        'components/forms-behavior/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Input fields and selections',
      items: [
        'components/category-filter/index',
        'components/checkbox/index',
        'components/custom-field/index',
        'components/date-dropdown/index',
        'components/input-date/index',
        'components/date-picker/index',
        'components/date-time-picker/index',
        'components/expanding-search/index',
        'components/input-number/index',
        'components/radio/index',
        'components/select/index',
        'components/slider/index',
        'components/input/index',
        'components/textarea/index',
        'components/time-picker/index',
        'components/toggle/index',
        'components/upload/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Buttons and actions',
      items: [
        'components/avatar/index',
        'components/button/index',
        // TODO (button-group is part of button) 'components/button/index',
        'components/dropdown-button/index',
        'components/icon-button/index',
        'components/link-button/index',
        'components/split-button/index',
        'components/toggle-button/index',
        'components/chip/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'System feedback and status',
      items: [
        'components/empty-state/index',
        'components/messagebar/index',
        'components/pill/index',
        'components/spinner/index',
        'components/toast/index',
        'components/tooltip/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Data display',
      items: [
        'components/grid/index',
        'components/html-grid/index',
        'components/key-value/index',
        'components/key-value-list/index',
        'components/kpi/index',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Charts',
      items: [
        'components/overview/index',
        'components/line-chart/index',
        'components/bar-chart/index',
        'components/gauge-chart/index',
        'components/pie-chart/index',
        'components/3d/index',
        'components/special-chart/index',
      ],
      collapsed: false,
    },
  ],

  guidelines: [
    {
      type: 'category',
      label: 'Mobile experience',
      items: [
        'guidelines/mobile/mobile-app-dev',
        'guidelines/mobile/mobile-ux',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Conversational design',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/conversational-design',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'UX Writing',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/language',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guidelines/cli',
        },
      ],
      collapsed: false,
    },
  ],
  icons: [
    'icons/icon-library',
    {
      type: 'category',
      label: 'Icon guidelines',
      // link: { type: 'doc', id: 'components/overview' },
      // link: { type: 'generated-index' },
      items: [
        'icons/guidelines/overview',
        'icons/guidelines/design-new-icons',
        'icons/guidelines/icon-design-guidelines',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Development',
      // link: { type: 'doc', id: 'components/overview' },
      // link: { type: 'generated-index' },
      items: ['icons/code/usage', 'icons/code/integration'],
      collapsed: false,
    },
  ],
  styles: [
    'styles/colors',
    'styles/typography',
    'styles/borders',
    'styles/shadows',
  ],
};

export default sidebars;
