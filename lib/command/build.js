// 执行下载
const exec = require('child_process').exec
const ora = require('ora') // loading效果
const chalk = require('chalk')
const util = require('../../util')

module.exports = function (answers) {
  const spinner = ora(chalk.yellow('正在下载...')).start()
  const buildExec = exec(`git clone ${answers.url}`, (err) => {
    if (err) {
      spinner.fail(chalk.red('下载中断'))
      util.consoleRed(err.toString())
      process.exit(1)
    } else {
      spinner.succeed(chalk.green('下载完成！'))
    }
  })

  // buildExec.stdout.on('data', (data) => {
  //   process.stdout.write('\n' + data.toString())
  // });

  // buildExec.stderr.on('data', (data) => {
  //   process.stderr.write('\n' + data.toString())
  // });
}