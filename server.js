const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
//CONTROLLERS
const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

// db connection - local host
/*
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "krzysztof",
    password: "",
    database: "smart-brain",
  },
});
*/

// db connection - remote heroku
const db = knex({
  // for connecting to PostgreSQL
  client: "pg", // type of db
  connection: {
    connectionString: process.env.DATABASE_URL, // dynamic database value for heroku
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

//console.log(db.select('*').from('users')); //test connection to db is working

const app = express(); // express js server
app.use(bodyParser.json()); // use 'app.use' as is middleware
app.use(cors()); // use 'app.use' as is middleware

//user database call
//app.get('/', (req, res)=> { res.send(db.users) })
app.get("/", (req, res) => {
  res.send("Started Server Side");
});
//sign-in call
app.post("/signin", (req, res) => {
  signin.handleSignIn(req, res, db, bcrypt);
});
//register call
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
//profile call
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});
// image upload count call
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", (req, res) => {
  image.handleAPICall(req, res);
});

app.listen(process.env.PORT || 4000, () => {
  //sets up server on dynamic port OR on port 4000.
  console.log(`app is running on port: ${process.env.PORT}`); //server message on success.
});
