require('dotenv/config');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const  { Strategy, ExtractJwt } = passportJwt;
const UserModel = require('../models/user.model');


const params = {
    secretOrKey: process.env.AUTH_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(params, (payload, done) => {
    UserModel.findOne({ where: { id: payload.id }})
        .then(user => done(null, user ? {...payload } : false))
        .catch(erro => done(erro, false));
});

passport.use(strategy);

module.exports = {
    params,
    strategy,
    authenticate: () => passport.authenticate('jwt', {session: false})
}