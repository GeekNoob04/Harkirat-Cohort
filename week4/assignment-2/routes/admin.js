// const { Router } = require("express");
// const adminMiddleware = require("../middleware/admin");
// const router = Router();
// const jwt = require("jsonwebtoken");
// const { jwt_secret } = require("../config");
// const { Course } = require("../db");
// const { Admin } = require("../db");
// // Admin Routes
// router.post("/signup", async (req, res) => {
//     // Implement admin signup logic
//     const username = req.body.username;
//     const password = req.body.password;
//     await Admin.create({
//         username: username,
//         password: password,
//     });
//     res.json({
//         msg: "admin created successfully",
//     });
// });

// router.post("/signin", async (req, res) => {
//     // Implement admin signup logic
//     const username = req.body.username;
//     const password = req.body.password;
//     const user = await Admin.find({
//         username,
//         password,
//     });
//     if (user) {
//         const token = jwt.sign({ username }, jwt_secret);
//         res.json({
//             token,
//         });
//     } else {
//         res.status(411).json({
//             msg: "incorrect credentials",
//         });
//     }
// });

// router.post("/courses", adminMiddleware, async (req, res) => {
//     // Implement course creation logic
//     const title = req.body.title;
//     const description = req.body.description;
//     const imageLink = req.body.imageLink;
//     const price = req.body.price;
//     const newCourse = await Course.create({
//         title,
//         description,
//         imageLink,
//         price,
//     });
//     res.json({
//         msg: "course created successfully ",
//         courseId: newCourse._id,
//     });
// });

// router.get("/courses", adminMiddleware, async (req, res) => {
//     // Implement fetching all courses logic
//     const response = await Course.find({});
//     res.json({
//         courses: response,
//     });
// });

// module.exports = router;
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../../assignment-1/db");
const { jwt } = require("zod/v4");
const { jwt_secret } = require("../config");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username,
        password,
    });
});

router.post("/signin", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = await Admin.find({ username, password });
    if (admin) {
        const token = jwt.sign({ username }, jwt_secret);
        res.json({
            token,
        });
    } else {
        res.status(411).json({
            msg: "incorrect credentials",
        });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const course = await Course.create({
        title,
        description,
        imageLink,
        price,
    });
    req.json({
        msg: "course created",
        courseId: course._id,
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        courses: response,
    });
});

module.exports = router;
