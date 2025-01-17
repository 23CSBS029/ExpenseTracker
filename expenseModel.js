const mongoose = require('mongoose')
const {v4 : uuidv4} = require('uuid')

const expenseSchema = new mongoose.Schema( {
    uuid : {
        type : String,
        unique : true,
        default : () => uuidv4()
    },
    title : {
        type : String,
        required : true,
    },
    amount : {
        type : Number,
    },
    description : {
        type : String,
        required : true,
    }
})

const expenseModel = new mongoose.model ( 'koorthik', expenseSchema );

module.exports = expenseModel;