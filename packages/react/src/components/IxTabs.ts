/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxTabs as IxTabsElement, defineCustomElement as defineIxTabs } from "@siemens/ix/components/ix-tabs.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxTabsEvents = { onSelectedChange: EventName<CustomEvent<number>> };

const IxTabs: StencilReactComponent<IxTabsElement, IxTabsEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxTabsElement, IxTabsEvents>({
        tagName: 'ix-tabs',
        elementClass: IxTabsElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: { onSelectedChange: 'selectedChange' } as IxTabsEvents,
        defineCustomElement: defineIxTabs
    })
    : /*@__PURE__*/ createSSRComponent<IxTabsElement, IxTabsEvents>({
        tagName: 'ix-tabs',
        properties: {
            small: 'small',
            rounded: 'rounded',
            selected: 'selected',
            layout: 'layout',
            placement: 'placement'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxTabs;
