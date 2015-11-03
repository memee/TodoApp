import gulp from 'gulp';
import path from 'path';
import gulpMinifyCss from 'gulp-minify-css';
import gulpConcat from 'gulp-concat';
import gulpAutoprefixer from 'gulp-autoprefixer';
import gulpCleanCss from 'gulp-cleancss';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpLess from 'gulp-less';
import gulpUtil from 'gulp-util';
import browserSync from 'browser-sync';

import conf from './conf';

const basePath = path.join(conf.paths.app, '**/*.less');
const outputFile = conf.build.cssFile;
const outputDir = conf.build.dir;

function stylesDev() {
  let lessOptions = {
    paths: [
      path.join(__dirname, 'less', 'includes')
    ],
    style: 'expanded'
  };

  return gulp.src(basePath)
        .pipe(gulpSourcemaps.init())
        .pipe(gulpLess(lessOptions))
        .pipe(gulpCleanCss())
        .pipe(gulpSourcemaps.write("."))
        .pipe(gulp.dest(outputDir))
        .pipe(browserSync.stream())
        .on('end', () => {
          gulpUtil.log('styles:dev ok')
        });
}

function stylesProd() {
  let lessOptions = {
    paths: [
      path.join(__dirname, 'less', 'includes')
    ],
    style: 'compressed'
  };

  return gulp.src(basePath)
        .pipe(gulpLess(lessOptions))
        .pipe(gulpCleanCss())
        .pipe(gulpAutoprefixer())
        .pipe(gulpConcat(outputFile))
        .pipe(gulpMinifyCss())
        .pipe(gulp.dest(outputDir))
        .on('end', () => {
          gulpUtil.log('styles:prod ok')
        });
}

export function styles(isProduction=false){
  return isProduction ? stylesProd : stylesDev;
}
