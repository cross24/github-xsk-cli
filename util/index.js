const fsTool = require('./fs')
const consoleTool = require('./console')

module.exports = {
  ...fsTool,
  ...consoleTool
}