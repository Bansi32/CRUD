const Item = require("../models/item");
const User = require("../models/user");

class itemController {
  //create Item
  async createItem(req, res) {
    try {
      // const id = req.user._id;
      // console.log(id);
      const { name, model, ram, screenSize, prise, owner } = req.body;
      if (!name || !model || !ram || !screenSize || !prise || !owner) {
        res.status(402).json({ error: "Please fill all the details!" });
      }

      const item = await Item.create({
        name,
        model,
        ram,
        screenSize,
        prise,
        owner,
      });
      // item.update({ $set: { owner: user._id } });
      await item.save();
      const user = await User.findByIdAndUpdate(
        { _id: req.body.owner },
        { $push: { items: item._id } }
      );

      res.status(200).json({ Item: item, user: user });
    } catch (e) {
      console.log(e);
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //get all item
  async getItems(req, res) {
    try {
      const item = await Item.find();
      res.status(200).json({ Items: item });
    } catch (e) {
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //get a single item by id
  async getItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await Item.findById(id);
      res.status(200).json({ Item: item });
    } catch (e) {
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //edit item by id
  async editItem(req, res) {
    try {
      const { id } = req.params;
      const item = await Item.findByIdAndUpdate({ _id: id }, { ...req.body });

      res.status(200).json({ Item: item });
    } catch (e) {
      console.log(e);
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
  //delete item by id
  async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const item = await Item.findById(id);
      const user = await User.findByIdAndUpdate(
        { _id: item.owner },
        { $pull: { items: id } }
      );
      await Item.findByIdAndDelete(id);
      res.status(200).json({ Item: item, user: user });
    } catch (e) {
      console.log(e);
      res.status(402).json({ error: "Something went wrong!" });
    }
  }
}

module.exports = new itemController();
