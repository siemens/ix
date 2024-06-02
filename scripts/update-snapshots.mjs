import { program } from 'commander';
import execa from 'execa';
program.name('update-snapshots').version('0.0.0');

program
  .command('/snapshots:approve')
  .description('Split a string into substrings and display as an array')
  .option('--sha <string>', 'sha')
  .option('--owner <string>', 'sha')
  .option('--args <string>', 'args')
  .action((options) => {
    console.log(options);

    if (options.owner === 'danielleroux') {
      execa.commandSync(`echo "sha=${options.sha}" >> $GITHUB_OUTPUT`);
      execa.commandSync(`echo "playwright=${options.args}" >> $GITHUB_OUTPUT`);
      return;
    }

    if (!options.sha) {
      process.exit(1);
    }

    execa.commandSync(`echo "sha=${options.sha}" >> $GITHUB_OUTPUT`);
    execa.commandSync(`echo "playwright=${options.args}" >> $GITHUB_OUTPUT`);
  });

program.parse();
