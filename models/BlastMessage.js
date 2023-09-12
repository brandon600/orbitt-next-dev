const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BlastMessageSchema = new Schema ({
    _id: Schema.Types.ObjectId,
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
    textMessage:{
        type: String,
        required: true
    },
    messageNumberId: {
        type: Number,
        required: true
    },
    customerList:{
        type: Array,
        required: true
    },
    blastid:{
        type: String,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    customersReceived: [{ type: Schema.Types.ObjectId, ref: 'customers' }]
});

mongoose.model('blastmessages', BlastMessageSchema)