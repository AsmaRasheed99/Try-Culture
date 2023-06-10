const express = require('express');
const cors =require('cors');
const db = require("./queries");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


// getByToken
app.get("/get_user", authenticateToken, db.getUserByToken);
app.get("/get_admin", authenticateToken, db.getAdminByToken);

// users
app.post("/users", db.createUser);
app.get("/users", db.getUser);
app.get("/users_count", db.getUserscount);
app.get("/users/:id", db.getUserById);
app.put("/delete_user/:id", db.deleteUser);
app.put("/update_user/:id", db.updateUser);








// Sign
app.get("/checkToken", authenticateToken, (req, res) => {
    res.send(req.user);
  });
  
  app.post("/logIn_user", db.checkUser, (req, res) => {
    const user = req.body;
  
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
    console.log("Generated token:", token);
    res.json(token);
  });
  
  
  app.post("/logIn_admin", db.checkAdmin, (req, res) => {
    const user = req.body;
  
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
    console.log("Generated token:", token);
    res.json(token);
  });
  
  function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return res.status(401).json({ error: "Not found" });
    }
  
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Invalid" });
      }
  
      req.user = decoded;
      next();
    });
  }


app.listen(PORT);
