const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepages/homepage", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", (req, res) => {
    res.render("homepages/dashboard", { loggedIn: req.session.loggedIn });
  });

module.exports = router;