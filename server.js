const express=require('express')
var app = express();
let path=require('path')
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use('/',express.static(path.join(__dirname,'./public')))

app.use(function (req,res,next){
  console.log('handling request : ',req.url);
  next();
})

app.use('/',require('./index')(io))

http.listen(3000, function(){
    console.log('listening on *:3000');
  });
  