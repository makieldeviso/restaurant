module.exports = {
    entry: {
        main: "./src/index.js",
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource'
            },

        ]
    }
}   