const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    date:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    memberstackId: {
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    totalMessagesSent: {
        type: Number
    },
    monthlyMessagesLeft: {
        type: Number,
        required: true
    },
    messagingPhoneNumber: {
        type: String
    },
    termsConditions: {
        type: String
    },
    userReceivedMessages: {
        type: Array
    }
});

mongoose.model('users', UserSchema)