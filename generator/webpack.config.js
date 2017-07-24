'use strict';


const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractTextWebpackPlugin = new ExtractTextWebpackPlugin({
  filename: 'main.css'
});

const isProduction = process.env.NODE_ENV === 'production';
const targetPathRel = 'dist';
const targetPathAbs = Path.resolve(__dirname, targetPathRel);


module.exports = {
  context: Path.resolve(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: targetPathAbs
  },
  
  resolve: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // Keep in sync with .flowconfig and .eslintrc
    modules: ['node_modules', 'src'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
              },
      {
        test: /\.scss$/,
        use: extractTextWebpackPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractTextWebpackPlugin,
    new Webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: './404.html',
      filename: '404.html',
      chunks: []
    })
  ]
};


if (!isProduction) { // Development environment

  module.exports.entry = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ].concat(module.exports.entry);

  module.exports.devtool = 'inline-source-map';

  module.exports.devServer = {
    hot: true,
    contentBase: targetPathAbs,
    publicPath: '/',
    historyApiFallback: true
  };

  module.exports.plugins.unshift(new Webpack.HotModuleReplacementPlugin());

}
else { // Production environment

  module.exports.plugins.push(new CleanWebpackPlugin([targetPathRel]));

}
