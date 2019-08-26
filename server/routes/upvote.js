const express = require('express')
const router = express.Router()
const upvoteController = require('../controller/upvote')

router.post('/create', upvoteController.createupvote)
router.delete('/:id', upvoteController.deleteupvote)


module.exports = router;