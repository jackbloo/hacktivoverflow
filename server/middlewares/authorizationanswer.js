const answer = require('../models/answer')

function authorization(req, res, next) {
    let UserId = req.decode.id
    let {id} = req.params
    answer.find({UserId, _id: id})
    .then(data => {
        if(data.length == 0){
            res.status(401).json({
                message: 'You are not authorized'
            })
        } else {
            next()
        }
    }).catch(next)
    
}

module.exports = authorization;