var path = require('path');

module.exports = {
  target: 'node',
  entry: [
    path.join(__dirname, 'index.js')
  ],
  output: {
    path: __dirname,
    filename: 'z_index.js',
    libraryTarget: 'commonjs2',
  },
  optimization: {
    minimize: false,
  },
}