const browserSync = require('browser-sync').create();

const config = {
    server: {
        baseDir: '../',
        directory: true
    },
    port: 80
}

browserSync.init(config);