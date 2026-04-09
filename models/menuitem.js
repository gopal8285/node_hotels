const { truncateSync, appendFile } = require('fs');
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  

  taste: {
    type: String,
    required: true,
    enum: ['sweet', 'sour', 'spicy', 'bitter', 'salty']
  },
  is_drink: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String],
    default: []
  
  } ,
  num_sales: {
    type: Number,
    default: 0
  }
});



const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
    
 