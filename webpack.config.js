const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
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
              sourceMap: true,
            }
          },
          'sass-loader'
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
      template: 'src/index.html'
    }),
    new CopyPlugin([
      {
        from: 'src/assets/*',
        to: 'assets/',
        flatten: true,
      },
    ]),
    new MiniCssExtractPlugin()
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
}
