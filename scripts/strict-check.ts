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

export interface EsLint {
  filePath: string;
  messages: EsLintMessage[];
  suppressedMessages: any[];
  errorCount: number;
  fatalErrorCount: number;
  warningCount: number;
  fixableErrorCount: number;
  fixableWarningCount: number;
  source: string;
  usedDeprecatedRules: EsLintUsedDeprecatedRule[];
}

export interface EsLintMessage {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
  nodeType: string;
  endLine: number;
  endColumn: number;
  messageId?: string;
  suggestions?: EsLintSuggestion[];
}

export interface EsLintSuggestion {
  messageId: string;
  fix: EsLintFix;
  desc: string;
}

export interface EsLintFix {
  range: number[];
  text: string;
}

export interface EsLintUsedDeprecatedRule {
  ruleId: string;
  replacedBy: any[];
}

function getReportLine(
  path: string,
  line: string,
  column: string,
  message: string
) {
  return `- \`${path}:${line}:${column}\`\n  - ${message}\n`;
}

function collapsibleMarkdown(detail: string, summary: string) {
  const output: string[] = [`<details><summary>${summary}</summary>`];
  output.push(detail);
  output.push('</details>');

  return output.join('\n');
}

const cwd = process.cwd();

function checkTsc() {
  const strictCheckFileMain = fs.readFileSync(
    path.join(cwd, 'strict_main.json')
  );
  const strictCheckFilePr = fs.readFileSync(path.join(cwd, 'strict_pr.json'));

  const strictCheckMain = JSON.parse(strictCheckFileMain.toString()) as Item[];
  const strictCheck = JSON.parse(strictCheckFilePr.toString()) as Item[];

  const totalErrorsMain = strictCheckMain.length;
  const totalErrorsPR = strictCheck.length;

  function checkTotal() {
    let output: string[] = [];

    if (totalErrorsPR > totalErrorsMain) {
      output.push(
        `😢 Total errors increased in PR branch: ${
          totalErrorsPR - totalErrorsMain
        }`
      );
    } else if (totalErrorsPR < totalErrorsMain) {
      output.push(
        `You decreased the total number of errors in PR branch by ${
          totalErrorsMain - totalErrorsPR
        } 🎉`
      );
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

  function printNewErrors() {
    let output: string[] = [];
    errorInPR.forEach((value, key) => {
      if (!errorInMain.has(key)) {
        const lines: string[] = [];

        value.errors.forEach((error) => {
          lines.push(
            getReportLine(
              key,
              error.cursor.value.line.toString(),
              error.cursor.value.col.toString(),
              error.message.value.replace(/\n/g, '')
            )
          );
        });

        lines.push('');

        output.push(
          collapsibleMarkdown(
            lines.join('/n'),
            `New errors in PR branch: ${key} - ${value.count} errors`
          )
        );
      } else {
        const mainErrors = errorInMain.get(key)!;
        const prErrors = errorInPR.get(key)!;

        if (prErrors.count > mainErrors.count) {
          const lines: string[] = ['\n'];

          prErrors.errors.forEach((error) => {
            lines.push(
              getReportLine(
                key,
                error.cursor.value.line.toString(),
                error.cursor.value.col.toString(),
                error.message.value.replace(/\n/g, '')
              )
            );
          });

          lines.push('');

          output.push(
            collapsibleMarkdown(
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

  const output = [checkTotal(), printNewErrors()];

  return output.join('\n');
}

function checkEsLint() {
  const eslintMainFile = fs.readFileSync(path.join(cwd, 'eslint_main.json'));
  const eslintPrFile = fs.readFileSync(path.join(cwd, 'eslint_pr.json'));

  const eslintResultMain = JSON.parse(eslintMainFile.toString()) as EsLint[];
  const eslintResultPr = JSON.parse(eslintPrFile.toString()) as EsLint[];

  const totalWarningsMain = eslintResultMain.reduce(
    (acc, cur) => acc + cur.warningCount,
    0
  );

  const totalWarningsPR = eslintResultPr.reduce(
    (acc, cur) => acc + cur.warningCount,
    0
  );

  function checkTotal() {
    let output: string[] = [];

    if (totalWarningsPR > totalWarningsMain) {
      output.push(
        `😢 Total ESLint warnings increased in PR branch: ${
          totalWarningsPR - totalWarningsMain
        }`
      );
    } else if (totalWarningsPR < totalWarningsMain) {
      output.push(
        `You decreased the total number of ESLint warnings in PR branch by ${
          totalWarningsMain - totalWarningsPR
        } 🎉`
      );
    } else {
      output.push(`Total ESLint warnings are the same in both branches`);
    }

    return output.join('\n');
  }

  function findNewErrorsOnEsLintPr() {
    const output: string[] = [];
    eslintResultPr.forEach((result) => {
      const esLintMain = eslintResultMain.find(
        (mainEslint) => mainEslint.filePath === result.filePath
      );

      const prFilePathFromRoot = result.filePath.replace(process.cwd(), '');

      if (!esLintMain) {
        result.messages.forEach((message) => {
          output.push(
            getReportLine(
              prFilePathFromRoot,
              message.line.toString(),
              message.column.toString(),
              message.message
            )
          );
        });
      } else {
        const newErrors = result.messages.filter((message) => {
          return !esLintMain.messages.some(
            (mainMessage) =>
              mainMessage.line === message.line &&
              mainMessage.column === message.column
          );
        });

        if (newErrors.length > 0) {
          const lines: string[] = [];

          newErrors.forEach((error) => {
            lines.push(
              getReportLine(
                prFilePathFromRoot,
                error.line.toString(),
                error.column.toString(),
                error.message
              )
            );
          });

          output.push(lines.join('\n'));
        }
      }
    });

    return output.join('\n');
  }

  return [
    checkTotal(),
    collapsibleMarkdown(findNewErrorsOnEsLintPr(), 'ESLint warnings'),
  ].join('\n');
}

const output = [
  '### Report of `strictNullChecks (strictPropertyInitialization)` check',
  `#### Typescript check`,
  checkTsc(),
  `#### ESLint check`,
  checkEsLint(),
];

fs.writeFileSync(path.join(cwd, 'strict_check.md'), output.join('\n'));

core.setOutput('body', output.join('\n'));
