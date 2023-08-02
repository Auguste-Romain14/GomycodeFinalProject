const cursusService = require('../services/cursusService');

const index = async (req, res) => {
    try {
        const data = await cursusService.index(res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (req, res) => {
    try {
        const data = await cursusService.find(req.params.i, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (req, res) => {
    try {
        const data = await cursusService.store(req.body, res)
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const update = async (req, res) => {
    try {
        const data = await cursusService.update(req.params.id, res.body, res)
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (req, res) => {
    try {
        const data = await cursusService.destroy(req.params.id, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports= {index, find, store, update, destroy};
