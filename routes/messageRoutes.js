const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const TriggeredMessage = mongoose.model('triggeredmessages');
const BlastMessage = mongoose.model('blastmessages');
const SentMessage = mongoose.model('sentmessages');

const db = require('../config/keys');
const { object } = require('prop-types');
const client = require('twilio')(db.accountSid, db.authToken);

const { ByteFlow } = require("@byteflow-inc/sdk");
const sdk = new ByteFlow("DxJfnLUEh-25jQk8c3oCfLnQ2KQ5-xAH@ogna4961TOV-Rt0fedacv");

/*
const SERVICE_PLAN_ID = process.env.SINCH_SERVICE_PLAN_ID;
const API_TOKEN = process.env.SINCH_API_TOKEN;
const SINCH_NUMBER = process.env.SINCH_VIRTUAL_NUMBER;

async function sendSinchSMS(toNumber, messageContent) {
  const response = await fetch(`https://us.sms.api.sinch.com/xms/v1/${SERVICE_PLAN_ID}/batches`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      from: SINCH_NUMBER,
      to: [toNumber],
      body: messageContent
    })
  });

  const data = await response.json();
  console.log(data);
  return data;
}
*/


module.exports = (app) => {
      app.get('/triggered-messages/', async (req, res) => {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        console.log('userid', userId);
        const rcs = await TriggeredMessage.find({user: userId.toString()})
        .catch(err => console.log(err));;
        const currentTriggeredMessages = Array.from(rcs);
        res.json(currentTriggeredMessages);
      });

      app.get('/blast-messages/', async (req, res) => {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        console.log('userid', userId);
        const rcs = await BlastMessage.find({user: userId.toString()})
        .catch(err => console.log(err));;
        const currentBlastMessages = Array.from(rcs);
        res.json(currentBlastMessages);
      });

      app.get('/sent-messages/', async (req, res) => {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        console.log('userid', userId);
        const rcs = await SentMessage.find({user: userId.toString()})
        .catch(err => console.log(err));;
        const currentSentMessages = Array.from(rcs);
        res.json(currentSentMessages);
      });


      app.put('/update-triggered-messages/', async (req, res) => {
        const { updatedTriggeredMessages } = req.body;
        console.log(updatedTriggeredMessages)

        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'userId is required' });
        }
        console.log('userid', userId);
        const userIdString = userId.toString();

        const triggeredMessagesTrueArray = updatedTriggeredMessages
        .filter(triggeredMessage => triggeredMessage.active === true)
        .map(triggeredMessage => triggeredMessage._id);
    
        const triggeredMessagesFalseArray = updatedTriggeredMessages
          .filter(triggeredMessage => triggeredMessage.active === false)
          .map(triggeredMessage => triggeredMessage._id);

        try {
          await TriggeredMessage.updateMany({ _id: { $in: triggeredMessagesTrueArray }, user: userIdString }, { $set: { active: true } });
          await TriggeredMessage.updateMany({ _id: { $in: triggeredMessagesFalseArray }, user: userIdString }, { $set: { active: false } });
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


    app.post('/send-blast-message', async (req, res) => {
      const uniqid = Date.now();
  
      const { messageContent, customerIds, user } = req.body;
      console.log(req.body);
      console.log(messageContent);
      console.log(customerIds);
      console.log(user);

  
      try {
          // Fetch customers based on their IDs to get phone numbers.
          const customersToSend = await Customer.find({
              customerid: { $in: customerIds },
              user: user.userid
          });

          if (!customersToSend.length) {
            return res.status(404).send({ message: 'No customers found.' });
        }

          const objectIdArray = customersToSend.map(customer => customer._id);


          //NEW
          // Function to send SMS using Sinch
          /*
        const sendSinchSMS = async (toNumber, personalizedMessage) => {
          const response = await fetch(`https://us.sms.api.sinch.com/xms/v1/${SERVICE_PLAN_ID}/batches`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${API_TOKEN}`
              },
              body: JSON.stringify({
                  from: SINCH_NUMBER,
                  to: [toNumber],
                  body: personalizedMessage
              })
          });
          return response.json();
      };
      */

  
          // Generate phone numbers from the customers
          const cusNumberArray = customersToSend.map(customer => `${customer.fullPhoneNumber}`);
  
          cusNumberArray.forEach((thisNumber, index) => {
            const customer = customersToSend[index];
            let personalizedMessage = messageContent;
            personalizedMessage = personalizedMessage.replace(/{{first_name}}/g, customer.firstName);
            personalizedMessage = personalizedMessage.replace(/{{last_name}}/g, customer.lastName);
            personalizedMessage = personalizedMessage.replace(/{{current_point_total}}/g, customer.rewardNumber);
            personalizedMessage = personalizedMessage.replace(/{{total_points_earned}}/g, customer.starsEarned);
            personalizedMessage = personalizedMessage.replace(/{{total_visits}}/g, customer.totalVisits);
            personalizedMessage = personalizedMessage.replace(/{{business_name}}/g, user.companyName);

            console.log(`Sending to number ${thisNumber}: ${personalizedMessage}`);
            /*
              client.messages.create({
                  body: messageContent,
                  from: `+${user.messagingPhoneNumber}`,
                  to: thisNumber
              }).catch(err => console.log(err));
              */

             console.log('sending to number sdk');
              sdk.sendMessage({
                message_content: personalizedMessage,
                destination_number: `+${thisNumber}`
            }).catch(err => console.log(err));

            /*
            try {
              const sinchResponse = await sendSinchSMS(customer.fullPhoneNumber, personalizedMessage);
              console.log('Sinch Response:', sinchResponse);
          } catch (error) {
              console.error("Error sending message with Sinch:", error);
          }
          */

          });

  
          const newBlastMessage = new BlastMessage({
              _id: new mongoose.Types.ObjectId(),
              blastid: uniqid,
              date: uniqid,
              messageNumberId: 99,
              textMessage: messageContent,
              customerList: customersToSend,
              user: user,
              userMemberstackId: user.memberstackId,
              userClass: user,
              customersReceived: objectIdArray,
              active: true
          });
  
          await newBlastMessage.save();
  
          // Update user stats
          await User.updateOne({ userid: user.userid }, {
              $inc: {
                  totalMessagesSent: cusNumberArray.length,
                  monthlyMessagesLeft: -cusNumberArray.length
              }
          });
  
          // Append the blast message to the customer's record
          await Customer.updateMany({ customerid: { $in: customerIds }, user: user.userid }, {
              $push: { receivedBlasts: newBlastMessage }
          });
  
          res.status(200).send({ message: 'SMS Blast sent successfully.' });
  
      } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error sending SMS blast.' });
      }
  });

}