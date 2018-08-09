const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
      app: path.join(__dirname, '/src/js/index.js'),
      //style: path.join(__dirname, 'src/sass/style.scss')
    },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test:  /\.scss$/,
      use: [
        // "style-loader",
        MiniCssExtractPlugin.loader,
        "css-loader", 
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
	  new HtmlWebpackPlugin({
	    title: 'Custom template',
	    template: './src/index.html'
	  })
  ]

}
