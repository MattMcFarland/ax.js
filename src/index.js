var
    args    = Array.prototype.slice.call(arguments),
    xhr     = require ('./xhr'),
    getOpts = require ('./getOptions');

module.exports = function () { return xhr(getOpts(args)) };