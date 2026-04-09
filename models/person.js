const mongoose = require('mongoose');

//define the person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
    
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  work: {
    type: String,
    enum:['chef','waiter','manager'],
    required: true
  }, 
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    
  },
  salary: {
    type: Number,
    required: true  
}

});

//create the person model using the person schema
const Person = mongoose.model('Person', personSchema);

//export the person model
module.exports = Person;