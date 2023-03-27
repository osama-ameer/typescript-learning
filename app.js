// // 1st Class TypeScript
var person = {
    name: "Osama",
    rollNo: 226,
    hobbies: ["Video Games"],
};
person.email = "test@test.com";
var persons = [];
persons.push({
    name: "New",
    rollNo: 301,
    hobbies: ["Cricket"],
    email: "test@test.com"
});
var add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};
console.log(add(10, 5, "subtract"));
