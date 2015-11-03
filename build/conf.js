import path from 'path';

const basePath = path.join(__dirname, '../');

export default {
    /**
     * basePath for the application build system
     */
    basePath: basePath,
    paths: {
        app: path.join(basePath, 'src/app'),
        assets: path.join(basePath, 'src/assets')
    },
    build: {
        dir: path.join(basePath, 'dist'),
        jsFile: 'index.js'
    }
};
