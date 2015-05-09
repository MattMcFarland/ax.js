/**
 * Ax
 * @author Matt McFarland
 *
 * Ajax that is sharp.
 */
var parse = require ('./parse');
module.exports = function (opts) {
    if (!opts.done) { console.error('done callback is undefined')}
    if (!opts.method) { console.error('Ax.js method is undefined')}
    if (typeof opts.done !== 'function') { console.error('done callback is not a function')}
    var res,
        req = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    req.open(opts.method, opts.url, true);
    req.setRequestHeader('Content-type', opts.content_type || 'application/json');

    req.onreadystatechange = function () {
        var state = req.readyState, res = function () {};
        if (state === 4) { opts.done.apply(res, parse(req)); }
    };

    if (opts.data) {
        if (opts.content_type !== 'application/json') { req.send(encodeURIComponent(JSON.stringify(opts.data))); }
        else { req.send(opts.data); }
    }
    else { req.send(); }

    return res;
};

