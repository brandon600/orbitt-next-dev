const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const RewardSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    rewardid: {
        type: String,
        required: true
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
    rewardName:{
        type: String,
        required: true
    },
    rewardCost:{
        type: Number,
        required: true
    },
    rewardTerms:{
        type: String,
    },
    rewardValue:{
        type: String,
        required: true
    },
    rewardActive:{
        type: Boolean,
        requried: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    redemptions: {
        type: Number
    },
    updates: [{ type: Schema.Types.ObjectId, ref: 'updatedrewards'}]
});

mongoose.model('rewards', RewardSchema)