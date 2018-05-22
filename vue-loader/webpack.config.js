const path = require('path');
const webpack = require('webpack');


const HtmlPlugin = require('html-webpack-plugin');
const HtmlInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const env = require.resolve('babel-preset-env');

module.exports = {
    mode: 'development',

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].js'
    },

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [env],
                        plugins: [
                            'syntax-dynamic-import'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'vue-style-loader'
                    },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new webpack.HashedModuleIdsPlugin()
    ],

    resolve: {
        extensions: ['.js', '.vue']
    }
}