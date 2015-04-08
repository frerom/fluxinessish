module.exports = {
    context: __dirname,
    entry: './src/entry.js',
    output: {
        path: './dist/js',
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.js/, loaders: ['babel']}
        ]
    }
};