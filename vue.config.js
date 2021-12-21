// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // 选项...
    css: {
        loaderOptions: {
            scss: {
               // additionalData: `@import "~@/style/common/element-variables.scss";`
            },
        }
    }
}