const scoreModel = require('../models/scoreModel');

const index = async (res) => {
    try {
        const data = await scoreModel.find();
        return data
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (id, res) => {
    try {
        const data = await scoreModel.findById(id);
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (body,res) => {
    try {
        const scoreSchema = new scoreModel(body);
        await scoreSchema.save()
        return scoreSchema;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const update = async (id, body, res) => {
    try {
        await scoreModel.findByIdAndUpdate(id, body);
        return true;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (id, res) => {
    try {
        await scoreModel.findByIdAndDelete(id)
        return true;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports = {index, find, update, store, destroy}