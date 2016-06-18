const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let plugins = [];
let basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    inject: 'body'
  })
];

let devPlugins = [];

let prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true
    },
    compress: {
      screw_ie8: true
    },
    comments: false
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins = basePlugins.concat(prodPlugins);
} else { // dev or rest
  plugins = basePlugins.concat(devPlugins);
}

module.exports = {
  context: __dirname,
  devServer: {
    historyApiFallback: true
  },
  entry: {
    app: './src/index.js',
    vendor: [
      'es6-shim',
      'es6-promise',
      'react',
      'react-dom',
      'onsenui'
    ]
  },

  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.html$/, loaders: ['raw'] },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.(png|jpg|svg)$/, loader: 'file?name=img/[ext]/[name].[ext]' },
      { test: /\.css$/, loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'postcss'] },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/], loader: 'file?name=fonts/[name].[ext]' }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  postcss: function (webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('postcss-custom-properties')(),
      require('postcss-nested')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
};
