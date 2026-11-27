#!/usr/bin/env node
import { Command } from 'commander';

import { addCommand } from './commands/add';
import { initCommand } from './commands/init';
import { getCliVersion } from './version';

const program = new Command();

program
  .name('ix')
  .description('Siemens IX Patterns CLI')
  .version(getCliVersion());

program.addCommand(initCommand);
program.addCommand(addCommand);
await program.parseAsync(process.argv);
