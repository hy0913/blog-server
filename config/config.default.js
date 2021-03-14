/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615701116889_3383';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      // 判断是否需要 ignore 的方法，请求上下文 context 作为第一个参数
      ignore: (ctx) => {
        console.log('ctx.request.url',ctx.request.url)
        return true
      },
    },
  }

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
    origin: '*',  // 允许的请求来源（* 表示允许所有的IP的请求 ）
  }

  return {
    ...config,
    ...userConfig,
  };
};
