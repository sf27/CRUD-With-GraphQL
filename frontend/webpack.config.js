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
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2', {"plugins": ["./plugins/babelRelayPlugin"]}]
                }
            }
        ]
    },
    devtool: debug ? 'inline-sourcemap' : null,
};