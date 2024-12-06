/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxKeyValue as IxKeyValueElement, defineCustomElement as defineIxKeyValue } from "@siemens/ix/components/ix-key-value.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxKeyValueEvents = NonNullable<unknown>;

const IxKeyValue: StencilReactComponent<IxKeyValueElement, IxKeyValueEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxKeyValueElement, IxKeyValueEvents>({
        tagName: 'ix-key-value',
        elementClass: IxKeyValueElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {} as IxKeyValueEvents,
        defineCustomElement: defineIxKeyValue
    })
    : /*@__PURE__*/ createSSRComponent<IxKeyValueElement, IxKeyValueEvents>({
        tagName: 'ix-key-value',
        properties: {
            icon: 'icon',
            label: 'label',
            labelPosition: 'label-position',
            value: 'value'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxKeyValue;
