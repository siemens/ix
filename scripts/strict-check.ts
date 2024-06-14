/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs-extra';
import path from 'path';
import * as core from '@actions/core';

type Path = {
  type: string;
  value: string;
};

type Cursor = {
  type: string;
  value: {
    line: number;
    col: number;
  };
};

type TsError = {
  type: string;
  errorString: string;
};

type Message = {
  type: string;
  value: string;
};

type Item = {
  type: string;
  value: {
    path: Path;
    cursor: Cursor;
    tsError: TsError;
    message: Message;
  };
};

const cwd = process.cwd();

const strictCheckFileMain = fs.readFileSync(path.join(cwd, 'strict_main.json'));
const strictCheckFilePr = fs.readFileSync(path.join(cwd, 'strict_pr.json'));

const strictCheckMain = JSON.parse(strictCheckFileMain.toString()) as Item[];
const strictCheck = JSON.parse(strictCheckFilePr.toString()) as Item[];

const totalErrorsMain = strictCheckMain.length;
const totalErrorsPR = strictCheck.length;

function checkTotal() {
  let output: string[] = [];

  output.push(`Total errors in main branch: ${totalErrorsMain}`);
  output.push(`Total errors in PR branch: ${totalErrorsPR}\n`);

  if (totalErrorsPR > totalErrorsMain) {
    output.push(
      `😢 Total errors increased in PR branch: ${
        totalErrorsPR - totalErrorsMain
      }`
    );
  } else if (totalErrorsPR < totalErrorsMain) {
    output.push(`You decreased the total number of errors in PR branch 🎉`);
  } else {
    output.push(`Total errors are the same in both branches`);
  }

  return output.join('\n');
}

function collectErrors(errors: Item[]) {
  const errorMap: Map<
    string,
    {
      errors: {
        path: Path;
        cursor: Cursor;
        tsError: TsError;
        message: Message;
      }[];
      count: number;
    }
  > = new Map();

  for (const error of errors) {
    const { path, tsError, message } = error.value;
    const filename = path.value;

    if (errorMap.has(filename)) {
      const existingError = errorMap.get(filename)!;
      existingError.errors.push({
        cursor: error.value.cursor,
        message: message,
        path: path,
        tsError: tsError,
      });
      existingError.count++;
    } else {
      errorMap.set(filename, {
        errors: [
          {
            cursor: error.value.cursor,
            message: message,
            path: path,
            tsError: tsError,
          },
        ],
        count: 1,
      });
    }
  }

  return errorMap;
}

const errorInMain = collectErrors(strictCheckMain);
const errorInPR = collectErrors(strictCheck);

function collapsableMarkdown(detail: string, summary: string) {
  const output: string[] = [`<details><summary>${summary}</summary>`];
  output.push(detail);
  output.push('</details>');

  return output.join('\n');
}

function printNewErrors() {
  let output: string[] = [];
  errorInPR.forEach((value, key) => {
    if (!errorInMain.has(key)) {
      const lines: string[] = [
        '',
        '| Message | TSError | Line:Col |',
        '|---------|---------|----------|',
      ];

      value.errors.forEach((error) => {
        lines.push(
          `| ${error.message.value.replace(/\n/g, '')} | ${
            error.tsError.type
          } | ${error.cursor.value.line}:${error.cursor.value.col}|`
        );
      });

      lines.push('');

      output.push(
        collapsableMarkdown(
          lines.join('/n'),
          `New errors in PR branch: ${key} - ${value.count} errors`
        )
      );
    } else {
      const mainErrors = errorInMain.get(key)!;
      const prErrors = errorInPR.get(key)!;

      if (prErrors.count > mainErrors.count) {
        const lines: string[] = [
          '',
          '| Message | TSError | Line:Col |',
          '|---------|---------|----------|',
        ];

        prErrors.errors.forEach((error) => {
          lines.push(
            `| ${error.message.value.replace(/\n/g, '')} | ${
              error.tsError.errorString
            } | ${error.cursor.value.line}:${error.cursor.value.col} |`
          );
        });

        lines.push('');

        output.push(
          collapsableMarkdown(
            lines.join('\n'),
            `Increased errors in PR branch: ${key} - ${
              prErrors.count - mainErrors.count
            } errors`
          )
        );
      }
    }
  });

  return output.join('\n');
}

const output = ['### Report of `strict` check', checkTotal(), printNewErrors()];
core.setOutput('body', output.join('\n'));
