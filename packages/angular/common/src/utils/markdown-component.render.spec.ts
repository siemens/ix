/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { beforeAll, describe, expect, test } from '@jest/globals';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Injectable,
  Input,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import type { MarkdownOptions } from '@siemens/ix';
import { defineCustomElement } from '@siemens/ix/components/ix-markdown.js';
import { createMarkdownComponent } from './markdown-component';

@Injectable()
class Greeter {
  greeting = 'Hello';
}

const destroyed: string[] = [];

@Component({
  selector: 'app-greeting',
  standalone: true,
  template: `{{ greeter.greeting }} {{ text }} ({{ attributes['tone'] }})`,
})
class GreetingComponent implements OnDestroy {
  greeter = inject(Greeter);
  @Input() text = '';
  @Input() attributes: Record<string, string> = {};
  ngOnDestroy() {
    destroyed.push(this.text);
  }
}

@Component({
  selector: 'app-host',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `@if (visible()) {
    <ix-markdown
      [markdown]="markdown()"
      [streaming]="streaming()"
      [options]="options"
    ></ix-markdown>
    }`,
})
class HostComponent {
  visible = signal(true);
  markdown = signal('');
  streaming = signal(false);
  options: MarkdownOptions = {
    components: { greeting: createMarkdownComponent(GreetingComponent) },
  };
}

const waitFor = async (condition: () => boolean, timeout = 2000) => {
  const start = Date.now();
  while (!condition()) {
    if (Date.now() - start > timeout) {
      throw new Error('Condition not met in time');
    }
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
};

const setup = async () => {
  TestBed.configureTestingModule({
    imports: [HostComponent],
    providers: [Greeter],
  });
  const fixture = TestBed.createComponent(HostComponent);
  fixture.detectChanges();
  const host: HTMLElement = fixture.nativeElement;
  const greeting = () => host.querySelector('app-greeting');
  const render = (markdown: string, streaming = false) => {
    fixture.componentInstance.markdown.set(markdown);
    fixture.componentInstance.streaming.set(streaming);
    fixture.detectChanges();
  };
  return { fixture, greeting, render };
};

describe('createMarkdownComponent in ix-markdown', () => {
  beforeAll(() => {
    defineCustomElement();
  });

  test('mounts the mapped component with an app-provided service', async () => {
    const { greeting, render } = await setup();
    render(':greeting[World]{tone=warm}');

    await waitFor(() => greeting() !== null);
    expect(greeting()!.textContent).toBe('Hello World (warm)');
  });

  test('updates inputs of the open block in place', async () => {
    const { greeting, render } = await setup();
    render(':greeting[Wor]{tone=warm}', true);
    await waitFor(() => greeting()?.textContent === 'Hello Wor (warm)');
    const mounted = greeting();

    render(':greeting[World]{tone=cool}', true);

    await waitFor(() => greeting()?.textContent === 'Hello World (cool)');
    expect(greeting()).toBe(mounted);
  });

  test('destroys the component when its block disappears', async () => {
    const { greeting, render } = await setup();
    destroyed.length = 0;
    render(':greeting[Gone]{tone=warm}');
    await waitFor(() => greeting() !== null);

    render('Plain text');

    await waitFor(() => greeting() === null);
    expect(destroyed).toEqual(['Gone']);
  });

  test('destroys the component when the view is removed', async () => {
    const { fixture, greeting, render } = await setup();
    destroyed.length = 0;
    render(':greeting[Bye]{tone=warm}');
    await waitFor(() => greeting() !== null);

    fixture.componentInstance.visible.set(false);
    fixture.detectChanges();

    expect(destroyed).toEqual(['Bye']);
  });
});
