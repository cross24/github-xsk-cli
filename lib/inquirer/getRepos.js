const inquirer = require('inquirer')
const { repos } = require('../../githubApi')
const util = require('../../util')
const chalk = require('chalk')
const ora = require('ora') // loading效果

// 获取仓库值
module.exports = () => {
  let useOldUser = false; // 是否沿用之前账户名

  return new Promise((resolve) => {
    util.fileIsExist('user.txt')
      .then(() => {
        // 询问是否需要换账户
        inquirer.prompt([{
          type: 'confirm',
          name: 'change',
          message: '监测到您之前的输入过账户名，是否沿用之前账户名？'
        }]).then((answer) => {
          if (useOldUser = answer.change) {
            util.readFile('user.txt').then((user) => {
              requestRepos({ user: user.toString() })
            })
          } else {
            getUser(requestRepos)
          }
        })
      })
      .catch(getUser.bind(null,requestRepos))

    // 获取用户名
    function getUser (cb) {
      inquirer.prompt([{
        type: 'input',
        name: 'user',
        message: '请输入的您的github账户名'
      }]).then(cb)
    }
    // 获取仓库列表
    function requestRepos (answer) {
      const spinner = ora(chalk.yellow('正在拉取项目，请稍等...')).start()
      repos(answer.user)
      .then((res) => {
        spinner.stop('')
        // 判断是否有仓库存在
        if (res.length) {
          resolve(res)
        } else {
          util.consoleBlue('您没有项目可以下载！')
          process.exit(1)
        }
        // 缓存用户名和仓库列表
        util.createFile('user.txt', answer.user)
        util.createFile('repos.txt', JSON.stringify(res))
      })
      .catch(err => {
        spinner.stop('')
        // 尝试获取之前的json输出
        if (useOldUser) {
          util.fileIsExist('repos.txt').then(() => {
              util.readFile('repos.txt').then((res) => {
                resolve(JSON.parse(res))
              }).catch(err => {
                util.consoleRed(err.toString())
                process.exit(1)
              })
            })
        }
        if (/connect ECONNREFUSED | connect ECONNRESET/.test(err.toString())) {
          util.consoleRed(`\n Github当前网络连接不上，请过一会重试！\n ${err.toString()}`)
        } else {
          util.consoleRed(err.toString())
          process.exit(1)
        }
      })
    }
  })
}

