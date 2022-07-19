const express = require('express');
const BloggerData = require('./src/Model/blogdb')
const cors = require('cors');
const path = require('path');
var bodyparser = require('body-parser');
app.use(express.static('./dist/frontend'));
var app = new express();
var Port = 3002;
app.use(cors());
app.use(bodyparser.json())
app.get('/api/Blogs',function(req,res){
    BloggerData.find()
               .then(function(blogger){
                    res.send(blogger);
               });
});
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dis/frontend/index.html'));
});