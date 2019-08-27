const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerSchema = new Schema({
    jawaban: {
        type: String,
        required: true
    },
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'questions'
    },
    upvote: [{type: Schema.Types.ObjectId, ref: 'users'}],
    downvote: [{type: Schema.Types.ObjectId, ref: 'users'}],
}, {
    timestamps: true,
    versionKey: false
})

const answers = mongoose.model('answers', answerSchema)

module.exports = answers