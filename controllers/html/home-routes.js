const router = require("express").Router();
const getRecipes = require("../../public/js/yum");

router.get("/", (req, res) => {
  res.render("homepages/homepage", { loggedIn: req.session.loggedIn });
});

router.get("/dashboard", async (req, res) => {
  const recipeData = await getRecipes();
  let reducedRecipes = [];
  for (let i = 0; i < recipeData.length; i++) {
    if (!recipeData[i].recipes) {
      let newRecipeObj = {
        name: recipeData[i].name,
        description: recipeData[i].description,
        img:
          recipeData[i].thumbnail_url ||
          "https://images.unsplash.com/photo-1588503812457-f289d7f27314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wdHklMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        video: recipeData[i].original_video_url,
        instructions: recipeData[i].instructions,
      };
      reducedRecipes.push(newRecipeObj);
    } 
  }
  console.log(reducedRecipes);

  res.render("homepages/dashboard", {
    loggedIn: req.session.loggedIn,
    username: req.session.username,
    reducedRecipes,
  });
});

module.exports = router;
