var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')

// https://webpack.js.org/configuration/
module.exports = function(env = {}, argv) {
  console.log('env:', env)
  const isProduction = argv.mode === 'production'
  return {
    entry: './src/app/app.tsx',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'ts-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
    // https://webpack.js.org/configuration/stats/
    // stats: 'errors-warnings',
    stats: {
      children: false,
      modules: false,
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      overlay: true,
      hot: true,
    },
  }
}
