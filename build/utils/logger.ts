import chalk from 'chalk';

class Logger {
  log(...args) {
    console.log(
      ...args.map(arg => {
        return typeof arg === 'function' ? arg() : arg
      })
    )
  }

  debug(...args) {
    this.log(chalk.magenta('debug'), ...args);
  }

  error(...args) {
    this.log(chalk.red('error'), ...args);
  }

  success(...args) {
    this.log(chalk.green('success'), ...args)
  }

  done(...args) {
    this.log(
      chalk.green(process.platform === 'win32' ? '√' : '✔'),
      ...args.map(arg => chalk.bold(arg))
    );
  }

  warn(...args) {
    this.log(chalk.yellow('warning'), ...args)
    process.exitCode = process.exitCode || 1
  }

  tip(...args) {
    this.log(chalk.cyan('tip'), ...args)
  }
}

export default new Logger();
