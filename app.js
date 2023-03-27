// 1st Class TypeScript
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var button = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
// Basic Types
// Number 1,2,-3
// String "Osama"
// Bolean true, false
var number;
number = 1;
var arr;
arr = ["Apple", "Orange"];
arr.push("Mango");
arr.push();
var arr2 = [1, 2, 3];
arr2.push();
