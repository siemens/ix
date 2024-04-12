/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const execa = require('execa');
const inquirer = require('inquirer');
const semver = require('semver');
const fs = require('fs');
const { cyan, dim, red, reset } = require('colorette');
const { exec } = require('child_process');
const Listr = require('listr');
const path = require('path');
const SEMVER_INCREMENTS = ['patch', 'minor', 'major'];

const isValidVersion = (input) => Boolean(semver.valid(input));

const isValidVersionInput = (input) =>
  SEMVER_INCREMENTS.indexOf(input) !== -1 || isValidVersion(input);

function isVersionGreater(oldVersion, newVersion) {
  if (!isValidVersion(newVersion)) {
    throw new Error('Version should be a valid semver version.');
  }
  return true;
}

function readLernaRootPackage() {
  return JSON.parse(fs.readFileSync('./package.json').toString());
}

function readPackage(path) {
  return JSON.parse(fs.readFileSync(path).toString());
}

function getNewVersion(oldVersion, input) {
  if (!isValidVersionInput(input)) {
    throw new Error(
      `Version should be either ${SEMVER_INCREMENTS.join(
        ', '
      )} or a valid semver version.`
    );
  }

  return SEMVER_INCREMENTS.indexOf(input) === -1
    ? input
    : semver.inc(oldVersion, input);
}

function prettyVersionDiff(oldVersion, inc) {
  const newVersion = getNewVersion(oldVersion, inc).split('.');
  oldVersion = oldVersion.split('.');
  let firstVersionChange = false;
  const output = [];

  for (let i = 0; i < newVersion.length; i++) {
    if (newVersion[i] !== oldVersion[i] && !firstVersionChange) {
      output.push(`${dim(cyan(newVersion[i]))}`);
      firstVersionChange = true;
    } else if (newVersion[i].indexOf('-') >= 1) {
      let preVersion = [];
      preVersion = newVersion[i].split('-');
      output.push(`${dim(cyan(`${preVersion[0]}-${preVersion[1]}`))}`);
    } else {
      output.push(reset(dim(newVersion[i])));
    }
  }
  return output.join(reset(dim('.')));
}

async function askForGitRelease() {
  const prompts = [
    {
      type: 'confirm',
      name: 'git_ready',
      message: 'Please check workdir. Ready to commit and set Tag',
      default: false,
    },
  ];

  await inquirer.prompt(prompts);
}

async function askVersion() {
  const pkg = readLernaRootPackage();
  const oldVersion = pkg.version;

  const prompts = [
    {
      type: 'list',
      name: 'version',
      message: 'Select semver increment or specify new version',
      pageSize: SEMVER_INCREMENTS.length + 2,
      choices: SEMVER_INCREMENTS.map((inc) => ({
        name: `${inc}   ${prettyVersionDiff(oldVersion, inc)}`,
        value: inc,
      })).concat([
        new inquirer.Separator(),
        {
          name: 'Other (specify)',
          value: null,
        },
      ]),
      filter: (input) => {
        const version = isValidVersionInput(input)
          ? getNewVersion(oldVersion, input)
          : input;
        return {
          version,
          type: input,
        };
      },
    },
    {
      type: 'input',
      name: 'other_version',
      message: `Version (current version: ${oldVersion})`,
      when: (answers) => {
        return !answers.version.version;
      },
      filter: (input) => {
        return isValidVersionInput(input)
          ? getNewVersion(pkg.version.version, input)
          : input;
      },
      validate: (input) => {
        if (!isValidVersionInput(input)) {
          return 'Please specify a valid semver, for example, `1.2.3`. See http://semver.org';
        } else if (!isVersionGreater(oldVersion, input)) {
          return `Version must be greater than ${oldVersion}`;
        }

        return true;
      },
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: (answers) => {
        return `Will bump from ${cyan(oldVersion)} to ${cyan(
          answers.version.version || answers.other_version
        )}. Continue?`;
      },
    },
  ];
  const { version, confirm, other_version } = await inquirer.prompt(prompts);

  if (other_version) {
    return { version: other_version, confirm };
  }

  return { version, confirm };
}

function checkGit(tasks) {
  tasks.push({
    title: 'Check workspace',
    task: () =>
      new Listr([
        {
          title: 'Check current branch',
          task: async () => {
            const { stdout: branch } = await execa('git', [
              'symbolic-ref',
              '--short',
              'HEAD',
            ]);
            if (
              branch.indexOf('release') === -1 &&
              branch.indexOf('hotfix') === -1
            ) {
              throw new Error(`Must be on a "release" or "hotfix" branch.`);
            }
          },
        },
        {
          title: 'Check local working tree',
          task: async () => {
            const { stdout: status } = await execa('git', [
              'status',
              '--porcelain',
            ]);
            if (status !== '') {
              throw new Error(
                `Unclean working tree. Commit or stash changes first.`
              );
            }
          },
        },
        {
          title: 'Check remote history',
          task: async () => {
            const { stdout: result } = await execa('git', [
              'rev-list',
              '--count',
              '--left-only',
              '@{u}...HEAD',
            ]);
            if (result !== '0') {
              throw new Error(`Remote history differs. Please pull changes.`);
            }
          },
        },
      ]),
  });
}

function publishGit(tasks, version, changelog) {
  const gitTag = `${version}`;

  tasks.push(
    {
      title: `Check latest commit ${dim(`(${gitTag})`)}`,
      task: async () => {
        const { stdout: commit } = await execa('git', [
          'log',
          '-1',
          '--pretty=%s',
        ]);

        if (commit !== getVersionCommitMessage(version)) {
          throw Error(
            `Last commit is not a release commit! (Last commit: ${commit})`
          );
        }
      },
    },
    {
      title: `Tag latest commit ${dim(`(${gitTag})`)}`,
      task: () => execa('git', ['tag', `v${gitTag}`]),
    },
    {
      title: 'Push branches to remote',
      task: () => execa('git', ['push']),
    },
    {
      title: 'Push tags to remote',
      task: () => execa('git', ['push', '--tags']),
    }
  );
}

function generateChangelog(tasks) {
  tasks.push({
    title: 'Generate CHANGELOG.md',
    task: async () => {
      await execa('yarn', ['run', 'changelog']);
    },
  });

  tasks.push({
    title: 'Prepare CHANGELOG.md for documentation',
    task: async () => {
      const mdHeader = `---
sidebar_title: Changelog
title: Changelog
hide_table_of_contents: true
sidebar_position: 100
---`;
      const __dirname = path.resolve();
      const changeLogPathSource = path.join(__dirname, 'CHANGELOG.md');
      const changeLogPathDest = path.join(
        __dirname,
        'packages',
        'documentation',
        'docs',
        'installation',
        'CHANGELOG.md'
      );
      const changelog = fs.readFileSync(changeLogPathSource);
      fs.writeFileSync(changeLogPathDest, `${mdHeader}\n${changelog}`);
    },
  });
}

function getVersionCommitMessage(version) {
  return `chore: bump ix version to ${version}`;
}

module.exports = {
  readLernaRootPackage,
  checkGit,
  publishGit,
  askForGitRelease,
  askVersion,
  generateChangelog,
  getVersionCommitMessage,
  readPackage,
};
