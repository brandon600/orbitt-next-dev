const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {
         //User updates their company name
         app.post('/update-company-name', (req, res) => {

            const { businessName, user } = req.body;

            // Input validation (add more validations as needed)
            if (!businessName || !user || !user.userid) {
                return res.status(400).send({ message: 'Bad request parameters.' });
            }
        
            const myquery = { userid: '1680735892067' };
            const newvalues = { $set: { companyName: businessName } };
        
            // Using promise approach
            User.updateOne(myquery, newvalues)
                .then(() => {
                    res.status(200).send({ message: 'Company name updated successfully.' });
                })
                .catch((err) => {
                    console.error("Update error:", err);
                    res.status(500).send({ message: 'Error updating company name.' });
                });
          })
    
          //User updates their terms & conditions
          app.post('/update-terms-conditions', (req, res) => {
            const { businessTC, user } = req.body;
            console.log(req.body.businessTC)

            if (!businessTC || !user || !user.userid) {
              return res.status(400).send({ message: 'Bad request parameters.' });
          }
      
            const myquery = { userid: user.userid };
            const newvalues = {$set: { termsConditions: businessTC } };

            console.log(req.body)

            User.updateOne(myquery, newvalues)
            .then(() => {
                res.status(200).send({ message: 'TCs updated successfully.' });
            })
            .catch((err) => {
                console.error("Update error:", err);
                res.status(500).send({ message: 'Error updating TCs.' });
            });
          })
}