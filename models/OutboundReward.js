const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const OutboundRewardSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    user:{
        type: String,
        required: true
    },
    userMemberstackId:{
        type: String,
        required: true
    },
    rewardNumberId: {
        type: Number
    },
    date:{
        type: String,
    },
    rewardName:{
        type: String,
        required: true
    },
    rewardValue:{
        type: Number,
        required: true
    },
    rewardDescription:{
        type: String,
        requried: true
    },
    rewardActive:{
        type: Boolean,
        requried: true
    },
    rewardNote:{
        type: String,
        requried: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
});

mongoose.model('outboundrewards', OutboundRewardSchema)