'use strict';

var passport = require('passport'),
  FacebookTokenStrategy = require('passport-facebook-token'),
  User = require('mongoose').model('User');

module.exports = function () {

  passport.use(new FacebookTokenStrategy({
      clientID: '384021648722536',
      clientSecret: 'cf191b4cc15f857c45845a08407506ee'
    },
    function (accessToken, refreshToken, profile, done) {
      User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
        return done(err, user);
      });
    }));

};