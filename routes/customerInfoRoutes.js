const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const OutboundReward = mongoose.model('outboundrewards');
const Visit = mongoose.model('visits');
const TriggeredMessage = mongoose.model('triggeredmessages');
const SentMessage = mongoose.model('sentmessages');

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













/*

        app.post('/new-customer', async (req, res) => {
          const { customerDetails, user } = req.body;
          const customerFirstName = customerDetails.firstName;
          const customerLastName = customerDetails.lastName;
          const phoneNumber = customerDetails.phoneNumber;
          const birthdayMonth = customerDetails.birthdayMonth;
          const birthdayDay = customerDetails.birthdayDay;
          const birthdayYear = customerDetails.birthdayYear;

          let uniqid = Date.now();
          let signUpDate = new Date();

          let companyNameText = user.companyName


          const filter = { rewardNumberId: 2, user: user.userid };
          const originalSignUpReward = await OutboundReward.findOne(filter);
          let signUpRewardValueText;
          if (originalSignUpReward.rewardActive == false) {
            signUpRewardValueText = 0
          } else {
            signUpRewardValueText = originalSignUpReward.rewardValue;
          }

  
          // Remove all non-digit characters and spaces
          const cleanedInput = phoneNumber.replace(/\D/g, "");
          // Extract the area code, phone number, and full phone number
          const areaCodeSave = cleanedInput.slice(0, 3);
          const phoneNumber1Save = cleanedInput.slice(3, 10);
          const fullPhoneNumber1 = cleanedInput.slice(0, 3) + "-" + cleanedInput.slice(3, 6) + "-" + cleanedInput.slice(6, 10);
          let fullPhoneNumSave = `1${areaCodeSave}${phoneNumber1Save}`
          let fullBirthDateSave = `${birthdayMonth}/${birthdayDay}/${birthdayYear}`
          let customerFullName = `${customerFirstName} ${customerLastName}`
  
          let newVisit;
          let sendNumber = `1${areaCodeSave}${phoneNumber1Save}`
  
          Customer.findOne({fullPhoneNumber: fullPhoneNumSave, user: user.userid})
            .then(customer => {
              if(customer) {
                res.redirect('/');
              } else {
                const newCustomer = new Customer ({
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
                newCustomer.save(function (err) {
                  if (err) {
                    console.error('Error saving new customer: ', err);
                    return res.status(500).send({ message: 'Error saving new customer.' });
                  }
                  newVisit = new Visit ({
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
                  })
                  newVisit.save(function (err) {
                    if (err) {
                      console.error(err);
                      return res.status(500).send('Error saving new visit');
                    }
                   TriggeredMessage.findOne({ messageTitle: 'New Sign-Up Message', user: user.userid})
                    .then(mySignUpMessage => {
                      const mySignUpMessageVar = mySignUpMessage
                      if (mySignUpMessage.active == true) {
                        const myMessage1 = 'Thanks for signing up for the '
                        const myMessage2 = companyNameText
                        const myMessage3 = ` loyalty program! You've earned ${signUpRewardValueText} star(s), keep going to earn more rewards. `
                        const myMessage4 = `${mySignUpMessage.textMessageCustomText} `
                        const myMessage5 = mySignUpMessage.textMessageDefaultTextEnd2
                        const completeSignUpMessage = myMessage1 + myMessage2 + myMessage3 + myMessage4 + myMessage5
                            client.messages.create({
                            body: completeSignUpMessage,
                            from: `+${req.user.messagingPhoneNumber}`,
                            to: sendNumber
                          }).then(mySignUpMessage2 => {
                            var customersReceivedArray = []
                            customersReceivedArray.push(newCustomer)
                            const newSentMessage = new SentMessage({
                              _id: new mongoose.Types.ObjectId(),
                              messageNumberId: mySignUpMessageVar.messageNumberId,
                              user: user.userid,
                              userMemberstackId: user.memberstackId,
                              date: uniqid,
                              messageTitle: mySignUpMessageVar.messageTitle,
                              messageContent: completeSignUpMessage,
                              messageDelay: 0,
                              userClass: user,
                              customersReceived: customersReceivedArray,
                            })
                            newSentMessage.save(function (err) {
                              var myquery2 = { userid: user.userid};
  
                              var monthlyMessagesBefore = req.user.monthlyMessagesLeft;
                              var totalSentMessages = req.user.totalMessagesSent;
                              var newTotalSentMessages = totalSentMessages + 1
                              var newMonthlyMessageCount = monthlyMessagesBefore - 1
                              var newvalues2 = { $set: { totalMessagesSent: newTotalSentMessages, monthlyMessagesLeft: newMonthlyMessageCount } };
  
                              User.updateOne(myquery2, newvalues2, function(err, res) {
                                if (err) throw err
                                console.log("1 document updated");
                              })
                              .then(() => {
                                console.log('updated User!!!!')
                              })
  
                            })
                          })
                      } else {
                        console.log('message was not active. Did not send');
                      }
                        Customer.findOne({
                          customerid: uniqid
                        }).then(funcCustomer => {
                          const newAppendedVisitObject = newVisit
                          funcCustomer.visits.unshift(newAppendedVisitObject);
                          funcCustomer.save((function (err) {
                          }))
                          res.status(200).send({ message: 'Customer created successfully.' });
                      })
                        .catch((err) => 
                        res.status(500).send({ message: 'Error creating customer.' })
                        );
                    })
                  });
                });
              }
            })
        });

        */



















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