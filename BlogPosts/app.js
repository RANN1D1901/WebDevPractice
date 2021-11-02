var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Blog = require("../BlogPosts/models/blogs");
var blogRoutes = require("../BlogPosts/routes/blogRoutes");

var app = express();
app.set('view engine','ejs');
app.set('views','views')
app.use(express.static(path.join(__dirname)));
console.log(__dirname)
const bodyParser = require("body-parser");
const { Console } = require('console');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
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
app.post('/add_blog',(req,res)=>{
  var blog = new Blog({
    title:JSON.stringify(req.body.Title),
    content: JSON.stringify(req.body.Content)
  });
  console.log(blog)
  blog.save().then((result)=>{
    console.log("Added")
    res.redirect("/blogs")

  })
  .catch((err)=>{
    console.log(err);
  })

})
//retrieve the documents: Blog.find, async method, returns promise
app.get("/all_blogs",(req,res)=>{
  Blog.find().then((result)=>{
    res.render("view_blogs",{blogs:result});
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
  res.render("blogs")
})

app.get("/about",(req,res)=>{
  res.render("about")
})

app.get("/",(req,res)=>{
  res.render("home")
})

app.get("/view_blogs",(req,res)=>{
  res.redirect("/all_blogs")
})

app.get("/blogs/:id",(req,res)=>{
  Blog.findById(req.params.id).then((result)=>{
    res.render("single_blog",{blogs:result});
  })
  .catch((err)=>{
    console.log("Error");
  })
})


app.delete("/blogs/:id",(req,res)=>{
  const id=req.params.id;
  Blog.findByIdAndDelete(id)
  .then(result=>{
    res.json({redirect:"/all_blogs"});
  })
  .catch(err=>{ Console.log(err)});
})

//blog routes
app.use(blogRoutes);
//can be used as 
//app.use("/blogs", blogRoutes);