const express = require('express');
const Mongoose = require('mongoose');
const fakeDb = require('./fake-db');
const config = require('./config/dev');

Mongoose.connect(config.uri,{ useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{
    const fakeDbx = new fakeDb();
    fakeDbx.seedDB();
});
const app = express();

app.get('/rentals', function(req,res){
  res.json({"success": true});
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
      console.log('i am running');
});
 



