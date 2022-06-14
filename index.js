const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');


app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.get("/login",function(req,res){
    res.render('index.pug');
});

app.post("/login",function(req,res){
res.render('index.pug');
console.log(req.body.vorname);
console.log(req.body.nachname);
});
app.listen(5000);