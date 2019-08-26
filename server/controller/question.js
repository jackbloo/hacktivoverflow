const question = require('../models/question')

class questionController {
    static createQuestion(req, res, next) {
        let {title, pertanyaan} = req.body
        let UserId = req.decode.id
        question.create({
            title,
            pertanyaan,
            UserId
        }).then(data => {
            res.status(201).json({
                data
            })
        }).catch(err)
    }

    static deleteQuestion(req, res, next) {
        let {id} = req.params
        question.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static updateQuestion(req, res, next) {
        let {id} = req.params
        let updateData = {}
        req.body.title && (updateData.title = req.body.title)
        req.body.pertanyaan && (updateData.pertanyaan = req.body.pertanyaan)
        question.findByIdAndUpdate(id,updateData, {new:true})
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static getQuestions(req, res, next) {
        question.find()
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getMyQuestion(req, res, next) {
        let {id} = req.decode
        question.find({UserId:id})
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }
}

module.exports = questionController