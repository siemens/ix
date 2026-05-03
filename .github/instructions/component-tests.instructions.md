---
applyTo: '**'
excludeAgent: 'cloud-agent'
---

# Creating component tests for @siemens/ix (packages/core)

## Conditions for running tests

- Always run `pnpm build --filter @siemens/ix` before running tests to ensure that the latest code is being tested.
- Run tests in watch mode during development for faster feedback: `pnpm --filter @siemens/ix test.ct --watch`.
- Run specific tests with grep: `pnpm --filter @siemens/ix exec playwright test --config playwright.config.ts --reporter list --grep "test name pattern"`.
- Tests use Chromium only, with 10 parallel workers and up to 3 retries on failure.

## Test file location and naming

- Place test files at `packages/core/src/components/<component-name>/test/<component-name>.ct.ts`.
- Every `.ct.ts` file must start with the SPDX license header.

## Imports

```typescript
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
```

- Use `expect` from `@playwright/test` for standard assertions.
- Use `expect` from `@utils/test` only when the custom `toHaveVisibleFocus` assertion is needed.
- Use `regressionTest` (or its alias `test`) from `@utils/test` as the test function — never plain `test` from Playwright.
- Import icons from `@siemens/ix-icons/icons` when components need them (e.g., `import { iconPin } from '@siemens/ix-icons/icons'`).
- Import `viewPorts` from `@utils/test` for viewport size constants.

## Mounting components

The `mount` fixture accepts an HTML string and returns an `ElementHandle<HTMLElement>` for the root element.

```typescript
regressionTest('example', async ({ mount, page }) => {
  await mount(`<ix-button variant="primary">Click me</ix-button>`);
  // ...
});
```

- Mount composite structures as a single HTML string including all necessary parent/child elements.
- Pass icons via the config object: `await mount(html, { icons: { iconPin } })`.
- The mount element is **not a Locator** — use `page.locator()` for assertions.

## Requirements for component tests

- Prefer accessibility locators (`getByRole`, `getByLabel`) when elements have accessible roles. Fall back to tag selectors (`page.locator('ix-tab-item')`) for custom elements that don't expose standard roles.
- Don't use arbitrary timeouts or `waitForTimeout` in tests.
- Every test file should include an `'accessibility'` test using `makeAxeBuilder`.
- Every test file should include a `'renders'` test verifying basic hydration.

## Test structure

Follow this order of tests within each file:

1. **Accessibility** — axe scan
2. **Renders** — hydration and basic visibility
3. **Attribute and ARIA tests** — role, tabindex, aria-labelledby, etc.
4. **Behavior tests** — user interactions, state changes
5. **Dynamic update tests** — programmatic property changes, DOM manipulation
6. **Edge cases** — initial non-default state, dynamic additions

## Accessibility test pattern

```typescript
regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-component>Content</ix-component>`);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});
```

## Hydration check

Always verify components are hydrated before making further assertions:

```typescript
await expect(page.locator('ix-component')).toHaveClass(/\bhydrated\b/);
```

Use word boundary `\b` in the regex to avoid false matches.

## Querying elements

```typescript
// By tag — most common for custom elements
page.locator('ix-tab-item').nth(0);
page.locator('ix-tab-item').last();

// By role — preferred when available
element.getByRole('menuitem', { name: 'Item 1' });
element.getByLabel('dropdown button');

// Scoped locators
tabs.locator('ix-tab-item').nth(2);

// Shadow DOM internals — Playwright pierces shadow DOM automatically
tabs.locator('.overflow-shadow-container');  // finds inside shadow root
page.locator('ix-tab-item').locator('.tab-text');  // chains through shadow DOM
```

### Shadow DOM access — always use Playwright locators

Playwright locators automatically pierce shadow DOM boundaries. **Never** use
`evaluate` + `shadowRoot.querySelector` for assertions — use locators instead:

```typescript
// ❌ BAD — manual shadow DOM traversal
await expect
  .poll(async () => {
    return element.evaluate((el) =>
      el.shadowRoot?.querySelector('.container')?.classList.contains('active')
    );
  })
  .toBe(true);

// ✅ GOOD — Playwright locator pierces shadow DOM
await expect(element.locator('.container')).toHaveClass(/active/);
```

The only valid reason to use `evaluate` with `shadowRoot` is when you need values
that Playwright locators do not expose, such as `getBoundingClientRect()` or
reading CSS custom properties from `style`.

## Assertion patterns

```typescript
// Attribute presence and value
await expect(element).toHaveAttribute('hidden', '');
await expect(element).not.toHaveAttribute('hidden', '');
await expect(element).toHaveAttribute('role', 'tabpanel');

