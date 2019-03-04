const webpack = require("webpack");

module.exports = {
  baseUrl: "/",
  devServer: {
    port: 999,
    https: false
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        // Popper: ["popper.js", "default"],
        _: "lodash",
        // Tether: "tether",
         utils: `${__dirname}/src/utils.js`,
        // apiUtils: `${__dirname}/src/api/api.utils.js`
      })
    ]
  }
  //   chainWebpack: (config) => {
  //       config
  //         .plugin('provide')
  //         .use(require('webpack').ProvidePlugin), {
  //             $: 'jquery',
  //             jQuery: 'jquery'
  //     };
  //   }
};
