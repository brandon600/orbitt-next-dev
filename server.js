const express = require('express');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const { ensureAuthenticated } = require('./helpers/auth');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const cron = require('node-cron');
const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require('next');


const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './client' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  //DB Config
const db = require('./config/keys');
const { constants } = require('fs');

//Map global promise
mongoose.Promise = global.Promise

//Connect to mongoose
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
require('./models/UpdatedReward');
require('./models/TriggeredMessage');
require('./models/BlastMessage');
require('./models/SentMessage');
require('./models/Visit');
require('./models/UpdatedCustomer');

const Customer = mongoose.model('customers');
const User = mongoose.model('users');
const Reward = mongoose.model('rewards');
const OutboundReward = mongoose.model('outboundrewards');
const UpdatedReward = mongoose.model('updatedrewards');
const TriggeredMessage = mongoose.model('triggeredmessages');
const BlastMessage = mongoose.model('blastmessages');
const SentMessage = mongoose.model('sentmessages');
const Visit = mongoose.model('visits');
const UpdatedCustomer = mongoose.model('updatedcustomers');

const client = require('twilio')(db.accountSid, db.authToken)

//http://localhost:3000
//https://orbitt-next-dev.vercel.app

const corsOptions = {
  origin: db.localLink, // Replace with the actual origin of your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Enable cookies and sessions for cross-origin requests if needed
  };
  
  app.use(cors(corsOptions));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Flash Middleware
app.use(flash());

//Global Variables
app.use((req, res, next) => {
  req.io = io;
  next();
})

require('./routes/authRoutes')(app);
require('./routes/customerInfoRoutes')(app);
require('./routes/rewardRoutes')(app);
require('./routes/messageRoutes')(app);
require('./routes/visitRoutes')(app);
require('./routes/dashboardRoutes')(app);
require('./routes/settingsRoutes')(app);



const getCurrentDate = () => {
  const today = new Date();
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0');
  const todayDay = String(today.getDate()).padStart(2, '0');
  return `${todayMonth}-${todayDay}`;
};

const sendMessageToCustomer = async (user, customer, messageTemplate) => {
  const messageText = `Hi ${customer.firstName}! ${messageTemplate.textMessageCustomText}`;
  const sendNumber = `1${customer.areaCodeNumber}${customer.phoneNumber1}`;

  try {
    await client.messages.create({
      body: messageText,
      from: `+${user.messagingPhoneNumber}`,
      to: sendNumber
    });

    const sentMessage = new SentMessage({
      _id: new mongoose.Types.ObjectId(),
      messageNumberId: messageTemplate.messageNumberId,
      user: user.userid,
      date: Date.now(),
      messageTitle: messageTemplate.messageTitle,
      messageContent: messageText,
      messageDelay: 0,
      userClass: user,
      userMemberstackId: user.memberstackId,
      customersReceived: [customer]
    });
    await sentMessage.save();
  } catch (error) {
    console.error("Error sending message:", error);
  }
};


async function findBirthdayUsersAndCustomers() {
  try {
    const users = await User.find();
    const currentDate = getCurrentDate();

    for (const user of users) {
      const customers = await Customer.find({ user: user.userid });
      const birthdayMessageTemplate = await TriggeredMessage.findOne({ messageNumberId: 4, user: user.userid });
      const birthdayReward = await OutboundReward.findOne({ rewardName: 'Birthday Reward', user: user.userid });

      const rewardValue = birthdayReward.rewardActive ? birthdayReward.rewardValue : 0;

      console.log(`User ${user.companyName} has ${customers.length} customers.`);

      if (birthdayMessageTemplate.active) {
        const birthdayCustomers = customers.filter(customer => `${customer.birthdayMonth}-${customer.birthdayDay}` === currentDate);

        for (const customer of birthdayCustomers) {
          const updateQuery = { customerid: customer.customerid };
          const updatedValues = { 
            $set: { 
              rewardNumber: customer.rewardNumber + rewardValue,
              active: false,
              starsEarned: customer.starsEarned + rewardValue 
            }
          };
          await Customer.updateOne(updateQuery, updatedValues);

          await sendMessageToCustomer(user, customer, birthdayMessageTemplate);
        }

        const userUpdateQuery = { userid: user.userid };
        const userUpdatedValues = { 
          $set: {
            totalMessagesSent: user.totalMessagesSent + birthdayCustomers.length,
            monthlyMessagesLeft: user.monthlyMessagesLeft - birthdayCustomers.length 
          }
        };
        await User.updateOne(userUpdateQuery, userUpdatedValues);
      }
    }
  } catch (error) {
    console.error(error);
  }
}


