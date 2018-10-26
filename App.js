var express = require('express')
var app = express()

app.listen('3000', console.log("Listenining on port 3000"))

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.get('/greeting',function(req,res){
    console.log("Hello there")
    next()
},function(req,res){
  console.log("My Brother")
})

