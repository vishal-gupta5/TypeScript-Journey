// Object, Array, Tuple, Enum

// Objects
const person: {
  firstName: string;
  lastName: string;
  age: number;
  xyz: {
    address: string;
  };
  skills: string[];
} = {
  firstName: "Vishal",
  lastName: "Gupta",
  age: 24,
  xyz: {
    address: "Bareilly",
  },
  skills: ["React.js", "Node.js", "MongoDB", "Express.js"],
};

// Arrays
let favoriteLanguage: string[];
favoriteLanguage = ["Hindi", "English"];

let bioData: any[];
bioData = ["Vishal Gupta", 12, true]; // Fixed array of two types 0 -> numbers, 1 -> string

// Tuple
const human: {
  name: string;
  age: number;
  skills: string[];
  products: [number, string]
} = {
  name: "Aryan Gupta",
  age: 25,
  skills: ["Web Development", "App Development"],
  products: [11, "Windows"]
};
 
console.log(person.xyz.address);
console.log(person.skills);
console.log(person.firstName);
