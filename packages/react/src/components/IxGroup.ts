/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { IxGroup as IxGroupElement, defineCustomElement as defineIxGroup } from "@siemens/ix/components/ix-group.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxGroupEvents = {
    onSelectGroup: EventName<CustomEvent<boolean>>,
    onSelectItem: EventName<CustomEvent<number>>,
    onCollapsedChanged: EventName<CustomEvent<boolean>>
};

const IxGroup: StencilReactComponent<IxGroupElement, IxGroupEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxGroupElement, IxGroupEvents>({
        tagName: 'ix-group',
        elementClass: IxGroupElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {
            onSelectGroup: 'selectGroup',
            onSelectItem: 'selectItem',
            onCollapsedChanged: 'collapsedChanged'
        } as IxGroupEvents,
        defineCustomElement: defineIxGroup
    })
    : /*@__PURE__*/ createSSRComponent<IxGroupElement, IxGroupEvents>({
        tagName: 'ix-group',
        properties: {
            suppressHeaderSelection: 'suppress-header-selection',
            header: 'header',
            subHeader: 'sub-header',
            collapsed: 'collapsed',
            selected: 'selected',
            index: 'index',
            expandOnHeaderClick: 'expand-on-header-click'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxGroup;
