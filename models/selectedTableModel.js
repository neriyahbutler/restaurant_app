const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    table: {type: String, required: true, unique: false, trim: true},
    peopleSitting: {type: Number, required: true, unique: false, trim: true}
});

const Form = mongoose.model("table_options", FormSchema);
module.exports = Form;