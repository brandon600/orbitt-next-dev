const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const TriggeredMessageSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    messageNumberId: {
        type: Number,
        required: true
    },
    userMemberstackId:{
        type: String,
        required: true
    },
    user:{
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
    messageSubtitle:{
        type: String,
        required: true
    },
    textMessageDefaultTextStart:{
        type: String,
    },
    textMessageCustomText:{
        type: String,
    },
    textMessageDefaultTextEnd1:{
        type: String,
    },
    textMessageDefaultTextEnd2:{
        type: String,
    },
    messageDelay:{
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
        required: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

mongoose.model('triggeredmessages', TriggeredMessageSchema)