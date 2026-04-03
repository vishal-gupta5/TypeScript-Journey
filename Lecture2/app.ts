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


console.log(person.firstName);
