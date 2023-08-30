const path = require('path');
const productionMode = process.env.NODE_ENV === 'production';

const config = {
  entry: ['./src/index.js', './src/register.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: './dist',
  },
};

if (productionMode) {
  config.mode = 'production';
  config.devtool = 'inline-source-map';
}

module.exports = config;
