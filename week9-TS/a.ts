function Sum(a: number, b: number): number {
    return a + b;
}
const sum = Sum(10, 20);
console.log(sum);

function greet(firstName: string, age: number) {
    console.log("Hello " + firstName + " your age is " + age);
}
greet("Harshit", 20);

function isLegal(age: number) {
    return age > 18 ? true : false;
}
const legal = isLegal(18);
console.log(legal);

function dusra(pehla: () => void) {
    setTimeout(pehla, 1000);
}
dusra(function () {
    console.log("hello sir ");
});
