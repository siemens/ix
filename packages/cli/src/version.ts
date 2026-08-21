/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */
import fs from 'node:fs';

type PackageMetadata = {
  version?: unknown;
};

export function getCliVersion(): string {
  const packageUrl = new URL('../package.json', import.meta.url);
  try {
    const metadata = JSON.parse(
      fs.readFileSync(packageUrl, 'utf8')
    ) as PackageMetadata;
    if (typeof metadata.version === 'string' && metadata.version) {
      return metadata.version;
    }
  } catch (error) {
    throw new Error(
      `Unable to read CLI version from package metadata: ${
        (error as Error).message
      }`
    );
  }
  throw new Error('CLI package metadata does not contain a valid version.');
}
