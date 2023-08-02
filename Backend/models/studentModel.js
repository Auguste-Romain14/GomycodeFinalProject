const mongoose = require('mongoose')
const { Schema } = mongoose;

const studentSchema = Schema({
    nom: String,
    prenom: String,
    matricule: Number,
    age: Number,
    sexe: String
    // email: {
    //     type: String,
    //     required: true
    // },
});

const studentModel = mongoose.model('Student', studentSchema);
module.exports = studentModel;

