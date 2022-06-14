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


let Numbers=[1,2,3,4,5,6,7,8,9,10,11];
let OddNumbers=[];
let EvenNumbers=[];
// functions
function SplitOddAndEven(Numbers) {
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] % 2 == 0) {
            EvenNumbers.push(Numbers[i]);
        } else {
            OddNumbers.push(Numbers[i]);
        }
    }
    console.log(OddNumbers,EvenNumbers);
    return [OddNumbers, EvenNumbers];
}

SplitOddAndEven(req.body.nummer);

});
app.listen(5000);