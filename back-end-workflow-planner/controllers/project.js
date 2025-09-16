const Project = require('../models/Project')

const create = async (req, res) => {
    try {
        const createdProject = await Project.create(req.body)
        if (createdProject)
            return res.status(201).json(createdProject)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const index = async (req, res) => {
    try {
        const projects = await Project.find()
        if (projects)
            return res.status(200).json(projects)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const details = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id)
        if (project)
            return res.status(200).json(project)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body)
        if (project)
            return res.status(200).json(project)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id)
        if(project)
            return res.status(200).json(project)
        else
            return res.sendStatus(404)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = {
    create,
    index,
    details,
    update,
    deleteProject
}