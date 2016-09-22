const debug = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: './app/modules/operation/main.js',
    output: {
        path: './public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devtool: debug ? 'inline-sourcemap' : null
};