/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { defineCustomElement } from '@siemens/ix/components/ix-button.js';

type EntryPoint = 'default' | 'foundation' | 'globals' | 'legacy';

type ThemeConfig = {
  importPath: string;
  skipImport?: boolean;
};

function getEntryPoint(): EntryPoint {
  const entryPoint = new URLSearchParams(window.location.search).get(
    'entryPoint'
  );

  if (
    entryPoint === 'default' ||
    entryPoint === 'foundation' ||
    entryPoint === 'globals' ||
    entryPoint === 'legacy'
  ) {
    return entryPoint;
  }

  throw new Error(`Unsupported style entry point: ${entryPoint}`);
}

async function importEntryPoint(entryPoint: EntryPoint) {
  switch (entryPoint) {
    case 'default':
      await import('@siemens/ix/css/default.css');
      return;
    case 'foundation':
      await import('@siemens/ix/css/foundation.css');
      return;
    case 'globals':
      await import('@siemens/ix/css/globals.css');
      return;
    case 'legacy':
      await import('@siemens/ix/css/legacy.css');
  }
}

async function importThemeStyles() {
  const config = JSON.parse(import.meta.env.VITE_THEME_CONFIG) as ThemeConfig[];

  await Promise.all(
    config.map(async ({ importPath, skipImport }) => {
      if (!skipImport) {
        await import(/* @vite-ignore */ importPath);
      }
    })
  );
}

function applyTheme() {
  const search = new URLSearchParams(window.location.search);
  const theme = search.get('theme') ?? 'classic';
  const colorSchema = search.get('colorSchema') ?? 'dark';

  document.documentElement.dataset.ixTheme = theme;
  document.documentElement.dataset.ixColorSchema = colorSchema;
  document.documentElement.style.backgroundColor =
    colorSchema === 'dark' ? '#000609' : '#ffffff';
}

function renderFixture(entryPoint: EntryPoint) {
  const main = document.createElement('main');
  main.className = 'entry-point-fixture';
  main.innerHTML = `
    <h1>${entryPoint}.css</h1>
    <div class="probe-grid">
      <section class="probe-card">
        <h2>Foundation and reset</h2>
        <p>Native paragraph spacing and themed body presentation.</p>
        <a href="#">Native link</a>
        <code>const entry = '${entryPoint}';</code>
      </section>

      <section class="probe-card">
        <h2>Typography utility</h2>
        <div class="typography-h4" data-probe="typography">
          Utility heading
        </div>
        <div class="typography-body">Utility body</div>
      </section>

      <section class="probe-card">
        <h2>Table utility</h2>
        <table class="ix-table ix-table-striped" data-probe="table">
          <thead>
            <tr><th>Signal</th><th>Value</th></tr>
          </thead>
          <tbody>
            <tr><td>Temperature</td><td>24 °C</td></tr>
            <tr><td>Pressure</td><td>1.2 bar</td></tr>
          </tbody>
        </table>
      </section>

      <section class="probe-card">
        <h2>Legacy controls</h2>
        <label class="ix-form-label" for="legacy-input">Label</label>
        <input
          class="ix-form-control"
          data-probe="input"
          id="legacy-input"
          placeholder="Legacy input"
        />
        <div>
          <input class="ix-form-control" id="legacy-checkbox" type="checkbox" />
          <label for="legacy-checkbox">Legacy checkbox</label>
        </div>
      </section>

      <section class="probe-card">
        <h2>Scoped scrollbar</h2>
        <div
          class="scroll-probe"
          data-ix-scrollbars
          data-probe="scrollbar"
        >
          <div class="scroll-probe-content">
            Scroll in both directions to inspect opt-in scrollbar styling.
          </div>
        </div>
      </section>

      <section class="probe-card">
        <h2>Web component</h2>
        <ix-button>IX button</ix-button>
      </section>
    </div>
  `;
  document.body.append(main);
}

async function ready() {
  await customElements.whenDefined('ix-button');
  await new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  );
  document.documentElement.dataset.ready = 'true';
}

async function setup() {
  const entryPoint = getEntryPoint();
  applyTheme();
  await importEntryPoint(entryPoint);

  if (entryPoint !== 'default') {
    await importThemeStyles();
  }

  defineCustomElement();
  renderFixture(entryPoint);
  await ready();
}

void setup();
