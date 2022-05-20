const User = require("../model/User")
const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator")
const jwt = require('jsonwebtoken')
const { secret } = require('../config.json')
const authService = require('../service/authService')
const AuthService = new authService()

const generateToken = (id, roles) => jwt.sign({ id, roles }, secret, { expiresIn: '24h' })

class authController {

    async register(req, res) {
        try {
            const validationErrors = validationResult(req)
            if (!validationErrors.isEmpty()) {
                return res.status(400).json({ success: false, message: "Validation error occured", errors })
            }
            const { firstname, lastname, email, password } = req.body
            if (!AuthService.register(firstname, lastname, email, password))
                res.json({ success: false, message: 'User did not created' })

            res.json({ success: true, message: 'User successfully created' })

        } catch (error) {
            res.json({ success: false, message: 'Error occured', error: error.message })
        }
    }
}

module.exports = authController