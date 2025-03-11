'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { IxSelectItem as IxSelectItemElement, defineCustomElement as defineIxSelectItem } from "@siemens/ix/components/ix-select-item.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxSelectItemEvents = { onItemClick: EventName<CustomEvent<string>> };

const IxSelectItem: StencilReactComponent<IxSelectItemElement, IxSelectItemEvents> = /*@__PURE__*/ createComponent<IxSelectItemElement, IxSelectItemEvents>({
    tagName: 'ix-select-item',
    elementClass: IxSelectItemElement,
    // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
    react: React,
    events: { onItemClick: 'itemClick' } as IxSelectItemEvents,
    defineCustomElement: defineIxSelectItem
});

export default IxSelectItem;
