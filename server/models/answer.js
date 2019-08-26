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
    }
}, {
    timestamps: true,
    versionKey: false
})

const answers = mongoose.model('answers', answerSchema)

module.exports = answers