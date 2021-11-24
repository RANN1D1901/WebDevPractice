const express = require("express");
var path = require('path');
var app = express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname)));
app.use(express.static('public'));
app.set('views','views')
app.get("/home",(req,res)=>{
    res.render("home")
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.listen(3000);
console.log('Express started on port 3000');