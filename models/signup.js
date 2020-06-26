// Requiring the necessary modules

const mongoose = require('mongoose')
const { sign } = require('jsonwebtoken')
const Schema = mongoose.Schema

// Create Schema

const UserSignup = new Schema({
  _id: Schema.Types.ObjectId,

  first_name: {
    type: String,
    minlength : 4,
    required : true
   
    
  },
  last_name: {
    type: String
    
  },

  firm_name : {
    type : String,
    required : true

              }, 
  email: {
    type: String,
    required: true, 
    unique : true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",],
      trim: true,
  },
  password: {
    type: String,
    minLength : 6,
    required: [true ,"Please add a password"],
    trim : true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user : {
    type : Schema.Types.ObjectId,
    ref : "user"
  },
  
},

{
  timestamps : false
}
)

UserSign= mongoose.model('users', UserSignup)


UserSign.findOne({})
    .populate('user')
    .exec((err,user) => {
  
    })
    
module.exports = UserSign