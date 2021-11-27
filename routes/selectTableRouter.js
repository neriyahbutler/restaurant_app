const { default: axios } = require("axios");
const router = require("express").Router();

const selectTableForm = require("../models/selectedTableModel")
const reservedTableHistoryForm = require('../models/tableReservedHistoryModel')

router.post("/", async (req, res) => {
    try {
        console.log("Select table page opened")
        const table = req.body.table

        const tableOptionDetails = await selectTableForm.findOne({table})
        console.log("The query returned is", tableOptionDetails)
        res.send(tableOptionDetails)
    } catch (err) {console.log(err.message)}
})

router.post("/options", async (req, res) => {
    try {
        const peopleSitting = req.body.peopleCount
        const date = req.body.date

        const tableOptions = await selectTableForm.find({})
        const unavailableTables = await reservedTableHistoryForm.find({})

        const query_results = {
            tableOptions : tableOptions,
            unavailableTables: unavailableTables
        }

        res.send(query_results)
    } catch(err) {console.log(err.message)}
})

module.exports = router;