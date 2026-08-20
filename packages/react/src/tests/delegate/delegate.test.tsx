/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  ATTACH_VIEW_TIMEOUT_MS,
  ReactFrameworkDelegate,
  reactFrameworkDelegate,
} from '../../delegate';
import { showModal } from '../../modal';
import { IxOverlay, PORTAL_ID } from '../../modal/portal';

const rootSelector = '[id^="ix-react-view-"]';

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  reactFrameworkDelegate.isUsingReactPortal = false;
  document
    .querySelectorAll(rootSelector)
    .forEach((element) => element.remove());
  vi.restoreAllMocks();
});

describe('ReactFrameworkDelegate', () => {
  it('rejects an empty view and removes its root container', async () => {
    const delegate = new ReactFrameworkDelegate();

    await expect(delegate.attachView(null)).rejects.toThrow(
      'React view did not render a host element'
    );

    expect(document.querySelector(rootSelector)).toBeNull();
  });

  it('rejects a portal-only view and unmounts its portal content', async () => {
    const delegate = new ReactFrameworkDelegate();
    const portalContainer = document.createElement('div');
    document.body.appendChild(portalContainer);

    await expect(
      delegate.attachView(
        createPortal(<div>Portal content</div>, portalContainer) as ReactNode
      )
    ).rejects.toThrow('React view did not render a host element');

    expect(document.querySelector(rootSelector)).toBeNull();
    expect(portalContainer).toBeEmptyDOMElement();
    portalContainer.remove();
  });

  it('waits for React to commit before resolving a delayed render', async () => {
    vi.useFakeTimers();

    let ready = false;
    let resolveRender = () => {};
    const renderReady = new Promise<void>((resolve) => {
      resolveRender = () => {
        ready = true;
        resolve();
      };
    });
    function DelayedView() {
      if (!ready) {
        throw renderReady;
      }
      return <div>Delayed content</div>;
    }

    const delegate = new ReactFrameworkDelegate();
    let resolved = false;
    const viewPromise = delegate.attachView(<DelayedView />).then((view) => {
      resolved = true;
      return view;
    });

    await vi.advanceTimersByTimeAsync(0);
    expect(resolved).toBe(false);

    resolveRender();
    await vi.advanceTimersByTimeAsync(0);
    const view = await viewPromise;
    expect(view).toHaveTextContent('Delayed content');
    await delegate.removeView(view);
  });

  it('rejects with a timeout and cleans up the root container when the view never commits', async () => {
    vi.useFakeTimers();

    function NeverCommits(): never {
      throw new Promise(() => {
        // never resolves, so the render never commits
      });
    }

    const delegate = new ReactFrameworkDelegate();
    const assertion = expect(
      delegate.attachView(<NeverCommits />)
    ).rejects.toThrow(
      `React view did not commit within ${ATTACH_VIEW_TIMEOUT_MS}ms`
    );

    await vi.advanceTimersByTimeAsync(ATTACH_VIEW_TIMEOUT_MS);
    await assertion;

    expect(document.querySelector(rootSelector)).toBeNull();
  });

  it('rejects non-DOM views', async () => {
    const delegate = new ReactFrameworkDelegate();

    await expect(delegate.removeView({})).rejects.toThrow(
      new TypeError('A React framework view must be a DOM element')
    );
  });

  it('rejects detached fallback views', async () => {
    const delegate = new ReactFrameworkDelegate();

    await expect(
      delegate.removeView(document.createElement('div'))
    ).rejects.toThrow('Cannot remove a view without a parent element');
  });

  it('removes the fallback root from the DOM', async () => {
    const delegate = new ReactFrameworkDelegate();
    const view = await delegate.attachView(<div>Fallback content</div>);
    const root = view.parentElement;

    await delegate.removeView(view);

    expect(root).not.toBeNull();
    expect(root).not.toBeInTheDocument();
    expect(view).not.toBeInTheDocument();
  });

  it('rejects portal views without a parent', async () => {
    const delegate = new ReactFrameworkDelegate();
    delegate.removeViewFromPortal = vi.fn();

    await expect(
      delegate.removeView(document.createElement('div'))
    ).rejects.toThrow('Cannot remove a view without a parent element');

    expect(delegate.removeViewFromPortal).not.toHaveBeenCalled();
  });

  it('rejects portal views without a portal identifier', async () => {
    const delegate = new ReactFrameworkDelegate();
    const parent = document.createElement('div');
    const view = document.createElement('div');
    delegate.removeViewFromPortal = vi.fn();
    parent.appendChild(view);

    await expect(delegate.removeView(view)).rejects.toThrow(
      'Cannot remove a portal view without a portal identifier'
    );

    expect(delegate.removeViewFromPortal).not.toHaveBeenCalled();
  });

  it('removes a portal view from the DOM', async () => {
    const delegate = new ReactFrameworkDelegate();
    delegate.isUsingReactPortal = true;
    render(
      <>
        <IxOverlay delegate={delegate} />
        <div id={PORTAL_ID}></div>
      </>
    );
    const view = await delegate.attachView(<div>Portal content</div>);
    const portalParent = view.parentElement;

    await delegate.removeView(view);

    await waitFor(() => {
      expect(portalParent).not.toBeInTheDocument();
      expect(view).not.toBeInTheDocument();
    });
  });
});

describe('showModal', () => {
  it('shows and removes an HTMLElement modal', async () => {
    const modal = document.createElement('ix-modal');

    const modalInstance = await showModal({ content: modal });

    expect(modalInstance.htmlElement).toBe(modal);
    expect(modal).toBeInTheDocument();

    await reactFrameworkDelegate.removeView(modal);

    expect(modal).not.toBeInTheDocument();
  });

  it('does not retain a root container when React renders no modal', async () => {
    await expect(showModal({ content: null })).rejects.toThrow(
      'React view did not render a host element'
    );

    expect(document.querySelector(rootSelector)).toBeNull();
  });
});
