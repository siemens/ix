import fs from 'node:fs/promises';
import path from 'node:path';

type Framework = 'react' | 'angular';

export async function detectFramework(cwd: string): Promise<Framework> {
  const pkgPath = path.join(cwd, 'package.json');
  const raw = await fs.readFile(pkgPath, 'utf8').catch(() => '');
  if (!raw) return 'react';

  const pkg = JSON.parse(raw);
  const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };

  if (deps['@angular/core'] || deps['@angular/cli']) return 'angular';
  if (deps['react'] || deps['next'] || deps['@remix-run/react']) return 'react';

  return 'react';
}
