var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge');
var del = require('del');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var tslint = require('gulp-tslint');
var gls = require('gulp-live-server');

var tsProject = ts.createProject('tsconfig.json');
var server = gls.static('dist')

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('tslint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});


gulp.task('scripts', function() {
	return gulp.src('app/**/*.ts')
		.pipe(ts(tsProject))
        .pipe(gulp.dest('dist/app'))
		.pipe(concat('concat.js'))
		.pipe(gulp.dest('dist'))
        .pipe(rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js'

    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', 'styles.css', '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['tslint', 'copy:libs', 'copy:assets', 'scripts'], function() {
    server.start();
    gulp.watch('app/**/*', ['tslint', 'copy:assets', 'scripts'],function(file)  {
        server.notify.apply(server,[file]);
    });
});

