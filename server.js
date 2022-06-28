require("dotenv").config;

const express = require("express");
const app = express();
require("./helpers/db");
const userRoute = require("./router/user");
const itemRoute = require("./router/item");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

app.use("/api/user", userRoute);
app.use("/api/item", itemRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
