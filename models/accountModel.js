const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    firstName: {type: String, required: true, unique: false, trim: true},
    lastName: {type: String, required: true, unique: false, trim: true},
    phoneNumber: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, trim: true},
    password: {type: String, required: true, unique: false, trim: true}
});

const Form = mongoose.model("account", FormSchema);
module.exports = Form;