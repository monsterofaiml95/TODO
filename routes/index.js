// "./routes/index.js"
const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo")


// Define routes using the router instance
router.get('/', async(req, res) => {
  const allTodo= await Todo.find();
  res.render("index",{todo:allTodo});
});

module.exports = router;
