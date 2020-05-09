const fsTool = require('./fs')
const consoleTool = require('./console')
const request = require('./request')

module.exports = {
  ...fsTool,
  ...consoleTool,
  request
}