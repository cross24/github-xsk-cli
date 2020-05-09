const fs = require('fs')
const path = require('path')

module.exports = {
  /**
   * 判断文件/文件夹是否存在
   * @param {String} fileName 文件/文件夹名
   */
  fileIsExist (fileName, no=true) {
    return new Promise((resolve, reject) => {
      fs.access(path.resolve(`${process.cwd()}/${fileName}`), (err) => {
        err ? reject(err) : resolve()
      })
    })
  },
  // 创建文件
  createFile (fileName, data) {
    return new Promise((resolve) => {
      fs.writeFile(path.resolve(`${process.cwd()}/${fileName}`), data, (err) => {
        if (err) {
          consoleRed(err.toString())
          process.exit(1)
        }
        resolve()
      })
    })
  },
  // 读取文件
  readFile (fileName) {
    return new Promise((resolve) => {
      fs.readFile(path.resolve(`${process.cwd()}/${fileName}`), (err, data) => {
        if (err) {
          consoleRed(err.toString())
          process.exit(1)
        }
        resolve(data)
      })
    })
  },
}