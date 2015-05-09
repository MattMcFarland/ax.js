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