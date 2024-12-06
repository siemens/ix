/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxActionCard as IxActionCardElement, defineCustomElement as defineIxActionCard } from "@siemens/ix/components/ix-action-card.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxActionCardEvents = NonNullable<unknown>;

const IxActionCard: StencilReactComponent<IxActionCardElement, IxActionCardEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxActionCardElement, IxActionCardEvents>({
        tagName: 'ix-action-card',
        elementClass: IxActionCardElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as IxActionCardEvents,
        defineCustomElement: defineIxActionCard
    })
    : /*@__PURE__*/ createSSRComponent<IxActionCardElement, IxActionCardEvents>({
        tagName: 'ix-action-card',
        properties: {
            variant: 'variant',
            icon: 'icon',
            heading: 'heading',
            subheading: 'subheading',
            selected: 'selected'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxActionCard;
