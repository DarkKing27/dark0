var fs=require('fs');
fs.readFile('it_a.txt',function(err,data){
    console.log(data.toString());
})
fs.writeFile('it_a.txt','cvrcollege',function(err,data){
    console.log("data inserted");
})
fs.appendFile('it_a.txt',"this is it department",function(err,data){
    console.log("data appended");
})