const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')
const authentication = require('../middlewares/authentication')
const CronJob = require('cron').CronJob;

router.use(authentication)
router.get('/topTen', questionController.getVotes)
// router.post('/create', questionController.createVotes)

new CronJob('0 0 * * 0', function () {
    router.patch('/topTen', questionController.changeTopTen)
}, null, true, 'Asia/Jakarta');


module.exports = router;