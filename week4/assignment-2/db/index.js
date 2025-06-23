// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const { string, number } = require("zod/v4");
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(
//     "mongodb+srv://harshitbudhraja0:MongoKaPass@cluster0.nruhe7l.mongodb.net/"
// );

// // Define schemas
// const AdminSchema = new mongoose.Schema({
//     // Schema definition here
//     username: string,
//     password: string,
// });

// const UserSchema = new mongoose.Schema({
//     // Schema definition here
//     username: string,
//     password: string,
//     purchasedCourses: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Course",
//         },
//     ],
// });

// const CourseSchema = new mongoose.Schema({
//     // Schema definition here
//     title: string,
//     description: string,
//     imageLink: string,
//     price: number,
// });

// const Admin = mongoose.model("Admin", AdminSchema);
// const User = mongoose.model("User", UserSchema);
// const Course = mongoose.model("Course", CourseSchema);

// module.exports = {
//     Admin,
//     User,
//     Course,
// };
const mongoose = require("mongoose");
const { string } = require("zod/v4");

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://harshitbudhraja0:MongoKaPass@cluster0.nruhe7l.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: string,
    password: string,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: string,
    password: string,
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: string,
    description: string,
    imageLink: string,
    price: number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
};
