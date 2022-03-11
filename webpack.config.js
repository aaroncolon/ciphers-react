const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'bundle.js'
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

const mainConfig = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
})

const ghPagesConfig = Object.assign({}, config, {
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  }
})

module.exports = [ mainConfig, ghPagesConfig ]
