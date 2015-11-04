import utilsModule from './utils/utils.module';

const moduleName = 'todoManager.common';
const dependencies = [
    utilsModule.name
];

export default angular
    .module(moduleName, dependencies);
