"use strict";
module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    filename: "build/bundle.js",
      publicPath: '/'
  },
    devServer: {
        historyApiFallback: true,
    },
    devtool: "source-map",
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
  }
};
