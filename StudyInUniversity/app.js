const express = require("express");
var path = require('path');
var app = express();
var applicationRoutes = require("../StudyInUniversity/routes/applicationRouter");

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname)));
app.use(express.static('public'));
app.set('views','views')

app.use(applicationRoutes);

app.listen(3000);



console.log('Express started on port 3000');