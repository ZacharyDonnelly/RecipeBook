/* eslint-disable no-undef */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const presetConfig = require('./build-utils/loadPresets');
const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    {
      entry: './src/index.tsx',
      devServer: {
        historyApiFallback: true,
      },
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif|jfif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: '[path][name].[ext]',
                  limit: 8192,
                  fallback: require.resolve('file-loader'),
                  quality: 85,
                },
              },
            ],
          },
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-react'],
            },
          },
        ],
      },
      resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.json', '.jsx'],
      },
      output: {
        publicPath: '/',
        filename: '[name].hash.js',
        chunkFilename: '[name].lazy-chunk.js',
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          title: 'Recipe Loader',
          template: './public/index.html',
          filename: 'index.html',
        }),
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new CheckerPlugin(),
        new webpack.WatchIgnorePlugin([/css?\.d\.ts$/]),
      ],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
