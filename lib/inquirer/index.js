const inquirer = require('inquirer')
const util = require('../../util')
const choices = require('./choices')

module.exports = function () {
  return new Promise((resolve) => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'url',
        message: '选择要拉取的github项目',
        choices
      }
    ]).then((answers) => {
      const projectName = choices.filter(item => item.value === answers.url)[0].name
      util.consoleBlue(`您即将要下载的项目是：${projectName}`)
      resolve(answers)
    }).catch(error => {
      if(error.isTtyError) {
        util.consoleRed('无法在当前环境中呈现提示')
      } else {
        util.consoleRed(error.toString())
      }
      process.exit(1)
    })
  })
}