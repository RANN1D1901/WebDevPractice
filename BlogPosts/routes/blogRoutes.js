var express = require('express');
var path = require('path');
var router = express.Router();
var blogController = require("../controllers/blogController");
var Blog = require("../models/blogs");

//async task, returns promise
router.post('/add_blog',blogController.blog_create_get);
//retrieve the documents: Blog.find, async method, returns promise
router.get("/all_blogs",blogController.all_blogs);
//fetch all the blogs
router.get("/find_blog",blogController.blog_index);
//render the form to create the blog
router.get("/blogs",blogController.blog_form);

router.get("/about",blogController.about_page);

router.get("/home",blogController.home_app);

router.get("/view_blogs",blogController.all_blogs);

router.get("/blogs/:id",blogController.each_blog);

//deletes the blog for a given id
router.delete("/blogs/:id",blogController.delete_blog);

module.exports = router;