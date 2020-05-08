// 解析process.argv 参数
const { program } = require('commander')
const { version } = require('../../package.json')
const del = require('../command/delete')

module.exports = function () {
  return new Promise((resolve) => {
    // 拉取项目
    program
      .version(version, '-v, --version')
      .description('下载github项目')
      .action(resolve)

    // 删除项目
    program
      .version(version, '-v, --version')
      .command('del <projectName>')
      .alias('d')
      .description('下载github项目')
      .action((projectName) => {
        del(projectName)
      })

    program.parse(process.argv)
  })
}