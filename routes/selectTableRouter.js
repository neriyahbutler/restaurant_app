const { default: axios } = require("axios");
const router = require("express").Router();

const selectTableForm = require("../models/selectedTableModel")

router.post("/", async (req, res) => {
    try {
        console.log("Select table page opened")
        const table = req.body.table

        const tableOptionDetails = await selectTableForm.findOne({table})
        console.log("The query returned is", tableOptionDetails)
        res.send(tableOptionDetails)
    } catch (err) {console.log(err.message)}
})

module.exports = router;