///
const express = require('express');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override')
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {ensureAuthenticated} = require('./helpers/auth');
const socketio = require('socket.io');

const cron = require('node-cron');

const app = express();
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and sessions for cross-origin requests if needed
};

app.use(cors(corsOptions));

//DB Config
const db = require('./config/keys');

//Map global promise
mongoose.Promise = global.Promise

//Connect to mongoose
//mongoose.connect(db.mongoURI, {
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(db))
    .catch(err => console.log(err));

//Load Models
require('./models/Customer');
require('./models/User');
require('./models/Reward');
require('./models/OutboundReward');

const Customer = mongoose.model('customers');
const User = mongoose.model('users');
const Reward = mongoose.model('rewards');
const OutboundReward = mongoose.model('outboundRewards');

// Define the route to fetch user information
app.get('/api/users/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findOne({userid: userId})
      .then(user => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      })
      .catch(error => {
        console.error('Failed to fetch user:', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });

  app.get('/api/users/:userId/rewards', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      // Find the user by userId
      const user = await User.findOne({userid: userId});
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const rcs = await Reward.find({user: userId})
        .catch(err => console.log(err));
        const currentRewards = Array.from(rcs);
        res.json(currentRewards);
    } catch (error) {
      console.error('Failed to fetch rewards:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  app.get('/api/customers/:userId/:phoneNumber', async (req, res) => {
    console.log('hsoidfhsodhfoshdfoishdf')
    console.log(req.params)
    try {
      const { phoneNumber } = req.params;
      const {userId } = req.params;
  
      // Remove all non-digit characters and spaces
      const cleanedInput = phoneNumber.replace(/\D/g, "");
  
      // Extract the area code and phone number
      const areaCode1 = cleanedInput.slice(0, 3);
      const phoneNumber1 = cleanedInput.slice(3, 10);
  
      // Assuming you have a Mongoose model for customers named 'Customer'
      const customer = await Customer.findOne({
        user: userId, // Assuming you have user information associated with customers
        areaCodeNumber: areaCode1,
        phoneNumber1: phoneNumber1,
      });
  
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


  app.get('/api/users/:userId/:customerId', async (req, res) => {
    const userId = req.params.userId;
    const customerId = req.params.customerId;
  
    try {
      // Find the user by userId
      const user = await User.findOne({userid: userId});
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Find the customer with the specified customerId and matching userId
      const customer = await Customer.findOne({user: userId, customerid: customerId});
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
  
      res.json(customer);
    } catch (error) {
      console.error('Failed to fetch customer:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: ['dfgrshdfxfdshergfdsvccgdfcxfbv']
    })
  );

require('./routes/customerInfoRoutes')(app);
require('./routes/rewardRoutes')(app);

//Passport Config
require('./config/passport')(passport);

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Method Override Middleware
app.use(methodOverride('_method'))

//Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Flash Middleware
app.use(flash());

//Global Variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

require('./routes/authRoutes')(app);
require('./routes/customerInfoRoutes')(app);


  if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets
    //Like our main.js file, or main.css file
    app.use(express.static('client/build'));
  
    //Express will serve up the index.html file
    //if it doesn't recognize the route
  
    const path = require('path');
    app.get('*', (req, res) => {
        const index = path.join(__dirname, 'client', 'build', 'index.html');
        res.sendFile(index);
    });
  }
  
  //const PORT = process.env.PORT || 5000;
  
  const serverPort = 5000;
  
  const PORT = process.env.PORT || serverPort;
  
  app.listen(PORT);