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
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    test: path.join(__dirname, 'tests')
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
                loaders: ['file-loader?name=assets/images/[name].[ext]']
            },
            {
                test: /\.(woff|ttf|eot|svg|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
            },
            { test: /\.html$/, loader: 'raw', include: PATHS.app },
            { test: /\.jade$/, loaders: ['raw', 'jade'], include: PATHS.app }
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

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: 8085
        },
        module: {
            loaders: [
                // Define development specific CSS setup
                { test: /\.css$/, loaders: ['style', 'css'] },
                { test: /\.less$/, loader: 'style!css!less', include: PATHS.app }
            ]
        },
        plugins: [
            new HtmlwebpackPlugin({
                template: './templates/webpack.html',
                title: APP_TITLE
            }),
            new webpack.DefinePlugin({
                '__DEV__': JSON.stringify(JSON.parse('true'))
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
    });
}

if(TARGET === 'build' || TARGET === 'stats') {
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
                { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less') },
                { test: /\.css$/, loaders: ['style', 'css'] }
            ]
        },
        plugins: [
            new Clean([PATHS.build], {
                verbose: true,
                root: path.resolve(__dirname , '..'),
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
                    '__DEV__': JSON.stringify(JSON.parse('false'))
            }),
            new HtmlwebpackPlugin({
                jsp1: '<%@ taglib prefix="portlet" uri="http://java.sun.com/portlet_2_0" %>',
                jsp2: '<%@ page contentType="text/html" isELIgnored="false" import="javax.portlet.PortletSession" %>',
                jsp3: '<%@ page import="javax.portlet.PortletRequest" %>',
                jsp4: '<portlet:defineObjects/>',
                title: APP_TITLE,
                filename: './WEB-INF/jsp/index.jsp',
                template: './templates/production.html'
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new CopyWebpackPlugin([
                { from: './src/assets/fonts', to: './assets/fonts' },
                { from: './src/assets/images', to: './assets/images' },
                { from: './src/assets/WEB-INF', to: './WEB-INF' }
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
                {
                    test: /\.js?$/,
                    loaders: ['babel?cacheDirectory'],
                    include: [PATHS.test, PATHS.app]
                }
            ],
            plugins: [
                new webpack.DefinePlugin({'__DEV__': JSON.stringify(JSON.parse('true'))})
            ]
        }
    });
}