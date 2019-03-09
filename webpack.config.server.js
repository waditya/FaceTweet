const path = require('path')
const webpack = require('webpack')
var nodeExternals = require('webpack-node-externals');

const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name: "server",
  entry: [ path.join(CURRENT_WORKING_DIR , './server/server.js') ],
  target: "node",
  output: {
    path: path.join(CURRENT_WORKING_DIR , '/dist/'),
    filename: "server.generated.js",
    publicPath: '/dist/',
    libraryTarget: "commonjs2"
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        exclude: /node_modules/,
        use: [ 'babel-loader',
        'file-loader' ]
      }
    ]
  }
}

module.exports = config
