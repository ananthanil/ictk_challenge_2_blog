const express = require('express');
var app = new express();
var Port = 3002;
app.listen(Port,function(){
    console.log(`listening to port ${Port}`);
})