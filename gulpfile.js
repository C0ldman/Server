let gulp = require('gulp');
var plugins = require('gulp-load-plugins');
let browserSync = require('browser-sync')
    .create();
var $ = plugins({
    pattern: ['*']
});


console.log($.chalk.red.bold('Checking arguments...'));
var projectDir = '../';
var serverPort = 80;


if ($.yargs.argv.dir) {
    projectDir = $.yargs.argv.dir;
};
console.log($.chalk.red.bold('Directory set to ' + projectDir));
if ($.yargs.argv.port) {
    if ($.yargs.argv.port < 80) {
        console.log($.chalk.red.bold('Port must be 80 or higher. Port set to default.'));
    } else {
        serverPort = $.yargs.argv.port;
    }
};
console.log($.chalk.red.bold('Port set to ' + serverPort));
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: projectDir,
            directory: true,
	    watch: false
        },
        port: serverPort,

    })
});

gulp.task('default',gulp.series('browserSync', function() {
      gulp.watch();

}));