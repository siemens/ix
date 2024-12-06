/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxModalFooter as IxModalFooterElement, defineCustomElement as defineIxModalFooter } from "@siemens/ix/components/ix-modal-footer.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxModalFooterEvents = NonNullable<unknown>;

const IxModalFooter: StencilReactComponent<IxModalFooterElement, IxModalFooterEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxModalFooterElement, IxModalFooterEvents>({
        tagName: 'ix-modal-footer',
        elementClass: IxModalFooterElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as IxModalFooterEvents,
        defineCustomElement: defineIxModalFooter
    })
    : /*@__PURE__*/ createSSRComponent<IxModalFooterElement, IxModalFooterEvents>({
        tagName: 'ix-modal-footer',
        properties: {},
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxModalFooter;
