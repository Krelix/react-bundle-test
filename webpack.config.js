var webpack = require('webpack');
var extractText = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // The different entries for the server
    entry: [
        'webpack/hot/only-dev-server',
        "./js/app.js"
    ],
    // Output dir of js files
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
            // Build CSS from stylus on require in app.js
            {test: /\.styl$/, loader: extractText.extract("style-loader", "css-loader!stylus-loader")}
        ]
    },
    // Plugins to use for webpack
    plugins: [
        // Tells webpack to not hot load JS files that have errors
        new webpack.NoErrorsPlugin(),
        new extractText("style.css"),
        new HtmlWebpackPlugin({
            template: 'html/template.html',
            inject: 'body'
        })/*,
         // Template to check the options of the plugin
         new HtmlWebpackPlugin({
         filename: 'test.html',
         template: 'html/test.html',
         inject: false
         })*/
    ]
};