const mongoose = require('mongoose');
const {Schema} = mongoose;

const coefficientSchema = Schema({
    coefficient: Number,
    matiereId: {
        type:Schema.ObjectId,
        ref: 'Matiere'
    },
    filiereId: {
        type: Schema.ObjectId,
        ref: 'Cursus'
    }
})

const coefficientModel = mongoose.model('Coefficient', coefficientSchema);

module.exports = coefficientModel;