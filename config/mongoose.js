//require the library
const mongoose = require('mongoose');

//connect to DB
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection (to check if it is successful)
const db=mongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));

//up and running then print the message
db.once('open', function() {
  // we're connected!
  console.log("successfully connected to DB");
});