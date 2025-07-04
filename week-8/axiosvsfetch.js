const axios = require("axios");
// fetch

// function main() {
//     fetch("https://dummyjson.com/todos").then(async (res) => {
//         const json = await res.json();
//         console.log(json.todos.length);
//     });
// }
// main();

// async function main1() {
//     const res = await fetch(
//         "https://httpdump.app/dumps/44d5e453-3f81-4a24-9f94-d7fa3ac1ab85",
//         {
//             method: "POST",
//             body: {
//                 username: "harshit",
//                 password: "system",
//             },
//             headers: {
//                 Authorization: "Bearer 123",
//             },
//         }
//     );
//     const json = await res.text();
//     console.log(json);
// }
// main1();

// axios

async function main2() {
    const res = await axios.post(
        "https://httpdump.app/dumps/44d5e453-3f81-4a24-9f94-d7fa3ac1ab85",
        {
            username: "harshit",
            password: "system",
        },
        {
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );
    console.log(res.data);
}
main2();
