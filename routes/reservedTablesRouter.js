const { default: axios } = require("axios");
const router = require("express").Router();

const reservedTableForm = require("../models/accountTablesModel");
const reservedTableForm2 = require("../models/accountTablesFinalModel")

router.post("/", async (req, res) => {
    try {
        const email = req.body.email;

        const userTableHistory = await reservedTableForm2.find({email})
        console.log(userTableHistory)
        res.send(userTableHistory)
    } catch (err) {console.log(err.message)}
})

module.exports = router;