const {
    encrypt
} = require('../helpers/hash')
const {
    decrypt
} = require('../helpers/hash')
const {
    generateToken
} = require('../helpers/token')
require('dotenv').config()
const User = require('../models/user')

class UserController {
    static signIn(req, res, next) {
        const {
            email,
            password
        } = req.body
        User.findOne({
            email
        }).then(user => {
            if (user) {
                if (decrypt(password, user.password)) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({
                        token
                    })
                }
            } else {
                res.status(404).json({
                    message: 'user not found'
                })
            }
        }).catch(next)
    }
    static register(req, res, next) {
        let {
            email,
            password,
            name
        } = req.body
        User.create({
                name,
                email,
                password: encrypt(password),
            }).then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static addTags(req, res, next) {
        let {
            tagKu
        } = req.body
        let {
            id
        } = req.decode

        User.findByIdAndUpdate(id, {
                $set: {
                    myTags: []
                }
            }, {
                new: true,
                runValidators: true
            })
            .then(data => {
                return User.findByIdAndUpdate(id, {
                        $addToSet: {
                            myTags: {
                                $each: tagKu
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
        // let filtered = tagKu.filter((el, i) => {
        //     return tagKu.indexOf(el) !== i
        // })
        // if (filtered.length == 0) {
        //     User.findById(id)
        //         .then(data => {
        //             let filtered1 = data.myTags.filter(el => {return tagKu.indexOf(el) >= 0})
        //             if(filtered1.length == 0){
        //                 User.findByIdAndUpdate(id, {$push:{myTags:{$each:tagKu}}})
        //                 .then(data2 => {
        //                     res.status(200).json({
        //                         data2
        //                     })
        //                 })
        //             }else{
        //                 res.status(400).json({
        //                     message:'Please dont input same tag name'
        //                 })
        //             }
        //         })
        // } else {
        //     res.status(400).json({
        //         message:'Please dont input same tag name'
        //     })
        // }

    }

    static getMyTags(req,res,next){
        let {id} = req.decode
        User.findById(id)
        .then(data => {
            let tags = data.myTags
            res.status(200).json({
                tags
            })
        }).catch(next)
    }
}

module.exports = UserController;