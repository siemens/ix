/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { type FilterState, type InputState, type IxCategoryFilterCustomEvent } from "@siemens/ix";
import { IxCategoryFilter as IxCategoryFilterElement, defineCustomElement as defineIxCategoryFilter } from "@siemens/ix/components/ix-category-filter.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxCategoryFilterEvents = {
    onCategoryChanged: EventName<CustomEvent<string>>,
    onInputChanged: EventName<IxCategoryFilterCustomEvent<InputState>>,
    onFilterChanged: EventName<IxCategoryFilterCustomEvent<FilterState>>,
    onFilterCleared: EventName<CustomEvent<void>>
};

const IxCategoryFilter: StencilReactComponent<IxCategoryFilterElement, IxCategoryFilterEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxCategoryFilterElement, IxCategoryFilterEvents>({
        tagName: 'ix-category-filter',
        elementClass: IxCategoryFilterElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {
            onCategoryChanged: 'categoryChanged',
            onInputChanged: 'inputChanged',
            onFilterChanged: 'filterChanged',
            onFilterCleared: 'filterCleared'
        } as IxCategoryFilterEvents,
        defineCustomElement: defineIxCategoryFilter
    })
    : /*@__PURE__*/ createSSRComponent<IxCategoryFilterElement, IxCategoryFilterEvents>({
        tagName: 'ix-category-filter',
        properties: {
            disabled: 'disabled',
            readonly: 'readonly',
            placeholder: 'placeholder',
            icon: 'icon',
            hideIcon: 'hide-icon',
            staticOperator: 'static-operator',
            repeatCategories: 'repeat-categories',
            tmpDisableScrollIntoView: 'tmp-disable-scroll-into-view',
            labelCategories: 'label-categories',
            i18nPlainText: 'i-1-8n-plain-text'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxCategoryFilter;
