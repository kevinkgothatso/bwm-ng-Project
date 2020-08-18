const mongoose = require('mongoose');
const schema = mongoose.Schema;

const rentalSchema = new schema({
   title: {type: String, required: true, max: [128,"Too long, only 128 words allowed"]},
   city: {type: String,required: true, lowercase:true},
   street: {type: String,required: true, min: [10,'Too long']},
   category: {type: String,required: true, lowercase:true},
   image: {type: String,required: true},
   bedrooms: Number,
   shared: Boolean,
   description: {type: String,required: true},
   dailyRate: Number,
   createddAt: {type: Date,default: Date.now}
});
module.exports = mongoose.model('Rental', rentalSchema);