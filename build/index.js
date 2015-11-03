import browserSync from 'browser-sync';
import gulp from 'gulp';
import gulpInject from 'gulp-inject';
import gulpIf from 'gulp-if';
import gulpMinifyHtml from 'gulp-minify-html';
import path from 'path';
import wiredep from 'wiredep'

import './scripts';
import conf from './conf';

export function index(isProduction=false){
  // TODO(feature) figure out different location
  let indexPath = isProduction ? conf.build.dir : conf.build.dir;
  let injectStyles = gulp.src(path.join(indexPath, '**/*.css'), {read: false});
  let injectScripts = gulp.src(path.join(indexPath, '**/*.js'), {read: false});
  let injectOptions = {
    ignorePath  : [
      path.relative(conf.basePath, indexPath)
    ],
    addRootSlash: false,
    quiet       : false,
    ignorePath  : 'dist'
  };
  let wiredepOptions = {
    ignorePath: path.relative(conf.paths.app, conf.basePath) + '/',
  };

  return () => {
    return gulp.src(path.join(conf.paths.app, 'index.html'))
      .pipe(gulpInject(injectStyles, injectOptions))
      .pipe(gulpInject(injectScripts, injectOptions))
      .pipe(wiredep.stream(wiredepOptions))
      .pipe(gulpIf(
        isProduction,
        gulpMinifyHtml()
      ))
      .pipe(gulp.dest(indexPath))
      .pipe(browserSync.stream());
  }
}
