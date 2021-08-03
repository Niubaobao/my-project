/*
 * @Author: your name
 * @Date: 2021-08-02 19:20:48
 * @LastEditTime: 2021-08-02 22:33:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/vue.config.js
 */

const SentryPlugin = require("@sentry/webpack-plugin");

module.exports = {
  publicPath: "/",
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.plugin("sentry").use(SentryPlugin, [
      {
        // 指定忽略文件配置
        ignoreFile: ".gitignore",
        // 指定上传目录
        include: "./dist",
        // 指定发布版本, 可以写定
        release: process.env.RELEASE_VERSION,
        urlPrefix: "~/static/js",
      },
    ]);
  },
};
