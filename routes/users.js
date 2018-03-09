const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const async = require ('async');
const nodemailer = require ('nodemailer');
const crypto = require ('crypto');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    number: req.body.number
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            number: user.number
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
router.get('forgot',function(req,res){
  res.render('forgot');
});
router.post('/forgot',function(req,res){
  async.waterfall([
    function(done){
    crypto.randomBytes(20,function(err,buff){
      var token =buff.toString('hex');
      done(err,token);
    })
  },
  function(token,done){
    User.findOne({email:req.body.email},function(err,user){
      if(!user){
        console.log('error','No such mail id');
        return res.redirect('/forgot');
      }
      user.resetPwdToken=token;
      user.resetPwdExpires=Date.now()+3600000;
      user.save(function(err){
        done(err,token,user);
      });
    });
  },
  function(token,user,done){
    var smtpTransport=nodemailer.createTransport({
      host: 'Gmail',
         port: 25,
        auth: {
          user: 'bethasivareddy@gmail.com',
          pass: '11491a04a8'
        }
    });
    var mailOptions={
      to: user.email,
      from:'bethasivareddy@gmail.com',
      subject:'password reset',
      text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        console.log('mail sent');
        req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
        done(err, 'done');
      });
  }
  ],function(err){
    if(err) return (err);
    res.redirect('/forgot');
  });
});
router.get('reset/:token',function(req,res){
  User.findOne({resetPwdToken:req.params.token,resetPwdExpires:{$gt:Date.now()}},function(err,user){
    if(!user){
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('reset',{token:req.params.token});

  });
});

router.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }
        if(req.body.password === req.body.confirm) {
          user.setPassword(req.body.password, function(err) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function(err) {
              req.logIn(user, function(err) {
                done(err, user);
              });
            });
          })
        } else {
            req.flash("error", "Passwords do not match.");
            return res.redirect('back');
        }
      });
    },
    function(user, done) {
      var smtpTransport = nodemailer.createTransport({
        host: 'Gmail',
         port: 25,
        auth: {
          user: 'bethasivareddy@gmail.com',
          pass: '11491a04a8'
        }
      });
      var mailOptions = {
        to: user.email,
        from: 'bethasivareddy@mail.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.email + ' has just been changed.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/forgot');
  });
});

// USER PROFILE
router.get("/users/:id", function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    if(err) {
      req.flash("error", "Something went wrong.");
      res.redirect("/");
    }
    Campground.find().where('author.id').equals(foundUser._id).exec(function(err, user) {
      if(err) {
        req.flash("error", "Something went wrong.");
        res.redirect("/");
      }
     
    })
  });
});



module.exports = router;
