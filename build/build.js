import gulp from 'gulp';
import del from 'del';

import './scripts'
import conf from './conf';

gulp.task('clean', ()=> {
    return del([conf.build.dir])
});

gulp.task('create-dist-folder', () => {
    return gulp.src('').pipe(gulp.dest(conf.build.dir));
});

gulp.task('build', ['create-dist-folder', 'scripts']);
