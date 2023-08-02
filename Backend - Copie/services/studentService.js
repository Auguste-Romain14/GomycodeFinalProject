const studentModel = require('../models/studentModel')

const index = async (res)=>{

  try {
    const data = await studentModel.find();
    return data;
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }
}

const find = async (id, res)=>{

  try {
    const data = await studentModel.findById(id)
    return data;
  } catch (error) {
    res.status(error.status).json({error: error});
  }

}

const findByEmail = async (email, res)=>{

  try {
    const data = await studentModel.find({email: email});
    return data;
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const store = async (body, res)=>{

  try {

    const studentSchema = new studentModel(body);
    await studentSchema.save();
    return studentSchema;
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const update = async (id, body, res)=>{

  try {
    await studentModel.findByIdAndUpdate(id, body);
    return true;
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const destroy = async (id, res)=>{

  try {
    await studentModel.findByIdAndDelete(id);
    return true
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

module.exports= {index, find, store, update, destroy}