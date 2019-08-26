const express = require('express')
const router = express.Router()
const downvoteController = require('../controller/downvote')

router.post('/create', downvoteController.createdownvote)
router.delete('/:id', downvoteController.deletedownvote)


module.exports = router;