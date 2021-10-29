var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Blog = require("../BlogPosts/models/blogs");

var app = express();
app.set('view engine','ejs');
app.set('views','views')
app.use(express.static(path.join(__dirname)));
console.log(__dirname)

app.use(express.static('public'));
app.use(express.static('routes'));
app.use(express.static('views'));

//connect with the database: use Mongoose API
//async task, has some promise, connect to the server once the database connection is established.
const dbUrl="mongodb+srv://Blog:Password@cluster0.9wtf4.mongodb.net/BlogApplication?retryWrites=true&w=majority"
mongoose.connect(dbUrl).then((result)=> {
  console.log('Connected to Database');
  app.listen(3000);
  console.log('Express started on port 3000');
  });
//async task, returns promise
app.get('/add_blog',(req,res)=>{
  var blog = new Blog({
    title:"First Blog",
    content: "This is the first blog"
  });
  blog.save().then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    console.log("Error");
  })
})
//retrieve the documents: Blog.find, async method, returns promise
app.get("/all_blogs",(req,res)=>{
  Blog.find().then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log("Error");
  })
})

app.get("/find_blog",(req,res)=>{
  console.log(req.query.ID);
  Blog.findById(req.query.ID).then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log("Error");
  })
})

app.get("/blogs",(req,res)=>{
  //for next chapter, pass this data to the view: view_blogs, render the html using EJS viewengine
  Blog.find().then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log("Error");
  })
})

app.get("/about",(req,res)=>{
  res.render("about")
})

app.get("/",(req,res)=>{
  res.render("home")
})

app.get("/view_blogs",(req,res)=>{
  res.render("view_blogs")
})