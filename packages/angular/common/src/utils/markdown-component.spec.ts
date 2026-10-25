/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { describe, expect, test } from '@jest/globals';
import {
  ApplicationRef,
  Component,
  Injectable,
  Injector,
  Input,
  runInInjectionContext,
  inject,
  OnDestroy,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { createMarkdownComponent } from './markdown-component';

@Injectable({ providedIn: 'root' })
class Greeter {
  greeting = 'Hello';
}

const destroyed: string[] = [];

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `{{ greeter.greeting }} {{ text }} ({{ attributes['tone'] }})`,
})
class HelloComponent implements OnDestroy {
  greeter = inject(Greeter);
  @Input() text = '';
  @Input() attributes: Record<string, string> = {};
  ngOnDestroy() {
    destroyed.push('hello');
  }
}

const ctx = (text: string, tone = 'warm') =>
  ({
    name: 'hello',
    attributes: { tone },
    text,
    markdown: text,
    node: { type: 'text', value: text },
    emitAction: () => {},
  }) as any;

const setup = () => {
  const injector = TestBed.inject(Injector);
  const factory = runInInjectionContext(injector, () =>
    createMarkdownComponent(HelloComponent)
  );
  return { factory, appRef: TestBed.inject(ApplicationRef) };
};

describe('createMarkdownComponent', () => {
  test('mounts the component with injected services and inputs', () => {
    const { factory } = setup();
    const instance = factory(ctx('World'));
    expect(instance.element.textContent).toBe('Hello World (warm)');
  });

  test('update sets inputs and runs change detection', () => {
    const { factory } = setup();
    const instance = factory(ctx('World'));
    instance.update!(ctx('Again', 'cool'));
    expect(instance.element.textContent).toBe('Hello Again (cool)');
  });

  test('destroy detaches and destroys the component', () => {
    const { factory, appRef } = setup();
    destroyed.length = 0;
    const before = appRef.viewCount;
    const instance = factory(ctx('World'));
    expect(appRef.viewCount).toBe(before + 1);
    instance.destroy!();
    expect(destroyed).toEqual(['hello']);
    expect(appRef.viewCount).toBe(before);
  });
});
