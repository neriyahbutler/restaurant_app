const { default: axios } = require("axios");
const router = require("express").Router();

const holidayForm = require("../models/holidaysModel");

router.post("/holidaycheck", async (req, res) => {
    try {
        console.log("Running holiday check")
        const day_input = req.body.date

        const exact_date = day_input.substring(day_input.indexOf("-") + 1,
        day_input.indexOf("-") + 6);

        console.log('the exact date was', exact_date)

        const holidayCheck = await holidayForm.findOne({holiday_date: String(exact_date)})

        if (holidayCheck['_doc'].holiday_date === exact_date) {
            res.send({isHoliday: true})
        } else {
            res.send({isHoliday: false})
        }
    } catch (err) {
        console.log(err.message)
        res.send({isHoliday: false})
    }
})

module.exports = router;