import gulp from 'gulp';

import conf from './conf';

function assetsDev(){

}

function assetsProd() {

}

export function assets(isProduction=false){
  return isProduction ? assetsProd : assetsDev;
}
