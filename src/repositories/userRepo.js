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
        const message = Object.values(error.errors).map(value => value.message);
        console.log(message)
    }
}

module.exports = {
    findUser,
    registerUser
}