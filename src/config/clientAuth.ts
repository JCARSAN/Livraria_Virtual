const { expressjwt: jwtAuth} = require('express-jwt');
const clientAuth = jwtAuth({secret:process.env.JWT_SECRET,algorithms:['HS256']});

module.exports = clientAuth;