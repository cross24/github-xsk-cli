#!/usr/bin/env node
const commander = require('../lib/commander')
const inquirer = require('../lib/inquirer')
const build = require('../lib/run/build')

// 解析参数
commander()
  // 获取结果
  .then(inquirer)
  // 构建
  .then(build)