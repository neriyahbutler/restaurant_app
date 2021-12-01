const { default: axios } = require("axios");
const router = require("express").Router();

const ReservedTablesForm = require("../models/tableReservedHistoryModel");
const AccountsTablesReservedForm = require("../models/accountTablesFinalModel");

router.post("/submit", async (req, res) => {
    try {
        console.log("Working on submission")

        console.log("State equals =", req.body)

        req.body.tables.forEach(element => {
            uploadTable(req.body.date, element)
        });

        const emailCheck = await AccountsTablesReservedForm.findOne({email: req.body.email})

        if (emailCheck === null || emailCheck === []) {
            var temp_tables = []

            req.body.tables.forEach(element => {
                var temp_json = {
                    table: `Table ${element}`,
                    peopleSitting: 2
                }

                temp_tables.push(temp_json)
            })

            console.log("Array generted =", temp_tables)

            const newUserInput = new AccountsTablesReservedForm({
                email: req.body.email,
                reserved_tables: [
                    {
                        date: req.body.date,
                        tables: temp_tables
                    }
                ]
            })

            const UserInputUpload = await newUserInput.save()
        }


        console.log("Added table to db")
        res.send("Done")
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
})

const uploadTable = async (date, num) => {
    const tableUsedInput = new ReservedTablesForm({
        date: date,
        table: `Table ${num}`
    })

    const TableInputUpload = await tableUsedInput.save()
    console.log(`Uploaded Table ${num} with date ${date}`)
}

module.exports = router;