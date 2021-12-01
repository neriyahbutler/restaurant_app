global.TextEncoder = require('util').TextEncoder
global.TextDecoder = require('util').TextDecoder

const express = require("express")
const cors = require('cors');
const app = express()
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use(express.json());
app.use(cors())

const uri = "mongodb+srv://user123:user123@cluster0.u358x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use("/tablequery/", require("./routes/tableQueryRouter"))
app.use("/newaccount/", require("./routes/createAccountRouter"))
app.use("/createaccount/", require("./routes/createAccountRouter"))
app.use("/signin/", require("./routes/signinRouter"))
app.use("/reservedtable/", require("./routes/reservedTablesRouter"))
app.use("/selecttables/", require("./routes/selectTableRouter"))
app.use("/paymentpage/", require("./routes/paymentPageRouter"))
module.exports = app;