// Class assertions with word boundary
await expect(element).toHaveClass(/\bselected\b/);
await expect(element).not.toHaveClass(/\bselected\b/);

// Hyphenated class names — use negative lookahead to avoid partial matches
// e.g. "overflow-shadow" must not match "overflow-shadow-container"
await expect(element).toHaveClass(/overflow-shadow(?!-)/);
await expect(element).not.toHaveClass(/overflow-shadow(?!-)/);

// Visibility
await expect(element).toBeVisible();
await expect(element).not.toBeVisible();
await expect(element).toBeInViewport();

// Text content
await expect(element).toContainText('Label');
await expect(element).toHaveText('Exact text');

// CSS properties
await expect(element).toHaveCSS('padding-left', '16px');
```

## Testing events

### Promise-based listener (preferred for single events)

```typescript
const eventPromise = element.evaluate(
  (el) =>
    new Promise<string>((resolve) => {
      el.addEventListener('tabChange', (event: any) => resolve(event.detail));
    })
);

await page.locator('ix-tab-item').nth(1).click();
const detail = await eventPromise;
expect(detail).toBe('tab-2');
```

**Important:** Always set up the event listener **before** triggering the action.

### Event counting with evaluateHandle

```typescript
const counter = await element.evaluateHandle((el) => {
  const count = { close: 0, open: 0 };
  el.addEventListener('close', () => count.close++);
  el.addEventListener('open', () => count.open++);
  return count;
});

// ... trigger actions ...

const result = await counter.evaluate((obj) => obj);
expect(result.close).toBe(1);
```

### Preventing default behavior

```typescript
await element.evaluate((el) => {
  el.addEventListener('tabClick', (event) => event.preventDefault());
});
```

## Testing dynamic updates

### Setting properties programmatically

```typescript
await page.evaluate(() => {
  document.querySelector('ix-tabs')!.activeTabKey = 'tab-2';
});
```

### Setting complex object properties

```typescript
await element.evaluate(
  (el: HTMLIxTreeElement, [model]) => {
    el.model = model;
  },
  [treeModel]
);
```

### Manipulating DOM (adding/removing elements)

```typescript
await page.evaluate(() => {
  const container = document.querySelector('ix-tab-panels')!;
  const newPanel = document.createElement('ix-tab-panel');
  newPanel.setAttribute('tab-key', 'tab-3');
  newPanel.textContent = 'Content 3';
  container.appendChild(newPanel);
});

await expect(page.locator('ix-tab-panel')).toHaveCount(3);
```

## Polling for async state

Use `expect.poll()` when a value requires async resolution or retries:

```typescript
await expect
  .poll(async () => {
    return page.evaluate(() => {
      const el = document.querySelector('ix-component');
      return el?.getAttribute('aria-labelledby');
    });
  })
  .toBe(expectedValue);
```

Prefer Playwright's built-in auto-retry assertions (`toHaveAttribute`, `toHaveClass`, `toContainText`) over `expect.poll()` whenever possible — they already auto-retry.

## Viewport testing

```typescript
import { viewPorts } from '@utils/test';

await page.setViewportSize({ width: 200, height: 100 });
await expect(arrowButton).toBeVisible();

await page.setViewportSize(viewPorts.lg);
await expect(arrowButton).not.toBeVisible();
```

## Hidden attribute convention

IX components use the `hidden` HTML attribute for visibility toggling (e.g., tab panels). Test with attribute assertions, not CSS visibility:

```typescript
// Panel is visible (no hidden attribute)
await expect(panels.nth(0)).not.toHaveAttribute('hidden', '');

// Panel is hidden
await expect(panels.nth(1)).toHaveAttribute('hidden', '');
```

## Icon registration

Components that render icons require them to be registered via the mount config:

```typescript
import { iconPin, iconStar } from '@siemens/ix-icons/icons';

await mount(`<ix-dropdown-item label="Pin" icon="pin" />`, {
  icons: { iconPin, iconStar },
});
```

Do not reference SVGs by static file path — the test infrastructure warns on static SVG fetches and fails in CI.

## Complete test file template

```typescript
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`<ix-component attr="value">Content</ix-component>`);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-component>Content</ix-component>`);

  const element = page.locator('ix-component');
  await expect(element).toHaveClass(/\bhydrated\b/);
  await expect(element).toBeVisible();
});

regressionTest('user interaction', async ({ mount, page }) => {
  await mount(`<ix-component>Content</ix-component>`);

  const element = page.locator('ix-component');

  const eventPromise = element.evaluate(
    (el) =>
      new Promise<string>((resolve) => {
        el.addEventListener('change', (event: any) => resolve(event.detail));
      })
  );

  await element.locator('button').click();
  const detail = await eventPromise;
  expect(detail).toBe('expected-value');
});
```
