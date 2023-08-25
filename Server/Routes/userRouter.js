const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const protected =require("../middleware/Protected")
const { uploadSingle } = require('../middleware/handleImage');

router.get("/api/users",protected , userController.allUsers);
router.get("/api/usersMessages",protected , userController.usersMessages);
router.get("/api/Providers", userController.allProviders);
router.get("/api/Admins", userController.allAdmins);
router.get("/protected", userController.protected);
router.post("/api/users", userController.newUser);
router.post("/api/usersLogin", userController.newUserLogin);
router.put("/api/usersContactUs/:id", userController.newUserContactUs);
router.get("/api/users/:id",uploadSingle, userController.oneUser);
router.get("/api/chatUser/:id", userController.chatUser);
router.put("/api/usersMulter/:id",uploadSingle, userController.updateUserMulter);
router.delete("/api/users/:id", userController.deleteUser);



module.exports = router;