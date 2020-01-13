import chalk from 'chalk';

class Logger {
  log(...args: any[]) {
    console.log(
      ...args.map(arg => {
        return typeof arg === 'function' ? arg() : arg
      })
    )
  }

  debug(...args: any[]) {
    this.log(chalk.magenta('debug'), ...args);
  }

  error(...args: any[]) {
    this.log(chalk.red('error'), ...args);
  }

  success(...args: any[]) {
    this.log(chalk.green('success'), ...args)
  }

  done(...args: any[]) {
    this.log(
      chalk.green(process.platform === 'win32' ? '√' : '✔'),
      ...args.map(arg => chalk.bold(arg))
    );
  }

  warn(...args: any[]) {
    this.log(chalk.yellow('warning'), ...args)
    process.exitCode = process.exitCode || 1
  }

  tip(...args: any[]) {
    this.log(chalk.cyan('tip'), ...args)
  }
}

export default new Logger();
