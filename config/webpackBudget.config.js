const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const defaultConfig = require('./webpack.config.js');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports = merge(defaultConfig('production'), {
  plugins: [
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true,
    //   statsOptions: {
    //     reasons: true,
    //     chunks: true
    //   }
    // }),
    new BundleStatsWebpackPlugin({
      outDir: './../stats/',
      json: true
  }),
  ]
});