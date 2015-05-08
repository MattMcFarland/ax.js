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