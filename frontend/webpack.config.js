module.exports = {
    entry: './app/main.jsx',
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
    }
};