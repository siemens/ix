#!/usr/bin/env node
import { Command } from 'commander';

import { addCommand } from './commands/add';
import { initCommand } from './commands/init';
import { mcpCommand } from './commands/mcp';
import { getCliVersion } from './version';

const program = new Command();

program
  .name('ix')
  .description('Siemens IX Blocks CLI')
  .version(getCliVersion());

program.addCommand(initCommand);
program.addCommand(addCommand);
program.addCommand(mcpCommand, {
  hidden: true,
});

await program.parseAsync(process.argv);