const SIXTY_DAYS_IN_MS = 60 * 24 * 60 * 60 * 1000; // 60 days in milliseconds

async function sendMessageToAtRiskCustomer(user, customer, messageTemplate) {
    const messageText = `Hi ${customer.firstName}! ${messageTemplate.textMessageCustomText}`;
    const sendNumber = `1${customer.areaCodeNumber}${customer.phoneNumber1}`;

    try {
        await client.messages.create({
            body: messageText,
            from: `+${user.messagingPhoneNumber}`,
            to: sendNumber
        });

        const sentMessage = new SentMessage({
            _id: new mongoose.Types.ObjectId(),
            messageNumberId: messageTemplate.messageNumberId,
            user: user.userid,
            date: Date.now(),
            messageTitle: messageTemplate.messageTitle,
            messageContent: messageText,
            messageDelay: 0,
            userClass: user,
            userMemberstackId: user.memberstackId,
            customersReceived: [customer]
        });
        await sentMessage.save();
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

async function findAtRiskUsersAndCustomers() {
    try {
        const users = await User.find();
        const currentDate = new Date();
        const sixtyDaysAgo = new Date(currentDate - SIXTY_DAYS_IN_MS);

        for (const user of users) {
            const triggeredMessage = await TriggeredMessage.findOne({ messageNumberId: 3, user: user.userid });

            if (triggeredMessage && triggeredMessage.active) {
                const customers = await Customer.find({ user: user.userid });

                const atRiskCustomers = customers.filter(customer => {
                    const lastTransactionDate = new Date(parseInt(customer.lastTransactionDate));
                    return lastTransactionDate < sixtyDaysAgo && !customer.atRisk;
                });

                for (const customer of atRiskCustomers) {
                    await Customer.updateOne(
                        { customerid: customer.customerid },
                        { $set: { atRisk: true } }
                    );

                    await sendMessageToAtRiskCustomer(user, customer, triggeredMessage);
                }

                const numberOfMessagesSent = atRiskCustomers.length;

                await User.updateOne(
                    { userid: user.userid },
                    {
                        $inc: {
                            totalMessagesSent: numberOfMessagesSent,
                            monthlyMessagesLeft: -numberOfMessagesSent
                        }
                    }
                );
            }
        }
    } catch (error) {
        console.error(error);
    }
}



cron.schedule('0 9 * * *', async () => {
    findBirthdayUsersAndCustomers();
    findAtRiskUsersAndCustomers();
 });





if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
      return handle(req, res);
  });
}

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
  origin: db.localLink,
  methods: ["GET", "POST", "PUT", "DELETE"]
}});

// Socket.io connection
io.on('connection', (socket) => {
console.log('New user connected');

socket.on('message', (data) => {
    // Handle incoming messages here
    console.log(data);
});

socket.on('disconnect', () => {
    console.log('User disconnected');
});

socket.on('error', (error) => {
  console.error('Socket Error:', error);
});

});

setInterval(() => {
  io.emit('time', new Date().toTimeString());
}, 1000);


 // Error handling middleware (Example)
 app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const serverPort = 5000;
const PORT = process.env.PORT || serverPort;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

});









//Method Override Middleware
//app.use(methodOverride('_method'))

/*
app.use((req, res, next) => {
  console.log('Before session middleware: ', req.session);
  next();
});

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use((req, res, next) => {
  console.log('After session middleware: ', req.session);
  next();
});


app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['dfgrshdfxfdshergfdsvccgdfcxfbv']
  })
);

*/

//Passport middleware
//app.use(passport.initialize());
//app.use(passport.session());