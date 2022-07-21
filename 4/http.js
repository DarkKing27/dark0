var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url=='/'){
    res.write("welcome");
    res.end();
  }
  if(req.url=='/it'){
    res.write("welcome guys");
    res.end();
  }
});
server.listen(1226);