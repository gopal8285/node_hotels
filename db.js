//phle mongodb se connect karne ke liye mongoose package ka use karenge

const mongoose = require('mongoose');

// define the mongodb connection URL
//2nd me database ka naam dena hai jisme data store karna hai , yaha maine hotels naam ka database banaya hai
const mongoURL = 'mongodb://localhost:27017/hotels';


// connect to the mongodb database
//3rd argument me options pass karna hai jisme useNewUrlParser aur useUnifiedTopology true set karna hai taki mongodb ke naye features ka use kar sake
mongoose.connect(mongoURL);

// get the mongodb connection object yeh db object is used to listen for events related to the mongodb connection
//4th step me db object ko export karna hai taki server.js me use kar sake

const db = mongoose.connection;



// event listeners for the mongodb connection
//5th step me db object ke events ko listen karna hai taki connection successful hai ya nahi pata chal sake
db.on('connected', () => {
  console.log('connected to mongodb database');
});

db.on('error', (err) => {
  console.error('error connecting to mongodb database:', err);
});

db.on('disconnected', () => {
  console.log('disconnected from mongodb database');
});


//6th step me db object ko export karna hai taki server.js me use kar sake
module.exports = db;
