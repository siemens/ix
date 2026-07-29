/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, expect, it, vi } from 'vitest';
import {
  buildComposedPath,
  buildPathIncluding,
  getParentId,
  removeIdFromHierarchy,
} from '../hierarchy';
import { NestedOverlayStack } from '../nested-overlay-stack';

describe('nested-overlay hierarchy', () => {
  const childIdsByParent = {
    parent: ['child'],
    grandparent: ['parent'],
  };

  it('buildComposedPath collects ancestors that own nested children', () => {
    expect([...buildComposedPath('child', childIdsByParent)]).toEqual([
      'parent',
      'grandparent',
    ]);
  });

  it('buildPathIncluding adds the active id to the ancestor path', () => {
    expect([...buildPathIncluding('child', childIdsByParent)]).toEqual([
      'parent',
      'grandparent',
      'child',
    ]);
  });

  it('removeIdFromHierarchy removes child references and parent entry', () => {
    const map = {
      parent: ['child', 'sibling'],
      child: [],
    };

    removeIdFromHierarchy('child', map, ['parent', 'child']);

    expect(map.parent).toEqual(['sibling']);
    expect(map.child).toBeUndefined();
  });

  it('getParentId returns the direct parent', () => {
    expect(getParentId('child', childIdsByParent)).toBe('parent');
    expect(getParentId('missing', childIdsByParent)).toBeUndefined();
  });
});

describe('NestedOverlayStack', () => {
  type Instance = { id: string; persistent: boolean; open: boolean };
  type TestInstance = Instance & { getId(): string };

  function createStack(
    dismissSpy = vi.fn<(instance: TestInstance) => void>()
  ): {
    stack: NestedOverlayStack<TestInstance>;
    dismissSpy: typeof dismissSpy;
  } {
    const stack = new NestedOverlayStack<TestInstance>(
      {
        blocksOutsideDismiss: (instance) => instance.persistent,
      },
      dismissSpy
    );

    return { stack, dismissSpy };
  }

  function instance(
    id: string,
    options: { persistent?: boolean; open?: boolean } = {}
  ): TestInstance {
    return {
      id,
      persistent: options.persistent ?? false,
      open: options.open ?? true,
      getId: () => id,
    };
  }

  it('dismissOthers skips instances on the active hierarchy path', () => {
    const { stack, dismissSpy } = createStack();
    const parent = instance('parent');
    const child = instance('child');
    const unrelated = instance('unrelated');

    stack.connect(parent);
    stack.connect(child);
    stack.connect(unrelated);
    stack.setChildIds('parent', ['child']);

    stack.dismissOthers('child');

    expect(dismissSpy).toHaveBeenCalledTimes(1);
    expect(dismissSpy).toHaveBeenCalledWith(unrelated);
  });

  it('dismissAll respects blocksOutsideDismiss unless policy is ignored', () => {
    const { stack, dismissSpy } = createStack();
    const dismissible = instance('dismissible');
    const persistent = instance('persistent', { persistent: true });

    stack.connect(dismissible);
    stack.connect(persistent);

    stack.dismissAll();

    expect(dismissSpy).toHaveBeenCalledTimes(1);
    expect(dismissSpy).toHaveBeenCalledWith(dismissible);
  });

  it('dismissAll with ignorePolicyForIds dismisses persistent instances', () => {
    const { stack, dismissSpy } = createStack();
    const persistent = instance('persistent', { persistent: true });

    stack.connect(persistent);

    stack.dismissAll({ ignorePolicyForIds: ['persistent'] });

    expect(dismissSpy).toHaveBeenCalledOnce();
  });
});
