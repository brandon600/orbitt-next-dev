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


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"]
} });


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
});

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
require('./models/UpdatedReward');
require('./models/TriggeredMessage');
require('./models/BlastMessage');
require('./models/SentMessage');
require('./models/Visit');
require('./models/UpdatedCustomer');

const Customer = mongoose.model('customers');
const User = mongoose.model('users');
const Reward = mongoose.model('rewards');
const OutboundReward = mongoose.model('outboundRewards');
const UpdatedReward = mongoose.model('updatedrewards');
const TriggeredMessage = mongoose.model('triggeredmessages');
const BlastMessage = mongoose.model('blastmessages');
const SentMessage = mongoose.model('sentmessages');
const Visit = mongoose.model('visits');
const UpdatedCustomer = mongoose.model('updatedcustomers');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['dfgrshdfxfdshergfdsvccgdfcxfbv']
  })
);


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
  req.io = io;
  next();
})

require('./routes/authRoutes')(app);
require('./routes/customerInfoRoutes')(app);
require('./routes/rewardRoutes')(app);
require('./routes/messageRoutes')(app);
require('./routes/visitRoutes')(app);
require('./routes/dashboardRoutes')(app);



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
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});