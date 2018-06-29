const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

function resolve (dir) {
  var resolvePath = path.join(__dirname, '..', dir, 'client', 'components')
  console.log('----------- > ' + resolvePath)
  return resolvePath
}

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src', 'client'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        use: { 
          loader: 'vue-loader'
        }
      }
    ]
  },
  plugins: [
    
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new VueLoaderPlugin()
  ],
};
