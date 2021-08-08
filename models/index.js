const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/vampiredb';

// Fire off the connection to Mongo DB
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

  // Export the Vampire model
  module.exports = {
      Vampire: require('./vampire.js')
  }