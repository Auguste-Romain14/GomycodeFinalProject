const scoreService = require('../services/scoreService');

const index = async (req, res) => {
    try {
        const data = await scoreService.index(res);
        res.status(200).json(data)
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (req, res) => {
    try {
        const data = await scoreService.find(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (req, res) => {
    try {
        const data = await scoreService.store(req.body, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const update = async (req, res) => {
    try {
        const data = await scoreService.update(req.params.id, req.body, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (req, res) => {
    try {
        const data = await scoreService.destroy(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports = {index, find, update, store, destroy}