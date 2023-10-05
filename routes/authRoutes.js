const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

module.exports = (app) => {

  //Logout User
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/somewhere');
  });
  
  app.get('/current_user', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.post('/api/users/', (req, res) => {
 //   const userId = req.params.userId;
 const memberstackId = req.body.memberstackId;

 if (!memberstackId) {
  return res.status(400).json({ error: 'memberStackID is required' });
}

    User.findOne({memberstackId: memberstackId})
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });

  app.get('/', (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  //Login from POST
app.post('/login', (req, res, next) => {
      console.log(req.body);
      passport.authenticate('local', {
        successRedirect: '/all-customers',
        failureRedirect: '/error',
        failureFlash: true
      })(req, res, next);
    });
}