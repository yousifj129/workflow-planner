const Item = require('../models/Item')

const create = async(req,res) =>{
    try {
        const newItem = await Item.create(req.body)
        return res.status(201).json(newItem)
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const index = async(req,res)=>{
    try {
        const items = await Item.find()
        if(items)
            return res.status(200).json(items)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}

const details = async(req,res)=>{
    try {
        const item = await Item.findById(req.params.id)
        if(item)
            return res.status(200).json(item)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({error: err.message})        
    }
}

const update = async(req,res)=>{
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body)
        if(item)
            return res.status(200).json(item)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({error: err.message})        
    }
}

const deleteItem = async(req,res) =>{
    try {
        const item = await Item.findByIdAndDelete(req.params.id)
         if(item)
            return res.status(200).json(item)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
}
module.exports = {create, index, details, update, deleteItem}