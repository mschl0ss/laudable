var path = require('path');

module.exports = {
    entry: './frontend/laudable.jsx',
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"), // need to change to look in rails
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};