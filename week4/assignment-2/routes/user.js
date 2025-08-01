const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../../assignment-1/db");
const { jwt } = require("zod/v4");
const { jwt_secret } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
        username,
        password,
    });
    res.json({
        msg: "user created",
    });
});

router.post("/signin", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({ username, password });
    if (user) {
        const token = jwt.sign({ username }, jwt_secret);
        res.json({
            token,
        });
    } else {
        res.status(403).json({
            msg: "unable to sign in",
        });
    }
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses,
    });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.body.username;
    const courseId = req.params.courseId;
    await User.updateOne(
        {
            username,
        },
        {
            $push: {
                purchasedCourses: courseId,
            },
        }
    );
    res.json({
        msg: "course purchased successful",
    });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({ username });
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses,
        },
    });
    res.json({
        msg: courses,
    });
});

module.exports = router;
