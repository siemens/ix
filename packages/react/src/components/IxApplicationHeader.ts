/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxApplicationHeader as IxApplicationHeaderElement, defineCustomElement as defineIxApplicationHeader } from "@siemens/ix/components/ix-application-header.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxApplicationHeaderEvents = { onMenuToggle: EventName<CustomEvent<boolean>> };

const IxApplicationHeader: StencilReactComponent<IxApplicationHeaderElement, IxApplicationHeaderEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxApplicationHeaderElement, IxApplicationHeaderEvents>({
        tagName: 'ix-application-header',
        elementClass: IxApplicationHeaderElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: { onMenuToggle: 'menuToggle' } as IxApplicationHeaderEvents,
        defineCustomElement: defineIxApplicationHeader
    })
    : /*@__PURE__*/ createSSRComponent<IxApplicationHeaderElement, IxApplicationHeaderEvents>({
        tagName: 'ix-application-header',
        properties: {
            name: 'name',
            showMenu: 'show-menu'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxApplicationHeader;
