const Blog = require("../models/blogs")
//blog index
const blog_index = (req,res)=>{
    console.log(req.query.ID);
    Blog.findById(req.query.ID).then((result)=>{
      res.send(result);
    })
    .catch((err)=>{
      console.log("Error");
    })
}
//all blogs
const all_blogs= (req,res)=>{
    Blog.find().then((result)=>{
      res.render("view_blogs",{blogs:result});
    })
    .catch((err)=>{
      console.log("Error");
    })
  }
//blog details
const each_blog=(req,res)=>{
    Blog.findById(req.params.id).then((result)=>{
      res.render("single_blog",{blogs:result});
    })
    .catch((err)=>{
      console.log("Error");
    })
  }


//blog_create_get
const blog_create_get = (req,res)=>{
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
  }
//blog_create_post
const blog_form= (req,res)=>{
    //for next chapter, pass this data to the view: view_blogs, render the html using EJS viewengine
    res.render("blogs")
  }
//blog_delete
const delete_blog=(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
      res.json({redirect:"/all_blogs"});
    })
    .catch(err=>{ Console.log(err)});
  }
//homepage
const home_app =(req,res)=>{
        res.render("home")
}
//aboutpage
const about_page = (req,res)=>{
    res.render("about")
}
module.exports = {
    blog_index,
    all_blogs,
    blog_create_get,
    blog_form,
    delete_blog,
    each_blog,
    home_app,
    about_page
}
