var express = require('express');
var path = require('path');
var router = express.Router();

var Blog = require("../models/blogs");

//async task, returns promise
router.post('/add_blog',(req,res)=>{
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
router.get("/all_blogs",(req,res)=>{
  Blog.find().then((result)=>{
    res.render("view_blogs",{blogs:result});
  })
  .catch((err)=>{
    console.log("Error");
  })
})

router.get("/find_blog",(req,res)=>{
  console.log(req.query.ID);
  Blog.findById(req.query.ID).then((result)=>{
    res.send(result);
  })
  .catch((err)=>{
    console.log("Error");
  })
})

router.get("/blogs",(req,res)=>{
  //for next chapter, pass this data to the view: view_blogs, render the html using EJS viewengine
  res.render("blogs")
})

router.get("/about",(req,res)=>{
  res.render("about")
})

router.get("/",(req,res)=>{
  res.render("home")
})

router.get("/view_blogs",(req,res)=>{
  res.redirect("/all_blogs")
})

router.get("/blogs/:id",(req,res)=>{
  Blog.findById(req.params.id).then((result)=>{
    res.render("single_blog",{blogs:result});
  })
  .catch((err)=>{
    console.log("Error");
  })
})


router.delete("/blogs/:id",(req,res)=>{
  const id=req.params.id;
  Blog.findByIdAndDelete(id)
  .then(result=>{
    res.json({redirect:"/all_blogs"});
  })
  .catch(err=>{ Console.log(err)});
})

module.exports = router;