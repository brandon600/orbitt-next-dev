const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UpdatedCustomerSchema = new Schema ({
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
    firstNameBefore:{
        type: String,
        required: true
    },
    firstNameAfter: {
        type: String,
        required: true
    },
    lastNameBefore:{
        type: String,
        required: true
    },
    lastNameAfter: {
        type: String,
        required: true
    },
    fullNameBefore:{
        type: String,
        required: true
    },
    fullNameAfter: {
        type: String,
        required: true
    },
    phoneNumberBefore:{
        type: String,
        required: true
    },
    phoneNumberAfter:{
        type: String,
        required: true
    },
    rewardNumberBefore:{
        type: Number,
        required: true
    },
    rewardNumberAfter:{
        type: Number,
        required: true
    },
    fullBirthdayBefore: {
        type: String
    },
    fullBirthdayAfter: {
        type: String
    },
    userClass: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    }
});

mongoose.model('updatedcustomers', UpdatedCustomerSchema)