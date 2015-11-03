import utilsModule from './utils/utils.module';

const moduleName = 'todo.common';
const dependencies = [
    utilsModule.name
];

export default angular
    .module(moduleName, dependencies);
