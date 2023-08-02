const cursusModel = require('../models/cursusModel');

const index = async (res) => {
    try {
        const data = await cursusModel.find();
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const find = async (id, res) => {
    try {
        const data = await cursusModel.findById(id);
        return data;
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const store = async (body,res) => {
    try {
        const cursusSchema = new cursusModel(body);
        await cursusSchema.save();
        return cursusSchema;
    } catch (error) {
        res.status(error.status).json({error: error.message});
    }
}

const update = async (id, body, res) => {
    try {
        await cursusModel.findByIdAndUpdate(id, body);
        return true
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const destroy = async (id, res) => {
    try {
        await cursusModel.findByIdAndDelete(id);
        return true
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

module.exports= {destroy, update, store, find, index};