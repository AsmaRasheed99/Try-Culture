const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRETKEY = process.env.SECRETKEY;

const newUserGoogle = async (req, res) => {
  const { name, email, picture, verified_email, id } = req.body;
  const userExist = await User.find({ email: email });

  if (userExist.length == 0) {
    const hashPassword = await bcrypt.hash(id, 5);
    const NewUser = new User({
      firstName: name,
      email: email,
      password: hashPassword,
      role: 0,
    });
    const user = await NewUser.save();
    const token = jwt.sign(
      { id: user._id, username: user.firstName, role: user.role },
      SECRETKEY,
      { expiresIn: "24h" }
    );
    res.json({ token, user });

  } else {
    const validpassword = await bcrypt.compare(id, userExist[0].password);

    if (!validpassword) {
      return res.json({ error: "incorrect password" });
    }

    if (validpassword) {
      const token = jwt.sign(
        { id: userExist[0]._id, username: userExist[0].firstName, role: userExist[0].role },
        SECRETKEY,
        { expiresIn: "24h" }
      );
      const user = userExist[0];
      res.json({ token, user });
    }
  }
};
const newBusinessGoogle = async (req, res) => {
  const { name, email, picture, verified_email, id } = req.body;
  const userExist = await User.find({ email: email });

  if (userExist.length == 0) {
    const hashPassword = await bcrypt.hash(id, 5);
    const NewUser = new User({
      firstName: name,
      email: email,
      password: hashPassword,
      role: 2,
    });
    const user = await NewUser.save();
    const token = jwt.sign(
      { id: user._id, username: user.firstName, role: user.role },
      SECRETKEY,
      { expiresIn: "24h" }
    );
    res.json({ token, user });

  } else {
    const validpassword = await bcrypt.compare(id, userExist[0].password);

    if (!validpassword) {
      return res.json({ error: "incorrect password" });
    }

    if (validpassword) {
      const token = jwt.sign(
        { id: userExist[0]._id, username: userExist[0].firstName, role: userExist[0].role },
        SECRETKEY,
        { expiresIn: "24h" }
      );
      const user = userExist[0];
      res.json({ token, user });
    }
  }
};

module.exports = {
    newUserGoogle,
    newBusinessGoogle
  };