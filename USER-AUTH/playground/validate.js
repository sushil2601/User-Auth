// const validator = require('validator')
// const isEmail = require('validator/lib/isEmail')

// // console.log(validator.isEmail('sushil@gmail.com'))
// console.log(isEmail('sushil@gmail.com'))


// const bcryptjs = require('bcryptjs')
// const password = 'secret123'

// bcryptjs.genSalt()
//     .then((salt)=>{
//         console.log('salt',salt)
//         bcryptjs.hash(password,salt)
//             .then((encrypted)=>{
//                 console.log('encrypted',encrypted)
//             })
//     })

// const bcryptjs = require('bcryptjs')

// const encrypted = '$2a$10$Je4ZCDcUBCcR8WjDY3lcD.aIV1npW/A9dsyh46aQRiCu5HHYI/Nii'
// const inputPass = 'secret123'

// bcryptjs.compare(inputPass,encrypted)
//     .then((match)=>{
//         console.log(match)
//     })


// const jwt = require('jsonwebtoken')

// const data = {
//     id : 1,
//     name : 'steve'
// }

// const token = jwt.sign(data,'dct123',{ expiresIn: '10'}) // if 60 - means 60sec, if '60' - means 60 msec
// console.log(token)

const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN0ZXZlIiwiaWF0IjoxNjUzNDY0MzI2LCJleHAiOjE2NTM0NjQzMjZ9.LrZsb5fXZu88SAJGzPzjVdEGNzxZjdxUCXe5_JlDJnk'

// const data = jwt.verify(token,'dct123')

// console.log(data)

let data
try{
    data = jwt.verify(token,'dct123')
    console.log(data)
}catch(e){
    console.log(e.message)
}

