// Require Mongoose
const mongoose = require('mongoose');

//Define a Schema
const Schema = mongoose.Schema;

const Data_schema = new Schema ({
    id: String,
    name: String,
    age: String,
});

module.exports = mongoose.model('Data', Data_schema);