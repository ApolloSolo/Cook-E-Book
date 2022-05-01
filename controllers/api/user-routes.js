const router = require("express").Router();

router.get('/', async (req, res) => {
    res.json({ message: "Query user data. All DATA" })
})

module.exports = router;