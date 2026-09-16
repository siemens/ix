/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The parity harness.
 *
 * Renders the same preview example in html-test-app and svelte-test-app and
 * diffs the result. It exists because the Svelte binding is in-house: React,
 * Vue and Angular get their output targets from Stencil and inherit Stencil's
 * own conformance testing, and this one does not. The shared aria snapshots
 * catch accessibility-tree regressions, but they are blind to attributes that
 * arrived as strings instead of properties, to styles that failed to resolve,
 * and to events that fired an extra time on mount -- which is the entire class
 * of bug a hand-written binding produces.
 *
 * The two apps make a genuinely useful pair, because they differ in exactly one
 * interesting way. html-test-app writes the components as plain markup loaded
 * through Stencil's lazy `defineCustomElements()`; svelte-test-app writes them
 * as generated Svelte proxies over `dist-custom-elements`. Everything else --
 * the components, the theme, the CSS -- is the same build. So any difference
 * the harness reports is attributable to the binding or to the output target,
 * and nothing else.
 *
 * Three things are compared, all of them after load and before any interaction:
 *
 * - **DOM structure**, light and shadow, as an ordered list of paths.
 * - **Computed styles**, restricted to paint properties. See
 *   `parity/examples.ts` for why geometry is excluded.
 * - **Emitted events**, as a tally of `tag:type` over everything dispatched
 *   during boot.
 *
 * Each example is one test, so a failure names the example directly.
 */
import { expect, test } from '@playwright/test';
import { waitForReadiness } from 'framework-tests/tests/utils.ts';

import {
  collectTree,
  installEventRecorder,
  readRecordedEvents,
  waitForStableDom,
  type ParityNode,
} from './parity/collect.js';
import { diffEvents, diffTrees, formatDifferences } from './parity/compare.js';
import {
  COMPARED_EXAMPLES,
  EVENT_ALLOWANCES,
  HTML_APP_ROOT,
  STYLE_PROPERTIES,
  SVELTE_APP_ROOT,
  htmlUrl,
  svelteUrl,
} from './parity/examples.js';

type Capture = {
  nodes: ParityNode[];
  events: string[];
};

async function capture(
  page: import('@playwright/test').Page,
  url: string,
  root: string
): Promise<Capture> {
  await page.addInitScript(installEventRecorder);
  await page.goto(url);
  await waitForReadiness(page);
  await page.evaluate(waitForStableDom, { quietMs: 250, timeoutMs: 5000 });

  const nodes = await page.evaluate(collectTree, {
    root,
    styleProperties: STYLE_PROPERTIES,
  });
  const events = await page.evaluate(readRecordedEvents);

  return { nodes, events };
}

test.describe('parity with html-test-app', () => {
  for (const example of COMPARED_EXAMPLES) {
    test(`${example} renders identically`, async ({ browser }) => {
      /**
       * Two contexts rather than two pages, so the event recorder installed by
       * `addInitScript` cannot leak between them.
       */
      const htmlContext = await browser.newContext();
      const svelteContext = await browser.newContext();

      try {
        const [html, svelte] = await Promise.all([
          capture(await htmlContext.newPage(), htmlUrl(example), HTML_APP_ROOT),
          capture(
            await svelteContext.newPage(),
            svelteUrl(example),
            SVELTE_APP_ROOT
          ),
        ]);

        expect(
          html.nodes.length,
          `html-test-app rendered nothing for "${example}"`
        ).toBeGreaterThan(0);

        const domDifferences = diffTrees(html.nodes, svelte.nodes);

        expect(
          domDifferences,
          `DOM and computed styles diverge for "${example}":\n` +
            formatDifferences(domDifferences)
        ).toEqual([]);

        const allowed = EVENT_ALLOWANCES[example] ?? {};
        const eventDifferences = diffEvents(html.events, svelte.events).filter(
          (difference) => !(difference.path in allowed)
        );

        expect(
          eventDifferences,
          `Events emitted during boot diverge for "${example}":\n` +
            formatDifferences(eventDifferences)
        ).toEqual([]);
      } finally {
        await htmlContext.close();
        await svelteContext.close();
      }
    });
  }
});
