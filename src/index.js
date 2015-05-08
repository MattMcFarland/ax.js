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