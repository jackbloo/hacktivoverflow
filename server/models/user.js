const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    myTags: []
},{
    timestamps: true,
    versionKey: false
})

const users = mongoose.model('users', userSchema)

module.exports = users
