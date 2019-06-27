var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');

passport.serializeUser(function (username, done) {
    done(null, username);
});

passport.deserializeUser(function (name, done) {
    if (name === 'admin') {
        done(null, name);
    }
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        if (username === 'admin' && password === 'admin') {
            return done(null, 'admin');
        } else {
            return done(null, false, {message: 'Incorrect username and password'});
        }
    }
));
