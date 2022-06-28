const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

// create item
router.post("/add", itemController.createItem);

// // get all items
router.get("/", itemController.getItems);

// get a single item
router.get("/:id", itemController.getItemById);

// update an item
router.put("/:id", itemController.editItem);

// delete an item
router.delete("/:id", itemController.deleteItem);

module.exports = router;

//filter accoring brand name
// router.get("/", async (req, res) => {
//   try {
//     const { name } = req.query;
//     let item;
//     if (!name) {
//       item = await Item.find();
//     } else {
//       item = await Item.find({ name });
//     }

//     res.status(200).json({ Items: item });
//   } catch (e) {
//     res.status(402).json({ error: "Something went wrong!" });
//   }
// });
