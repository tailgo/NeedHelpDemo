const webpack = require('webpack');
const config = require('./webpack.config');

let compiler = webpack(config);
compiler.run((err, stats) => {
    if (err) {
        console.log(err);
    }

    console.log(stats.toString({
        stats: 'minimal',
        children: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        modules: false
    }));
});