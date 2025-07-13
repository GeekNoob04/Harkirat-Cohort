function Sum(a: number, b: number): number {
    return a + b;
}
const sum = Sum(10, 20);
console.log(sum);

function greet(firstName: string, age: number) {
    console.log("Hello " + firstName + " your age is " + age);
}
greet("Harshit", 20);

// function isLegal(age: number) {
//     return age > 18 ? true : false;
// }
// const legal = isLegal(18);
// console.log(legal);

function dusra(pehla: () => void) {
    setTimeout(pehla, 1000);
}
dusra(function () {
    console.log("hello sir ");
});
/*
function isLegal(user: { firstName: string; lastName: string; age: number }) {
    return user.age > 18 ? true : false;
}
isLegal({
    firstName: "Harshit",
    lastName: "Budhraja",
    age: 20,
});
*/ // this is voilating the DRY rule
// instead:

isLegal({
    firstName: "Harshit",
    lastName: "Budhraja",
    age: 20,
});

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}
function isLegal(user: User) {
    return user.age > 18 ? true : false;
}
type User1 = {
    firstName: string;
    lastName: string;
    age: number;
};

type printIdArgs = number | string;
function printId(id: printIdArgs) {}

type Employeee = {
    username: string;
    password: string;
};

type Manager = {
    phone: number;
    age: number;
};
type Techlead = Employeee & Manager;
const lead: Techlead = {
    username: "harshit",
    password: "ihcio",
    age: 20,
    phone: 81238979818,
};

// step-8 arrays
type numArray = number[];
function maxValue(arr: numArray) {
    let maxi = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxi) {
            maxi = arr[i];
        }
        return maxi;
    }
}
const ans = maxValue([1, 2, 3]);
console.log(ans);

interface User {
    firstName: string;
    lastName: string;
    age: number;
}
function filterAge(users: User[]) {
    return users.filter((user) => user.age > 18);
}
const myage = filterAge([
    {
        firstName: "Harshit",
        lastName: "Budhraja",
        age: 20,
    },
]);

// ENUMS
enum KeyInput {
    Up = 1,
    Down,
    Left,
    Right,
}
function doSmth(keyPressed: KeyInput) {
    if (keyPressed == KeyInput.Up) {
        console.log("UP");
    } else if (keyPressed == KeyInput.Down) {
        console.log("Down");
    } else if (keyPressed == KeyInput.Right) {
        console.log("Right");
    } else if (keyPressed == KeyInput.Left) {
        console.log("Left");
    }
}

doSmth(KeyInput.Down);
doSmth(KeyInput.Up);
doSmth(KeyInput.Right);
doSmth(KeyInput.Left);
// enum in express
import express from "express";
const app = express();

enum statusCodes {
    Success = 200,
    NotFound = 404,
    Error = 500,
}
app.get("/", (req, res) => {
    res.status(statusCodes.Success).json({
        msg: "Sucessfull",
    });
});

// step-10 Generics
function maxFirst<T>(arr: T[]) {
    return arr[0];
}
const result = maxFirst(["Harshit", "Budhraja"]);
const result2 = maxFirst<number>([1, 2, 3]);
const result3 = maxFirst<boolean>([true, false]);
console.log(result.toUpperCase());
console.log(result2);
console.log(result3);

