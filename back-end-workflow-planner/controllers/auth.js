const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const SECRET = process.env.SECRET

exports.register = async(req, res)=>{
    try {
        console.log(req.body)
        const {username, password} = req.body

        const existing = await User.findOne({username})
        if(existing) {
            return res.status(400).json({message: 'Username already exists'})
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({username, password: passwordHash})
        await newUser.save()

        const payload = {
            id: newUser._id,
            username: newUser.username
        }

        const token = jwt.sign(payload, SECRET, {expiresIn: '1d'})

        return res.status(201).json({message: 'User registered successfully'})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
}

exports.login = async(req,res) =>{
    try {
        const {username, password} = req.body

        const user = await User.findOne({username})
        if(!user)
            return res.status(401).json({message: 'Invalid username or password'})

        const isValid = await user.validatePassword(password)
        if(!isValid)
            return res.status(401).json({message: 'Invalid username or password'})

        const payload = {
            id: user._id,
            username: user.username
        }

        const token = jwt.sign(payload, SECRET, {expiresIn: '1d'})
        res.json({token})
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}