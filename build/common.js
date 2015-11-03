import gulp from 'gulp';
import util from 'gulp-util';
import del from 'del';

import conf from './conf';

export function clean(isProduction=false) {
  return () => {
    let buildDir = conf.build.dir;
    return del([buildDir])
  };
};

export function distFolder(isProduction=false){
  return () => {
    let buildDir = conf.build.dir;
    return gulp.src('')
      .pipe(gulp.dest(buildDir))
      .on('end', () => {
        util.log(buildDir + ' has been created');
      });
  }
};
