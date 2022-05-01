const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./config/connection");
const routes = require("./controllers/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`***** Listening on port ${PORT} *****`));
});
