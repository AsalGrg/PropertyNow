const UserModel = require('../models/user.model');
const { isTokenValid } = require('./jwt.utilities');

async function getUserData(req){

    const user = null
    const token = req.cookies.token

    const decoded= isTokenValid(token);
    
    if(!decoded){
        return user;
    }
    
    user= await UserModel.find({
        _id: decoded.id
    })

    return user;
    await UserModel
}

module.exports= getUserData