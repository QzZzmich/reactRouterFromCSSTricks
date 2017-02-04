const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './app/app.jsx')
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      TEst: path.resolve(__dirname, './app/components/TEst.jsx'),
      Main: path.resolve(__dirname, './app/components/Main.jsx'),
      Search: path.resolve(__dirname, './app/components/Search.jsx'),
      UserList: path.resolve(__dirname, './app/components/UserList.jsx')
    }
  },

  watch: true,
  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /.\jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [path.resolve(__dirname, './node_modules')]
      }
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ]
};
