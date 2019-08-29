const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')
const authentication = require('../middlewares/authentication')
const CronJob = require('cron').CronJob;
const question = require('../models/question')
const votes = require('../models/vote')

router.use(authentication)
router.get('/topTen', questionController.getVotes)
// router.post('/create', questionController.createVotes)

new CronJob('0 0 * * 0', function () {
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
    })).catch(err => {
        console.log(err)
    })
}, null, true, 'Asia/Jakarta');


module.exports = router;