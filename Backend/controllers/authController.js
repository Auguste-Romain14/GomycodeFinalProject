const authService = require('../services/auth/authService');

const register = async (req, res) => {
    try {
        const data = await authService.register(req, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(error.status).json({error: error.message})
    }
}

const login = async (req, res) => {
    try {
        const data = await authService.login(req, res);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {register, login}
