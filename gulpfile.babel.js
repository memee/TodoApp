import gulp from 'gulp';

import * as common from './build/common';
import * as scripts from './build/scripts';
import * as index from './build/index';
import * as styles from './build/styles';
import * as assets from './build/assets';

const isProduction = (function(){
  function getArg(key) {
    var index = process.argv.indexOf(key);
    var next = process.argv[index + 1];
    return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
  }
  return getArg('--mode') === 'production'
}());

// default task
gulp.task('default', ['clean', 'build']);

// common tasks
gulp.task('clean', common.clean(isProduction));
gulp.task('create-dist-folder', common.distFolder(isProduction))

// build tasks
gulp.task('scripts', scripts.scripts(isProduction));
gulp.task('styles', styles.styles(isProduction));
gulp.task('assets', assets.assets(isProduction));
gulp.task('index', ['styles','scripts'], index.index(isProduction));
gulp.task('build', ['create-dist-folder', 'index']);

// watch tasks

// deploy tasks
