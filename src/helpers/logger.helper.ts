import * as util from 'util';

export enum LogLevel {
  INFO = 'info',
  ERROR = 'error',
  DEBUG = 'debug',
}

export class Logger {
  log(level: LogLevel, message: string, payload: any) {
    console[level](message, util.inspect(payload, true, Infinity, false));
  }
}
