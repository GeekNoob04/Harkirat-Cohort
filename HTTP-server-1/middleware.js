const express = require("express");
const app = express();
const zod = require("zod");
const port = 3000;

// normal way

// app.get("/health-checkup", (req, res) => {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             msg: "incorrect kidney numbers",
//         });
//         return;
//     }
//     if (username != "harshit" || password != "system") {
//         res.status(403).json({
//             msg: "incorrect username or password",
//         });
//         return;
//     }
//     res.json({
//         msg: "health checkup successful",
//     });
// });
// app.listen(port);

// optimal way -> using middleware

// function userMiddlware(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if (username != "harshit" || password != "system") {
//         res.status(403).json({
//             msg: "incorrect username or password",
//         });
//     } else {
//         next();
//     }
// }
// function kidneyMiddlware(req, res, next) {
//     const kidneyId = req.query.kidneyId;
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             msg: "incorrect number of kidneys",
//         });
//     } else {
//         next();
//     }
// }

// app.get("/health-checkup", userMiddlware, kidneyMiddlware, (req, res) => {
//     res.json({
//         msg: "Your heart is healthy",
//     });
// });

// Input Validation
const schema = zod.array(zod.number());

const schema2 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number()),
});

app.use(express.json());

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "invalid inputs",
        });
    }
    res.send({
        response,
    });

    // const kidneylength = kidneys.length;
    // res.send("Your kidney length is " + kidneylength);
});

// app.use(function (err, req, res, next) {
//     res.json({
//         msg: "There was a problem with the server",
//     });
// });

app.listen(port);
