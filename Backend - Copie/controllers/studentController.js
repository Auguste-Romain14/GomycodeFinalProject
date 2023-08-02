const studentService = require('../services/studentService')

const index = async (req, res)=>{

  try {
    const data = await studentService.index(res);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const find = async (req, res)=>{

  try {

    const data = await studentService.find(req.params.id, res);
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(403).json({error: error});
  }

}

const store = async (req, res)=>{

  try {
    const data = await studentService.store(req.body,res);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const update = async (req, res)=>{

  try {
    const data = await studentService.update(req.params.id, req.body,res);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.status).json({error: error.message});
  }

}

const destroy = async (req, res)=>{

  try {
    const data = await studentService.destroy(req.params.id,res);
    res.status(200).json(data);
  } catch (error) {
    console.log(error)
    res.status(error.status).json({error: error.message});
  }

}

module.exports= {index, find, store, update, destroy}