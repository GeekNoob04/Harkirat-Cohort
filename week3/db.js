// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// const jwtPassword = "123456";

// mongoose.connect("mongodb+srv://harshitbudhraja0:MongoKaPass@cluster0.nruhe7l.mongodb.net/");

// const User = mongoose.model("User", {
//     name: String,
//     username: String,
//     pasword: String,
// });

// const app = express();
// app.use(express.json());

// function userExists(username, password) {
//     // should check in the database
// }

// app.post("/signin", async function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (!userExists(username, password)) {
//         return res.status(403).json({
//             msg: "User doesnt exist in our in memory db",
//         });
//     }

//     var token = jwt.sign({ username: username }, "shhhhh");
//     return res.json({
//         token,
//     });
// });

// app.get("/users", function (req, res) {
//     const token = req.headers.authorization;
//     try {
//         const decoded = jwt.verify(token, jwtPassword);
//         const username = decoded.username;
//         // return a list of users other than this username from the database
//     } catch (err) {
//         return res.status(403).json({
//             msg: "Invalid token",
//         });
//     }
// });

// app.listen(3000);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
mongoose.connect(
    "mongodb+srv://harshitbudhraja0:MongoKaPass@cluster0.nruhe7l.mongodb.net/"
);
const User = mongoose.model("users", {
    name: String,
    email: String,
    password: String,
});

app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
        return res.status(400).send("user already exists");
    }
    res.json({
        msg: "account created successfully",
    });
});

const user = new User({
    name: "Harshit Budhraja",
    email: "harshitbudhraja0@gmail.com",
    password: "system",
});
user.save();

// kitty.save().then(() => console.log("meow"));
