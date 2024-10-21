'use client';
/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ReactFrameworkDelegate } from '../delegate';

export const PORTAL_ID = 'ix-portal';

export const IxOverlay = (props: { delegate: ReactFrameworkDelegate }) => {
  const [portalRef, setPortalRef] = useState<Element | null>(null);

  const resolveElementRef = useRef<
    Record<string, (value: Element | PromiseLike<Element>) => void>
  >({});

  const viewRefs = useRef<Record<string, any>>({});
  const [views, setViews] = useState<Record<string, any>>({});

  useEffect(() => {
    const addOverlay = (id: string, view: any) => {
      const _views = { ...viewRefs.current };
      _views[id] = view;
      setViews(_views);
      viewRefs.current = _views;
    };

    const removeOverlay = (id: string) => {
      const _views = { ...viewRefs.current };
      delete _views[id];
      setViews(_views);
      viewRefs.current = _views;
    };

    props.delegate.attachViewToPortal = async (id, view) => {
      addOverlay(id, view);
      return new Promise<Element>((resolve) => {
        const r = { ...resolveElementRef.current };
        r[id] = resolve;
        resolveElementRef.current = r;
      });
    };

    props.delegate.removeViewFromPortal = async (id: string) => {
      removeOverlay(id);
    };

    props.delegate.portalReady();
  }, []);

  useLayoutEffect(() => {
    const portalRef = document.querySelector(`#${PORTAL_ID}`);
    if (portalRef) {
      setPortalRef(portalRef);
    }
  }, []);

  useLayoutEffect(() => {
    Object.keys(views).forEach((key) => {
      const resolveQueue = { ...resolveElementRef.current };
      const element = document.querySelector(`[data-portal-id="${key}"]`);
      if (element && element.children.length === 1 && resolveQueue[key]) {
        const view = element.children[0];
        resolveQueue[key](view);
      }
    });
  }, [views]);

  if (!portalRef) {
    return null;
  }

  return (
    <>
      {Object.keys(views).map((key) => {
        const RenderView = views[key];
        return ReactDOM.createPortal(
          <div data-portal-id={key} style={{ display: 'contents ' }}>
            {RenderView}
          </div>,
          portalRef,
          key
        );
      })}
    </>
  );
};
