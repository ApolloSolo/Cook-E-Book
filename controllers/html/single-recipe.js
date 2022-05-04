const router = require("express").Router();
const { getRecipeById } = require("../../public/js/tasty");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneRecipe = await getRecipeById(id);
  //console.log(oneRecipe);
  let reducedRecipe = {
    tast_id: oneRecipe.id,
    name: oneRecipe.name,
    description: oneRecipe.description,
    img:
      oneRecipe.thumbnail_url ||
      "https://images.unsplash.com/photo-1588503812457-f289d7f27314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    video: oneRecipe.original_video_url,
    instructions: oneRecipe.instructions,
  };
  console.log(reducedRecipe);
  res.render("recipes/single-recipe", {
    loggedIn: req.session.loggedIn,
    recipe: reducedRecipe,
  });
});

module.exports = router;
