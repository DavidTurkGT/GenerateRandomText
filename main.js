const express = require('express');
const app = express();
const loremIpsum = require('lorem-ipsum');

app.get('/lorem',function(req, res){
  res.send(loremIpsum({count: 3, units: 'paragraphs', format: 'html'}));
});

app.get('/lorem/:paragraphs', function(req, res){
  res.send(loremIpsum({count: req.params.paragraphs, units: 'paragraphs', format: 'html'}));
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
})
