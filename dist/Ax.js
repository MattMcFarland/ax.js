/**
 * axjs - A microscopic, RESTful, AJAX browser library; just under 2kb.
 * Copyright (c) Matt McFarland - All Rights Reserved
 * @version v0.3.1
 * @link https://github.com/MattMcFarland/ax.js
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Ax = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var
    args        = Array.prototype.slice.call(arguments),
    xhr         = require ('./xhr'),
    getOpts     = require ('./getOptions');



module.exports = function() {
    return xhr(getOpts(args))();
}

},{"./getOptions":2,"./xhr":4}],2:[function(require,module,exports){
module.exports = function () {
    if (arguments) {
        var args = Array.prototype.slice.call(arguments)[0];
        if (typeof args[0] === 'object') {
            var obj = args[0];
            return {
                method: obj.method || 'GET',
                url: obj.url || null,
                data: obj.data || null,
                type: obj.type || 'application/json',
                done: (typeof args[args.length-1] === 'function') ? args[args.length-1] : obj.done
            }
        } else {
            return {
                method: args[0] || null,
                url: args[1] || args[0],
                data: (typeof args[2] === 'object') ? args[2] : (typeof args[1] === 'object') ? args[1] : null,
                type: (typeof args[3] === 'string') ? args[3] : (typeof args[2] === 'string') ? args[2] : null,
                done: (typeof args[args.length-1] === 'function') ? args[args.length-1] : null
            }
        }
    }
};
},{}],3:[function(require,module,exports){
module.exports = function (req) {
    var result;
    var err = false;
    try {
        result = JSON.parse(req.responseText);
    } catch (e) {
        result = String(req.responseText);
        err = e;
    }
    return [result, req, err];
};
},{}],4:[function(require,module,exports){
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


},{"./parse":3}]},{},[1])(1)
});