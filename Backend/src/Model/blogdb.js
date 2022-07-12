const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Blogs');
const Schema = mongoose.Schema;

var NewBloggerSchema = new Schema({
    bloggerId : Number,
    bloggerName : String,
    imageUrl : String,
    blogTitle : String,
    blogDate : String,
    blogContent : String
})

var Blogger = mongoose.model('Blogger',NewBloggerSchema); //UserData is the model and NewBookData is the schema

module.exports = Blogger;

