const { default: axios } = require("axios");

const Account = require("../models/accountModel")
const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const email_input = req.body.username
        const password_input = req.body.password

        const existingUser = await Account.findOne({email : email_input, password: password_input});

        if (existingUser) {
            console.log(`User account exists, id is ${existingUser.id}`)
            return res.send({
                token: existingUser.id,
                firstName: existingUser.firstName
            })
        }
        else {
            console.log("User account doesn't exists")
            return res.send({
                token: ""
            })
        }
    } catch (err) {console.log(err.message)}
})

module.exports = router;