'use strict';

/**
 * Module dependencies
 */
var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var bowerRoot = `${__dirname}/bower_components`;

var config = {

  cache: true,
  debug: true,

  entry: {
    index: './app/index'
  },

  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'www'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd',
  },

  module: {

    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel?stage=0&optional=runtime'
    }, {
      test   : /\.html$/,
      exclude: /(node_modules|bower_components)/,
      loader : 'html'
    }, {
      test   : /\.json$/,
      exclude: /(node_modules|bower_components)/,
      loader : 'json'
    }, {
      test   : /\.scss$/,
      loader : 'style!css!postcss-loader!sass?outputStyle=expanded'
    }, {
      test   : /\.woff/,
      loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
    }, {
      test   :  /\.(otf|ttf|eot|svg).*$/,
      loader : 'file?prefix=font/'
    },
    {
      test   : /[\/]angular\.js$/,
      loader : 'exports?angular'
    }, {
      test   : /[\/]ionic\.js$/,
      loader : 'exports?ionic'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }],

    // NOTE: this helps build speed on larger libraries that do not use commonjs
    noParse: [
      bowerRoot
    ]
  },

  postcss: [
    require('autoprefixer')({ browsers: ['last 2 version'] }),
  ],

  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules'),
    ],
    moduleDirectories: [
      'bower_components',
      'node_modules',
    ],
    alias: {
      bower: bowerRoot
    }
  },

  plugins: [
    new ngAnnotatePlugin({
      add: true,
      // remove: true
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.DefinePlugin({
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __TEST__: process.env.NODE_ENV === 'test'
    }),
    new HtmlWebpackPlugin({
      pkg      : require('./package.json'),
      template : process.env.NODE_ENV === 'production' ? 'app/prod.html' : 'app/dev.html',
      inject   : 'body'
    }),
    new webpack.optimize.DedupePlugin()
  ],
  devServer: {
    contentBase: 'www/',
    noInfo: false, //  --no-info option
    hot: true,
    inline: true
  }

};

if (process.env.NODE_ENV === 'production') {
  config.entry.vendor = ['moment', 'jquery', 'lodash', 'firebase', 'angular', 'angular-animate', 'angular-sanitize', 'angular-aria', 'angular-material', 'angular-ui-router', 'ionic/js/ionic', 'ionic/js/ionic-angular', 'angularfire', 'angular-moment'];
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
} else {
  config.externals = [{
    'angular': {
      root: 'angular',
      commonjs: 'angular',
      commonjs2: 'angular',
      amd: 'angular'
    }
  }, {
    'lodash': {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash'
    }
  }, {
    'jquery': {
      root: '$',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery'
    }
  }, {
    moment: 'moment'
  }, {
    firebase: 'firebase'
  }, {
    ionic: 'ionic'
  }];
}

module.exports = config;
