/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import fsExtra from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();

const ix_path = path.join(__dirname, '..', 'core');

const ix_dest_path = path.join(
  __dirname,
  'static',
  'webcomponent-examples',
  'lib',
  'ix'
);

const icon_path = path.join(
  __dirname,
  '../../',
  'node_modules',
  '@siemens/core-ui-icons'
);

const icon_dest_path = path.join(
  __dirname,
  'static',
  'webcomponent-examples',
  'lib',
  'core-ui-icons'
);

fsExtra.copySync(ix_path, ix_dest_path, {
  filter: (fileName) => {
    return !fileName.includes('node_modules');
  },
});
fsExtra.copySync(icon_path, icon_dest_path);
