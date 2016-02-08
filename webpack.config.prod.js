/**
 * Created by @krelix on 05/02/2016.
 * Config file for webpack and production used in the build:prod script
 * Only there as a test, to see how big UglifyJS makes the bundle after optimizations
 */
var webpack = require('webpack');
module.exports = {
    // The different entries for the server
    entry: ['./js/app.js'],
    // OUtput dir of js files
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    // Loaders, meaning which JS files use which loader
    module: {
        loaders: [
            // ES6 dev server, with hot loading of changed JS files. Provide a "query" for babel to know how to translare files
            // (and avoid "Unexpected token"  error)
            {test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/},
            // ES6 bundling into build/bundle.js, except nod_modules
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            // Build CSS to css folder
            {test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"}
        ]
    },
    // Plugins to use for webpack
    // TODO: Add Stylus compilation to a static css file with ExtractTextPlugin
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};