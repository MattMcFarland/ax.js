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