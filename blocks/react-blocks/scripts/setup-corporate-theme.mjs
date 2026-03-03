import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
  copyFileSync,
  writeFileSync as writeFile,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');
const generatedAvailabilityPath = join(
  projectRoot,
  'src/generated/corporate-theme-availability.ts'
);
const publicCorporateThemeCssPath = join(projectRoot, 'public/brand-theme.css');

const corporateThemeVersion = process.env.CORPORATE_THEME_VERSION ?? '1.0.0';
const corporateThemeToken = process.env.CORPORATE_THEME_TOKEN;
const corporateThemeUrl =
  process.env.CORPORATE_THEME_URL ??
  `https://code.siemens.com/api/v4/projects/249177/packages/npm/@siemens-ix/corporate-theme/-/@siemens-ix/corporate-theme-${corporateThemeVersion}.tgz`;

function writeAvailabilityFile(isAvailable) {
  mkdirSync(dirname(generatedAvailabilityPath), { recursive: true });
  writeFileSync(
    generatedAvailabilityPath,
    `export const corporateThemeAvailable = ${isAvailable};\n`
  );
}

async function downloadCorporateThemeArchive(archivePath) {
  if (!corporateThemeToken) {
    return false;
  }

  const response = await fetch(corporateThemeUrl, {
    headers: {
      Authorization: `Bearer ${corporateThemeToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Corporate theme download failed (${response.status} ${response.statusText})`
    );
  }

  const data = Buffer.from(await response.arrayBuffer());
  writeFile(archivePath, data);
  return true;
}

function extractArchive(archivePath, extractDir) {
  const extractionResult = spawnSync(
    'tar',
    ['-xzf', archivePath, '-C', extractDir],
    {
      cwd: projectRoot,
      stdio: 'inherit',
      env: process.env,
    }
  );

  return extractionResult.status === 0;
}

async function ensureCorporateTheme() {
  const tmpDirectory = mkdtempSync(join(tmpdir(), 'ix-corporate-theme-'));
  const archivePath = join(tmpDirectory, 'corporate-theme.tgz');
  const extractedCssPath = join(
    tmpDirectory,
    'package/dist/css/brand-theme.css'
  );

  try {
    const downloaded = await downloadCorporateThemeArchive(archivePath);

    if (downloaded) {
      const extracted = extractArchive(archivePath, tmpDirectory);

      if (extracted && existsSync(extractedCssPath)) {
        mkdirSync(dirname(publicCorporateThemeCssPath), { recursive: true });
        copyFileSync(extractedCssPath, publicCorporateThemeCssPath);
      }
    }
  } catch (error) {
    console.warn('[corporate-theme] optional download failed:', error);
  } finally {
    rmSync(tmpDirectory, { recursive: true, force: true });
  }

  writeAvailabilityFile(existsSync(publicCorporateThemeCssPath));
}

await ensureCorporateTheme();
