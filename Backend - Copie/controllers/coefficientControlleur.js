const coefficientService = require('../services/coefficientService');

const index = async (req, res) => {
    try {
        const data = await coefficientService.index(res);
        res.status(200).json(data);
    } catch (error) {
        res.status(err.status).json({error: error.message})
    }
}

const find = async (req, res) => {
    try {
        const data = await coefficientService.find(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (req, res) => {
    try {
        const data = await coefficientService.store(req.body, res)
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error : error.message})
    }
}

const update = async (req, res) => {
    try {
        const data = await coefficientService.update(req.params.id, req.body, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error : error.message})
    }
}

const destroy = async (req, res) => {
    try {
        const data = await coefficientService.destroy(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports = {index, find, update, store, destroy}