const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const TriggeredMessage = mongoose.model('triggeredmessages');

module.exports = (app) => {
      app.get('/triggered-messages/', async (req, res) => {
        const rcs = await TriggeredMessage.find({user: '1680735892067'})
        .catch(err => console.log(err));;
        const currentTriggeredMessages = Array.from(rcs);
        res.json(currentTriggeredMessages);
      });
}