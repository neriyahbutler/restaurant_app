const mongoose = require('mongoose');

const HolidaySchema = new mongoose.Schema({
    holiday_name: {type: String, required: true, unique: false, trim: true},
    holiday_date: {type: String, required: true, unique: false, trim: true},
    price_change: {type: Number, required: true, unique: false, trim: true},
});

const Form = mongoose.model('holidays', HolidaySchema);
module.exports = Form;