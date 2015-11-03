import path from 'path';

import gulp from 'gulp';
import webpackStream from 'webpack-stream';

import conf from './conf';

gulp.task('scripts:dev', ()  => {
    let webpackOptions = {
            devtool: 'inline-source-map',
            module: {
                // ES6 modules have to be preprocessed with Babel loader to work in browsers.
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loaders: ['babel-loader']
                    }
                ]
            },
            output: {
                filename: conf.build.jsFile
            },
            quiet: false
        },
        rootFile = path.join(conf.paths.app, 'index.module.js');

    return gulp.src(rootFile)
        .pipe(webpackStream(webpackOptions))
        .pipe(gulp.dest(conf.build.dir));
});

gulp.task('scripts:prod', () => {

});

gulp.task('scripts', ['scripts:dev']);
