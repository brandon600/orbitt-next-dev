const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CustomerSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    customerid:{
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
    lastTransactionDate:{
        type: String
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    fullName:{
        type: String,
        required: true
    },
    areaCodeNumber: {
        type: String,
        required: true
    },
    phoneNumber1:{
        type: String,
        required: true
    },

    fullPhoneNumber: {
        type: String
    },
    email:{
        type: String,
    },
    rewardNumber:{
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    atRisk: {
        type: Boolean,
        required: true
    },
    totalVisits: {
        type: Number,
        required: true
    },
    starsEarned: {
        type: Number,
        required: true
    },
    rewardsRedeemed: {
        type: Number,
        required: true
    },
    signUpDate: {
        type: String
    },
    birthdayMonth: {
        type: String
    },
    birthdayDay: {
        type: String
    },
    birthdayYear: {
        type: String
    },
    fullBirthday: {
        type: String
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    visits: [{ type: Schema.Types.ObjectId, ref: 'visits' }],
    receivedBlasts: [{ type: Schema.Types.ObjectId, ref: 'blastmessages' }],
    updates: [{ type: Schema.Types.ObjectId, ref: 'updatedcustomers' }]
});

mongoose.model('customers', CustomerSchema)