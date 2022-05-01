const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("users/login", { loggedIn: req.session.loggedIn });
});

module.exports = router;
