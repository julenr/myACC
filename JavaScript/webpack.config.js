const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const Clean = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, '../build/app'),
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
                loader: 'url?limit=25',
                include: PATHS.app
            },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.html$/,
                loader: 'raw'
            }
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
            port: process.env.PORT
        },
        module: {
            loaders: [
                // Define development specific CSS setup
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new HtmlwebpackPlugin({
                template: './templates/index.html',
                title: APP_TITLE
            }),
            new webpack.DefinePlugin({
                '__DEV__': JSON.stringify(JSON.parse('true'))
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
            // Output using entry name
            filename: '[name].[chunkhash].js',
            chunkFilename: '[chunkhash].js'
        },
        module: {
            loaders: [
                // Extract CSS during build
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: PATHS.app
                }
            ]
        },
        plugins: [
            new Clean([PATHS.build], {
                verbose: false // Don't write logs to console
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
                title: APP_TITLE,
                filename: '../WEB-INF/jsp/index.jsp',
                template: './templates/index.html',
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
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