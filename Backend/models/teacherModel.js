const mongoose = require('mongoose');
const {Schema} = mongoose;

const teacherSchema = Schema({
    nom: String,
    prenom: String,
    email: String
})

const teacherModel = mongoose.model('Teacher', teacherSchema)

module.exports= teacherModel;