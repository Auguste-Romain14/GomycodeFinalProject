const coefficientModel = require('../models/coefficientModel');

const index = async (res) => {
    try {
        const data = await coefficientModel.find().populate("filiereId");
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (id, res) => {
    try {
        const data = await coefficientModel.findById(id);
        return data
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (body, res) => {
    try {
        const coefficientSchema = new coefficientModel(body);
        await coefficientSchema.save()
        return coefficientSchema;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const update = async (id, body, res) => {
    try {
        await coefficientModel.findByIdAndUpdate(id, body);
        return true;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (id,res) => {
    try {
        await coefficientModel.findByIdAndDelelete(id);
        return true
    } catch (error) {
        res.status(erra.status).json({error: error.message})
    }
}

module.exports = {index, find, store, update, destroy};