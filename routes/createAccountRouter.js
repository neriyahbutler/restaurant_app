const { default: axios } = require("axios");

const router = require("express").Router();
const accountForm = require("../models/accountModel")

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
})

module.exports = router;