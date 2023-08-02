const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const authSchema = Schema({
    email: {
    type: String,
    required: true,
    unique: true
    },
    password: {
        type: String,
        required: true
    }
});

authSchema.pre(
    'save',
    async function(next) {
        const auth = this;
        const hash = await bcrypt.hash(this.password, 10);
    
        this.password = hash;
        next();
    }
);

authSchema.methods.isValidPassword = async function(password) {
    const auth = this;
    const compare = await bcrypt.compare(password, auth.password);

    return compare;
}

const authModel = mongoose.model('Auth', authSchema);

module.exports = authModel;