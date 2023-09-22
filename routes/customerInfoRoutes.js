const {ensureAuthenticated} = require('../helpers/auth');
const mongoose = require('mongoose');

const Customer = mongoose.model('customers');
const User = mongoose.model('users');

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