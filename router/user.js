const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

// create user
router.post("/", userController.createUser);

// get all the usersS
router.get("/", userController.getUser);

// get a single user by id
router.get("/:id", userController.getUserById);

router.put("/:id/edit", userController.updateUser);

router.delete("/:id/delete", userController.deleteUser);

module.exports = router;
