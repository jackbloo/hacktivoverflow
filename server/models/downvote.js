const mongoose = require('mongoose')
const Schema = mongoose.Schema

const downvoteSchema = new Schema({
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

const downvote = mongoose.model('downvote', downvoteSchema)

module.exports = downvote