/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import fs from 'fs-extra';
import os from 'node:os';
import path from 'node:path';
import {
  determineLatestRegistryVersion,
  resolveDeploymentVersion,
} from '../src/deployment-policy';
import {
  copyVersionPayload,
  mergeRegistry,
  type RegistryIndex,
  type RegistryVersionEntry,
} from '../src/merge-pages-registry';

function versionEntry(marker: string): RegistryVersionEntry {
  return {
    blocks: [{ name: marker, path: `blocks/${marker}.json` }],
    examples: [{ name: marker, path: `examples/${marker}.json` }],
    components: {
      componentDoc: 'components.json',
      componentIndex: 'component-index.json',
      componentSearchIndex: 'component-search-index.json',
      componentRelatedExamples: 'component-related-examples.json',
    },
  };
}

function registry(
  version: string,
  marker = version,
  latest = version
): RegistryIndex {
  return {
    name: 'ix',
    'dist-tags': { latest },
    versions: { [version]: versionEntry(marker) },
  };
}

describe('deployment version validation', () => {
  it('resolves main, stable versions, and release branches', () => {
    assert.equal(resolveDeploymentVersion('main'), 'main');
    assert.equal(resolveDeploymentVersion('v12.3.4'), 'v12.3.4');
    assert.equal(
      resolveDeploymentVersion('release-registry/v12.3.4'),
      'v12.3.4'
    );
  });

  it('rejects malformed versions and path traversal', () => {
    for (const version of [
      '',
      'latest',
      'v1.2',
      'v1.2.3-beta.1',
      'v01.2.3',
      '../v1.2.3',
      'main/../v1.2.3',
      'release-registry/main',
      'release-registry/../../v1.2.3',
    ]) {
      assert.throws(() => resolveDeploymentVersion(version));
    }
  });
});

describe('latest registry policy', () => {
  it('uses main for the first main-only deployment', () => {
    assert.equal(determineLatestRegistryVersion(undefined, [], 'main'), 'main');
  });

  it('replaces main with the first stable deployment', () => {
    assert.equal(
      determineLatestRegistryVersion('main', ['main'], 'v1.0.0'),
      'v1.0.0'
    );
  });

  it('keeps latest during a same-version update', () => {
    assert.equal(
      determineLatestRegistryVersion('v2.1.0', ['v2.1.0'], 'v2.1.0'),
      'v2.1.0'
    );
  });

  it('does not downgrade latest during an older-version redeploy', () => {
    assert.equal(
      determineLatestRegistryVersion('v2.1.0', ['v1.9.0', 'v2.1.0'], 'v1.9.0'),
      'v2.1.0'
    );
  });

  it('advances latest for a newer stable release', () => {
    assert.equal(
      determineLatestRegistryVersion('v2.9.9', ['v2.9.9'], 'v10.0.0'),
      'v10.0.0'
    );
  });

  it('does not let main replace a stable latest', () => {
    assert.equal(
      determineLatestRegistryVersion('v2.1.0', ['main', 'v2.1.0'], 'main'),
      'v2.1.0'
    );
  });
});

describe('registry merge policy', () => {
  it('retains historical versions while updating a mutable version', () => {
    const existing = registry('v2.0.0', 'historical');
    const firstMerge = mergeRegistry(
      existing,
      registry('v1.0.0', 'old-update', 'v1.0.0'),
      'v1.0.0'
    );
    const secondMerge = mergeRegistry(
      firstMerge,
      registry('v1.0.0', 'new-update', 'v1.0.0'),
      'v1.0.0'
    );

    assert.deepEqual(Object.keys(secondMerge.versions).sort(), [
      'v1.0.0',
      'v2.0.0',
    ]);
    assert.equal(secondMerge.versions['v2.0.0'].blocks[0].name, 'historical');
    assert.equal(secondMerge.versions['v1.0.0'].blocks[0].name, 'new-update');
    assert.equal(secondMerge['dist-tags'].latest, 'v2.0.0');
  });

  it('fully replaces a mutable version payload', async () => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), 'ix-pages-'));
    const distDir = path.join(root, 'dist');
    const outDir = path.join(root, 'out');
    const versionDir = path.join(outDir, 'v2.0.0');

    try {
      await fs.outputFile(path.join(versionDir, 'obsolete.txt'), 'obsolete');
      await fs.outputFile(path.join(distDir, 'current.txt'), 'current');
      await fs.outputJson(path.join(distDir, 'registry.json'), {});

      await copyVersionPayload(distDir, outDir, 'v2.0.0');

      assert.equal(
        await fs.readFile(path.join(versionDir, 'current.txt'), 'utf8'),
        'current'
      );
      assert.equal(
        await fs.pathExists(path.join(versionDir, 'obsolete.txt')),
        false
      );
      assert.equal(
        await fs.pathExists(path.join(versionDir, 'registry.json')),
        false
      );
    } finally {
      await fs.remove(root);
    }
  });
});
