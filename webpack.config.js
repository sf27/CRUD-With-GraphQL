module.exports = {
    entry: './frontend/app/main.jsx',
    output: {
        path: './frontend/',
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