const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './build-babel/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    // 확장자를 배열로 넣어둠
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
