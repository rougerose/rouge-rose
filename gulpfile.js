const {src, dest, series, watch} = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

sass.compiler = require('node-sass');

const options = {
  scss: {
    src: ['ressources/scss/index.scss'],
    dest: 'css/',
    opts: {
      includePaths: './node_modules/',
      errLogToConsole: true
    },
    watch: 'ressources/scss/**/*'
  },
  css: {
    name: 'styles'
  }
}

// scss + minify
function scssTask(cb) {
  var plugins = [autoprefixer()];
  src(options.scss.src)
    .pipe(sass(options.scss.opts)).on('error', sass.logError)
    .pipe(postcss(plugins))
    // .pipe(rename({basename: options.css.name, suffix: '.min'}))
    .pipe(rename({basename: options.css.name}))
    .pipe(dest(options.scss.dest));
  cb();
}

// clean
function cleanTask(cb) {
  del([options.scss.dest + '*.css']);
  cb();
}

// watch
function watchFiles(cb) {
  watch(options.scss.watch, series(cleanTask, scssTask));
  cb();
}

// if (process.env.NODE_ENV === 'production') {
//   exports.build = series(cleanTask, scssTask)
// } else {
//   exports.build = series(cleanTask, scssTask);
// }

exports.build = series(cleanTask, scssTask);

exports.watch = series(watchFiles, cleanTask, scssTask);

exports.default = exports.build;
