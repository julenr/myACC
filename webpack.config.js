const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'angular'),
  build: path.join(__dirname, 'build'),
  'build-portal': path.join(__dirname, 'build'),
  develop: path.join(__dirname, 'build-develop'),
  test: path.join(__dirname, 'angular')
};
const APP_TITLE = 'myACC';

process.env.BABEL_ENV = TARGET;

const common = {
  entry: PATHS.app,
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel?cacheDirectory'],
        include: PATHS.app
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['file-loader?name=assets/images/[name].[ext]'],
        include: PATHS.app
      },
      {
        test: /\.(woff|ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      { test: /\.html$/, loader: 'raw', include: PATHS.app },
      { test: /\.jade$/, loader: 'jade', include: PATHS.app }
    ],
    preLoaders: [
      {
        test: /\.js?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: '#eval-source-map',
    devServer: {
      historyApiFallback: true,
      inline: true,
      progress: true,
      watchOptions: {
        poll: 1000
      },

      // display only errors to reduce the amount of output
      stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: '10.100.65.48',
      port: 8085
    },
    module: {
      loaders: [
        // Define development specific CSS setup
        { test: /\.css$/, loaders: ['style', 'css']},
        { test: /\.less$/, loader: 'style!css!less', include: PATHS.app }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new HtmlwebpackPlugin({
        template: './templates/index.webpack.ejs',
        title: APP_TITLE,
        unsupportedBrowser: true,
        mobile: true,
        window: {
          env: {
            apiHost: ''
          }
        }
      }),
      new webpack.DefinePlugin({
        '__DEV__': JSON.stringify(JSON.parse('true')),
        '__BOOTSTRAP__': JSON.stringify(JSON.parse('true'))
      })
    ]
  });
}

if(TARGET === 'build' || TARGET === 'build-portal') {
  module.exports = merge(common, {
    // Define entry points needed for splitting
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less'), include: PATHS.app },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new Clean([PATHS.build], {
        verbose: true,
        dry: false
      }),
      // Output extracted CSS to a file
      new ExtractTextPlugin('styles.[chunkhash].css'),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': JSON.stringify(JSON.parse('false')),
        '__BOOTSTRAP__': JSON.stringify(JSON.parse('false')) // Bootstrap is already added so don't duplicated
      }),
      new HtmlwebpackPlugin({
        inject: false,
        template: (TARGET === 'build') ? './templates/index.portal.ejs': './templates/index.production.ejs',
        filename: '../WEB-INF/jsp/index.jsp',
        jsp1: '<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0" %>',
        jsp2: '<%@ page contentType="text/html" isELIgnored="false" import="javax.portlet.PortletSession" %>',
        jsp3: '<%@ page import="javax.portlet.PortletRequest" %>',
        jsp4: '<portlet:defineObjects/>',
        unsupportedBrowser: true,
        title: APP_TITLE,
        baseHref: '<%= request.getContextPath() %>',
        addBaseHrefToScripts: '<%= request.getContextPath() %>/build/', //This is for JetSpeed that currently does not add BaseHref
        mobile: true,
        googleAnalytics: {
          active: false,
          trackingId: 'UA-XXXX-XX',
          pageViewOnLoad: true
        },
        IBMAnalytics: {
          eluminate: 'http://libs.coremetrics.com/eluminate.js',
          clientID: '99999999',
          dataCollectionMethod: true,
          dataCollectionDomain: 'data.coremetrics.com',
          cookieDomain: 'thesite.com',
          pageID: 'HOME PAGE',
          categoryID: 'HOME',
          searchTerm: 'location:wellington',
          searchResults: '14',
          attributeString: 'Remove if not used',
          extraFields: 'Remove if not used'
        },
        window: {
          env: {
            apiHost: '<%= request.getContextPath() %>'
          }
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: PATHS.app + '/assets/fonts', to: './assets/fonts' },
        { from: PATHS.app + '/assets/images', to: './assets/images' },
        { from: PATHS.app + '/assets/js', to: './assets/js' }
      ])
    ]
  });
}

if(TARGET === 'develop') {
  module.exports = merge(common, {
    entry: {
      app: PATHS.app,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: PATHS.develop,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less'), include: PATHS.app },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new Clean([PATHS.develop], {
        verbose: true,
        dry: false
      }),
      // Output extracted CSS to a file
      new ExtractTextPlugin('styles.[chunkhash].css'),
      // Extract vendor and manifest files
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      // Setting DefinePlugin affects React library size!
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        '__DEV__': JSON.stringify(JSON.parse('false')),
        '__BOOTSTRAP__': JSON.stringify(JSON.parse('true'))
      }),
      new HtmlwebpackPlugin({
        title: APP_TITLE,
        template: './templates/index.develop.ejs',
        unsupportedBrowser: true,
        mobile: true,
        window: {
          env: {
            apiHost: ''
          }
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([
        { from: PATHS.app + '/assets/fonts', to: './assets/fonts' },
        { from: PATHS.app + '/assets/images', to: './assets/images' }
      ])
    ]
  });
}

if(TARGET === 'test' || TARGET === 'tdd') {
  module.exports = merge(common, {
    entry: {}, // karma will set this
    output: {}, // karma will set this
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        'src': PATHS.app
      }
    },
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loaders: ['isparta-instrumenter'],
          include: PATHS.app
        }
      ],
      loaders: [
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less'), include: PATHS.app },
        { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new webpack.DefinePlugin({
        '__DEV__': JSON.stringify(JSON.parse('true')),
        '__BOOTSTRAP__': JSON.stringify(JSON.parse('true'))
      }),
      new ExtractTextPlugin('styles.[chunkhash].css')
    ]
  })
}
