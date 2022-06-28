const User = require("../models/user");

class userController {
  //create User
  async createUser(req, res) {
    try {
      const { name } = req.body;
      const user = await new User({ name });
      await user.save();
      console.log(user);
      res.status(200).json({ user: user });
    } catch (e) {
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //get user
  async getUser(req, res) {
    try {
      const user = await User.find();
      console.log(user);
      res.status(200).json({ user: user });
    } catch (e) {
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //get user by ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById({ _id: id });
      console.log(user);
      res.status(200).json({ user: user });
    } catch (e) {
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
}

module.exports = new userController();
