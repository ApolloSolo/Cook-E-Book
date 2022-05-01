const express = require("express");
const app = express();
const path = require("path");
const sequelize = require("./config/connection");
const routes = require("./controllers/index");
const ejsMate = require('ejs-mate');
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "This is a secret combo",
  cookie: {},
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('ejs', ejsMate); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`***** Listening on port ${PORT} *****`));
});