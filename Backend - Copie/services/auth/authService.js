var passport = require('passport');
var jwt = require('jsonwebtoken');
const authModel = require("../../models/authModel")

const register = async (req, res) => {
    try {
        const authM = new authModel(req.body);
        const data = await authM.save()
        return data;

    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const login = async (req, res) => {
    try {

        const user = await authModel.findOne({email: req.body.email});

            if (!user) { 
                res.status(404).json({ message: 'User not found' })
            }
 
            const validate = await user.isValidPassword(req.body.password);

            if (!validate) {
                res.status(403).json({ message: 'Wrong Password' })
            }

            const body = { _id: user._id, email: user.email };
            const token = jwt.sign({ user: body }, 'TOP_SECRET');
            return  {user, token}


    } catch (error) {
       res.status(500).json({error: error.message})
    }
}

module.exports = {register, login}

