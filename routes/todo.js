const express = require('express');
const router = express.Router();
const Todo = require("../models/Todo")

//routes
router.post('/add/todo', (req, res)=>{
    const todo = req.body.todo;
    const newTodo= new Todo({todo})

// save task

newTodo.save()
.then(()=>{
console.log("Successfully added");
res.redirect("/")
})
.catch(err=>console.log(err))
})

.get("/delete/todo/:_id", (req, res)=>{
    const  {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Deleted Todo Successfully"); 
        res.redirect("/");
    })
    .catch(err=>console.log(err));
})

module.exports = router;
