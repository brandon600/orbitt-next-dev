const mongoose = require('mongoose');
const User = mongoose.model('users');
const Visit = mongoose.model('visits');

module.exports = (app) => {
app.get('/customer-visits', async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
  }
    const rcs = await Visit.find({user: userId.toString()})
    //.populate('customer);
    .catch(err => console.log(err));
    const realVisits = Array.from(rcs);
    console.log('visits coming in!!!!');
    res.json(realVisits);
  });
}