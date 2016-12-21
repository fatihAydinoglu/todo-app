const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        app: './src/index.js',
        vendor: [ 
            'axios', 
            'lodash', 
            'react', 
            'react-dom', 
            'react-redux', 
            'react-router',  
            'react-router-redux', 
            'redux',
            'redux-thunk'
        ]
    },
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
};