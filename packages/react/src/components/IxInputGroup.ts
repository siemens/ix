/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxInputGroup as IxInputGroupElement, defineCustomElement as defineIxInputGroup } from "@siemens/ix/components/ix-input-group.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxInputGroupEvents = NonNullable<unknown>;

const IxInputGroup: StencilReactComponent<IxInputGroupElement, IxInputGroupEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxInputGroupElement, IxInputGroupEvents>({
        tagName: 'ix-input-group',
        elementClass: IxInputGroupElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as IxInputGroupEvents,
        defineCustomElement: defineIxInputGroup
    })
    : /*@__PURE__*/ createSSRComponent<IxInputGroupElement, IxInputGroupEvents>({
        tagName: 'ix-input-group',
        properties: {},
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxInputGroup;
