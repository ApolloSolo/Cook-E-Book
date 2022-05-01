const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("users/register", { loggedIn: req.session.loggedIn });
});

module.exports = router;