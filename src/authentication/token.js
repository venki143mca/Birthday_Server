const jwt = require('jwt-simple');
const moment = require('moment');

function isAuthenticated(req, res, next) {
    console.log("Middleware::Authentication");
    const token = req.headers['x-access-token'];
    const decoded = jwt.decode(token, "YOUR_SECRET_STRING");
    console.log(decoded);
    const d = Date.now();
    if (decoded.exp <= d) {
        res.send('Access token has expired.', 403);
    }
    next();
}

function generateToken(user) {
    const expires = moment().add('minutes', 5).valueOf();
    console.log(user);

    var token = jwt.encode({
        iss: user.userName,
        exp: expires
    }, "YOUR_SECRET_STRING");

    return {
        token: token,
        expires: expires
    }
}
module.exports = {
    isAuthenticated,
    generateToken
}