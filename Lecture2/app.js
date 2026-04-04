"use strict";
// Object, Array, Tuple, Enum
// Objects
const person = {
    firstName: "Vishal",
    lastName: "Gupta",
    age: 24,
    xyz: {
        address: "Bareilly",
    },
    skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
};
// Arrays
let favoriteLanguage;
favoriteLanguage = ["Hindi", "English"];
let bioData;
bioData = ["Vishal Gupta", 12, true]; // Fixed array of two types 0 -> numbers, 1 -> string
// Tuple
const human = {
    name: "Aryan Gupta",
    age: 25,
    skills: ["Web Development", "App Development"],
    products: [11, "Windows"],
};
// Enum
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
const info = {
    name: "Harsh",
    age: 25,
    status: Status.Pending,
};
if (info.status === Status.Pending) {
    console.log("Pending....");
}
else if (info.status === Status.Approved) {
    console.log("Approved....");
}
else {
    console.log("Rejected....");
}
console.log(person.xyz.address);
console.log(person.skills);
console.log(person.firstName);
console.log(human.products);
