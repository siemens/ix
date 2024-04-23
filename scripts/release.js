/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const {
  checkGit,
  askVersion,
  generateChangelog,
  getVersionCommitMessage,
  readPackage,
} = require('./common');
const Listr = require('listr');
const execa = require('execa');
const path = require('path');

const [_, __, ...params] = process.argv;

const skipGitCheck = params.some((p) => p.includes('--skip-git-check'));

(async function () {
  const PROJECTS = [
    './packages/core',
    './packages/angular',
    './packages/angular-test-app',
    './packages/react',
    './packages/react-test-app',
    './packages/aggrid',
    './packages/echarts',
    './packages/vue',
    './packages/vue-test-app',
    './packages/html-test-app',
    './packages/documentation',
  ];

  const answer = await askVersion();
  const { confirm } = answer;

  let version;

  if (typeof answer.version === 'string') {
    version = answer.version;
  } else {
    version = answer.version.version;
  }

  if (!confirm) {
    return;
  }

  const tasks = [];

  if (!skipGitCheck) {
    checkGit(tasks);
  }

  const updateSubDependencies = [];
  const packageNames = [];

  PROJECTS.forEach((projPath) => {
    updateSubDependencies.push({
      title: `Collect package names ${projPath}`,
      task: () => {
        try {
          const package = readPackage(
            path.join(__dirname, `../${projPath}/package.json`)
          );

          packageNames.push(package.name);
        } catch (er) {
          throw Error(er);
        }
      },
    });
  });

  PROJECTS.forEach((projPath) => {
    updateSubDependencies.push({
      title: `Update package sub version ${projPath}`,
      task: () => {
        packageNames.forEach((packageName) => {
          const package = readPackage(`${projPath}/package.json`);
          if (package.dependencies && !!package.dependencies[packageName]) {
            console.log(
              'Dependency found',
              packageName,
              package.dependencies[packageName]
            );
            package.dependencies[packageName] = `~${version}`;
          }

          if (
            package.peerDependencies &&
            !!package.peerDependencies[packageName]
          ) {
            console.log(
              'Peer Dependency found',
              packageName,
              package.peerDependencies[packageName]
            );
            package.peerDependencies[packageName] = `~${version}`;
          }

          if (
            package.devDependencies &&
            !!package.devDependencies[packageName]
          ) {
            console.log(
              'Dev Dependency found',
              packageName,
              package.devDependencies[packageName]
            );
            package.devDependencies[packageName] = `~${version}`;
          }

          fs.writeFileSync(
            path.join(__dirname, `../${projPath}/package.json`),
            JSON.stringify(package, null, 2)
          );
        });
      },
    });
  });

  const updateVersionTasks = [];
  PROJECTS.forEach((projPath) => {
    updateVersionTasks.push({
      title: `Update version for project: ${projPath}/package.json`,
      task: async () => {
        try {
          await execa('npm', ['version', version, '--no-workspaces-update'], {
            cwd: projPath,
          });
        } catch (er) {
          throw Error(er);
        }
      },
    });
  });

  updateVersionTasks.push({
    title: `Update lerna root package`,
    task: async () => {
      try {
        await execa('npm', ['version', version, '--git-tag-version', 'false']);
      } catch (er) {
        throw Error(er);
      }
    },
  });

  tasks.push({
    title: 'Update sub dependencies',
    task: () => new Listr(updateSubDependencies),
  });

  tasks.push({
    title: 'Update npm versions',
    task: () => new Listr(updateVersionTasks),
  });

  tasks.push({
    title: 'Build libs 🚦',
    task: () => {
      const process = execa('yarn', ['build', '--filter=\\!documentation']);
      return process;
    },
  });

  generateChangelog(tasks);

  tasks.push({
    title: 'Build Documentation 📚',
    task: () => {
      const process = execa('yarn', ['build', '--filter=documentation']);
      return process;
    },
  });

  const listr = new Listr(tasks);

  try {
    await listr.run();
    console.log(`Siemens ix ${version} is prepared for release`);
    console.log(`Next steps:`);
    console.log(`  Verify CHANGELOG.md`);
    console.log(`  git commit -am "${getVersionCommitMessage(version)}"`);
    console.log(`  yarn run push-git\n`);
  } catch (e) {
    // console.log(e);
  }
})();
