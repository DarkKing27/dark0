var express = require("express");
var app = express();
app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))
const students = [
 {
 id: 1,
 name: "yuki",
 mail: "yuki@gmail.com",
 phone: 674843921,
 },
 {id: 2,
 name: "mirai",
 mail: "mirai@gmail.com",
 phone: 985843291,
 }
];
app.get("/", (req, res) => {
 res.send("welcome");
})
app.get("/students", (req, res) => {
 res.send(students);
})
app.post("/students", (req, res) => {
 const student = {
 id: req.body.id,
 name: req.body.name,
 mail: req.body.mail,
 phone: req.body.phone,
 };
 students.push(student);
 res.send(student);
});
app.put("/students/:id", (req, res) => {
 const student = students.find((student) => {
 return student.id === parseInt(req.params.id);
 });
 if(!student){
 res.status(404).send("student not found with the given id");
 }
 student.name = req.body.name;
 student.mail = req.body.mail;
 student.phone = req.body.phone;
 res.send(student);
})
app.delete("/students/:id", (req, res) => {
 const student = students.find((student) => {
 return student.id === parseInt(req.params.id);
 });
 if(!student){
 res.status(404).send("student not found with the given id");
 }
 var x = students.indexOf(student);
 students.splice(x, 1);
 res.send(student);
});
var server = app.listen(3526, () => {
 console.log("server listening at port 3526");
});