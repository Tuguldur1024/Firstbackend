const express = require("express");

const createBlog = require("../controller/blogs/createBlog");
const deleteBlog = require("../controller/blogs/deleteBlog");
const getBlog = require("../controller/blogs/getBlog");
const getBlogs = require("../controller/blogs/getBlogs");
const updateBlog = require("../controller/blogs/updateBlog");

const BlogRouter = express.Router();

BlogRouter.get("/blog/", getBlogs)
  .get("/blog/:id", getBlog)
  .post("/blog/createBlog", createBlog)
  .put("/blog/updateBlog", updateBlog)
  .delete("/blog/delete:id", deleteBlog);

module.exports = BlogRouter;
