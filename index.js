import express from "express";
import { getCars, addcar } from "./src/cars.js";
import mongoose from "mongoose";
// const UserRouter = require("./router/user");
// const BlogRouter = require("./router/blog");
mongoose.connect(
  "mongodb+srv://Tuguldur1024:Bilguun1024@dbuser2.qx4oh.mongodb.net/test"
);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

const port = 8080;

// app.get("/cars", getCars);
app.post("/cars", addcar);
// app.use(UserRouter);
// app.use(BlogRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
