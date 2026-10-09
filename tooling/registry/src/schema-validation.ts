/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Ajv, { type ErrorObject, type ValidateFunction } from 'ajv';
import addFormats from 'ajv-formats';
import fs from 'fs-extra';

function formatErrors(errors: ErrorObject[] | null | undefined): string {
  return (errors ?? [])
    .map((error) => {
      const location = error.instancePath || '/';
      return `${location} ${error.message ?? 'is invalid'}`;
    })
    .join('; ');
}

export async function compileJsonSchema(
  schemaPath: string
): Promise<ValidateFunction> {
  const schema = await fs.readJson(schemaPath);
  const ajv = new Ajv({ allErrors: true, strict: true });
  addFormats(ajv);
  return ajv.compile(schema);
}

export async function validateJsonFile(
  filePath: string,
  validate: ValidateFunction
): Promise<void> {
  const value = await fs.readJson(filePath);
  assertJsonSchema(value, validate, filePath);
}

export function assertJsonSchema(
  value: unknown,
  validate: ValidateFunction,
  label: string
): void {
  if (!validate(value)) {
    throw new Error(
      `Schema validation failed for ${label}: ${formatErrors(validate.errors)}`
    );
  }
}

export async function validateJsonFiles(
  filePaths: string[],
  schemaPath: string
): Promise<void> {
  const validate = await compileJsonSchema(schemaPath);
  await Promise.all(
    filePaths.map((filePath) => validateJsonFile(filePath, validate))
  );
}
