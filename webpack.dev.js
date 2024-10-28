const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "development",  
    devtool: "inline-source-map", 
    devServer: {
        static: "./src"
    }, 
    
    optimization: {
        runtimeChunk: 'single',
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new HtmlWebpackPlugin ({template: "./src/index.html"})
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
});
