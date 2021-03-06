const webpack = require('webpack');

require('dotenv').config();

module.exports = {
    entry: {
        'store': './src/store.js',
        'payments': './src/payments.js',
        'generate': './src/generate.js'
    }, 
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/javascripts'
    },
    plugins: [
        new webpack.DefinePlugin({
            STRIPE_PUBLISHABLE_KEY: JSON.stringify(process.env.STRIPE_PUBLISHABLE_KEY),
            STRIPE_WEBHOOK_SECRET: JSON.stringify(process.env.STRIPE_WEBHOOK_SECRET),
        }),
    ]
}