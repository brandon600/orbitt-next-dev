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
        
            const myquery = { userid: user.userid };
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
            var user = req.user.userid;
            var myquery = {userid: user};
            var newvalues = {$set: { termsConditions: req.body.value } };
      
            User.updateOne(myquery, newvalues, function(err, res) {
              if (err) throw err
              console.log("1 document updated");
            })
            .then(() => {
              res.status(200).send({ message: 'Terms & Conditions updated successfully.' });
            })
            .catch((err) => 
              res.status(500).send({ message: 'Error updating Terms & Conditions.' })
            );
          })
}