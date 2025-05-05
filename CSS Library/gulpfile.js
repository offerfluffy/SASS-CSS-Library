// gulpfile.js
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compile only your main entry-point
function buildStyles() {
  return src("./scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css/"));
}

// watch but then call done()
function watchTask(done) {
  watch("./scss/**/*.scss", buildStyles);
  done();
}

exports.default = series(buildStyles, watchTask);