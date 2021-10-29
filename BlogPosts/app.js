var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.set('view engine','ejs');
app.set('views','views')
app.use(express.static(path.join(__dirname)));
console.log(__dirname)

app.use(express.static('public'));
app.use(express.static('routes'));
app.use(express.static('views'));


if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
app.get("/blogs",(req,res)=>{
  res.render("blogs")
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