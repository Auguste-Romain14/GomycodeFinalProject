const teacherService = require('../services/teacherService');

const index = async (req, res) => {
    try {
        const data = await teacherService.index(res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (req, res) => {
    try {
        const data = await teacherService.find(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (req, res) => {
    try {
        const data = await teacherService.store(req.body, res)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const update = async (req, res) => {
    try {
        const data = await teacherService.update(req.params.id, req.body, res)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (req, res) => {
    try {
        const data = await teacherService.destroy(req.params.id, res);
        res.status(200).json(data)
    } catch (error) {
        res.status(error.status).json({error: error.mesage})
    }
}

module.exports = {index, find, store, update, destroy}