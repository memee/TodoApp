import commonModule from './common/common.module'

const moduleName = 'todoManager';
const dependencies = [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    commonModule.name
];

export default angular.module(moduleName, dependencies);
