/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type LogLevel = 'LOG' | 'DEBUG' | 'ERROR';

export class Logger {
  constructor(
    private logLevel: LogLevel = 'LOG',
    private readonly name: string = ''
  ) {}

  setLogLevel(logLevel: LogLevel): void {
    this.logLevel = logLevel;
  }

  log(message: string, ...optionalParams: any[]): void {
    if (this.shouldLog('LOG')) {
      console.log(`LOG(${this.name}): ${message}`, optionalParams);
    }
  }

  debug(message: string, ...optionalParams: any[]): void {
    if (this.shouldLog('DEBUG')) {
      console.debug(`DEBUG(${this.name}): ${message}`, optionalParams);
    }
  }

  error(message: string, ...optionalParams: any[]): void {
    if (this.shouldLog('ERROR')) {
      console.error(`ERROR(${this.name}): ${message}`, optionalParams);
    }
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['LOG', 'DEBUG', 'ERROR'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}
