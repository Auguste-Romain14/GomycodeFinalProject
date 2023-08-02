const mongoose = require('mongoose');
const {Schema} = mongoose;

const scoreSchema = Schema({
    note: Number,
    filiereId: String,
    matiereId: String
})

const scoreModel = mongoose.model('Score', scoreSchema)
module.exports = scoreModel;