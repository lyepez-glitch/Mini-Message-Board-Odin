const express = require('express')

const app = express()
const port = 3000;
const path = require('path');
const msgRouter = require("./routes/msgRouter");
const messages = require('./model/messages');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/messages", msgRouter);



app.get("/", (req, res) => {
    console.log('messages', messages)
    res.render("index", { messages: messages });
});







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})