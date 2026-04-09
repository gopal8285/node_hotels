const express = require('express'); 
const router = express.Router(); // create a new router object using the express.Router() method

const MenuItem = require('../models/menuitem'); // import the menu item model from the models folder

// post route to add a menu item

router.post('/', async (req, res) => {
  try{
    const data = req.body; 
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved successfully:');
    res.status(201).json(response);

  }
  catch(err){
    console.error('Error saving menu item:', err);
    res.status(500).json({ error: 'Error saving menu item' });

  }
});

// get route to get all the menu items from the database
router.get('/', async (req, res) => {
  try{
    const data = await MenuItem.find();
    console.log('data fetched successfully:');
    res.status(200).json(data);

  }
  catch(err){
    console.error('Error fetching menu items:', err);
    res.status(500).json({ error: 'Error fetching menu items' });

  }
});

module.exports = router;

