const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: "./src/app",

    output: {
        filename: "public/bundle.js"
    },

    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            sourceMap: true,
            minimize: true
        }),

        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })

    ],

    // This section desribes the transformations we will perform
    module: {

        loaders: [{
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=/assets/img/[name].[ext]'
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // Only working with files that in in a .js or .jsx extension
                test: /\.jsx?$/,
                // Webpack will only process files in our app folder. This avoids processing
                // node modules and server files unnecessarily
                include: /src/,
                loader: "babel-loader",
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ["react", "es2015"]
                }
            }
        ],
    },

    resolve: {
        extensions: [".jsx", ".json", ".js"]
    },
    // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
    // Without this the console says all errors are coming from just coming from bundle.js
    devtool: "source-map"
};