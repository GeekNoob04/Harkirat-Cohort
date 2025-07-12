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
