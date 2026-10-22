/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  inject,
  reflectComponentType,
  Type,
} from '@angular/core';
import type {
  MarkdownComponentContext,
  MarkdownComponentFactory,
} from '@siemens/ix';

/**
 * Turns an Angular component into a Markdown Custom component factory.
 * Call it in an injection context so dependency injection keeps working.
 *
 * Every field of the Markdown component context (`name`, `attributes`,
 * `text`, `markdown`, `node`, `emitAction`) that matches an input of the
 * component is set as that input.
 */
export function createMarkdownComponent<T>(
  component: Type<T>
): MarkdownComponentFactory {
  const appRef = inject(ApplicationRef);
  const environmentInjector = inject(EnvironmentInjector);
  const inputs = new Set(
    reflectComponentType(component)?.inputs.map((i) => i.templateName)
  );

  return (ctx) => {
    const componentRef = createComponent(component, { environmentInjector });
    const setInputs = (context: MarkdownComponentContext) => {
      for (const [key, value] of Object.entries(context)) {
        if (inputs.has(key)) {
          componentRef.setInput(key, value);
        }
      }
      componentRef.changeDetectorRef.detectChanges();
    };

    appRef.attachView(componentRef.hostView);
    setInputs(ctx);

    return {
      element: componentRef.location.nativeElement,
      update: setInputs,
      destroy: () => componentRef.destroy(),
    };
  };
}
