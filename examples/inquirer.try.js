// 一个用户与命令行交互的工具
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: '第一个问题：选一个，快！！！',
    choices: [
      {
        name: '憨憨',
        value: 'hanhan'
      },
      {
        name: '憨憨2',
        value: 'hanhan2'
      },
      {
        name: '憨憨3',
        value: 'hanhan3'
      }
    ]
  },
  {
    type: 'list',
    name: 'type1',
    message: '第二个问题：选一个，快！！！',
    choices: [
      {
        name: '傻傻',
        value: 'shasha1'
      },
      {
        name: '傻傻2',
        value: 'shasha2'
      },
      {
        name: '傻傻3',
        value: 'shasha3'
      }
    ]
  }
]).then(answers => {
  console.log(answers)
})