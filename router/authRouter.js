const Router = require("express")
const router = new Router()
const authController = require("../controller/authController")

const { check } = require("express-validator")

const controller = new authController()

router.post('/register',
    [
        check('email', 'You need enter email').notEmpty(),
        check('password', 'Password length must be 4-10 characters ').isLength({ min: 4, max: 10 }),
    ],
    controller.register)

// router.post('/login',
//     [
//         check('email', 'You need enter email').notEmpty(),
//         check('password', 'Password length must be 4-10 characters ').isLength({ min: 4, max: 10 }),
//     ],
//     controller.login)

router.get('/', (req, res) => {
    res.json({message: 'Welcome to api/auth'})
})

module.exports = router