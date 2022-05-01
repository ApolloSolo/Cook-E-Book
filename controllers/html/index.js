const router = require("express").Router();
const userLogin = require("./login");
const userRegister = require("./register");
const homeRoutes = require("./home-routes");

router.use("/login", userLogin);
router.use("/register", userRegister);
router.use("/home", homeRoutes);

module.exports = router;
