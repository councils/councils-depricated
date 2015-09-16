var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var del = require('del');
var config = require('./webpack.config');
var git = require('gulp-git');
var bump = require('gulp-bump');
var filter = require('gulp-filter');
var tagVersion = require('gulp-tag-version');
var jshint = require('gulp-jshint');
var portscanner = require('portscanner');

var map = require('map-stream');
var conventionalChangelog = require('conventional-changelog');

const $ = gulpLoadPlugins();

gulp.task('clean', cb => del(['www'], cb) );

gulp.task('webpack', cb => {
  webpack(config, (err, stats) => {
    if(err) throw new $.util.PluginError('webpack', err);
    $.util.log("[webpack]", stats.toString({
      colors: true
    }));
    cb();
  });
});

gulp.task('start', ['lint:watch'], function (cb) {
  var compiler = webpack(config);
  portscanner.findAPortNotInUse(8080, 9000, '0.0.0.0', function(error, port) {
    new WebpackDevServer(compiler, {
      contentBase: 'www/',
      lazy: false,
      noInfo: true,
      quiet: true,
      hot: true,
      inline: true,
      historyApiFallback: true,
      stats: { colors: true }
    })
    .listen(port, "localhost", function(err) {
      if(err) {
        throw new $.util.PluginError("webpack-dev-server", err);
      }

      // Server listening
      $.util.log('[webpack-dev-server]', 'http://localhost:'+port+'/webpack-dev-server/index.html');

      // keep the server alive or continue?
      // cb();
    });
  });
});

gulp.task('jshint', () => {
  gulp.src('app/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint', ['jshint']);
gulp.task('lint:watch', () => {
  gulp.watch(['app/**/*.js'], ['lint']);
});

function changelog () {
  return map((file, cb) => {
    conventionalChangelog({
      repository: 'https://git.empdev.domo.com/Development/DomoBits',
      preset: 'angular'
    }, (err, log) => {
      if (err) {
        return cb(err, file);
      } else {
        fs.writeFile('./CHANGELOG.md', log, (err) => {
          cb(err, file);
        });
      }
    });
  });
}

function commitChangelog () {
  return map((file, cb) => {
    return gulp.src(['./package.json', './bower.json', './CHANGELOG.md'])
      // commit the changed version number
      .pipe(git.commit('AUTOMATED: bumps package version and CHANGELOG.md'))
      .on('end', () => {
        cb(null, file);
      });
  });
}

function inc (importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json', './bower.json'])
    // bump the version number in those files
    .pipe(bump({type: importance}))
    // save it back to filesystem
    .pipe(gulp.dest('./'))
    // read only one file to get the version number
    .pipe(filter('package.json'))
    // generate the changelog
    .pipe(changelog())
    // commit the changelog
    .pipe(commitChangelog())
    // tag it in the repository
    .pipe(tagVersion());
}

gulp.task('release:patch', ['lint'], () => inc('patch'));
gulp.task('release:minor', ['lint'], () => inc('minor'));
gulp.task('release:major', ['lint'], () => inc('major'));

gulp.task('default', ['clean', 'webpack']);
