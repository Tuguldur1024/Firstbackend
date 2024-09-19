const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { deleteUser } = require("../controller/users/deleteUser");
const { updateUser } = require("../controller/users/updateUser");
const { createUser } = require("../controller/users/createUser");

const UserRouter = express.Router();

UserRouter.get("/", getUsers)
  .get("/:id", getUser)
  .delete("/delete:id", deleteUser)
  .put("/update:id", updateUser)
  .post("/createUser", createUser);

module.exports = UserRouter;
