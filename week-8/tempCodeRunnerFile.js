const axios = require("axios");
// fetch

// function main() {
//     fetch("https://dummyjson.com/todos").then(async (res) => {
//         const json = await res.json();
//         console.log(json.todos.length);
//     });
// }
// main();
async function main1() {
    const res = await fetch(
        "https://httpdump.app/dumps/f68fb89e-2567-4b92-aa13-84521247cce2",
        {
            method: "POST",
            body: {
                username: "harshit",
                password: "system",
            },
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );
    const json = await res.josn();
    console.log(json);
}
main1();

// axios

// async function main2() {
//     const res = await axios.post(
//         "https://httpdump.app/dumps/f68fb89e-2567-4b92-aa13-84521247cce2",
//         {
//             usernmae: "harshit",
//             password: "system",
//         },
//         {
//             headers: {
//                 Authorization: "Bearer 123",
//             },
//         }
//     );
//     console.log(res.data.todos.length);
// }
// main2();
