const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    User.create({
        username,
        password,
    });
    res.json({
        msg: "user created successfully",
    });
});

router.get("/courses", async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        course: response,
    });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router;
