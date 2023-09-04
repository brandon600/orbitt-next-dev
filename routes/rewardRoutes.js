const mongoose = require('mongoose');
const User = mongoose.model('users');
const Reward = mongoose.model('rewards');
const OutboundReward = mongoose.model('outboundRewards');

module.exports = (app) => {
    //Get Reward Offerings
    app.get('/current-rewards/', async (req, res) => {
        const rcs = await Reward.find({user: '1680735892067'})
        .catch(err => console.log(err));;
        const currentRewards = Array.from(rcs);
        res.json(currentRewards);
      });

    //Get Default Rewards
    app.get('/current-outbound-rewards/', async (req, res) => {
    const rcs = await OutboundReward.find({user: '1680735892067'})
    .catch(err => console.log(err));;
    const currentOutboundRewards = Array.from(rcs);
    res.json(currentOutboundRewards);
    });
}