/*
 * COPYRIGHT (c) Siemens AG 2018-2026 ALL RIGHTS RESERVED.
 */
import { Command } from 'commander';
import {
  configExists,
  CONFIG_FILE_NAME,
  loadConfig,
  addBlockToConfig,
  defaultRegistry,
} from '../config';
import { detectFramework } from '../detect';
import { installBlock } from '../installer';
import { fetchRegistryIndex, fetchBlockDefinition } from '../registry';

export const addCommand = new Command('add')
  .argument('<blockName>', 'Block name (e.g. hero)')
  .option('-r, --registry <url>', 'Registry base URL', defaultRegistry)
  .option('-f, --framework <fw>', 'react|angular|auto', 'auto')
  .option('--dry-run', 'Print what would be done, without writing files', false)
  .option(
    '--tokens <json>',
    'JSON map for token replacement (e.g. {"__IX_PREFIX__":"Ix"})',
    '{}'
  )
  .action(async (blockName, opts) => {
    const cwd = process.cwd();

    if (!(await configExists(cwd))) {
      console.error(
        `❌ ${CONFIG_FILE_NAME} not found. Run 'ix init' first to create it.`
      );
      process.exit(1);
    }

    let config;
    try {
      config = await loadConfig(cwd);
    } catch (error) {
      console.error(`❌ ${(error as Error).message}`);
      process.exit(1);
    }

    const baseUrl = opts.registry.replace(/\/+$/, '');
    const index = await fetchRegistryIndex(baseUrl);

    const latest = index.versions[index['dist-tags'].latest];
    const entry = latest.blocks.find((b) => b.name === blockName);
    if (!entry) {
      console.error(
        `Block '${blockName}' not found in registry '${index.name}'.`
      );
      process.exit(1);
    }

    const blockDef = await fetchBlockDefinition(baseUrl, entry.path);

    const fw: 'react' | 'angular' =
      opts.framework === 'auto'
        ? await detectFramework(process.cwd())
        : opts.framework;

    if (fw !== 'react' && fw !== 'angular') {
      console.error(`Unknown framework '${fw}'. Use react|angular|auto.`);
      process.exit(1);
    }

    const variant = blockDef.variants[fw];
    if (!variant) {
      console.error(`Block '${blockName}' has no variant for '${fw}'.`);
      process.exit(1);
    }

    let tokens: Record<string, string> = {};
    try {
      tokens = JSON.parse(opts.tokens);
    } catch {
      console.error(`--tokens must be valid JSON`);
      process.exit(1);
    }

    await installBlock({
      cwd,
      baseUrl,
      blockEntryPath: entry.path,
      blockDef,
      framework: fw,
      dryRun: !!opts.dryRun,
      tokens,
      targetFolder: config.targetFolder,
    });

    if (!opts.dryRun) {
      await addBlockToConfig(cwd, blockName, '0.0.0');
    }

    console.log(`✅ Installed '${blockName}' (${fw})`);
  });
