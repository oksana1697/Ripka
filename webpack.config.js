'use strict';
module.exports = {
    entry: ["./app.js"],
    output: {
        filename: "build/bundle.js"
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