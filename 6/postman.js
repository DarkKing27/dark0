var http = require("http");
var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var app = express();
app.use(express.json());
mongoClient.connect("mongodb://localhost:27017", (err, client)=>{
if(err){
 console.log("error in connection" + err);
}
else{
 console.log("connection established successfully");
 db = client.db('empdb');}
});
app.get('/emps',(req, res)=>{
 db.collection("emp").find().toArray((err, items)=>{
 res.write(JSON.stringify(items));
 res.end();
 });
})
app.post('/addemp', (req, res)=>{
 db.collection('emp').insertOne(req.body);
 res.write('data inserted');
 res.end();
})
app.put('/updateemp/:id', (req, res)=>{
 var id = parseInt(req.params.id);
 db.collection("emp").updateOne({"_id":id}, {$set:{name: 
req.body.name}});
 res.write('data updated');
 res.end();
});
app.delete('/deleteemp/:id', (req, res)=>{
 var id = parseInt(req.params.id);
 db.collection('emp').deleteOne({"_id":id});
 res.write('data deleted');
 res.end();
});
app.listen(4001, ()=>{
 console.log("server started");
});