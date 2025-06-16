const express = require("express");
const app = express();
app.use(express.json());

const zod = require("zod");
function ValidateSchema(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    });
    const response = schema.safeParse(obj);
    console.log(response);
}
ValidateSchema({
    email: "harshitbudhraja0@gmail.com",
    password: "12345678997",
});

app.post("/login", (req, res) => {
    const response = ValidateSchema(req.body);
    if (!response.success) {
        res.json({
            msg: "invalid i/p",
        });
        return;
    }
});
