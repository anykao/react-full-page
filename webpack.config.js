const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, '/examples/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    contentBase: '/dist',
    port: 3000
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Full Page'
    })
  ],
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
