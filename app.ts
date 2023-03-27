// // 1st Class TypeScript

// const input1 = document.getElementById("num1") as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement ;
// const button = document.querySelector("button")!;

// function add(num1: number, num2:number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });


// // Basic Types

// // Number 1,2,-3
// // String "Osama"
// // Bolean true, false

// let number : number ;
// number = 1

// let arr: string[]

// arr = ["Apple", "Orange"]
// arr.push("Mango")
// arr.push()

// let arr2: number[] = [1,2,3]
// arr2.push()



// Second Class

// Custom Types
type Person = {
    name: string;
    rollNo: number;
    hobbies: string[];
    email?: string
};

let person: Person = {
    name: "Osama",
    rollNo: 226,
    hobbies: ["Video Games"],
};
person.email = "test@test.com";

const persons: Person[] = [];
persons.push({
    name: "New",
    rollNo: 301,
    hobbies: ["Cricket"],
    email: "test@test.com"
});

// const add = function (val1: number, val2: number, cb: (x: string) => void): number {
//     cb("Hello");
//     return val1 + val2;
// };

// let func: (x: number, y: number, z: (x: string) => void) => number;

// func = add;

type Calc = "add" | "subtract" | "+" | "-";
const add = function (val1: number, val2: number, calc: Calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    } else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};

console.log(add(10, 5, "subtract"));

