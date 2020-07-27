const mongoose = require('mongoose');

const userSchema = new mongoose.Schema();
const Data = mongoose.model('udemydatas', userSchema);

module.exports = Data;
