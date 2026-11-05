/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { pathToFileURL } from 'node:url';

const STABLE_VERSION_PATTERN =
  /^v(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$/;

type StableVersion = [major: bigint, minor: bigint, patch: bigint];

function parseStableVersion(version: string): StableVersion | null {
  const match = STABLE_VERSION_PATTERN.exec(version);
  if (!match) {
    return null;
  }

  return [BigInt(match[1]), BigInt(match[2]), BigInt(match[3])];
}

export function isStableRegistryVersion(version: string): boolean {
  return parseStableVersion(version) !== null;
}

export function assertDeploymentVersion(version: string): void {
  if (version !== 'main' && !isStableRegistryVersion(version)) {
    throw new Error(
      `Invalid registry deployment version '${version}'. Expected 'main' or an exact stable version such as 'v1.2.3'.`
    );
  }
}

export function resolveDeploymentVersion(name: string): string {
  if (name.startsWith('release-registry/')) {
    const version = name.slice('release-registry/'.length);
    if (!isStableRegistryVersion(version)) {
      throw new Error(
        `Invalid registry release branch '${name}'. Expected 'release-registry/v1.2.3'.`
      );
    }

    return version;
  }

  assertDeploymentVersion(name);
  return name;
}

export function compareStableRegistryVersions(
  left: string,
  right: string
): number {
  const leftVersion = parseStableVersion(left);
  const rightVersion = parseStableVersion(right);

  if (!leftVersion || !rightVersion) {
    throw new Error('Only stable registry versions can be compared.');
  }

  for (let index = 0; index < leftVersion.length; index++) {
    if (leftVersion[index] < rightVersion[index]) {
      return -1;
    }
    if (leftVersion[index] > rightVersion[index]) {
      return 1;
    }
  }

  return 0;
}

export function determineLatestRegistryVersion(
  existingLatest: string | undefined,
  deployedVersions: Iterable<string>,
  deploymentVersion: string
): string {
  assertDeploymentVersion(deploymentVersion);

  const stableVersions = new Set(
    [existingLatest, ...deployedVersions, deploymentVersion].filter(
      (version): version is string =>
        version !== undefined && isStableRegistryVersion(version)
    )
  );

  if (stableVersions.size === 0) {
    return 'main';
  }

  return [...stableVersions].reduce((latest, version) =>
    compareStableRegistryVersions(version, latest) > 0 ? version : latest
  );
}

function runCli(): void {
  const [command, name] = process.argv.slice(2);

  if (command !== 'resolve-version' || !name) {
    throw new Error(
      'Usage: tsx src/deployment-policy.ts resolve-version <deployment-name>'
    );
  }

  process.stdout.write(resolveDeploymentVersion(name));
}

const entrypoint = process.argv[1]
  ? pathToFileURL(process.argv[1]).href
  : undefined;

if (entrypoint === import.meta.url) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
