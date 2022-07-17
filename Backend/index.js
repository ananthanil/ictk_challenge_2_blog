const express = require('express');
const BloggerData = require('./src/Model/blogdb')
const cors = require('cors');
var bodyparser = require('body-parser');
var app = new express();
var Port = 3002;
app.use(cors());
app.use(bodyparser.json())
app.get('/Blogs',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS')
    BloggerData.find()
               .then(function(blogger){
                    res.send(blogger);
               });
});
app.listen(Port,function(){
    console.log(`listening to port ${Port}`);
})