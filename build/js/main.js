"use strict";
let a = 5;
let b = "Test";
let loading;
loading = true;
let age; //union type
age = 18;
age = "18";
let array_1 = ["1", "2", "3"];
let array_2 = [1, "2", "3"];
let array_3 = [true, 0];
let obj_1 = {
    a: 5,
    b: 6,
    c: "7",
};
let fetchedData = { a: 5, b: 5, c: [true, "1"] };
let secondData = { a: 5, b: 5 };
secondData.c = [true, "1"];
const newFun = (paramData) => {
    return 0;
};
let interfaceData = { a: 5, b: 5, c: [true, "1"] };
// Function in Type Script
const function1 = (value) => {
    console.log(`This is function 1 with parameter:${value}`);
};
// console.log(function1(5))
const function2 = (a, b = 2) => {
    return [a, b];
};
// console.log(function2(5));
const function3 = (message, never) => {
    throw new Error(message);
};
function3("Something went wrong!");
