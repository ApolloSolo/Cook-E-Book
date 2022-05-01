const router = require("express").Router();
const userLogin = require('./login');

router.use('/login', userLogin);

module.exports = router;