const router = require("express").Router();
const userLogin = require("./login");
const userRegister = require("./register");
const homeRoutes = require("./home-routes");
const singleRecipeRoutes = require("./single-recipe");

router.use("/login", userLogin);
router.use("/register", userRegister);
router.use("/recipe", singleRecipeRoutes);
router.use("/", homeRoutes);

module.exports = router;
