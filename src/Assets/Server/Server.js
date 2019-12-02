'use strict';
/**
 * @author : Bhavana Vakkalagadda(bvakkala)
 * @since : 24 Nov, 2019
 * @version : 1.0
 */
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const fs = require('fs');

let quizqus = []
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/createquiz', function(req, res) {

console.log("hi bhavana")
let rawdata = fs.readFileSync('quizqus.json');
let Questiondata = JSON.parse(rawdata);
//console.log(Questiondata)

 for(var i=0; i<Questiondata.length;i++) {
 if(Questiondata[i].quiz.Question == req.body.Question){
    res.status(500).json({"message": "Question already exists"})
 return
}
 }
 quizqus = Questiondata
  let newQuestion =  {
  	quiz: req.body
  }
  quizqus.push(newQuestion)
  //console.log(quizqus)
  fs.writeFileSync('quizqus.json', JSON.stringify(quizqus));

    res.status(200).json({"message": " successfully added"})
  //console.log(users)
});


app.post('/AddQuestion', function(req, res) {


let status = 0 
let message = ""
let rawdata = fs.readFileSync('quizqus.json');
let Questiondata = JSON.parse(rawdata);
// if(req.body.Question == "admin" && req.body.password == "admin") {
//  res.status(200).json({"Points": "Admin"})
//     return
//   }

 for(var i=0; i<Questiondata.length;i++) {
 if(Questiondata[i].quiz.Question == req.body.Question && Questiondata[i].quiz.Answer == req.body.Answer){
   res.status(200).json({"Points": Questiondata[i].Question.Points})
    return
}
  
 }

 res.status(500).json({"message": "Username or password doesn't exist"})
 });

app.get('/Questions', function(req, res) {
let rawdata = fs.readFileSync('quizqus.json');
let Questiondata = JSON.parse(rawdata);
res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(Questiondata));  
});

app.delete('/deleteStudent', function(req,res){
    let rawdata = fs.readFileSync('quizqus.json');
let Questiondata = JSON.parse(rawdata);
console.log(req.body.id)

for(var i=0; i<Questiondata.length;i++) {
 if(Questiondata[i].user.Question == req.body.id){
  Questiondata.splice(i,1)
}
  
 }
   fs.writeFileSync('quizqus.json', JSON.stringify(Question),{encoding:'utf8',flag:'w'});
   rawdata = fs.readFileSync('quizqus.json');
  Questiondata = JSON.parse(rawdata);
 res.status(200).json({"data": Questiondata})

});

app.post('/addStudent', function(req, res) {
    console.log(req.body);
    fs.writeFileSync('./../users.json', JSON.stringify(req.body));

  });

app.post('/deleteStudent', function(req, res) {
    console.log(req.body);
    fs.writeFileSync('./../users.json', JSON.stringify(req.body));

  });

  app.post('/addProfessor', function(req, res) {
    console.log(req.body);
    fs.writeFileSync('./../users.json', JSON.stringify(req.body));

  });

app.post('/deleteProfessor', function(req, res) {
    console.log(req.body);
    fs.writeFileSync('./../users.json', JSON.stringify(req.body));

  });

app.listen(3001, () => {
  console.log('Server Listening on port 3001');
 
});