const router = require("express").Router();
const apiRoutes = require("./api/index");
const userRoutes = require("./html/index");

router.use("/api", apiRoutes);
router.use("/user", userRoutes);

module.exports = router;
