const mongoose = require('mongoose')
const Schema = mongoose.Schema

const upvoteSchema = new Schema({
    UserId: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    answerId: {
        type:Schema.Types.ObjectId, ref: 'answers'
    },
    questionId: {
        type:Schema.Types.ObjectId, ref: 'questions'
    }
},{
    timestamps: true,
    versionKey: false
})

const upvote = mongoose.model('upvote', upvoteSchema)

module.exports = upvote