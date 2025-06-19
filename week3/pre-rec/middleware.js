const express = require("express");
const app = express();

const port = 3000;

function oldEnough(age) {
    if (age >= 14) {
        return true;
    } else {
        return false;
    }
}

function oldEnoughMiddlware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "You are not allowed",
        });
    }
}
app.use(oldEnoughMiddlware);

app.get("/ride1", (req, res) => {
    res.json({
        msg: "You are allowed",
    });
});

app.listen(port);
