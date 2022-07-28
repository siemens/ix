import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
export const config: Config = {
  bundles: [
    {
      components: ['cw-animated-tabs', 'cw-animated-tab'],
    },
    {
      components: ['cw-application-header'],
    },
    {
      components: ['cw-basic-navigation'],
    },
    {
      components: ['cw-blind'],
    },
    {
      components: ['cw-breadcrumb', 'cw-breadcrumb-item'],
    },
    {
      components: ['cw-button'],
    },
    {
      components: ['cw-category-filter'],
    },
    {
      components: ['cw-chip'],
    },
    {
      components: ['cw-counter-pill'],
    },
    {
      components: ['cw-drawer'],
    },
    {
      components: ['cw-dropdown', 'cw-dropdown-item'],
    },
    {
      components: ['cw-event-list', 'cw-event-list-item'],
    },
    {
      components: ['cw-expanding-search'],
    },
    {
      components: ['cw-filter-chip'],
    },
    {
      components: ['cw-flip-tile', 'cw-flip-tile-content'],
    },
    {
      components: ['cw-group', 'cw-group-dropdown-item', 'cw-group-item'],
    },
    {
      components: ['cw-icon'],
    },
    {
      components: ['cw-icon-button'],
    },
    {
      components: ['cw-input-group'],
    },
    {
      components: ['cw-map-navigation', 'cw-map-navigation-overlay'],
    },
    {
      components: [
        'cw-menu',
        'cw-menu-item',
        'cw-menu-about',
        'cw-menu-about-item',
        'cw-menu-about-news',
        'cw-menu-avatar',
        'cw-menu-avatar-item',
        'cw-menu-settings',
        'cw-menu-settings-item',
      ],
    },
    {
      components: ['cw-message-bar'],
    },
    {
      components: ['cw-modal', 'cw-modal-container'],
    },
    {
      components: ['cw-pill'],
    },
    {
      components: ['cw-select', 'cw-select-item'],
    },
    {
      components: ['cw-spinner'],
    },
    {
      components: ['cw-split-button', 'cw-split-button-item'],
    },
    {
      components: ['cw-tile'],
    },
    {
      components: ['cw-toast', 'cw-toast-container'],
    },
    {
      components: ['cw-toggle'],
    },
    {
      components: ['cw-tree', 'cw-tree-item'],
    },
    {
      components: ['cw-upload'],
    },
  ],
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true,
  },
  namespace: 'core-ui-core',
  globalStyle: './scss/v7/core-ui.scss',
  // globalStyle: 'scss/core-ui.scss',
  minifyCss: false,
  plugins: [
    sass({
      includePaths: ['./scss/v7', './scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@siemens/ix',
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      excludeComponents: ['my-component'],
    }),
    reactOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      excludeComponents: ['my-component'],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '../scss/fonts',
          dest: '../core-ui-core/fonts',
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-json',
      file: 'component-doc.json',
    },
    {
      type: 'docs-readme',
      footer: '',
      dependencies: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: './../../../node_modules/@siemens/core-ui-icons/dist',
          dest: 'build/core-ui-webfont',
        },
        {
          src: '../scss/fonts',
          dest: 'build/fonts',
        },
      ],
    },
  ],
};
