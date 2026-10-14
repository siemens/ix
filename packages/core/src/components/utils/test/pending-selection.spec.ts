/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { describe, expect, it } from 'vitest';
import { isSameStringOrUnset } from '../condition-checks';
import { PendingSelection } from '../datetime/pending-selection';

type Range = { from?: string; to?: string };

const A: Range = { from: '2026/01/01', to: '2026/01/10' };
const B: Range = { from: '2026/02/01', to: '2026/02/10' };

const create = (committed: Range = A) =>
  PendingSelection.create<Range>(
    committed,
    (a, b) =>
      isSameStringOrUnset(a.from, b.from) && isSameStringOrUnset(a.to, b.to)
  );

describe('PendingSelection', () => {
  it('displays the committed value while nothing is pending', () => {
    const selection = create();

    expect(selection.hasPending).toBe(false);
    expect(selection.displayed).toBe(A);
  });

  it('displays a picked value as pending', () => {
    const selection = create().select(B);

    expect(selection.pending).toBe(B);
    expect(selection.displayed).toBe(B);
    expect(selection.committed).toBe(A);
  });

  it('leaves nothing pending when the committed value is picked again', () => {
    const selection = create()
      .select(B)
      .select({ ...A });

    expect(selection.hasPending).toBe(false);
    expect(selection.displayed).toBe(A);
  });

  it('commits the pending value', () => {
    const selection = create().select(B).commit();

    expect(selection.hasPending).toBe(false);
    expect(selection.committed).toBe(B);
  });

  it('restores the committed value on discard', () => {
    const selection = create().select(B).discard();

    expect(selection.hasPending).toBe(false);
    expect(selection.displayed).toBe(A);
  });

  it('drops the pending value on reset', () => {
    const selection = create().select(B).reset(B);

    expect(selection.hasPending).toBe(false);
    expect(selection.committed).toBe(B);
  });

  describe('seeded pending value', () => {
    const seeded = () => create().reset({}, B);

    it('displays the seed as pending while nothing is committed', () => {
      const selection = seeded();

      expect(selection.pending).toBe(B);
      expect(selection.displayed).toBe(B);
      expect(selection.committed).toEqual({});
    });

    it('commits the seed', () => {
      const selection = seeded().commit();

      expect(selection.hasPending).toBe(false);
      expect(selection.committed).toBe(B);
    });

    it('keeps a pick pending, as nothing is committed', () => {
      const selection = seeded().select(A);

      expect(selection.pending).toBe(A);
      expect(selection.committed).toEqual({});
    });

    it('keeps the seed pending when props echo it back', () => {
      const selection = seeded();

      expect(selection.withPropChange('from', B.from)).toBe(selection);
    });

    it('commits a prop change and drops the seed', () => {
      const selection = seeded().withPropChange('from', A.from);

      expect(selection.hasPending).toBe(false);
      expect(selection.committed).toEqual({ from: A.from });
    });
  });

  it('returns the same instance when nothing changes', () => {
    const selection = create();

    expect(selection.commit()).toBe(selection);
    expect(selection.discard()).toBe(selection);
    expect(selection.select({ ...A })).toBe(selection);
  });

  describe('withPropChange', () => {
    it('keeps a pending value when props echo it back', () => {
      const picked = create().select(B);
      const echoed = picked
        .withPropChange('from', B.from)
        .withPropChange('to', B.to);

      expect(echoed).toBe(picked);
      expect(echoed.discard().displayed).toBe(A);
    });

    it('keeps a pending partial range when an unset end date is echoed', () => {
      const picked = create().select({ from: B.from });

      expect(picked.withPropChange('from', B.from)).toBe(picked);
      expect(picked.withPropChange('to', '')).toBe(picked);
      expect(picked.withPropChange('to', undefined)).toBe(picked);
    });

    it('ignores props echoing the committed value', () => {
      const selection = create();

      expect(selection.withPropChange('from', A.from)).toBe(selection);
    });

    it('commits only the changed key and drops the pending value', () => {
      const selection = create().select(B).withPropChange('to', '2026/03/01');

      expect(selection.hasPending).toBe(false);
      expect(selection.committed).toEqual({ from: A.from, to: '2026/03/01' });
    });
  });

  it('compares values with the given comparison', () => {
    const selection = create();

    expect(selection.isSame({ from: '', to: undefined }, {})).toBe(true);
    expect(selection.isSame(A, B)).toBe(false);
  });
});
