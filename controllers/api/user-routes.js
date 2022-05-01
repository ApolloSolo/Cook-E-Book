const router = require("express").Router();
const { User } = require("../../models/index");

router.get("/", async (req, res) => {
  const users = await User.findAll({
    attributes: {
      exclude: ["password"],
    },
  });
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const userData = await User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  });
  if (!userData) {
    res.status(404).json({ message: "No user found by that id" });
    return;
  }
  res.json(userData);
});

router.post("/", async (req, res) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  req.session.save(() => {
    (req.session.user_id = newUser.id),
      (req.session.username = newUser.username),
      (req.session.loggedIn = true);

    res.json(newUser);
  });
});

router.put("/:id", async (req, res) => {
  const userData = await User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  });
  if (!userData[0]) {
    res.status(404).json({ message: "No user found with this id" });
    return;
  }
  res.json(userData);
});

router.post("/login", async (req, res) => {
  const userData = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (!userData) {
    res.status(404).json({ message: "Incorrect username or password" });
    return;
  }
  const validPassword = userData.checkPassword(req.body.password);
  if (!validPassword) {
    res.status(404).json({ message: "Incorrect username or password" });
    return;
  }
  req.session.save(() => {
    (req.session.user_id = userData.id),
      (req.session.username = userData.username),
      (req.session.loggedIn = true);

    res.json({ user: userData, message: "You are now logged in!" });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.delete("/:id", async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: "User deleted" });
});

module.exports = router;
