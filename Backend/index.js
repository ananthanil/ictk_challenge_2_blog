const express = require('express');
const BloggerData = require('./src/Model/blogdb')
var app = new express();
var Port = 3002;
app.listen(Port,function(){
    console.log(`listening to port ${Port}`);
})