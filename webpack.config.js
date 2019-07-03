var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/app/app.tsx',
  output: {
    path: path.join(__dirname, '/dist'),

    filename: 'bundle.min.js',
  },
  resolve: {
    extensions: ['js', 'ts', 'tsx'],
  },
  module: {
    rules: [
      {
        test: [/\.tsx?$/],
        // include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
}
