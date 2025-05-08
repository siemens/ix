/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as CDX from '@cyclonedx/cyclonedx-library';
import { readdir } from 'fs';
import { spawn, spawnSync } from 'child_process';
import path, { resolve } from 'path';
import { ensureDir, readFile, writeFile } from 'fs-extra';
import { HashDictionary } from '@cyclonedx/cyclonedx-library/Models';

async function getPkg(pkgPath: string): Promise<any> {
  return JSON.parse(await readFile(pkgPath, 'utf-8'));
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

async function resolveLinked(property: string, dependency: { path: string }) {
  const pkg = await getPkg(path.join(dependency.path, 'package.json'));
  return pkg[property];
}

async function createSBom(packageName: string) {
  const { stdout } = spawnSync('npm', ['ls', '--json', '--long'], {
    cwd: path.join(__dirname, 'node_modules', packageName),
  });

  let npmJson = JSON.parse(stdout.toString());
  if (packageName === '@siemens/ix') {
    npmJson = await handleCoreLibraryDependencies(npmJson);
  }

  const lFac = new CDX.Factories.LicenseFactory();
  const purlFac = new CDX.Factories.PackageUrlFactory('npm');

  const bom = new CDX.Models.Bom();

  bom.metadata.component = new CDX.Models.Component(
    CDX.Enums.ComponentType.Library,
    packageName
  );
  bom.metadata.component.licenses.add(lFac.makeFromString('MIT'));

  if (npmJson.dependencies) {
    await Promise.all(
      Object.keys(npmJson.dependencies).map(async (dependencyName) => {
        const dep = npmJson.dependencies[dependencyName];

        const hasScope = dependencyName.startsWith('@');
        const scope = hasScope ? dependencyName.split('/')[0] : '';
        const name = hasScope ? dependencyName.split('/')[1] : dependencyName;

        const { license, repository, homepage, bugs, dist } =
          await resolveComponentData(dependencyName, dep.version);

        console.log(dep);
        // if (dep.version.startsWith('link:')) {
        //   dep.version = await resolveLinked('version', dep);
        // }

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
    // '@siemens/ix',
    // '@siemens/ix-react',
    '@siemens/ix-angular',
    // '@siemens/ix-vue',
    // '@siemens/ix-echarts',
    // '@siemens/ix-aggrid',
  ];

  const sbomPromises = packages.map(async (pkg) => {
    const { version } = await getPkg(
      path.join(__dirname, 'node_modules', pkg, 'package.json')
    );
    return {
      pkg,
      version,
      sbom: createSBom(pkg),
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
