const res = require('express/lib/response')
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')



const usersController = {}

usersController.register = (req,res) =>{
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt)=>{
            bcryptjs.hash(user.password,salt)
                .then((encrypted)=>{
                    user.password = encrypted
                    user.save()
                        .then((user)=>{
                            res.json(user)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
        })
    // user.save()
    //     .then((user)=>{
    //         res.json(user)
    //     })
    //     .catch((err)=>{
    //         res.json(err)
    //     })


    /*
        const user = new User()
        user.username = body.username
        user.email = body.email
        user.password = body.password
    */
}

usersController.login = (req,res) =>{
    const body = req.body
    User.findOne({email : body.email})
        .then((user)=>{
            if(!user){
                res.json({
                    errors : 'Invalid email or password'
                })
            }
            // res.json(user)
            bcryptjs.compare(body.password,user.password)
                .then((match)=>{
                    if(match){
                        // res.json(user)
                        const tokenData = {
                            _id : user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData,'dct123',{ expiresIn : '2d'})
                        res.json({
                            token: `Bearer ${token}`
                            // token: token
                        })
                    }else{
                        res.json({errors : 'Invalid email or password'})
                    }
                })
        })
}

usersController.account = (req,res) =>{
    // res.json({ notice : 'user account info'})
    res.json(req.user)
}


module.exports = usersController