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

    app.post('/add-reward/', (req, res) => {
      const { rewardDetails, user } = req.body;
      console.log(req.body)
      var uniqid = Date.now();


      var newRewards = rewardDetails.cost;
      var newRewardsInt = parseInt(newRewards);
    
    const newReward = new Reward ({
          _id: new mongoose.Types.ObjectId(),
          rewardid: uniqid,
          user: user.userid,
          userMemberstackId: user.memberstackId,
          userClass: user,
          date: uniqid,
          rewardName: rewardDetails.name,
          rewardCost: newRewardsInt,
          rewardValue: rewardDetails.value,
          rewardTerms: rewardDetails.terms,
          rewardActive: true,
      });
      newReward.save()
      .then(() => {
        res.status(200).send({ message: 'Reward added successfully.' });
      })
      .catch((err) => 
        res.status(500).send({ message: 'Error adding new reward.' })
      );
    });

}