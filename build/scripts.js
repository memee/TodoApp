import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import path from 'path';
import webpackStream from 'webpack-stream';

import conf from './conf';

function scriptsProd() {

}

function scriptsDev() {
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
      .pipe(gulp.dest(conf.build.dir))
      .on('end', () => {
        gulpUtil.log('scripts:dev ok');
      })
}

export function scripts(isProduction=false){
  return isProduction ? scriptsProd : scriptsDev
}
