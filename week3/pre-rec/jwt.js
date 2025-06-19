// const jwt = require("jsonwebtoken");

// /*
// 1. generate
// 2. decode
// 3. verify
// */

// const account = {
//     name: "harshit",
//     accountNum: 123443,
// };

// const token = jwt.sign(account, "secret");
// console.log(token);

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameRes = emailSchema.safeParse(username);
    const passwordRes = passwordSchema.safeParse(password);
    if (!usernameRes.success || !passwordRes.success) {
        return null;
    }
    const token = jwt.sign({ username }, jwtPassword);
    return token;
}

function verifyJwt(token) {
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (e) {
        return false;
    }
}

function decodeJwt(token) {
    return jwt.decode(token) ? true : false;
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
