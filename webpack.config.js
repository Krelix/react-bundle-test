var webpack = require('webpack');
module.exports = {
    // The different entries for the server
    entry: [
        'webpack/hot/only-dev-server',
        "./js/app.js"
    ],
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
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            // ES6 bundling into build/bundle.js, except nod_modules
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            // Build CSS to css folder
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    // Plugins to use for webpack
    plugins: [
        // Tells webpack to not hot load JS files that have errors
        new webpack.NoErrorsPlugin()
    ]
};