const { default: axios } = require("axios");

const router = require("express").Router();
const accountForm = require("../models/accountModel")
const accountTablesModel = require("../models/accountTablesModel")
const accountTablesModel2 = require("../models/accountTablesFinalModel")

router.post("/newaccount", async (req, res) => {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const phoneNumber = req.body.phoneNumber
        const password = req.body.password

        const formInput = new accountForm({
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        })
        const formInputSaved = await formInput.save()
        console.log("Input uploaded to database")
    } catch(err) {console.log(err.message)}
})

router.get("/", async (req, res) => {
    console.log("Backend connected!")

    try {
        // const formInput = new accountTablesModel({
        //     email: "neri111@gmail.com",
        //     reserved_tables: {
        //         date: "10/09/2021",
        //         tables: [
        //             {
        //                 table: "1",
        //                 peopleSitting: 10
        //             },
        //             {
        //                 table: "2",
        //                 peopleSitting: 12
        //             },
        //             {
        //                 table: "3",
        //                 peopleSitting: 14
        //             }
        //         ]
        //     }
        // })

        // const formInputSaved = await formInput.save()

        const formInputUpdated = new accountTablesModel2({
            email: 'hi',
            reserved_tables: [
                {
                    date: '10/09/2021',
                    tables: [
                        {
                            table: 'Table 1',
                            peopleSitting: 10
                        },
                        {
                            table: 'Table 2',
                            peopleSitting: 11
                        },
                        {
                            table: 'Table 3',
                            peopleSitting: 12
                        }
                    ]
                },
                {
                    date: '10/10/2021',
                    tables: [
                        {
                            table: 'Table 4',
                            peopleSitting: 2
                        },
                        {
                            table: 'Table 5',
                            peopleSitting: 3
                        },
                        {
                            table: 'Table 6',
                            peopleSitting: 4
                        }
                    ]
                }

            ]
        })

        const formInputSaved = await formInputUpdated.save()
        console.log("Test data is uploaded into database")
    } catch(err) {console.log(err.message)}
})

router.post("/tabletest", async (req, res) => {
    try {
        // const formInput = new accountTablesModel({
        //     email: "neriyahb@gmail.com",
        //     reserved_tables: {
        //         date: "10/09/2021",
        //         tables: 
        //             [
        //                {
        //                     table: "Table 2",
        //                     peopleSitting: 12
        //                 }
        //         ]
        //     }
        // })

        const formInputUpdated = new accountTablesModel2({
            email: 'hi',
            reserved_tables: [
                {
                    date: '10/09/2021',
                    tables: [
                        {
                            table: 'Table 1',
                            peopleSitting: 10
                        },
                        {
                            table: 'Table 2',
                            peopleSitting: 11
                        },
                        {
                            table: 'Table 3',
                            peopleSitting: 12
                        }
                    ]
                },
                {
                    date: '10/10/2021',
                    tables: [
                        {
                            table: 'Table 4',
                            peopleSitting: 2
                        },
                        {
                            table: 'Table 5',
                            peopleSitting: 3
                        },
                        {
                            table: 'Table 6',
                            peopleSitting: 4
                        }
                    ]
                }

            ]
        })

        const formInputSaved = await formInputUpdated.save()
        console.log("Test data is uploaded into database")
    } catch(err) {console.log(err.message)}
})

module.exports = router;