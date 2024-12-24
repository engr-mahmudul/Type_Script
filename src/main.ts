let a: number = 5;
let b: string = "Test";
let loading: boolean;
loading = true;
let age: number | string; //union type
age = 18;
age = "18";

let array_1: string[] = ["1", "2", "3"];
let array_2: (string | number)[] = [1, "2", "3"];
let array_3: (number | boolean)[] = [true, 0];

let obj_1: { a: number; b: number; c: string } = {
  a: 5,
  b: 6,
  c: "7",
};

// another way to declare an object
type data = {
  a: number;
  b: number;
  c?: (boolean | string)[];
};

let fetchedData: data = { a: 5, b: 5, c: [true, "1"] };

let secondData: data = { a: 5, b: 5 };
secondData.c = [true, "1"];

const newFun = (paramData: data) => {
  return 0;
};

// declare an object type using interface keyword. This is almost same as type keyword but this type name will be assiged without "=" sign

interface dataIn {
  a: number;
  b: number;
  c?: (boolean | string)[];
}

let interfaceData: dataIn = { a: 5, b: 5, c: [true, "1"] };

// Function in Type Script

const function1 = (value: number): void => {
  console.log(`This is function 1 with parameter:${value}`);
};
// console.log(function1(5))
const function2 = (a: number, b: number = 2): number => {
  return [a, b];
};
// console.log(function2(5));

const function3 = (message: string: never => {
  throw new Error(message);
};
function3("Something went wrong!");
