const mongoose = require('mongoose');

const tableReservedHistorySchema = new mongoose.Schema({
    date: {type: String, required: true, unique: false, trim: true},
    table: {type: String, required: true, unique: false, trim: true}
});

const Form = mongoose.model('reservedtable-history', tableReservedHistorySchema);
module.exports = Form;