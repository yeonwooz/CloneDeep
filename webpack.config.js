const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './build-babel/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
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
