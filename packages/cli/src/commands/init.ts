/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import { Command } from 'commander';
import {
  configExists,
  initConfig,
  CONFIG_FILE_NAME,
  withProjectLock,
} from './../config';

export const initCommand = new Command('init')
  .description('Initialize ix-blocks-lock.json configuration')
  .option(
    '-t, --target-folder <path>',
    'Target folder for blocks',
    'src/blocks'
  )
  .action(async (opts) => {
    try {
      const cwd = process.cwd();
      await withProjectLock(cwd, async () => {
        if (await configExists(cwd)) {
          throw new Error(
            `${CONFIG_FILE_NAME} already exists in this directory.`
          );
        }
        await initConfig(cwd, opts.targetFolder);
        console.log(`✅ Created ${CONFIG_FILE_NAME}`);
        console.log(`   Target folder: ${opts.targetFolder}`);
      });
    } catch (error) {
      console.error(`❌ ${(error as Error).message}`);
      process.exitCode = 1;
    }
  });
