const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname),
  entry: [
    './src/main.js'
  ],
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'buble-loader',
          query: { objectAssign: 'Object.assign' }
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [{
          loader: "svelte-hot-loader"
        }, {
          loader: 'svelte-loader',
          query: {
            dev: false,
            emitCss: false,
            store: true
          }
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
      }
      /*{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { sourceMap: true } }]
        })
      }*/
    ]
  },
  plugins: [
    //new ExtractTextPlugin('bundle.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: './public',
    port: 9000,
    hotOnly: true
  },
  devtool: 'inline-source-map'
};