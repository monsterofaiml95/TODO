const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const todoRouter = require('./routes/todo');



const app = express();
//Connect to MongoDB server
mongoose.connect("mongodb://127.0.0.1:27017/TodoList",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

//routes
app.use('/',indexRouter);
app.use('/',todoRouter);

//Server configurations


app.listen(3000,()=>console.log(`Server is listening on 3000`));