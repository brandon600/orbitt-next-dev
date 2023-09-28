const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const OutboundReward = mongoose.model('outboundrewards');
const Visit = mongoose.model('visits');
const TriggeredMessage = mongoose.model('triggeredmessages');
const SentMessage = mongoose.model('sentmessages');
const Reward = mongoose.model('rewards');

const db = require('../config/keys')
const client = require('twilio')(db.accountSid, db.authToken)

module.exports = (app) => {
    app.get('/api/customers', (req, res) => {
        const customers = [
          {id: 1, firstName: 'John', lastName: 'Doe'},
          {id: 2, firstName: 'Brad', lastName: 'Traversy'},
          {id: 3, firstName: 'Mary', lastName: 'Swanson'},
        ];
        res.json(customers);
      });
      
    app.get('/customers', async (req, res) => {
        const rcs = await Customer.find({user: '1680735892067'})
            .populate('visits');
        const realCustomers = Array.from(rcs);
        res.json(realCustomers);
        });



        app.post('/add-customer', async (req, res) => {
          try {
              const { customerDetails, user } = req.body;
              const { firstName: customerFirstName, lastName: customerLastName, phoneNumber, birthdayMonth, birthdayDay, birthdayYear } = customerDetails;
      
              console.log('Destructured customerDetails: ', customerDetails);
              console.log('Destructured user: ', user);

              const uniqid = Date.now();
              const signUpDate = new Date();
              const companyNameText = user.companyName;
      
              const filter = { rewardNumberId: 2, user: user.userid };
              const originalSignUpReward = await OutboundReward.findOne(filter);


              console.log('Filter for OutboundReward:', filter);
              console.log('Original SignUp Reward:', originalSignUpReward);
      
              const signUpRewardValueText = originalSignUpReward && originalSignUpReward.rewardActive ? originalSignUpReward.rewardValue : 0;
      
              const cleanedInput = phoneNumber.replace(/\D/g, "");
              const areaCodeSave = cleanedInput.slice(0, 3);
              const phoneNumber1Save = cleanedInput.slice(3, 10);
              const fullPhoneNumSave = `1${areaCodeSave}${phoneNumber1Save}`;
              const fullBirthDateSave = `${birthdayMonth}/${birthdayDay}/${birthdayYear}`;
              const customerFullName = `${customerFirstName} ${customerLastName}`;
              const sendNumber = `1${areaCodeSave}${phoneNumber1Save}`;
      
              const existingCustomer = await Customer.findOne({ fullPhoneNumber: fullPhoneNumSave, user: user.userid });

              console.log('Existing Customer Check:', existingCustomer);
      
              if (existingCustomer) {
                  return res.redirect('/');
              }
      
              const newCustomer = new Customer({
                  _id: new mongoose.Types.ObjectId(),
                  customerid: uniqid,
                  userClass: user,
                  date: uniqid,
                  signUpDate: signUpDate,
                  lastTransactionDate: uniqid,
                  user: user.userid,
                  userMemberstackId: user.memberstackId,
                  firstName: customerFirstName,
                  lastName: customerLastName,
                  fullName: customerFullName,
                  email: '',
                  areaCodeNumber: areaCodeSave,
                  phoneNumber1: phoneNumber1Save,
                  fullPhoneNumber: fullPhoneNumSave,
                  rewardNumber: signUpRewardValueText,
                  active: true,
                  atRisk: false,
                  totalVisits: 1,
                  starsEarned: signUpRewardValueText,
                  rewardsRedeemed: 0,
                  birthdayMonth: birthdayMonth,
                  birthdayDay: birthdayDay,
                  birthdayYear: birthdayYear,
                  fullBirthday: fullBirthDateSave
              });
      
              console.log('Customer saved successfully');
              await newCustomer.save();
              console.log('New Customer Object:', newCustomer);

      
              const newVisit = new Visit({
                _id: new mongoose.Types.ObjectId(),
                customerid: newCustomer.customerid,
                customer: newCustomer,
                userClass: user,
                userMemberstackId: user.memberstackId,
                date: uniqid,
                user: user.userid,
                visitid: uniqid,
                customerName: customerFullName,
                status: true,
                visitType: 'New User',
                currentRewardsRedeemed: 0,
                currentRewardsEarned: signUpRewardValueText,
                currentRewardsName: 'N/A',
                currentRewardsValue: 'N/A',
              });
      
              console.log('New Visit Object:', newVisit);
              await newVisit.save();
              console.log('Visit saved successfully');
      
              const mySignUpMessage = await TriggeredMessage.findOne({ messageTitle: 'New Sign-Up Message', user: user.userid });

              console.log('Triggered Message:', mySignUpMessage);
      
              if (mySignUpMessage && mySignUpMessage.active) {
                  const completeSignUpMessage = `Thanks for signing up for the ${companyNameText} loyalty program! You've earned ${signUpRewardValueText} star(s), keep going to earn more rewards. ${mySignUpMessage.textMessageCustomText} ${mySignUpMessage.textMessageDefaultTextEnd2}`;
      
                  await client.messages.create({
                      body: completeSignUpMessage,
                      from: `+${user.messagingPhoneNumber}`,
                      to: sendNumber
                  });

                  console.log('Message sent successfully');
                  let customersReceivedArray = []
                  customersReceivedArray.push(newCustomer)
      
                  const newSentMessage = new SentMessage({
                    _id: new mongoose.Types.ObjectId(),
                    messageNumberId: mySignUpMessage.messageNumberId,
                    user: user.userid,
                    userMemberstackId: user.memberstackId,
                    date: uniqid,
                    messageTitle: mySignUpMessage.messageTitle,
                    messageContent: completeSignUpMessage,
                    messageDelay: 0,
                    userClass: user,
                    customersReceived: customersReceivedArray,
                  });
      
                  await newSentMessage.save();
      
                  const myquery2 = { userid: user.userid };
                  const monthlyMessagesBefore = user.monthlyMessagesLeft;
                  const totalSentMessages = user.totalMessagesSent;
                  const newvalues2 = {
                      $set: {
                          totalMessagesSent: totalSentMessages + 1,
                          monthlyMessagesLeft: monthlyMessagesBefore - 1
                      }
                  };
      
                  await User.updateOne(myquery2, newvalues2);
              } else {
                  console.log('message was not active. Did not send');
              }
      
              const funcCustomer = await Customer.findOne({ customerid: uniqid });
              funcCustomer.visits.unshift(newVisit);
              await funcCustomer.save();
      
              res.status(200).send({ message: 'Customer created successfully.' });
              console.log('Finished processing /add-customer');
      
          } catch (err) {
              console.error(err);
              res.status(500).send({ message: 'Error processing request.' });
              console.error('Error in /add-customer:', err);
          }
      });




      app.get('/process-transaction', async (req, res) => {
        console.log('Phone number:', req.query.phoneNumber);  

        try {
            // Extract phone number from query
            const phoneNumber = req.query.phoneNumber;
            console.log('Phone number:', phoneNumber);
            
    
            // Validate phone number
            if (!phoneNumber) {
                return res.status(400).json({ message: 'Phone number is required' });
            }
    
            // Clean up phone number
            const cleanedInput = phoneNumber.replace(/\D/g, "");
            const areaCode1 = cleanedInput.slice(0, 3);
            const phoneNumber1 = cleanedInput.slice(3, 10);

            console.log(areaCode1);
            console.log(phoneNumber1);
    
            const customer = await Customer.findOne({ 
                user: '1680735892067',
                areaCodeNumber: areaCode1, 
                phoneNumber1: phoneNumber1 // Fixed the incorrect property name
            });
    
            if (!customer) {
                return res.status(404).json({ message: 'Customer not found' });
            }
    
            res.status(200).json(customer);
        } catch (error) {
            console.error('Error searching for customer:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
  
    

    /*

      const newVisit = new Visit({
                _id: new mongoose.Types.ObjectId(),
                customerid: newCustomer.customerid,
                customer: newCustomer,
                userClass: user,
                userMemberstackId: user.memberstackId,
                date: uniqid,
                user: user.userid,
                visitid: uniqid,
                customerName: customerFullName,
                status: true,
                visitType: 'New User',
                currentRewardsRedeemed: 0,
                currentRewardsEarned: signUpRewardValueText,
                currentRewardsName: 'N/A',
                currentRewardsValue: 'N/A',
              });

              */



              /*
                        newVisit = new Visit ({
            _id: new mongoose.Types.ObjectId(),
            customerid: underid,
            customer: underClass,
            userClass: req.user,
            userMemberstackId: req.user.memberstackId,
            date: uniqid,
            user: user,
            visitid: uniqid,
            customerName: cusName,
            status: true,
            visitType: 'Purchase',
            currentRewardsRedeemed: 0,
            currentRewardsName: 'N/A',
            currentRewardsValue: 'N/A',
            currentRewardsEarned: newRewardsInt,
            visitDetails: visitDetails
          })
          /


          /*

             newVisit = new Visit ({
            _id: new mongoose.Types.ObjectId(),
            customerid: underid,
            customer: underClass,
            userClass: req.user,
            userMemberstackId: req.user.memberstackId,
            date: uniqid,
            user: user,
            visitid: uniqid,
            customerName: cusName,
            currentRewardsRedeemed: rewardSubtractVar,
            currentRewardsEarned: 0,
            currentRewardsName: req.body.props.currentRedeemReward.rewardName,
            currentRewardsValue: req.body.props.currentRedeemReward.rewardValue,
            status: true,
            visitType: 'Reward',
            visitDetails: visitDetails,
            redeemedReward: req.body.props.currentRedeemReward
          })

          */


          /*

                  const newSentMessage = new SentMessage({
                    _id: new mongoose.Types.ObjectId(),
                    messageNumberId: mySignUpMessage.messageNumberId,
                    user: user.userid,
                    userMemberstackId: user.memberstackId,
                    date: uniqid,
                    messageTitle: mySignUpMessage.messageTitle,
                    messageContent: completeSignUpMessage,
                    messageDelay: 0,
                    userClass: user,
                    customersReceived: customersReceivedArray,
                  });
                  */
    

    app.post('/give-points', async (req, res) => {
        const { customerId, points, user, transactionDetails } = req.body;
        console.log(user)

        try {
            const { customerId, points, user, transactionDetails } = req.body;
            const uniqid = Date.now();
    
            const customer = await Customer.findOne({ customerid: customerId });
            if (!customer) {
                return res.status(400).send({ success: false, message: 'Customer not found.' });
            }
    
            const currentPoints = customer.rewardNumber;
            const updatedPoints = currentPoints + parseInt(points);
    
            customer.rewardNumber = updatedPoints;
            customer.totalVisits = customer.totalVisits + 1;
            await customer.save();
    
            const visit = new Visit({
                _id: new mongoose.Types.ObjectId(),
                customerid: customerId,
                customer: customer,
                userClass: user,
                userMemberstackId: user.memberstackId,
                date: uniqid,
                user: user.userid,
                visitid: uniqid,
                customerName: customer.fullName,
                status: true,
                visitType: 'Purchase',
                currentRewardsRedeemed: 0,
                currentRewardsName: 'N/A',
                currentRewardsValue: 'N/A',
                currentRewardsEarned: points,
                visitDetails: transactionDetails
            });
    
            await visit.save();
    
            const myPointsMessage = await TriggeredMessage.findOne({ messageTitle: 'Transaction Message', user: user.userid });
    
            if (myPointsMessage && myPointsMessage.active) {
                const messageContent = `Congratulations! You've earned ${points} star(s), bringing your total to ${updatedPoints} star(s). ${myPointsMessage.textMessageCustomText} ${myPointsMessage.textMessageDefaultTextEnd1}`;
                const sendNumber = customer.fullPhoneNumber;

                await client.messages.create({
                    body: messageContent,
                    from: `+${user.messagingPhoneNumber}`, // assuming userClass has the messagingPhoneNumber
                    to: sendNumber
                });
    
                const newSentMessage = new SentMessage({
                    _id: new mongoose.Types.ObjectId(),
                    messageNumberId: myPointsMessage.messageNumberId,
                    user: user.userid,
                    userMemberstackId: user.memberstackId,
                    date: uniqid,
                    messageTitle: myPointsMessage.messageTitle,
                    messageContent: messageContent,
                    messageDelay: 0,
                    userClass: user,
                    customersReceived: [customer],
                });
    
                await newSentMessage.save();
    
                const userToUpdate = await User.findOne({ userid: customer.user });
                userToUpdate.totalMessagesSent += 1;
                userToUpdate.monthlyMessagesLeft -= 1;
                await userToUpdate.save();
            } else {
                console.log('Points Given message was not active. Did not send.');
            }
            // Link the visit to the customer
            customer.visits.unshift(visit);
            await customer.save();
    
            res.status(200).send({ success: true, message: 'Points added successfully.' });
    
        } catch (err) {
            console.error(err);
            res.status(500).send({ success: false, message: 'Error processing request.' });
        }
    });



    app.post('/redeem-reward', async (req, res) => {
        try {
            const { customerId, rewardId, user } = req.body;
            const uniqid = Date.now();
    
            const customer = await Customer.findOne({ customerid: customerId });
            if (!customer) {
                return res.status(400).send({ success: false, message: 'Customer not found.' });
            }
    
            const reward = await Reward.findOne({ rewardid: rewardId });
            if (!reward) {
                return res.status(400).send({ success: false, message: 'Reward not found.' });
            }
    
            const currentPoints = customer.rewardNumber;
            if (currentPoints < reward.rewardCost) {
                return res.status(400).send({ success: false, message: 'Insufficient reward points.' });
            }
    
            const updatedPoints = currentPoints - reward.rewardCost;
            customer.rewardNumber = updatedPoints;
            customer.totalVisits = customer.totalVisits + 1;
            await customer.save();
    
            const visit = new Visit({
                _id: new mongoose.Types.ObjectId(),
                customerid: customerId,
                customer: customer,
                userClass: user,
                userMemberstackId: user.memberstackId,
                date: uniqid,
                user: user.userid,
                visitid: uniqid,
                customerName: customer.fullName,
                status: true,
                visitType: 'Reward',
                currentRewardsRedeemed: reward.rewardCost,
                currentRewardsName: reward.rewardName,
                currentRewardsValue: reward.rewardCost.toString(),
                currentRewardsEarned: 0, // As no rewards are earned while redeeming
                visitDetails: "Reward redeemed", // You might want to customize this as per requirements
                redeemedReward: reward
            });
    
            await visit.save();
    
            const myRedeemMessage = await TriggeredMessage.findOne({ messageTitle: 'Reward Redeemed Message', user: user.userid }); // This might need a different title, update accordingly
    
            if (myRedeemMessage && myRedeemMessage.active) {
                const messageContent = `Thank you for being a loyal customer. You've just redeemed ${reward.rewardCost} point(s), bringing your new total to ${updatedPoints} points. ${myRedeemMessage.textMessageCustomText} ${myRedeemMessage.textMessageDefaultTextEnd1}`;
    
                const sendNumber = customer.fullPhoneNumber;
    
                await client.messages.create({
                    body: messageContent,
                    from: `+${user.messagingPhoneNumber}`, 
                    to: sendNumber
                });
    
                const newSentMessage = new SentMessage({
                    _id: new mongoose.Types.ObjectId(),
                    messageNumberId: myRedeemMessage.messageNumberId,
                    user: user.userid,
                    userMemberstackId: user.memberstackId,
                    date: uniqid,
                    messageTitle: myRedeemMessage.messageTitle,
                    messageContent: messageContent,
                    messageDelay: 0,
                    userClass: user,
                    customersReceived: [customer],
                });
    
                await newSentMessage.save();
    
                const userToUpdate = await User.findOne({ userid: customer.user });
                userToUpdate.totalMessagesSent += 1;
                userToUpdate.monthlyMessagesLeft -= 1;
                await userToUpdate.save();
            } else {
                console.log('Reward Redeemed message was not active. Did not send.');
            }
    
            customer.visits.unshift(visit);
            await customer.save();
    
            res.status(200).send({ success: true, message: 'Reward redeemed successfully.' });
    
        } catch (err) {
            console.error(err);
            res.status(500).send({ success: false, message: 'Error processing request.' });
        }
    });




        app.get('/users/customer', async (req, res) => {
          try {
            const { phoneNumber } = req.params;
                  // Remove all non-digit characters and spaces
                  const cleanedInput = phoneNumber.replace(/\D/g, "");

                  // Extract the area code, phone number, and full phone number
                  const areaCode1 = cleanedInput.slice(0, 3);
                  const phoneNumber1 = cleanedInput.slice(3, 10);
                  const customer = await Customer.findOne({ user: req.user.userid, areaCodeNumber: areaCode1, phoneNumber1: phoneNumber });
        
            if (!customer) {
              // Customer not found
              return res.status(404).json({ message: 'Customer not found' });
            }
        
            // Customer found, send it as a response
            res.status(200).json(customer);
          } catch (error) {
            console.error('Error searching for customer:', error);
            res.status(500).json({ message: 'Internal server error' });
          }
          });


          app.get('/customers/:customerid', async (req, res) => {
            try {
                const customer = await Customer.findOne({ user: '1680735892067', customerid: req.params.customerid })
                .populate('visits')
                .populate('receivedBlasts')
                .populate('updates');
                if (!customer) {
                    return res.status(404).send({ message: 'Customer not found' });
                }
                res.send(customer);
            } catch (error) {
                console.error('Error fetching customer:', error);
                res.status(500).send({ message: 'Internal Server Error' });
            }
        });


        app.get('/customers/:customerid/ranking', async (req, res) => {
          try {
              const allCustomers = await Customer.find({ user: '1680735892067' }).sort({ totalVisits: -1 });
              const totalCustomers = allCustomers.length;
      
              const specificCustomerIndex = allCustomers.findIndex(c => c.customerid == req.params.customerid);
              if (specificCustomerIndex === -1) {
                  return res.status(404).send({ message: 'Customer not found' });
              }
              const rank = specificCustomerIndex + 1;
              res.json({
                  rank: rank,
                  totalCustomers: totalCustomers
              });
          } catch (error) {
              console.error('Error fetching customer ranking:', error);
              res.status(500).send({ message: 'Internal Server Error' });
          }
      });
  
};