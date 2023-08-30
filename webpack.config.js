const path = require('path');
module.exports = {
  entry: ['./src/index.js', './src/register.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: './dist',
  },
};
