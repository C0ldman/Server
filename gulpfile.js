let gulp = require('gulp');

let browserSync = require('browser-sync')
    .create();

let argv = require('yargs').argv;
let fs = require('fs');
let chalk = require('chalk');

console.log(chalk.red.bold('Checking arguments...'));
var projectDir = 'd:\\Program\\gulp_server\\projects';
var serverPort = 80;


if (argv.dir) {
    
    projectDir = argv.dir
    //let bbb = fs.readFileSync(projectDir);
    //console.log(bbb);
    console.log(chalk.red.bold('Directory set to ' + projectDir));
};

if (argv.port) {
    serverPort = argv.port;
    console.log(chalk.red.bold('Port set to ' + serverPort));
};

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: projectDir,
            directory: true
        },
        port: serverPort,

    })
});

gulp.task('default', ['browserSync'], function () {
   
    if(argv.pres) {
        console.log(chalk.red.bold('Presentation'));
            gulp.watch(projectDir + '/index.html', browserSync.reload);
            gulp.watch(projectDir + '/app/*.html', browserSync.reload);
            gulp.watch(projectDir + '/app/scripts/**/*.js', browserSync.reload);
            gulp.watch(projectDir + '/app/controllers/**/*.js', browserSync.reload);
            gulp.watch(projectDir + '/app/data/**/*.json', browserSync.reload);
            gulp.watch(projectDir + '/app/i18n/**/*.json', browserSync.reload);
            gulp.watch(projectDir + '/app/styles/**/*.css', browserSync.reload);
    }else {        
        gulp.watch(projectDir + '/index.html', browserSync.reload);
    };

});