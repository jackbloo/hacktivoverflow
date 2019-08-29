const question = require('../models/question')
const votes = require('../models/vote')

class questionController {
    static createQuestion(req, res, next) {
        let {
            title,
            pertanyaan,
            tagku
        } = req.body
        let UserId = req.decode.id
        question.create({
            title,
            pertanyaan,
            UserId
        }).then(data1 => {
            let id = data1._id
            return question.findByIdAndUpdate(id, {
                    $addToSet: {
                        tags: {
                            $each: tagku
                        }
                    }
                }, {
                    new: true,
                    runValidators: true
                })
                .then(data => {
                    res.status(200).json({
                        data
                    })
                })
        }).catch(next)
    }

    static deleteQuestion(req, res, next) {
        let {
            id
        } = req.params
        question.findByIdAndDelete(id)
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static updateQuestion(req, res, next) {
        let {
            id
        } = req.params
        let {
            tagku
        } = req.body
        let updateData = {}
        req.body.title && (updateData.title = req.body.title)
        req.body.pertanyaan && (updateData.pertanyaan = req.body.pertanyaan)
        question.findByIdAndUpdate(id, updateData, {
                new: true
            })
            .then(data2 => {
                return question.findByIdAndUpdate(id, {
                        $set: {
                            tags: []
                        }
                    }, {
                        new: true,
                        runValidators: true
                    })
                    .then(data1 => {
                        return question.findByIdAndUpdate(id, {
                                $addToSet: {
                                    tags: {
                                        $each: tagku
                                    }
                                }
                            }, {
                                new: true,
                                runValidators: true
                            })
                            .then(data => {
                                res.status(200).json({
                                    data
                                })
                            })
                    })
            }).catch(next)
    }


    static getQuestions(req, res, next) {
        question.find().populate('UserId').sort({
                createdAt: -1
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getMyQuestion(req, res, next) {
        let {
            id
        } = req.decode
        question.find({
                UserId: id
            }).sort({
                createdAt: -1
            }).populate('UserId')
            .then(data => {
                res.status(200).json({
                    data
                })
            }).catch(next)
    }

    static getOneQuestion(req, res, next) {
        let {
            id
        } = req.params
        question.findById(id).populate({
                path: 'answer',
                populate: {
                    path: 'UserId'
                },
                options: {
                    sort: {
                        createdAt: -1
                    }
                }
            })
            .then(data => {
                res.send(data)
            }).catch(next)
    }

    static upvote(req, res, next) {
        let UserId = req.decode.id
        let {
            id
        } = req.params
        question.findOne({
                _id: id,
                upvote: UserId
            })
            .then(data => {
                if (data) {
                    throw {
                        httpStatus: 400,
                        message: "You can't Upvote"
                    }
                } else {
                    return question.findOne({
                        _id: id,
                        downvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return question.findByIdAndUpdate(id, {
                        $pull: {
                            downvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return question.findByIdAndUpdate(id, {
                        $push: {
                            upvote: UserId
                        }
                    }, {
                        new: true
                    })
                }
            })
            .then(results => {
                res.status(200).json(results)
            })
            .catch(next)

    }
    static downvote(req, res, next) {
        let UserId = req.decode.id
        let {
            id
        } = req.params
        question.findOne({
                _id: id,
                downvote: UserId
            })
            .then(data => {
                if (data) {
                    throw {
                        httpStatus: 400,
                        message: "You can't Upvote"
                    }
                } else {
                    return question.findOne({
                        _id: id,
                        upvote: UserId
                    })
                }
            })
            .then(response => {
                if (response) {
                    return question.findByIdAndUpdate(id, {
                        $pull: {
                            upvote: UserId
                        }
                    }, {
                        new: true
                    })
                } else {
                    return question.findByIdAndUpdate(id, {
                        $push: {
                            downvote: UserId
                        }
                    }, {
                        new: true
                    })
                }
            })
            .then(results => {
                res.status(200).json(results)
            })
            .catch(next)

    }

    static createTags(req, res, next) {
        let {
            id,
            tagku
        } = req.body
        question.findByIdAndUpdate(id, {
                $set: {
                    tags: []
                }
            }, {
                new: true,
                runValidators: true
            })
            .then(data1 => {
                return question.findByIdAndUpdate(id, {
                        $addToSet: {
                            tags: {
                                $each: tagku
                            }
                        }
                    }, {
                        new: true,
                        runValidators: true
                    })
                    .then(data => {
                        res.status(200).json({
                            data
                        })
                    })
            }).catch(next)
    }

    static getTagsbyName(req, res, next) {
        let tagku = req.params.tag
        question.find().populate('UserId')
            .then(data => {
                let filtered = data.filter(el => {
                    return el.tags.includes(tagku)
                })
                res.json({
                    filtered
                })
            }).catch(next)
    }

    static changeTopTen(req, res, next) {
        question.find().populate('UserId')
            .then((data => {
                let top10 = []
                for (let i = 0; i < data.length; i++) {
                    let topData = {}
                    topData['question'] = data[i].pertanyaan
                    topData['vote'] = data[i].upvote.length - data[i].downvote.length
                    topData['User'] = data[i].UserId.name
                    top10.push(topData)
                }
                let top10Ku = top10.sort((a, b) => {
                    return b.vote - a.vote
                })
                let top3 = top10Ku.splice(0, 3)
                let id = '5d6759e47b8e8532fb2d7d16'
                return votes.findByIdAndUpdate(id, {
                        $set: {
                            topvotes: []
                        }
                    }, {
                        new: true,
                        runValidators: true
                    })
                    .then(data2 => {
                        return votes.findByIdAndUpdate(id, {
                                $addToSet: {
                                    topvotes: {
                                        $each: top3
                                    }
                                }
                            }, {
                                new: true,
                                runValidators: true
                            })
                            .then(response => {
                                res.status(200).json(response)
                            })
                    })
            })).catch(next)

    }

    static createVotes(req, res, next) {
        let {
            name
        } = req.body
        votes.create({
                name
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
    }

    static getVotes(req, res, next) {
        let id = '5d6759e47b8e8532fb2d7d16'
        votes.findById(id)
            .then(data => {
                let top10 = data.topvotes
                res.status(200).json({
                    top10
                })
            })
    }


}

module.exports = questionController