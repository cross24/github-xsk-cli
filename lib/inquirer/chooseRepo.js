const inquirer = require('inquirer')
const util = require('../../util')

module.exports = function (repos) {
  // 处理成prompt需要的格式
  const choices = repos.map(item => ({
    name: item.name + ':' + item.description,
    value: item.clone_url
  }))

  return new Promise((resolve) => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'url',
        message: '请选择github项目',
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