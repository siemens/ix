// tools/component-usage-plugin.ts
import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

export interface ComponentUsagePluginOptions {
  prefixes?: string[]; // e.g. ['ix-']
  forwardFilename?: string; // file -> components (default: component-usage.json)
  reverseFilename?: string; // component -> files (default: component-usage-by-component.json)
  include?: RegExp; // files to scan
  writeDebounceMs?: number; // debounce delay for file writes
}

export function componentUsagePlugin(
  options: ComponentUsagePluginOptions = {}
): Plugin {
  const {
    prefixes = ['ix-'],
    forwardFilename = 'component-usage.json',
    reverseFilename = 'component-usage-by-component.json',
    include = /\.(html|htm|vue|js|ts|jsx|tsx|svelte)$/,
    writeDebounceMs = 150,
  } = options;

  // Build regex for tag detection based on prefixes
  const escapedPrefixes = prefixes.map((p) =>
    p.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  );
  const tagNamePattern = escapedPrefixes.length
    ? `${escapedPrefixes.map((p) => `${p}[A-Za-z0-9:-]*`).join('|')}`
    : `[a-zA-Z0-9:-]+`;
  const tagRegex = new RegExp(`<\\s*(${tagNamePattern})(?=\\s|\\/|>)`, 'g');

  // Map fileKey -> Set(component)
  const usage = new Map<string, Set<string>>();

  let writeTimer: NodeJS.Timeout | null = null;
  let pendingWriteResolve: (() => void) | null = null;

  function normalizeIdToKey(id: string): string {
    const qIdx = id.indexOf('?');
    const clean = qIdx >= 0 ? id.slice(0, qIdx) : id;
    const cwd = process.cwd();
    let rel = path.relative(cwd, clean);
    if (!rel || rel.startsWith('..')) {
      // outside project root or same -> absolute, normalized
      return path.resolve(clean).replace(/\\/g, '/');
    }
    return '/' + rel.replace(/\\/g, '/');
  }

  function recordUsage(fileKey: string, compName: string) {
    if (!usage.has(fileKey)) usage.set(fileKey, new Set());
    usage.get(fileKey)!.add(compName);
  }

  function buildForward(): Record<string, string[]> {
    const obj: Record<string, string[]> = {};
    for (const [fileKey, set] of usage) {
      const arr = Array.from(set).sort();
      if (arr.length) obj[fileKey] = arr;
    }
    return obj;
  }

  function buildReverse(): Record<string, string[]> {
    const map = new Map<string, Set<string>>();
    for (const [fileKey, set] of usage) {
      for (const comp of set) {
        if (!map.has(comp)) map.set(comp, new Set());
        map.get(comp)!.add(fileKey);
      }
    }
    const obj: Record<string, string[]> = {};
    for (const [comp, set] of map) {
      const arr = Array.from(set).sort();
      if (arr.length) obj[comp] = arr;
    }
    return obj;
  }

  async function writeToDisk(): Promise<void> {
    const forwardJson = JSON.stringify(buildForward(), null, 2);
    const reverseJson = JSON.stringify(buildReverse(), null, 2);

    const outForward = path.resolve(process.cwd(), forwardFilename);
    const outReverse = path.resolve(process.cwd(), reverseFilename);

    try {
      await fs.promises.mkdir(path.dirname(outForward), { recursive: true });
      await fs.promises.writeFile(outForward, forwardJson, 'utf8');
    } catch (err) {
      // non-fatal
      // eslint-disable-next-line no-console
      console.warn(
        `[component-usage-plugin] Failed to write ${outForward}:`,
        err
      );
    }

    try {
      await fs.promises.mkdir(path.dirname(outReverse), { recursive: true });
      await fs.promises.writeFile(outReverse, reverseJson, 'utf8');
    } catch (err) {
      // non-fatal
      // eslint-disable-next-line no-console
      console.warn(
        `[component-usage-plugin] Failed to write ${outReverse}:`,
        err
      );
    }
  }

  function scheduleWrite(): Promise<void> {
    if (writeTimer) clearTimeout(writeTimer);
    return new Promise((resolve) => {
      pendingWriteResolve = resolve;
      writeTimer = setTimeout(async () => {
        writeTimer = null;
        await writeToDisk();
        if (pendingWriteResolve) {
          pendingWriteResolve();
          pendingWriteResolve = null;
        }
        resolve();
      }, writeDebounceMs);
    });
  }

  return {
    name: 'component-usage-plugin',
    transform(code: string, id: string) {
      if (!id) return null;

      const qIdx = id.indexOf('?');
      const idNoQuery = qIdx >= 0 ? id.slice(0, qIdx) : id;
      if (!include || !include.test(idNoQuery)) return null;

      const fileKey = normalizeIdToKey(id);

      let match: RegExpExecArray | null = null;
      tagRegex.lastIndex = 0;
      while ((match = tagRegex.exec(code)) !== null) {
        const comp = match[1];
        if (comp) recordUsage(fileKey, comp);
      }

      // Debounced write for dev server visibility (non-blocking)
      scheduleWrite().catch(() => {
        /* ignore */
      });

      return null;
    },

    async generateBundle() {
      // emit both JSON assets so they appear in the build output
      const forwardJson = JSON.stringify(buildForward(), null, 2);
      const reverseJson = JSON.stringify(buildReverse(), null, 2);

      // emitFile exists on the Rollup/Vite plugin context
      this.emitFile({
        type: 'asset',
        fileName: forwardFilename,
        source: forwardJson,
      });
      this.emitFile({
        type: 'asset',
        fileName: reverseFilename,
        source: reverseJson,
      });

      // also write to disk (project root)
      await writeToDisk();
    },

    async closeBundle() {
      if (writeTimer) {
        clearTimeout(writeTimer);
        writeTimer = null;
      }
      await writeToDisk();
    },
  };
}
