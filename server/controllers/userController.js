const knex = require('knex')
const config = require('../knexfile')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = knex(config.development)

const createToken = (_id)=> {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res)=> {

    const { email, password } = req.body

    try{

        const user = await db('users').where({email}).first()

        if(!user){
            throw Error('Incorrect Email')
        }
    
        const match = await bcrypt.compare(password, user.password)
    
        if(!match){
            throw Error('Incorrect Password')
        }

        const token = createToken(user.id)

        res.status(200).json({email, token})
    
    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

const signupUser = async (req, res)=> {
    console.log("Hello")
    const { email, password } = req.body

    try{

        if(!email || !password) {
            throw Error("All Fields must be Filled")
        }
        if(!validator.isEmail(email)){
            throw Error("Email is not Valid")
        }
    
        const exists = await db('users').where({email}).first()
    
        if(exists){
            throw Error('Email Already in use')
        }
    
        if(!validator.isStrongPassword(password)){
            throw Error("Password is not strong enough")
        }
    
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
    
        const [ id ]  = await db('users').insert({ email, password: hash})

        const token = createToken(id)

        res.status(200).json({email, token})

    } catch(error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    loginUser,
    signupUser
}