const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

// compile only your main entry-point
function buildStyles() {
  return src("./scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["./html/*.html"] }))
    .pipe(dest("./css/"));
}

// watch but then call done()
function watchTask(done) {
  watch(["./scss/**/*.scss", "./html/*.html"], buildStyles);
  done();
}

exports.default = series(buildStyles, watchTask);
