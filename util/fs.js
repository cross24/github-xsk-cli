const fs = require('fs')
const path = require('path')
const { consoleRed } = require('./console')

module.exports = {
  /**
   * 判断文件/文件夹是否存在
   * @param {String} fileName 文件/文件夹名
   * @param {Boolean} no 默认判断不存在
   */
  fileIsExist (fileName, no=true) {
    return new Promise((resolve) => {
      fs.access(path.resolve(`${process.cwd()}/${fileName}`), (err) => {
        if (err) {
          if (no) {
            resolve()
          } else {
            consoleRed('error: 当前文件或者文件夹不存在')
            process.exit(1)
          }
        } else {
          if (no) {
            consoleRed('error: 当前文件或者文件夹已经存在，请重新创建')
            process.exit(1)
          } else {
            resolve()
          }
        }
      })
    })
  }
}