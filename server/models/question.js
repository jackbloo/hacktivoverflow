const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pertanyaan: {
        type: String,
        required: true,
    },
    upvote: [{type: Schema.Types.ObjectId, ref: 'users'}],
    downvote: [{type: Schema.Types.ObjectId, ref: 'users'}],
    UserId: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    answer:[{type: Schema.Types.ObjectId, ref: 'answers'}],
    tags: []
},{
    timestamps: true,
    versionKey: false
})

const questions = mongoose.model('questions', questionSchema)

module.exports = questions