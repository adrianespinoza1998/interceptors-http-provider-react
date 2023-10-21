export class Logger {
  static info(message: string) {
    console.info(`[Info] [${message}]`);
  }
  static error(message: string) {
    console.error(`[Error] [${message}]`);
  }
  static warn(message: string) {
    console.warn(`[Warn] [${message}]`);
  }
}
