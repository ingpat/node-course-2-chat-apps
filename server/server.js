var express = require('express'),
    path = require('path'),
    publicPath = path.join(__dirname, '../views');

console.log(__dirname + '../public');

var app  = express(),port=process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(3000,function(){
    console.log(`Server listening on port ${port}`);
});