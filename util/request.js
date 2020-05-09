const axios = require('axios')

module.exports = function (url, params, type = 'get') {
  var instance = axios.create({
    timeout: 5000
  });

  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  return instance[type](url, params)
}