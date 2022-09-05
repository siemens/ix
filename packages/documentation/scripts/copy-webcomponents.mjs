/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import fsExtra from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();
const libDestPath = path.join(
  __dirname,
  'static',
  'webcomponent-examples',
  'lib'
);

const ix_path = path.join(__dirname, '..', 'core');
const ix_dest_path = path.join(libDestPath, 'ix');

const ix_brand_theme_path = path.join(
  __dirname,
  '../../',
  'node_modules',
  '@siemens/ix-brand-theme'
);
const ix_brand_theme_dest_path = path.join(libDestPath, 'ix-brand-theme');

const ix_aggrid_path = path.join(__dirname, '..', 'aggrid');
const ix_aggrid_dest_path = path.join(libDestPath, 'ix-aggrid');

const icon_path = path.join(
  __dirname,
  '../../',
  'node_modules',
  '@siemens/ix-icons'
);
const icon_dest_path = path.join(libDestPath, 'ix-icons');

function filter(fileName) {
  return !fileName.includes('node_modules');
}

(async () => {
  console.log('Start copy');
  await Promise.all([
    fsExtra.copy(ix_path, ix_dest_path, { filter }),
    fsExtra.copy(ix_aggrid_path, ix_aggrid_dest_path, { filter }),
    fsExtra.copy(icon_path, icon_dest_path),
    fsExtra.copy(ix_brand_theme_path, ix_brand_theme_dest_path, {
      filter: (path) => !path.includes('ix-brand-theme/node_modules'),
    }),
  ]);
  console.log('Copy finished!');
})();
