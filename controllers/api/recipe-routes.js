const router = require("express").Router();
const { User, Recipe } = require("../../models/index");

router.get("/", async (req, res) => {
  const recipies = await Recipe.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });
  res.json(recipies);
});

router.get("/:id", async (req, res) => {
  const recipe = await Recipe.findOne({
    where: {
      user_id: req.session.user_id,
    },
    where: {
      id: req.params.id,
    },
  });
  res.json(recipe);
});

router.post("/", async (req, res) => {
  let newRecipe = await Recipe.create({
    name: req.body.name,
    description: req.body.description,
    img_url: req.body.img_url,
    video_url: req.body.video_url,
    instructions: req.body.instructions,
    user_id: req.body.user_id,
  });
  res.json(newRecipe);
});

router.delete("/:id", async (req, res) => {
  const recipe = await Recipe.destroy({
    where: {
      user_id: req.session.user_id,
    },
    where: {
      id: req.params.id,
    },
  });
  if (!recipe) {
    res.json({ message: "Could not find recipe" });
  }
  res.json({ Message: "Recipe deleted" });
});

module.exports = router;
