const chalk = require('chalk')

module.exports = {
  consoleRed (str) {
    console.log(chalk.red(str))
  },
  consoleGreen (str) {
    console.log(chalk.green(str))
  },
  consoleBlue (str) {
    console.log(chalk.blue(str))
  },
}