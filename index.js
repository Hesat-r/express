const { application } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.get("/",function(req,res){
res.send("Main Seite")
});
app.get("/users",function(req,res){
    res.send("./index.html")
 });
app.post("*",function(req,res){
    res.send("test")
    console.log(req);
});
app.put("*",function(req,res){
    res.send("test")
});
app.delete("*",function(req,res){
    res.send("test")
});
            


app.listen(5000);