const User = require('../model/User')
const bcrypt = require('bcryptjs')

class authService {
    async register(firstname, lastname, email, password) {
        try {
            const match = await User.findOne({ email })
            if (match) {
                return false
            }
            const hashedPassword = bcrypt.hashSync(password, 16)
            let user = new User({ firstname, lastname, email, password: hashedPassword })
            await user.save()
            return true
        } catch (error) {
            return false
        }
    }
}

module.exports = authService