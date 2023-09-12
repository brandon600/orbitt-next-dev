const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const TriggeredMessage = mongoose.model('triggeredmessages');
const BlastMessage = mongoose.model('blastmessages');
const SentMessage = mongoose.model('sentmessages');

module.exports = (app) => {
      app.get('/triggered-messages/', async (req, res) => {
        const rcs = await TriggeredMessage.find({user: '1680735892067'})
        .catch(err => console.log(err));;
        const currentTriggeredMessages = Array.from(rcs);
        res.json(currentTriggeredMessages);
      });

      app.get('/blast-messages/', async (req, res) => {
        const rcs = await BlastMessage.find({user: '1680735892067'})
        .catch(err => console.log(err));;
        const currentBlastMessages = Array.from(rcs);
        res.json(currentBlastMessages);
      });

      app.get('/sent-messages/', async (req, res) => {
        const rcs = await SentMessage.find({user: '1680735892067'})
        .catch(err => console.log(err));;
        const currentSentMessages = Array.from(rcs);
        res.json(currentSentMessages);
      });


      app.put('/update-triggered-messages/', async (req, res) => {
        const { updatedTriggeredMessages } = req.body;
        console.log(updatedTriggeredMessages)

        const triggeredMessagesTrueArray = updatedTriggeredMessages
        .filter(triggeredMessage => triggeredMessage.active === true)
        .map(triggeredMessage => triggeredMessage._id);
    
        const triggeredMessagesFalseArray = updatedTriggeredMessages
          .filter(triggeredMessage => triggeredMessage.active === false)
          .map(triggeredMessage => triggeredMessage._id);

        try {
          await TriggeredMessage.updateMany({ _id: { $in: triggeredMessagesTrueArray } }, { $set: { active: true } });
          await TriggeredMessage.updateMany({ _id: { $in: triggeredMessagesFalseArray } }, { $set: { active: false } });
          console.log('Successfully updated triggered messages');
          res.status(200).json({ message: 'Successfully updated all triggered messages' });
      
        } catch (error) {
          console.error('Failed to update triggered messages:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      })  

      app.put('/update-triggered-message-content', async (req, res) => {
        const { triggeredMessageDetails, user } = req.body;
    
        try {
            // Define filter and update operations
            const filter = { messageNumberId: triggeredMessageDetails.triggeredMessageId, user: user.userid };
            
            // Update the custom text of the triggered message
            const updatedTriggeredMessage = await TriggeredMessage.findOneAndUpdate(filter, {
                textMessageCustomText: triggeredMessageDetails.customText
            }, {
                new: true // Return the updated document
            });
    
            if (!updatedTriggeredMessage) {
                return res.status(404).json({ message: 'Message not found or update failed' });
            }
    
            req.io.emit('triggered-message-updated', updatedTriggeredMessage);
            res.status(200).json(updatedTriggeredMessage);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    });
}