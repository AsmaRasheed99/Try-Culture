// 1- calling the model
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRETKEY = process.env.SECRETKEY;

const allUsers = (req, res) => {
  User.find({ role: 0})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const allProviders = (req, res) => {
  User.find({ role: 2 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};
const allAdmins = (req, res) => {
  User.find({ role: 1 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

const oneUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.find({ _id: id });
  console.log(user);
  res.json(user);
};

const chatUser = async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const newUser = async (req, res) => {
  const { firstName, email, password, role,phone } = req.body;
console.log(phone)
  const user0 = await User.find({ $or: [
    { email: { $eq: email } },
    { firstName: { $eq: firstName } }
  ]});
  if (user0.length == 0) {
    const hashPassword = await bcrypt.hash(password, 5);
    const user = new User({
      firstName: firstName,
      email: email,
      password: hashPassword,
      role: role,
      phone:phone,
    });
    console.log(user)
    const addUser = await user.save();
    console.log(addUser);
    const token = jwt.sign(
      { id: addUser._id, username: addUser.firstName, role: addUser.role },
      SECRETKEY,
      { expiresIn: "1h" }
    );
    res.json({ token, addUser });
  } else {

    res.json({ error: "User Already Exist" });


  }
};
const newUserContactUs = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedUserData, {
    new: true,
  });
  const updatedUser = await user.save();
  res.json(updatedUser);
};

const newUserLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.find({ email: email });
  if (user.length != 0) {
    // password check
    const validpassword = await bcrypt.compare(password, user[0].password);
    if (!validpassword) {
      return res.json({ error: "incorrect password" });
    }
    if (validpassword) {
      const token = jwt.sign(
        {
          id: user[0]._id,
          username: user[0].firstName,
          role: user[0].role,
          message: user[0]?.message,
          email: email,
        },
        SECRETKEY,
        { expiresIn: "12h" }
      );
      const user0 = user[0];
      res.json({ token, user0 });
    }
  }else{
    res.status(404).send({ error:"email not found" });
  }
};


const updateUserMulter = async (req, res) => {
  const userId = req.params.id;
  const { firstName, email } = req.body;
  const image = req.file.path;
  console.log(userId, image , firstName, email);
  const user = await User.findByIdAndUpdate(userId, { firstName:firstName, email:email , image:image}, { new: true });
  const updatedUser = await user.save();
  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await User.findByIdAndDelete(userId);
  res.status(204).json(User);
};

// Protected route
const protected = async (req, res) => {
  const token = req.headers.authorization.trim();
  if (!token) {
    return res.status(401).json({ message: "No token provided." });
  }

  jwt.verify(token, SECRETKEY, (err, decoded) => {
    if (err) {
      console.log("token error:", err); // Log the error object for debugging
      return res.status(403).json({ message: "Failed to authenticate token." });
    }
    console.log("token Authenticated");
    res.json({ message: "Authenticated", user: decoded });
  });
};

const usersMessages = (req, res) => {
  User.find({ message: { $exists: true, $ne: [] } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};

module.exports = {
  allUsers,
  newUser,
  oneUser,
  deleteUser,
  newUserLogin,
  protected,
  allProviders,
  allAdmins,
  newUserContactUs,
  usersMessages,
  chatUser,
  updateUserMulter,
};
