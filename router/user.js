const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

// create user
router.post("/", userController.createUser);

// get all the usersS
router.get("/", userController.getUser);

// get a single user by id
router.get("/:id", userController.getUserById);

module.exports = router;
