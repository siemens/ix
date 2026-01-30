/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import { Command } from 'commander';
import { configExists, initConfig, CONFIG_FILE_NAME } from './../config';

export const initCommand = new Command('init')
  .description('Initialize ix-blocks.json configuration')
  .option(
    '-t, --target-folder <path>',
    'Target folder for blocks',
    'src/blocks',
  )
  .action(async (opts) => {
    const cwd = process.cwd();

    if (await configExists(cwd)) {
      console.error(`❌ ${CONFIG_FILE_NAME} already exists in this directory.`);
      process.exit(1);
    }

    await initConfig(cwd, opts.targetFolder);
    console.log(`✅ Created ${CONFIG_FILE_NAME}`);
    console.log(`   Target folder: ${opts.targetFolder}`);
  });
