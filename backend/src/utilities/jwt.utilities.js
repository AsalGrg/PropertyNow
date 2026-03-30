const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

function createJwtToken(id){
    return jwt.sign({
        id: id
        // token valid for 30 minutes
    }, process.env.JWT_SECRET_KEY, {expiresIn: '30m'})
}

function isTokenValid(req){

    const token = req.cookies.token;
    let decoded= null
    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decoded)
        return decoded;
    }catch{
        return decoded;
    }
}

module.exports= {createJwtToken, isTokenValid}