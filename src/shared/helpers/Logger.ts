import chalk from 'chalk';

export default class Logger {
  static success(message: string, title: string = "Success"): void { 
    console.log(
      ` ${chalk.bgGreen.white(` ${title} `)} ${chalk.green(message)}`
    ); 
  }
  static info(message: string, title: string = "Info"): void { 
    console.log(
      ` ${chalk.bgBlueBright.white(` ${title} `)} ${chalk.blueBright(message)}`
    ); 
  }
  static warn(message: string): void { 
    console.warn(
      ` ${chalk.yellow(message)}`
    ); 
  }
  static error(message: string, title: string = "Error"): void { 
    console.error(
      ` ${chalk.bgRed.white(` ${title} `)} ${chalk.red(message)}`
    ); 
  }
  static log(message: string, title?: string): void { 
    console.log(
      `${ title ? chalk.bgGray.white(title) : '' } ${chalk.gray(message)}`
    ); 
  }
}