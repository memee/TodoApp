import commonModule from './common/common.module'

const moduleName = 'todo';
const dependencies = [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    commonModule.name
];

export default angular.module(moduleName, dependencies);
