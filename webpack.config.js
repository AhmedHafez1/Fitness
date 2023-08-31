const path = require('path');
const productionMode = process.env.NODE_ENV === 'production';

const config = {
  entry: { index: './src/index', reg: './src/register' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{ test: /\.ts?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  resolve: { extensions: ['.ts', '.js'] },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: './dist',
  },
  stats: {
    errorDetails: true,
  },
};

if (productionMode) {
  config.mode = 'production';
  config.devtool = 'inline-source-map';
}

module.exports = config;
