const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    table: {type: String, required: true, unique: false, trim: true},
    peopleSitting: {type: Number, required: true}
});

const SubFormSchema = new mongoose.Schema({
    date: {type: String, required: true, unique: false, trim: true},
    tables: [TableSchema]
});

const FormSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, trim: true},
    reserved_tables: [SubFormSchema]
});

const Form = mongoose.model('accountsTablesReserved_v2', FormSchema);
module.exports = Form;