const mongoose = require('mongoose');
const User = mongoose.model('users');
const Visit = mongoose.model('visits');

module.exports = (app) => {
app.get('/customer-visits', async (req, res) => {
    const rcs = await Visit.find({user: '1680735892067'})
    //.populate('customer);
    .catch(err => console.log(err));
    const realVisits = Array.from(rcs);
    console.log('visits coming in!!!!');
    res.json(realVisits);
  });
}