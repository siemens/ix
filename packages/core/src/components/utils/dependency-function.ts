/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type CustomElementDependency = {
  tag: string;
  define: () => Promise<void> | void;
};

export type DependencyFunction<TArgs extends unknown[], TResult> = {
  (...args: TArgs): Promise<Awaited<TResult>>;
  readonly dependencies: readonly CustomElementDependency[];
  ensureDependencies: () => Promise<void>;
  withDependencies: (
    dependencies: readonly CustomElementDependency[]
  ) => DependencyFunction<TArgs, TResult>;
};

async function ensureCustomElementDependencies(
  dependencies: readonly CustomElementDependency[]
) {
  if (dependencies.length === 0) {
    return;
  }

  const registry = globalThis.customElements;
  if (!registry) {
    throw new Error(
      'Cannot define custom element dependencies because customElements is not available.'
    );
  }

  for (const dependency of dependencies) {
    if (!registry.get(dependency.tag)) {
      await dependency.define();
    }
  }

  await Promise.all(
    dependencies.map((dependency) => registry.whenDefined(dependency.tag))
  );
}

export function createDependencyFunction<TArgs extends unknown[], TResult>(
  callback: (...args: TArgs) => Promise<TResult> | TResult,
  dependencies: readonly CustomElementDependency[]
): DependencyFunction<TArgs, TResult> {
  const createFunction = (
    activeDependencies: readonly CustomElementDependency[]
  ): DependencyFunction<TArgs, TResult> => {
    const dependencyDefinitions = Object.freeze([...activeDependencies]);
    let ensureDependenciesPromise: Promise<void> | undefined;

    const ensureDependencies = () => {
      if (!ensureDependenciesPromise) {
        ensureDependenciesPromise = ensureCustomElementDependencies(
          dependencyDefinitions
        ).catch((error: unknown) => {
          ensureDependenciesPromise = undefined;
          throw error;
        });
      }

      return ensureDependenciesPromise;
    };

    const dependencyFunction = (async (...args: TArgs) => {
      await ensureDependencies();
      return callback(...args);
    }) as DependencyFunction<TArgs, TResult>;

    Object.defineProperties(dependencyFunction, {
      dependencies: {
        enumerable: true,
        value: dependencyDefinitions,
      },
      ensureDependencies: {
        value: ensureDependencies,
      },
      withDependencies: {
        value: (nextDependencies: readonly CustomElementDependency[]) =>
          createFunction(nextDependencies),
      },
    });

    return dependencyFunction;
  };

  return createFunction(dependencies);
}
