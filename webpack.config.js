'use strict';
module.exports = {
    entry: ['babel-polyfill',"./index.js"],
    output: {
        filename: "build/bundle.js"
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};