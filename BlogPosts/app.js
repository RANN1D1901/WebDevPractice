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
//blog routes
app.use(blogRoutes);
//can be used as 
//app.use("/blogs", blogRoutes);