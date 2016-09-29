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
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    devtool: debug ? 'inline-sourcemap' : null,
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    }
};
