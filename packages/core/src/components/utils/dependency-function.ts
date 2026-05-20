/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type CustomElementDependency<Tag extends string = string> = {
  tag: Tag;
  define: () => Promise<void> | void;
};

type CustomElementDependencies = readonly CustomElementDependency[];

type DependencyDefinitions<TDependencies extends CustomElementDependencies> = {
  readonly [Index in keyof TDependencies]: TDependencies[Index] extends CustomElementDependency<
    infer Tag
  >
    ? CustomElementDependency<Tag>
    : never;
};

type DependencyFunctionCallback = (...args: never[]) => Promise<unknown>;

export type DependencyFunction<
  TCallback extends DependencyFunctionCallback,
  TDependencies extends CustomElementDependencies,
> = TCallback & {
  readonly dependencies: DependencyDefinitions<TDependencies>;
  ensureDependencies: () => Promise<void>;
  withDependencies: (
    dependencies: DependencyDefinitions<TDependencies>
  ) => DependencyFunction<TCallback, TDependencies>;
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
    await dependency.define();
  }

  await Promise.all(
    dependencies.map((dependency) => registry.whenDefined(dependency.tag))
  );
}

export function createDependencyFunction<
  TCallback extends DependencyFunctionCallback,
  const TDependencies extends CustomElementDependencies,
>(
  callback: TCallback,
  dependencies: TDependencies
): DependencyFunction<TCallback, TDependencies> {
  const createFunction = (
    activeDependencies: DependencyDefinitions<TDependencies>
  ): DependencyFunction<TCallback, TDependencies> => {
    const dependencyDefinitions = Object.freeze([
      ...activeDependencies,
    ]) as DependencyDefinitions<TDependencies>;
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

    const dependencyFunction = (async (...args: Parameters<TCallback>) => {
      await ensureDependencies();
      return callback(...args);
    }) as DependencyFunction<TCallback, TDependencies>;

    Object.defineProperties(dependencyFunction, {
      dependencies: {
        value: dependencyDefinitions,
      },
      ensureDependencies: {
        value: ensureDependencies,
      },
      withDependencies: {
        value: (nextDependencies: DependencyDefinitions<TDependencies>) =>
          createFunction(nextDependencies),
      },
    });

    return dependencyFunction;
  };

  return createFunction(dependencies as DependencyDefinitions<TDependencies>);
}
