/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { spawn } from 'child_process';
import { Server } from 'http';
import httpServer from 'http-server';

export default {
  run: async () => {
    const cwd = process.cwd();

    const server = await new Promise<Server>((resolve) => {
      const root = `${cwd}/dist`;
      const server = httpServer.createServer({
        root,
        proxy: 'http://localhost:8080?',
      });

      server.listen(8080, '127.0.0.1', () => {
        console.log('Host test files', root);
        resolve(server);
      });
    });

    console.log('go!');

    const testProcess = spawn('pnpm', ['playwright'], {
      stdio: 'inherit',
      shell: true,
    });

    // Handle process completion
    testProcess.on('close', (code) => {
      if (code !== 0) {
        console.error(`Playwright tests failed with code ${code}`);
      } else {
        console.log('All Playwright tests passed successfully!');
      }

      setTimeout(() => {
        server.close();
      }, 50000);
    });
  },
};
