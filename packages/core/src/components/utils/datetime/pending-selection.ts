/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Selection of a date or time component: a committed value and, on top of
 * it, a pending value the user picked but did not apply yet. Shared by all
 * date and time pickers so they handle picks, prop changes, confirm and
 * discard the same way.
 *
 * Immutable: every transition returns a new instance, or the same instance
 * when nothing changes, so it can be stored in a single `@State()`.
 */
export class PendingSelection<T extends object> {
  private constructor(
    /** The applied value, e.g. the value set by props or confirmed. */
    readonly committed: T,
    /** `undefined` when there is nothing pending. */
    readonly pending: T | undefined,
    /** Whether two values select the same, including both unset. */
    readonly isSame: (a: T, b: T) => boolean
  ) {}

  static create<T extends object>(
    committed: T,
    isSame: (a: T, b: T) => boolean
  ): PendingSelection<T> {
    return new PendingSelection(committed, undefined, isSame);
  }

  /** The value shown to the user: pending, else committed. */
  get displayed(): T {
    return this.pending ?? this.committed;
  }

  get hasPending(): boolean {
    return this.pending !== undefined;
  }

  /** Picks `value`. Re-selecting the committed value leaves nothing pending. */
  select(value: T): PendingSelection<T> {
    const pending = this.isSame(value, this.committed) ? undefined : value;

    return this.with(this.committed, pending);
  }

  /** Applies the pending value. */
  commit(): PendingSelection<T> {
    return this.pending ? this.with(this.pending, undefined) : this;
  }

  /** Drops the pending value, so the committed value is displayed again. */
  discard(): PendingSelection<T> {
    return this.pending ? this.with(this.committed, undefined) : this;
  }

  /** Replaces the committed value and drops the pending value. */
  reset(committed: T): PendingSelection<T> {
    return this.with(committed, undefined);
  }

  /**
   * Whether a prop value only echoes the displayed value back, e.g. a
   * two-way binding to the change event that reported a pick.
   */
  isEcho<K extends keyof T>(key: K, value: T[K]): boolean {
    const { displayed } = this;

    return this.isSame({ ...displayed, [key]: value }, displayed);
  }

  /**
   * Applies a change of the prop backing `key`. An echo is not an external
   * change: the same instance is returned, so a pending value stays pending
   * and can still be confirmed or discarded. Otherwise only `key` of the
   * committed value changes, as a consumer may bind only some of the props,
   * and the pending value is dropped.
   */
  withPropChange<K extends keyof T>(key: K, value: T[K]): PendingSelection<T> {
    if (this.isEcho(key, value)) {
      return this;
    }

    return this.with({ ...this.committed, [key]: value }, undefined);
  }

  private with(committed: T, pending: T | undefined): PendingSelection<T> {
    if (committed === this.committed && pending === this.pending) {
      return this;
    }

    return new PendingSelection(committed, pending, this.isSame);
  }
}
