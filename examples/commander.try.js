// commander是一个轻巧的nodejs模块，提供了用户命令行输入和参数解析强大功能
const { Command } = require('commander')
const { version } = require('../package.json')
 
// 基本用法 -> node ./bin/commander.try.js
// const program = new Command()
// program
//   .version(version, '-v, --version')
//   .option('-a, --aaa', '我是一个小可爱')
//   .option('-b, --bbb', '我是一个小可爱2')
//   .option('-c, --ccc <type>', '我是一个小可爱3')
//   .option('-d, --ddd <type>', '我是一个小可爱4', '默认值')

// function help (options) {
//   let text = ''
//   for (let i = 0; i < options.length; i++) {
//     const str = `flag：${options[i].flags}：${options[i].description} \n`
//     text += str
//   }
//   return text
// }

// program.parse(process.argv)
// if (program.aaa) console.log(program.opts())
// if (program.bbb) console.log(program.bbb)
// if (program.ccc) console.log(program.ccc)

// 定义布尔值 加 --no 表示否
// const program1 = new Command()
// program1
//   .option('--no-boo', '布尔值')

// program1.parse(process.argv)
// console.log(program1.opts())

// demo
const program2 = new Command()
program2
  .command('init <name>')
  .alias('i')
  .description('创建文件夹名字')
  .action((name, cmd) => {
    console.log(name, cmd._description)
  })

program2.parse(process.argv)