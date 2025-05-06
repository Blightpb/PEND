//exercício 1
function sayHello() {
    console.log("Hello, world");
}

console.log("exercício 1:");
sayHello();

//exercício 2
function sum(a, b) {
    return a + b;
}

console.log("\nexercício 2:");
console.log(sum(5, 7));

//exercício 3
function localExample() {
    let message = "Variável local";
}

console.log("\nexercício 3:");
//console.log(message); ocorre um erro porque a variável está definida só dentro da função e ela não foi chamada junto da função

//exercício 4
function greet(name) {
    console.log("Hello, " + name + "!");
}

console.log("\nexercício 4:");
greet("brunão");
greet("sofia");

//exercício 5
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

console.log("\nexercício 5:");
console.log(calculateArea(2));

//exercício 6
function currentDate() {
    let today = new Date();
    console.log(today);
}

console.log("\nexercício 6:");
currentDate();

//exercício 7
let x = 10;
function shadowExample(x) {
    console.log(x);
}

console.log("\nexercício 7:");
console.log(x);
shadowExample(20);

//exercício 8

//exercício 9
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("\nexercício 9:")
console.log(toFahrenheit(25));
console.log(toCelsius(77));

//exercício 10 
function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("\nexercício 10:")
console.log(getMax([2, 4, 6, 8, 10]));

//exercício 11
function average(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

console.log("\nexercício 11:")
console.log(average([8, 7.5, 9, 10]));

//exercício 12
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log("\nexercício 12:")
console.log(fullName("joão", "lima"));
console.log(fullName("rafa", "diva"));

//exercício 13
function double(n) {
    return n * 2;
}

function quadruple(n) {
    return double(double(n));
}

console.log("\nexercício 13:")
console.log(quadruple(3)); 

//exercício 14
let mode = "light";

function toggleMode(mode) {
    let newMode = (mode === "light") ? "dark" : "light";
    console.log(newMode);
    return newMode;
}

console.log("\nexercício 14:")
console.log(mode);
toggleMode(mode);