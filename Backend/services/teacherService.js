const teacherModel = require('../models/teacherModel');

const index = async (res) => {
    try {
        const data = await teacherModel.find();
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message});        
    }
}

const find = async (id, res) => {
    try {
        const data = await teacherModel.findById(id);
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (body, res) => {
    try {
        const teacherSchema = new teacherModel(body)
        await teacherSchema.save();
        return body;
    } catch (error) {
        res.statut(error.status).json({error: error.message})
    }
}

const update = async (id, body, res) => {
    try {
        await teacherModel.findByIdAndUpdate(id, body);
        return true;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (id, res) => {
    try {
        await teacherModel.findByIdAndDelete(id)
        return true
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports = {index, find, update, store, destroy};