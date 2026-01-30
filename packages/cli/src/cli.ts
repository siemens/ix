#!/usr/bin/env node
import { Command } from 'commander';

import { addCommand } from './commands/add';
import { initCommand } from './commands/init';

const program = new Command();

program.name('ix').description('Siemens IX Blocks CLI').version('0.1.0');

program.addCommand(initCommand);
program.addCommand(addCommand);

program.parse(process.argv);
