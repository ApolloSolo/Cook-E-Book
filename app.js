const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/connection');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "public")));


const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`***** Listening on port ${PORT} *****`))
})