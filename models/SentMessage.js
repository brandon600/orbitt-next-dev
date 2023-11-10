const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const SentMessageSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    messageNumberId: {
        type: Number,
    },
    user:{
        type: String,
        required: true
    },
    userMemberstackId:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    messageTitle:{
        type: String,
        required: true
    },
    messageContent:{
        type: String,
        required: true
    },
    messageDelay:{
        type: Number,
        required: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    customerReceived: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    },
    customersReceived: [{ type: Schema.Types.ObjectId, ref: 'customers' }]
});

mongoose.model('sentmessages', SentMessageSchema)