// const { Admin } = require("../db/index");

// // Middleware for handling auth
// function adminMiddleware(req, res, next) {
//     // Implement admin auth logic
//     // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
//     const username = req.headers.username;
//     const password = req.headers.password;
//     Admin.findOne({
//         username: username,
//         password: password,
//     }).then(function (value) {
//         if (value) {
//             next();
//         } else {
//             res.status(404).json({
//                 msg: "admin does not exist",
//             });
//         }
//     });
// }

// module.exports = adminMiddleware;

const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = Admin.findOne({
        username,
        password,
    });
    if (admin) {
        next();
    } else {
        res.status(404).json({
            msg: "admin does not exist",
        });
    }
}

module.exports = adminMiddleware;
