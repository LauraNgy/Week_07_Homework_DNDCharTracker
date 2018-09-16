var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

const config = {
  entry: `${ __dirname }/src/app.js`,
  output: {
    filename: 'library.js',
    path: `${ __dirname }/public/js`
  },
  plugins: [
        new UnminifiedWebpackPlugin({
            postfix: 'unmin',//specify "nomin" postfix,
        })
    ],
  mode: 'development'
};

module.exports = config;
