const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      css: {
        importLoaders: 1,
      },
      postcss: {
        config: {
          path: './postcss.config.js',
        },
      },
    },
  },
};