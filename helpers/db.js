const mongoose = require("mongoose");
const DBURL = process.env.DBURL || "mongodb://localhost:27017/mangoTask";

mongoose
  .connect(DBURL)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
