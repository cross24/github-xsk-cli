const chalk = require('chalk')
const ora = require('ora')
const exec = require('child_process').exec
const util = require('../../util')

module.exports = function (projectName) {
  util.fileIsExist(projectName, false).then(() => {
    const spinner = ora(chalk.yellow('正在删除...')).start()
    exec('rm -rf ' + projectName, (err) => {
      if (err) {
        spinner.fail(chalk.red('删除中断'))
        util.consoleRed(err.toString())
        process.exit(1)
      } else {
        spinner.succeed(chalk.green('删除完成！'))
      }
    })
  })
}