"use strict";
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const MODE = process.env.MODE || 'development';

module.exports = {
    entry: ["babel-polyfill", "./index.js"],
    output: {
        filename: "build/bundle.js",
        // publicPath: '/'
    },
    devServer: {
        // historyApiFallback: true,
    },
    devtool: MODE === "development" ? "source-map" : false,
    node: {
        fs: "empty"
    },
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: []
};

if (MODE === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                // compress: {
                //     // don't show unreachable variables etc
                //     warnings: false,
                //     drop_console: true,
                //     unsafe: true
                // }
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        })
    );
}