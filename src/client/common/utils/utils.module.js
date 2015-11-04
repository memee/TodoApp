const moduleName = 'todoManager.common.utils';
const dependencies = [];

const WINDOW = new WeakMap();

class Utils {
    constructor($window) {
        WINDOW.set(this, $window);
    }

    urlParams(url) {
        url = url || WINDOW.get(this).location.href;
        if (!url || (url.indexOf("?") < 0 && url.indexOf("&") < 0)) {
            return {};
        }
        if (url.indexOf('#') > -1) {
            url = url.substr(0, url.indexOf('#'));
        }
        var params = url.substr(url.indexOf("?") + 1);
        return this.urlDecode(params);
    }

    urlDecode(string, overwrite) {
        var obj = {},
            pairs = string.split('&'),
            name,
            value;
        angular.forEach(pairs, function (pair) {
            pair = pair.split('=');
            name = decodeURIComponent(pair[0]);
            value = decodeURIComponent(pair[1]);
            obj[name] = overwrite || !obj[name] ? value : [].concat(obj[name]).concat(value);
        });
        return obj;
    }

    dumpObject(obj) {
        return _(obj)
            .chain()
            .thru(function (val) {
                return JSON.stringify(val, null, 4);
            })
            .toString()
            .trim();
    }

    isDebug(url) {
        url = url || WINDOW.get(this).location.href;
        return 'debug' in this.urlParams(url);
    }

    static factory($window) {
        return new Utils($window);
    }
}

export default angular
    .module(moduleName, dependencies)
    .service('todoUtils', ['$window', Utils.factory])
