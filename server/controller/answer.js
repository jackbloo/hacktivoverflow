const answer = require('../models/answer')

class answerController {
    static createanswer(req, res, next) {
        let {
            jawaban, questionId
        } = req.body
        let UserId = req.decode.id
        answer.create({
            jawaban,
            UserId,
            questionId
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(err)
    }

    static deleteanswer(req, res, next) {
        let {
            id
        } = req.params
        answer.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static updateanswer(req, res, next) {
        let {
            id
        } = req.params
        let updateData = {}
        req.body.jawaban && (updateData.jawaban = req.body.jawaban)
        answer.findByIdAndUpdate(id, updateData, {
                new: true
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static getanswers(req, res, next) {
        answer.find()
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getMyanswer(req, res, next) {
        let {
            id
        } = req.decode
        answer.find({
                UserId: id
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }
}

module.exports = answerController