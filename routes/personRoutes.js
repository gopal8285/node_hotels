const express = require('express'); 
const router = express.Router(); 

const Person = require('./../models/person');

// post route to add a person 


router.post('/', async (req, res) => { 
   try{
    const data = req.body; // data is the object that we are sending from the client side in the request body

    const newPerson = new Person(data); // create a new person object using the data from the request body

    const response = await newPerson.save() // save the person object to the database
    console.log('data saved successfully:');
    res.status(201).json(response); // send the response back to the client with status code 201 (created) and the saved person object in json format 

   }
   catch(err){
    console.error('Error saving person:', err);
    res.status(500).json({ error: 'Error saving person' });

   }

});


// get route to get all the persons from the database

router.get('/', async (req, res) => {
  try{
    const data = await Person.find(); // find all the persons in the database and return them as an array of objects
    console.log('data fetched successfully:');
    res.status(200).json(data); // send the response back to the client with status code 200 (ok) and the array of persons in json format 


  }
  catch(err){
    console.error('Error fetching persons:', err);
    res.status(500).json({ error: 'Error fetching persons' });


  }
});

//parameterize api calls for work 

router.get('/:workType', async (req, res) => {
  try{
    const workType = req.params.workType; // get the work type from the request parameters
    if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){ // check if the work type is valid
      const response = await Person.find({ work: workType });
      console.log('data fetched successfully:');
      res.status(200).json(response); // send the response back to the client with status code 200 (ok) and the array of persons in json format 
    }else{
      res.status(400).json({ error: 'Invalid work type' });
    }

  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: 'Error hogya' });

  }

  



});

// update operation on crud -PUT request to update a person by id ALSO USE PATCH REQUEST TO UPDATE by id (mix of get and post request)

router.put('/:id', async (req, res) => {
  try{
    const personId = req.params.id; // get the id from the request parameters
    const updatedPersonData = req.body; // get the updated data from the request body  
    const response = await Person.findByIdAndUpdate(personId, updatedPersonData, { new: true,
      runValidators: true, // run the validators defined in the person model to ensure that the updated data is valid 
     }); // find the person by id and update it with the new data, return the updated person object

    if(!response){ // if the person with the given id is not found, return a 404 error
      return res.status(404).json({ error: 'Person not found' });
    }
     

    console.log('data updated successfully:');
    res.status(200).json(response); // send the response back to the client with status code 200 (ok) and the updated person object in json format
    
    
  }
  catch(err){
    console.log(err);
    res.status(500).json({ error: 'interal error updating person' });

  }



});


router.delete('/:id', async (req, res) => {
  try{
    const personId = req.params.id; // get the id from the request parameters
    const response = await Person.findByIdAndRemove(personId); // find the person by id and delete it from the database

    if(!response){ 
      return res.status(404).json({ error: 'Person not found' });
    } 
    console.log('data deleted successfully:');
    res.status(200).json({ message: 'Person deleted successfully' });

  } catch(err){
    console.log(err);
    res.status(500).json({ error: 'internal error deleting person' });

  }

}); 






8





 
module.exports = router;
