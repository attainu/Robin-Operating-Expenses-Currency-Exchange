var express = require('express')
var bodyParser = require('body-parser')

const mongoose = require('mongoose')

var app = express()


var port = process.env.PORT || 5000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)



const mongoURI = 'mongodb+srv://expenses:12345@cluster0-o8emu.mongodb.net/expenses?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true , useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)


app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
