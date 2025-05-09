/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as CDX from '@cyclonedx/cyclonedx-library';
import { spawnSync } from 'child_process';
import path from 'path';
import { ensureDir, readFile, readFileSync, writeFile } from 'fs-extra';
import { Component, HashDictionary } from '@cyclonedx/cyclonedx-library/Models';

function splitPkgName(dependencyName: string) {
  const hasScope = dependencyName.startsWith('@');
  const scope = hasScope ? dependencyName.split('/')[0] : '';
  const name = hasScope ? dependencyName.split('/')[1] : dependencyName;
  return { scope, name };
}

function getPkg(pkgPath: string) {
  return JSON.parse(readFileSync(pkgPath, 'utf-8'));
}

async function handleCoreLibraryDependencies(pnpmJson: any) {
  const pkg = JSON.parse(
    (
      await readFile(
        path.join(__dirname, 'node_modules', '@siemens', 'ix', 'package.json'),
        'utf-8'
      )
    ).toString()
  );
  pnpmJson['dependencies'] = pnpmJson['devDependencies'];
  Object.keys(pnpmJson['dependencies']).forEach((key) => {
    if (!pkg['siemensix']['dependencies'].includes(key)) {
      delete pnpmJson['dependencies'][key];
    }
  });

  return pnpmJson;
}

async function resolveComponentData(
  packageName: string,
  version: string
): Promise<any> {
  return new Promise((resolve) => {
    const { stdout } = spawnSync('pnpm', [
      'v',
      '--json',
      '--long',
      `${packageName}@${version}`,
    ]);

    resolve(JSON.parse(stdout.toString()));
  });
}

function resolveLinked(property: string, dependency: { path: string }) {
  const pkg = getPkg(path.join(dependency.path, 'package.json'));
  return pkg[property];
}

class CustomPUrlFactory extends CDX.Factories.PackageUrlFactory {
  constructor() {
    super('npm');
  }

  makeFromComponent(component: Component, sort?: boolean): any {
    const purl = super.makeFromComponent(component, sort);
    if (component.version?.startsWith('link:')) {
      component.version = component.version.substring('link:'.length);
      return super.makeFromComponent(component, sort);
    }
    return purl;
  }
}

async function createSBom(packageName: string) {
  const { stdout } = spawnSync('pnpm', ['ls', '--json', '--long'], {
    cwd: path.join(__dirname, 'node_modules', packageName),
  });

  let [npmJson] = JSON.parse(stdout.toString());

  if (packageName === '@siemens/ix-angular') {
    const { stdout } = spawnSync('pnpm', ['ls', '--json', '--long'], {
      cwd: path.join(npmJson.path, '..'),
    });
    const [npmJsonParent] = JSON.parse(stdout.toString());
    npmJson = npmJsonParent;
  }

  if (packageName === '@siemens/ix') {
    npmJson = await handleCoreLibraryDependencies(npmJson);
  }

  const lFac = new CDX.Factories.LicenseFactory();
  const purlFac = new CustomPUrlFactory();

  const bom = new CDX.Models.Bom();

  const { name, scope } = splitPkgName(packageName);

  bom.metadata.component = new CDX.Models.Component(
    CDX.Enums.ComponentType.Library,
    name
  );
  bom.metadata.component.group = scope;
  bom.metadata.component.licenses.add(lFac.makeFromString('MIT'));
  bom.metadata.component.version = npmJson.version;

  if (npmJson.dependencies) {
    await Promise.all(
      Object.keys(npmJson.dependencies).map(async (dependencyName) => {
        const dep = npmJson.dependencies[dependencyName];

        const { name, scope } = splitPkgName(dependencyName);

        if (dep.version.startsWith('link:')) {
          const resolveVersion = await resolveLinked('version', dep);
          dep.version = `link:${resolveVersion}`;
        }

        const { repository, homepage, bugs, dist } = await resolveComponentData(
          dependencyName,
          dep.version
        );

        const component = new CDX.Models.Component(
          CDX.Enums.ComponentType.Library,
          name,
          {
            group: scope,
            version: dep.version,
          }
        );
        component.licenses.add(lFac.makeFromString(dep.license));
        component.purl = purlFac.makeFromComponent(component);

        if (repository && repository.url) {
          component.externalReferences.add(
            new CDX.Models.ExternalReference(
              repository.url,
              CDX.Enums.ExternalReferenceType.VCS,
              {
                comment:
                  'as detected from PackageJson property "repository.url" and "repository.directory"',
              }
            )
          );
        }

        if (homepage) {
          component.externalReferences.add(
            new CDX.Models.ExternalReference(
              homepage,
              CDX.Enums.ExternalReferenceType.Website,
              {
                comment: 'as detected from PackageJson property "homepage"',
              }
            )
          );
        }

        if (bugs && bugs.url) {
          component.externalReferences.add(
            new CDX.Models.ExternalReference(
              bugs.url,
              CDX.Enums.ExternalReferenceType.IssueTracker,
              {
                comment: 'as detected from PackageJson property "bugs.url"',
              }
            )
          );
        }

        if (dist && dist.tarball) {
          const hashes = new HashDictionary();
          hashes.set(CDX.Enums.HashAlgorithm['SHA-1'], dist.shasum);

          component.externalReferences.add(
            new CDX.Models.ExternalReference(
              dist.tarball,
              CDX.Enums.ExternalReferenceType.Distribution,
              {
                comment: 'source archive (download location)',
                hashes,
              }
            )
          );
        }

        bom.components.add(component);
        bom.metadata.component!.dependencies.add(component.bomRef);
      })
    );
  }

  const serializeSpec = CDX.Spec.Spec1dot4;
  const jsonSerializer = new CDX.Serialize.JsonSerializer(
    new CDX.Serialize.JSON.Normalize.Factory(serializeSpec)
  );
  const serializedJson = jsonSerializer.serialize(bom, {
    space: 2,
  });

  return serializedJson;
}

async function main() {
  const packages = [
    '@siemens/ix',
    '@siemens/ix-react',
    '@siemens/ix-angular',
    '@siemens/ix-vue',
    '@siemens/ix-echarts',
    '@siemens/ix-aggrid',
  ];

  const sbomPromises = packages.map(async (pkg) => {
    const { version } = getPkg(
      path.join(__dirname, 'node_modules', pkg, 'package.json')
    );
    const sbom = createSBom(pkg);
    return {
      pkg,
      version,
      sbom,
    };
  });
  const sbomResults = await Promise.all(sbomPromises);

  // Store the SBOMs in a directory
  const sbomDir = path.join(__dirname, 'sboms');
  await ensureDir(sbomDir);

  await Promise.all(
    sbomResults.map(async ({ pkg, version, sbom }) => {
      const sbomJson = await sbom;
      const fileName = `${pkg
        .replace('@', '')
        .replace('/', '-')}-${version}.json`;
      const filePath = path.join(sbomDir, fileName);
      await writeFile(filePath, sbomJson);
    })
  );
}

main();
