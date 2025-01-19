const express = require('express');
const {
    registerUser,
    loginUser,
    currentUser
} = require('../controller/userController');
const validateToken = require('../middleware/validateToken');
const validateTokenHandler = require('../middleware/validateToken');

const router = express.Router();

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/current',validateTokenHandler,currentUser)

module.exports = router;