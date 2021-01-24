const handleSignIn = (req, res, db, bcrypt) => {
  db.select("hash", "email")
    .from("login")
    .where("email", "=", req.body.email)
    .then((data) => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((user) => {
            res.json(user[0]);
          })
          .catch((err) => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("incorrect login data");
      }
    })
    .catch((err) => res.status(400).json("incorrect login data"));
};

module.exports = {
  handleSignIn: handleSignIn,
};
