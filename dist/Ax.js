(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Ax = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (options) {

    var
        ax          = {},
        xhr         = require ('./xhr'),
        getOpts     = require ('./getOptions');

    ax.protoype = function () {
        return xhr(getOpts(options));
    };

    return ax;


};
},{"./getOptions":2,"./xhr":4}],2:[function(require,module,exports){
module.exports = function(_args) {
    var _def = {
        method: 'GET', type: 'application/json'
    };
    var args = new Array.slice(_args);
    if (typeof args[0] === 'object') {
        var obj = args[0];
        return {
            method: obj.method  || _def.method,
            url:    obj.url     || null,
            data:   obj.data    || null,
            type:   obj.type    || _def.type
        }
    } else {
        return {
            method: args[0]     || _def.method,
            url:    args[1]     || null,
            data:   args[2]     || null,
            type:   args[3]     || _def.type
        }
    }
};
},{}],3:[function(require,module,exports){
module.exports = function (req) {
    var result;
    try {
        result = JSON.parse(req.responseText);
    } catch (e) {
        result = req.responseText;
    }
    return [result, req];
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


},{"./parse":3}]},{},[1])(1)
});