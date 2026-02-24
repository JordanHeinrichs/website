const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: [
    './src/index.ts',
    './src/styles.scss',
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: isDevelopment,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require("sass"),
              sourceMap: isDevelopment,
            }
          }
        ]
      },
    ]
  },
  devtool: isDevelopment ? 'inline-source-map' : false,
  resolve: {
    extensions: ['.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      templateParameters: {
        googleApiKey: isDevelopment ? 'AIzaSyCMeqCa06fQf5p1OEDKAYgbXOdfP--gJEY' : 'AIzaSyD_UNh7zQyxuPxWYw_AUOT18ICtHzt6Iuk',
      }
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/*',
          to: 'assets/[name][ext]',
        },
        {
          from: 'CNAME',
          to: './',
        },
      ]
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}
