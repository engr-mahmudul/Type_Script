let a: number = 5
let b: string = "Test"
let loading: boolean;
loading = true
let age: number | string; //union type
age = 18
age = "18"

let array_1: string[] = ["1","2","3"]
let array_2:(string | number)[] = [1,"2","3"]
let array_3: (number | boolean) [] = [true,0]

let obj_1: {a:number,b:number, c: string} = {
    a:5,
    b:6,
    c: '7'
}