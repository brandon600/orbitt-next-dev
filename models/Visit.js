const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const VisitSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    user:{
        type: String,
        required: true
    },
    userMemberstackId:{
        type: String,
        required: true
    },
    visitid:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    customerid:{
        type: String,
        required: true
    },
    customerName:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    visitType: {
        type: String,
        required: true
    },
    currentRewardsEarned: {
        type: Number,
        required: true
    },
    currentRewardsRedeemed: {
        type: Number,
        required: true
    },
    currentRewardsName: {
        type: String,
        required: false
    },
    currentRewardsValue: {
        type: String,
        required: false
    },
    visitDetails: {
        type: String
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    },
    redeemedReward: {
        type: Schema.Types.ObjectId,
        ref: 'rewards',
        required: false
    },
});

mongoose.model('visits', VisitSchema);