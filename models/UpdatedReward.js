const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UpdatedRewardSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    user:{
        type: String,
        required: true
    },
    userMemberstackId :{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    rewardNameBefore:{
        type: String,
        required: true
    },
    rewardNameAfter:{
        type: String,
        required: true
    },
    rewardCostBefore:{
        type: Number,
        required: true
    },
    rewardCostAfter:{
        type: Number,
        required: true
    },
    rewardTermsBefore:{
        type: String,
    },
    rewardTermsAfter:{
        type: String,
    },
    rewardValueBefore:{
        type: String,
        required: true
    },
    rewardValueAfter:{
        type: String,
        required: true
    },
    rewardActiveBefore:{
        type: Boolean,
        required: true
    },
    rewardActiveAfter:{
        type: Boolean,
        required: true
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    rewardid: {
        type: String,
        required: true
    },
    reward: {
        type: Schema.Types.ObjectId,
        ref: 'rewards'
    }
});

mongoose.model('updatedrewards', UpdatedRewardSchema)