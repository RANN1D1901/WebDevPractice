const mongoose = require('mongoose');
//schema parent class for the structure of the object to be stored in the db.
const Schema = mongoose.Schema;
//create the schema for the blog
const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
},{timestamps:true});

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;