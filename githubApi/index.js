const util = require('../util')
const baseURL = 'https://api.github.com/'
module.exports = {
  // 个人信息
  users (name) {
    return util.request(baseURL + 'users/' + name)
  },
  // 个人公共所有仓库
  repos (name) {
    return util.request(baseURL + 'users/' + name + '/repos')
  }
}