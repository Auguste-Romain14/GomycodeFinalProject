const mongoose = require('mongoose');
const {Schema} = mongoose;

const cursusSchema = Schema({
    libelle: String,
    description: String
})

const cursusModel = mongoose.model('Cursus', cursusSchema);

module.exports= cursusModel;