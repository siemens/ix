/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * Do __not__ import components from this file as server side rendered components
 * may not hydrate due to missing Stencil runtime. Instead, import these components through the generated 'components.ts'
 * file that re-exports all components with the 'use client' directive.
 */

/* eslint-disable */

import { type IxNumberInputCustomEvent } from "@siemens/ix";
import { IxNumberInput as IxNumberInputElement, defineCustomElement as defineIxNumberInput } from "@siemens/ix/components/ix-number-input.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent, createSSRComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type IxNumberInputEvents = {
    onValueChange: EventName<CustomEvent<number>>,
    onValidityStateChange: EventName<IxNumberInputCustomEvent<ValidityState>>,
    onIxBlur: EventName<CustomEvent<void>>
};

const IxNumberInput: StencilReactComponent<IxNumberInputElement, IxNumberInputEvents> = typeof window !== 'undefined'
    ? /*@__PURE__*/ createComponent<IxNumberInputElement, IxNumberInputEvents>({
        tagName: 'ix-number-input',
        elementClass: IxNumberInputElement,
        // @ts-ignore - React type of Stencil Output Target may differ from the React version used in the Nuxt.js project, this can be ignored.
        react: React,
        events: {
            onValueChange: 'valueChange',
            onValidityStateChange: 'validityStateChange',
            onIxBlur: 'ixBlur'
        } as IxNumberInputEvents,
        defineCustomElement: defineIxNumberInput
    })
    : /*@__PURE__*/ createSSRComponent<IxNumberInputElement, IxNumberInputEvents>({
        tagName: 'ix-number-input',
        properties: {
            name: 'name',
            placeholder: 'placeholder',
            value: 'value',
            required: 'required',
            disabled: 'disabled',
            readonly: 'readonly',
            helperText: 'helper-text',
            infoText: 'info-text',
            showTextAsTooltip: 'show-text-as-tooltip',
            validText: 'valid-text',
            warningText: 'warning-text',
            label: 'label',
            invalidText: 'invalid-text',
            pattern: 'pattern',
            min: 'min',
            max: 'max',
            allowedCharactersPattern: 'allowed-characters-pattern',
            showStepperButtons: 'show-stepper-buttons'
        },
        hydrateModule: import('@siemens/ix/hydrate')
    });

export default IxNumberInput;
