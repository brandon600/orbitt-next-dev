const mongoose = require('mongoose');
const User = mongoose.model('users');
const Reward = mongoose.model('rewards');
const OutboundReward = mongoose.model('outboundrewards');
const UpdatedReward = mongoose.model('updatedrewards');

module.exports = (app) => {
    //Get Reward Offerings
    app.get('/current-rewards/', async (req, res) => {
      const { userId } = req.query;
      if (!userId) {
          return res.status(400).json({ error: 'userId is required' });
      }
      console.log('userid', userId);

        const rcs = await Reward.find({user: userId.toString()})
        .catch(err => console.log(err));;
        const currentRewards = Array.from(rcs);
        res.json(currentRewards);
      });

    //Get Default Rewards
    app.get('/current-outbound-rewards/', async (req, res) => {
      const { userId } = req.query;
      if (!userId) {
          return res.status(400).json({ error: 'userId is required' });
      }
      console.log('userid', userId);

    const rcs = await OutboundReward.find({user: userId.toString()})
    .catch(err => console.log(err));;
    const currentOutboundRewards = Array.from(rcs);
    res.json(currentOutboundRewards);
    });

      //Get Reward Offerings
      app.get('/current-active-rewards/', async (req, res) => {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        console.log('userid', userId);

        const rcs = await Reward.find({user: userId.toString(), rewardActive: true})
        .catch(err => console.log(err));;
        const currentRewards = Array.from(rcs);
        res.json(currentRewards);
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
        req.io.emit('reward-added', newReward);
        res.status(200).send({ message: 'Reward added successfully.' });
      })
      .catch((err) => 
        res.status(500).send({ message: 'Error adding new reward.' })
      );
    });


    app.put('/update-active-rewards/', async (req, res) => {
      const { updatedRewards, updatedDefaultRewards, user } = req.body;
      const userIdString = user.userid;
    
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
        await Reward.updateMany({ _id: { $in: rewardsTrueArray }, user: userIdString }, { $set: { rewardActive: true } });
        await Reward.updateMany({ _id: { $in: rewardsFalseArray }, user: userIdString }, { $set: { rewardActive: false } });
    
        await OutboundReward.updateMany({ _id: { $in: defaultRewardsTrueArray }, user: userIdString }, { $set: { rewardActive: true } });
        await OutboundReward.updateMany({ _id: { $in: defaultRewardsFalseArray }, user: userIdString }, { $set: { rewardActive: false } });
    
        console.log('Successfully updated rewards and default rewards');
        res.status(200).json({ message: 'Successfully updated all rewards and default rewards' });
    
      } catch (error) {
        console.error('Failed to update rewards:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });    



    app.put('/update-reward', async (req, res) => {
      try {
        const { rewardDetails, user } = req.body;
    
        // Generate unique ID based on timestamp
        const uniqid = Date.now();
        console.log('req.body', req.body)
    
        // Define filter and update operations
        const filter = { rewardid: rewardDetails.id, user: user.userid };
    
        // Find the original record before making any updates
        const originalReward = await Reward.findOne(filter);
        console.log(originalReward)
        
        if (!originalReward) {
          return res.status(404).json({ message: 'Original reward not found' });
        }
    
        // Define update operation
        const update = {
          $set: {
            rewardName: rewardDetails.name,
            rewardCost: rewardDetails.cost,
            rewardTerms: rewardDetails.terms,
            rewardValue: rewardDetails.value,
            rewardActive: rewardDetails.active
          },
        };
    
        const updateOptions = { new: true };  // Return the updated reward object
        const updatedReward = await Reward.findOneAndUpdate(filter, update, updateOptions);
    
        // Check if any document was updated
        if (!updatedReward) {
          return res.status(404).json({ message: 'Reward not found' });
        }
    
        // Create a new UpdatedReward document
        const newUpdatedReward = new UpdatedReward({
          _id: new mongoose.Types.ObjectId(),
          rewardid: rewardDetails.id,
          user: user,
          userMemberstackId: user.memberstackId,
          date: uniqid,
          userClass: user,
          rewardNameBefore: originalReward.rewardName,
          rewardNameAfter: updatedReward.rewardName,
          rewardCostBefore: originalReward.rewardCost,
          rewardCostAfter: updatedReward.rewardCost,
          rewardTermsBefore: originalReward.rewardTerms,
          rewardTermsAfter: updatedReward.rewardTerms,
          rewardValueBefore: originalReward.rewardValue,
          rewardValueAfter: updatedReward.rewardValue,
          rewardActiveBefore: originalReward.rewardActive,
          rewardActiveAfter: updatedReward.rewardActive,
          reward: originalReward,
          rewardid: originalReward.rewardid
          // ... other fields that rely on the updated reward
        });
    
        await newUpdatedReward.save();
    
        // Add the UpdatedReward document's ID to the updates field of the Reward document
        await Reward.updateOne(filter, {
          $push: { updates: newUpdatedReward._id }
        });

        console.log("Emitting reward-updated event", updatedReward);
        req.io.emit('reward-updated', updatedReward);

        res.status(200).json(updatedReward);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    });



    app.put('/update-default-reward', async (req, res) => {
      
      try {
        const { rewardDetails, user } = req.body;
        console.log(req.body)
    
        // Generate unique ID based on timestamp
        const uniqid = Date.now();
    
        // Define filter and update operations
        const filter = { rewardNumberId: rewardDetails.id, user: user.userid };
    
        // Find the original record before making any updates
        const originalDefaultReward = await OutboundReward.findOne(filter);
        console.log(originalDefaultReward)
        
        if (!originalDefaultReward) {
          return res.status(404).json({ message: 'Original reward not found' });
        }
    
        // Define update operation
        const update = {
          $set: {
            rewardValue: rewardDetails.value,
          },
        };
    
        const updateOutboundOptions = { new: true };  // Return the updated reward object
        const updatedDefaultReward = await OutboundReward.findOneAndUpdate(filter, update, updateOutboundOptions);
    
        // Check if any document was updated
        if (!updatedDefaultReward) {
          return res.status(404).json({ message: 'Reward not found' });
        }
    

        console.log("Emitting reward-updated event", updatedDefaultReward);
        req.io.emit('default-reward-updated', updatedDefaultReward);

        res.status(200).json(updatedDefaultReward);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
}