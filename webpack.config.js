const path = require('path');  // CommonJS syntax

module.exports = {
  mode: 'development',  // or 'production'
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Resolves the output path correctly
  },
  // other configurations
};
