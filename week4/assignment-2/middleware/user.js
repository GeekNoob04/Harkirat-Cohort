// const { jwt_secret } = require("../config");
// function userMiddleware(req, res, next) {
//     // Implement user auth logic
//     // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
//     const token = req.headers.authorization;
//     const words = token.split(" ");
//     const jwtToken = words[1];
//     const decoded = jwt.verify(jwtToken, jwt_secret);
//     if (decoded.username) {
//         next();
//     } else {
//         res.status(403).json({
//             msg: "You are not authenticated",
//         });
//     }
// }

const { jwt } = require("zod/v4");
const { jwt_secret } = require("../config");

// module.exports = userMiddleware;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(" ")[1];
    const decoded = jwt.verify(jwtToken, jwt_secret);
    if (decoded) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not authenticated",
        });
    }
}

module.exports = userMiddleware;
