/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import path from 'node:path';
import { z } from 'zod';

export const BLOCK_NAME_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function assertValidBlockName(value: string): string {
  if (!BLOCK_NAME_PATTERN.test(value)) {
    throw new Error(
      `Invalid block name '${value}'. Use lowercase letters, numbers, and single hyphens only.`
    );
  }
  return value;
}

export function isSafeRelativePath(value: string): boolean {
  if (
    !value ||
    value.includes('\\') ||
    value.includes('\0') ||
    value.includes(':') ||
    value.includes('?') ||
    value.includes('#') ||
    path.posix.isAbsolute(value) ||
    /^[a-zA-Z]:/.test(value)
  ) {
    return false;
  }

  let decoded: string;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    return false;
  }

  if (decoded !== value && !isSafeRelativePath(decoded)) {
    return false;
  }

  return value
    .split('/')
    .every((segment) => segment !== '' && segment !== '.' && segment !== '..');
}

export function assertSafeRelativePath(label: string, value: string): string {
  if (!isSafeRelativePath(value)) {
    throw new Error(
      `Invalid ${label} '${value}'. Expected a non-empty relative path without traversal segments.`
    );
  }
  return value;
}

export function isPathInside(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return (
    relative === '' ||
    (!relative.startsWith('..') && !path.isAbsolute(relative))
  );
}

export function formatZodIssues(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const issuePath = issue.path.length ? issue.path.join('.') : '<root>';
      return `  - ${issuePath}: ${issue.message}`;
    })
    .join('\n');
}
