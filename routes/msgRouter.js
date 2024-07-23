const { Router } = require("express");

const messages = require("../model/messages");
const msgRouter = Router();

msgRouter.get("/new", (req, res) => {
    console.log('form called in line 5')
    res.render("form", { edit: false })
});
msgRouter.get("/:user/edit", (req, res) => {
    console.log("params", req.params)
    const { user } = req.params;
    messages.forEach((msg) => {
        if (msg.user === user) {
            res.render("form", { message: msg, edit: true });
        }
    })
})
msgRouter.post("/new", (req, res) => {
    console.log("req body", req.body);
    const { author, msg } = req.body;
    messages.push({ text: msg, user: author, added: new Date() });
    res.redirect("/");
})

module.exports = msgRouter;