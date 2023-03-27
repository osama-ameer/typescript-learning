// 1st Class TypeScript

const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement ;
const button = document.querySelector("button")!;

function add(num1: number, num2:number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});


// Basic Types

// Number 1,2,-3
// String "Osama"
// Bolean true, false

let number : number ;
number = 1

let arr: string[]

arr = ["Apple", "Orange"]
arr.push("Mango")
arr.push()

let arr2: number[] = [1,2,3]
arr2.push()

