/**
 * Ax
 * @author Matt McFarland
 *
 * Ajax that is sharp.
 */
var parse = require ('./parse');
module.exports = function (opts) {
    var methods = {
        success: function () {},
        error: function () {}
    };
    var request = new XMLHttpRequest();
    request.open(opts.method || 'get', opts.url, true);
    request.setRequestHeader('Content-type', opts.content_type || 'application/json');
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                methods.success.apply(methods, parse(request));
            } else {
                methods.error.apply(methods, parse(request));
            }
        }
    };
    request.send(data);
    return {
        success: function (callback) {
            methods.success = callback;
            return methods;
        },
        error: function (callback) {
            methods.error = callback;
            return methods;
        }
    };
};

