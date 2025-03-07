const User = require("../schema/userSchema")


const findUser = async(perameters)=>{
    try {
        const result = await User.findOne({...perameters})
        return result
    } catch (error) {
        console.log(error)
    }
}

const registerUser = async(perameters)=>{
    try {
        const result = await User.create(perameters)
        console.log('result',result)
        return result
    } catch (error) {
        console.log('db error',error)
    }
}

module.exports = {
    findUser,
    registerUser
}