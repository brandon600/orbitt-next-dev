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


 
    
    app.post('/update-active-rewards/', async (req, res) => {
      const { updatedRewards, updatedDefaultRewards } = req.body;
    
      const rewardsTrueArray = updatedRewards
        .filter(reward => reward.rewardActive === true)
        .map(reward => reward._id);
    
      const rewardsFalseArray = updatedRewards
        .filter(reward => reward.rewardActive === false)
        .map(reward => reward._id);
    
      const defaultRewardsTrueArray = updatedDefaultRewards
        .filter(defaultReward => defaultReward.rewardActive === true)
        .map(defaultReward => defaultReward._id);
    
      const defaultRewardsFalseArray = updatedDefaultRewards
        .filter(defaultReward => defaultReward.rewardActive === false)
        .map(defaultReward => defaultReward._id);
    
      try {
        await Reward.updateMany({ _id: { $in: rewardsTrueArray } }, { $set: { rewardActive: true } });
        await Reward.updateMany({ _id: { $in: rewardsFalseArray } }, { $set: { rewardActive: false } });
    
        await OutboundReward.updateMany({ _id: { $in: defaultRewardsTrueArray } }, { $set: { rewardActive: true } });
        await OutboundReward.updateMany({ _id: { $in: defaultRewardsFalseArray } }, { $set: { rewardActive: false } });
    
        console.log('Successfully updated rewards and default rewards');
        res.status(200).json({ message: 'Successfully updated all rewards and default rewards' });
    
      } catch (error) {
        console.error('Failed to update rewards:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });    

}